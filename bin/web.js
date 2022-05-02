#!/usr/bin/env node

const proxy = require('http-proxy-middleware');
const polka = require('polka');
const sirv = require('sirv');

const target = 'http://localhost:4001';
const port = 4000;

const middlewares = [
  proxy.createProxyMiddleware('/api', { target, changeOrigin: true }),
  sirv('build', { dev: true, single: true }),
];

polka()
  .use(...middlewares)
  .listen(port, () => console.log(`> Server running on port ${port}.`));
