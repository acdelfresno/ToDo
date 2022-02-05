import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export const InputTodo = ( props ) => {

    const [ inputText, setInputText ] = useState({
        title = "",
    });

    const onChange = (e) => {
        setInputText({
            ...inputText,
            [e.target.name] : e.target.value,    
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.title.trim()){
            props.addTodoProps(inputText.title);
            setInputText({
                title:"",
            })
        } else {
            alert("Please write any item")
        }
    };

    return (
        <form onSubmit={ handleSubmit } className="form-container">
            <input 
                type = "text"
                class-name = "input-text"
                placeholder = "add ToDo..."
                value = {inputText.title}
                name = "title"
                onChange = {onChange}
            />
            <button className = "input-submit">
                <FaPlusCircle style={{ color:"darkcyan", fontSize:"20px", marginTop:"2px"}}/>
            </button>
        </form>
    )

};

