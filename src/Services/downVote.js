import * as downVoteRepository from '../Repositories/downVoteRepository.js';
import * as deleteRecommendation from '../Repositories/deleteRecommendation.js';

async function downVote({ idrecommendation }) {
  await downVoteRepository.downVote({ idrecommendation });
  await deleteRecommendation.deleteRecommendation();
}
export { downVote };
