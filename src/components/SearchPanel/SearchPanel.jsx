import { Component } from 'react'
import './SearchPanel.css'

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  termUpdater = (e) => {
    const term = e.target.value
    this.setState({ term })
    this.props.termUpdater(term)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input focus-ring"
        placeholder="Search..."
        onChange={this.termUpdater}
        value={this.state.term}
      />
    )
  }
}

export default SearchPanel
