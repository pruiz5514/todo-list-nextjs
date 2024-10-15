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