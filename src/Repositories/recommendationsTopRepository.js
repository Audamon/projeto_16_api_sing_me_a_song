import connection from '../database.js';

async function recommendationsTop({ amount }) {
  const recommendations = await connection.query(
    'SELECT * FROM video ORDER BY votes DESC LIMIT $1',
    [amount],
  );
  return recommendations;
}
export { recommendationsTop };
