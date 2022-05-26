import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

//COMPONENTE QUE NOS AYUDARÁ CON EL AGREGAR COSAS A NUESTRO TODO LIST
function TodoList() {


    const[todos, setTodos] = useState([]); //HOOK

    const getTodosFromApi = () => {
        fetch(
            "http://assets.breatheco.de/apis/fake/todos/user/bastianmoral",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(resp => resp.json())
            .then(data => setTodos(data));
    };
    
    const updateToDo = newData => {
        console.log(newData);
        fetch(
            "http://assets.breatheco.de/apis/fake/todos/user/bastianmoral",
            {
                method: "PUT",
                body: JSON.stringify(newData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    };
    
    const deleteToDo = () => {
        fetch(
            "http://assets.breatheco.de/apis/fake/todos/user/bastianmoral",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            fetch(
                "http://assets.breatheco.de/apis/fake/todos/user/bastianmoral",
                {
                    method: "POST",
                    body: JSON.stringify([]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
        });
    };


    const addTodo= todo => {     //ESTA FUNCION NOS AYUDA A QUE EL todo A INGRESAR SI TIENE MUCHO ESPACIO SE JUNTE Y NO QUEDÉ CON ESAPACIADO ADICIONAL
        if (!todo.text || /^\s*$/.test(todo.text)){
            return; 
        }
    const newTodos = [todo, ...todos]; // NOS PERMITE VER TANTO EL TODO  se puede ver en la consola el id del todo ingresado y la lista de todos en el array.    

    setTodos(newTodos);
};


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        
        setTodos(removeArr);  // FUNCION QUE NOS PERMITE REMOVER AL HACER CLICK EN EL ICONO DE BASURA
    };

    const deleteAll = () => {
        setTodos([], deleteToDo());
    };
    
    useEffect(() => {
        getTodosFromApi();
    }, []);

/*     const updateTodo =  (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return; 
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }; */ // OPCION QUE NOS PERMITE AGREGAR JUNTO CON LA MISMA FUNCIÓN QUE NO PERMITE QEU EL TEXTE SEA TAN EXTENSO EN ESPACIOS 



/*     const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete}
            return todo;
        });
        setTodos(updatedTodos);
    }; */ // FUNCION QUE PERMITE TACHAR EL TODO REALIZADO

 return (
        <div>
            <h1> Whats's the plan for today ? </h1>
            <TodoForm onSubmit={addTodo} />
            <Todo  todos={todos} removeTodo={removeTodo} getTodosFromApi={getTodosFromApi} updateToDo={updateToDo} /> 
            <button type="button" className="btn-delete-all" onClick={deleteAll}> Delete all Tasks </button>
        </div> //SE TIENE QUE LLAMAR TODAS LOS COMPONENTES ACÁ PARA QUE ESTE SOLO SEA EL COMPONENTE PADRE QUE LLAMAREMOS EN APP
    )
}

export default TodoList;
