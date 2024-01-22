const express = require("express");
const http = require("http");
const cors = require("cors");
const { default: axios } = require("axios");
const hostname = '0.0.0.0';
const port  = 3001;
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
        const r =  await axios.put(
            "https://api.chatengine.io/users/",
            {username:username,  secret:username, first_name:username},
            {headers:{"private-key": "913391c3-f5f5-49c5-a692-6df28ac08ae9"}}
        )
        return res.status(r.status).json(r.data);
  }

  catch(e){
        return res.status(e.response.status).json(e.response.data);
  }

  1
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001,hostname, () =>{
      console.log(`listening on ${hostname}: ${port}`);
});