import {
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/dropdown";
import { useCallback, useState } from "react";

import ChangeLog from "./change-log";

import Hashlink from "@/components/hashlink";
import { FaChevronDown, Logo } from "@/components/icons";
import { OpacitySlider } from "@/components/opacity-slider";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Phrase } from "@/components/inline";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleIsMenuOpen = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen, setIsMenuOpen]);

    const setMenuClosed = useCallback(() => {
        setIsMenuOpen(false);
    }, [setIsMenuOpen]);

    return (
        <NextUINavbar
            height={`${siteConfig.navbarHeight}px`}
            isMenuOpen={isMenuOpen}
            maxWidth="2xl"
            position="sticky"
            onMenuOpenChange={toggleIsMenuOpen}
        >
            <NavbarContent className="max-w-min" justify="start">
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
            </NavbarContent>

            <NavbarContent
                className="ml-2 hidden justify-start gap-6 lg:flex"
                justify="start"
            >
                {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        {typeof item.href === "string" ? (
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
                        ) : (
                            <Dropdown className="bg-transparent shadow-none">
                                <NavbarItem>
                                    <DropdownTrigger>
                                        <span
                                            className="bg-transparent p-0 text-medium data-[hover=true]:bg-transparent"
                                            style={{ fontFamily: "Kode Mono" }}
                                        >
                                            <span className="hashlink inline-block">
                                                {item.label}
                                                <Phrase className="ml-2">
                                                    <FaChevronDown size={12} />
                                                </Phrase>
                                            </span>
                                        </span>
                                    </DropdownTrigger>
                                </NavbarItem>

                                <DropdownMenu
                                    variant="shadow "
                                    aria-label="Content"
                                    className="w-30 ml-10 rounded-md bg-default-50"
                                    itemClasses={{
                                        base: "gap-4 ml-2",
                                    }}
                                >
                                    {item.details.map((item) => (
                                        <DropdownItem key={item.href}>
                                            <Hashlink
                                                color="foreground"
                                                to={item.href}
                                            >
                                                <span
                                                    className="hashlink w-fit"
                                                    style={{
                                                        fontFamily: "Kode Mono",
                                                    }}
                                                >
                                                    {item.label}
                                                </span>
                                            </Hashlink>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        )}
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent
                className="hidden basis-1/5 lg:flex lg:basis-full"
                justify="end"
            >
                <NavbarItem>
                    <ChangeLog />
                </NavbarItem>

                <NavbarItem className="h-full">
                    <ThemeSwitch className="h-full" />
                </NavbarItem>

                <NavbarItem>
                    <OpacitySlider />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent
                className="basis-1 gap-2 pl-4 lg:hidden"
                justify="end"
            >
                <NavbarItem>
                    <ChangeLog />
                </NavbarItem>

                <NavbarItem className="h-full">
                    <ThemeSwitch className="h-full" />
                </NavbarItem>

                <NavbarItem>
                    <OpacitySlider className="hidden xs:block" />
                </NavbarItem>

                <NavbarItem className="h-full">
                    <NavbarMenuToggle />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem key="opacity-slider" className="mb-1 ml-2 mt-2">
                    <OpacitySlider className="block xs:hidden" />
                </NavbarMenuItem>

                {siteConfig.navItems.map((item, index) =>
                    typeof item.href === "string" ? (
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
                    ) : (
                        item.details.map((item) => (
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
                        ))
                    ),
                )}
            </NavbarMenu>
        </NextUINavbar>
    );
}
