const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

////////////////////////////////////////////////////

const { getFortune } = require('./controller')

const { getReassurance } = require('./controller')

const { getAffirmations } = require('./controller')

const { getPrayer } = require('./controller')



app.get("/api/compliment", getCompliment);


app.get("/api/fortune", getFortune);


app.get("/api/affirmations", getAffirmations);


app.get("/api/reassurance", getReassurance);


app.get("/api/prayer", getPrayer);


















app.listen(4000, () => console.log("Server running on 4000"));
