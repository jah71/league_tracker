function getSummonerByName(name) {
  if (!name) throw Error('No name provided.')

  return fetch(`http://localhost:8080/match-history?summonerName=${name}`);
}

export default getSummonerByName;