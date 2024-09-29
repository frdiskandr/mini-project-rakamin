'use client'
import style from './buttonComponent.module.css'
import { useState } from "react";
import globalCss from '@/app/page.module.css'

function ButtonCancel({ value, color, id, onCancle }) {
    const [isLoading, setIsLoading] = useState(false)


    return (
        <button onClick={onCancle}
            disabled={isLoading}
            className={`${style[color]} ${style.button}`}>
            {isLoading ? 'Loading...' : value}
        </button>
    )
}

export default ButtonCancel