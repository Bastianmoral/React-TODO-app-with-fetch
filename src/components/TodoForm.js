import React, {useState} from 'react'

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : ''); // HOOKS Y EL PROPS QUE PERMITE QUE EL UPDATE SEA DIFERENTE. 

const handleChange = (e) => {  
    setInput(e.target.value);
}; // FUNCION QUE NOS PERMITE GUARDAR LOS CAMBIOS

const handleSubmit = (e) => {
    e.preventDefault();

//Propiedad para entregarle una ID a cada todo ingresado en la lista 
        props.onSubmit({
        id: Math.floor(Math.random()* 10000),
        text: input
         });


         setInput('')
};



    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
            <input
            placeholder="Update or fix your todo" 
            value={input} 
            name='text' 
            className='todo-input edit'
            onChange={handleChange}
            />
            <button className ="todo-button edit">Update</button>    
            </>        
            ) : (
            <>
            <input  
            placeholder="what's need to be done" 
            value={input} 
            name='text' 
            className='todo-input'
            onChange={handleChange}
            />
            <button className ="todo-button">add Todo</button>
            </>
            )}
        </form>
    );
}

export default TodoForm
