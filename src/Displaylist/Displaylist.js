

export default function Displaylist({todos,setTodos}){
	return(
		<div>
       {todos.map((todo)=>(
          <li key={todo.id}>
             <input
               type="text"
               value={todo.title}
               onChange={(e) => e.preventDefault()}
               />
                <input
               type="text2"
               value={todo.q}
               onChange={(e) => e.preventDefault()}
               />
               <input
               type="text2"
               value={todo.si}
               onChange={(e) => e.preventDefault()}
               />
               </li>

       	))

       }

</div>
		)
}