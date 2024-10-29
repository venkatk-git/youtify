import React from "react";
import styled from "styled-components";

import { Icon } from "@iconify/react/dist/iconify.js";

function SettingsPage() {
    const [values, setValues] = React.useState({
        contentPreferences: [],
        favoriteChannels: [],
        languagePreferences: [],
        vedioLengthPreferences: [],
        timeLimit: "",
        goal: "",
        refreshFrequency: "",
        dislikedTopics: [],
    });

    return (
        <Wrapper>
            <ContentWrapper>
                <FieldWrapper>
                    <Field>
                        <label
                            htmlFor="content_preference"
                            name="content preference"
                        >
                            Content preferences
                        </label>
                        <input id="content_preference"></input>
                    </Field>
                    <Field>
                        <label
                            htmlFor="favorite_channels"
                            name="favorite channels"
                        >
                            Favorite channels
                        </label>
                        <input id="favorite_channels"></input>
                    </Field>
                </FieldWrapper>
                <FieldWrapper>
                    <Field>
                        <label
                            htmlFor="language_preferences"
                            name="language preferences"
                        >
                            Language preferences
                        </label>
                        <input id="language_preferences"></input>
                    </Field>
                    <Field>
                        <label
                            htmlFor="vedio_length_preferences"
                            name="vedio length preferences"
                        >
                            Vedio length preferences
                        </label>
                        <SelectWrapper>
                            <Select
                                name="vedio_length_preferences"
                                id="vedio_length_preferences"
                            >
                                <option value="0_2">0 to 2 minites</option>
                                <option value="2_5">2 to 5 minites</option>
                                <option value="5_10">5 to 10 minites</option>
                                <option value="10_15">0 to 2 minites</option>
                                <option value="any">any</option>
                            </Select>
                            <AddIcon
                                icon="lets-icons:add-duotone"
                                style={{ color: "white" }}
                            />
                        </SelectWrapper>
                    </Field>
                </FieldWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default SettingsPage;

// Styled Components

const Wrapper = styled.div`
    padding: var(--padding-6x);
    width: 100%;
    display: flex;
`;

const ContentWrapper = styled.div`
    margin-left: 100px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    flex-basis: 826px;
    gap: var(--gap-8x);
`;

const FieldWrapper = styled.div`
    display: flex;
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-2x);
    margin-right: var(--margin-12x);

    & input {
        height: 36px;
        border-radius: var(--round-base);
        padding: var(--padding-2x);
        background-color: var(--search-bg);
        border: 1px solid var(--border-gray-100);
        font-size: var(--font-size-sm);
        padding: 0 var(--padding-2x);
        font-weight: var(--semibold);
    }

    & input:focus {
        border-color: var(--color-gray-600);
    }
`;

const Select = styled.select`
    height: 36px;
    border-radius: var(--round-base);
    padding: 0 var(--padding-2x); /* Horizontal padding */
    background-color: var(--search-bg);
    border: 1px solid var(--border-gray-100);
    font-size: var(--font-size-sm);
    font-weight: var(--semibold);
    color: #979797;
    width: 160px;
    appearance: none; /* Remove default arrow */
    background-image: url("../../../assets/arrow-down-sign-to-navigate.png");
    background-repeat: no-repeat;
    background-position: right var(--padding-2x) center;
    background-size: 12px;
`;

const SelectWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--gap-2x);
`;

const AddIcon = styled(Icon)`
    font-size: 36px;
    cursor: pointer;
`;
