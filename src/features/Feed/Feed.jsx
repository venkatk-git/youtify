// Dependencies
import styled from "styled-components";
import Section from "./Section";
import {
    fetchGenericFeed,
    fetchGoalBasedFeed,
} from "../../services/feedServices";
import React from "react";

function Feed() {
    const [generic, setGeneric] = React.useState([]);
    const [goal, setGoal] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const genericData = await fetchGenericFeed();
                const goalData = await fetchGoalBasedFeed();

                setGeneric(genericData);
                setGoal(goalData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    console.log(generic);

    return (
        <Wrapper>
            <Section title={"General"} videos={generic} />
            <Section title={"Goal"} videos={goal} />
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--gap-4x);
`;

export default Feed;
