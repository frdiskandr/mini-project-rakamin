'use client'

import styles from "./popup.module.css"
import ButtonCancel from "../button/buttonCancel"
import ButtonEditTask from "../button/buttonEdit"
import { useState } from "react"

function EditTask({ id,name, value,perentId, onCancle }) {

    const [nameTask, setName] = useState('')
    const [progress, setProgress] = useState(0)

    return (
        <div className={styles.popup}>
            <div className={styles.flex}>
                <h3 className={styles.title}>Edit Task</h3>
            </div>
            <form className={styles.formAddTask}>
                <label htmlFor="Task name">Task Name</label>
                <input type="text" id="TaskName"
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                    placeholder="Task Name" required />
                <label htmlFor="Progress">Progress</label>
                <input type="number" id="Progress"
                    onChange={(e) => setProgress(e.target.value)}
                    className={styles.input} style={{ width: '40%' }}
                    placeholder="70 %" required min="0" max="100" />
            </form>
            <div className={styles.buttonContainer}>
                <ButtonCancel value="Cancel" onCancle={onCancle} color="white" id={id} />
                <ButtonEditTask value="Save Task" onCancle={onCancle} color="blue" id={id} perentId={perentId} name={nameTask} progress={progress}/>
            </div>
        </div>
    )
}

export default EditTask