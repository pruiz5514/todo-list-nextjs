import { Task } from "@/types/ITask";
import { NextResponse } from "next/server";


let taskList: Task[] = [];

export async function GET(req: Request) {
  const url = new URL(req.url);
  
  const status = url.searchParams.get("status");
  let filterTask = taskList;
  if (!status) return NextResponse.json(filterTask);
  console.log(status == "completed")

  if (status == "completed") {
    filterTask = taskList.filter((task) => task.completed);
  } else {
    filterTask = taskList.filter((task) => !task.completed);
  }

  return NextResponse.json(filterTask);
}

export async function  POST(req:Request) {
    const body = await req.json();
    if(!body) return NextResponse.json({
        message: "La tarea no es valida"
    }, {status: 400})

    if(!body.date || !body.description || !body.name ){
        return NextResponse.json({
            message: "La tarea no es valida"
        }, {status: 400})
    }

    const newTask: Task = { id: Date.now(),completed: false , ...body  }
    taskList.push(newTask)

    return NextResponse.json(newTask, { status: 201})
}

export async function DELETE(req:Request){
    const {id} = await req.json();
    const index = taskList.findIndex(task => task.id === id)

    if(index === -1) return NextResponse.json({
        message: "La tarea no existe"
    },{status:404})

    const deletedTask = taskList.splice(index,1)

    return NextResponse.json(deletedTask, {status:201});
}

export async function PATCH (req:Request){
    const url = new URL(req.url);
    const checkedTaskId = url.searchParams.get("check");
    const index = taskList.findIndex(task => task.id === Number(checkedTaskId));

    if(index === -1) return NextResponse.json({
        message: "La tarea no existe"
    },{status:404})

    taskList[index].completed = true;

    return NextResponse.json(taskList[index], {status:201})
}