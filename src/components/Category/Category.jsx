import './Category.css'

const Category = ({ filterUpdater, filter }) => {
  const clicker = (e, btnName) => {
    e.target.classList.add('bounce-effect')
    setTimeout(() => {
      e.target.classList.remove('bounce-effect')
      filterUpdater(btnName)
    }, 200)
  }

  return (
    <div className="btn-group">
      {btns.map((btn) => (
        <button
          key={btn.name}
          className={`btn btn${filter !== btn.name ? '-outline' : ''}-dark`}
          type="button"
          onClick={(e) => clicker(e, btn.name)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  )
}

const btns = [
  { name: 'all', label: 'All' },
  { name: 'like', label: 'Favorite' },
  { name: 'watched', label: 'Most Watched' },
]

export default Category
