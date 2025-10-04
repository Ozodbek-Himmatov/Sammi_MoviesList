import './AppInfo.scss'

const AppInfo = ({ allMovies, favMovies }) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">all: {allMovies}</p>
      <p className="fs-3 text-uppercase">favorite: {favMovies}</p>
    </div>
  )
}

export default AppInfo
