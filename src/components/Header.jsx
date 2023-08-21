const logo = "./src/assets/react.svg";

const Header = () => {
    return (
        <>
            <h1 className="text-info text-center mt-3">Todo List React</h1>
            <img className="rounded d-block mx-auto" src={logo} />
            <hr></hr>
        </>
    );
}

export default Header;
