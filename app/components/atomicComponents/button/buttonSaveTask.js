'use client'
import style from './buttonComponent.module.css'
import { useState } from "react";
import { token } from '@/Api/token';

function ButtonSaveTask({ value, color, id, onCancle, name, progress }) {
    const [isLoading, setIsLoading] = useState(false)

    const fetchAddTask = async () => {
        const res = await fetch(`https://todo-api.rakamin.com/todos/${id}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                progress_percentage: progress
            })
        })
        const data = await res.json()
        console.log(data)
    }
    function handleClick() {
        fetchAddTask()
        setIsLoading(true)
        setTimeout(() => {
            window.location.reload()
            setIsLoading(false)
            onCancle()
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

export default ButtonSaveTask