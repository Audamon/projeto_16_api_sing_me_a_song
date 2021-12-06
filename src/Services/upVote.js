import * as upVoteRepository from '../Repositories/upVoteRepository.js';

async function upVote({ idRecommendation }) {
  await upVoteRepository.upVote({ idRecommendation });
}
export { upVote };
