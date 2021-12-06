import * as downVoteService from '../Services/downVote.js';

async function downVote(req, res) {
  const idrecommendation = Number(req.params.id);
  try {
    await downVoteService.downVote({ idrecommendation });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { downVote };
