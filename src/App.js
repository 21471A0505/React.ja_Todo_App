// import { useState } from 'react';
// import './App.css'

// function App() {
//   let [todoInput, updateInput] = useState("test")
//   let [todoId, updateId] = useState({
    
//   })

//   let [todoList,updatetodos] = useState(
//     [
//       {
//         id:1,
//         task:'some content'
//       },
//       {
//         id:2,
//         task:'some content2'
//       },
//       {
//         id:3,
//         task:'some content3'
//       }
//     ]
//   )
  
//   let nextId = 3;
//   function addNewTodo() {
//     if(todoInput == ""){
//       alert("Add some task");
//     }
//     else{
      
//       let newTodos = [
//         ...todoList,
//         {
//           id : nextId++,
//           task : todoInput
//         }
//       ]
//       updatetodos(newTodos)
//       updateInput("")
//       nextId++;
//     }
//   }


//   function deleteTodo(id){
//     let updatedTodo = todoList.filter(
//       (todo)=> {
//           return todo.id != id
//       }
//     )
//     updatetodos(updatedTodo)
//   }

//   return(
//     <div className="container mt-5 w-50">
//       <h3 className='text-center'>TODO - APP</h3>
//       <div className="input-group">
//         <input type="text" className="form-control" value={todoInput} onChange={(e)=>{
//           let task = e.target.value;
//           updateInput(task)
//         }}></input>
//         <button className="btn btn-primary" onClick={()=>{
//             addNewTodo()
//         }}>Add</button>
//       </div>
//       <ul className="list-group mt-4">
//          {
//           todoList.map(
//             (todo) => {
//               return (
//                 <li className="list-group-item" key={todo.id}>
//                   <p>{todo.task}</p>
//                   <button className="btn " onClick={()=>{
//                     deleteTodo(todo.id)
//                   }}>❌</button>
//                 </li>
        
//               )
//             }
//           )
//          }
//       </ul>
       
//     </div>
//   )

// }

// export default App;




















// import { useState } from 'react';
// import './App.css'

// function App() {
//   let [todoInput, updateInput] = useState("");
//   let [todoList, updatetodos] = useState(
//     [
//       {
//         id:1,
//         task:'some content'
//       },
//       {
//         id:2,
//         task:'some content2'
//       },
//       {
//         id:3,
//         task:'some content3'
//       }
//     ]
//   )

//   let nextId = todoList.length + 1;

//   function addNewTodo() {
//     if (todoInput === "") {
//       alert("Add some task");
//     } else {
//       let newTodos = [
//         ...todoList,
//         {
//           id: nextId,
//           task: todoInput,
//           editing: false, // New property to track editing state
//         }
//       ];
//       updatetodos(newTodos);
//       updateInput("");
//       nextId++;
//     }
//   }

//   function deleteTodo(id) {
//     let updatedTodo = todoList.filter(
//       (todo) => {
//         return todo.id !== id;
//       }
//     );
//     updatetodos(updatedTodo);
//   }

//   function editTodo(id) {
//     let updatedTodos = todoList.map(todo => {
//       if (todo.id === id) {
//         return {
//           ...todo,
//           editing: true,
//         };
//       }
//       return todo;
//     });
//     updatetodos(updatedTodos);
//   }

//   function saveEditedTodo(id, newTask) {
//     let updatedTodos = todoList.map(todo => {
//       if (todo.id === id) {
//         return {
//           ...todo,
//           task: newTask,
//           editing: false,
//         };
//       }
//       return todo;
//     });
//     updatetodos(updatedTodos);
//   }

//   return (
//     <div className="container mt-5 w-50">
//       <h3 className='text-center'>TODO - APP</h3>
//       <div className="input-group">
//         <input
//           type="text"
//           className="form-control"
//           value={todoInput}
//           onChange={(e) => {
//             let task = e.target.value;
//             updateInput(task);
//           }}
//         />
//         <button className="btn btn-primary" onClick={addNewTodo}>
//           Add
//         </button>
//       </div>
//       <ul className="list-group mt-4">
//         {todoList.map((todo) => (
//           <li className="list-group-item" key={todo.id}>
//             {todo.editing ? (
//               <input
//                 value={todo.task}
//                 onChange={(e) => {
//                   let updatedTask = e.target.value;
//                   saveEditedTodo(todo.id, updatedTask);
//                 }}
//                 onBlur={() => saveEditedTodo(todo.id, todo.task)}
//                 onKeyPress={(e) => {
//                   if (e.key === 'Enter') {
//                     saveEditedTodo(todo.id, todo.task);
//                   }
//                 }}
//               />
//             ) : (
//               <>
//                 <p onClick={() => editTodo(todo.id)}>{todo.task}</p>
//                 <button className="btn " onClick={() => deleteTodo(todo.id)}>❌</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;























import { useState } from 'react';
import './App.css';

function App() {
  const [todoInput, updateInput] = useState('');
  const [todoList, updatetodos] = useState(
    [
      {
        id:1,
        task:'some content'
      },
      {
        id:2,
        task:'some content2'
      },
      {
        id:3,
        task:'some content3'
      }
    ]
  )

  const nextId = todoList.length + 1;

  function addNewTodo() {
    if (todoInput === '') {
      alert('Add some task');
    } else {
      const newTodos = [
        ...todoList,
        {
          id: nextId,
          task: todoInput,
        },
      ];
      updatetodos(newTodos);
      updateInput('');
    }
  }

  function deleteTodo(id) {
    const updatedTodo = todoList.filter((todo) => todo.id !== id);
    updatetodos(updatedTodo);
  }

  function editTodo(id) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          editing: true,
        };
      }
      return todo;
    });
    updatetodos(updatedTodos);
  }

  function saveEditedTodo(id, newTask) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task: newTask,
          editing: false,
        };
      }
      return todo;
    });
    updatetodos(updatedTodos);
  }

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">TODO - APP</h3>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={todoInput}
          onChange={(e) => updateInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addNewTodo}>
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {todoList.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.editing ? (
              <div>
                <input
                  value={todo.task}
                  onChange={(e) => {
                    const updatedTask = e.target.value;
                    saveEditedTodo(todo.id, updatedTask);
                  }}
                  onBlur={() => saveEditedTodo(todo.id, todo.task)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      saveEditedTodo(todo.id, todo.task);
                    }
                  }}
                />
                <button
                  className="btn btn-success"
                  onClick={() => saveEditedTodo(todo.id, todo.task)}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <p onClick={() => editTodo(todo.id)}>{todo.task}</p>
                <button className="btn" onClick={() => deleteTodo(todo.id)}>
                  ❌
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
