const React = require('react');

const movieReviews = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  debugger
  return(
    <div key={headline} className="review">
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <span className="author">{byline}</span>
    </div>
  )
}

const allReviews = ({ reviews }) => {
  return <div className="review-list">
    {reviews.map(movieReviews)}
  </div>
};

movieReviews.defaultProps = {
  reviews: []
};


module.exports = movieReviews;
