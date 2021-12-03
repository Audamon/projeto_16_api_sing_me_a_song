async function recommendationsTop(req, res) {
  try {
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { recommendationsTop };
