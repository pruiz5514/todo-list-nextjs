'use client'
import { RiDeleteBin6Line } from 'react-icons/ri';
import './TaskCard.css'
import { Task } from '@/types/ITask'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { checkTask, deleteTask } from '@/services/tasks';

interface CardProps {
    task: Task; 
}

const TaskCard:React.FC<CardProps>  = ({task}) => {
  const {id, name, completed} = task ;

  const deleteT = async(id:number)=> {
    try{
        await deleteTask(id);
    }catch(e){
        console.log(e);
    }
  }

  const checkT = async(id:number)=> {
    try{
        await checkTask(id);
    }catch(e){
        console.log(e);
    }
  }

  return (
    <article className='task_card-article'>
        <span className={completed ? 'checked-text': ''}>{name}</span>
        <div className='task_card-button_container'>
            <button className='view_more-button'>Ver más</button>
            <button className='delete-button' onClick={()=>(deleteT(id))}><RiDeleteBin6Line /></button>
            <button disabled={completed ? true : false } className='check-button' onClick={()=>(checkT(id))}><IoIosCheckmarkCircleOutline className={completed ? 'checked' : ''}/></button>
        </div>
    </article>
  )
}

export default TaskCard