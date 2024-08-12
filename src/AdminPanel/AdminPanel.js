import React, {useState, useRef} from "react";
import Modal from 'react-modal';
import "./AdminPanel.css";


const AdminPanel = () => {

const [modalIsOpen, setModalIsOpen] = useState(false);
const [modalIsOpenTodos, setModalIsOpenTodos] = useState(false);
const formRef = useRef();
const sprintRef = useRef();
    




const todolist = [
    {title: 'Заголовок', subtitle: 'Подзаголовок', author: 'Автор', executor: 'Исполнитель', day: '1' , hours: '1', description: 'Описание задачи', id: 'XX-1234'}
]


const sprintlist = [
    {name: 'Спринт' , goal: 'Цель' , duration: '2 недели', leadTime: '15 д.' , fullName: 'ФИО', jobTitle: 'Должность', subdivision: 'Подразделение'}
]

const [todos , setTodos] = useState(todolist);

const [sprint, setSprint] = useState(sprintlist);

const [inputValue , setInputValue] = useState({
    title: '',
    subtitle: '',
    author: '',
    executor: '',
    day: '',
    hours: '',
    description: '',
    id: ''
});

const [inputFormValue, setInputFormValue] = useState({
    name: '',
    goal: '',
    duration: '',
    startDate: '',
    endDate: '',
    leadTime: '',
    fullName: '',
    jobTitle: '',
    subdivision: ''
})


const addNewItem = (newItem) => {
    setTodos([...todos, newItem]);
  };

const addNewSprint = (newSprint) => {
    setSprint([...sprint, newSprint]);
}
        
const openModal = () => {
    setModalIsOpen(true);
};
          
const closeModal = () => {
    setModalIsOpen(false);
};

const openModalTodos = () => {
    setModalIsOpenTodos(true);
}

const closeModalTodos = () => {
    setModalIsOpenTodos(false);
}

const handleChange = (e) => {

    const {name, value }  = e.target;
        
        setInputValue(prevState=> ({
        
                    ...prevState,
        
                    [name]:value
        
    }));
};

const handleChangeSprint = (e) => {

    const {name, value} = e.target;   

    setInputFormValue(prevState=> ({

        ...prevState,

        [name]:value

    }));
    setInputFormValue(prevState=> ({

        ...prevState,

        'leadTime': function(s) {
            if (s.startDate && s.endDate) {
                try {
                    console.log(s.startDate);
                    const startDate = new Date(s.startDate);
                    const endDate = new Date(s.endDate);
                    console.log(startDate);
                    const one_day = 1000 * 60 * 60 * 24;
                     return Math.ceil((endDate.getTime() - startDate.getTime()) / one_day);
                } catch (exception) {
                    console.log(exception);
                }
            }  
            return '';
        } (prevState)

    }));

};


        
const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();

    const newTask = {

        ...inputValue,

        id: `${getRandom(2)}-${randNum}`,
    }

    addNewItem(newTask);

        setInputValue({

            title: '',

            subtitle: '',

            author: '',

            executor: '',

            day: '',

            hours: '',

            description: '',

            id: ''

    });

};

const handleSubmitSprint = (e) => {
    e.preventDefault();
    sprintRef.current.reset();
    const newTaskSprint = {
        ...inputFormValue,

    };
    addNewSprint(newTaskSprint);
    setInputFormValue({
        name: '',
        goal: '',
        duration: '',
        startDate: '',
        endDate: '',
        leadTime: '',
        fullName: '',
        jobTitle: '',
        subdivision: ''
    });
};


const getRandom = (n) => {
    if (n<0 || n>26) return "Error";
    let set = new Set();
   
    for (let i=0; i<n;) {
      let letter = Math.random().toString(36)[3].toUpperCase();
      if (!set.has(letter) && isNaN(letter)) {set.add(letter); i++}
    }
   
    return Array.from(set).join('');
}

  const randNum = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);




        

