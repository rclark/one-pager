'use strict';

module.exports = (name) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${name}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://api.mapbox.com/mapbox-assembly/v0.16.0/assembly.min.css" rel="stylesheet">
    <script async defer src="https://api.mapbox.com/mapbox-assembly/v0.16.0/assembly.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>
</html>`;
