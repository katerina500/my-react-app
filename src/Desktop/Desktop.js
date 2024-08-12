import React, { useState } from "react";
import "./Desktop.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { HiArrowUp } from "react-icons/hi";
import { BsSearch } from 'react-icons/bs';
import { Progress } from 'semantic-ui-react'


const Desktop = () => {

  const sprint7 = [
    {id: "KJ-8746" ,  goal: "Снижение себестоимости" , user: "Александр"},
    {id: "XP-1456" ,  goal: "Управление издержками", user: "Анна"},
    {id: "PU-5674" ,  goal: "Управление ценой и ликвидностью", user: "Михаил" },
    {id: "TR-3478" ,  goal: "Рост количества продаж", user: "Михаил" },
  ]
  
  const [todos7 , setTodos7] = useState(sprint7);

  const sprint6 = [
    {id: "XR-2398" ,  goal: "Создать идеальный продукт и обеспечить предложение", user: "Вероника" },
    {id: "GU-6809" ,  goal: "Проинформировать ЦА и обеспечить спрос", user: "Александр" },
    {id: "NG-2578" ,  goal: "Помочь удовлетворить потребность пользователя", user: "Андрей" },
  ]

  const [todos6, setTodos6] = useState(sprint6);

  const [filter, setFilter] = useState('');

  const styleLink = document.createElement("link"); 
  styleLink.rel = "stylesheet"; 
  styleLink.href =  
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"; 
  document.head.appendChild(styleLink); 

  

  return (
    <Tabs className="tabs">
      <p className="desktop-name">Backlog</p>
    <TabList>
    <div class="search">
        <input type="search" value={filter}
        onChange={({ target: { value } }) => setFilter(value)}
        id="filter" />
       < BsSearch />
      </div>
      {/* <Tab className="tab">Product</Tab> */}
      {/* <Tab className="tab">Only my issues</Tab> */}
    </TabList>

    {/* <TabPanel>
      <div className="product">
        <label className="product-name">Sprint 7</label>
        <p className="product-duration">20/05/2024 - 03/06/2024</p>
          {todos7.map((el, i) => {
            return<ul className="product-list">
            <li key={i} className="product-li"> <HiArrowUp color="green" size="1.2rem" /> {el.id}  {el.goal}  {el.user}</li>
            </ul>
          })}
      </div>
      <br></br>
      <div className="product">
      <label className="product-name">Sprint 6 </label>
          <p className="product-duration">17.07.2024 - 30.07.2024</p>
          {todos6.map((el, i) => {
            return<ul className="product-list">
              <li key={i} className="product-li"> <HiArrowUp color="green" size="1.2rem" /> {el.id}  {el.goal}  {el.user}</li>
            </ul>
          })}
      </div>
    </TabPanel> */}
    <TabPanel>
      <div className="tabpanel">
      <div className="product">
      <label className="product-name">Sprint 7</label>
      <p className="product-duration">20/05/2024 - 03/06/2024</p>
      {todos7
          .filter((user) => user.user.toLowerCase().includes(filter.toLowerCase()))
          .map((user) => (
            <ul className="product-list">
            <li key={user.user} className="product-li"> <HiArrowUp color="green" size="1.2rem" /> {user.id}  {user.goal}  {user.user} </li>
            </ul>
          ))}
      <label className="product-name">Sprint 6</label>
      <p className="product-duration">17.07.2024 - 30.07.2024</p>
      {todos6
          .filter((user) => user.user.toLowerCase().includes(filter.toLowerCase()))
          .map((user) => (
            <ul className="product-list">
              <li key={user.user} className="product-li"> <HiArrowUp color="green" size="1.2rem" /> {user.id}  {user.goal}  {user.user}</li>
            </ul>
          ))}
      </div>
      <div className="statics">
      {/* <label className="statics-name">Статистика : </label> */}
      <p>Александр  <Progress percent={72} color='red' indicating/> </p>
      <p>Анна  <Progress percent={44} color='green' indicating/> </p>
      <p>Михаил  <Progress percent={53} color='blue' indicating/> </p>
      <p>Вероника  <Progress percent={22} color='yellow' indicating/> </p>
      <p>Андрей  <Progress percent={38} color='orange' indicating/> </p>
      </div>
      </div>
    </TabPanel>
  </Tabs>
  )

}

export default Desktop;