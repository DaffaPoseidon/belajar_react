export const NameList = () => {
    const names = ["2B", "A2", "9S"]
    return (
        <div>
            {
                names.map((name) => {
                    return <h2 key={name}>{name}</h2>
                })
            }
        </div>
    )
}