import { Fadein } from "@/components/animations";
import { TimeDisplay } from "@/components/time-display";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { useEffect } from "react";
import { useCountdown } from "usehooks-ts";

import { Title } from "./title";
import { Access } from "./access";

export function CountDown() {
    const [count, { startCountdown }] = useCountdown({
        countStart: Math.floor(
            (siteConfig.eventDate.getTime() - Date.now()) / 10
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
        <div>
            <TimeDisplay
                seconds={seconds % 60}
                minutes={minutes % 60}
                hours={hours % 24}
                days={days}
                compact={window.innerWidth > 1536 || window.innerWidth < 600}
            />
        </div>
    );
}

export default function () {
    return (
        <Fadein duration="0.3s" once={true}>
            <DefaultLayout>
                <Fadein duration="0.5s" once={true}>
                    <Title />
                    <Access />
                </Fadein>
            </DefaultLayout>
        </Fadein>
    );
}
