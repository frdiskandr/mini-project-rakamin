'use client'
import style from './buttonComponent.module.css'
import { useState } from "react";

function ButtonAddNewGroup({ value, title,description, color, onCancle }) {
    const [isLoading, setIsLoading] = useState(false)

    const fetchAddGroup = async () => {
        const res = await fetch('https://todo-api.rakamin.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2MDgsImV4cCI6MTczNjIyODY5N30.Fg8Fq3BAq72OfYxBKdsHWvOvHrcLO_RPXTnOMyZ59jY'
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