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
           

            {/* new card */}
         
                <div className={`${style.cardGroup} ${style[color]}`}>
                    <div className={style.title}>{title}</div>
                    <div className={style.description}>{description}</div>
                    <div className={style.items}>
                        {/* items di map disini */}
                        {itemsDatas.map((item) => (
                            <ItemComponent key={item.id} title={item.name} value={item.progress_percentage} id={item.id} perentId={id}/>
                        ))}
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