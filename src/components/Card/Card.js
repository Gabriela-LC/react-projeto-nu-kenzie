import "./Card.css"

function Card({listTransactions, setListTransactions, transaction, index}){

    function removeTransaction(key){
        console.log(key);
        const newListTransactions = listTransactions.filter((transaction, index) => {
            return index !== key
        })

    setListTransactions(newListTransactions)

    }

    return(
          <> 
            {transaction.type === "Saída" ? (
            <div className="cardTransaction">
                <div>
                    <h4>{transaction.description}</h4>
                    <p>R$ {transaction.value.toFixed(2).replace(".",",")}</p>
                    <button onClick={() =>removeTransaction(index)}><img src="assets/trash.svg" alt="trash"/></button>
                </div>
                <span>{transaction.type}</span>

            </div>
            ) : (
            <div className="cardTransaction cardTransaction__entrada">
                <div>
                    <h4>{transaction.description}</h4>
                    <p>R$ {transaction.value.toFixed(2).replace(".",",")}</p>
                    <button onClick={() =>removeTransaction(index)}><img src="assets/trash.svg" alt="trash"/></button>
                </div>
                <span>{transaction.type}</span>
                

            </div>
            )}
         </>    
    )

}

export default Card