import React from 'react';

export function TodoList(props){
	console.log(props);

	function deleteTodo(item){
		props.deleteTodo(item);
	}

	return (
	<div>
	<ul className="list-group">
		{
			props.items.map((item,index)=>{
				return (
				<li className="list-group-item">{item.title}
					<button type="button" className="close" aria-label="Close" onClick={()=>{deleteTodo(item)}}>
					<span aria-hidden="true">&times;</span>
					</button>
			  	</li>
				)
			})
		}
	</ul>
	</div>
	);
}

// export default App;