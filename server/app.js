const express = require("express");
const app = express();
const PORT = 3000;

app.get("/data", (res, req) => {
  req.json({
      data: [
        { id: 1, val: "val1" },
        { id: 2, val: "val1" },
        { id: 3, val: "val1" },
      ],
    })
});


app.listen(PORT, () => console.log(`listening no port ${PORT}`));
