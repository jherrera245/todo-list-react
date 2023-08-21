import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        taskList: localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [],
        nextIdTask: localStorage.getItem('nextIdTask') ? parseInt(localStorage.getItem('nextIdTask')) : 1,
    },
    reducers:{  
        addTask: (state, action) => {
            const {todoNombre, todoDescripcion, todoEstado} =action.payload;
            //agregamos un nuevo objeto de tipo Taske a la nuestro array
            state.taskList.push(
                {
                    id: state.nextIdTask,
                    todoNombre: todoNombre,
                    todoDescripcion: todoDescripcion,
                    todoEstado: todoEstado
                }
            );

            state.nextIdTask++

            //agregamos la lista de tareas actualizada al local storage
            localStorage.setItem("todo", JSON.stringify(state.taskList))
            localStorage.setItem("nextIdTask", state.nextIdTask)
        },
        checkTask: (state, action) => {
            const id = action.payload;
            state.taskList = state.taskList.map(task => {
                if (task.id === id) {
                    task.todoEstado  = (task.todoEstado === "pendiente") ? 'completado' : 'pendiente'
                }
                return task
            })
            localStorage.setItem("todo", JSON.stringify(state.taskList))
        },
        deleteTask: (state, action) => {
            const id = action.payload;
            state.taskList = state.taskList.filter(
                item => item.id !== id
            );
            localStorage.setItem("todo", JSON.stringify(state.taskList))
        }
    }
});

//exportando modulos
export const {addTask, checkTask, deleteTask} = todoSlice.actions;
export default todoSlice.reducer;