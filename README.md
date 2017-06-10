# <center>wpi-kkp-crawler</center>

[![Build Status](https://travis-ci.org/eFishery/wpi-kkp-crawler.svg?branch=master)](https://travis-ci.org/eFishery/wpi-kkp-crawler)  
[![npm version](https://badge.fury.io/js/wpi-kkp-crawler.svg)](https://badge.fury.io/js/wpi-kkp-crawler)  

This is an unofficial module to fetch fisheries prices from [KKP](http://wpi.kkp.go.id), which includes grouping for dates, locations and commodities.

This was built with ES2015 in mind, so you need to use nodejs 6 minimum, or use babel with `babel-preset-es2015` preset.

### First, a warning.

This module doesn't affiliate with KKP in any way, and you shouldn't treat this module as official way to interact with KKP's API.

### Install

```bash
## NPM
$ npm install --save wpi-kkp-crawler
```

### Usage

```js
const wpiCrawler = require('wpi-kkp-crawler');

wpiCrawler.fetch({
  start: '2016-02-01',
  end: '2016-02-03',
  groupBy: 'komoditas',
})
.then((data) => {
  console.log(data);
})
.catch(console.log);
```

### API

#### **fetch([params])**

##### **params**

**start** (required)

Type: `string`

Start date of prices data.

**end** (optional)

Type: `string`

End range of prices data date. Default to same as `start` param.

**groupBy** (optional)

Type: `string`

Grouping data by `tgl`, `prov`, `kab`, `komoditas`. Default to `tgl`.

### Release History

see [CHANGELOG.md](CHANGELOG.md)

### License

Copyright (c) 2017 Ahmad Anshorimuslim
Licensed under the MIT license.
