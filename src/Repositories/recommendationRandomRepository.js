import connection from '../database.js';

async function getRecomendationRandom({ limit }) {
  console.log(3);
  const video = await connection.query(
    `SELECT * FROM video WHERE votes ${limit} ORDER BY RANDOM();`,
  );
  console.log(4);
  console.log(video);
  return video.rows[0];
}

async function getRandom() {
  const video = await connection.query(
    'SELECT * FROM video ORDER BY RANDOM();',
  );
  return video.rows[0];
}
export { getRecomendationRandom, getRandom };
