import style from './surveyDialogMenu.module.css'
import Image from 'next/image'
import arrowImg from '/public/image/down-left-arrow.png'
import editImg from '/public/image/edit-tool.png'
import deleteImg from '/public/image/delete-button.png'
import { token } from '@/Api/token'


function SurveyDialogMenu({ id,perentId,name,persentase, showDelete, showEdit }) {

    const move = (value) => {
        
       const fetchMoveRight = async () => {
        const res = await fetch(`https://todo-api.rakamin.com/todos/${perentId + value}/items`
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: name,
                    progress_percentage: persentase
                })
            })
        const data = await res.json()      
        console.log(data)
    }

        fetchMoveRight()

    const fetchDelete = async () => {
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

        fetchDelete()
        window.location.reload()
    }


    function handleMoveRight() {
        move(1)
    }

    function handleMoveLeft() {
        move(-1)
    }

    function handleEdit() {
        showEdit()
    }

    function handleDelete() {
        showDelete()
    }

    return (
        <div className={style.menuContainer}>
            <div className={style.button}>
                <Image src={arrowImg} alt="File icon" width={16} height={16} className={style.left} />
                <h5 onClick={handleMoveRight} className={style.title}>Move Right</h5>
            </div>
            <div className={style.button}>
                <Image src={arrowImg} alt="File icon" width={16} height={16} className={style.right} />
                <h5 onClick={handleMoveLeft} className={style.title}>Move Left</h5>
            </div>

            <div className={style.button}>
                <Image src={editImg} alt="File icon" width={16} height={16} className={style.img} />
                <h5 onClick={handleEdit} className={style.title}>Edit</h5>
            </div>
            <div className={style.delete}>
                <Image src={deleteImg} alt="File icon" width={16} height={16} className={style.img} />
                <h5 onClick={handleDelete} className={style.title}>Delete</h5>
            </div>

        </div>
    )
}

export default SurveyDialogMenu