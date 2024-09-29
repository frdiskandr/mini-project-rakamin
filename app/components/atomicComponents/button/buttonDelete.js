'use client'
import style from './buttonComponent.module.css'
import { useState } from "react";
import { token } from '@/Api/token';

function ButtonDelete({ value, color, id,perentId, onCancle }) {
    const [isLoading, setIsLoading] = useState(false)

    const DeleteTask = async () => {
        const res = await fetch(`https://todo-api.rakamin.com/todos/${perentId}/items/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await res.json()
        console.log(data)
    }


    function handleClick() {
        DeleteTask()
        setIsLoading(true)
        onCancle()

        setTimeout(() => {
        setIsLoading(false)
        window.location.reload()
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

export default ButtonDelete