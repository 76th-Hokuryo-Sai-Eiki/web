import { execSync } from "child_process";
import { Console } from "console";
import fs from "fs/promises";
import { stdout } from "process";

import { compareVersions } from "compare-versions";
import { sha256 } from "js-sha256";

const console = new Console(stdout);

const filePath = "./licenses-list.json";

const ret = execSync(
    `license-checker --production --json --excludePrivatePackages > ${filePath}`,
);

if (ret.error) {
    console.error("Error " + JSON.stringify(ret.error, null, 4));
    process.exit(1);
}

const licenses = JSON.parse(await fs.readFile(filePath, "utf8"));
const licenseKeys = Object.keys(licenses);
const newLicenses = {};
const versions = {};

licenseKeys.forEach((key) => {
    const license = licenses[key];
    const path = license.licenseFile;

    delete license.path;
    // delete license.licenseFile;

    const tmp = key.match(/(.+)@(.+)$/);
    const name = tmp[1];
    const version = tmp[2];

    license.hash = sha256(name);

    if (!versions.hasOwnProperty(name)) {
        newLicenses[key] = license;
        versions[name] = version;
        (async () => {
            fs.writeFile(
                `public/licenses/${license.hash}.txt`,
                await fs.readFile(path),
            );
        })();
    } else if (compareVersions(versions[name], version) < 1) {
        delete newLicenses[name + "@" + versions[name]];
        newLicenses[key] = license;
        versions[name] = version;
    }
});

fs.writeFile(filePath, JSON.stringify(newLicenses, null, 4));
