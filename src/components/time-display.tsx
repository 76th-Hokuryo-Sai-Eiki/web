import styled from "styled-components";

import Digit from "@/components/digit";
import { addKey } from "@/functions/utility";

const TimerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
`;

const SeparatorContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    margin: 0 0 10px 0px;
`;

const Separator = styled.span`
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #404549;
    border-radius: 6px;
    margin: 5px 0px;
`;

export function TimeDisplay({
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    compact = false,
}: {
    milliseconds?: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    compact?: boolean;
}) {
    const digits = [
        <Digit value={days} title="DAYS" addSeparator />,

        <SeparatorContainer>
            <Separator />
            <Separator />
        </SeparatorContainer>,

        <Digit value={hours} title="HOURS" addSeparator />,

        <SeparatorContainer>
            <Separator />
            <Separator />
        </SeparatorContainer>,

        <Digit value={minutes} title="MINUTES" addSeparator />,

        <SeparatorContainer>
            <Separator />
            <Separator />
        </SeparatorContainer>,

        <Digit value={seconds} title="SECONDS" />,
    ];

    if (milliseconds !== undefined) {
        digits.push(
            <SeparatorContainer>
                <Separator />
                <Separator />
            </SeparatorContainer>,

            <Digit
                value={Math.floor(milliseconds / 10)}
                title="​"
                addSeparator
            />
        );
    }

    return (
        <div className="grid">
            {compact ? (
                <>
                    <TimerContainer>
                        {digits.slice(0, 3).map(addKey)}
                    </TimerContainer>
                    <TimerContainer>
                        {digits.slice(4).map(addKey)}
                    </TimerContainer>
                </>
            ) : (
                <TimerContainer>{digits.map(addKey)}</TimerContainer>
            )}
        </div>
    );
}
