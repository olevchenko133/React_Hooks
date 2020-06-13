import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './hooks/useToggleState';
// import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm'



function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState();

    return (
        <ListItem style={{ height: "64px" }}>

            {isEditing ? (<EditTodoForm editTodo={editTodo} id={id} task={task}
                toggleEditForm={toggle}
            />) :
                <>
                    <Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)} />

                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="delete-icon" onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="edit-icon" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}
export default Todo;