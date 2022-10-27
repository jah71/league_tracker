import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const API_KEY = '[insert-key-here]'; // TODO: we should move this to a static .env file

const BASE_URL_LOL = 'https://euw1.api.riotgames.com/lol/';
const BY_NAME = 'summoner/v4/summoners/by-name/';

const app = express();

app.use(cors());

app.listen(8080, () => {
  console.log('server started');
});

async function getPlayerPUUID(playerName) {
  const url = BASE_URL_LOL + BY_NAME + playerName + '?api_key=' + API_KEY;
  return fetch(url, {
    method: 'GET',
  });
}

app.get('/match-history', async (req, res) => {
  if (!req?.query?.summonerName) throw Error('No name provided.');
  const playerName = req.query.summonerName;

  console.log('about to fetch puuid');
  const puuid = await getPlayerPUUID(playerName)
    .then((response) => {
      return response?.body;
    }).catch(err => console.error(err));

  console.log('puuid: ', puuid);
});