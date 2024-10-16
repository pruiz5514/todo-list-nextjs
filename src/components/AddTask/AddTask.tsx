
import './AddTask.css'
import Form from '../Form/Form'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import { postTask } from '@/services/tasks'

const AddTask = async() => {
  async function handleSubmit(formData: FormData){
    'use server'
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    const body = {
        name: name,
        description: description,
        date: 'hoy'
    };

    try{
        await postTask(body);
    } catch(e){
        console.log(e);
    }    
  } 

  return (
    <section>
        <h1 className='add_task-h1'>Crear una tarea</h1>
        <Form action={handleSubmit}>
            <Input placeholder='Nombre tarea' type='text' name='name'/>
            <Input placeholder='Breve descripcion de la tarea' type='text' name='description'/>
            <Button>Crear tarea</Button>
        </Form>
    </section>
  )
}

export default AddTask