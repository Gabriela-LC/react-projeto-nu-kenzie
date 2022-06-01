import "./TotalMoney.css"
function TotalMoney({listTransactions}){

    return(
        <div className="divTotalMoney">
            <div className="divValorTotal">
                <h4>Valor total:</h4>
                <p>${listTransactions.reduce((acc, valorAtual) => {
                    if(valorAtual.type === "Saída"){
                        return acc - valorAtual.value
                    }else{
                    return acc + valorAtual.value
                    }
                },0).toFixed(2).replace(".",",")} </p>
            </div>
            <p id="disclamer">O valor se refere ao saldo</p>
        </div>
    )
}

export default TotalMoney