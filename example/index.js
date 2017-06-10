const wpiCrawler = require('../');

wpiCrawler.fetch({
  start: '2017-02-01',
  end: '2017-02-03',
  groupBy: 'tgl',
})
.then((data) => {
  console.log(data);
})
.catch(console.log);
