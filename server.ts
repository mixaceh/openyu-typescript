"use strict";

// import * as $ from "jquery";
// import * as _ from "lodash";

// console.log($);
// _.padStart("Hello TypeScript!", 20, " ");

// console.log(require);
// console.log(process);

const app = require('http').createServer((req, res) => res.send('Ahoy!'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(process.env.SERVICE_HOST_ACCOUNT);
    console.log(`Server is listening on port ${PORT}`);
});
