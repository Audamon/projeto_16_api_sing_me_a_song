import connection from '../database.js';

async function deleteRecommendation() {
  await connection.query('delete from video where votes = -5;');
}
export { deleteRecommendation };
