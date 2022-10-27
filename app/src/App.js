import React, { useState } from 'react';
import getSummonerByName from './api/SummonerApi';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [matches, setMatches] = useState([]);

  function search(e) {
    e.preventDefault();

    getSummonerByName(searchValue)
      .then((response) => console.log('anything'))
      .then((e) => {
        setMatches(e);
      }).catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="main-content">
      <form name="get-stats" onSubmit={search}>
        <div className="search-bar">
          <label>Search </label>
          <input name="search" placeholder="Summoner name" onChange={e => setSearchValue(e.target.value)} data-testid="inp-summoner-serach" />
          <button type="submit" className="btn-summoner-name-search" data-testid="btn-summoner-serach">Search</button>
        </div>
      </form>
      <h2 className="last-games">
        Last 10 games
      </h2>
      <div className="table-matches">
        {matches.length > 0 ? (<table data-testid="table-match-history" className="table-matches">
          <thead className="header-matches">
            <tr>
              <th colSpan="1">Result</th>
              <th colSpan="1">Champion</th>
              <th colSpan="1">K/D/A</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => (
              <tr data-testid={'table-row-' + index} className="table-row" key={index}>
                <td className="table-col">{match}</td>
                <td className="table-col">Zac</td>
                <td className="table-col">4/2/0</td>
              </tr>
            ))}
          </tbody>
        </table>) : (
          <div data-testid="no-matches-found" className="no-matches">
            No matches, please search for a summoner above
          </div>
        )}
      </div>
    </div >
  );
}

export default App;
