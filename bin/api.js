#!/usr/bin/env node

const path = require('path');
const json = require('json-server');
const extract = require('./extract');

const port = 4001;
const app = json.create();
const db = path.join(__dirname, '../mocks/db.json');

app.use(json.defaults());
app.use(json.bodyParser);
app.use(extract);
app.use('/api', json.router(db));

app.listen(port, () => console.log(`> API running on port ${port}.`));
