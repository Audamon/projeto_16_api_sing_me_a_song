import * as updateVoteRepository from '../Repositories/updateVoteRepository.js';
import * as deleteRecommendation from '../Repositories/deleteRecommendation.js';

async function updateVote({ idRecommendation, operator }) {
  const songs = await updateVoteRepository.updateVote({
    idRecommendation,
    operator,
  });
  if (songs.rows[0].votes < -5) {
    await deleteRecommendation.deleteRecommendation({ idRecommendation });
  }
}
export { updateVote };
