const axios = require('axios');

const wpiURL = 'http://wpi.kkp.go.id/info_harga_ikan/server.php';
const minCount = 1000;
const groups = ['tgl', 'prov', 'kab', 'komoditas'];

function hitURL(tgl1, tgl2, length) {
  return new Promise((resolve, reject) => {
    axios.get(wpiURL, {
      params: {
        tgl1,
        tgl2,
        prov: 'all',
        kab: 'all',
        kom: 'all',
        start: 0,
        length,
      },
    }).then((response) => {
      resolve(response.data.data);
    })
    .catch(reject);
  });
}

function parseDate(strDate) {
  const objDate = new Date(strDate);
  return {
    toString: () => {
      return `${objDate.getFullYear()}-${objDate.getMonth() + 1}-${objDate.getDate()}`;
    },
    toUnix: () => {
      return objDate.getTime();
    },
  };
}

function fetch(opt) {
  return new Promise((resolve, reject) => {
    if (!opt.start) {
      reject('Please provide minimum params {start}');
    }
    const startDate = parseDate(opt.start);
    const endDate = (opt.end) ? parseDate(opt.end) : parseDate(opt.start);
    const diffTime = endDate.toUnix() - startDate.toUnix();
    const fetchLength = (Math.ceil((diffTime) / (1000 * 3600 * 24)) + 1) * minCount;
    const groupBy = (groups.indexOf(opt.groupBy) > -1) ? opt.groupBy : 'tgl';
    hitURL(startDate.toString(), endDate.toString(), fetchLength)
      .then((data) => {
        const groupedData = data.reduce((prev, curr) => {
          const obj = {
            tgl: curr[0],
            prov: curr[1],
            kab: curr[2],
            komoditas: curr[3],
            hargaProdusen: curr[4],
            hargaGrosir: curr[5],
            hargaEceran: curr[6],
          };
          (prev[obj[groupBy]] = prev[obj[groupBy]] || []).push(obj);
          return prev;
        }, {});
        resolve(groupedData);
      })
      .catch(reject);
  });
}

module.exports = {
  fetch,
};
