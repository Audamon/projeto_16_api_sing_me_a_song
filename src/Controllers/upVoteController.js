import * as upVoteService from '../Services/upVote.js';

async function upVote(req, res) {
  const idRecommendation = Number(req.params.id);
  try {
    await upVoteService.upVote({ idRecommendation });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { upVote };
