import { BsFillTrashFill } from "react-icons/bs";


function Todo ({todos, completeTodo, removeTodo}) {


    return todos.map((todo, index) => (
        <div 
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}>

        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div 
        className="icons"        >
          <BsFillTrashFill onClick={() => removeTodo(todo.id)}
          className='delete-icon'
          id="delete-icon"
          />

        </div>
            
        </div>
        ) );
};

export default Todo
