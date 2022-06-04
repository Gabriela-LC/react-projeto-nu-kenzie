import "./List.css"
import Card from "../Card/Card"
import SemTransactions from "../SemTransactions/SemTransactions"

function List({mostrarTodos, filtraEntradas, filtraSaidas,isTodosSelected, isEntradasSelected, isSaidasSelected, listTransactions, setListTransactions}){

    

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
            {listTransactions.length > 0?
            <ul className="listaTransactions">
                {listTransactions.map((transaction, index) => (
                    <li key={index}><Card listTransactions={listTransactions} setListTransactions={setListTransactions} transaction={transaction} index={index}/></li>
                ))}
            </ul>
            :
            <SemTransactions/>
            }
        </>
    )
}

export default List