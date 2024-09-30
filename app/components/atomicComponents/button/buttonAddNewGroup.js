'use client'
import style from './buttonComponent.module.css'
import { useState } from "react";
import { token } from '@/Api/token';

function ButtonAddNewGroup({ value, title,description, color, onCancle }) {
    const [isLoading, setIsLoading] = useState(false)

    const fetchAddGroup = async () => {
        const res = await fetch('https://todo-api.rakamin.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        })
    }

    function handleClick() {
        fetchAddGroup()
        setIsLoading(true)
        setTimeout(() => {
            onCancle()
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

export default ButtonAddNewGroup