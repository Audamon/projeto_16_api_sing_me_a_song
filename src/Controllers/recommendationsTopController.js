import * as recommendationsTopService from '../Services/recommendationsTop.js';

async function recommendationsTop(req, res) {
  const { amount } = req.params;
  try {
    const recommendations = await recommendationsTopService.recommendationsTop({ amount });
    return res.status(200).send(recommendations.rows);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { recommendationsTop };
