import "./Header.css"

function Header({setIncialPage}){


    function paraPgInicial(){
        setIncialPage(true)
    }
    return(
        <header>
            <img src="assets/nukenzie.png" alt="logo"/>
            <button onClick={paraPgInicial}>Início</button>
        </header>
    )
}

export default Header