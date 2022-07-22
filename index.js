let pathfinderd = require('./pathfinderd');
let webservice = require('./webservice');
let process = require('process');

(async function() {
    // @TODO: should read this values from environment variables
    const DEFAULT_PORT = 8000
    const PORT = parseInt(process.argv[2], 10) || DEFAULT_PORT
    webservice.initialize(PORT);
    await pathfinderd.startup();
})();
