import axios from "axios";


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


const URL = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(URL)
     .then((response) => {
       const todo = response.data as Todo;
       
       const id = todo.id;
       const title = todo.title;
       const completed = todo.completed;
       
       reportTodo(id, title, completed);
     });


const reportTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    the todo with id: ${id}
    has a title of: ${title}
    is it completed? ${completed}
  `);
}