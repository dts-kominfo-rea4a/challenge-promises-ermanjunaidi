const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
let bioskopMarah = 0
let bisokopTidakMarah = 0
const promiseOutput = emosi => {
  if (emosi === "marah") {
    return promiseTheaterIXX()
      .then((value) => {
        value.forEach(array => {
          if (array.hasil === 'marah') {
            bioskopMarah++
          } else if (array.hasil === "tidak marah") {
            bisokopTidakMarah++
          } else {
            'error'
          }
        });
        return bioskopMarah
      })
  }
};

module.exports = {
  promiseOutput,
};
