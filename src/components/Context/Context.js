import { createContext } from "react";

const Context = createContext({
    token: '',
    addToken: () => {},
    removeToken: () => {}
})

export default Context