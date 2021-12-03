import getVideoId from 'get-video-id';
import connection from '../database.js';

async function recommendations(req, res) {
  const { name, youtubeLink } = req.body;
  const isYouTube = getVideoId(youtubeLink);
  if (!isYouTube.id) {
    console.log('Not Found');
    return res.sendStatus(404);
  }
  console.log('Found');
  if (!name) return res.sendStatus(401);
  try {
    await connection.query('INSERT INTO video(name, url, votes) VALUES ($1, $2, 0)', [name, youtubeLink]);
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { recommendations };
