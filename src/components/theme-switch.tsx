import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { useCallback, useContext } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa6";

import { PagePreferenceContext } from "@/context/page-preference";
import { ThemeContext } from "@/context/theme";
import { getOppositeTheme } from "@/functions/theme";

export interface ThemeSwitchProps {
    className?: string;
    classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch = ({ className, classNames }: ThemeSwitchProps) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { loadOpacity, setOpacity } = useContext(PagePreferenceContext);

    const onChange = useCallback(() => {
        const nextTheme = getOppositeTheme(theme);
        const opacity = loadOpacity(nextTheme);

        toggleTheme();

        setOpacity(opacity, nextTheme);
    }, [toggleTheme, theme, loadOpacity, setOpacity]);

    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch({
        isSelected: theme === "light",
        onChange,
    });

    return (
        <Component
            {...getBaseProps({
                className: clsx(
                    "px-px transition-opacity hover:opacity-80 cursor-pointer",
                    className,
                    classNames?.base,
                ),
            })}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <div
                {...getWrapperProps()}
                className={slots.wrapper({
                    class: clsx(
                        [
                            "h-auto w-auto",
                            "bg-transparent",
                            "rounded-lg",
                            "flex items-center justify-center",
                            "group-data-[selected=true]:bg-transparent",
                            "!text-default-500",
                            "pt-px",
                            "px-0",
                            "mx-0",
                        ],
                        classNames?.wrapper,
                    ),
                })}
            >
                {isSelected ? (
                    <FaMoon size={22} />
                ) : (
                    <BsFillSunFill size={22} />
                )}
            </div>
        </Component>
    );
};
