import './App.css'
import AppInfo from '../AppInfo/AppInfo'
import SearchPanel from '../SearchPanel/SearchPanel'
import Category from '../Category/Category'
import MovieList from '../MovieList/MovieList'
import MoviesAddForm from '../MoviesAddForm/MoviesAddForm'
import { v4 as uuidv4 } from 'uuid'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: uuidv4(),
          name: 'Daredevil',
          views: '936',
          fav: false,
          like: false,
        },
        {
          id: uuidv4(),
          name: 'Agent Carter',
          views: '842',
          fav: false,
          like: true,
        },
        {
          id: uuidv4(),
          name: 'Punisher',
          views: '1034',
          fav: false,
          like: false,
        },
        {
          id: uuidv4(),
          name: 'Sherlock',
          views: '1785',
          fav: false,
          like: true,
        },
        {
          id: uuidv4(),
          name: 'Free Guy',
          views: '573',
          fav: false,
          like: false,
        },
        {
          id: uuidv4(),
          name: 'Se7en',
          views: '3694',
          fav: false,
          like: true,
        },
      ],
      term: '',
      filter: 'all',
    }
  }

  searchHandler = (arr, term) => {
    !term.length && arr
    return arr.filter(
      (x) => x.name.toLowerCase().indexOf(term.toLowerCase()) > -1
    )
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case 'like':
        return arr.filter((x) => x.like)
      case 'watched':
        return arr.filter((x) => x.views > 900)
      default:
        return arr
    }
  }

  termUpdater = (term) => this.setState({ term })

  filterUpdater = (filter) => this.setState({ filter })

  onDelete = (id) => {
    setTimeout(() => {
      this.setState(({ data }) => ({
        data: data.filter((x) => x.id !== id),
      }))
    }, 300)
  }

  addForm = (x) => {
    this.setState(({ data }) => ({
      data: [
        ...data,
        { name: x.name, views: x.views, id: uuidv4(), fav: false, like: false },
      ],
    }))
  }

  toggle = (id, prop) =>
    this.setState(({ data }) => ({
      data: data.map((x) => (x.id === id ? { ...x, [prop]: !x[prop] } : x)),
    }))

  render() {
    const { data, term, filter } = this.state
    const allMovies = data.length
    const favMovies = data.filter((x) => x.fav).length
    const visibleData = this.filterHandler(
      this.searchHandler(data, term),
      filter
    )

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMovies={allMovies} favMovies={favMovies} />
          <div className="search-panel">
            <SearchPanel termUpdater={this.termUpdater} />
            <Category filterUpdater={this.filterUpdater} filter={filter} />
          </div>
          <MovieList
            toggle={this.toggle}
            data={visibleData}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    )
  }
}

export default App
