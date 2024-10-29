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

    const [newContentPreference, setNewContentPreference] = React.useState("");
    const [newFavoriteChannel, setNewFavoriteChannel] = React.useState("");
    const [newLanguagePreference, setNewLanguagePreference] =
        React.useState("");
    const [newDislikedTopic, setNewDislikedTopic] = React.useState("");
    const [selectedVideoLength, setSelectedVideoLength] = React.useState("");

    const handleAddContentPreference = () => {
        if (newContentPreference) {
            setValues((prevValues) => ({
                ...prevValues,
                contentPreferences: [
                    ...prevValues.contentPreferences,
                    newContentPreference,
                ],
            }));
            setNewContentPreference("");
        }
    };

    const handleAddFavoriteChannel = () => {
        if (newFavoriteChannel) {
            setValues((prevValues) => ({
                ...prevValues,
                favoriteChannels: [
                    ...prevValues.favoriteChannels,
                    newFavoriteChannel,
                ],
            }));
            setNewFavoriteChannel("");
        }
    };

    const handleAddLanguagePreference = () => {
        if (newLanguagePreference) {
            setValues((prevValues) => ({
                ...prevValues,
                languagePreferences: [
                    ...prevValues.languagePreferences,
                    newLanguagePreference,
                ],
            }));

            setNewLanguagePreference("");
        }
    };

    const handleAddDislikedTopic = () => {
        if (newDislikedTopic) {
            setValues((prevValues) => ({
                ...prevValues,
                dislikedTopics: [
                    ...prevValues.dislikedTopics,
                    newDislikedTopic,
                ],
            }));
            setNewDislikedTopic("");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleAddVideoLength = () => {
        if (
            selectedVideoLength &&
            !values.videoLengthPreferences.includes(selectedVideoLength)
        ) {
            setValues((prevValues) => ({
                ...prevValues,
                videoLengthPreferences: [
                    ...prevValues.videoLengthPreferences,
                    selectedVideoLength,
                ],
            }));
            setSelectedVideoLength(""); // Clear selection after adding
        }
    };

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
                        <InputWrapper>
                            <input
                                id="content_preference"
                                value={newContentPreference}
                                onChange={(e) =>
                                    setNewContentPreference(e.target.value)
                                }
                            />
                            <AddIcon
                                icon="lets-icons:add-duotone"
                                style={{ color: "white" }}
                                onClick={handleAddContentPreference}
                            />
                        </InputWrapper>
                    </Field>
                    <Field>
                        <label
                            htmlFor="favorite_channels"
                            name="favorite channels"
                        >
                            Favorite channels
                        </label>
                        <InputWrapper>
                            <input
                                id="favorite_channels"
                                value={newFavoriteChannel}
                                onChange={(e) =>
                                    setNewFavoriteChannel(e.target.value)
                                }
                            />
                            <AddIcon
                                icon="lets-icons:add-duotone"
                                style={{ color: "white" }}
                                onClick={handleAddFavoriteChannel}
                            />
                        </InputWrapper>
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
                        <InputWrapper>
                            <input
                                id="language_preferences"
                                value={newLanguagePreference}
                                onChange={(e) =>
                                    setNewLanguagePreference(e.target.value)
                                }
                            />
                            <AddIcon
                                icon="lets-icons:add-duotone"
                                style={{ color: "white" }}
                                onClick={handleAddLanguagePreference}
                            />
                        </InputWrapper>
                    </Field>
                    <Field>
                        <label htmlFor="video_length_preferences">
                            Video length preferences
                        </label>
                        <SelectWrapper>
                            <Select
                                name="video_length_preferences"
                                id="video_length_preferences"
                                value={selectedVideoLength}
                                onChange={(e) =>
                                    setSelectedVideoLength(e.target.value)
                                }
                            >
                                <option value="">Select a length</option>
                                <option value="0_2">0 to 2 minutes</option>
                                <option value="2_5">2 to 5 minutes</option>
                                <option value="5_10">5 to 10 minutes</option>
                                <option value="10_15">10 to 15 minutes</option>
                                <option value="any">Any</option>
                            </Select>
                            <AddIcon
                                icon="lets-icons:add-duotone"
                                style={{ color: "white" }}
                                onClick={handleAddVideoLength}
                            />
                        </SelectWrapper>
                    </Field>
                </FieldWrapper>
                <FieldWrapper>
                    <Field>
                        <label htmlFor="disliked_topics" name="Disliked topics">
                            Disliked topics
                        </label>
                        <InputWrapper>
                            <input
                                id="disliked_topics"
                                value={newDislikedTopic}
                                onChange={(e) =>
                                    setNewDislikedTopic(e.target.value)
                                }
                            />
                            <AddIcon
                                icon="lets-icons:add-duotone"
                                style={{ color: "white" }}
                                onClick={handleAddDislikedTopic}
                            />
                        </InputWrapper>
                    </Field>
                    <Field>
                        <label
                            htmlFor="refresh_frequency_rate"
                            name="refresh frequency rate"
                            onChange={handleChange}
                        >
                            Refresh frequency rate
                        </label>
                        <SelectWrapper>
                            <Select
                                name="refresh_frequency_rate"
                                id="refresh_frequency_rate"
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        refreshFrequency: e.target.value,
                                    })
                                }
                            >
                                <option value="0_2">Everyday</option>
                                <option value="2_5">2 days once</option>
                                <option value="5_10">5 days once</option>
                                <option value="10_15">Weekly once</option>
                                <option value="any">Monthly once</option>
                            </Select>
                        </SelectWrapper>
                    </Field>
                </FieldWrapper>
                <TextAreaWrapper>
                    <label>Your goal</label>
                    <TextArea
                        rows="8"
                        cols="60"
                        value={values.goal}
                        onChange={(e) =>
                            setValues({ ...values, goal: e.target.value })
                        }
                    ></TextArea>
                </TextAreaWrapper>
                <Button onClick={() => console.log(values)}>Submit</Button>
            </ContentWrapper>
        </Wrapper>
    );
}

export default SettingsPage;

// Styled Components

const Wrapper = styled.div`
    padding: var(--padding-6x);
    display: flex;
`;

const ContentWrapper = styled.div`
    margin-left: 300px;
    display: flex;
    flex-direction: column;
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
        width: 155px;
    }

    & input:focus {
        border-color: var(--color-gray-600);
    }
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--gap-2x);
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
    width: 175px;
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

const TextAreaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-2x);
`;

const TextArea = styled.textarea`
    border-radius: var(--round-base);
    padding: var(--padding-2x);
    background-color: var(--search-bg);
    border: 1px solid var(--border-gray-100);
    font-size: var(--font-size-sm);
    font-weight: var(--semibold);
    color: #979797;
    width: fit-content;
`;

const Button = styled.button`
    width: 240px;
    align-self: center;
    height: 42px;
    border-radius: var(--round-base);
    background-color: var(--primary-red);
    color: white;
    font-size: 1rem;
    font-weight: var(--bold);
    cursor: pointer;

    &:hover {
        background-color: var(--primary-red-100);
    }
`;