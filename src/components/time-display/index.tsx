import styled from "styled-components";

import Digit from "./digit";

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
    label = true,
    compact = false,
}: {
    milliseconds?: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    label?: boolean;
    compact?: boolean;
}) {
    const digits = [
        <Digit
            key="days"
            addSeparator
            title={label ? "DAYS" : ""}
            value={days}
        />,

        <SeparatorContainer key="sep-0">
            <Separator />
            <Separator />
        </SeparatorContainer>,

        <Digit
            key="hours"
            addSeparator
            title={label ? "HOURS" : ""}
            value={hours}
        />,

        <SeparatorContainer key="sep-1">
            <Separator />
            <Separator />
        </SeparatorContainer>,

        <Digit
            key="minutes"
            addSeparator
            title={label ? "MINUTES" : ""}
            value={minutes}
        />,

        <SeparatorContainer key="sep-2">
            <Separator />
            <Separator />
        </SeparatorContainer>,

        <Digit key="seconds" title={label ? "SECONDS" : ""} value={seconds} />,
    ];

    if (milliseconds !== undefined) {
        digits.push(
            <SeparatorContainer>
                <Separator />
                <Separator />
            </SeparatorContainer>,

            <Digit
                addSeparator
                title={label ? "​" : ""}
                value={Math.floor(milliseconds / 10)}
            />
        );
    }

    return (
        <div className="grid">
            {compact ? (
                <>
                    <TimerContainer>{digits.slice(0, 3)}</TimerContainer>
                    <TimerContainer>{digits.slice(4)}</TimerContainer>
                </>
            ) : (
                <TimerContainer>{digits}</TimerContainer>
            )}
        </div>
    );
}
