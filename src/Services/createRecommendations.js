import * as recommendationsRepository from '../Repositories/createRecommendations.js';
import * as validYoutubeLinkService from './validYoutubeLink.js';

async function createRecommendations({ youtubeLink, name }) {
  const validYoutubeLink = await validYoutubeLinkService.validYoutubeLink({
    youtubeLink,
  });
  if (!validYoutubeLink) {
    return null;
  }
  const recomendations = await recommendationsRepository.createRecommendations({ youtubeLink, name });
  return recomendations;
}
export { createRecommendations };
