import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { BsFillTrashFill } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";

function Todo ({todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState ({ // HOOK
    id: null,
    value:''
  });

    const submitUpdate = value => { // FX QUE NOS PERMITE ELEVAR LA UPDATED DEL TODO
      updateTodo(edit.id, value)
      setEdit({
        id: null,
        value: ''
      })
    }
    if (edit.id) { // SE PONE ESTE IF PARA ACTUALIZAR EL 
      return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div 
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}>

        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <BsFillTrashFill onClick={() => removeTodo(todo.id)}
          className='delete-icon'
          />
          < GrUpdate onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon' />

        </div>
            
        </div>
        ) );
};

export default Todo
