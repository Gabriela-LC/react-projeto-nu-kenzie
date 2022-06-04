
import {useState} from "react"
import "./Form.css"

function Form({setShowModal, listTransactions, setListTransactions}){

    const [description, setDescription] = useState("")
    const [type, setType] = useState("Entrada")
    const [value, setValue] = useState("")


    function addTransaction(listTransactions,setListTransactions){

        if(description == "" || type == "" || value == ""){
            setShowModal(true)
        } else {

            const newTran = {
                description,
                type,
                value: Number(value)
            }

        setListTransactions([newTran, ...listTransactions])
        }
    }


    return(

        <div className="form">
            <label className="lbDesc">Descrição</label>
            <input className="inputDesc" type="text" placeholder="Digite aqui sua descrição" 
            onChange={(event) => {setDescription(event.target.value)}}></input>
            <p>Ex: Compra de roupas</p>

            <section className="inputValores">
                <div className="qntValor">
                    <label className="lbValor">Valor</label>
                    <input className="inputValor" type="number" placeholder="1" 
                    onChange={(event) => {setValue(event.target.value)}}></input>
                </div>
                <div className="tipoValor">
                    <label className="lbValor">Tipo de valor</label>
                    <select className="inputValor" onChange={(event) => {setType(event.target.value)}}>
                        <option>Entrada</option>
                        <option>Saída</option>
                    </select>
                </div>
            </section>
            <button onClick={() => addTransaction(listTransactions,setListTransactions)}>Inserir valor</button>

        </div>
    )


}

export default Form