/* eslint-disable react/prop-types */

const Task = ({ tasks }) => {
 return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.name}>
            <td>
              <span
                className={task.completed ? 'completed-task' : ''}
                style={{ textDecoration: task.completed ? 'line-through' : '' }}>
                {task.name}
              </span>
            </td>
            <td>{task.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
 );
};

export default Task;
