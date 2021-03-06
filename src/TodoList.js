import React from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if(todos.length)
    return (
    
        <Paper>
            <List>
                {todos.map((todo , i)=> (
                    <>
                        <Todo task={todo.task}
                            id={todo.id}
                            key={todo.id}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />

                    {i < todos.length -1 &&    <Divider />}
                    </>
                ))}

            </List>
        </Paper>
    

    )
    return null;
}
export default TodoList;