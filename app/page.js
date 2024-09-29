'use client'
import styles from "./page.module.css"
import GroupComponent from "./components/todosGroupComponent/GroupComponent"
import AddNewGroup from "./components/atomicComponents/popUpComponent/addNewGroup"
import { useState, useEffect } from "react"
import { token } from "@/Api/token"

function Home() {

  const [showAddPopup, setAddPopup] = useState(false)
  const [GroupDatas, setGroupDatas] = useState([])

  // ambil data
  const fetchGroup = async () => {
      const res = await fetch('https://todo-api.rakamin.com/todos', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()
      setGroupDatas(data)
  }

  useEffect(() => {
    fetchGroup()
  }, [])

  console.log('sedang mengambil dataaaa')
  console.log(GroupDatas)


  // popup add new group
  function handleAddGroup() {
    setAddPopup(!showAddPopup)
  }


  return (
    <>
      <div className={styles.header}>
        <h1>Product Roadmap</h1>
        <button onClick={handleAddGroup}>+ Add New Group</button>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          {/* for loop atau map untuk menanpilkan group */}
          {/* items={GroupDatas} */}

          {GroupDatas.map((item) => (
            <GroupComponent
              key={item.id}
              title={item.title}
              description={item.description}
              id={item.id}
              color={item.id % 4 === 0 ? 'blue' : item.id % 4 === 1 ? 'yellow' : item.id % 4 === 2 ? 'red' : 'green'}  
              items={item.items}
            />
          ))}

          {/* <GroupComponent title="Todo" description="10 tasks" id="1" color='blue' />
          <GroupComponent title="In Progress" description="20 tasks" id="2" color='yellow' />
          <GroupComponent title="Done" description="30 tasks" id="3" color='red' />
          <GroupComponent title="Done" description="30 tasks" id="4" color='green' /> */}
        </div>
      </div>

      {/* popup */}
      <div className={showAddPopup ? styles.popUp : null}>
        {showAddPopup ? <AddNewGroup id="1" onCancle={handleAddGroup} className={styles.popUp} /> : null}
      </div>

    </>
  )
}

export default Home
