import express from 'express';
import cors from 'cors';
import * as recommendationsController from './Controllers/recommendationsController.js';
import * as upVoteController from './Controllers/upVoteController.js';
import * as downVoteController from './Controllers/downVoteController.js';
import * as recommendationsTopController from './Controllers/recommendationsTopController.js';
import * as recommendationsRandomController from './Controllers/recommendationsRandomController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/recommendations', recommendationsController.createRecommendations);

app.post('/recommendations/:id/upvote', upVoteController.upVote);

app.post('/recommendations/:id/downvote', downVoteController.downVote);

app.get('/recommendations/random', recommendationsRandomController.recommendationsRandom);

app.get('/recommendations/top/:amount', recommendationsTopController.recommendationsTop);

export default app;
