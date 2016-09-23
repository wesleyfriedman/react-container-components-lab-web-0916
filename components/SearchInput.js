const React = require('react');

const SearchInput = ({
  label,
  size,
  handleChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor='search-input'>{label}</label>
    <input id='search-input' type="text" style={{width: size}} onChange={handleChange} />
    <button type="submit">Submit</button> 
  </form>
);
SearchInput.defaultProps = {
  label: 'Search:',
  size: 300,
  handleChange: () => {
    console.warn('SearchInput: No change handler defined.')
  },
  handleSubmit: (e) => {
    e.preventDefault();
    console.warn('SearchInput: No submit handler defined.')
  }
};

module.exports = SearchInput;
