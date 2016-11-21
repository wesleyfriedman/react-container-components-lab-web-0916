const React = require('react');
const { Component } = require('react');
// const { fetch } = require('whatwg-fetch');
import 'whatwg-fetch'

const MovieReviews = require('./MovieReviews');

const API_KEY = '2fd300f61af4478aa6469fdbec913a4c';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Movie Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

module.exports = LatestMovieReviewsContainer;
