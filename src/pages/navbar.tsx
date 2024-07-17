import { Link } from "@nextui-org/link";
import {
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { useState, useCallback } from "react";
import { FaGithub } from "react-icons/fa6";

import HashLink from "../components/hash-link";

import { Logo, XTwitterIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleIsMenuOpen = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen, setIsMenuOpen]);

    const setMenuClosed = useCallback(() => {
        setIsMenuOpen(!false);
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
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand className="gap-3 max-w-fit">
                    <HashLink
                        className="flex justify-start items-center gap-1"
                        color="foreground"
                        onClick={setMenuClosed}
                        to="#head"
                    >
                        <Logo />
                    </HashLink>
                </NavbarBrand>
                <div className="hidden md:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <HashLink color="foreground" to={item.href}>
                                <span style={{ fontFamily: "Kode Mono" }}>
                                    {item.label}
                                </span>
                            </HashLink>
                        </NavbarItem>
                    ))}
                </div>
            </NavbarContent>

            <NavbarContent
                className="hidden md:flex basis-1/5 md:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden md:flex gap-2">
                    <ThemeSwitch />
                    <Link isExternal href={siteConfig.links.twitter}>
                        <XTwitterIcon className="text-default-500" size={22} />
                    </Link>
                    {/* <Link isExternal href={siteConfig.links.discord}>
                        <DiscordIcon className="text-default-500" />
                    </Link> */}
                    <Link isExternal href={siteConfig.links.github}>
                        <FaGithub className="text-default-500" size={22} />
                    </Link>
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

            <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
                <ThemeSwitch />
                <Link isExternal href={siteConfig.links.twitter}>
                    <XTwitterIcon className="text-default-500" size={22} />
                </Link>
                <Link isExternal href={siteConfig.links.github}>
                    <FaGithub className="text-default-500" size={22} />
                </Link>
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                {/* {searchInput} */}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <HashLink
                                color="foreground"
                                to={item.href}
                                onClick={setMenuClosed}
                            >
                                <span style={{ fontFamily: "Kode Mono" }}>
                                    {item.label}
                                </span>
                            </HashLink>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
}
