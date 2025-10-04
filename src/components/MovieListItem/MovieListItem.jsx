import './MovieListItem.css'

const MovieListItem = ({ name, views, onDelete, toggle, fav, like }) => {
  const clicker = (e) => {
    const button = e.currentTarget
    button.classList.add(
      'scale-effect',
      `${button.classList.contains('btn-fav') && !fav && 'color-effect'}`
    )
    setTimeout(() => {
      button.classList.remove('scale-effect', 'color-effect')
    }, 300)
  }

  const handleDelete = (e) => {
    clicker(e)
    setTimeout(() => {
      onDelete()
    }, 200)
  }

  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        fav && 'fav'
      } ${like && 'like'}`}
    >
      <span>{name}</span>
      <div className="d-flex gap-1">
        <input
          type="number"
          className="pe-2 form-control focus-ring"
          defaultValue={views}
        />
        <div className="gap-2 d-flex justify-content-center align-items-center ps-2">
          <button
            type="button"
            className="btn-fav btn-sm"
            onClick={(e) => {
              clicker(e)
              toggle(e)
            }}
            data-toggle="fav"
          >
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={handleDelete}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <div
            className="star-container"
            onClick={(e) => {
              toggle(e)
              clicker(e)
            }}
            data-toggle="like"
          >
            <i className="fa fa-heart"></i>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MovieListItem
