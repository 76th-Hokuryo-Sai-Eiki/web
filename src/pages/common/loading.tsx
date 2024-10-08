import { useEffect } from "react";
import styled from "styled-components";
import { useCountdown } from "usehooks-ts";

import { Fadein } from "@/components/animations";
import { TimeDisplay } from "@/components/time-display";
import { siteConfig } from "@/config/site";

const LoadingScreenContainer = styled.div`
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 4vmin;
    margin: 0;
    height: 100vh;
    width: 100%;
`;

export default function LoadingScreen() {
    const [count, { startCountdown }] = useCountdown({
        countStart: Math.floor(
            (siteConfig.event.startsAt.getTime() - Date.now()) /
                10,
        ),
        intervalMs: 10,
    });

    useEffect(startCountdown);

    const milliseconds = count * 10;
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return (
        <LoadingScreenContainer>
            <Fadein duration={1}>
                <TimeDisplay
                    compact={window.innerWidth < 600}
                    days={days}
                    hours={hours % 24}
                    label={false}
                    milliseconds={milliseconds % 1000}
                    minutes={minutes % 60}
                    seconds={seconds % 60}
                />
            </Fadein>
        </LoadingScreenContainer>
    );
}
