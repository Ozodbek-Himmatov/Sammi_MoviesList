import { Component } from 'react'
import './MoviesAddForm.css'

class MoviesAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Honor Society',
      views: 900,
    }
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  formHandler = (e) => {
    e.preventDefault()
    const { name, views } = this.state
    this.props.addForm({ name, views })
    this.setState({
      name: 'Honor Society',
      views: 900,
    })
  }

  clicker = (e) => {
    e.target.classList.add('scale-effect')
    setTimeout(() => {
      e.target.classList.remove('scale-effect')
    }, 400)
  }

  render() {
    const { name, views } = this.state

    return (
      <div className="movies-add-form">
        <h3>Add New Movies</h3>
        <form className="add-form d-flex gap-2" onSubmit={this.formHandler}>
          <input
            type="text"
            onChange={this.inputHandler}
            className="form-control new-post-label focus-ring"
            placeholder="Movie Name?..."
            name="name"
            value={name}
          />
          <input
            type="number"
            onChange={this.inputHandler}
            className="form-control new-post-label focus-ring"
            placeholder="How many watches?..."
            name="views"
            value={views}
          />
          <button
            type="submit"
            className="btn btn-outline-dark"
            onClick={this.clicker}
          >
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default MoviesAddForm
