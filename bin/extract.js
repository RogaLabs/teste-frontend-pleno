const { parse } = require("@postlight/mercury-parser");

function query(str = "") {
  return str
    .split("&")
    .map((s) => s.split("="))
    .reduce((r, [k, v]) => ({ ...r, [k]: v || null }), {});
}

module.exports = async (req, res, next) => {
  const [url, search] = req.url.split("?");

  console.log(req.url);

  if (req.method === "GET" && url === "/api/extract" && search) {
    try {
      const data = await parse(query(search).url);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify(error));
    }
  } else {
    next();
  }
};
