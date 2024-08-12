import React, {useState} from "react";
import "./ActiveSprint.css";
import { BsSearch } from 'react-icons/bs';
import { HiArrowUp } from "react-icons/hi";


const ActiveSprint = () => {

const todolist = [
    {id: 'RT-1432' , goal : 'todo1', user: 'Александр'},
    {id: 'HG-1344' ,goal : 'todo2', user: 'Анна'},
    {id: 'OI-8844' ,goal : 'todo3', user: 'Сергей'},
    {id: 'KL-9997' ,goal : 'todo4', user: 'Андрей'},
    {id: 'RE-4445' ,goal : 'todo5', user: 'Михаил'},
    {id: 'KL-5345' ,goal : 'todo6', user: 'Вероника'}
]

const progress = [
    {id: 'RT-1445' ,goal : 'inprogress1', user: 'Александр'},
    {id: 'RT-1446' ,goal : 'inprogress2', user: 'Анна'},
    {id: 'RT-1456' ,goal : 'inprogress3', user: 'Сергей'},
    {id: 'RT-1478' ,goal : 'inprogress4', user: 'Анна'},
    {id: 'RT-1489' ,goal : 'inprogress5', user: 'Вероника'},
    {id: 'RT-1490' ,goal : 'inprogress6', user: 'Александр'}
]

const test = [
    {id: 'HJ-8766' ,goal : 'testing1', user: 'Михаил'},
    {id: 'HJ-4444' ,goal : 'testing2', user: 'Вероника'},
    {id: 'HJ-7788' ,goal : 'testing3', user: 'Андрей'},
    {id: 'HJ-4452' ,goal : 'testing4', user: 'Михаил'},
    {id: 'HJ-6665' ,goal : 'testing5', user: 'Анна'},
    {id: 'HJ-6556' ,goal : 'testing6', user: 'Александр'},
]

const done = [
    {id: 'FG-3443' ,goal : 'done1', user: 'Андрей'},
    {id: 'FG-5543' ,goal : 'done2', user: 'Александр'},
    {id: 'FG-9976' ,goal : 'done3', user: 'Михаил'},
    {id: 'FG-6657' ,goal : 'done4', user: 'Анна'},
    {id: 'FG-4440' ,goal : 'done5', user: 'Андрей'},
    {id: 'FG-7776' ,goal : 'done6', user: 'Александр'},
]

const [filter, setFilter] = useState('');

return(
<div className="active">
<div class="search">
  <input type="search" value={filter}
        onChange={({ target: { value } }) => setFilter(value)}
        id="filter" />
  < BsSearch />
</div>
<div className="board">
        <div className="column">
            <h2>To-Do</h2>
            <hr></hr>
            <div className="task-container">
            {todolist
          .filter((user) => user.user.toLowerCase().includes(filter.toLowerCase()))
          .map((user) => (
            <ul className="todo-list"> <HiArrowUp color="green" size="1.2rem" /> {user.id}
            <li key={user.user} className="todo-li">   {user.goal}  {user.user} </li>
            </ul>
          ))}
            </div>
        </div>
        <div className="column">
            <h2>In Progress</h2>
            <hr></hr>
            <div className="task-container">
            {progress
          .filter((user) => user.user.toLowerCase().includes(filter.toLowerCase()))
          .map((user) => (
            <ul className="todo-list"> <HiArrowUp color="green" size="1.2rem" /> {user.id}
            <li key={user.user} className="todo-li">  {user.goal}  {user.user} </li>
            </ul>
          ))}
            </div>
        </div>
        <div className="column">
            <h2>Testing</h2>
            <hr></hr>
            <div className="task-container">
            {test
          .filter((user) => user.user.toLowerCase().includes(filter.toLowerCase()))
          .map((user) => (
            <ul className="todo-list"> <HiArrowUp color="green" size="1.2rem" /> {user.id}
            <li key={user.user} className="todo-li">  {user.goal}  {user.user} </li>
            </ul>
          ))}
            </div>
        </div>
        <div className="column">
            <h2>Done</h2>
            <hr></hr>
            <div className="task-container">
            {done
          .filter((user) => user.user.toLowerCase().includes(filter.toLowerCase()))
          .map((user) => (
            <ul className="todo-list"> <HiArrowUp color="green" size="1.2rem" /> {user.id}
            <li key={user.user} className="todo-li"> {user.goal}  {user.user} </li>
            </ul>
          ))}
            </div>
        </div>
    </div>
</div>
)

}

export default ActiveSprint;