const express = require('express');
const cors = require('cors')

const app = express();
const port = 8000;

app.use(
    cors({
        origin : "http://localhost:4200",
    })
)

app.get('/', (req, res) => {
  res.send([{
    name: "scheda 1",
    desc: "scheda di attivazione",
    pubDate: "10/05/2023",
    modDate: "20/06/2023"
  }, {
    name: "scheda 2",
    desc: "scheda delle braccia",
    pubDate: "18/09/2023",
    modDate: "20/09/2023"
  }]);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});