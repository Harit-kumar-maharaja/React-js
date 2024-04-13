import { createContext , useContext } from "react";

export const themecontext = createContext({
    thememode : "light",
    darktheme : () => {},
    lighttheme : () => {}
})

export const themeprovider  = themecontext.Provider

export default function usetheme(){
    return useContext(themecontext)
}