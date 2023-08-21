import { useDispatch } from 'react-redux';
import { checkTask, deleteTask } from '../reduxtlk/slice';
import PropTypes from 'prop-types';

const ListItem = ({ tasks }) => {
    const classItem = "alert"
    const classCheckTask = "text-decoration-line-through"
    const classBadge = "ms-2 badge"
    const dispatch = useDispatch();

    const handleRemoveTask = (id) => {
        dispatch(deleteTask(id))
    }

    const handleCheckTask = (id) => {
        dispatch(checkTask(id))
    }

    return (
        <ul className="list-unstyled">
            {tasks.map((task, index) => {
                return (
                    <li 
                        className={index % 2 == 0 ? `${classItem} alert-primary` : `${classItem} alert-success`} 
                        key={index} >
                        <div className="row">
                            <div className="col-11">
                                <h4 className="fw-bold">
                                    {task.todoNombre} 
                                </h4>
                            </div>

                            <div className="col-1">
                                <button
                                    type="button"
                                    onClick={() => handleRemoveTask(task.id)}
                                    className="btn btn-danger btn-sm">
                                    x
                                </button>
                            </div>
                            
                            <div className="col-12">
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        aria-label="checked task" 
                                        type="checkbox" 
                                        onChange={() => handleCheckTask(task.id)} 
                                        checked={task.todoEstado !== 'pendiente'} />
                                    <label className={task.todoEstado === 'pendiente' ? 'form-check-label' : `form-check-label ${classCheckTask}`}>
                                        {task.todoDescripcion}
                                    </label>
                                    <span 
                                        className= {task.todoEstado === "pendiente" ? `${classBadge} bg-secondary` : `${classBadge}  bg-success`}>
                                        {task.todoEstado.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </li>
                );
            })}
        </ul>
    )
}

ListItem.propTypes = {
    tasks: PropTypes.array.isRequired,
};


export default ListItem;