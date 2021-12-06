import connection from '../database.js';

async function deleteRecommendation({idRecommendation}) {
  await connection.query('delete from video where id = $1;', [idRecommendation]);
}
export { deleteRecommendation };