const modalContent = (
    <div className="modal-open-admin">
        <form onSubmit={handleSubmitSprint}
        ref={sprintRef}
            className="modal-admin">
            <p>Имя спринта</p>
            <input className='modal-admin-input' required id="name" name="name"  value={inputFormValue.name} onChange={handleChangeSprint}
            type='text'/>
            <p>Цель спринта</p>
            <input className='modal-admin-input' required id="goal" name="goal" value={inputFormValue.goal} onChange={handleChangeSprint}
            type='text'/>
            <p>Длительность</p>
            <select className='modal-admin-input' required id="duration" name="duration" value={inputFormValue.duration} onChange={handleChangeSprint}>
                <option>1 неделя</option>
                <option>2 недели</option>
                <option>3 недели</option>
                <option>4 недели</option>
            </select>
            <p>Дата начала</p>
            <input className='modal-admin-input start-date' required  id="startDate" name="startDate"  value={inputFormValue.startDate} onChange={handleChangeSprint}
            type='date'  />
            <p>Дата окончания</p>
            <input className='modal-admin-input end-date'  required  id="endDate" name="endDate"  value={inputFormValue.endDate} onChange={handleChangeSprint}
            type='date'  />
            <p >Количество дней: {inputFormValue.leadTime}</p>
            <p>ФИО</p>
            <input className='modal-admin-input' required id="fullName" name="fullName" value={inputFormValue.fullName} onChange={handleChangeSprint}
            type='text'/>
            <p>Должность</p>
            <input className='modal-admin-input' required id="jobTitle" name="jobTitle" value={inputFormValue.jobTitle} onChange={handleChangeSprint}
            type='text'/>
            <p>Подразделение</p>
            <input className='modal-admin-input' required id="subdivision" name="subdivision" value={inputFormValue.subdivision} onChange={handleChangeSprint}
            type='text'/>
            <div className="modal-btn">
            <button 
            className='modal-admin-btn btn-1' 
            onClick={closeModal}>
            Отмена
            </button>
            <button type="submit"
            className='modal-admin-btn btn-2'>
            Добавить
            </button>
            </div>
        </form>
    </div>
    )


const modalContentTodos = (
    <form onSubmit={handleSubmit}
      ref={formRef}>
    <label className="modal-admin-title">
        <b>Добавить задачу</b>
    </label>
    <div>
    <p>Заголовок</p>
    <input  className='modal-admin-input' required id="title" name="title" value={inputValue.title} onChange={handleChange}/>
    <p>Подзаголовок</p>
    <input  className='modal-admin-input' required id="subtitle" name="subtitle" value={inputValue.subtitle} onChange={handleChange} />
    <p>Автор</p>
    <input  className='modal-admin-input' required id="author" name="author" value={inputValue.author} onChange={handleChange}/>
    <p>Исполнитель</p>
    <input  className='modal-admin-input' required id="executor" name="executor" value={inputValue.executor} onChange={handleChange}/>
    <p>Время выполнения</p>
    <div onChange={handleChange}>
      <input className='modal-admin-input duration1' 
        type='number' id="day" name="day" value={inputValue.day}/> 
        <span> д. </span>
      <input className='modal-admin-input duration2' 
        type='number' max={7} id="hours" name="hours" value={inputValue.hours}/>
        <span> ч. </span>
    </div>
    <p>Описание задачи</p>
    <input type="text" minLength = "40" className='modal-admin-input' id="description" name="description" value={inputValue.description} onChange={handleChange}/>
    <p name="id" id="id" value={inputValue.id} onChange={handleChange}> ID : {`${getRandom(2)}-${randNum}`} </p>
    </div>
    <br></br>
    <div>
    <button type="submit">Создать</button>
    <button onClick={closeModalTodos}>Отмена</button>
    </div>
   </form>
)


        
return (
    <div className="admin-panel">
        <label>Панель Администратора</label>
        <div className="admin-panel-btn">
        <div>
           <button className='todo-btn-add' onClick={openModalTodos}>Добавить задачу</button>
           <Modal isOpen={modalIsOpenTodos} onRequestClose={closeModalTodos} ariaHideApp={false} onAdd={addNewItem}>
            {modalContentTodos}
           </Modal>
        </div>
        <div>
            <button className='todo-btn-add' onClick={openModal}>Добавить спринт</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} onAdd={addNewSprint}>
            {modalContent}
            </Modal>
        </div>
        </div>
        <div>
            <label>Backlog</label>
            <ul className='todolist'> 
        {todos.map((el, i) => {
          return <li className='todolist-item' key={i}>
           ID: {el.id};  Название: {el.title};  Подзаголовок: {el.subtitle};  Автор: {el.author};  Исполнитель: {el.executor};  Времы выполнения: {el.day} д. {el.hours} ч.;  Описание задачи: {el.description} </li> ;
             })}
        </ul>
        </div>
        <br></br>
        <div>
            <label>Sprint</label>
            <ul className='sprint'> 
        {sprint.map((el, i) => {
          return <li className='sprint-item' key={i}>
            Имя спринта: {el.name};  Цель: {el.goal};  Длительность: {el.duration}; Количество дней: {el.leadTime} ; ФИО: {el.fullName};  Должность: {el.jobTitle};  Подразделение: {el.subdivision} </li> ;
             })} 
        </ul>
        </div>
    </div>
       )
    
}

export default AdminPanel;