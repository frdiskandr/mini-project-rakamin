"use client";
import style from "./progresBar.module.css";
import { useState } from "react";
import SurveyDialogMenu from "../surveyDialogMenu/SurveyDialogMenu";
import imgCeklist from "/public/image//Tick_Mark_Dark_icon-icons.com_69147.png";
import Image from "next/image";
import DeleteTask from "../popUpComponent/deleteTask";
import EditTask from "../popUpComponent/editTask";

export default function ProgresBarr({ value, name, id, perentId }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  function handleShowDelete() {
    setShowDelete(!showDelete);
  }

  function handleShowEdit() {
    setShowEdit(!showEdit);
  }

  console.log("inii data item",value, name, id, perentId);

  return (
    <>
      <div className={style.container}>
        {/* progress bar */}
        <div className={style.container_bar}>
          <div className={style.progres}>
            <div
              className={style.progres_bar}
              style={{
                width: `${value}%`,
                backgroundColor: `${
                  value == 100 ? "green" : "rgb(16, 194, 218)"
                }`,
              }}
            ></div>
          </div>
        </div>
        {/* progress count */}
        <div className={style.progres_count}>
          {value == 100 ? (
            <Image
              src={imgCeklist}
              alt="File icon"
              width={16}
              height={16}
              className={style.img}
            />
          ) : (
            `${value}%`
          )}
        </div>

        {/* Menu */}
        <div className={style.menu} onClick={handleShowMenu}>
          <p className={style.menu_text}>...</p>
          {showMenu ? (
            <SurveyDialogMenu
              id={id}
              perentId={perentId}
              name={name}
              persentase={value}
              showDelete={handleShowDelete}
              showEdit={handleShowEdit}
            />
          ) : null}
        </div>
      </div>

      {/* popUp */}
      <div className={showDelete ? style.popUp : null}>
        {showDelete ? (
          <DeleteTask
            id={id}
            name={name}
            value={value}
            perentId={perentId}
            onCancle={handleShowDelete}
            className={style.popUp}
          />
        ) : null}
      </div>

      <div className={showEdit ? style.popUp : null}>
        {showEdit ? (
          <EditTask onCancle={handleShowEdit} name={name} value={value} id={id} perentId={perentId} className={style.popUp} />
        ) : null}
      </div>
    </>
  );
}
