import { AiOutlineClose } from "react-icons/ai";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <AiOutlineClose
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p style={{ color: "gray", marginTop: 10, fontStyle: "italic" }}>
        {task.day}
      </p>
    </div>
  );
};

export default Task;
