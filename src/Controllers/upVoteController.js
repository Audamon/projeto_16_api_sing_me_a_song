import * as updateVote from '../Services/updateVote.js';

async function upVote(req, res) {
  const idRecommendation = Number(req.params.id);
  const operator = '+';
  try {
    await updateVote.updateVote({ idRecommendation, operator });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { upVote };
