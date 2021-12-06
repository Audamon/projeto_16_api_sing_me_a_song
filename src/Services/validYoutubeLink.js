import getVideoId from 'get-video-id';

async function validYoutubeLink({ youtubeLink }) {
  const isYouTube = getVideoId(youtubeLink);
  if (isYouTube.id === undefined) {
    return null;
  }
  return youtubeLink;
}
export { validYoutubeLink };
