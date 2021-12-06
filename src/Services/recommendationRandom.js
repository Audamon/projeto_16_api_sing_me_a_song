import * as recommendationsRandomRepository from '../Repositories/recommendationRandomRepository.js';

async function getRecomendationRandom({ limit }) {
  console.log(2);
  let video = await recommendationsRandomRepository.getRecomendationRandom({
    limit,
  });
  console.log(video);
  if (!video) {
    video = await recommendationsRandomRepository.getRandom();
  }
  if (!video) {
    return null;
  }
  return video;
}
export { getRecomendationRandom };
