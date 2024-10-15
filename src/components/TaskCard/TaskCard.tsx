import { RiDeleteBin6Line } from 'react-icons/ri';
import './TaskCard.css'
import { Task } from '@/types/ITask'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';


interface CardProps {
    task: Task; 
}

const TaskCard:React.FC<CardProps>  = ({task}) => {
  const {id, name, date, description, completed} = task ;

  return (
    <article className='task_card-article'>
        {name}
        <div className='task_card-button_container'>
            <button className='view_more-button'>Ver más</button>
            <button className='delete-button'><RiDeleteBin6Line /></button>
            <button className='check-button'><IoIosCheckmarkCircleOutline /></button>
        </div>
    </article>
  )
}

export default TaskCard