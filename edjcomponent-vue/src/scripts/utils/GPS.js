var GPS = {
  PI: 3.141592653589793,
  x_pi: 52.35987755982988,
  delta: function(t, a) {
    var n = 6378245,
      h = 0.006693421622965943,
      i = this.transformLat(a - 105, t - 35),
      s = this.transformLon(a - 105, t - 35),
      r = (t / 180) * this.PI,
      M = Math.sin(r);
    M = 1 - h * M * M;
    var o = Math.sqrt(M);
    return (
      (i = (180 * i) / (((n * (1 - h)) / (M * o)) * this.PI)),
      (s = (180 * s) / ((n / o) * Math.cos(r) * this.PI)),
      { lat: i, lon: s }
    );
  },
  gcj_encrypt: function(t, a) {
    if (this.outOfChina(t, a)) return { lat: t, lon: a };
    var n = this.delta(t, a);
    return { lat: t + n.lat, lon: a + n.lon };
  },
  gcj_decrypt: function(t, a) {
    if (this.outOfChina(t, a)) return { lat: t, lon: a };
    var n = this.delta(t, a);
    return { lat: t - n.lat, lon: a - n.lon };
  },
  gcj_decrypt_exact: function(t, a) {
    for (
      var n,
        h,
        i = 0.01,
        s = 1e-9,
        r = i,
        M = i,
        o = t - r,
        e = a - M,
        c = t + r,
        l = a + M,
        u = 0;
      ;

    ) {
      (n = (o + c) / 2), (h = (e + l) / 2);
      var f = this.gcj_encrypt(n, h);
      if (
        ((r = f.lat - t), (M = f.lon - a), Math.abs(r) < s && Math.abs(M) < s)
      )
        break;
      if ((r > 0 ? (c = n) : (o = n), M > 0 ? (l = h) : (e = h), ++u > 1e4))
        break;
    }
    return { lat: n, lon: h };
  },
  bd_encrypt: function(t, a) {
    var n = a,
      h = t,
      i = Math.sqrt(n * n + h * h) + 2e-5 * Math.sin(h * this.x_pi),
      s = Math.atan2(h, n) + 3e-6 * Math.cos(n * this.x_pi),
      r = i * Math.cos(s) + 0.0065,
      M = i * Math.sin(s) + 0.006;
    return { lat: M, lon: r };
  },
  bd_decrypt: function(t, a) {
    var n = a - 0.0065,
      h = t - 0.006,
      i = Math.sqrt(n * n + h * h) - 2e-5 * Math.sin(h * this.x_pi),
      s = Math.atan2(h, n) - 3e-6 * Math.cos(n * this.x_pi),
      r = i * Math.cos(s),
      M = i * Math.sin(s);
    return { lat: M, lon: r };
  },
  distance: function(t, a, n, h) {
    var i = 6371e3,
      s =
        Math.cos((t * Math.PI) / 180) *
        Math.cos((n * Math.PI) / 180) *
        Math.cos(((a - h) * Math.PI) / 180),
      r = Math.sin((t * Math.PI) / 180) * Math.sin((n * Math.PI) / 180),
      M = s + r;
    M > 1 && (M = 1), M < -1 && (M = -1);
    var o = Math.acos(M),
      e = o * i;
    return e;
  },
  outOfChina: function(t, a) {
    return a < 72.004 || a > 137.8347 || t < 0.8293 || t > 55.8271;
  },
  transformLat: function(t, a) {
    var n =
      2 * t -
      100 +
      3 * a +
      0.2 * a * a +
      0.1 * t * a +
      0.2 * Math.sqrt(Math.abs(t));
    return (
      (n +=
        (2 *
          (20 * Math.sin(6 * t * this.PI) + 20 * Math.sin(2 * t * this.PI))) /
        3),
      (n +=
        (2 * (20 * Math.sin(a * this.PI) + 40 * Math.sin((a / 3) * this.PI))) /
        3),
      (n +=
        (2 *
          (160 * Math.sin((a / 12) * this.PI) +
            320 * Math.sin((a * this.PI) / 30))) /
        3),
      n
    );
  },
  transformLon: function(t, a) {
    var n =
      300 +
      t +
      2 * a +
      0.1 * t * t +
      0.1 * t * a +
      0.1 * Math.sqrt(Math.abs(t));
    return (
      (n +=
        (2 *
          (20 * Math.sin(6 * t * this.PI) + 20 * Math.sin(2 * t * this.PI))) /
        3),
      (n +=
        (2 * (20 * Math.sin(t * this.PI) + 40 * Math.sin((t / 3) * this.PI))) /
        3),
      (n +=
        (2 *
          (150 * Math.sin((t / 12) * this.PI) +
            300 * Math.sin((t / 30) * this.PI))) /
        3),
      n
    );
  }
};
export default GPS;
