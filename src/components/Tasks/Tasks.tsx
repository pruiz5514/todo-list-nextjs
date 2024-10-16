'use client'
import { Task } from '@/types/ITask';
import './Tasks.css'
import { getTasks } from '@/services/tasks';
import TaskCard from '../TaskCard/TaskCard';
import { useEffect, useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(()=>{
    const fetchTasks = async()=> {
        try{
            setTasks(await getTasks());
        }catch (e){
            console.log(e);
        }
    }
    fetchTasks()
  },[])

  const updateTasks = async () => {
    const updatedTasks = await getTasks();
    setTasks(updatedTasks);
  };

  return (
    <section className='tasks-section'>
        <h1 className='tasks-h1'>Mis tareas</h1>
        {tasks.map((task: Task) => (
            <TaskCard key={task.id} task={task} onTaskChange={updateTasks}/>
        ) )}
    </section>
  )
}

export default Tasks 