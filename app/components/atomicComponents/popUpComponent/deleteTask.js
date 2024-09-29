'use client'
import Image from "next/image"
import styles from "./popup.module.css"
import img from "/public/image/warning-danger.png"
import ButtonCancel from "../button/buttonCancel"
import ButtonDelete from "../button/buttonDelete"

function DeleteTask({ id,perentId, name, value, onCancle }) {
    return (
        <div className={styles.popup}>
            <div className={styles.flex}>
                <Image src={img} alt="File icon" width={26} height={26} />
                <h3>Delete Task</h3>
            </div>
            <p>Are you sure you want to delete task <b>{name}</b>? your action can,t be reverted.</p>
            <div className={styles.buttonContainer}>
                <ButtonCancel value="Cancel" onCancle={onCancle} color="white" id={id} />
                <ButtonDelete value="Delete" onCancle={onCancle} color="red" id={id} name={name} perentId={perentId}/>
            </div>
        </div>
    )
}

export default DeleteTask