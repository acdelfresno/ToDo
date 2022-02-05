import React, { useState, useEffect } from React;
import { FaTrash } from "react-icons/fa";



export const TodoItem = (props) => {

    const [editing, setEditing] = useState(false);

    useEffect(()=> {
        return () => {
            console.log("cleaning up...");
        }
    }, []);

    const handleEditing = () => {
        setEditing(true);
    };

    const handleUpdateDone = (e) => {
        if (e.key === "Enter"){
            setEditing(false);
        }
    };

    const { completed, id, title } = props.todo;

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                />
                <button onClick={()=> props.delTodoProps(id)}>
                    <FaTrash style={{color:"orangered", fontSize:"16px"}}/>
                </button>
                <span style={completed ? completedStyle: null}></span>
            </div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={(e)=> {props.setUpdate(e.target.value, id)}}
                onKeyDown={handleUpdateDone}
            />
        </li>
    )


};