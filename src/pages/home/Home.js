const Home = () => {
    const lines = [undefined, 1, 2, 3];
    return(
        <div>
            {lines.map((line) => {
                console.log(line)
            })}
        </div>
    )
}

export default Home;