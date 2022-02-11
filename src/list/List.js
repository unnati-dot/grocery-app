import "./list.css"
import emailjs from "emailjs-com"
import {v4 as uuidv4} from "uuid";


export default function List({todos,setTodos,input,setInput,quant,setQuant,si,setSi}){

function oninputChange(e){
  e.preventDefault();
  setInput(e.target.value);
}
function onquantChange(e){
  e.preventDefault();
  setQuant(e.target.value);
}
function onselectChange(e){
  e.preventDefault();
  setSi(e.target.value);
}


  function onAdd(e){
       e.preventDefault();
       setTodos([...todos,{id: uuidv4(),title:input,q:quant,si:si}])
       setInput("");
       setQuant(0);
       setSi("");
  }
   
function sendemail(e){
   	e.preventDefault();

   	emailjs.sendForm(process.env.REACT_APP_SERVICEID,
		process.env.REACT_APP_TEMPLATEID,
			e.target,
			process.env.REACT_APP_USERID
		).then(res=>{
			console.log(res)
		}).catch(err=> console.log(err));
   }
	
	return(
		<form onSubmit={sendemail}>
               
               <input
                className="title__input"
                  type="text"
                  placeholder="enter the title for your grocerylist"
                  required="true"

               />
<br/>
             <div className="list__input">
               <input
               className="item__input"
                 type="text"
                 name="item1"
                 value={input}
                 placeholder="item1"
                 onChange={oninputChange}
                 required="true"
               />
               <input
               	 type="number"
               	 name="q1"
                 value={quant}
               	 placeholder="0"
                 onChange={onquantChange}
                 required="true"
               />
               <select value={si} required="true" onChange={onselectChange}>
               <option>kg</option>
               <option>grams</option>
               <option>quantity</option>
               <option>litre</option>
              
               </select>
               <button onClick={onAdd}>Add</button>
               </div>

              <br/>
               <div className="footer">
               <input
                className="email__input"
                type="email"
                name="useremail"
                placeholder="enter your email address"
               />
               <button type="submit">submit</button>
		           </div>
    </form>

		)
}