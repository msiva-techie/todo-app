import React from 'react';
import {Navbar} from "./Navbar"
import {TodoForm} from './TodoForm';
import {TodoList} from './TodoList';
const axios=require('axios');

export class App extends React.Component{

	constructor(props){
		super(props);
		this.state={
			todo:[]
		}
		this.style={
			width:'80%',
			margin:'20px auto'
		}
	}
	
	componentDidMount(){
		axios.get('http://localhost:3100/todos/').then((res)=>{
			console.log(res.data);
			this.setState({
				todo:res.data
			});
		});
	}
	addTodo = value=>{
		console.log(value);
		this.setState({
			todo:[...this.state.todo,value]
		});
	}
	deleteTodo = value=>{
		console.log(value);
		axios.delete(`http://localhost:3100/todos/delete/${value.id}`).then((res)=>{
			this.setState({
				todo:this.state.todo.filter(i=>{return i.id!==res.data.id})
			});
		});
		// todoObj.todo.splice(value,1);
		// this.setState({
		// 	todo:this.state.todo.filter((i)=>{
		// 		return i!==value;
		// 	})
		// });		
	}
	render(){
		return (
			<div>
				<Navbar/>
				<div style={this.style}>
				<TodoForm addToDo={this.addTodo}/>
				<TodoList items={this.state.todo} deleteTodo={this.deleteTodo}/>
				</div>
			</div>
			);
	};

}

// export default App;