import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth, getUserData } from "../utils/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    userInfo: () => {},
    setUserInfo: () => {},
    userMap: {}
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [ userInfo, setUserInfo ] = useState({}); 
    const value = {currentUser, setCurrentUser, userInfo}
    

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user)=> {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
            return unsubscribe
        })
    }, [])

    useEffect(() => {
    const getUserInfo = async () => {
        const userInfo = await getUserData(currentUser)
        setUserInfo(userInfo)
    }
    getUserInfo() 

},[currentUser])


    return <UserContext.Provider value = {value}>{children}</UserContext.Provider>
}
