const express = require("express")
const router = express.Router();


router.get('/', (req, res) => {
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

module.exports = router