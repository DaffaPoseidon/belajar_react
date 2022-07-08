// Conditional Rendering

export const UserGreeting = () => {
    const isLoggedIn = false
    return <div>Welcome {isLoggedIn && "Daffa"}</div>
}