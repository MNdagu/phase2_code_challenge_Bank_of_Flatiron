import React from 'react';

function Search({setSearchTerm, searchTerm}) {


  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
