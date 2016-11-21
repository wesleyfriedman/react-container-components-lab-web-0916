const React = require('react');
const { Component } = require('react');
// const { fetch } = require('whatwg-fetch');
import 'whatwg-fetch'

const MovieReviews = require('./MovieReviews');

const API_KEY = '2fd300f61af4478aa6469fdbec913a4c';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };

    this.handleSearch = this.handleSearch.bind(this)
    this.performSearch = this.performSearch.bind(this)

  }

  handleSearch(event){
    this.setState({
      searchTerm: event.target.value
    })
  }

  performSearch(event) {
    event.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searchable Movie Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

module.exports = SearchableMovieReviewsContainer;
