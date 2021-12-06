import * as recommendationsRandomService from '../Services/recommendationRandom.js';

async function recommendationsRandom(req, res) {
  try {
    const video = await recommendationsRandomService.getRecomendationRandom();
    if (!video) return res.sendStatus(404);
    return res.status(200).send(video);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { recommendationsRandom };
