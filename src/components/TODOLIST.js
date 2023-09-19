import React, { useState } from "react";
import './To-do-list.css';
import logo from './images/logo.png';

function TODOLIST() {

    // set the initial value and updated value by use state function//
    const [newtodos, setnewtodos] = useState("");
    //set the initial value and updated value in the array list//
    const [todos, settodos] = useState([]);
    // create a function for add the data in a array//
    function handleAddtodo() {
        settodos((todos) => {
            const updatedlist = [...todos, newtodos]
            //for empty the input field//
            setnewtodos("");
            return updatedlist;
        }

        )
    }
    //create the function for delete the data from the list//
    function handleDeleteTodo(index) {
        const updateddata = todos.filter((Elem, id) => {
            return index != id;
        })
        settodos(updateddata);

    }
    function deleteall() {
        settodos([])
    }
    //mapping over the array to toggle .strike on or off and creates a new array
    // const comtask = (index)=>{
    //     const uptodos=[...todos];
    //     newtodos[index].checked=!newtodos.checked;
    //     settodos(uptodos);

    // }
       
        
      
    return (
        <>
            <section>
                {/* Main Container */}
                <div className="main-container">
                    {/*Sub-container  */}
                    <div className="sub-container">
                        <h1 className="main-heading">TO-DO-LIST<img src={logo} alt="" /></h1>
                        <input className="inputfield" placeholder="Add Your Task" type="text" value={newtodos} onChange={(e) => setnewtodos(e.target.value)} />
                        <input className="btn  button1" onClick={handleAddtodo} type="submit" value="Add a To-do" />
                        <div className="mt-5  pt-5">
                            {todos != [] && todos.map((todo, index) => {
                                return (
                                    <ol key={index}>
                                        <div key={index}>
                                            <li>
                                            {todo}<button onClick={() => handleDeleteTodo(index)} type="button" class="btn btn-danger button2">Delete </button></li>
                                        </div>
                                    </ol>


                                )
                            })}
                            {todos.length >= 1 && <button className="btn btn-secondary btn3" onClick={deleteall}>Delete All</button>}

                        </div>
                    </div>
                    {/*Sub-container  */}
                </div>
                {/* Main Container */}
            </section>
        </>

    );
};
export default TODOLIST;
