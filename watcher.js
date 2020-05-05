const fs = require("fs");

fs.watchFile(".git/refs/heads/master", { interval: 1000 }, () => {
  console.log("Detect master ref changed.");
});
