// State
import { useState } from "react"

export const Message = () => {
    const [message, setMessage] = useState("Selamat datang Android!")
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage("Terima kasih sudah bertarung!")}>Haii</button>
        </div>
    )
}

export default Message