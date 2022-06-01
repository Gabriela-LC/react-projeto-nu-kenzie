import './App.css';
import {useState} from "react"
import Form from './components/Form/Form';
import List from './components/List/List';
import TotalMoney from './components/TotalMoney/TotalMoney';
import Header from './components/Header/Header';

function App() {

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: 150 }
  ])

  return (
    <div className="App">
        <Header/> 
        <main>
          <aside>     
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
            <TotalMoney listTransactions={listTransactions}/>
          </aside> 
          <section className='Lista'>
            <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          </section>
        </main> 
    </div>
  );
}

export default App;
