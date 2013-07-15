//     Underscore.js 1.4.1
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.
((function () {
    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.push, h = d.slice, i = d.concat, j = d.unshift, k = e.toString, l = e.hasOwnProperty, m = d.forEach, n = d.map, o = d.reduce, p = d.reduceRight, q = d.filter, r = d.every, s = d.some, t = d.indexOf, u = d.lastIndexOf, v = Array.isArray, w = Object.keys, x = f.bind, y = function (a) {
        if (a instanceof y)return a;
        if (this instanceof y)this._wrapped = a; else return new y(a)
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = y), exports._ = y) : a._ = y, y.VERSION = "1.4.1";
    var z = y.each = y.forEach = function (a, b, d) {
        if (m && a.forEach === m)a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; e < f; e++)if (b.call(d, a[e], e, a) === c)return
        } else for (var g in a)if (y.has(a, g) && b.call(d, a[g], g, a) === c)return
    };
    y.map = y.collect = function (a, b, c) {
        var d = [];
        return n && a.map === n ? a.map(b, c) : (z(a, function (a, e, f) {
            d[d.length] = b.call(c, a, e, f)
        }), d)
    }, y.reduce = y.foldl = y.inject = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (o && a.reduce === o)return d && (b = y.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        z(a, function (a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
        });
        if (!e)throw new TypeError("Reduce of empty array with no initial value");
        return c
    }, y.reduceRight = y.foldr = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (p && a.reduceRight === p)return d && (b = y.bind(b, d)), arguments.length > 2 ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = y.keys(a);
            f = g.length
        }
        z(a, function (h, i, j) {
            i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
        });
        if (!e)throw new TypeError("Reduce of empty array with no initial value");
        return c
    }, y.find = y.detect = function (a, b, c) {
        var d;
        return A(a, function (a, e, f) {
            if (b.call(c, a, e, f))return d = a, !0
        }), d
    }, y.filter = y.select = function (a, b, c) {
        var d = [];
        return q && a.filter === q ? a.filter(b, c) : (z(a, function (a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a)
        }), d)
    }, y.reject = function (a, b, c) {
        var d = [];
        return z(a, function (a, e, f) {
            b.call(c, a, e, f) || (d[d.length] = a)
        }), d
    }, y.every = y.all = function (a, b, d) {
        b || (b = y.identity);
        var e = !0;
        return r && a.every === r ? a.every(b, d) : (z(a, function (a, f, g) {
            if (!(e = e && b.call(d, a, f, g)))return c
        }), !!e)
    };
    var A = y.some = y.any = function (a, b, d) {
        b || (b = y.identity);
        var e = !1;
        return s && a.some === s ? a.some(b, d) : (z(a, function (a, f, g) {
            if (e || (e = b.call(d, a, f, g)))return c
        }), !!e)
    };
    y.contains = y.include = function (a, b) {
        var c = !1;
        return t && a.indexOf === t ? a.indexOf(b) != -1 : (c = A(a, function (a) {
            return a === b
        }), c)
    }, y.invoke = function (a, b) {
        var c = h.call(arguments, 2);
        return y.map(a, function (a) {
            return(y.isFunction(b) ? b : a[b]).apply(a, c)
        })
    }, y.pluck = function (a, b) {
        return y.map(a, function (a) {
            return a[b]
        })
    }, y.where = function (a, b) {
        return y.isEmpty(b) ? [] : y.filter(a, function (a) {
            for (var c in b)if (b[c] !== a[c])return!1;
            return!0
        })
    }, y.max = function (a, b, c) {
        if (!b && y.isArray(a) && a[0] === +a[0] && a.length < 65535)return Math.max.apply(Math, a);
        if (!b && y.isEmpty(a))return-Infinity;
        var d = {computed: -Infinity};
        return z(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g >= d.computed && (d = {value: a, computed: g})
        }), d.value
    }, y.min = function (a, b, c) {
        if (!b && y.isArray(a) && a[0] === +a[0] && a.length < 65535)return Math.min.apply(Math, a);
        if (!b && y.isEmpty(a))return Infinity;
        var d = {computed: Infinity};
        return z(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {value: a, computed: g})
        }), d.value
    }, y.shuffle = function (a) {
        var b, c = 0, d = [];
        return z(a, function (a) {
            b = y.random(c++), d[c - 1] = d[b], d[b] = a
        }), d
    };
    var B = function (a) {
        return y.isFunction(a) ? a : function (b) {
            return b[a]
        }
    };
    y.sortBy = function (a, b, c) {
        var d = B(b);
        return y.pluck(y.map(a,function (a, b, e) {
            return{value: a, index: b, criteria: d.call(c, a, b, e)}
        }).sort(function (a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || c === void 0)return 1;
                if (c < d || d === void 0)return-1
            }
            return a.index < b.index ? -1 : 1
        }), "value")
    };
    var C = function (a, b, c, d) {
        var e = {}, f = B(b);
        return z(a, function (b, g) {
            var h = f.call(c, b, g, a);
            d(e, h, b)
        }), e
    };
    y.groupBy = function (a, b, c) {
        return C(a, b, c, function (a, b, c) {
            (y.has(a, b) ? a[b] : a[b] = []).push(c)
        })
    }, y.countBy = function (a, b, c) {
        return C(a, b, c, function (a, b, c) {
            y.has(a, b) || (a[b] = 0), a[b]++
        })
    }, y.sortedIndex = function (a, b, c, d) {
        c = c == null ? y.identity : B(c);
        var e = c.call(d, b), f = 0, g = a.length;
        while (f < g) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, y.toArray = function (a) {
        return a ? a.length === +a.length ? h.call(a) : y.values(a) : []
    }, y.size = function (a) {
        return a.length === +a.length ? a.length : y.keys(a).length
    }, y.first = y.head = y.take = function (a, b, c) {
        return b != null && !c ? h.call(a, 0, b) : a[0]
    }, y.initial = function (a, b, c) {
        return h.call(a, 0, a.length - (b == null || c ? 1 : b))
    }, y.last = function (a, b, c) {
        return b != null && !c ? h.call(a, Math.max(a.length - b, 0)) : a[a.length - 1]
    }, y.rest = y.tail = y.drop = function (a, b, c) {
        return h.call(a, b == null || c ? 1 : b)
    }, y.compact = function (a) {
        return y.filter(a, function (a) {
            return!!a
        })
    };
    var D = function (a, b, c) {
        return z(a, function (a) {
            y.isArray(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }), c
    };
    y.flatten = function (a, b) {
        return D(a, b, [])
    }, y.without = function (a) {
        return y.difference(a, h.call(arguments, 1))
    }, y.uniq = y.unique = function (a, b, c, d) {
        var e = c ? y.map(a, c, d) : a, f = [], g = [];
        return z(e, function (c, d) {
            if (b ? !d || g[g.length - 1] !== c : !y.contains(g, c))g.push(c), f.push(a[d])
        }), f
    }, y.union = function () {
        return y.uniq(i.apply(d, arguments))
    }, y.intersection = function (a) {
        var b = h.call(arguments, 1);
        return y.filter(y.uniq(a), function (a) {
            return y.every(b, function (b) {
                return y.indexOf(b, a) >= 0
            })
        })
    }, y.difference = function (a) {
        var b = i.apply(d, h.call(arguments, 1));
        return y.filter(a, function (a) {
            return!y.contains(b, a)
        })
    }, y.zip = function () {
        var a = h.call(arguments), b = y.max(y.pluck(a, "length")), c = new Array(b);
        for (var d = 0; d < b; d++)c[d] = y.pluck(a, "" + d);
        return c
    }, y.object = function (a, b) {
        var c = {};
        for (var d = 0, e = a.length; d < e; d++)b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, y.indexOf = function (a, b, c) {
        var d = 0, e = a.length;
        if (c)if (typeof c == "number")d = c < 0 ? Math.max(0, e + c) : c; else return d = y.sortedIndex(a, b), a[d] === b ? d : -1;
        if (t && a.indexOf === t)return a.indexOf(b, c);
        for (; d < e; d++)if (a[d] === b)return d;
        return-1
    }, y.lastIndexOf = function (a, b, c) {
        var d = c != null;
        if (u && a.lastIndexOf === u)return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        var e = d ? c : a.length;
        while (e--)if (a[e] === b)return e;
        return-1
    }, y.range = function (a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d);
        while (e < d)f[e++] = a, a += c;
        return f
    };
    var E = function () {
    };
    y.bind = function (a, b) {
        var c, d;
        if (a.bind === x && x)return x.apply(a, h.call(arguments, 1));
        if (!y.isFunction(a))throw new TypeError;
        return d = h.call(arguments, 2), c = function () {
            if (this instanceof c) {
                E.prototype = a.prototype;
                var e = new E, f = a.apply(e, d.concat(h.call(arguments)));
                return Object(f) === f ? f : e
            }
            return a.apply(b, d.concat(h.call(arguments)))
        }
    }, y.bindAll = function (a) {
        var b = h.call(arguments, 1);
        return b.length == 0 && (b = y.functions(a)), z(b, function (b) {
            a[b] = y.bind(a[b], a)
        }), a
    }, y.memoize = function (a, b) {
        var c = {};
        return b || (b = y.identity), function () {
            var d = b.apply(this, arguments);
            return y.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    }, y.delay = function (a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    }, y.defer = function (a) {
        return y.delay.apply(y, [a, 1].concat(h.call(arguments, 1)))
    }, y.throttle = function (a, b) {
        var c, d, e, f, g, h, i = y.debounce(function () {
            g = f = !1
        }, b);
        return function () {
            c = this, d = arguments;
            var j = function () {
                e = null, g && (h = a.apply(c, d)), i()
            };
            return e || (e = setTimeout(j, b)), f ? g = !0 : (f = !0, h = a.apply(c, d)), i(), h
        }
    }, y.debounce = function (a, b, c) {
        var d, e;
        return function () {
            var f = this, g = arguments, h = function () {
                d = null, c || (e = a.apply(f, g))
            }, i = c && !d;
            return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
        }
    }, y.once = function (a) {
        var b = !1, c;
        return function () {
            return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
        }
    }, y.wrap = function (a, b) {
        return function () {
            var c = [a];
            return g.apply(c, arguments), b.apply(this, c)
        }
    }, y.compose = function () {
        var a = arguments;
        return function () {
            var b = arguments;
            for (var c = a.length - 1; c >= 0; c--)b = [a[c].apply(this, b)];
            return b[0]
        }
    }, y.after = function (a, b) {
        return a <= 0 ? b() : function () {
            if (--a < 1)return b.apply(this, arguments)
        }
    }, y.keys = w || function (a) {
        if (a !== Object(a))throw new TypeError("Invalid object");
        var b = [];
        for (var c in a)y.has(a, c) && (b[b.length] = c);
        return b
    }, y.values = function (a) {
        var b = [];
        for (var c in a)y.has(a, c) && b.push(a[c]);
        return b
    }, y.pairs = function (a) {
        var b = [];
        for (var c in a)y.has(a, c) && b.push([c, a[c]]);
        return b
    }, y.invert = function (a) {
        var b = {};
        for (var c in a)y.has(a, c) && (b[a[c]] = c);
        return b
    }, y.functions = y.methods = function (a) {
        var b = [];
        for (var c in a)y.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, y.extend = function (a) {
        return z(h.call(arguments, 1), function (b) {
            for (var c in b)a[c] = b[c]
        }), a
    }, y.pick = function (a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return z(c, function (c) {
            c in a && (b[c] = a[c])
        }), b
    }, y.omit = function (a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a)y.contains(c, e) || (b[e] = a[e]);
        return b
    }, y.defaults = function (a) {
        return z(h.call(arguments, 1), function (b) {
            for (var c in b)a[c] == null && (a[c] = b[c])
        }), a
    }, y.clone = function (a) {
        return y.isObject(a) ? y.isArray(a) ? a.slice() : y.extend({}, a) : a
    }, y.tap = function (a, b) {
        return b(a), a
    };
    var F = function (a, b, c, d) {
        if (a === b)return a !== 0 || 1 / a == 1 / b;
        if (a == null || b == null)return a === b;
        a instanceof y && (a = a._wrapped), b instanceof y && (b = b._wrapped);
        var e = k.call(a);
        if (e != k.call(b))return!1;
        switch (e) {
            case"[object String]":
                return a == String(b);
            case"[object Number]":
                return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
            case"[object Date]":
            case"[object Boolean]":
                return+a == +b;
            case"[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if (typeof a != "object" || typeof b != "object")return!1;
        var f = c.length;
        while (f--)if (c[f] == a)return d[f] == b;
        c.push(a), d.push(b);
        var g = 0, h = !0;
        if (e == "[object Array]") {
            g = a.length, h = g == b.length;
            if (h)while (g--)if (!(h = F(a[g], b[g], c, d)))break
        } else {
            var i = a.constructor, j = b.constructor;
            if (i !== j && !(y.isFunction(i) && i instanceof i && y.isFunction(j) && j instanceof j))return!1;
            for (var l in a)if (y.has(a, l)) {
                g++;
                if (!(h = y.has(b, l) && F(a[l], b[l], c, d)))break
            }
            if (h) {
                for (l in b)if (y.has(b, l) && !(g--))break;
                h = !g
            }
        }
        return c.pop(), d.pop(), h
    };
    y.isEqual = function (a, b) {
        return F(a, b, [], [])
    }, y.isEmpty = function (a) {
        if (a == null)return!0;
        if (y.isArray(a) || y.isString(a))return a.length === 0;
        for (var b in a)if (y.has(a, b))return!1;
        return!0
    }, y.isElement = function (a) {
        return!!a && a.nodeType === 1
    }, y.isArray = v || function (a) {
        return k.call(a) == "[object Array]"
    }, y.isObject = function (a) {
        return a === Object(a)
    }, z(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (a) {
        y["is" + a] = function (b) {
            return k.call(b) == "[object " + a + "]"
        }
    }), y.isArguments(arguments) || (y.isArguments = function (a) {
        return!!a && !!y.has(a, "callee")
    }), typeof /./ != "function" && (y.isFunction = function (a) {
        return typeof a == "function"
    }), y.isFinite = function (a) {
        return y.isNumber(a) && isFinite(a)
    }, y.isNaN = function (a) {
        return y.isNumber(a) && a != +a
    }, y.isBoolean = function (a) {
        return a === !0 || a === !1 || k.call(a) == "[object Boolean]"
    }, y.isNull = function (a) {
        return a === null
    }, y.isUndefined = function (a) {
        return a === void 0
    }, y.has = function (a, b) {
        return l.call(a, b)
    }, y.noConflict = function () {
        return a._ = b, this
    }, y.identity = function (a) {
        return a
    }, y.times = function (a, b, c) {
        for (var d = 0; d < a; d++)b.call(c, d)
    }, y.random = function (a, b) {
        return b == null && (b = a, a = 0), a + (0 | Math.random() * (b - a + 1))
    };
    var G = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"}};
    G.unescape = y.invert(G.escape);
    var H = {escape: new RegExp("[" + y.keys(G.escape).join("") + "]", "g"), unescape: new RegExp("(" + y.keys(G.unescape).join("|") + ")", "g")};
    y.each(["escape", "unescape"], function (a) {
        y[a] = function (b) {
            return b == null ? "" : ("" + b).replace(H[a], function (b) {
                return G[a][b]
            })
        }
    }), y.result = function (a, b) {
        if (a == null)return null;
        var c = a[b];
        return y.isFunction(c) ? c.call(a) : c
    }, y.mixin = function (a) {
        z(y.functions(a), function (b) {
            var c = y[b] = a[b];
            y.prototype[b] = function () {
                var a = [this._wrapped];
                return g.apply(a, arguments), M.call(this, c.apply(y, a))
            }
        })
    };
    var I = 0;
    y.uniqueId = function (a) {
        var b = I++;
        return a ? a + b : b
    }, y.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var J = /(.)^/, K = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"}, L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    y.template = function (a, b, c) {
        c = y.defaults({}, c, y.templateSettings);
        var d = new RegExp([(c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source].join("|") + "|$", "g"), e = 0, f = "__p+='";
        a.replace(d, function (b, c, d, g, h) {
            f += a.slice(e, h).replace(L, function (a) {
                return"\\" + K[a]
            }), f += c ? "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g ? "';\n" + g + "\n__p+='" : "", e = h + b.length
        }), f += "';\n", c.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(c.variable || "obj", "_", f)
        } catch (h) {
            throw h.source = f, h
        }
        if (b)return g(b, y);
        var i = function (a) {
            return g.call(this, a, y)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + f + "}", i
    }, y.chain = function (a) {
        return y(a).chain()
    };
    var M = function (a) {
        return this._chain ? y(a).chain() : a
    };
    y.mixin(y), z(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
        var b = d[a];
        y.prototype[a] = function () {
            var c = this._wrapped;
            return b.apply(c, arguments), (a == "shift" || a == "splice") && c.length === 0 && delete c[0], M.call(this, c)
        }
    }), z(["concat", "join", "slice"], function (a) {
        var b = d[a];
        y.prototype[a] = function () {
            return M.call(this, b.apply(this._wrapped, arguments))
        }
    }), y.extend(y.prototype, {chain: function () {
        return this._chain = !0, this
    }, value: function () {
        return this._wrapped
    }}), typeof define == "function" && define.amd && define("underscore", function () {
        return y
    })
})).call(this)