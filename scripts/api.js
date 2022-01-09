const { parse } = require('@postlight/mercury-parser');

// prettier-ignore
const getQuery = (str = '') => str
  .split('&')
  .map((s) => s.split('='))
  .reduce((r, [k, v]) => ({ ...r, [k]: v || null }), {});

module.exports = async (req, res, next) => {
  const [url, search] = req.url.split('?');

  if (req.method === 'GET' && url === '/api/extract' && search) {
    try {
      const result = await parse(getQuery(search).url);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(err));
    }
  } else {
    next();
  }
};
