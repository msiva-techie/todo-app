import React ,{useState,useEffect} from 'react';
import {Navbar} from "./Navbar"
import {TodoForm} from './TodoForm';
import {TodoList} from './TodoList';
const axios=require('axios');

export function App(){
	// let items=['Task 1','Task 2','Task 3','Task 4'];
	const [todoObj,setTodoObj]=useState({
		todo:[]
	});

	useEffect(function(){
		axios.get('http://localhost:3100/todos/').then((res)=>{
			console.log(res.data);
			setTodoObj({
				todo:res.data
			});
		});
	},[]);

	const addTodo = value=>{
		console.log(value);
		setTodoObj({
			todo:[...todoObj.todo,value]
		});
	}
	const deleteTodo = value=>{
		console.log(value);
		// todoObj.todo.splice(value,1);
		setTodoObj({
			todo:todoObj.todo.filter((i)=>{
				return i!==value;
			})
		});		
	}
	return (
	<div>
		<Navbar/>
		<TodoForm addToDo={addTodo}/>
		<TodoList items={todoObj.todo} deleteTodo={deleteTodo}/>
	</div>
	);
}

// export default App;