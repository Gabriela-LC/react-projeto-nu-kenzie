import "./NewPage.css"
function NewPage({setIncialPage}){


    function logar(){
        setIncialPage(false)
    }
    return(
        <main className="mainPgInicial">
            <section className="text">
                <img src="assets/NuKenzie2.png" alt="logo"/>
                <h1>Centralize o controle das suas finanças</h1>
                <p>de forma rápida e segura</p>
                <button onClick={logar}>Iniciar</button>
            </section>
            <section className="img">
                <img src="assets/Group262.svg" alt="logo"/>
            </section>
        </main>
    )
}

export default NewPage