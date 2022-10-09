import { useState } from "react"
import Context from "./Context"

function ContextProvider(props) {
    const [token, setToken] = useState('')

    function addTokenHandler(tokenId) {
        setToken(tokenId)
    }

    function removeTokenHandler() {
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