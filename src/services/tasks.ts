import { IPostTask } from "@/types/ITask";

export async function getTasks() {
    const response  = await fetch('http://localhost:3000/api/to-do', {
        method: 'GET',
        headers: {
            'Content-type': 'Application/json'
        }
    })
    if(!response.ok){
        alert('No se pudo obtener la informacion')
        throw new Error('No se pudo obtener la informacion')
    }
    const data = response.json();

    return data
}

export async function postTask(task:IPostTask){
    const response = await fetch('http://localhost:3000/api/to-do',{
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(task)
    })

    if(!response.ok){
        alert('No se pudo agregar la tarea');
        throw new Error('No se pudo agregar la tarea')
    }

    const data = response.json();

    return data
}

export async function deleteTask(id:number) {
    const response = await fetch('http://localhost:3000/api/to-do', {
        method: 'DELETE',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify({id:id})
    })

    if(response.status === 404){
        alert('La tarea no existe')
        throw new Error ('La tarea no existe');
    }

    const data = response.json();
    return data
}

export async function checkTask(id:number) {
    const response = await fetch(`http://localhost:3000/api/to-do?check=${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'Application/json'
        },
    })

    if(response.status === 404){
        alert('La tarea no existe')
        throw new Error ('La tarea no existe');
    }

    const data = response.json();
    return data
}