const { searchArticle, getAllArticles } = require('./resolvers');
const Article = require('../models/article');

// Mocking Article model functions
jest.mock('../models/article', () => ({
  find: jest.fn(),
}));

describe('GraphQL Resolvers Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('searchArticle resolver', () => {
    it('It should return items matching the search query', async () => {
      const mockArticles = [
        { title: 'Netforemost Article' },
        { title: 'Franco Perdomo Article' },
      ];
      Article.find.mockResolvedValue(mockArticles);

      const result = await searchArticle({ searchQuery: 'netforemost' });
      expect(result).toEqual(mockArticles);
      expect(Article.find).toHaveBeenCalledWith({
        $or: [{ title: { $regex: 'netforemost', $options: 'i' } }],
      });
    });

    it('It should handle errors', async () => {
      const errorMessage = 'Database error';
      Article.find.mockRejectedValue(new Error(errorMessage));

      await expect(searchArticle({ searchQuery: 'sample' })).rejects.toThrow(
        'Failed to fetch items'
      );
    });
  });

  describe('getAllArticles resolver', () => {
    it('It should return every article', async () => {
      const mockArticles = [
        { title: 'Netforemost Article' },
        { title: 'Franco Perdomo Article' },
      ];
      Article.find.mockResolvedValue(mockArticles);

      const result = await getAllArticles();
      expect(result).toEqual(mockArticles);
      expect(Article.find).toHaveBeenCalledWith();
    });

    it('It should handle errors', async () => {
      const errorMessage = 'Database error';
      Article.find.mockRejectedValue(new Error(errorMessage));

      await expect(getAllArticles()).rejects.toThrow(errorMessage);
    });
  });
});
