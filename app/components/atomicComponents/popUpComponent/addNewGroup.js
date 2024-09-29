'use client'

import styles from "./popup.module.css"
import ButtonCancel from "../button/buttonCancel"
import ButtonAddNewGroup from "../button/buttonAddNewGroup"
import { useState } from "react"

function AddNewGroup({ onCancle }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    console.log(title, description)

    return (
        <div className={styles.popup}>
            <div className={styles.flex}>
                <h3 className={styles.title}>Add New Group</h3>
            </div>
            <form className={styles.formAddTask}>
                <label htmlFor="Task name">Title</label>
                <input type="text" id="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    className={styles.input}
                    placeholder="Title" required />
                <label htmlFor="description">Description</label>
                <input type="text" id="addDescription"
                    onChange={(e) => setDescription(e.target.value)}
                    className={styles.inputDescription}
                    placeholder="description" required />
            </form>
            <div className={styles.buttonContainer}>
                <ButtonCancel value="Cancel" onCancle={onCancle} color="white"/>
                <ButtonAddNewGroup value="Submit" onCancle={onCancle} color="blue" title={title} description={description} />
            </div>
        </div>
    )
}

export default AddNewGroup