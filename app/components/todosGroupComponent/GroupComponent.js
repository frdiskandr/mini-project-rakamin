'use client'
import style from './Group.module.css'
import ItemComponent from '../itemComponent/itemComponent'
import { useState, useEffect } from "react"
import CreateTask from '../atomicComponents/popUpComponent/createTask'
import { token } from '@/Api/token'

export default function GroupComponent({ title, description, id, color }) {

    const [showNewTask, setNewTask] = useState(false)
    const [itemsDatas, setItemsDatas] = useState([])


    // ambil data
    const fetchItems = async () => {
        const res = await fetch('https://todo-api.rakamin.com/todos/' + id + '/items', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        const data = await res.json()
        console.log(data)
        setItemsDatas(data)
    }

    useEffect(() => {
        fetchItems()
    },[])

    function handleNewTask() {
        setNewTask(!showNewTask)
    }

    return (
        <>
            <div className={`${style.container} ${style[color]}`}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
                <div className={style.itemContainer}>
                    {/* items di map disini */}
                    {itemsDatas.map((item) => (
                        <ItemComponent key={item.id} title={item.name} value={item.progress_percentage} id={item.id} perentId={id} />
                    ))} 

                    {/* <ItemComponent title="Todo" value={10} id={id} />
                    <ItemComponent title="In Progress" value={20} id={id} />
                    <ItemComponent title="Done" value={30} id={id} /> */}
                </div>
                <div className={style.button}
                    onClick={handleNewTask}>
                    New Task
                </div>
            </div>

            {/* popup */}
            <div className={showNewTask ? style.popUp : null}>
                {showNewTask ? <CreateTask id={id} onCancle={handleNewTask} className={style.popUp} /> : null}
            </div>

        </>
    )
}