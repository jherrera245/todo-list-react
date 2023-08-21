import ListItem from "./ListItem";
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {

    const tasks = useSelector(state => state.taskList)
    
    return (
        <div className="col-lg-6 col-sm-12">
            <h4 className="text-info">Mis tareas</h4>

            <div className="row">
                <div className="col-12">
                    {tasks.length > 0 ? (
                        <ListItem tasks={tasks}/>
                    )
                    :
                        <div className="alert alert-info">
                            Sin Tareas disponibles
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default TodoList;