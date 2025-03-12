!(function (a, t) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.pixelsJS = t()) : (a.pixelsJS = t());
})(this, function () {
    return (function (a) {
        var t = {};
        function e(d) {
            if (t[d]) return t[d].exports;
            var n = (t[d] = { i: d, l: !1, exports: {} });
            return a[d].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
        }
        return (
            (e.m = a),
            (e.c = t),
            (e.d = function (a, t, d) {
                e.o(a, t) || Object.defineProperty(a, t, { enumerable: !0, get: d });
            }),
            (e.r = function (a) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
            }),
            (e.t = function (a, t) {
                if ((1 & t && (a = e(a)), 8 & t)) return a;
                if (4 & t && "object" == typeof a && a && a.__esModule) return a;
                var d = Object.create(null);
                if ((e.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: a }), 2 & t && "string" != typeof a))
                    for (var n in a)
                        e.d(
                            d,
                            n,
                            function (t) {
                                return a[t];
                            }.bind(null, n)
                        );
                return d;
            }),
            (e.n = function (a) {
                var t =
                    a && a.__esModule
                        ? function () {
                              return a.default;
                          }
                        : function () {
                              return a;
                          };
                return e.d(t, "a", t), t;
            }),
            (e.o = function (a, t) {
                return Object.prototype.hasOwnProperty.call(a, t);
            }),
            (e.p = ""),
            e((e.s = 1))
        );
    })([
        function (a, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.getRandomNumber = function (a, t) {
                return Math.floor(Math.random() * (t - a + 1)) + a;
            };
        },
        function (a, t, e) {
            "use strict";
            (function (a) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.getFilterNames = void 0);
                var d,
                    n = m(e(3)),
                    r = m(e(4)),
                    o = m(e(5)),
                    i = m(e(6)),
                    g = m(e(7)),
                    _ = m(e(8)),
                    l = m(e(9)),
                    u = m(e(10));
                function m(a) {
                    if (a && a.__esModule) return a;
                    var t = {};
                    if (null != a) for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (t[e] = a[e]);
                    return (t.default = a), t;
                }
                function f(a, t, e) {
                    return t in a ? Object.defineProperty(a, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (a[t] = e), a;
                }
                var c = void 0;
                var s = (t.getFilterNames = function () {
                        var a;
                        return (
                            f(
                                (a = {
                                    horizontal_lines: i.add_horizontal_line_imgdata,
                                    extreme_offset_blue: l.extreme_offset_blue,
                                    ocean: r.ocean_imgdata,
                                    extreme_offset_green: l.extreme_offset_green,
                                    offset_green: l.offset_green_imgdata,
                                    extra_offset_blue: l.extra_offset_blue,
                                    extra_offset_red: l.extra_offset_red,
                                    extra_offset_green: l.extra_offset_green,
                                    extreme_offset_red: l.extreme_offset_red,
                                    specks_redscale: u.specksredscale_imgdata,
                                    vintage: r.vintage_imgdata,
                                    perfume: r.perfume_imgdata,
                                    serenity: r.serenity_imgdata,
                                    eclectic: u.eclectic_imgdata,
                                    diagonal_lines: i.add_diagonal_lines_imgdata,
                                    green_specks: u.green_specks_imgdata,
                                    warmth: r.warmth,
                                    casino: u.casino_imgdata,
                                    green_diagonal_lines: i.add_green_diagonal_lines_imgdata,
                                    offset: l.offset,
                                    offset_blue: l.offset_blue_imgdata,
                                    neue: r.neue_imgdata,
                                    sunset: r.sunset,
                                    specks: u.specks_imgdata,
                                    wood: r.wood,
                                    lix: r.lix_conv,
                                    ryo: r.ryo_conv,
                                    bluescale: r.blue_greyscale_imgdata,
                                    solange: r.solange_imgdata,
                                    evening: r.evening_imgdata,
                                    crimson: r.crimson,
                                    teal_min_noise: _.teal_min_noise_imgdata,
                                    phase: r.phase,
                                    dark_purple_min_noise: _.dark_purple_min_noise_imgdata,
                                    coral: r.coral_imgdata,
                                    darkify: n.darkify_imgdata,
                                    incbrightness: n.incbrightness_imgdata,
                                    incbrightness2: n.incbrightness_two_imgdata,
                                    yellow_casino: u.yellow_casino_imgdata,
                                    invert: n.invert_imgdata,
                                    sat_adj: n.sat_adj_imgdata,
                                    lemon: r.lemon_imgdata,
                                    pink_min_noise: _.pink_min_noise_imgdata,
                                    frontward: r.frontward_imgdata,
                                    pink_aura: r.pink_aura_imgdata,
                                    haze: r.haze_imgdata,
                                    cool_twilight: r.cool_twilight_imgdata,
                                    blues: r.blues_imgdata,
                                    horizon: r.horizon_imgdata,
                                    mellow: r.mellow_imgdata,
                                    solange_dark: r.solange_dark_imgdata,
                                    solange_grey: r.solange_grey_imgdata,
                                    zapt: r.zapt_imgdata,
                                    eon: r.eon_imgdata,
                                    aeon: r.aeon_imgdata,
                                    matrix: _.matrix_imgdata,
                                    cosmic: _.cosmic_imgdata,
                                    min_noise: _.min_noise_imgdata,
                                    red_min_noise: _.red_min_noise_imgdata,
                                    matrix2: _.matrix2,
                                    purplescale: r.purplescale_imgdata,
                                    radio: r.radio_imgdata,
                                    twenties: r.twenties_imgdata,
                                    pixel_blue: n.pixel_blue_imgdata,
                                    greyscale: r.greyscale_imgdata,
                                    grime: r.grime,
                                    redgreyscale: r.redgreyscale_imgdata,
                                    retroviolet: u.retroviolet_imgdata,
                                    greengreyscale: r.greengreyscale_imgdata,
                                }),
                                "crimson",
                                r.crimson
                            ),
                            f(a, "green_med_noise", _.green_med_noise_imgdata),
                            f(a, "green_min_noise", _.green_min_noise_imgdata),
                            f(a, "blue_min_noise", _.blue_min_noise_imgdata),
                            f(a, "rosetint", r.rosetint_imgdata),
                            f(a, "purple_min_noise", _.purple_min_noise_imgdata),
                            f(a, "red_effect", r.red_effect),
                            f(a, "gamma", o.gamma),
                            f(a, "teal_gamma", o.teal_gamma),
                            f(a, "purple_gamma", o.purple_gamma),
                            f(a, "yellow_gamma", o.yellow_gamma),
                            f(a, "bluered_gamma", o.bluered_gamma),
                            f(a, "green_gamma", o.green_gamma),
                            f(a, "red_gamma", o.red_gamma),
                            f(a, "black_specks", u.black_specks),
                            f(a, "white_specks", u.white_specks),
                            f(a, "salt_and_pepper", u.salt_and_pepper),
                            f(a, "rgbSplit", l.rgbSplit),
                            f(a, "threshold", g.threshold),
                            f(a, "threshold75", g.threshold75),
                            f(a, "threshold125", g.threshold125),
                            f(a, "pixelate", g.pixelate),
                            f(a, "pixelate16", g.pixelate16),
                            a
                        );
                    }),
                    h = function (a) {
                        var t = s();
                        return !!Object.keys(t).includes(a);
                    },
                    p = function (a) {
                        var t = document.createElement("canvas"),
                            e = a.width || a.naturalWidth,
                            d = a.height || a.naturalHeight;
                        (t.height = d), (t.width = e);
                        var n = t.getContext("2d"),
                            r = n.createPattern(a, "no-repeat");
                        return (n.fillStyle = r), n.fillRect(0, 0, t.width, t.height), [t, n];
                    },
                    v = function (a, t) {
                        if (h(t)) {
                            var e = s(),
                                n = p(a),
                                r = n[0],
                                o = n[1];
                            d = o.getImageData(0, 0, r.width, r.height);
                            var i = e[t](d);
                            return o.putImageData(i, 0, 0), r;
                        }
                        return console.log("PixelsJS ERROR: Filter " + t + " does not exist"), null;
                    };
                t.default = {
                    filterImg: function (a, t) {
                        var e = v(a, t);
                        null !== e && a.parentNode.replaceChild(e, a);
                    },
                    filterImgAsBlob: function (a, t) {
                        var e = v(a, t);
                        return null !== e
                            ? new Promise(function (a, t) {
                                  e.toBlob(
                                      function (t) {
                                          a(URL.createObjectURL(t));
                                      },
                                      "image/jpeg",
                                      1
                                  );
                              })
                            : null;
                    },
                    replaceImgElement: function (a, t) {
                        t.parentNode.replaceChild(a, t);
                    },
                    filterImgData: function (a, t) {
                        if (h(t)) {
                            var e = s();
                            return (d = a), e[t](d);
                        }
                        console.log("PixelsJS Error: Filter " + t + " does not exist");
                    },
                    filterImgDataStrength: function (a, t, strength) {
                        if (h(t)) {
                            var e = s();
                            var d = a;
                            if (typeof strength === 'undefined') {
                                return (d = a), e[t](d);
                            } else {
                                return (d = a), e[t](d, strength);
                            }
                        }
                        console.log("PixelsJS Error: Filter " + t + " does not exist");
                    },
                    getFilterList: function () {
                        var a = s();
                        return Object.keys(a);
                    },
                    adjBrightness: function (a, t) {
                        var e = p(a),
                            d = e[0],
                            n = e[1],
                            r = n.getImageData(0, 0, d.width, d.height);
                        for (c = 0; c < r.data.length; c += 4) (r.data[c] -= t), (r.data[c + 1] -= t), (r.data[c + 2] -= t);
                        n.putImageData(r, 0, 0), a.parentNode.replaceChild(d, a);
                    },
                    convertToJpg: function (a) {
                        return new Promise(function (t, e) {
                            var d = new FileReader();
                            d.readAsDataURL(a),
                                (d.onload = function () {
                                    var e = new Image();
                                    (e.src = d.result),
                                        (e.onload = function () {
                                            var d = document.createElement("canvas");
                                            (d.width = e.width),
                                                (d.height = e.height),
                                                d.getContext("2d").drawImage(e, 0, 0),
                                                d.toBlob(
                                                    function (e) {
                                                        (e.name = a.name), t(e);
                                                    },
                                                    "image/jpeg",
                                                    1
                                                );
                                        }),
                                        console.log("completed");
                                });
                        });
                    },
                };
            }.call(this, e(2)));
        },
        function (a, t) {
            var e;
            e = (function () {
                return this;
            })();
            try {
                e = e || new Function("return this")();
            } catch (a) {
                "object" == typeof window && (e = window);
            }
            a.exports = e;
        },
        function (a, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.pixel_blue_imgdata = t.invert_imgdata = t.darkify_imgdata = t.incbrightness_two_imgdata = t.incbrightness_imgdata = t.sat_adj_imgdata = void 0;
        
            var d = e(0),
                n = void 0,
                r = void 0;
        
            // Điều chỉnh độ bão hòa
            t.sat_adj_imgdata = function (a, strength = 1) {
                const adjustment = 150 * strength;  // Tính toán độ điều chỉnh tùy theo strength
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] -= adjustment;
                    a.data[n + 1] -= adjustment;
                    a.data[n + 2] -= adjustment;
                }
                return a;
            };
        
            // Tăng độ sáng
            t.incbrightness_imgdata = function (a, strength = 1) {
                const brightness = 20 * strength;  // Điều chỉnh độ sáng theo strength
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] += brightness;
                    a.data[n + 1] += brightness;
                    a.data[n + 2] += brightness;
                }
                return a;
            };
        
            // Tăng độ sáng mạnh hơn
            t.incbrightness_two_imgdata = function (a, strength = 1) {
                const brightness = 80 * strength;  // Điều chỉnh độ sáng mạnh hơn
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] += brightness;
                    a.data[n + 1] += brightness;
                    a.data[n + 2] += brightness;
                }
                return a;
            };
        
            // Làm tối hình ảnh
            t.darkify_imgdata = function (a, t, strength = 1) {
                const darkenAmount = t * strength;  // Điều chỉnh độ tối theo strength
                for (n = 0; n < a.data.length; n += 4) {
                    if (a.data[n] - darkenAmount >= 0) a.data[n] -= darkenAmount;
                    if (a.data[n + 1] - darkenAmount >= 0) a.data[n + 1] -= darkenAmount;
                    if (a.data[n + 2] - darkenAmount >= 0) a.data[n + 2] -= darkenAmount;
                }
                return a;
            };
        
            // Đảo ngược màu sắc
            t.invert_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] = 255 - a.data[n];
                    a.data[n + 1] = 255 - a.data[n + 1];
                    a.data[n + 2] = 255 - a.data[n + 2];
                }
                return a;
            };
        
            // Tạo hiệu ứng màu xanh dương nổi bật
            t.pixel_blue_imgdata = function (a, strength = 1) {
                var t = 0;
                const adjustmentFactor = strength / 10;  // Tính toán mức độ mạnh của hiệu ứng
                for (n = 0; n < a.data.length; n += 4) {
                    t = (0, d.getRandomNumber)(0, 200);
                    if (t > 0 && t < 50) {
                        r = 30 * adjustmentFactor;
                    } else if (t > 49 && t < 100) {
                        r = 90 * adjustmentFactor;
                    } else {
                        r = 10 * adjustmentFactor;
                    }
        
                    a.data[n] = Math.max(0, a.data[n] - 0);
                    a.data[n + 1] = Math.max(0, a.data[n + 1] - r);
                    a.data[n + 2] = Math.min(255, a.data[n + 2] + r); // Giới hạn không vượt quá 255
                }
                return a;
            };
        },        
        function (a, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.red_effect = t.purplescale_imgdata = t.rosetint_imgdata = t.twenties_imgdata = t.evening_imgdata = t.mellow_imgdata = t.haze_imgdata = t.pink_aura_imgdata = t.solange_dark_imgdata = t.zapt_imgdata = t.eon_imgdata = t.neue_imgdata = t.radio_imgdata = t.ocean_imgdata = t.greengreyscale_imgdata = t.crimson = t.phase = t.grime = t.redgreyscale_imgdata = t.warmth = t.slate_imgdata = t.serenity_imgdata = t.vintage_imgdata = t.perfume_imgdata = t.greyscale_imgdata = t.frontward_imgdata = t.coral_imgdata = t.lemon_imgdata = t.sunset = t.wood = t.lix_conv = t.ryo_conv = t.solange_imgdata = t.solange_grey_imgdata = t.aeon_imgdata = t.blue_greyscale_imgdata = t.cool_twilight_imgdata = t.blues_imgdata = t.horizon_imgdata = void 0);
            var d = e(0),
                n = void 0;
        
            // Điều chỉnh hiệu ứng Horizon
            t.horizon_imgdata = function (a, strength = 1) {
                const adjustment = 150 * strength;  // Tính toán độ điều chỉnh dựa trên strength
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] -= adjustment;
                    a.data[n + 1] -= adjustment;
                    a.data[n + 2] -= adjustment;
                }
                return a;
            };
            t.red_effect = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] = a.data[n] + 200 * strength;  // Tăng cường độ đỏ theo strength
                    a.data[n + 1] = a.data[n + 1] - 50 * strength;  // Giảm độ xanh lá và xanh dương theo strength
                    a.data[n + 2] = 0.5 * a.data[n + 2] * strength;  // Giảm độ xanh dương theo strength
                }
                return a;
            };
            t.rosetint_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
                    a.data[n] = t + 80 * strength;    // Điều chỉnh mức độ của màu đỏ
                    a.data[n + 1] = t + 20 * strength; // Điều chỉnh mức độ của màu xanh lá
                    a.data[n + 2] = t + 31 * strength; // Điều chỉnh mức độ của màu xanh dương
                }
                return a;
            };            
            t.greengreyscale_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
                    a.data[n] = t + 20 * strength;    // Điều chỉnh mức độ của màu đỏ
                    a.data[n + 1] = t + 70 * strength; // Điều chỉnh mức độ của màu xanh lá
                    a.data[n + 2] = t + 20 * strength; // Điều chỉnh mức độ của màu xanh dương
                }
                return a;
            };            
            t.redgreyscale_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
                    a.data[n] = t + 100 * strength;   // Điều chỉnh mức độ của màu đỏ
                    a.data[n + 1] = t + 40 * strength; // Điều chỉnh mức độ của màu xanh lá
                    a.data[n + 2] = t + 20 * strength; // Điều chỉnh mức độ của màu xanh dương
                }
                return a;
            };            
            t.twenties_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
                    a.data[n] = t + 18 * strength;   // Điều chỉnh mức độ của màu đỏ
                    a.data[n + 1] = t + 12 * strength; // Điều chỉnh mức độ của màu xanh lá
                    a.data[n + 2] = t + 20 * strength; // Điều chỉnh mức độ của màu xanh dương
                }
                return a;
            };            
            t.radio_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
                    a.data[n] = t + 5 * strength;   // Điều chỉnh mức độ của màu đỏ
                    a.data[n + 1] = t + 40 * strength; // Điều chỉnh mức độ của màu xanh lá
                    a.data[n + 2] = t + 20 * strength; // Điều chỉnh mức độ của màu xanh dương
                }
                return a;
            };
            t.purplescale_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
                    a.data[n] = t + 90 * strength;   // Điều chỉnh mức độ của màu đỏ
                    a.data[n + 1] = t + 40 * strength; // Điều chỉnh mức độ của màu xanh lá
                    a.data[n + 2] = t + 80 * strength; // Điều chỉnh mức độ của màu xanh dương
                }
                return a;
            };
            t.eon_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 1] = 120 - a.data[n + 1] * strength; // Điều chỉnh độ mạnh của hiệu ứng màu xanh lá
                    a.data[n + 2] = 100 - a.data[n + 2] * strength; // Điều chỉnh độ mạnh của hiệu ứng màu xanh dương
                }
                return a;
            };
            
            t.zapt_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 1] = (255 - a.data[n + 1]) * strength; // Điều chỉnh độ mạnh của hiệu ứng
                }
                return a;
            };
            t.solange_dark_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] = (200 - a.data[n]) * strength; // Điều chỉnh độ mạnh của hiệu ứng
                }
                return a;
            };            
            t.mellow_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 2] = (120 - a.data[n + 2]) * strength;  // Điều chỉnh độ mạnh của hiệu ứng
                }
                return a;
            };
            t.haze_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] += 90 * strength;   // Điều chỉnh màu đỏ
                    a.data[n + 1] += 90 * strength;   // Điều chỉnh màu xanh lá
                    a.data[n + 2] += 10 * strength;   // Điều chỉnh màu xanh dương
                }
                return a;
            };
            t.pink_aura_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] += 90 * strength;   // Điều chỉnh màu đỏ
                    a.data[n + 1] += 10 * strength;   // Điều chỉnh màu xanh lá
                    a.data[n + 2] += 90 * strength;   // Điều chỉnh màu xanh dương
                }
                return a;
            };
            t.crimson = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    // Điều chỉnh kênh đỏ (n) và kênh xanh lá (n+1) theo strength
                    a.data[n] += 20 * (strength);            // Điều chỉnh màu đỏ
                    a.data[n + 1] = a.data[n + 2] + 20 * (strength); // Điều chỉnh màu xanh lá
                }
                return a;
            };
            t.evening_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    // Điều chỉnh ba kênh màu (red, green, blue) với độ mạnh của effect phụ thuộc vào strength
                    a.data[n] -= 60 * strength;      // Điều chỉnh màu đỏ (n)
                    a.data[n + 1] -= 60 * strength;  // Điều chỉnh màu xanh lá (n + 1)
                    a.data[n + 2] -= 60 * strength;  // Điều chỉnh màu xanh dương (n + 2)
                }
                return a;
            };
            t.neue_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    // Điều chỉnh màu xanh lam (n + 2) và màu đỏ (n)
                    a.data[n + 2] = 255 - a.data[n + 2] * strength;  // Điều chỉnh độ sáng của màu xanh lam (tăng hoặc giảm theo strength)
                    a.data[n] = a.data[n] + 20 * strength;  // Tăng cường màu đỏ với mức độ phụ thuộc vào strength
                }
                return a;
            };
            t.ocean_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] -= 50 * (strength / 5);  // Adjust the red channel
                    a.data[n + 1] += 30 * (strength / 5);  // Adjust the green channel
                    a.data[n + 2] += 100 * (strength / 5);  // Adjust the blue channel to make it more ocean-like
                }
                return a;
            };
            // Điều chỉnh hiệu ứng Blues
            t.blues_imgdata = function (a, strength = 1) {
                const adjustment = 255 * strength;  // Tính toán độ điều chỉnh
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 2] = Math.min(255, 255 - a.data[n + 2] + adjustment); // Giới hạn giá trị màu trong phạm vi 0-255
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Cool Twilight
            t.cool_twilight_imgdata = function (a, strength = 1) {
                strength = Math.max(0, strength); // Đảm bảo strength không âm
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 1] = 255 - (255 - a.data[n + 1]) * strength; // Hiệu ứng đảo ngược màu xanh lá
                    a.data[n + 2] = a.data[n + 2] + 70 * strength; // Tăng cường màu xanh dương
                }
                return a;
            };            
        
            // Điều chỉnh hiệu ứng Blue Greyscale
            t.blue_greyscale_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
                    a.data[n] = t + (20 * strength / 10);
                    a.data[n + 1] = t + (30 * strength / 10);
                    a.data[n + 2] = t + (60 * strength / 10);
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Aeon
            t.aeon_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 1] = Math.max(0, 60 - a.data[n + 1] * strength / 10);
                    a.data[n + 2] = Math.max(0, 100 - a.data[n + 2] * strength / 10);
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Solange Grey
            t.solange_grey_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] = a.data[n + 2] * strength;
                    a.data[n + 1] = a.data[n + 1];
                    a.data[n + 2] = a.data[n] * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Solange
            t.solange_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] = 255 - a.data[n] * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Ryo Conv
            t.ryo_conv = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] = 255 - a.data[n] * strength;
                    a.data[n + 2] = 255 - a.data[n + 2] * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Lix Conv
            t.lix_conv = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] = 255 - a.data[n] * strength;
                    a.data[n + 1] = 255 - a.data[n + 1] * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Wood
            t.wood = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] += 30 * strength;
                    a.data[n + 1] += 12 * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Sunset
            t.sunset = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 1] += 50 * strength;
                    a.data[n + 2] += 12 * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Lemon
            t.lemon_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 1] += 50 * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Coral
            t.coral_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 2] += 50 * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Frontward
            t.frontward_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] = a.data[n + 2] * strength;
                    a.data[n + 2] = a.data[n + 1] + 50 * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Greyscale
            t.greyscale_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
                    a.data[n] = t * (strength);
                    a.data[n + 1] = t * (strength);
                    a.data[n + 2] = t * (strength);
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Perfume
            t.perfume_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] += 80 * strength;
                    a.data[n + 1] += 40 * strength;
                    a.data[n + 2] += 120 * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Vintage
            t.vintage_imgdata = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] += 120 * strength;
                    a.data[n + 1] += 70 * strength;
                    a.data[n + 2] += 13 * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Serenity
            t.serenity_imgdata = function (a, strength = 1) {
                strength = Math.max(0, strength); // Đảm bảo strength không âm
            
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] += 10 * strength;       // Điều chỉnh giá trị màu đỏ
                    a.data[n + 1] += 40 * strength;   // Điều chỉnh giá trị màu xanh lá
                    a.data[n + 2] += 90 * strength;   // Điều chỉnh giá trị màu xanh dương
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Warmth
            t.warmth = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n] += 50 * strength;
                    a.data[n + 1] += 25 * strength;
                }
                return a;
            };
        
            // Điều chỉnh hiệu ứng Grime
            t.grime = function (a, strength = 1) {
                strength = Math.max(0, strength); // Đảm bảo strength không âm
            
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 1] = Math.min(255, Math.max(0, a.data[n] + 5 * strength));
                    a.data[n] = Math.min(255, Math.max(0, a.data[n] + 1 * strength));
                }
            
                return a;
            };            
        
            // Điều chỉnh hiệu ứng Phase
            t.phase = function (a, strength = 1) {
                for (n = 0; n < a.data.length; n += 4) {
                    a.data[n + 1] = Math.max(0, a.data[n + 1] - (20 * strength / 10));
                    a.data[n + 2] = Math.min(255, a.data[n + 2] + (50 * strength / 10));
                }
                return a;
            };
        },        
        function (a, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var d = void 0;
        
            function adjustGamma(value, strength) {
                // Nếu không có strength, sử dụng mặc định là 5
                strength = strength || 5;
                return 255 * Math.pow(value / 255, strength / 10);
            }
        
            (t.gamma = function (a, strength = 1) {
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d] = 255 * Math.pow(a.data[d] / 255, 5 * strength);    // Điều chỉnh độ gamma theo strength
                    a.data[d + 1] = 255 * Math.pow(a.data[d + 1] / 255, 5 * strength);
                    a.data[d + 2] = 255 * Math.pow(a.data[d + 2] / 255, 5 * strength);
                }
                return a;
            }),
        
            (t.teal_gamma = function (a, strength = 1) {
                strength = Math.max(0, strength); // Đảm bảo strength không âm
            
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d] = 255 * Math.pow(a.data[d] / 255, 1 + 4 * strength);
                }
            
                return a;
            }),            
        
            (t.purple_gamma = function (a, strength = 1) {
                strength = Math.max(0, strength); // Đảm bảo strength không âm
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d + 1] = 255 * Math.pow(a.data[d + 1] / 255, 1 + 4 * strength);
                }
                return a;
            });
            
            (t.yellow_gamma = function (a, strength = 1) {
                strength = Math.max(0, strength);
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d + 2] = 255 * Math.pow(a.data[d + 2] / 255, 1 + 4 * strength);
                }
                return a;
            });
            
            (t.bluered_gamma = function (a, strength = 1) {
                strength = Math.max(0, strength);
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d] = 255 * Math.pow(a.data[d] / 255, 1 + 4 * strength);
                    a.data[d + 1] = 255 * Math.pow(a.data[d + 1] / 255, 1 + 4 * strength);
                }
                return a;
            });
            
            (t.green_gamma = function (a, strength = 1) {
                strength = Math.max(0, strength);
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d] = 255 * Math.pow(a.data[d] / 255, 1 + 4 * strength);
                    a.data[d + 2] = 255 * Math.pow(a.data[d + 2] / 255, 1 + 4 * strength);
                }
                return a;
            });
            
            (t.red_gamma = function (a, strength = 1) {
                strength = Math.max(0, strength);
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d + 1] = 255 * Math.pow(a.data[d + 1] / 255, 1 + 4 * strength);
                    a.data[d + 2] = 255 * Math.pow(a.data[d + 2] / 255, 1 + 4 * strength);
                }
                return a;
            });            
        },  
        function (a, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.add_horizontal_line_imgdata = t.add_green_diagonal_lines_imgdata = t.add_diagonal_lines_imgdata = void 0);
            e(0);
            var d = void 0;
        
            // Hàm phụ để điều chỉnh giá trị t theo strength
            function adjustStrength(value, strength) {
                strength = strength || 20;  // Giá trị mặc định nếu không có strength
                return Math.min(value + (strength * 2), 255);  // Điều chỉnh độ mạnh của t (tối đa là 255)
            }
        
            (t.add_diagonal_lines_imgdata = function (a, strength) {
                var t = 0;
                for (d = 0; d < a.data.length; d += 4) {
                    t = adjustStrength(t, strength); // Sử dụng strength để điều chỉnh t
                    var e = (a.data[d] + a.data[d + 1] + a.data[d + 2]) / 3;
                    a.data[d] = e + t;
                    a.data[d + 1] = e + 70;
                    a.data[d + 2] = e + 20;
                }
                return a;
            }),
            (t.add_green_diagonal_lines_imgdata = function (a, strength = 1) {
                strength = Math.max(0, strength); // Đảm bảo strength không âm
                var t = 0;
            
                for (d = 0; d < a.data.length; d += 4) {
                    (t += 20 * strength) > 255 && (t = 0); // Điều chỉnh tỉ lệ theo strength
                    var e = (a.data[d] + a.data[d + 1] + a.data[d + 2]) / 3;
                    a.data[d] = e + 5 * strength;         // Điều chỉnh giá trị màu đỏ
                    a.data[d + 1] = e + t;                // Điều chỉnh giá trị màu xanh lá
                    a.data[d + 2] = e + 20 * strength;    // Điều chỉnh giá trị màu xanh dương
                }
                return a;
            }),
            t.add_horizontal_line_imgdata = function (a, strength = 1) {
                var t = 0;
                strength = Math.max(0, strength); // Đảm bảo strength không âm
            
                for (d = 0; d < a.data.length; d += 4) {
                    (t += strength) > 255 && (t = 0); // Điều chỉnh độ mạnh của t theo strength
                    var e = (a.data[d] + a.data[d + 1] + a.data[d + 2]) / 3;
                    (a.data[d] = e + t), 
                    (a.data[d + 1] = e + 70 * strength), 
                    (a.data[d + 2] = e + 20 * strength);
                }
                return a;
            };            
        },
        function (a, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });

    // Hàm threshold với strength tùy chọn
    var d = function (a, t) {
        var thresholdValue = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        var strength = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;

        // Điều chỉnh thresholdValue dựa trên strength
        thresholdValue = thresholdValue * strength;

        for (var e = 0; e < a.data.length; e += 4) {
            var d = a.data[e],
                n = a.data[e + 1],
                r = a.data[e + 2],
                o = 0.2126 * d + 0.7152 * n + 0.0722 * r >= thresholdValue ? 255 : 0;
            a.data[e] = a.data[e + 1] = a.data[e + 2] = o;
        }
        return a;
    };

    // Hàm pixelate với strength tùy chọn
    var n = function (a, t) {
        var pixelSize = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        var strength = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        var e = a.width,
            d = a.height,
            n = void 0,
            r = void 0,
            o = void 0;

        // Điều chỉnh pixelSize dựa trên strength
        pixelSize = Math.floor(pixelSize * strength);

        if (pixelSize % 2 !== 0) pixelSize += 1; // Đảm bảo pixelSize luôn là số chẵn

        for (var i = 0; i < d; i += pixelSize) {
            for (var g = 0; g < e; g += pixelSize) {
                var _ = g + pixelSize / 2,
                    l = i + pixelSize / 2,
                    u = 4 * (_ + l * e);
                void 0 !== a.data[u] && ((n = a.data[u]), (r = a.data[u + 1]), (o = a.data[u + 2]));
                for (var m = g + pixelSize, f = i + pixelSize, c = i; c < f && !(c > d); c++) {
                    for (var s = g; s < m && !(s > e); s++) {
                        var h = 4 * (s + c * e);
                        (a.data[h] = n), (a.data[h + 1] = r), (a.data[h + 2] = o);
                    }
                }
            }
        }
        return a;
    };

    // Định nghĩa các hàm với tham số strength
    t.threshold = function (a, strength) {
        return d(a, 100, strength);
    };
    t.threshold75 = function (a, strength) {
        return d(a, 75, strength);
    };
    t.threshold125 = function (a, strength) {
        return d(a, 125, strength);
    };
    t.pixelate = n;
    t.pixelate16 = function (a, strength) {
        return n(a, 16, strength);
    };
        },

        function (a, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.pink_min_noise_imgdata = t.matrix_imgdata = t.min_noise_imgdata = t.matrix2 = t.blue_min_noise_imgdata = t.cosmic_imgdata = t.teal_min_noise_imgdata = t.dark_purple_min_noise_imgdata = t.purple_min_noise_imgdata = t.green_min_noise_imgdata = t.green_med_noise_imgdata = t.red_min_noise_imgdata = void 0);
        
            var d = e(0),
                n = void 0,
                r = void 0;
        
            // Hàm red_min_noise_imgdata với tham số strength
            t.red_min_noise_imgdata = function (a, strength = 1) {
                Math.random();
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (0.6 + 0.6 * Math.random()) * (strength),
                        e = (0.6 + 0.4 * Math.random()) * (strength),
                        d = (0.6 + 0.4 * Math.random()) * (strength);
                    (a.data[n] = 0.99 * a.data[n] * t),
                        (a.data[n + 1] = 0.99 * a.data[n + 1] * e),
                        (a.data[n + 2] = 0.99 * a.data[n + 2] * d);
                }
                return a;
            };
        
            // Hàm green_med_noise_imgdata với tham số strength
            t.green_med_noise_imgdata = function (a, strength = 1) {
                Math.random();
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (0.6 + 0.5 * Math.random()) * strength,
                        e = (0.6 + 0.5 * Math.random()) * strength,
                        d = (0.6 + 0.5 * Math.random()) * strength;
                    (a.data[n] = 0.5 * a.data[n + 1] * t),
                        (a.data[n + 1] = 0.99 * a.data[n + 2] * e),
                        (a.data[n + 2] = 0.99 * a.data[n] * d);
                }
                return a;
            };
        
            // Hàm green_min_noise_imgdata với tham số strength
            t.green_min_noise_imgdata = function (a, strength = 1) {
                Math.random();
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (0.6 + 0.1 * Math.random()) * strength,
                        e = (0.6 + 0.5 * Math.random()) * strength,
                        d = (0.6 + 0.4 * Math.random()) * strength;
                    (a.data[n] = 0.99 * a.data[n] * t),
                        (a.data[n + 1] = 0.99 * a.data[n + 1] * e),
                        (a.data[n + 2] = 0.99 * a.data[n + 2] * d);
                }
                return a;
            };
        
            // Hàm purple_min_noise_imgdata với tham số strength
            t.purple_min_noise_imgdata = function (a, strength = 1) {
                Math.random();
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (0.6 + 0.5 * Math.random()) * strength,
                        e = (0.6 + 0.2 * Math.random()) * strength,
                        d = (0.6 + 0.8 * Math.random()) * strength;
                    (a.data[n] = 0.99 * a.data[n] * t),
                        (a.data[n + 1] = 0.99 * a.data[n + 1] * e),
                        (a.data[n + 2] = 0.99 * a.data[n + 2] * d);
                }
                return a;
            };
        
            // Hàm dark_purple_min_noise_imgdata với tham số strength
            t.dark_purple_min_noise_imgdata = function (a, strength = 1) {
                Math.random();
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (0.6 + 0.5 * Math.random()) * strength,  // Điều chỉnh với strength
                        e = (0.6 + 0.5 * Math.random()) * strength,
                        d = (0.6 + 0.5 * Math.random()) * strength;
                    
                    // Áp dụng mức độ noise với strength
                    a.data[n] = 0.5 * a.data[n] * t;
                    a.data[n + 1] = 0.3 * a.data[n + 1] * e;
                    a.data[n + 2] = 0.99 * a.data[n + 2] * d;
                }
                return a;
            };            
            // Hàm teal_min_noise_imgdata với tham số strength
            t.teal_min_noise_imgdata = function (a, strength = 1) {
                Math.random();
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (0.6 + 0.1 * Math.random()) * (strength / 1),
                        e = (0.6 + 0.5 * Math.random()) * (strength / 1),
                        d = (0.6 + 0.5 * Math.random()) * (strength / 1);
                    (a.data[n] = 0.99 * a.data[n] * t),
                        (a.data[n + 1] = 0.99 * a.data[n + 1] * e),
                        (a.data[n + 2] = 0.99 * a.data[n + 2] * d);
                }
                return a;
            };
        
            // Hàm cosmic_imgdata với tham số strength
            t.cosmic_imgdata = function (a, strength = 1) {
                var t, r;
                strength = Math.max(0, strength); // Đảm bảo strength không âm
                for (n = 0; n < a.data.length; n += 4) {
                    t = (0, d.getRandomNumber)(0, 200);
                    
                    // Điều chỉnh giá trị r tùy thuộc vào giá trị t
                    if (t > 0 && t < 50) {
                        r = 30;
                    } else if (t > 49 && t < 100) {
                        r = 90;
                    } else {
                        r = 10;
                    }
                    
                    // Áp dụng hiệu ứng với strength
                    a.data[n] = Math.min(255, a.data[n] + (strength * r)); // Cập nhật giá trị kênh đỏ
                    a.data[n + 1] = Math.min(255, a.data[n + 1] + (strength * r)); // Cập nhật giá trị kênh xanh lá
                    a.data[n + 2] = Math.min(255, a.data[n + 2] + (strength * r)); // Cập nhật giá trị kênh xanh dương
                }
                return a;
            };
                      
        
            // Hàm blue_min_noise_imgdata với tham số strength
            t.blue_min_noise_imgdata = function (a, strength = 1) {
                Math.random();
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (0.6 + 0.1 * Math.random()) * strength,
                        e = (0.6 + 0.2 * Math.random()) * strength,
                        d = (0.6 + 0.7 * Math.random()) * strength;
                    (a.data[n] = 0.99 * a.data[n] * t),
                        (a.data[n + 1] = 0.99 * a.data[n + 1] * e),
                        (a.data[n + 2] = 0.99 * a.data[n + 2] * d);
                }
                return a;
            };
        
            // Hàm matrix2 với tham số strength
            t.matrix2 = function (a, strength = 1) {
                var t, r;
                strength = Math.max(0, strength); // Đảm bảo strength không âm
                for (n = 0; n < a.data.length; n += 4) {
                    t = (0, d.getRandomNumber)(0, 200);
            
                    // Điều chỉnh giá trị r tùy theo giá trị t
                    if (t > 0 && t < 50) {
                        r = 30;
                    } else if (t > 49 && t < 100) {
                        r = 90;
                    } else {
                        r = 10;
                    }
            
                    // Áp dụng hiệu ứng với strength
                    a.data[n] = Math.min(255, a.data[n] + (strength * r)); // Cập nhật giá trị kênh đỏ
                    a.data[n + 1] = Math.min(255, a.data[n + 1] + (strength * r)); // Cập nhật giá trị kênh xanh lá
                    a.data[n + 2] = Math.min(255, a.data[n + 2] + (strength * r)); // Cập nhật giá trị kênh xanh dương
                }
                return a;
            };            
        
            // Hàm min_noise_imgdata với tham số strength
            t.min_noise_imgdata = function (a, strength = 1) {
                Math.random();
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (0.6 + 0.4 * Math.random()) * strength,
                        e = (0.6 + 0.4 * Math.random()) * strength,
                        d = (0.6 + 0.4 * Math.random()) * strength;
                    (a.data[n] = 0.99 * a.data[n] * t),
                        (a.data[n + 1] = 0.99 * a.data[n + 1] * e),
                        (a.data[n + 2] = 0.99 * a.data[n + 2] * d);
                }
                return a;
            };
        
            // Hàm matrix_imgdata với tham số strength
            t.matrix_imgdata = function (a, strength = 1) {
                var t, r;
                strength = Math.max(0, strength); // Đảm bảo strength không âm
                for (n = 0; n < a.data.length; n += 4) {
                    t = (0, d.getRandomNumber)(0, 200);
                    
                    // Điều chỉnh giá trị `r` tùy thuộc vào giá trị của `t`
                    if (t > 0 && t < 50) {
                        r = 30;
                    } else if (t > 49 && t < 100) {
                        r = 90;
                    } else {
                        r = 10;
                    }
                    
                    // Áp dụng hiệu ứng với strength
                    a.data[n] = Math.min(255, a.data[n] + (strength * r)); 
                    a.data[n + 1] = Math.min(255, a.data[n + 1] + (strength * r)); 
                }
                return a;
            };                      
        
            // Hàm pink_min_noise_imgdata với tham số strength
            t.pink_min_noise_imgdata = function (a, strength = 1) {
                Math.random();
                for (n = 0; n < a.data.length; n += 4) {
                    var t = (0.6 + 0.6 * Math.random()) * (strength / 1),
                        e = (0.6 + 0.1 * Math.random()) * (strength / 1),
                        d = (0.6 + 0.4 * Math.random()) * (strength / 1);
                    (a.data[n] = 0.99 * a.data[n] * t),
                        (a.data[n + 1] = 0.99 * a.data[n + 1] * e),
                        (a.data[n + 2] = 0.99 * a.data[n + 2] * d);
                }
                return a;
            };
        },        
        function (a, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.rgbSplit = t.offset_blue_imgdata = t.offset_green_imgdata = t.extreme_offset_red = t.extreme_offset_green = t.extreme_offset_blue = t.extra_offset_red = t.extra_offset_green = t.extra_offset_blue = t.offset = void 0);
            e(0);
            var d = void 0;
            var defaultStrength = 1;  // Đặt mặc định cho strength
        
            // Hàm offset
            t.offset = function (a, strength = defaultStrength) {
                for (var t = 0; t < a.data.length; t += 4) {
                    a.data[t] = null == a.data[t + 100] ? 0 : a.data[t + 20] * strength; // Thêm tham số strength vào
                }
                return a;
            };
        
            // Hàm extra_offset_blue
            t.extra_offset_blue = function (a, strength = defaultStrength) {
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d + 2] = null == a.data[d + 900] ? 0 : a.data[d + 60] * strength; // Thêm tham số strength vào
                }
                return a;
            };
        
            // Hàm extra_offset_green
            t.extra_offset_green = function (a, strength = defaultStrength) {
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d + 1] = null == a.data[d + 900] ? 0 : a.data[d + 60] * strength; // Thêm tham số strength vào
                }
                return a;
            };
        
            // Hàm extra_offset_red
            t.extra_offset_red = function (a, strength = defaultStrength) {
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d] = null == a.data[d + 900] ? 0 : a.data[d + 60] * strength; // Thêm tham số strength vào
                }
                return a;
            };
        
            // Hàm extreme_offset_blue
            t.extreme_offset_blue = function (a, strength = defaultStrength) {
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d + 2] = null == a.data[d + 4900] ? 0 : a.data[d + 140] * strength; // Thêm tham số strength vào
                }
                return a;
            };
        
            // Hàm extreme_offset_green
            t.extreme_offset_green = function (a, strength = defaultStrength) {
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d + 1] = null == a.data[d + 4900] ? 0 : a.data[d + 140] * strength; // Thêm tham số strength vào
                }
                return a;
            };
        
            // Hàm extreme_offset_red
            t.extreme_offset_red = function (a, strength = defaultStrength) {
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d] = null == a.data[d + 4900] ? 0 : a.data[d + 140] * strength; // Thêm tham số strength vào
                }
                return a;
            };
        
            // Hàm offset_green_imgdata
            t.offset_green_imgdata = function (a, strength = defaultStrength) {
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d + 1] = null == a.data[d + 100] ? 0 : a.data[d + 20] * strength; // Thêm tham số strength vào
                }
                return a;
            };
        
            // Hàm offset_blue_imgdata
            t.offset_blue_imgdata = function (a, strength = defaultStrength) {
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d + 2] = null == a.data[d + 100] ? 0 : a.data[d + 20] * strength; // Thêm tham số strength vào
                }
                return a;
            };
        
            // Hàm rgbSplit
            t.rgbSplit = function (a, strength = defaultStrength) {
                for (d = 0; d < a.data.length; d += 4) {
                    a.data[d - 150] = a.data[d + 0] * strength; // Thêm tham số strength vào
                    a.data[d + 500] = a.data[d + 1] * strength; // Thêm tham số strength vào
                    a.data[d - 300] = a.data[d + 2] * strength; // Thêm tham số strength vào
                }
                return a;
            };
        },        
        function (a, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.salt_and_pepper = t.white_specks = t.black_specks = t.specksredscale_imgdata = t.specks_imgdata = t.green_specks_imgdata = t.eclectic_imgdata = t.retroviolet_imgdata = t.yellow_casino_imgdata = t.casino_imgdata = void 0);
            var d =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (a) {
                              return typeof a;
                          }
                        : function (a) {
                              return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                          },
                n = e(0),
                r = void 0,
                o = void 0,
                i = void 0,
                g = function (a, t, strength) {
                    var e = arguments.length > 2 && void 0 !== strength ? strength : 15,
                        o = void 0,
                        i = void 0,
                        g = void 0;
                    if ("object" === (void 0 === t ? "undefined" : d(t))) t.hasOwnProperty("R") && t.hasOwnProperty("G") && t.hasOwnProperty("B") && ((o = t.R), (i = t.G), (g = t.B));
                    else if ("string" == typeof t) {
                        var _ = t.replace("#", "").trim();
                        if (3 === _.length) {
                            var l = /([a-f\d])([a-f\d])([a-f\d])$/i;
                            _ = _.replace(l, function (a, t, e, d) {
                                return t + t + e + e + d + d;
                            });
                        }
                        if (6 === _.length) {
                            var u = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_);
                            u && ((o = parseInt(u[1], 16)), (i = parseInt(u[2], 16)), (g = parseInt(u[3], 16)));
                        }
                    }
                    if (void 0 !== o && void 0 !== i && void 0 !== g) {
                        for (r = 0; r < a.data.length; r += 4) {
                            var m = (0, n.getRandomNumber)(0, 100);
                            m > 10 && m < e && ((a.data[r] = o), (a.data[r + 1] = i), (a.data[r + 2] = g));
                        }
                        return a;
                    }
                };
            (t.casino_imgdata = function (a, strength) {
                strength = strength || 1; // default strength is 1
                var t = 0;
                for (r = 0; r < a.data.length; r += 4) {
                    (t = (0, n.getRandomNumber)(0, 255)) > 255 && (t = 0);
                    var e = (a.data[r] + a.data[r + 1] + a.data[r + 2]) / 3;
                    (a.data[r] = e + t * strength), (a.data[r + 1] = e + 2 * strength), (a.data[r + 2] = e + 5 * strength);
                }
                return a;
            }),
            (t.yellow_casino_imgdata = function (a, strength) {
                strength = strength || 1;
                var t = 0,
                    e = 0;
                for (r = 0; r < a.data.length; r += 4) {
                    (t = (0, n.getRandomNumber)(0, 255)), (e = (0, n.getRandomNumber)(0, 255)), t > 255 && (t = 0);
                    var d = (a.data[r] + a.data[r + 1] + a.data[r + 2]) / 3;
                    (a.data[r] = d + t * strength), (a.data[r + 1] = d + e * strength), (a.data[r + 2] = d + 5 * strength);
                }
                return a;
            }),
            (t.retroviolet_imgdata = function (a, strength) {
                strength = strength || 1;
                var t = 0;
                for (r = 0; r < a.data.length; r += 4) {
                    var e = 0,
                        d = 0;
                    (t = (0, n.getRandomNumber)(0, 200)) > 0 && t < 50 ? ((e = 20 * strength), (d = 30 * strength)) : t > 49 && t < 100 ? ((e = 20 * strength), (d = 90 * strength)) : ((e = 10 * strength), (d = 50 * strength)),
                        a.data[r] - e > 255 ? (a.data[r] -= e) : (a.data[r] += e),
                        a.data[r + 2] + d > 255 ? (a.data[r + 2] -= d) : (a.data[r + 2] += d);
                }
                return a;
            }),
            (t.eclectic_imgdata = function (a, strength) {
                strength = strength || 1;
                var t = 0;
                for (r = 0; r < a.data.length; r += 4) {
                    (t = (0, n.getRandomNumber)(0, 200)) > 0 && t < 50 ? ((o = 20 * strength), (i = 30 * strength)) : t > 49 && t < 100 ? ((o = 10 * strength), (i = 90 * strength)) : ((o = 30 * strength), (i = 10 * strength)),
                        a.data[r] + 0 > 255 ? (a.data[r] -= 0) : (a.data[r] += 0),
                        a.data[r + 1] + 0 > 255 ? (a.data[r + 1] -= i) : (a.data[r] += i);
                }
                return a;
            }),
            (t.green_specks_imgdata = function (a, strength = 1) {
                var t;
                for (r = 0; r < a.data.length; r += 4) {
                    t = (0, n.getRandomNumber)(0, 200);
                    let o, i;
                    if (t > 0 && t < 50) {
                        o = 20 * strength;
                        i = 30 * strength;
                    } else if (t > 49 && t < 100) {
                        o = 10 * strength;
                        i = 90 * strength;
                    } else {
                        o = 30 * strength;
                        i = 10 * strength;
                    }
                    a.data[r] += o;
                    a.data[r + 1] += i;
                    a.data[r + 2] += o;
                }
                return a;
            }),
            (t.specks_imgdata = function (a, strength = 1) {
                var t = 0,
                    e = 0;
                for (r = 0; r < a.data.length; r += 4) {
                    r = (0, n.getRandomNumber)(0, a.data.length);
                    t = (0, n.getRandomNumber)(0, 255);
                    e = (0, n.getRandomNumber)(0, 255);
                    (0, n.getRandomNumber)(0, 255);
                    t > 255 && (t = 0);
                    var d = (a.data[r] + a.data[r + 1] + a.data[r + 2]) / 3;
                    a.data[r] = d + t * strength;
                    a.data[r + 1] = d + e * strength;
                    a.data[r + 2] = d + 5 * strength;
                }
                return a;
            }),
            (t.specksredscale_imgdata = function (a, strength = 1) {
                for (r = 0; r < a.data.length; r += 4) {
                    var t = (0, n.getRandomNumber)(0, 100);
                    if (t > 10 && t < 13) {
                        a.data[r] = 120 * strength;
                        a.data[r + 1] = 120 * strength;
                        a.data[r + 2] = 120 * strength;
                    }
                    var e = (a.data[r] + a.data[r + 1] + a.data[r + 2]) / 3;
                    a.data[r] = e + 100 * strength;
                    a.data[r + 1] = e + 40 * strength;
                    a.data[r + 2] = e + 20 * strength;
                }
                return a;
            }),
            (t.black_specks = function (a, strength = 1) {
                return g(a, { R: 0, G: 0, B: 0 }, strength);
            }),
            (t.white_specks = function (a, strength = 1) {
                return g(a, { R: 255, G: 255, B: 255 }, strength);
            }),
            (t.salt_and_pepper = function (a, strength = 1) {
                return (a = g(a, { R: 255, G: 255, B: 255 }, 30 * strength)),
                       (a = g(a, { R: 0, G: 0, B: 0 }, 25 * strength));
            });            
        }        
    ]);
});
