import connection from '../database.js';

async function createRecommendations({ youtubeLink, name }) {
  await connection.query(
    'INSERT INTO video(name, url, votes) VALUES ($1, $2, 0)',
    [name, youtubeLink],
  );
}
export { createRecommendations };
