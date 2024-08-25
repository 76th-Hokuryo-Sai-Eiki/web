import { LicenseInfo } from ".";

const url = "./licenses/list.json";

export default (() => {
    return fetch(url, { cache: "force-cache" }).then((e) => {
        const data = e.json();

        return data;
    });
})() as Promise<Record<string, LicenseInfo>>;
