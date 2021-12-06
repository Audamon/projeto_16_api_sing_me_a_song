import connection from '../database.js';

async function upVote({ idRecommendation }) {
  await connection.query('update video set votes = votes +1 where id = $1 ', [
    idRecommendation,
  ]);
}
export { upVote };
