import "./List.css"
import Card from "../Card/Card"
import {useState} from "react"

function List({listTransactions, setListTransactions}){

    const [isTodosSelected, setIsTodosSelected] = useState(true)
    const [isEntradasSelected, setIsEntradasSelected] = useState(false)
    const [isSaidasSelected, setIsSaidasSelected] = useState(false)


    function mostrarTodos(){
        setIsTodosSelected(true)
        setIsEntradasSelected(false)
        setIsSaidasSelected(false)


    }
    function filtraEntradas(){

        setIsTodosSelected(false)
        setIsEntradasSelected(true)
        setIsSaidasSelected(false)


        const listEntradas = listTransactions.filter((transaction) => {
            return transaction.type === "Entrada"
        });
        
    }

    function filtraSaidas(){

        setIsTodosSelected(false)
        setIsEntradasSelected(false)
        setIsSaidasSelected(true)

        const listSaidas = listTransactions.filter((transaction) => {
            return transaction.type === "Saída"
        });
    
    
    }

    return(
        <>            
            <div className="headerListTransactions">
                <h4>Resumo Financeiro</h4>
                <div className="btnsListTransactions">
                    <button onClick={mostrarTodos} id={isTodosSelected ? "btnSelecionado": null}>Todos</button>
                    <button onClick={filtraEntradas} id={isEntradasSelected ? "btnSelecionado": null}>Entradas</button>
                    <button onClick={filtraSaidas}id={isSaidasSelected ? "btnSelecionado": null}>Despesas</button>

                </div>
            </div>
            <div className="listaTransactions">
                {listTransactions.map((transaction, index) => (
                    <Card listTransactions={listTransactions} setListTransactions={setListTransactions} transaction={transaction} key={index}/>
                ))}
            </div>
        </>
    )
}

export default List