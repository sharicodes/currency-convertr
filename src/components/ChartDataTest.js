const historicalRates = {
  USDARS: {
    "Five Year": 8.001127,
    "Three Year": 14.7545,
    "One Year": 20.108999,
    "Six Month": 36.842041,
    "Three Month": 37.654502,
    "One Month": 40.733202
  },
  USDAUD: {
    "Five Year": 1.082121,
    "Three Year": 1.301655,
    "One Year": 1.301395,
    "Six Month": 1.390604,
    "Three Month": 1.41893,
    "One Month": 1.41536
  },
  USDBRL: {
    "Five Year": 2.26262,
    "Three Year": 3.560799,
    "One Year": 3.304394,
    "Six Month": 4.055304,
    "Three Month": 3.881403,
    "One Month": 3.847798
  },
  USDBTC: {
    "Five Year": 0.002077,
    "Three Year": 0.002403,
    "One Year": 0.000147,
    "Six Month": 0.000143,
    "Three Month": 0.00026,
    "One Month": 0.000258
  },
  USDCAD: {
    "Five Year": 1.103364,
    "Three Year": 1.300295,
    "One Year": 1.2893,
    "Six Month": 1.30475,
    "Three Month": 1.362635,
    "One Month": 1.33266
  },
  USDCHF: {
    "Five Year": 0.883941,
    "Three Year": 0.958984,
    "One Year": 0.95457,
    "Six Month": 0.968985,
    "Three Month": 0.9822,
    "One Month": 1.003905
  },
  USDCNY: {
    "Five Year": 6.199854,
    "Three Year": 6.4741,
    "One Year": 6.272497,
    "Six Month": 6.830395,
    "Three Month": 6.878501,
    "One Month": 6.7229
  },
  USDDKK: {
    "Five Year": 5.414224,
    "Three Year": 6.544135,
    "One Year": 6.05275,
    "Six Month": 6.425504,
    "Three Month": 6.513982,
    "One Month": 6.60313
  },
  USDEUR: {
    "Five Year": 0.724967,
    "Three Year": 0.8777,
    "One Year": 0.811901,
    "Six Month": 0.860475,
    "Three Month": 0.872505,
    "One Month": 0.88484
  },
  USDGBP: {
    "Five Year": 0.601339,
    "Three Year": 0.702744,
    "One Year": 0.71235,
    "Six Month": 0.771545,
    "Three Month": 0.7841,
    "One Month": 0.75625
  },
  USDHKD: {
    "Five Year": 7.756706,
    "Three Year": 7.753325,
    "One Year": 7.848497,
    "Six Month": 7.84945,
    "Three Month": 7.83372,
    "One Month": 7.849778
  },
  USDHUF: {
    "Five Year": 222.778101,
    "Three Year": 275.585501,
    "One Year": 253.529999,
    "Six Month": 281.520388,
    "Three Month": 280.269891,
    "One Month": 278.180235
  },
  USDIDR: {
    "Five Year": 11305.066667,
    "Three Year": 13189.433333,
    "One Year": 13760,
    "Six Month": 14730,
    "Three Month": 14470,
    "One Month": 14268
  },
  USDILS: {
    "Five Year": 3.479364,
    "Three Year": 3.775141,
    "One Year": 3.494903,
    "Six Month": 3.60345,
    "Three Month": 3.73717,
    "One Month": 3.607197
  },
  USDINR: {
    "Five Year": 59.93185,
    "Three Year": 66.21824,
    "One Year": 65.110001,
    "Six Month": 71.00504,
    "Three Month": 69.740272,
    "One Month": 69.358007
  },
  USDJPY: {
    "Five Year": 103.5259,
    "Three Year": 111.803901,
    "One Year": 106.311996,
    "Six Month": 111.040385,
    "Three Month": 109.673505,
    "One Month": 111.694019
  },
  USDKRW: {
    "Five Year": 1061.183325,
    "Three Year": 1148.039998,
    "One Year": 899.999921,
    "Six Month": 1115.640384,
    "Three Month": 1114.796392,
    "One Month": 1136.669711
  },
  USDMXN: {
    "Five Year": 13.05514,
    "Three Year": 17.32145,
    "One Year": 18.196398,
    "Six Month": 19.084104,
    "Three Month": 19.633745,
    "One Month": 19.322801
  },
  USDMYR: {
    "Five Year": 3.26166,
    "Three Year": 3.89498,
    "One Year": 3.86199,
    "Six Month": 4.117039,
    "Three Month": 4.131981,
    "One Month": 4.091496
  },
  USDNOK: {
    "Five Year": 5.986877,
    "Three Year": 8.312992,
    "One Year": 7.85364,
    "Six Month": 8.387204,
    "Three Month": 8.64769,
    "One Month": 8.57408
  },
  USDNZD: {
    "Five Year": 1.160002,
    "Three Year": 1.448348,
    "One Year": 1.3817,
    "Six Month": 1.51125,
    "Three Month": 1.48973,
    "One Month": 1.465335
  },
  USDPHP: {
    "Five Year": 44.75506,
    "Three Year": 46.04287,
    "One Year": 52.119999,
    "Six Month": 53.467504,
    "Three Month": 52.574989,
    "One Month": 52.7305
  },
  USDRUB: {
    "Five Year": 35.1257,
    "Three Year": 67.63453,
    "One Year": 57.196399,
    "Six Month": 67.516038,
    "Three Month": 68.927505,
    "One Month": 65.524198
  },
  USDSEK: {
    "Five Year": 6.459206,
    "Three Year": 8.135383,
    "One Year": 8.351301,
    "Six Month": 9.148904,
    "Three Month": 8.867968,
    "One Month": 9.310499
  },
  USDSGD: {
    "Five Year": 1.259366,
    "Three Year": 1.350097,
    "One Year": 1.31121,
    "Six Month": 1.372104,
    "Three Month": 1.362899,
    "One Month": 1.35568
  },
  USDTHB: {
    "Five Year": 32.36536,
    "Three Year": 35.17005,
    "One Year": 31.160488,
    "Six Month": 32.717038,
    "Three Month": 32.347503,
    "One Month": 31.783031
  },
  USDTRY: {
    "Five Year": 2.142091,
    "Three Year": 2.823446,
    "One Year": 3.951302,
    "Six Month": 6.545204,
    "Three Month": 5.2897,
    "One Month": 5.46712
  },
  USDUSD: {
    "Five Year": 1,
    "Three Year": 1,
    "One Year": 1,
    "Six Month": 1,
    "Three Month": 1,
    "One Month": 1
  },
  USDZAR: {
    "Five Year": 10.57832,
    "Three Year": 14.72558,
    "One Year": 11.8338,
    "Six Month": 14.687504,
    "Three Month": 14.39765,
    "One Month": 14.536402
  }
};

export default historicalRates;
