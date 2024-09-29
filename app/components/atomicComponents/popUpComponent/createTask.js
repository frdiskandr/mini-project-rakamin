'use client'

import styles from "./popup.module.css"
import ButtonCancel from "../button/buttonCancel"
import ButtonSaveTask from "../button/buttonSaveTask"
import { useState } from "react"

function CreateTask({ id, onCancle }) {
    const [taskName, setTaskName] = useState('')
    const [progress, setProgress] = useState(0)

    return (
        <div className={styles.popup}>
            <div className={styles.flex}>
                <h3 className={styles.title}>Create Task</h3>
            </div>
            <form className={styles.formAddTask}>
                <label htmlFor="Task name">Task Name</label>
                <input type="text" id="TaskName"
                    onChange={(e) => setTaskName(e.target.value)}
                    className={styles.input}
                    placeholder="Task Name" required />
                <label htmlFor="Progress">Progress</label>
                <input type="number" id="Progress"
                    onChange={(e) => setProgress(e.target.value)}
                    className={styles.input} style={{ width: '40%' }}
                    placeholder="70 %" required min="0" max="100" />
            </form>
            <div className={styles.buttonContainer}>
                <ButtonCancel value="Cancel" onCancle={onCancle} color="white" id={id} name={taskName} progress={progress}/>
                <ButtonSaveTask value="Save Task" onCancle={onCancle} color="blue" id={id} name={taskName} progress={progress} />
            </div>
        </div>
    )
}

export default CreateTask