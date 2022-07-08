// Forms
import { useState } from "react"

export const Form = () => {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`FormData is ${username} and ${description}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                <br/>
                <label>Description</label>
                <input type="textarea" value={description} onChange={(event) => setDescription(event.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}