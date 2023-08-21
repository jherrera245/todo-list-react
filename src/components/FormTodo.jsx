import { useDispatch } from 'react-redux';
import { addTask } from '../reduxtlk/slice';
import { useState } from "react";

const FormTodo = () => {
    
    const dispatch = useDispatch();

    const [todo, setTodo] = useState({
        todoNombre: "Tarea #01",
        todoDescripcion: "Descripción tarea #01",
        todoEstado: "pendiente",
    });

    // Formulario controlado
    const handleSubmit = (e) => {
        e.preventDefault()
        //despachamos el estado del slide
        dispatch(addTask(todo))
    };

    const handleOnChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        // setTodo({ ...todo, [e.target.name]: e.target.value });
        // utilizando el callback
        setTodo((todo) => ({
            ...todo,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="col-lg-6 col-sm-12">
            <form
                onSubmit={handleSubmit}
            >
                <div className="card bg-dark">
                    <div className="card-header">
                        <div className="card-title text-info">
                            Registro de tareas
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <input
                                    className="form-control mb-2"
                                    type="text"
                                    placeholder="Ingrese un TODO"
                                    name="todoNombre"
                                    value={todo.todoNombre}
                                    onChange={handleOnChange}
                                />
                            </div>

                            <div className="col-12 mb-3">
                                <textarea
                                    className="form-control mb-2"
                                    type="text"
                                    placeholder="Ingrese un TODO"
                                    name="todoDescripcion"
                                    value={todo.todoDescripcion}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select mb-2"
                                    name="todoEstado"
                                    value={todo.todoEstado}
                                    onChange={handleOnChange}
                                >
                                    <option value="pendiente">Pendiente</option>
                                    <option value="completado">Completado</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer">
                        <button
                            className="btn btn-info"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormTodo;
