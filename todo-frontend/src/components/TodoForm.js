import React,{useState} from 'react';
const axios=require('axios');

export function TodoForm(props){
	const [inputVal,setInputVal]=useState("");
	const handleOnChange = function(event){
		// console.log(event.target.value);
		setInputVal(event.target.value);
	}

    const handleClick = function(e){
		axios.post('http://localhost:3100/todos/',{
			title:inputVal,
			priority:1
		}).then((res)=>{
			console.log('response from Server....',res.data);
			console.log('inputVal....',res.data[0]);
			props.addToDo(res.data[0]);
			setInputVal("");
		});
	}

	return (
	<div className="form-group">
	  <label htmlFor=""></label>
	  <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={inputVal} onChange={handleOnChange}/>
	  {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
	  <button style={{'margin-top':"10px"}} type="button" name="" id="" className="btn btn-primary btn-lg btn-block" onClick={handleClick}>Add ToDo</button>
	</div>
		);
}