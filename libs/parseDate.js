function parseDate(strDate) {
  const objDate = new Date(strDate);
  const pad = (num) => {
    const s = `0${num}`;
    return s.substr(s.length - 2);
  };
  return {
    toString: () => {
      return `${objDate.getFullYear()}-${pad(objDate.getMonth() + 1)}-${pad(objDate.getDate())}`;
    },
    toUnix: () => {
      return objDate.getTime();
    },
  };
}

module.exports = parseDate;
