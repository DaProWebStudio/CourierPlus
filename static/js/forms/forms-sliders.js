"use strict";
const decimals = 0;
    // format object
let numberFormat = {
    // 'to' the formatted value. Receives a number.
    to: function (value) {
        return value.toFixed(decimals);
    },
    // 'from' the formatted value.
    // Receives a string, should return a number.
    from: function (value) {
        return Number(value);;
    }
};
! function() {
	const e = document.getElementById("slider-basic"),
		s = document.getElementById("slider-handles"),
		m = document.getElementById("slider-steps"),
		g = document.getElementById("slider-tap"),
		u = document.getElementById("slider-drag"),
		p = document.getElementById("slider-fixed-drag"),
		y = document.getElementById("slider-combined-options"),
		t = document.getElementById("slider-hover"),
		v = document.getElementById("slider-pips");
	e && noUiSlider.create(e, {
		start: [50],
		connect: [!0, !1],
		direction: isRtl ? "rtl" : "ltr",
		range: {
			min: 0,
			max: 100
		}
	}), s && noUiSlider.create(s, {
		start: [0, 50],
		direction: isRtl ? "rtl" : "ltr",
		step: 5,
		connect: !0,
		range: {
			min: 0,
			max: 100
		},
		pips: {
			mode: "range",
			density: 5,
			stepped: !0
		}
	}), m && noUiSlider.create(m, {
		start: [0, 30],
		snap: !0,
		connect: !0,
		direction: isRtl ? "rtl" : "ltr",
		range: {
			min: 0,
			"10%": 10,
			"20%": 20,
			"30%": 30,
			"40%": 40,
			"50%": 50,
			max: 100
		}
	}), g && noUiSlider.create(g, {
		start: [10, 30],
		behaviour: "tap",
		direction: isRtl ? "rtl" : "ltr",
		connect: !0,
		range: {
			min: 10,
			max: 100
		}
	}), u && noUiSlider.create(u, {
		start: [40, 60],
		limit: 20,
		behaviour: "drag",
		direction: isRtl ? "rtl" : "ltr",
		connect: !0,
		range: {
			min: 20,
			max: 80
		}
	}), p && noUiSlider.create(p, {
		start: [40, 60],
		behaviour: "drag-fixed",
		direction: isRtl ? "rtl" : "ltr",
		connect: !0,
		range: {
			min: 20,
			max: 80
		}
	}), y && noUiSlider.create(y, {
		start: [40, 60],
		behaviour: "drag-tap",
		direction: isRtl ? "rtl" : "ltr",
		connect: !0,
		range: {
			min: 20,
			max: 80
		}
	}), t && (noUiSlider.create(t, {
		start: 20,
		behaviour: "hover-snap-tap",
		direction: isRtl ? "rtl" : "ltr",
		range: {
			min: 0,
			max: 100
		}
	}), t.noUiSlider.on("hover", function(e) {
		document.getElementById("slider-val").innerHTML = e
	})), v && noUiSlider.create(v, {
		start: [10],
		behaviour: "tap-drag",
		step: 10,
		tooltips: !0,
		range: {
			min: 0,
			max: 100
		},
		pips: {
			mode: "steps",
			stepped: !0,
			density: 5
		},
		direction: isRtl ? "rtl" : "ltr"
	});
	var h = document.getElementById("slider-primary"),
		E = document.getElementById("slider-success"),
		S = document.getElementById("slider-danger"),
		U = document.getElementById("slider-info"),
		x = document.getElementById("slider-warning"),
		i = {
			start: [2015, 2021],
			connect: !0,
			behaviour: "tap-drag",
			step: 1,
			tooltips: !0,
			range: {
				min: 2010,
				max: 2022
			},
			pips: {
				mode: "steps",
				stepped: !0,
				density: 1
			},
			direction: isRtl ? "rtl" : "ltr"
		};
	h && noUiSlider.create(h, i), E && noUiSlider.create(E, i), S && noUiSlider.create(S, i), U && noUiSlider.create(U, i), x && noUiSlider.create(x, i);
	const n = document.getElementById("slider-dynamic"),
    min = document.getElementById("min_year"), // r
    max = document.getElementById("max_year"), // d
    currentTime = new Date(),
    year = currentTime.getFullYear();
	if (n && (noUiSlider.create(n, {
            start: [Number(min.value), Number(max.value)],
            connect: !0,
            behaviour: "tap-drag",
            step: 1,
            tooltips: !0,
            range: {
                min: 2010,
                max: year
            },
            format: numberFormat,
            pips: {
                mode: "steps",
                stepped: !0,
                density: 10
            },
            direction: isRtl ? "rtl" : "ltr"
		}), n.noUiSlider.on("update", function(e, t) {
			e = e[t];
			t ? max.value = e : min.value = Math.round(e)
		})));
	const l = document.getElementById("slider-vertical"),
		a = document.getElementById("slider-connect-upper"),
		o = document.getElementById("slider-vertical-tooltip"),
		c = document.getElementById("slider-vertical-limit");
	l && (l.style.height = "200px", noUiSlider.create(l, {
		start: [40, 60],
		orientation: "vertical",
		behaviour: "drag",
		connect: !0,
		range: {
			min: 0,
			max: 100
		}
	})), a && (a.style.height = "200px", noUiSlider.create(a, {
		start: 40,
		orientation: "vertical",
		behaviour: "drag",
		connect: "upper",
		range: {
			min: 0,
			max: 100
		}
	})), o && (o.style.height = "200px", noUiSlider.create(o, {
		start: 10,
		orientation: "vertical",
		behaviour: "drag",
		tooltips: !0,
		range: {
			min: 0,
			max: 100
		}
	})), c && (c.style.height = "200px", noUiSlider.create(c, {
		start: [0, 40],
		orientation: "vertical",
		behaviour: "drag",
		limit: 60,
		tooltips: !0,
		connect: !0,
		range: {
			min: 0,
			max: 100
		}
	}))
}();