const Greet = () => {
    return <h1>Halo Daffa</h1>
}

export const GreetTwo = () => {
    return <h2>Halo Daffa {3 +3}</h2>
}

// Props
export const GreetThree = (props) => {
    return(
        <div>
            <h3>Halo {props.name} a.k.a {props.heroName}</h3>
            {props.children}
        </div>
    )
}

export default Greet