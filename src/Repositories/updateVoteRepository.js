import connection from '../database.js';

async function updateVote({ idRecommendation, operator }) {
  const result = connection.query(
    `update video set votes = votes ${operator} 1 where id = $1 RETURNING *;`,
    [idRecommendation],
  );
  return result;
}
export { updateVote };
