import * as createRecommendationsService from '../Services/createRecommendations.js';

async function createRecommendations(req, res) {
  const { name, youtubeLink } = req.body;
  if (!name || !youtubeLink) return res.sendStatus(400);
  try {
    const recommendations = await createRecommendationsService.createRecommendations({ youtubeLink, name });
    if (recommendations === null) return res.sendStatus(400);
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { createRecommendations };
