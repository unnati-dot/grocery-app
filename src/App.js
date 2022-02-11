import {useState} from "react"
import './App.css';
import List from "./list/List"
import Displaylist from "./Displaylist/Displaylist"
import Waves from "./Waves"
function App() {
  const [input,setInput]=useState("");
  const [quant,setQuant]=useState(0);
  const [si,setSi]=useState("");
  const [todos,setTodos]=useState([]);
  return (
    <div className="App">
    
             <div className="header">
    <img alt="#" src="https://static.vecteezy.com/system/resources/previews/005/015/352/non_2x/garden-cart-icon-in-trendy-color-mate-style-isolated-on-soft-blue-background-free-vector.jpg"/>
    <div >
    <span className="title">grocery app</span>
    </div>
    </div>  
      <List
      todos={todos}
      setTodos={setTodos}
      input={input}
      setInput={setInput}
      quant={quant}
      setQuant={setQuant}
      si={si}
      setSi={setSi}
      />
      <br/>
      <Displaylist 
      todos={todos} 
      setTodos={setTodos}/>
      <br/>
      <br/>

      <Waves/>
      

    </div>
 
  );
}

export default App;
