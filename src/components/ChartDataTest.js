const historicalRates = {
  USDARS: {
    current: 40.733202,
    three_month: 37.654502,
    six_month: 36.842041,
    one_year: 20.108999,
    three_year: 14.7545,
    five_year: 8.001127
  },
  USDAUD: {
    current: 1.41536,
    three_month: 1.41893,
    six_month: 1.390604,
    one_year: 1.301395,
    three_year: 1.301655,
    five_year: 1.082121
  },
  USDBRL: {
    current: 3.847798,
    three_month: 3.881403,
    six_month: 4.055304,
    one_year: 3.304394,
    three_year: 3.560799,
    five_year: 2.26262
  },
  USDBTC: {
    current: 0.000258,
    three_month: 0.00026,
    six_month: 0.000143,
    one_year: 0.000147,
    three_year: 0.002403,
    five_year: 0.002077
  },
  USDCAD: {
    current: 1.33266,
    three_month: 1.362635,
    six_month: 1.30475,
    one_year: 1.2893,
    three_year: 1.300295,
    five_year: 1.103364
  },
  USDCHF: {
    current: 1.003905,
    three_month: 0.9822,
    six_month: 0.968985,
    one_year: 0.95457,
    three_year: 0.958984,
    five_year: 0.883941
  },
  USDCNY: {
    current: 6.7229,
    three_month: 6.878501,
    six_month: 6.830395,
    one_year: 6.272497,
    three_year: 6.4741,
    five_year: 6.199854
  },
  USDDKK: {
    current: 6.60313,
    three_month: 6.513982,
    six_month: 6.425504,
    one_year: 6.05275,
    three_year: 6.544135,
    five_year: 5.414224
  },
  USDEUR: {
    current: 0.88484,
    three_month: 0.872505,
    six_month: 0.860475,
    one_year: 0.811901,
    three_year: 0.8777,
    five_year: 0.724967
  },
  USDGBP: {
    current: 0.75625,
    three_month: 0.7841,
    six_month: 0.771545,
    one_year: 0.71235,
    three_year: 0.702744,
    five_year: 0.601339
  },
  USDHKD: {
    current: 7.849778,
    three_month: 7.83372,
    six_month: 7.84945,
    one_year: 7.848497,
    three_year: 7.753325,
    five_year: 7.756706
  },
  USDHUF: {
    current: 278.180235,
    three_month: 280.269891,
    six_month: 281.520388,
    one_year: 253.529999,
    three_year: 275.585501,
    five_year: 222.778101
  },
  USDIDR: {
    current: 14268,
    three_month: 14470,
    six_month: 14730,
    one_year: 13760,
    three_year: 13189.433333,
    five_year: 11305.066667
  },
  USDILS: {
    current: 3.607197,
    three_month: 3.73717,
    six_month: 3.60345,
    one_year: 3.494903,
    three_year: 3.775141,
    five_year: 3.479364
  },
  USDINR: {
    current: 69.358007,
    three_month: 69.740272,
    six_month: 71.00504,
    one_year: 65.110001,
    three_year: 66.21824,
    five_year: 59.93185
  },
  USDJPY: {
    current: 111.694019,
    three_month: 109.673505,
    six_month: 111.040385,
    one_year: 106.311996,
    three_year: 111.803901,
    five_year: 103.5259
  },
  USDKRW: {
    current: 1136.669711,
    three_month: 1114.796392,
    six_month: 1115.640384,
    one_year: 899.999921,
    three_year: 1148.039998,
    five_year: 1061.183325
  },
  USDMXN: {
    current: 19.322801,
    three_month: 19.633745,
    six_month: 19.084104,
    one_year: 18.196398,
    three_year: 17.32145,
    five_year: 13.05514
  },
  USDMYR: {
    current: 4.091496,
    three_month: 4.131981,
    six_month: 4.117039,
    one_year: 3.86199,
    three_year: 3.89498,
    five_year: 3.26166
  },
  USDNOK: {
    current: 8.57408,
    three_month: 8.64769,
    six_month: 8.387204,
    one_year: 7.85364,
    three_year: 8.312992,
    five_year: 5.986877
  },
  USDNZD: {
    current: 1.465335,
    three_month: 1.48973,
    six_month: 1.51125,
    one_year: 1.3817,
    three_year: 1.448348,
    five_year: 1.160002
  },
  USDPHP: {
    current: 52.7305,
    three_month: 52.574989,
    six_month: 53.467504,
    one_year: 52.119999,
    three_year: 46.04287,
    five_year: 44.75506
  },
  USDRUB: {
    current: 65.524198,
    three_month: 68.927505,
    six_month: 67.516038,
    one_year: 57.196399,
    three_year: 67.63453,
    five_year: 35.1257
  },
  USDSEK: {
    current: 9.310499,
    three_month: 8.867968,
    six_month: 9.148904,
    one_year: 8.351301,
    three_year: 8.135383,
    five_year: 6.459206
  },
  USDSGD: {
    current: 1.35568,
    three_month: 1.362899,
    six_month: 1.372104,
    one_year: 1.31121,
    three_year: 1.350097,
    five_year: 1.259366
  },
  USDTHB: {
    current: 31.783031,
    three_month: 32.347503,
    six_month: 32.717038,
    one_year: 31.160488,
    three_year: 35.17005,
    five_year: 32.36536
  },
  USDTRY: {
    current: 5.46712,
    three_month: 5.2897,
    six_month: 6.545204,
    one_year: 3.951302,
    three_year: 2.823446,
    five_year: 2.142091
  },
  USDUSD: {
    current: 1,
    three_month: 1,
    six_month: 1,
    one_year: 1,
    three_year: 1,
    five_year: 1
  },
  USDZAR: {
    current: 14.536402,
    three_month: 14.39765,
    six_month: 14.687504,
    one_year: 11.8338,
    three_year: 14.72558,
    five_year: 10.57832
  }
};

export default historicalRates;
