import style from './item.module.css'
import ProgresBarr from '../atomicComponents/progresCountComponent/progresBarr'
function ItemComponent({ title, value, id, perentId }) {
  return (
    <>
      <div className={style.card} id={id}>
        <h5 className={style.title}>{title}</h5>
        <ProgresBarr name={title} value={value} id={id} perentId={perentId} />
      </div>

    </>

  )
}
export default ItemComponent