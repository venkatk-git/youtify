import { useState } from "react";
import styled from "styled-components";

const getTime = (time) => {
    let mins = time / 60;
    let secs = time % 60;

    if (secs < 10) {
        secs = "0" + secs;
    }

    return `${Math.floor(mins)}:${secs}`;
};

export function Timeline({ length }) {
    const [value, setValue] = useState(0);

    const currentTime = "00:00";
    const endTime = getTime(length);

    return (
        <Wrapper>
            <TimeWrapper>
                <span>{currentTime}</span>
                <span>{endTime}</span>
            </TimeWrapper>
            <Input
                type="range"
                min={0}
                max={length}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 95%;
    margin: 0 12px;
    margin-bottom: 6px;
`;

const TimeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 100%;
    padding: 0;
`;

export function StateButton() {}
