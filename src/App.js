import './App.css';
import {useState} from "react"
import Form from './components/Form/Form';
import List from './components/List/List';
import TotalMoney from './components/TotalMoney/TotalMoney';
import Header from './components/Header/Header';
import NewPage from './components/NewPage/NewPage';
import Modal from './components/Modal/Modal';

function App() {


  const [inicalPage, setIncialPage] = useState(true)
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: 150 }
  ])
    const [showModal, setShowModal] = useState(false)
    const [isTodosSelected, setIsTodosSelected] = useState(true)
    const [isEntradasSelected, setIsEntradasSelected] = useState(false)
    const [listEntradas, setListEntradas] = useState([])
    const [isSaidasSelected, setIsSaidasSelected] = useState(false)
    const [listSaidas, setListSaidas] = useState([])



    function mostrarTodos(){
        setIsTodosSelected(true)
        setIsEntradasSelected(false)
        setIsSaidasSelected(false)


        setListEntradas([])
        setListSaidas([])

    }
    function filtraEntradas(){

        setIsTodosSelected(false)
        setIsEntradasSelected(true)
        setIsSaidasSelected(false)

        const filtroEntradas = listTransactions.filter((transaction) => {
            return transaction.type === "Entrada"
        });
        console.log(filtroEntradas);
        setListEntradas(filtroEntradas)
        setListSaidas([])
        
    }

    function filtraSaidas(){

        setIsTodosSelected(false)
        setIsEntradasSelected(false)
        setIsSaidasSelected(true)

        const filtroSaidas = listTransactions.filter((transaction) => {
            return transaction.type === "Saída"
        });

        setListEntradas([])
        setListSaidas(filtroSaidas)
    
    }


  return (
    <div className="App">
      {inicalPage? 
      <NewPage setIncialPage={setIncialPage}/>
      :
      <>
        {showModal && <Modal setShowModal={setShowModal}/>}
        <Header setIncialPage={setIncialPage}/> 
        <main>
          <aside>     
            <Form setShowModal={setShowModal} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
            <TotalMoney listTransactions={listTransactions}/>
          </aside> 
          <section className='Lista'>
            <List listTransactions={listEntradas.length > 0 ? listEntradas: listSaidas.length > 0 ? listSaidas : listTransactions}mostrarTodos={mostrarTodos} filtraEntradas={filtraEntradas} filtraSaidas={filtraSaidas} isTodosSelected={isTodosSelected} isEntradasSelected={isEntradasSelected} isSaidasSelected={isSaidasSelected} setListTransactions={setListTransactions}/>
          </section>
        </main>
      </> 
    }
    </div>
  );
}

export default App;
