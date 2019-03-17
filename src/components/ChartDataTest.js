const historicalRates = {
  USDARS: {
    five_year: 8.001127,
    three_year: 14.7545,
    one_year: 20.108999,
    six_month: 36.842041,
    three_month: 37.654502,
    current: 40.733202
  },
  USDAUD: {
    five_year: 1.082121,
    three_year: 1.301655,
    one_year: 1.301395,
    six_month: 1.390604,
    three_month: 1.41893,
    current: 1.41536
  },
  USDBRL: {
    five_year: 2.26262,
    three_year: 3.560799,
    one_year: 3.304394,
    six_month: 4.055304,
    three_month: 3.881403,
    current: 3.847798
  },
  USDBTC: {
    five_year: 0.002077,
    three_year: 0.002403,
    one_year: 0.000147,
    six_month: 0.000143,
    three_month: 0.00026,
    current: 0.000258
  },
  USDCAD: {
    five_year: 1.103364,
    three_year: 1.300295,
    one_year: 1.2893,
    six_month: 1.30475,
    three_month: 1.362635,
    current: 1.33266
  },
  USDCHF: {
    five_year: 0.883941,
    three_year: 0.958984,
    one_year: 0.95457,
    six_month: 0.968985,
    three_month: 0.9822,
    current: 1.003905
  },
  USDCNY: {
    five_year: 6.199854,
    three_year: 6.4741,
    one_year: 6.272497,
    six_month: 6.830395,
    three_month: 6.878501,
    current: 6.7229
  },
  USDDKK: {
    five_year: 5.414224,
    three_year: 6.544135,
    one_year: 6.05275,
    six_month: 6.425504,
    three_month: 6.513982,
    current: 6.60313
  },
  USDEUR: {
    five_year: 0.724967,
    three_year: 0.8777,
    one_year: 0.811901,
    six_month: 0.860475,
    three_month: 0.872505,
    current: 0.88484
  },
  USDGBP: {
    five_year: 0.601339,
    three_year: 0.702744,
    one_year: 0.71235,
    six_month: 0.771545,
    three_month: 0.7841,
    current: 0.75625
  },
  USDHKD: {
    five_year: 7.756706,
    three_year: 7.753325,
    one_year: 7.848497,
    six_month: 7.84945,
    three_month: 7.83372,
    current: 7.849778
  },
  USDHUF: {
    five_year: 222.778101,
    three_year: 275.585501,
    one_year: 253.529999,
    six_month: 281.520388,
    three_month: 280.269891,
    current: 278.180235
  },
  USDIDR: {
    five_year: 11305.066667,
    three_year: 13189.433333,
    one_year: 13760,
    six_month: 14730,
    three_month: 14470,
    current: 14268
  },
  USDILS: {
    five_year: 3.479364,
    three_year: 3.775141,
    one_year: 3.494903,
    six_month: 3.60345,
    three_month: 3.73717,
    current: 3.607197
  },
  USDINR: {
    five_year: 59.93185,
    three_year: 66.21824,
    one_year: 65.110001,
    six_month: 71.00504,
    three_month: 69.740272,
    current: 69.358007
  },
  USDJPY: {
    five_year: 103.5259,
    three_year: 111.803901,
    one_year: 106.311996,
    six_month: 111.040385,
    three_month: 109.673505,
    current: 111.694019
  },
  USDKRW: {
    five_year: 1061.183325,
    three_year: 1148.039998,
    one_year: 899.999921,
    six_month: 1115.640384,
    three_month: 1114.796392,
    current: 1136.669711
  },
  USDMXN: {
    five_year: 13.05514,
    three_year: 17.32145,
    one_year: 18.196398,
    six_month: 19.084104,
    three_month: 19.633745,
    current: 19.322801
  },
  USDMYR: {
    five_year: 3.26166,
    three_year: 3.89498,
    one_year: 3.86199,
    six_month: 4.117039,
    three_month: 4.131981,
    current: 4.091496
  },
  USDNOK: {
    five_year: 5.986877,
    three_year: 8.312992,
    one_year: 7.85364,
    six_month: 8.387204,
    three_month: 8.64769,
    current: 8.57408
  },
  USDNZD: {
    five_year: 1.160002,
    three_year: 1.448348,
    one_year: 1.3817,
    six_month: 1.51125,
    three_month: 1.48973,
    current: 1.465335
  },
  USDPHP: {
    five_year: 44.75506,
    three_year: 46.04287,
    one_year: 52.119999,
    six_month: 53.467504,
    three_month: 52.574989,
    current: 52.7305
  },
  USDRUB: {
    five_year: 35.1257,
    three_year: 67.63453,
    one_year: 57.196399,
    six_month: 67.516038,
    three_month: 68.927505,
    current: 65.524198
  },
  USDSEK: {
    five_year: 6.459206,
    three_year: 8.135383,
    one_year: 8.351301,
    six_month: 9.148904,
    three_month: 8.867968,
    current: 9.310499
  },
  USDSGD: {
    five_year: 1.259366,
    three_year: 1.350097,
    one_year: 1.31121,
    six_month: 1.372104,
    three_month: 1.362899,
    current: 1.35568
  },
  USDTHB: {
    five_year: 32.36536,
    three_year: 35.17005,
    one_year: 31.160488,
    six_month: 32.717038,
    three_month: 32.347503,
    current: 31.783031
  },
  USDTRY: {
    five_year: 2.142091,
    three_year: 2.823446,
    one_year: 3.951302,
    six_month: 6.545204,
    three_month: 5.2897,
    current: 5.46712
  },
  USDUSD: {
    five_year: 1,
    three_year: 1,
    one_year: 1,
    six_month: 1,
    three_month: 1,
    current: 1
  },
  USDZAR: {
    five_year: 10.57832,
    three_year: 14.72558,
    one_year: 11.8338,
    six_month: 14.687504,
    three_month: 14.39765,
    current: 14.536402
  }
};

export default historicalRates;
