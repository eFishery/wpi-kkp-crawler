const wpiCrawler = require('../');

wpiCrawler.fetch({
  start: '2016-02-01',
  end: '2016-02-03',
  groupBy: 'komoditas',
})
.then((data) => {
  console.log(data);
})
.catch(console.log);
