import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Spacer } from "@nextui-org/spacer";
import { Switch } from "@nextui-org/switch";
import { Dispatch } from "react";

import { FaSearch } from "@/components/icons";

export function ShopListPanel({
    selectors,
    setSearchQuery,
}: {
    selectors: {
        organization: Object;
        locations: Object;
        order: Object;
        reverse: Object;
        fuzzy: Object;
        size: Object;
    };
    setSearchQuery: Dispatch<string>;
}) {
    return (
        <section className=" flex flex-row flex-wrap pb-2">
            <div className="w-[50%] flex-grow bg-transparent px-4 pb-3">
                <div>
                    <h4 className="text-2xl">絞り込み</h4>
                </div>

                <Divider className="my-2" />

                <div className="grid gap-4 [grid-template-columns:min-content_min-content] [grid-template-rows:auto_auto]">
                    <div className="col-span-3 lg:col-span-2 lg:col-start-3">
                        <Input
                            aria-label="Search"
                            className="w-full"
                            classNames={{
                                inputWrapper: "bg-default-100",
                                input: "text-sm",
                            }}
                            placeholder="Search..."
                            startContent={
                                <FaSearch className="pointer-events-none flex-shrink-0 text-base text-default-400" />
                            }
                            type="search"
                            onValueChange={setSearchQuery}
                        />

                        <Spacer y={2} />

                        <Switch size="sm" {...selectors.fuzzy}>
                            あいまい検索
                        </Switch>
                    </div>

                    <CheckboxGroup
                        label="ORGANIZATION"
                        {...selectors.organization}
                        className="w-32 lg:col-start-1 lg:row-start-1"
                    >
                        <Checkbox value="1st">1年生</Checkbox>
                        <Checkbox value="2nd">2年生</Checkbox>
                        <Checkbox value="3rd">3年生</Checkbox>
                        <Checkbox value="club">部活動</Checkbox>
                        <Checkbox value="">その他</Checkbox>
                        <Divider />
                        <Checkbox value="all">全て</Checkbox>
                    </CheckboxGroup>

                    <CheckboxGroup
                        className="w-24 lg:col-start-2 lg:row-start-1"
                        label="LOCATION"
                        {...selectors.locations}
                    >
                        <Checkbox value="1f">本棟1階</Checkbox>
                        <Checkbox value="2f">本棟2階</Checkbox>
                        <Checkbox value="3f">本棟3階</Checkbox>
                        <Checkbox value="outdoor">屋外</Checkbox>
                        <Checkbox value="">その他</Checkbox>
                        <Divider />
                        <Checkbox value="all">全て</Checkbox>
                    </CheckboxGroup>
                </div>
            </div>

            <div className="w-full px-4 sm:w-fit lg:w-96">
                <div className="pb-3">
                    <div>
                        <h4 className="text-2xl">並び替え</h4>
                    </div>

                    <Divider className="my-2" />

                    <div className="flex flex-row items-start gap-4">
                        <RadioGroup
                            className="w-28"
                            label="SORT"
                            {...selectors.order}
                        >
                            <Radio value="index">掲載順</Radio>
                            <Radio value="id">ID 順</Radio>
                            <Radio value="name">ブース名順</Radio>
                            <Radio value="search">検索一致順</Radio>
                        </RadioGroup>

                        <div className="w-20">
                            <p className="text-default-500">REVERSE</p>
                            <Spacer y={2} />
                            <Switch {...selectors.reverse} size="sm">
                                降順
                            </Switch>
                        </div>
                    </div>
                </div>

                <div className="pb-3">
                    <div>
                        <h4 className="text-2xl">表示</h4>
                    </div>

                    <Divider className="my-2" />

                    <div className="flex flex-row items-start gap-4">
                        <RadioGroup
                            className="w-max"
                            label="SIZE"
                            orientation="horizontal"
                            {...selectors.size}
                        >
                            <Radio value="0">小</Radio>
                            <Radio value="1">中</Radio>
                            <Radio value="2">大</Radio>
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </section>
    );
}
