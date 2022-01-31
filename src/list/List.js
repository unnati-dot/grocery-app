import "./list.css"
import emailjs from "emailjs-com"

export default function List(){
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
                  name="title"
                  placeholder="enter the title for your grocerylist"
               />
<br/>
             <div className="list__input">
               <input
               className="item__input"
                 type="text"
                 name="item1"
                 placeholder="item1"
               />
               <input
               	 type="number"
               	 name="q1"
               	 placeholder="0"
               />
               </div>

               <div className="list__input">
               <input
               className="item__input"
                 type="text"
                 name="item2"
                 placeholder="item2"
               />
               <input
               	 type="number"
               	 name="q2"
               	 placeholder="0"
               />
               </div>

               <div className="list__input">
               <input
               className="item__input"

              type="text"
                 name="item3"
                 placeholder="item3"
               />
               <input
               	 type="number"
               	 name="q3"
               	 placeholder="0"
               />
               </div>
               <br/>
               <input
               className="email__input"
                type="email"
                name="useremail"
                placeholder="enter your email address"
               />
               <br/>
               <button type="submit">submit</button>
		</form>

		)
}