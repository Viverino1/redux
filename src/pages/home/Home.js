const Home = () => {
    const isOpen = true;
    return(
        <div className={`h-16 bg-red-500 transition-all ${isOpen? "w-80" : "w-0"}`}>
            Home Page
        </div>
    )
}
export default Home;