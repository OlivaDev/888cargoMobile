"use client"

import { useState } from "react"

const LoginPage = () => {
    const [user, setUser] = useState("igor")
    return (
        <section>
            <h1>Login {user}</h1>
            <button onClick={() => setUser("Carlos")}>Cambiar nombre</button>

            <form>
                <input type="text"/>
                <input type="password"/>
                <input type="submit"/>
            </form>
        </section>
    )
}

export default LoginPage