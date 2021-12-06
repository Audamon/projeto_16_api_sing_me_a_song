import * as createRecommendationsService from '../src/Services/createRecommendations.js';
import * as recommendationsRepository from '../src/Repositories/createRecommendations.js';
import * as validYoutubeLinkService from '../src/Services/validYoutubeLink.js';
import * as recommendationsTopService from '../src/Services/recommendationsTop.js';
import * as recommendationsTopRepository from '../src/Repositories/recommendationsTopRepository.js';

describe('POST recommendations', () => {
  test('should return null', async () => {
    jest
      .spyOn(validYoutubeLinkService, 'validYoutubeLink')
      .mockImplementationOnce(() => {
        return null;
      });
    const result = await createRecommendationsService.createRecommendations({
      youtubeLink: 'dsgfsgdfgd',
      name: 'teste',
    });
    expect(result).toBeNull();
  });
  test('should return an object', async () => {
    jest
      .spyOn(recommendationsRepository, 'createRecommendations')
      .mockImplementationOnce(() => {
        return [
          {
            id: 18,
            name: 'teste',
            url: 'https://www.youtube.com/watch?v=4NDyBX0kol4',
            votes: 0,
          },
        ];
      });
    const result = await createRecommendationsService.createRecommendations({
      youtubeLink: 'https://www.youtube.com/watch?v=4NDyBX0kol4',
      name: 'teste',
    });
    expect(result).toEqual([
      {
        id: 18,
        name: 'teste',
        url: 'https://www.youtube.com/watch?v=4NDyBX0kol4',
        votes: 0,
      },
    ]);
  });
});

describe('GET recomendations', () => {
  test('should return an object', async () => {
    jest
      .spyOn(recommendationsTopRepository, 'recommendationsTop')
      .mockImplementationOnce(() => {
        return [
          {
            id: 14,
            name: 'teste',
            url: 'https://www.youtube.com/watch?v=xUNCsIIrTIo',
            votes: 18,
          },
          {
            id: 15,
            name: 'teste',
            url: 'https://www.youtube.com/watch?v=ao2Jfm35XeE',
            votes: 4,
          },
        ];
      });

    const result = await recommendationsTopService.recommendationsTop({
      amount: 2,
    });
    expect(result).toEqual([
      {
        id: 14,
        name: 'teste',
        url: 'https://www.youtube.com/watch?v=xUNCsIIrTIo',
        votes: 18,
      },
      {
        id: 15,
        name: 'teste',
        url: 'https://www.youtube.com/watch?v=ao2Jfm35XeE',
        votes: 4,
      },
    ]);
  });
});
