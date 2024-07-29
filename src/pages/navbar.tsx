import {
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { useCallback, useState } from "react";

import ChangeLog from "./change-log";

import Hashlink from "@/components/hashlink";
import { Logo } from "@/components/icons";
import { OpacitySlider } from "@/components/opacity-slider";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleIsMenuOpen = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen, setIsMenuOpen]);

    const setMenuClosed = useCallback(() => {
        setIsMenuOpen(false);
    }, [setIsMenuOpen]);

    // const searchInput = (
    //     <Input
    //         aria-label="Search"
    //         classNames={{
    //             inputWrapper: "bg-default-100",
    //             input: "text-sm",
    //         }}
    //         endContent={
    //             <Kbd className="hidden lg:inline-block" keys={["command"]}>
    //                 K
    //             </Kbd>
    //         }
    //         labelPlacement="outside"
    //         placeholder="Search..."
    //         startContent={
    //             <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
    //         }
    //         type="search"
    //     />
    // );

    return (
        <NextUINavbar
            height={`${siteConfig.navbarHeight}px`}
            isMenuOpen={isMenuOpen}
            maxWidth="2xl"
            position="sticky"
            onMenuOpenChange={toggleIsMenuOpen}
        >
            <NavbarBrand className="min-w-max max-w-fit gap-3">
                <Hashlink
                    className="flex items-center justify-start gap-1"
                    color="foreground"
                    to="#head"
                    onClick={setMenuClosed}
                >
                    <Logo />
                </Hashlink>
            </NavbarBrand>

            <NavbarContent
                className="ml-2 hidden basis-1/6 justify-start gap-6 sm:basis-full md:flex"
                justify="start"
            >
                {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <Hashlink color="foreground" to={item.href}>
                            <span
                                className="hashlink"
                                style={{
                                    fontFamily: "Kode Mono",
                                }}
                            >
                                {item.label}
                            </span>
                        </Hashlink>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent
                className="hidden basis-1/5 md:flex md:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden gap-2 md:flex">
                    <ChangeLog />
                    <ThemeSwitch />
                    <OpacitySlider />
                    {/* <Link isExternal href={siteConfig.links.discord}>
                        <DiscordIcon className="text-default-500" />
                    </Link> */}
                    {/* <Link isExternal href={siteConfig.links.github}>
                        <FaGithub className="text-default-500" size={22} />
                    </Link> */}
                </NavbarItem>
                {/* <NavbarItem className="hidden lg:flex">
                    {searchInput}
                </NavbarItem> */}
                {/* <NavbarItem className="hidden md:flex">
                    <Button
                        isExternal
                        as={Link}
                        className="text-sm font-normal text-default-600 bg-default-100"
                        href={siteConfig.links.sponsor}
                        startContent={
                            <HeartFilledIcon className="text-danger" />
                        }
                        variant="flat"
                    >
                        Sponsor
                    </Button>
                </NavbarItem> */}
            </NavbarContent>

            <NavbarContent
                className="basis-1 gap-2 pl-4 md:hidden"
                justify="end"
            >
                <NavbarItem>
                    <ChangeLog />
                </NavbarItem>

                <NavbarItem>
                    <ThemeSwitch />
                </NavbarItem>

                <NavbarItem>
                    <OpacitySlider className="hidden xs:block" />
                </NavbarItem>

                <NavbarItem>
                    <NavbarMenuToggle />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem key="opacity-slider" className="mb-1 ml-2 mt-2">
                    <OpacitySlider className="block xs:hidden" />
                </NavbarMenuItem>
                {/* {searchInput} */}
                {siteConfig.navItems.map((item, index) => (
                    <NavbarMenuItem
                        key={`${item}-${index}`}
                        className="ml-4 mt-1"
                    >
                        <Hashlink
                            color="foreground"
                            to={item.href}
                            onClick={setMenuClosed}
                        >
                            <span
                                className="hashlink"
                                style={{ fontFamily: "Kode Mono" }}
                            >
                                {item.label}
                            </span>
                        </Hashlink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    );
}
