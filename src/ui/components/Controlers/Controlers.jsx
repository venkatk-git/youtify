import React, { useState } from "react";
import styled from "styled-components";

const getTime = (time) => {
    time = Math.floor(time); // Round down to get an integer
    const mins = Math.floor(time / 60);
    let secs = time % 60;

    if (secs < 10) {
        secs = "0" + secs;
    }

    return `${mins}:${secs}`;
};

// eslint-disable-next-line react/prop-types
export function Timeline({ playerRef, length, onSeek, currentTime }) {
    const currentTimeFormated = getTime(currentTime);
    const endTime = getTime(length);
    const [value, setValue] = useState(0);

    React.useEffect(() => {
        setValue(currentTime);
        console.log(currentTime);
    }, [currentTime]);

    const handleChange = (e) => {
        const newTime = Number(e.target.value);
        setValue(newTime);
        onSeek(newTime);
        if (playerRef.current) {
            playerRef.current.seekTo(newTime, true);
            console.log(playerRef.current);
        }
    };
    return (
        <Wrapper>
            <TimeWrapper>
                <span>{currentTimeFormated}</span>
                <span>{endTime}</span>
            </TimeWrapper>
            <Input
                type="range"
                min={0}
                max={length}
                value={value}
                onChange={(e) => handleChange(e)}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 86%;
    margin: 0 12px;
    margin-bottom: 6px;
`;

const TimeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 100%;
    height: 8px;
    padding: 0;
    border: none;
    background-color: var(--primary-gray);

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 12px;
        width: 12px;
        background-color: var(--primary-red);
        border-radius: 50%;
        cursor: pointer;
        margin-top: -4px;
    }

    &::-moz-range-thumb {
        height: 12px;
        width: 12px;
        background-color: var(--primary-red);
        border-radius: 50%;
        cursor: pointer;
    }

    &::-ms-thumb {
        height: 12px;
        width: 12px;
        background-color: var(--primary-red);
        border-radius: 50%;
        cursor: pointer;
    }

    transition: all 0.25s ease-in-out;
`;

export function StateButton() {}
