importScripts('https://cdn.jsdelivr.net/gh/ugudango/jsdelivrables@main/t.js');

tile.context.testField.$get.then((r) => tile.log(r));

tile.context.testFunc.$call(3, 2).then((r) => {
  tile.log(r);
});
