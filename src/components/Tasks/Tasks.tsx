import { Task } from '@/types/ITask';
import './Tasks.css'
import { getTasks } from '@/services/tasks';
import TaskCard from '../TaskCard/TaskCard';

const Tasks = async() => {
  const tasks = await getTasks();

  return (
    <section className='tasks-section'>
        <h1 className='tasks-h1'>Mis tareas</h1>
        {tasks.map((task: Task) => (
            <TaskCard key={task.id} task={task}/>
        ) )}
    </section>
  )
}

export default Tasks 