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
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand className="max-w-fit gap-3">
                    <Hashlink
                        className="flex items-center justify-start gap-1"
                        color="foreground"
                        to="#head"
                        onClick={setMenuClosed}
                    >
                        <Logo />
                    </Hashlink>
                </NavbarBrand>
                <div className="ml-2 hidden justify-start gap-6 md:flex">
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
                </div>
            </NavbarContent>

            <NavbarContent
                className="hidden basis-1/5 md:flex md:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden gap-2 md:flex">
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

            <NavbarContent className="basis-1 pl-4 md:hidden" justify="end">
                <ThemeSwitch />
                <OpacitySlider className="hidden xs:block" />
                {/* <Link isExternal href={siteConfig.links.github}>
                    <FaGithub className="text-default-500" size={22} />
                </Link> */}
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <OpacitySlider className="block xs:hidden" />
                {/* {searchInput} */}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
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
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
}
