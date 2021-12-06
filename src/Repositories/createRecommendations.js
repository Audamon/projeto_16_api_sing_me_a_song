import connection from '../database.js';

async function createRecommendations({ youtubeLink, name }) {
  const recommendation = await connection.query(
    'INSERT INTO video(name, url, votes) VALUES ($1, $2, 0) RETURNING *',
    [name, youtubeLink],
  );
 return recommendation;
}
export { createRecommendations };
