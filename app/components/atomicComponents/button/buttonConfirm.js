'use client'
import style from './buttonComponent.module.css'
import { useState } from "react";

function ButtonConfirm({ value, color, id }) {
    const [isLoading, setIsLoading] = useState(false)

    function handleClick() {
        alert(id)
        alert("ini confirm")
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

export default ButtonConfirm