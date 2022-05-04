
import { createContext, useState } from "react";

export const AccountDropdownContext = createContext({
    accountDropdownState: null,
    setAccountDropdownState: false
})

export const AccountDropdownProvider = ({children}) => {
    const [accountDropdownState, setAccountDropdownState] = useState(false)
    const value = {accountDropdownState, setAccountDropdownState}

    return <AccountDropdownContext.Provider value = {value}>{children}</ AccountDropdownContext.Provider>
}
