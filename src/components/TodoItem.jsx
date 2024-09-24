import { useDispatch } from "react-redux";
import { removeTodoActionCreator } from "../redux/actions/todoActions";

function TodoItem({ text, isCompleted, id }) {
    const dispatch = useDispatch();

    function removeTodoFromStore(id) {
        dispatch(removeTodoActionCreator(id));
        console.log("remove");
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={isCompleted} />
            <p>{text}</p>
            <button onClick={() => removeTodoFromStore(id)}>X</button>
        </div>
    )
}

export default TodoItem;
