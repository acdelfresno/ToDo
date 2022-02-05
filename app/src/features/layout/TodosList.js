import React from "react";
import { TodoItem } from "./TodoItem";

export const TodosList = (props) => {
    return (
        <ul>
            {props.todos.map($=>(
                <TodoItem
                    key={$.id}
                    todo={$}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdate={props.setUpdate}
                />
            ))}
        </ul>
    )
};