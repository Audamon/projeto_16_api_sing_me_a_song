import connection from '../database.js';

async function downVote({idrecommendation}) {
  await connection.query('update video set votes = votes - 1 where id = $1 ', [
    idrecommendation,
  ]);
}
export { downVote };
