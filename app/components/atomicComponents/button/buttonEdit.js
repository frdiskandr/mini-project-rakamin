'use client'
import style from './buttonComponent.module.css'
import { useState } from "react";
import { token } from '@/Api/token';

function ButtonEditTask({ value, color, id,perentId,name,progress, onCancle }) {
    const [isLoading, setIsLoading] = useState(false)


    const fetchEditTask = async () => {
        const res = await fetch(`https://todo-api.rakamin.com/todos/${perentId}/items/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                target_todo_id: id,
                name: name,
                progress_percentage: progress
            })
        })
    }

    console.log(perentId,name,progress,id)
    function handleClick() {
        fetchEditTask()
        onCancle()
        setIsLoading(true)
        setTimeout(() => {
            window.location.reload()
            setIsLoading(false)
        }, 2000)
    }
    return (
        <button onClick={handleClick}
            disabled={isLoading}
            className={`${style[color]} ${style.button}`}>
            {isLoading ? 'Loading...' : value}
        </button>
    )
}

export default ButtonEditTask