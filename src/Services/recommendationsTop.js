import * as recommendationsTopRepository from '../Repositories/recommendationsTopRepository.js';

async function recommendationsTop({ amount }) {
  const recommendations = await recommendationsTopRepository.recommendationsTop({ amount });
  return recommendations;
}
export { recommendationsTop };
