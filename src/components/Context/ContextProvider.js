import { useState } from "react"
import Context from "./Context"

function ContextProvider(props) {
    const [token, setToken] = useState('')

    function addTokenHandler(mail, tokenId) {
        localStorage.setItem(mail, tokenId)
        setToken(Object.keys(localStorage)[0])
    }

    function removeTokenHandler() {
        localStorage.clear()
        setToken('')
    }

    const data = {
        token: token,
        addToken: addTokenHandler,
        removeToken: removeTokenHandler
    }
    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider