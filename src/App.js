
import './App.css';
import List from "./list/List"
function App() {
  
  return (
    <div className="App">
    
             <div className="header">
    <img alt="#" src="https://static.vecteezy.com/system/resources/previews/005/015/352/non_2x/garden-cart-icon-in-trendy-color-mate-style-isolated-on-soft-blue-background-free-vector.jpg"/>
    <div >
    <span className="title">grocery app</span>
    </div>
    </div>  
      <List/>
      <div>
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#142F43" fill-opacity="0.1" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,234.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
      </path></svg>
      </div>
    </div>
 
  );
}

export default App;
