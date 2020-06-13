import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState'




function ToDoApp() {
    // const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]") ;
    const initialTodos = [{id:1, task:"Pet a Monkey", completed: false }] ;

    const {todos, addTodo, removeTodo, editTodo, toggleTodo} = useTodoState(
        initialTodos);
    // const initialTodos = [
    //     { id: 1, task: "Clean Fishtank", completed: false },
    //     { id: 2, task: "Wash Car", completed: true },
    //     { id: 3, task: "Walk the dog", completed: false }

    // ]



    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    
    });

    return (
        <Paper style={{ height: "100vh", backgroundColor: "#fafafa", padding: 0, margin: 0 }}
            elevation={0}>
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <ToolBar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </ToolBar>

            </AppBar>

            <Grid container justify="center" style={{marginTop: "1rem"}} > 
                <Grid item  xs={11} md={4}> 
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} 
             editTodo={editTodo}
            removeTodo={removeTodo}
             toggleTodo={toggleTodo}/>
            </Grid>  
            </Grid>
        </Paper>
    )
}
export default ToDoApp;