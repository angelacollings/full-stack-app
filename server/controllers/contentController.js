const contentRepository = require("../data-access/contentRepository");

/**
 * @Desc Get a all content
 * @Route GET /api/content
 * @Access Public
 */

const getContentList = async (req, res, next) => {
  try {
    const content = await contentRepository.getAllContent();

    res.json(content);
  } catch (e) {
    next(e);
  }
};

module.exports = getContentList;
