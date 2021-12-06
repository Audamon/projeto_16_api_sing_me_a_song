import * as recommendationsRandomService from '../Services/recommendationRandom.js';

async function recommendationsRandom(req, res) {
  const limit = Math.random() > 0.7 ? '<=10' : '>10';
  console.log(limit);
  try {
    console.log(1);
    const video = await recommendationsRandomService.getRecomendationRandom({
      limit,
    });
    console.log(video);
    if (!video) return res.sendStatus(404);
    return res.status(200).send(video);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { recommendationsRandom };
