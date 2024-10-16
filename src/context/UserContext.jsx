// Dependencies
import React, { useEffect } from "react";

// Services
import { getUser } from "../services/userServices";

const UserContext = React.createContext();

export const useUser = () => React.useContext(UserContext);

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        getUser(setUser);
    }, []);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
