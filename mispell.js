var mispell = function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 1)
}([function(e, t, n) {
    var r = n(11).Symbol;
    e.exports = r
}
, function(e, t, n) {
    const r = n(2).dict
      , i = n(4)
      , a = (n(5),
    n(21).default)
      , o = n(22).default
      , s = n(23).default;
    a.extend(o),
    a.extend(s);
    class u {
        constructor() {
            this.lastLike = 2
        }
        allowLike() {
            return this.lastLike > 1 ? (this.lastLike = 0,
            !0) : (this.lastLike += 1,
            !1)
        }
    }
    function l(e) {
        if (!(e in r))
            return e;
        let t = r[e];
        if (t[0].constructor == Object) {
            let e = c(t);
            return "synonym"in e ? l(e.synonym) : e.spelling
        }
        return t[Math.floor(Math.random() * r[e].length)]
    }
    function c(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++)
            "weight"in e[n] || (e[n].weight = 1),
            t += e[n].weight;
        let n = Math.random() * t;
        for (let t = 0; t < e.length; t++)
            if (n -= e[t].weight,
            n < 0)
                return e[t];
        throw "Error picking a random weighted element."
    }
    function h(e) {
        let t = ""
          , n = "";
        e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/bility\b/, "ilty")).replace(/tible\b/, "tidle")).replace(/tes\b/, "ties")).replace(/ces\b/, "cies")).replace(/ges\b/, "gies")).replace(/uter\b/, "tuer")).replace(/\bth(?!i)/, "d")).replace(/ph\B/, "f")).replace(/ee/, "ea")).replace(/ou/, "u")).replace(/([sv])e\b/, "$1")).replace(/([b-df-hj-npv-z])r\B/, "$1w")).replace(/s\b/, "z");
        for (let r = 0; r < e.length; r++) {
            let i = e.charAt(r);
            if ("." === i || "." === i || "!" === i || "?" === i)
                ;
            else if (i === t) {
                t = i;
                continue
            }
            t = i,
            n += i
        }
        return n
    }
    function f(e, t, n) {
        let r = Math.floor(t / n) * n;
        e.numbers().set(r)
    }
    e.exports.test = function() {
        let e = a("He is cool.");
        e.sentences().prepend("So i think"),
        console.log(e.text())
    }
    ,
    e.exports.bimbofy = function(e, t) {
        if ("" == e)
            return "";
        e = e.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"'),
        fqLog = new u,
        enabled = !0;
        let n = a(e);
        t > .5 && n.contractions().contract();
        Math.random();
        n.sentences().forEach(e=>{}
        ),
        n.match("#TitleCase").forEach(e=>{}
        ),
        n.match("#Verb #Noun").forEach(e=>{
            if (Math.random() < .3 * t && enabled) {
                let t = c([{
                    spelling: "basically",
                    weight: 1
                }, {
                    spelling: "totally",
                    weight: 1
                }, {
                    spelling: "so",
                    weight: 1
                }]).spelling;
                e.prepend(t)
            }
        }
        ),
        n.match("!#EndQuotation [#Conjunction] #Verb").forEach(e=>{
            if (Math.random() < .3 * t && enabled) {
                let t = c([{
                    spelling: "basically",
                    weight: 1
                }, {
                    spelling: "totally",
                    weight: 1
                }, {
                    spelling: "so",
                    weight: 1
                }]).spelling;
                e.append(t)
            }
        }
        ),
        n.numbers().greaterThan(20).forEach(e=>{
            let n = e.numbers().json()[0].number
              , r = Math.round(n - n / 2 * t + n * Math.random() * t);
            r >= 1e4 ? t > .8 ? e.replace("lots") : t > .6 ? f(e, r, 1e3) : t > .5 && f(e, r, 100) : r > 1e3 ? t > .7 ? f(e, r, 1e3) : t > .5 && f(e, r, 100) : r > 100 ? t > .7 && f(e, r, 100) : r > 20 && t > .8 && f(e, r, 10)
        }
        ),
        n.numbers().forEach(e=>{
            t > .5 && e.numbers().toText()
        }
        ),
        n.not("#Verb$").match("#Verb").match("_ing").forEach(e=>{
            if (Math.random() < 1 && enabled) {
                let t = e.data()[0].normal;
                e.replaceWith(t.replace("ing", "in'"))
            }
        }
        ),
        n.not("#Verb$").match("[#Verb] !(it|you|like|#Conjunction)").forEach(e=>{
            if (fqLog.allowLike() && Math.random() < .5 * t && enabled) {
                let t = c([{
                    spelling: ", like, ",
                    weight: .7
                }, {
                    spelling: ", like whatever, ",
                    weight: .1
                }]).spelling;
                e.post(t)
            }
        }
        ),
        n.not("^#Adjective").match("#Adjective").forEach(e=>{
            if (!e.data()[0].text.includes('"')) {
                let n = c([{
                    spelling: "literally",
                    weight: .5
                }, {
                    spelling: "actually",
                    weight: .5
                }, {
                    spelling: "basically",
                    weight: 1
                }, {
                    spelling: "absolutely",
                    weight: 1
                }, {
                    spelling: "you know,",
                    weight: 1
                }]).spelling
                  , r = c([{
                    spelling: "um",
                    weight: .4
                }, {
                    spelling: "uh,",
                    weight: 1
                }]).spelling
                  , i = c([{
                    spelling: "kinda",
                    weight: 1
                }, {
                    spelling: "sorta",
                    weight: 1
                }]).spelling;
                Math.random() < .2 * t && enabled && e.insertBefore(r),
                Math.random() < .3 * t && enabled && e.insertBefore(i),
                Math.random() < .6 * t && enabled && e.insertBefore(n)
            }
        }
        );
        return e = n.out("text"),
        enabled && (e = function(e, t) {
            let n = e.split(/\b/g);
            for (let e = 0; e < n.length; e++) {
                let r = n[e]
                  , a = !1
                  , o = !1;
                r[0] === r[0].toUpperCase() && (a = !0),
                r.slice(-1) === r.slice(-1).toUpperCase() && (o = !0),
                r = r.toLowerCase();
                let s = !1
                  , u = i(r, 1);
                u === r && (s = !0),
                "s" !== r && (r = u);
                let c = r;
                Math.random() < t && (c = l(r));
                let f = c !== r;
                c !== r && (r = c.replace("_", " ")),
                a && (r = r.charAt(0).toUpperCase() + r.slice(1)),
                o && (r = r.toUpperCase()),
                s || (r = i(r, 2)),
                !f && Math.random() < 1 * t && (r = h(r)),
                n[e] = r
            }
            return n.join("")
        }(e, t)),
        e
    }
}
, function(e, t, n) {
    e.exports.dict = n(3)
}
, function(e) {
    e.exports = JSON.parse('{"alexis":["alaska"],"amanda":["amber"],"ashley":["assley"],"hannah":["honey"],"madison":["missi"],"anonymous":["anonymous","anynomous","anynomous","anonymus","anynomus"],"about":["abat","abaut"],"actually":["actualy","actauly","actuali"],"are":[{"spelling":"is","weight":1},{"spelling":"are","weight":1}],"basically":["basicaly","basicly","baesicly"],"breast":["boob","tit"],"but":["butt"],"butt":["ass"],"could":["cudd"],"computer":["cumputer","cumputr","comptuer"],"doctor":["doc"],"development":["delevopment"],"dr":["doc"],"farther":["further","farther"],"favorite":["fav"],"fewer":["less","fewer"],"further":[{"synonym":"farther"}],"female":[{"synonym":"woman"}],"game":["game","gaem","gam"],"know":["knw","konw","nkow"],"large":["huge","big","ginormous"],"less":[{"synonym":"fewer"}],"library":["libary"],"like":["like"],"love":["luv","lve","<3"],"should":["should","shud"],"is":[{"spelling":"is","weight":1},{"spelling":"are","weight":1}],"next":["nex","enxt"],"room":[{"spelling":"room","weight":10},{"spelling":"roo","weight":1}],"probably":["probly","prolly"],"photo":[{"synonym":"picture"}],"picture":["pic"],"so":["so","soo","sooo"],"take":["tak","taek"],"than":["than","then"],"the":[{"spelling":"thi","weight":1},{"spelling":"dee","weight":1},{"spelling":"de","weight":1}],"these":[{"spelling":"dese","weight":1},{"spelling":"deze","weight":1}],"then":[{"synonym":"than"}],"thus":[{"synonym":"so"}],"very":[{"spelling":"all"}],"video":["vid"],"you":[{"spelling":"ya","weight":1},{"spelling":"yah","weight":1},{"spelling":"u","weight":1}],"was":["were"],"were":["was"],"who":["hu"],"woman":[{"spelling":"bimbo","weight":1},{"spelling":"chick","weight":0.4},{"spelling":"girl","weight":1},{"spelling":"pussycat","weight":0.7},{"spelling":"pussygirl","weight":0.4},{"spelling":"fuckdoll","weight":0.4},{"spelling":"doll","weight":0.4}],"would":["wudd"]}')
}
, function(e, t, n) {
    e.exports = function() {
        var e = []
          , t = []
          , n = {}
          , r = {}
          , i = {};
        function a(e) {
            return "string" == typeof e ? new RegExp("^" + e + "$","i") : e
        }
        function o(e, t) {
            return e === t ? t : e === e.toUpperCase() ? t.toUpperCase() : e[0] === e[0].toUpperCase() ? t.charAt(0).toUpperCase() + t.substr(1).toLowerCase() : t.toLowerCase()
        }
        function s(e, t) {
            return e.replace(/\$(\d{1,2})/g, (function(e, n) {
                return t[n] || ""
            }
            ))
        }
        function u(e, t) {
            return e.replace(t[0], (function(n, r) {
                var i = s(t[1], arguments);
                return o("" === n ? e[r - 1] : n, i)
            }
            ))
        }
        function l(e, t, r) {
            if (!e.length || n.hasOwnProperty(e))
                return t;
            for (var i = r.length; i--; ) {
                var a = r[i];
                if (a[0].test(t))
                    return u(t, a)
            }
            return t
        }
        function c(e, t, n) {
            return function(r) {
                var i = r.toLowerCase();
                return t.hasOwnProperty(i) ? o(r, i) : e.hasOwnProperty(i) ? o(r, e[i]) : l(i, r, n)
            }
        }
        function h(e, t, n, r) {
            return function(r) {
                var i = r.toLowerCase();
                return !!t.hasOwnProperty(i) || !e.hasOwnProperty(i) && l(i, i, n) === i
            }
        }
        function f(e, t, n) {
            return (n ? t + " " : "") + (1 === t ? f.singular(e) : f.plural(e))
        }
        return f.plural = c(i, r, e),
        f.isPlural = h(i, r, e),
        f.singular = c(r, i, t),
        f.isSingular = h(r, i, t),
        f.addPluralRule = function(t, n) {
            e.push([a(t), n])
        }
        ,
        f.addSingularRule = function(e, n) {
            t.push([a(e), n])
        }
        ,
        f.addUncountableRule = function(e) {
            "string" != typeof e ? (f.addPluralRule(e, "$0"),
            f.addSingularRule(e, "$0")) : n[e.toLowerCase()] = !0
        }
        ,
        f.addIrregularRule = function(e, t) {
            t = t.toLowerCase(),
            e = e.toLowerCase(),
            i[e] = t,
            r[t] = e
        }
        ,
        [["I", "we"], ["me", "us"], ["he", "they"], ["she", "they"], ["them", "them"], ["myself", "ourselves"], ["yourself", "yourselves"], ["itself", "themselves"], ["herself", "themselves"], ["himself", "themselves"], ["themself", "themselves"], ["is", "are"], ["was", "were"], ["has", "have"], ["this", "these"], ["that", "those"], ["echo", "echoes"], ["dingo", "dingoes"], ["volcano", "volcanoes"], ["tornado", "tornadoes"], ["torpedo", "torpedoes"], ["genus", "genera"], ["viscus", "viscera"], ["stigma", "stigmata"], ["stoma", "stomata"], ["dogma", "dogmata"], ["lemma", "lemmata"], ["schema", "schemata"], ["anathema", "anathemata"], ["ox", "oxen"], ["axe", "axes"], ["die", "dice"], ["yes", "yeses"], ["foot", "feet"], ["eave", "eaves"], ["goose", "geese"], ["tooth", "teeth"], ["quiz", "quizzes"], ["human", "humans"], ["proof", "proofs"], ["carve", "carves"], ["valve", "valves"], ["looey", "looies"], ["thief", "thieves"], ["groove", "grooves"], ["pickaxe", "pickaxes"], ["whiskey", "whiskies"]].forEach((function(e) {
            return f.addIrregularRule(e[0], e[1])
        }
        )),
        [[/s?$/i, "s"], [/[^\u0000-\u007F]$/i, "$0"], [/([^aeiou]ese)$/i, "$1"], [/(ax|test)is$/i, "$1es"], [/(alias|[^aou]us|tlas|gas|ris)$/i, "$1es"], [/(e[mn]u)s?$/i, "$1s"], [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, "$1"], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"], [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"], [/(seraph|cherub)(?:im)?$/i, "$1im"], [/(her|at|gr)o$/i, "$1oes"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"], [/sis$/i, "ses"], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"], [/([^aeiouy]|qu)y$/i, "$1ies"], [/([^ch][ieo][ln])ey$/i, "$1ies"], [/(x|ch|ss|sh|zz)$/i, "$1es"], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"], [/(m|l)(?:ice|ouse)$/i, "$1ice"], [/(pe)(?:rson|ople)$/i, "$1ople"], [/(child)(?:ren)?$/i, "$1ren"], [/eaux$/i, "$0"], [/m[ae]n$/i, "men"], ["thou", "you"]].forEach((function(e) {
            return f.addPluralRule(e[0], e[1])
        }
        )),
        [[/s$/i, ""], [/(ss)$/i, "$1"], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"], [/ies$/i, "y"], [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"], [/\b(mon|smil)ies$/i, "$1ey"], [/(m|l)ice$/i, "$1ouse"], [/(seraph|cherub)im$/i, "$1"], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, "$1"], [/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i, "$1sis"], [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"], [/(test)(?:is|es)$/i, "$1is"], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"], [/(alumn|alg|vertebr)ae$/i, "$1a"], [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"], [/(matr|append)ices$/i, "$1ix"], [/(pe)(rson|ople)$/i, "$1rson"], [/(child)ren$/i, "$1"], [/(eau)x?$/i, "$1"], [/men$/i, "man"]].forEach((function(e) {
            return f.addSingularRule(e[0], e[1])
        }
        )),
        ["adulthood", "advice", "agenda", "aid", "alcohol", "ammo", "anime", "athletics", "audio", "bison", "blood", "bream", "buffalo", "butter", "carp", "cash", "chassis", "chess", "clothing", "cod", "commerce", "cooperation", "corps", "debris", "diabetes", "digestion", "elk", "energy", "equipment", "excretion", "expertise", "flounder", "fun", "gallows", "garbage", "graffiti", "headquarters", "health", "herpes", "highjinks", "homework", "housework", "information", "jeans", "justice", "kudos", "labour", "literature", "machinery", "mackerel", "mail", "media", "mews", "moose", "music", "manga", "news", "pike", "plankton", "pliers", "pollution", "premises", "rain", "research", "rice", "salmon", "scissors", "series", "sewage", "shambles", "shrimp", "species", "staff", "swine", "tennis", "traffic", "transporation", "trout", "tuna", "wealth", "welfare", "whiting", "wildebeest", "wildlife", "you", /[^aeiou]ese$/i, /deer$/i, /fish$/i, /measles$/i, /o[iu]s$/i, /pox$/i, /sheep$/i].forEach(f.addUncountableRule),
        f
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e) {
        if ("string" != typeof e)
            throw Error("talisman/phonetics/metaphone: the given word is not a string.");
        for (var t = (0,
        a.default)(e).toLowerCase().replace(/[^a-z]/g, ""), n = 0, r = o.length; n < r; n++)
            t = t.replace(o[n][0], o[n][1]);
        return t.toUpperCase()
    }
    ;
    var r, i = n(6), a = (r = i) && r.__esModule ? r : {
        default: r
    };
    var o = [[/([bcdfhjklmnpqrstvwxyz])\1+/g, "$1"], [/^ae/g, "E"], [/^[gkp]n/g, "N"], [/^wr/g, "R"], [/^x/g, "S"], [/^wh/g, "W"], [/mb$/g, "M"], [/(?!^)sch/g, "SK"], [/th/g, "0"], [/t?ch|sh/g, "X"], [/c(?=ia)/g, "X"], [/[st](?=i[ao])/g, "X"], [/s?c(?=[iey])/g, "S"], [/[cq]/g, "K"], [/dg(?=[iey])/g, "J"], [/d/g, "T"], [/g(?=h[^aeiou])/g, ""], [/gn(ed)?/g, "N"], [/([^g]|^)g(?=[iey])/g, "$1J"], [/g+/g, "K"], [/ph/g, "F"], [/([aeiou])h(?=\b|[^aeiou])/g, "$1"], [/[wy](?![aeiou])/g, ""], [/z/g, "S"], [/v/g, "F"], [/(?!^)[aeiou]+/g, ""]];
    e.exports = t.default
}
, function(e, t, n) {
    var r = n(7)
      , i = n(9)
      , a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
      , o = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
    e.exports = function(e) {
        return (e = i(e)) && e.replace(a, r).replace(o, "")
    }
}
, function(e, t, n) {
    var r = n(8)({
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
    });
    e.exports = r
}
, function(e, t) {
    e.exports = function(e) {
        return function(t) {
            return null == e ? void 0 : e[t]
        }
    }
}
, function(e, t, n) {
    var r = n(10);
    e.exports = function(e) {
        return null == e ? "" : r(e)
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = n(14)
      , a = n(15)
      , o = n(16)
      , s = 1 / 0
      , u = r ? r.prototype : void 0
      , l = u ? u.toString : void 0;
    e.exports = function e(t) {
        if ("string" == typeof t)
            return t;
        if (a(t))
            return i(t, e) + "";
        if (o(t))
            return l ? l.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -s ? "-0" : n
    }
}
, function(e, t, n) {
    var r = n(12)
      , i = "object" == typeof self && self && self.Object === Object && self
      , a = r || i || Function("return this")();
    e.exports = a
}
, function(e, t, n) {
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }
    ).call(this, n(13))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
            i[n] = t(e[n], n, e);
        return i
    }
}
, function(e, t) {
    var n = Array.isArray;
    e.exports = n
}
, function(e, t, n) {
    var r = n(17)
      , i = n(20)
      , a = "[object Symbol]";
    e.exports = function(e) {
        return "symbol" == typeof e || i(e) && r(e) == a
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = n(18)
      , a = n(19)
      , o = "[object Null]"
      , s = "[object Undefined]"
      , u = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        return null == e ? void 0 === e ? s : o : u && u in Object(e) ? i(e) : a(e)
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = Object.prototype
      , a = i.hasOwnProperty
      , o = i.toString
      , s = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        var t = a.call(e, s)
          , n = e[s];
        try {
            e[s] = void 0;
            var r = !0
        } catch (e) {}
        var i = o.call(e);
        return r && (t ? e[s] = n : delete e[s]),
        i
    }
}
, function(e, t) {
    var n = Object.prototype.toString;
    e.exports = function(e) {
        return n.call(e)
    }
}
, function(e, t) {
    e.exports = function(e) {
        return null != e && "object" == typeof e
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function o(e, t, n) {
        return t && a(e.prototype, t),
        n && a(e, n),
        e
    }
    function s(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && l(e, t)
    }
    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function c(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }
    n.r(t);
    var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
    var f = function(e) {
        for (var t = (e = e || "_") + "-", n = 0; n < 7; n++)
            t += h[Math.floor(Math.random() * h.length)];
        return t
    }
      , d = {
        "!": "¡",
        "?": "¿Ɂ",
        '"': '“”"❝❞',
        "'": "‘‛❛❜",
        "-": "—–",
        a: "ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАадѦѧӐӑӒӓƛɅæ",
        b: "ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬвъьѢѣҌҍ",
        c: "¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼͽϲϹϽϾСсєҀҁҪҫ",
        d: "ÐĎďĐđƉƊȡƋƌǷ",
        e: "ÈÉÊËèéêëĒēĔĕĖėĘęĚěƎƏƐǝȄȅȆȇȨȩɆɇΈΕΞΣέεξϱϵ϶ЀЁЕЭеѐёҼҽҾҿӖӗӘәӚӛӬӭ",
        f: "ƑƒϜϝӺӻҒғſ",
        g: "ĜĝĞğĠġĢģƓǤǥǦǧǴǵ",
        h: "ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ",
        I: "ÌÍÎÏ",
        i: "ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії",
        j: "ĴĵǰȷɈɉϳЈј",
        k: "ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ",
        l: "ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ",
        m: "ΜϺϻМмӍӎ",
        n: "ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ",
        o: "ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϭϴОФоѲѳӦӧӨөӪӫ",
        p: "ƤƿΡρϷϸϼРрҎҏÞ",
        q: "Ɋɋ",
        r: "ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ",
        s: "ŚśŜŝŞşŠšƧƨȘșȿЅѕ",
        t: "ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮТт",
        u: "µÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰμυϋύ",
        v: "νѴѵѶѷ",
        w: "ŴŵƜωώϖϢϣШЩшщѡѿ",
        x: "×ΧχϗϰХхҲҳӼӽӾӿ",
        y: "ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ",
        z: "ŹźŻżŽžƩƵƶȤȥɀΖζ"
    }
      , p = {};
    Object.keys(d).forEach((function(e) {
        d[e].split("").forEach((function(t) {
            p[t] = e
        }
        ))
    }
    ));
    var m = function(e) {
        var t = e.split("");
        return t.forEach((function(e, n) {
            p[e] && (t[n] = p[e])
        }
        )),
        t.join("")
    }
      , g = /([A-Z]\.)+[A-Z]?,?$/
      , v = /^[A-Z]\.,?$/
      , b = /[A-Z]{2,}('s|,)?$/
      , y = /([a-z]\.){2,}[a-z]\.?$/
      , w = function(e) {
        return !0 === g.test(e) || (!0 === y.test(e) || (!0 === v.test(e) || !0 === b.test(e)))
    }
      , A = /[a-z\u00C0-\u00FF] ?\/ ?[a-z\u00C0-\u00FF]/
      , k = function(e) {
        var t = e = (e = (e = e || "").toLowerCase()).trim();
        return e = m(e),
        !0 === A.test(e) && (e = e.replace(/\/.*/, "")),
        e = (e = (e = (e = (e = (e = (e = e.replace(/^[#@]/, "")).replace(/[,;.!?]+$/, "")).replace(/[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]+/g, "'")).replace(/[\u0022\u00AB\u00BB\u201C\u201D\u201E\u201F\u2033\u2034\u2036\u2037\u2E42\u301D\u301E\u301F\uFF02]+/g, '"')).replace(/\u2026/g, "...")).replace(/\u2013/g, "-")).replace(/([aeiou][ktrp])in$/, "$1ing"),
        !0 === /^(re|un)-?[^aeiou]./.test(e) && (e = e.replace("-", "")),
        !1 === /^[:;]/.test(e) && (e = (e = (e = e.replace(/\.{3,}$/g, "")).replace(/[",\.!:;\?\)]+$/g, "")).replace(/^['"\(]+/g, "")),
        "" === (e = e.trim()) && (e = t),
        w(e) && (e = e.replace(/\./g, "")),
        e = e.replace(/([0-9]),([0-9])/g, "$1$2")
    }
      , $ = function(e) {
        return e = (e = e.replace(/['’]s$/, "")).replace(/s['’]$/, "s")
    }
      , P = /^[ \n\t\.’'\[\](){}⟨⟩:,،、‒–—―…!.‹›«»‐\-?‘’;\/⁄·\&*\•^†‡°¡¿※№÷×ºª%‰+−=‱¶′″‴§~|‖¦©℗®℠™¤₳฿\u0022|\uFF02|\u0027|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\u00AB|\u2039|\u2035|\u2036|\u2037|\u301D|\u0060|\u301F]+/
      , C = /[ \n\t\.’'\[\](){}⟨⟩:,،、‒–—―…!.‹›«»‐\-?‘’;\/⁄·\&*@\•^†‡°¡¿※#№÷×ºª‰+−=‱¶′″‴§~|‖¦©℗®℠™¤₳฿\u0022|\uFF02|\u0027|\u201D|\u2019|\u201D|\u2019|\u201D|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4|\u301E]+$/
      , E = /\//
      , x = /['’]/
      , j = /^[a-z]\.([a-z]\.)+/i
      , G = /^[-+\.][0-9]/
      , N = function(e) {
        var t = e
          , n = ""
          , r = "";
        "" === (e = (e = e.replace(P, (function(t) {
            return "-" !== (n = t) && "+" !== n && "." !== n || !G.test(e) ? "" : (n = "",
            t)
        }
        ))).replace(C, (function(i) {
            return r = i,
            x.test(i) && /[sn]['’]$/.test(t) && !1 === x.test(n) ? (r = r.replace(x, ""),
            "'") : !0 === j.test(e) ? (r = r.replace(/\./, ""),
            ".") : ""
        }
        ))) && (t = t.replace(/ *$/, (function(e) {
            return r = e || "",
            ""
        }
        )),
        e = t,
        n = "",
        r = r);
        var i = k(e)
          , a = {
            text: e,
            clean: i,
            reduced: $(i),
            pre: n,
            post: r
        };
        return E.test(e) && e.split(E).forEach((function(e) {
            a.alias = a.alias || {},
            a.alias[e.trim()] = !0
        }
        )),
        a
    };
    function F(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    var B = F((function(e, t) {
        var n = /^[A-Z][a-z'\u00C0-\u00FF]/
          , r = /^[A-Z]+s?$/;
        t.toUpperCase = function() {
            return this.text = this.text.toUpperCase(),
            this
        }
        ,
        t.toLowerCase = function() {
            return this.text = this.text.toLowerCase(),
            this
        }
        ,
        t.toTitleCase = function() {
            return this.text = this.text.replace(/^ *[a-z\u00C0-\u00FF]/, (function(e) {
                return e.toUpperCase()
            }
            )),
            this
        }
        ,
        t.isUpperCase = function() {
            return r.test(this.text)
        }
        ,
        t.isTitleCase = function() {
            return n.test(this.text)
        }
        ,
        t.titleCase = t.isTitleCase
    }
    ))
      , O = (B.toUpperCase,
    B.toLowerCase,
    B.toTitleCase,
    B.isUpperCase,
    B.isTitleCase,
    B.titleCase,
    F((function(e, t) {
        var n = /(\u0022|\uFF02|\u0027|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\u00AB|\u2039|\u2035|\u2036|\u2037|\u301D|\u0060|\u301F)/
          , r = /(\u0022|\uFF02|\u0027|\u201D|\u2019|\u201D|\u2019|\u201D|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4|\u301E)/;
        t.hasPost = function(e) {
            return -1 !== this.post.indexOf(e)
        }
        ,
        t.hasPre = function(e) {
            return -1 !== this.pre.indexOf(e)
        }
        ,
        t.hasQuote = function() {
            return n.test(this.pre) || r.test(this.post)
        }
        ,
        t.hasQuotation = t.hasQuote,
        t.hasComma = function() {
            return this.hasPost(",")
        }
        ,
        t.hasPeriod = function() {
            return !0 === this.hasPost(".") && !1 === this.hasPost("...")
        }
        ,
        t.hasExclamation = function() {
            return this.hasPost("!")
        }
        ,
        t.hasQuestionMark = function() {
            return this.hasPost("?") || this.hasPost("¿")
        }
        ,
        t.hasEllipses = function() {
            return this.hasPost("..") || this.hasPost("…") || this.hasPre("..") || this.hasPre("…")
        }
        ,
        t.hasSemicolon = function() {
            return this.hasPost(";")
        }
        ,
        t.hasSlash = function() {
            return /\//.test(this.text)
        }
        ,
        t.hasHyphen = function() {
            var e = /(-|–|—)/;
            return e.test(this.post) || e.test(this.pre)
        }
        ,
        t.hasDash = function() {
            var e = / (-|–|—) /;
            return e.test(this.post) || e.test(this.pre)
        }
        ,
        t.hasContraction = function() {
            return Boolean(this.implicit)
        }
        ,
        t.addPunctuation = function(e) {
            return "," !== e && ";" !== e || (this.post = this.post.replace(e, "")),
            this.post = e + this.post,
            this
        }
    }
    )))
      , D = (O.hasPost,
    O.hasPre,
    O.hasQuote,
    O.hasQuotation,
    O.hasComma,
    O.hasPeriod,
    O.hasExclamation,
    O.hasQuestionMark,
    O.hasEllipses,
    O.hasSemicolon,
    O.hasSlash,
    O.hasHyphen,
    O.hasDash,
    O.hasContraction,
    O.addPunctuation,
    function() {}
    )
      , T = function(e, t, n, r) {
        return t.id === e.id || (!0 === t.anything || (!0 !== t.start || 0 === n) && ((!0 !== t.end || n === r - 1) && (void 0 !== t.word ? null !== e.implicit && e.implicit === t.word || (!(void 0 === e.alias || !e.alias.hasOwnProperty(t.word)) || (!0 === t.soft && t.word === e.root || (t.word === e.clean || t.word === e.text || t.word === e.reduced))) : void 0 !== t.tag ? !0 === e.tags[t.tag] : void 0 !== t.method ? "function" == typeof e[t.method] && !0 === e[t.method]() : void 0 !== t.regex ? t.regex.test(e.clean) : void 0 !== t.choices && ("and" === t.operator ? t.choices.every((function(t) {
            return D(e, t, n, r)
        }
        )) : t.choices.some((function(t) {
            return D(e, t, n, r)
        }
        ))))))
    }
      , V = D = function(e, t, n, r) {
        var i = T(e, t, n, r);
        return !0 === t.negative ? !i : i
    }
      , z = {}
      , H = {
        doesMatch: function(e, t, n) {
            return V(this, e, t, n)
        },
        isAcronym: function() {
            return w(this.text)
        },
        isImplicit: function() {
            return "" === this.text && Boolean(this.implicit)
        },
        isKnown: function() {
            return Object.keys(this.tags).some((function(e) {
                return !0 !== z[e]
            }
            ))
        },
        setRoot: function(e) {
            var t = e.transforms
              , n = this.implicit || this.clean;
            if (this.tags.Plural && (n = t.toSingular(n, e)),
            this.tags.Verb && !this.tags.Negative && !this.tags.Infinitive) {
                var r = null;
                this.tags.PastTense ? r = "PastTense" : this.tags.Gerund ? r = "Gerund" : this.tags.PresentTense ? r = "PresentTense" : this.tags.Participle ? r = "Participle" : this.tags.Actor && (r = "Actor"),
                n = t.toInfinitive(n, e, r)
            }
            this.root = n
        }
    }
      , I = /[\s-]/
      , M = /^[A-Z-]+$/
      , S = {
        textOut: function(e, t, n) {
            e = e || {};
            var r = this.text
              , i = this.pre
              , a = this.post;
            return !0 === e.reduced && (r = this.reduced || ""),
            !0 === e.root && (r = this.root || ""),
            !0 === e.implicit && this.implicit && (r = this.implicit || ""),
            !0 === e.normal && (r = this.clean || this.text || ""),
            !0 === e.root && (r = this.root || this.reduced || ""),
            !0 === e.unicode && (r = m(r)),
            !0 === e.titlecase && (this.tags.ProperNoun && !this.titleCase() || (this.tags.Acronym ? r = r.toUpperCase() : M.test(r) && !this.tags.Acronym && (r = r.toLowerCase()))),
            !0 === e.lowercase && (r = r.toLowerCase()),
            !0 === e.acronyms && this.tags.Acronym && (r = r.replace(/\./g, "")),
            !0 !== e.whitespace && !0 !== e.root || (i = "",
            a = " ",
            !1 !== I.test(this.post) && !e.last || this.implicit || (a = "")),
            !0 !== e.punctuation || e.root || (!0 === this.hasPost(".") ? a = "." + a : !0 === this.hasPost("?") ? a = "?" + a : !0 === this.hasPost("!") ? a = "!" + a : !0 === this.hasPost(",") ? a = "," + a : !0 === this.hasEllipses() && (a = "..." + a)),
            !0 !== t && (i = ""),
            !0 !== n && (a = ""),
            !0 === e.abbreviations && this.tags.Abbreviation && (a = a.replace(/^\./, "")),
            i + r + a
        }
    }
      , L = {
        Auxiliary: 1,
        Possessive: 1
    }
      , _ = function(e, t) {
        var n = Object.keys(e.tags)
          , r = t.tags;
        return n = n.sort((function(e, t) {
            return L[t] || !r[t] ? -1 : r[t] ? r[e] ? r[e].lineage.length > r[t].lineage.length ? 1 : r[e].isA.length > r[t].isA.length ? -1 : 0 : 0 : 1
        }
        ))
    }
      , q = {
        text: !0,
        tags: !0,
        implicit: !0,
        clean: !1,
        id: !1,
        index: !1,
        offset: !1,
        whitespace: !1,
        bestTag: !1
    }
      , W = {
        json: function(e, t) {
            e = e || {};
            var n = {};
            return (e = Object.assign({}, q, e)).text && (n.text = this.text),
            e.normal && (n.normal = this.normal),
            e.tags && (n.tags = Object.keys(this.tags)),
            e.clean && (n.clean = this.clean),
            (e.id || e.offset) && (n.id = this.id),
            e.implicit && null !== this.implicit && (n.implicit = this.implicit),
            e.whitespace && (n.pre = this.pre,
            n.post = this.post),
            e.bestTag && (n.bestTag = _(this, t)[0]),
            n
        }
    }
      , J = Object.assign({}, B, O, H, S, W);
    function R() {
        return "undefined" != typeof window && window.document
    }
    var U = function(e, t) {
        for (e = e.toString(); e.length < t; )
            e += " ";
        return e
    }
      , K = function(e, t, n) {
        if (R())
            console.log("%c" + U(e.clean, 3) + "  + " + t + " ", "color: #6accb2;");
        else {
            var r = "[33m" + U(e.clean, 15) + "[0m + [32m" + t + "[0m ";
            n && (r = U(r, 35) + " " + n),
            console.log(r)
        }
    }
      , Q = function(e, t, n) {
        if (R())
            console.log("%c" + U(e.clean, 3) + "  - " + t + " ", "color: #AB5850;");
        else {
            var r = "[33m" + U(e.clean, 3) + " [31m - #" + t + "[0m ";
            n && (r = U(r, 35) + " " + n),
            console.log(r)
        }
    }
      , X = function(e) {
        return e.charAt(0).toUpperCase() + e.substr(1)
    }
      , Z = function(e, t, n, r) {
        var i = r.tags;
        if ("" !== t && "." !== t && "-" !== t && ("#" === t[0] && (t = t.replace(/^#/, "")),
        t = X(t),
        !0 !== e.tags[t])) {
            var a = r.isVerbose();
            !0 === a && K(e, t, n),
            e.tags[t] = !0,
            !0 === i.hasOwnProperty(t) && (i[t].isA.forEach((function(t) {
                e.tags[t] = !0,
                !0 === a && K(e, "→ " + t)
            }
            )),
            e.unTag(i[t].notA, "←", r))
        }
    }
      , Y = function(e, t, n, r) {
        if ("string" != typeof t)
            for (var i = 0; i < t.length; i++)
                Z(e, t[i], n, r);
        else
            Z(e, t, n, r)
    }
      , ee = function(e, t, n, r) {
        var i = r.isVerbose();
        if ("*" === t)
            return e.tags = {},
            e;
        !0 === e.tags[t] && (delete e.tags[t],
        !0 === i && Q(e, t, n));
        var a = r.tags;
        if (a[t])
            for (var o = a[t].lineage, s = 0; s < o.length; s++)
                !0 === e.tags[o[s]] && (delete e.tags[o[s]],
                !0 === i && Q(e, " - " + o[s]));
        return e
    }
      , te = function(e, t, n, r) {
        if ("string" != typeof t && t)
            for (var i = 0; i < t.length; i++)
                ee(e, t[i], n, r);
        else
            ee(e, t, n, r)
    }
      , ne = function e(t, n, r) {
        var i = r.tags;
        if ("#" === n[0] && (n = n.replace(/^#/, "")),
        void 0 === i[n])
            return !0;
        for (var a = i[n].notA || [], o = 0; o < a.length; o++)
            if (!0 === t.tags[a[o]])
                return !1;
        return void 0 === i[n].isA || e(t, i[n].isA, r)
    }
      , re = {
        tag: function(e, t, n) {
            return Y(this, e, t, n),
            this
        },
        tagSafe: function(e, t, n) {
            return ne(this, e, n) && Y(this, e, t, n),
            this
        },
        unTag: function(e, t, n) {
            return te(this, e, t, n),
            this
        },
        canBe: function(e, t) {
            return ne(this, e, t)
        }
    }
      , ie = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            i(this, e),
            t = String(t);
            var n = N(t);
            this.text = n.text || "",
            this.clean = n.clean,
            this.reduced = n.reduced,
            this.root = null,
            this.implicit = null,
            this.pre = n.pre || "",
            this.post = n.post || "",
            this.tags = {},
            this.prev = null,
            this.next = null,
            this.id = f(n.clean),
            this.isA = "Term",
            n.alias && (this.alias = n.alias)
        }
        return o(e, [{
            key: "set",
            value: function(e) {
                var t = N(e);
                return this.text = t.text,
                this.clean = t.clean,
                this
            }
        }]),
        e
    }();
    ie.prototype.clone = function() {
        var e = new ie(this.text);
        return e.pre = this.pre,
        e.post = this.post,
        e.tags = Object.assign({}, this.tags),
        e
    }
    ,
    Object.assign(ie.prototype, J),
    Object.assign(ie.prototype, re);
    var ae = ie
      , oe = {
        terms: function(e) {
            if (0 === this.length)
                return [];
            if (this.cache.terms)
                return void 0 !== e ? this.cache.terms[e] : this.cache.terms;
            for (var t = [this.pool.get(this.start)], n = 0; n < this.length - 1; n += 1) {
                var r = t[t.length - 1].next;
                if (null === r) {
                    console.error("Compromise error: Linked list broken in phrase '" + this.start + "'");
                    break
                }
                var i = this.pool.get(r);
                if (t.push(i),
                void 0 !== e && e === n)
                    return t[e]
            }
            return void 0 !== e ? t[e] : t
        },
        clone: function(e) {
            var t = this;
            if (e)
                return this.buildFrom(this.start, this.length);
            var n = this.terms().map((function(e) {
                return e.clone()
            }
            ));
            return n.forEach((function(e, r) {
                t.pool.add(e),
                n[r + 1] && (e.next = n[r + 1].id),
                n[r - 1] && (e.prev = n[r - 1].id)
            }
            )),
            this.buildFrom(n[0].id, n.length)
        },
        lastTerm: function() {
            var e = this.terms();
            return e[e.length - 1]
        },
        hasId: function(e) {
            if (0 === this.length || !e)
                return !1;
            if (this.start === e)
                return !0;
            if (this.cache.terms) {
                for (var t = this.cache.terms, n = 0; n < t.length; n++)
                    if (t[n].id === e)
                        return !0;
                return !1
            }
            for (var r = this.start, i = 0; i < this.length - 1; i += 1) {
                var a = this.pool.get(r);
                if (void 0 === a)
                    return console.error("Compromise error: Linked list broken. Missing term '".concat(r, "' in phrase '").concat(this.start, "'\n")),
                    !1;
                if (a.next === e)
                    return !0;
                r = a.next
            }
            return !1
        },
        wordCount: function() {
            return this.terms().filter((function(e) {
                return "" !== e.text
            }
            )).length
        }
    }
      , se = function(e) {
        return e.replace(/ +$/, "")
    }
      , ue = {
        text: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = arguments.length > 2 ? arguments[2] : void 0;
            "string" == typeof e && (e = "normal" === e ? {
                whitespace: !0,
                unicode: !0,
                lowercase: !0,
                punctuation: !0,
                acronyms: !0,
                abbreviations: !0,
                implicit: !0,
                normal: !0
            } : "clean" === e ? {
                titlecase: !1,
                lowercase: !0,
                punctuation: !0,
                whitespace: !0,
                unicode: !0,
                implicit: !0
            } : "reduced" === e ? {
                titlecase: !1,
                lowercase: !0,
                punctuation: !1,
                whitespace: !0,
                unicode: !0,
                implicit: !0,
                reduced: !0
            } : "root" === e ? {
                titlecase: !1,
                lowercase: !0,
                punctuation: !0,
                whitespace: !0,
                unicode: !0,
                implicit: !0,
                root: !0
            } : {});
            var r = this.terms()
              , i = !1;
            r[0] && null === r[0].prev && null === r[r.length - 1].next && (i = !0);
            var a = r.reduce((function(a, o, s) {
                e.last = n && s === r.length - 1;
                var u = !0
                  , l = !0;
                return !1 === i && (0 === s && t && (u = !1),
                s === r.length - 1 && n && (l = !1)),
                a + o.textOut(e, u, l)
            }
            ), "");
            return !0 === i && n && (a = se(a)),
            !0 === e.trim && (a = a.trim()),
            a
        }
    }
      , le = {
        trim: function() {
            var e = this.terms();
            if (e.length > 0) {
                e[0].pre = e[0].pre.replace(/^\s+/, "");
                var t = e[e.length - 1];
                t.post = t.post.replace(/\s+$/, "")
            }
            return this
        }
    }
      , ce = /[.?!]\s*$/
      , he = function(e, t) {
        t[0].pre = e[0].pre;
        var n, r, i = e[e.length - 1], a = t[t.length - 1];
        a.post = (n = i.post,
        r = a.post,
        ce.test(r) ? r + n.match(/\s*$/) : n),
        i.post = "",
        "" === i.post && (i.post += " ")
    }
      , fe = function(e, t, n) {
        var r = e.cache.terms || e.terms()
          , i = t.cache.terms || t.terms();
        he(r, i),
        function(e, t, n) {
            var r = e[e.length - 1]
              , i = t[t.length - 1]
              , a = r.next;
            (r.next = t[0].id,
            i.next = a,
            a) && (n.get(a).prev = i.id);
            var o = e[0].id;
            o && (t[0].prev = o)
        }(r, i, e.pool);
        var a, o = [e], s = e.start, u = [n];
        return (u = u.concat(n.parents())).forEach((function(e) {
            var t = e.list.filter((function(e) {
                return e.hasId(s)
            }
            ));
            o = o.concat(t)
        }
        )),
        (o = (a = o).filter((function(e, t) {
            return a.indexOf(e) === t
        }
        ))).forEach((function(e) {
            e.length += t.length
        }
        )),
        e
    }
      , de = / /
      , pe = function(e, t, n) {
        var r = e.start
          , i = t.terms();
        !function(e) {
            var t = e[e.length - 1];
            !1 === de.test(t.post) && (t.post += " ")
        }(i),
        function(e, t, n) {
            var r = n[n.length - 1];
            r.next = e.start;
            var i = e.pool
              , a = i.get(e.start);
            a.prev && (i.get(a.prev).next = t.start);
            n[0].prev = e.terms(0).prev,
            e.terms(0).prev = r.id
        }(e, t, i);
        var a, o = [e], s = [n];
        return (s = s.concat(n.parents())).forEach((function(e) {
            var n = e.list.filter((function(e) {
                return e.hasId(r) || e.hasId(t.start)
            }
            ));
            o = o.concat(n)
        }
        )),
        (o = (a = o).filter((function(e, t) {
            return a.indexOf(e) === t
        }
        ))).forEach((function(e) {
            e.length += t.length,
            e.start === r && (e.start = t.start)
        }
        )),
        e
    }
      , me = function(e, t) {
        var n = t.pool()
          , r = e.cache.terms || e.terms()
          , i = n.get(r[0].prev) || {}
          , a = n.get(r[r.length - 1].next) || {};
        r[0].implicit && i.implicit && (i.set(i.implicit),
        i.post += " "),
        function(e, t, n, r) {
            var i = e.parents();
            i.push(e),
            i.forEach((function(e) {
                var i = e.list.find((function(e) {
                    return e.hasId(t)
                }
                ));
                i && (i.length -= n,
                i.start === t && (i.start = r.id))
            }
            )),
            e.list = e.list.filter((function(e) {
                return !(!e.start || !e.length)
            }
            ))
        }(t, e.start, e.length, a),
        i && (i.next = a.id),
        a && (a.prev = i.id)
    }
      , ge = {
        append: function(e, t) {
            return fe(this, e, t),
            this
        },
        prepend: function(e, t) {
            return pe(this, e, t),
            this
        },
        delete: function(e) {
            return me(this, e),
            this
        },
        replace: function(e, t) {
            var n = this.length;
            fe(this, e, t);
            var r = this.buildFrom(this.start, this.length);
            r.length = n,
            me(r, t)
        },
        splitOn: function(e) {
            var t = this.terms()
              , n = {
                before: null,
                match: null,
                after: null
            }
              , r = t.findIndex((function(t) {
                return t.id === e.start
            }
            ));
            if (-1 === r)
                return n;
            var i = t.slice(0, r);
            i.length > 0 && (n.before = this.buildFrom(i[0].id, i.length));
            var a = t.slice(r, r + e.length);
            a.length > 0 && (n.match = this.buildFrom(a[0].id, a.length));
            var o = t.slice(r + e.length, t.length);
            return o.length > 0 && (n.after = this.buildFrom(o[0].id, o.length, this.pool)),
            n
        }
    }
      , ve = {
        json: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = {};
            return e.text && (n.text = this.text()),
            e.normal && (n.normal = this.text("normal")),
            e.clean && (n.clean = this.text("clean")),
            e.reduced && (n.reduced = this.text("reduced")),
            e.root && (n.root = this.text("root")),
            e.trim && (n.text && (n.text = n.text.trim()),
            n.normal && (n.normal = n.normal.trim()),
            n.reduced && (n.reduced = n.reduced.trim())),
            e.terms && (!0 === e.terms && (e.terms = {}),
            n.terms = this.terms().map((function(n) {
                return n.json(e.terms, t)
            }
            ))),
            n
        }
    }
      , be = {
        lookAhead: function(e) {
            e || (e = ".*");
            var t = this.pool
              , n = []
              , r = this.terms();
            return function e(r) {
                var i = t.get(r);
                i && (n.push(i),
                i.prev && e(i.next))
            }(r[r.length - 1].next),
            0 === n.length ? [] : this.buildFrom(n[0].id, n.length).match(e)
        },
        lookBehind: function(e) {
            e || (e = ".*");
            var t = this.pool
              , n = [];
            return function e(r) {
                var i = t.get(r);
                i && (n.push(i),
                i.prev && e(i.prev))
            }(t.get(this.start).prev),
            0 === n.length ? [] : this.buildFrom(n[n.length - 1].id, n.length).match(e)
        }
    }
      , ye = Object.assign({}, oe, ue, le, ge, ve, be)
      , we = function(e, t) {
        if (0 === t.length)
            return !0;
        for (var n = 0; n < t.length; n += 1) {
            var r = t[n];
            if (!0 !== r.optional && !0 !== r.negative) {
                if (!0 === r.start && n > 0)
                    return !0;
                if (void 0 !== e.cache.words && void 0 !== r.word && !0 !== e.cache.words.hasOwnProperty(r.word))
                    return !0
            }
            if (!0 === r.anything && !0 === r.negative)
                return !0
        }
        return !1
    }
      , Ae = function(e, t, n, r, i, a) {
        for (var o = t; t < e.length; t += 1) {
            if (r && e[t].doesMatch(r, i + t, a))
                return t;
            var s = t - o + 1;
            if (void 0 !== n.max && s === n.max)
                return t;
            if (!1 === e[t].doesMatch(n, i + t, a))
                return void 0 !== n.min && s < n.min ? null : t
        }
        return t
    }
      , ke = function(e, t, n, r, i) {
        if (!n)
            return e.length;
        for (; t < e.length; t += 1)
            if (!0 === e[t].doesMatch(n, r + t, i))
                return t;
        return null
    }
      , $e = function(e, t, n, r) {
        for (var i = [], a = 0, o = 0; o < t.length; o += 1) {
            var s = t[o];
            if (!e[a]) {
                if (!1 === t.slice(o).some((function(e) {
                    return !e.optional
                }
                )))
                    break;
                return !1
            }
            if (!0 !== s.anything || !0 !== s.greedy)
                if (!0 !== s.anything && !0 !== e[a].doesMatch(s, n + a, r)) {
                    if (!0 !== s.optional) {
                        if (!(e[a].isImplicit() && t[o - 1] && e[a + 1] && e[a + 1].doesMatch(s, n + a, r)))
                            return !1;
                        a += 2
                    }
                } else {
                    var u = a;
                    if (s.optional && t[o + 1] && !0 === e[a].doesMatch(t[o + 1], n + a, r) && (e[a + 1] && !1 !== e[a + 1].doesMatch(t[o + 1], n + a, r) || (o += 1)),
                    a += 1,
                    !0 === s.end && a !== e.length && !0 !== s.greedy)
                        return !1;
                    if (!0 === s.greedy && null === (a = Ae(e, a, s, t[o + 1], n, r)))
                        return !1;
                    s.capture && (i.push(u),
                    a > 1 && s.greedy && i.push(a - 1))
                }
            else {
                var l = ke(e, a, t[o + 1], s, n);
                if (void 0 !== s.min && l - a < s.min)
                    return !1;
                if (void 0 !== s.max && l - a > s.max) {
                    a += s.max;
                    continue
                }
                if (null === l)
                    return !1;
                a = l
            }
        }
        if (i.length > 0) {
            for (var c = e.slice(i[0], i[i.length - 1] + 1), h = 0; h < a; h++)
                c[h] = c[h] || null;
            return c
        }
        return e.slice(0, a)
    }
      , Pe = function(e, t, n) {
        if (!n || 0 === n.length)
            return n;
        if (t.some((function(e) {
            return e.end
        }
        ))) {
            var r = e[e.length - 1];
            n = n.filter((function(e) {
                return -1 !== e.indexOf(r)
            }
            ))
        }
        return n
    }
      , Ce = /\{([0-9]+,?[0-9]*)\}/
      , Ee = /&&/
      , xe = function(e) {
        return e[e.length - 1]
    }
      , je = function(e) {
        return e[0]
    }
      , Ge = function(e) {
        return e.substr(1)
    }
      , Ne = function(e) {
        return e.substr(0, e.length - 1)
    }
      , Fe = function(e) {
        return e = Ge(e),
        e = Ne(e)
    }
      , Be = function e(t) {
        for (var n, r = {}, i = 0; i < 2; i += 1) {
            if ("+" === xe(t) && (r.greedy = !0,
            t = Ne(t)),
            "*" !== t && "*" === xe(t) && "\\*" !== t && (r.greedy = !0,
            t = Ne(t)),
            "?" === xe(t) && (r.optional = !0,
            t = Ne(t)),
            "$" === xe(t) && (r.end = !0,
            t = Ne(t)),
            "^" === je(t) && (r.start = !0,
            t = Ge(t)),
            "!" === je(t) && (r.negative = !0,
            t = Ge(t)),
            "(" === je(t) && ")" === xe(t)) {
                Ee.test(t) ? (r.choices = t.split(Ee),
                r.operator = "and") : (r.choices = t.split("|"),
                r.operator = "or"),
                r.choices[0] = Ge(r.choices[0]);
                var a = r.choices.length - 1;
                r.choices[a] = Ne(r.choices[a]),
                r.choices = r.choices.map((function(e) {
                    return e.trim()
                }
                )),
                r.choices = r.choices.filter((function(e) {
                    return e
                }
                )),
                r.choices = r.choices.map(e),
                t = ""
            }
            if ("[" !== je(t) && "]" !== xe(t) || (r.capture = !0,
            t = (t = t.replace(/^\[/, "")).replace(/\]$/, "")),
            "/" === je(t) && "/" === xe(t))
                return t = Fe(t),
                r.regex = new RegExp(t),
                r;
            if ("~" === je(t) && "~" === xe(t))
                return t = Fe(t),
                r.soft = !0,
                r.word = t,
                r
        }
        return !0 === Ce.test(t) && (t = t.replace(Ce, (function(e, t) {
            var n = t.split(/,/g);
            return 1 === n.length ? (r.min = Number(n[0]),
            r.max = Number(n[0])) : (r.min = Number(n[0]),
            r.max = Number(n[1] || 999)),
            r.greedy = !0,
            ""
        }
        ))),
        "#" === je(t) ? (r.tag = Ge(t),
        r.tag = (n = r.tag).charAt(0).toUpperCase() + n.substr(1),
        r) : "@" === je(t) ? (r.method = Ge(t),
        r) : "." === t ? (r.anything = !0,
        r) : "*" === t ? (r.anything = !0,
        r.greedy = !0,
        r.optional = !0,
        r) : (t && (t = (t = t.replace("\\*", "*")).replace("\\.", "."),
        r.word = t.toLowerCase()),
        r)
    }
      , Oe = function(e) {
        if (null == e || "" === e)
            return [];
        if ("object" === r(e)) {
            if (function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }(e)) {
                if (0 === e.length || !e[0])
                    return [];
                if ("object" === r(e[0]))
                    return e;
                if ("string" == typeof e[0])
                    return function(e) {
                        return [{
                            choices: e.map((function(e) {
                                return {
                                    word: e
                                }
                            }
                            ))
                        }]
                    }(e)
            }
            return e && "Doc" === e.isA ? function(e) {
                if (!e || !e.list || !e.list[0])
                    return [];
                var t = [];
                return e.list.forEach((function(e) {
                    e.terms().forEach((function(e) {
                        t.push({
                            id: e.id
                        })
                    }
                    ))
                }
                )),
                [{
                    choices: t,
                    greedy: !0
                }]
            }(e) : []
        }
        "number" == typeof e && (e = String(e));
        var t = function(e) {
            var t = e.split(/([\^\[\!]*\(.*?\)[?+*]*\]?\$?)/);
            return t = t.map((function(e) {
                return e.trim()
            }
            ))
        }(e);
        return t = function(e) {
            if (e.filter((function(e) {
                return !0 === e.capture
            }
            )).length > 1)
                for (var t = e.map((function(e) {
                    return e.capture
                }
                )), n = t.indexOf(!0), r = t.length - 1 - t.reverse().indexOf(!0), i = n; i < r; i++)
                    e[i].capture = !0;
            return e
        }(t = (t = function(e) {
            var t = [];
            return e.forEach((function(e) {
                if (/^[[^_/]?\(/.test(e[0]))
                    t.push(e);
                else {
                    var n = e.split(" ");
                    n = n.filter((function(e) {
                        return e
                    }
                    )),
                    t = t.concat(n)
                }
            }
            )),
            t
        }(t)).map(Be))
    }
      , De = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("string" == typeof t && (t = Oe(t)),
        !0 === we(e, t))
            return [];
        var r = t.filter((function(e) {
            return !0 !== e.optional
        }
        )).length
          , i = e.cache.terms || e.terms()
          , a = [];
        if (!0 === t[0].start) {
            var o = $e(i, t, 0, i.length);
            return !1 !== o && o.length > 0 && a.push(o),
            a = a.map((function(e) {
                return e.filter((function(e) {
                    return e
                }
                ))
            }
            )),
            Pe(i, t, a)
        }
        for (var s = 0; s < i.length && !(s + r > i.length); s += 1) {
            var u = $e(i.slice(s), t, s, i.length);
            if (!1 !== u && u.length > 0 && (s += u.length - 1,
            u = u.filter((function(e) {
                return e
            }
            )),
            a.push(u),
            !0 === n))
                return Pe(i, t, a)
        }
        return Pe(i, t, a)
    }
      , Te = function(e, t) {
        var n = {};
        De(e, t).forEach((function(e) {
            e.forEach((function(e) {
                n[e.id] = !0
            }
            ))
        }
        ));
        var r = e.terms()
          , i = []
          , a = [];
        return r.forEach((function(e) {
            !0 !== n[e.id] ? a.push(e) : a.length > 0 && (i.push(a),
            a = [])
        }
        )),
        a.length > 0 && i.push(a),
        i
    }
      , Ve = {
        match: function(e) {
            var t = this
              , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , r = De(this, e, n);
            return r = r.map((function(e) {
                return t.buildFrom(e[0].id, e.length)
            }
            ))
        },
        has: function(e) {
            return De(this, e, !0).length > 0
        },
        not: function(e) {
            var t = this
              , n = Te(this, e);
            return n = n.map((function(e) {
                return t.buildFrom(e[0].id, e.length)
            }
            ))
        },
        canBe: function(e, t) {
            for (var n = this, r = [], i = this.cache.terms || this.terms(), a = !1, o = 0; o < i.length; o += 1) {
                var s = i[o].canBe(e, t);
                !0 === s && (!0 === a ? r[r.length - 1].push(i[o]) : r.push([i[o]]),
                a = s)
            }
            return r = r.filter((function(e) {
                return e.length > 0
            }
            )).map((function(e) {
                return n.buildFrom(e[0].id, e.length)
            }
            ))
        }
    }
      , ze = function e(t, n, r) {
        i(this, e),
        this.start = t,
        this.length = n,
        this.isA = "Phrase",
        Object.defineProperty(this, "pool", {
            enumerable: !1,
            writable: !0,
            value: r
        }),
        Object.defineProperty(this, "cache", {
            enumerable: !1,
            writable: !0,
            value: {}
        })
    };
    ze.prototype.buildFrom = function(e, t) {
        var n = new ze(e,t,this.pool);
        return this.cache && (n.cache = this.cache,
        t !== this.length && (n.cache.terms = null)),
        n
    }
    ,
    Object.assign(ze.prototype, Ve),
    Object.assign(ze.prototype, ye);
    var He = {
        term: "terms"
    };
    Object.keys(He).forEach((function(e) {
        return ze.prototype[e] = ze.prototype[He[e]]
    }
    ));
    var Ie = ze
      , Me = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, e),
            Object.defineProperty(this, "words", {
                enumerable: !1,
                value: t
            })
        }
        return o(e, [{
            key: "add",
            value: function(e) {
                return this.words[e.id] = e,
                this
            }
        }, {
            key: "get",
            value: function(e) {
                return this.words[e]
            }
        }, {
            key: "remove",
            value: function(e) {
                delete this.words[e]
            }
        }, {
            key: "merge",
            value: function(e) {
                return Object.assign(this.words, e.words),
                this
            }
        }, {
            key: "stats",
            value: function() {
                return {
                    words: Object.keys(this.words).length
                }
            }
        }]),
        e
    }();
    Me.prototype.clone = function() {
        var e = this
          , t = Object.keys(this.words).reduce((function(t, n) {
            var r = e.words[n].clone();
            return t[r.id] = r,
            t
        }
        ), {});
        return new Me(t)
    }
    ;
    for (var Se = Me, Le = /(\S.+?[.!?\u203D\u2E18\u203C\u2047-\u2049])(?=\s+|$)/g, _e = /\S/, qe = /[ .][A-Z]\.? *$/i, We = /(?:\u2026|\.{2,}) *$/, Je = /((?:\r?\n|\r)+)/, Re = /[a-z0-9\u00C0-\u00FF\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]/i, Ue = /^\s+/, Ke = function(e, t) {
        if (!0 === qe.test(e))
            return !1;
        if (!0 === We.test(e))
            return !1;
        if (!1 === Re.test(e))
            return !1;
        var n = e.replace(/[.!?\u203D\u2E18\u203C\u2047-\u2049] *$/, "").split(" ")
          , r = n[n.length - 1].toLowerCase();
        return !t.hasOwnProperty(r)
    }, Qe = function(e, t) {
        var n = t.cache.abbreviations;
        e = e || "";
        var r = []
          , i = [];
        if (!(e = String(e)) || "string" != typeof e || !1 === _e.test(e))
            return r;
        for (var a = function(e) {
            for (var t = [], n = e.split(Je), r = 0; r < n.length; r++)
                for (var i = n[r].split(Le), a = 0; a < i.length; a++)
                    t.push(i[a]);
            return t
        }(e), o = 0; o < a.length; o++) {
            var s = a[o];
            if (void 0 !== s && "" !== s) {
                if (!1 === _e.test(s)) {
                    if (i[i.length - 1]) {
                        i[i.length - 1] += s;
                        continue
                    }
                    if (a[o + 1]) {
                        a[o + 1] = s + a[o + 1];
                        continue
                    }
                }
                i.push(s)
            }
        }
        for (var u = 0; u < i.length; u++) {
            var l = i[u];
            i[u + 1] && !1 === Ke(l, n) ? i[u + 1] = l + (i[u + 1] || "") : l && l.length > 0 && (r.push(l),
            i[u] = "")
        }
        if (0 === r.length)
            return [e];
        for (var c = 1; c < r.length; c += 1) {
            var h = r[c].match(Ue);
            null !== h && (r[c - 1] += h[0],
            r[c] = r[c].replace(Ue, ""))
        }
        return r
    }, Xe = /\S/, Ze = /^[!?.]+$/, Ye = /(\S+)/, et = /\/\W*$/, tt = {
        ".": !0,
        "-": !0,
        "–": !0,
        "—": !0,
        "--": !0,
        "...": !0
    }, nt = function(e) {
        if (!0 === /^(re|un)-?[^aeiou]./.test(e))
            return !1;
        return !0 === /^([a-z\u00C0-\u00FF`"'/]+)(-|–|—)([a-z0-9\u00C0-\u00FF].*)/i.test(e)
    }, rt = function(e) {
        var t = []
          , n = e.split(/[-–—]/)
          , r = "-"
          , i = e.match(/[-–—]/);
        i && i[0] && (r = i);
        for (var a = 0; a < n.length; a++)
            a === n.length - 1 ? t.push(n[a]) : t.push(n[a] + r);
        return t
    }, it = function(e) {
        var t = []
          , n = [];
        "number" == typeof (e = e || "") && (e = String(e));
        for (var r = e.split(Ye), i = 0; i < r.length; i++)
            !0 !== nt(r[i]) ? n.push(r[i]) : n = n.concat(rt(r[i]));
        for (var a = "", o = 0; o < n.length; o++) {
            var s = n[o];
            !0 === Xe.test(s) && !1 === tt.hasOwnProperty(s) && !1 === Ze.test(s) ? (t.length > 0 ? (t[t.length - 1] += a,
            t.push(s)) : t.push(a + s),
            a = "") : a += s
        }
        return a && t.length > 0 && (t[t.length - 1] += a),
        t = (t = function(e) {
            for (var t = 1; t < e.length - 1; t++)
                et.test(e[t]) && (e[t - 1] += e[t] + e[t + 1],
                e[t] = null,
                e[t + 1] = null);
            return e
        }(t)).filter((function(e) {
            return e
        }
        ))
    }, at = function(e) {
        e.forEach((function(t, n) {
            n > 0 && (t.prev = e[n - 1].id),
            e[n + 1] && (t.next = e[n + 1].id)
        }
        ))
    }, ot = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = arguments.length > 1 ? arguments[1] : void 0
          , n = arguments.length > 2 ? arguments[2] : void 0;
        "string" != typeof e && "number" == typeof e && (e = String(e));
        var r = Qe(e, t);
        r = r.map((function(e) {
            return it(e)
        }
        )),
        n = n || new Se;
        var i = r.map((function(e) {
            return e = e.map((function(e) {
                var t = new ae(e);
                return n.add(t),
                t
            }
            )),
            at(e),
            new Ie(e[0].id,e.length,n)
        }
        ));
        return i
    }, st = function(e, t) {
        "string" == typeof e && (e = JSON.parse(e));
        var n = new Se;
        return e.list.map((function(r) {
            var i = it(r[0])
              , a = function(e, t) {
                return e.split("|").map((function(e) {
                    var n = e.split(",");
                    return (n = n.map((function(e) {
                        return parseInt(e, 10)
                    }
                    ))).map((function(e) {
                        return t[e] || console.warn("Compromise import: missing tag at index " + e),
                        t[e]
                    }
                    ))
                }
                ))
            }(r[1], e.tags);
            return i = i.map((function(e, r) {
                var i = new ae(e);
                return a[r].forEach((function(e) {
                    return i.tag(e, "", t)
                }
                )),
                n.add(i),
                i
            }
            )),
            at(i),
            new Ie(i[0].id,i.length,n)
        }
        ))
    }, ut = {
        Comparative: "true¦better",
        Superlative: "true¦earlier",
        PresentTense: "true¦is,sounds",
        Value: "true¦a few",
        Noun: "true¦a8b7c5e3f2here,ie,lit,m1no doubt,p0tce,vs;d,l;a,d;t,y;g,sp,tc,x0;!p;a,ca,o0;l,rp;a,c,l;d,l,rc",
        Copula: "true¦a1is,w0;as,ere;m,re",
        PastTense: "true¦be3came,d2had,meant,sa2taken,w0;as,e0;nt,re;id;en,gan",
        Condition: "true¦if,unless",
        Gerund: "true¦accord0be0develop0go0result0stain0;ing",
        Negative: "true¦n0;ever,o0;!n,t",
        QuestionWord: "true¦how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s",
        Plural: "true¦records",
        Conjunction: "true¦&,aEbAcuz,how8in caDno7o6p4supposing,t1vers5wh0yet;eth8ile;h0o;eref9o0;!uC;l0rovided that;us;r,therwi6; matt1r;!ev0;er;e0ut;cau1f0;ore;se;lthou1nd,s 0;far as,if;gh",
        Pronoun: "true¦'em,elle,h4i3me,ourselves,she5th1us,we,you0;!rself;e0ou;m,y;!l,t;e0im;!'s",
        Singular: "true¦0:0X;1:10;a0Wb0Kc0Bd04e02fXgShOici1jel0kitty,lNmJnIoHpDquestion mark,rBs7t4u2womW;nc0Rs 2;doll0Dst0F; rex,a3h2ic,ragedy,v show;ere,i1;l0x return;ist0Pky,omeone,t2uper bowl,yst0W;ep3ri1u2;de0Pff;faMmoM;al0i1o2;om,se;a4i0Jr3u2;dLrpoD;erogaVobl0O;rt,te0I;bjSceGthers;othi1umb0E;a4ee04o2;del,m2nopo0th0C;!my;n,yf0;i0unch;ead start,o2;l0me3u2;se;! run;adf0entlem5irlZlaci04od,rand3u2;l0y; slam,fa2mo2;th01;an;a5ella,ly,ol0r3un2;di1;iTo2;ntiWsN;mi0thV;conomy,gg,ner5veWx2;ampQecu7;ad7e4innSo2ragonf0ude;cumentFg2i0l0or;gy;ath,t2;ec2;tive;!dy;a8eili1h6i4o2redit card;ttage,u2;riJsin;ty,vil w2;ar;andeliGocol2;ate;n2rD;ary;aAel0lesHo6r4u2;n2tterf0;ti1;eakfast,o2;!th8;dy,tt4y2;!fri2;end;le;nki1r2;ri2;er;d4l0noma0u2;nt;ly; homin4verti2;si1;ng;em",
        Actor: "true¦aJbGcFdCengineIfAgardenIh9instructPjournalLlawyIm8nurse,opeOp5r3s1t0;echnCherapK;ailNcientJoldiGu0;pervKrgeon;e0oofE;ceptionGsearC;hotographClumbColi1r0sychologF;actitionBogrammB;cem6t5;echanic,inist9us4;airdress8ousekeep8;arm7ire0;fight6m2;eputy,iet0;ici0;an;arpent2lerk;ricklay1ut0;ch0;er;ccoun6d2ge7r0ssis6ttenda7;chitect,t0;ist;minist1v0;is1;rat0;or;ta0;nt",
        Honorific: "true¦a03b00cSdReQfiLgKhon,jr,king,lJmEoDp8queen,r4s0taoiseach,vice7;e1fc,gt,ir,r,u0;ltTpt,rg;c0nDrgeaL;ond liJretary;abbi,e0;ar1pAs,v0;!erend; admirY;astPhd,r0vt;esideEi1of0;!essN;me mini5nce0;!ss;fficOp,rd;a3essrs,i2lle,me,r1s0;!tr;!s;stK;gistrate,j,r6yF;i3lb,t;en,ov;eld mar3rst l0;ady,i0;eutena0;nt;shG;sq,xcellency;et,oct6r,utchess;apt6hance4mdr,o0pl;lonel,m2ngress0unci3;m0wom0;an;dr,mand5;ll0;or;!ain;ldg,rig0;!adi0;er;d0sst,tty,yatullah;j,m0v;!ir0;al",
        SportsTeam: "true¦0:1A;1:1H;2:1G;a1Eb16c0Td0Kfc dallas,g0Ihouston 0Hindiana0Gjacksonville jagua0k0El0Bm01newToQpJqueens parkIreal salt lake,sAt5utah jazz,vancouver whitecaps,w3yW;ashington 3est ham0Rh10;natio1Oredski2wizar0W;ampa bay 6e5o3;ronto 3ttenham hotspur;blue ja0Mrapto0;nnessee tita2xasC;buccanee0ra0K;a7eattle 5heffield0Kporting kansas0Wt3;. louis 3oke0V;c1Frams;marine0s3;eah15ounG;cramento Rn 3;antonio spu0diego 3francisco gJjose earthquak1;char08paA; ran07;a8h5ittsburgh 4ortland t3;imbe0rail blaze0;pirat1steele0;il3oenix su2;adelphia 3li1;eagl1philNunE;dr1;akland 3klahoma city thunder,rlando magic;athle0Mrai3;de0; 3castle01;england 7orleans 6york 3;city fc,g4je0FknXme0Fred bul0Yy3;anke1;ian0D;pelica2sain0C;patrio0Brevolut3;ion;anchester Be9i3ontreal impact;ami 7lwaukee b6nnesota 3;t4u0Fvi3;kings;imberwolv1wi2;rewe0uc0K;dolphi2heat,marli2;mphis grizz3ts;li1;cXu08;a4eicesterVos angeles 3;clippe0dodDla9; galaxy,ke0;ansas city 3nE;chiefs,roya0E; pace0polis colU;astr06dynamo,rockeTtexa2;olden state warrio0reen bay pac3;ke0;.c.Aallas 7e3i05od5;nver 5troit 3;lio2pisto2ti3;ge0;broncZnuggeM;cowbo4maver3;ic00;ys; uQ;arCelKh8incinnati 6leveland 5ol3;orado r3umbus crew sc;api5ocki1;brow2cavalie0india2;bengaWre3;ds;arlotte horAicago 3;b4cubs,fire,wh3;iteB;ea0ulR;diff3olina panthe0; c3;ity;altimore 9lackburn rove0oston 5rooklyn 3uffalo bilN;ne3;ts;cel4red3; sox;tics;rs;oriol1rave2;rizona Ast8tlanta 3;brav1falco2h4u3;nited;aw9;ns;es;on villa,r3;os;c5di3;amondbac3;ks;ardi3;na3;ls",
        Uncountable: "true¦a1Ib1Ac11d0Ye0Rf0Lg0Hh0Ci08j07knowled1Hl02mUnews,oTpQrLsAt5vi4w0;a2ea05i1oo0;d,l;ldlife,ne;rmth,t17;neg0Yol06tae;e3h2oothpaste,r0una;affPou0;ble,sers,t;ermod1Eund12;a,nnis;a8cene04eri0Oh7il6kittl0Onow,o5p3t1u0;g0Rnshi0H;ati1De0;am,el;ace16e0;ci0Jed;ap,cc0U;k,v0T;eep,ingl0G;d04fe10l0nd;m0St;a3e1ic0;e,ke0D;c0laxa09search;ogni08rea08;bi09in;aJe1hys10last5o0ressV;lit0Zrk,w0J;a0Vtrol;bstetr0Xil,xygen;a5e3ilk,o2u0;mps,s0;ic;nGo0A;a0chan0S;slZt;chine0il,themat0Q; learn05ry;aught08e2i1ogi0Nu0;ck,g0C;ce,ghtn02ngui0LteratH;a0isG;th04;ewel7usti0G;ce,mp0nformaOtself;a0ortan0E;ti0;en0C;a3isto2o0;ck0mework,n0spitali06;ey;ry;ir,libut,ppi7;en01o1r0um,ymna08;a6ound;l0ssip;d,f;i4lour,o1urnit0;ure;od,rgive0uriNwl;ne0;ss;c6sh;conomZduca5lectr4n2quip3thZvery0;body,o0thE;ne;joy0tertain0;ment;iciNonU;tiF;ar1iabet0raugh1;es;ts;a7elcius,h3ivPl2o0urrency;al,ld w0nfusiAttA;ar;assMoth2;aos,e0;e1w0;ing;se;r4sh;a4eef,i1lood,owls,read,utt0;er;lliar1s0;on;ds;g0ss;ga0;ge;c6dvi5ero3ir2mnes1rt,thl0;et7;ty;craft;b4d0naut4;ynam3;ce;id,ou0;st0;ics",
        Infinitive: "true¦0:6H;1:6V;2:55;3:6S;4:6T;5:5W;6:64;7:6R;8:6N;9:6F;A:6P;B:6M;C:6A;D:6W;a67b5Wc4Yd46e3Qf3Dg37h30i2Nj2Lk2Jl2Am20n1Xo1Tp1Eques3Er0Ms01tTuPvMwFyE;awn,ield;aHe1Thist6iGoEre60;nd0rE;k,ry;pe,sh,th0;lk,nFrEsh,tCve;n,raD;d0t;aFiEo7;ew,sB;l68ry;nFpEr3se;gra4Jli3W;dEi7lo5O;er47o;aKeJhIoHrFuEwi8;ne,rn;aEe0Ki5Ku8y;de,in,nsf0p,v5C;r2VuC;ank,reat2L;nd,st;lk,rg1Ms7;aXcUeThRi48kip,lQmPnee3Ho4WpOtHuEwitC;bmBck,ff0gge8ppFrEspe5;ge,pri1rou4Tvi4;ly,o32;aJeIoHrFuE;dy,mb6;a4NeEi4;ngth2Bss,tC;p,re;m,p;in,ke,r0Oy;la50oil,rink6;e1Vi6o3F;am,ip;a2iv0oE;ck,ut;arCem,le5n1r4tt6;aFo2rE;atCew;le,re;il,ve;a03eGisk,oFuE;in,le,sh;am,ll;aZcXdu9fWgVje5lSmRnt,pOquNsItHvEwa5L;eEiew,o32;al,l,rE;se,t;a41i2u3Y;eHi8oGtE;!o2rE;i5uc1W;l4rt;mb6nt,r4;e8i2;air,eFlEo3XreseD;a9y;at;a3Remb0i3To4;aFeEi4y;a1nt;te,x;a53r0F;act1Uer,le5u1;a0Zei4k5FoEyc6;gni28nci6rd;ch,li27s5D;i1nE;ge,k;aRerQiPlMoKrGuE;b1Xll,mp,rEsh;cha1s4G;ai1eGiDoE;cEdu9greAhibBmi1te8vi2R;eAlaim;di5pa2ss,veD;iDp,rtr3WsEur;e,t;aFuE;g,n3;n,y;ck,le;fo2YmBsi8;ck,iDrt4Css,u1;bGccur,ff0pera7utweFverEwe;co3Xlap,ta1Yu1whelm;igh;ser4ta2Y;eFotE;e,i9;ed,gle5;aJeIiGoFuE;ltip3Ard0;nit10ve;nErr0Z;d,g6us;asu2lt,n0Mr3ssa3;inta2Ona3rFtE;ch,t0;ch,kEry;et;aKeJiGoEu1A;aEck,ok,ve;d,n;ft,ke,mBnFstEve;!en;e,k;a2Bc0Ct;b0Lck,uE;gh,nC;iEno2W;ck,ll,ss;am,o29uE;d3mp;gno2mOnEss39;cMdica7flu0KhLsItGvE;eEol4;nt,st;erErodu9;a5fe2;i8tE;aEru5;ll;abBibB;lu1Cr1A;agi20pE;lemeDo1Yro4;aIeGi2oFuE;nt,rry;n00pe,st;aElp;d,t;nd6ppErm,te;en;aIloAove1KrGuE;arEeAi11;ant30d;aEip,umb6;b,sp;in,th0ze;aOeaNiLlJoGracFuncE;ti3A;tu2;cus,lFrE;ce,eca8m,s2S;d,l1W;a1ToE;at,od,w;gu2lEni1Rx;e,l;r,tu2;il,vE;or;a11cho,le5mQnNstLvalua7xE;a08cJerIi8pEte15;a14eFla12oEreA;rt,se;ct,riE;en9;ci1t;el,han3;abEima7;li1D;ab6couVdFfor9ga3han9j01riCsu2t0vE;isi2Ny;!u2;body,er3pE;hasiEow0;ze;a04eSiJoIrFuE;mp;aFeAiE;ft;g,in;d3ubt;ff0p,re5sFvE;iWor9;aIcFliEmiApl13tingui0Y;ke;oEuA;uEv0;ra3;gr1QppE;ear,ro4;cLem,fJliv0ma0Bny,pIsFterE;mi0C;cribe,er4iFtrE;oy;gn,re;a07e06i5osB;eEi07y;at,ct;iGlFrE;ea1;a2i03;de;ma3n9re,te;a08e07h04i7l02oHrE;aFeEoAu0Dy;a7dB;ck,ve;llXmQnFok,py,uEv0;gh,nt;ceNdu5fKsItGvE;eEin9;rt,y;aNin0PrE;a8ibu7ol;iEtitu7;d0st;iFoEroD;rm;gu2rm;rn;biJfoImaHpE;a2laE;in;re;nd;rt;ne;ap1e5;aEip,o1;im,w;aFeE;at,ck,w;llen3n3r3se;a1nt0;ll,ncFrEt0u1;e,ry;el;aNeKloJoHruGuE;lEry;ly;sh;a8mb,o8rrEth0un9;ow;ck;ar,lFnefBtrE;ay;ie4ong;ng,se;band0Hc09d04ffo03gr02id,lZmu1nWppRrOsIttEvoid,waB;acGeFra5;ct;m0Dnd;h,k;k,sE;eGiFocia7uE;me;gn,st;mb6rt;le;chFgEri4;ue;!i4;eaHlGroE;aCve;ch;aud,y;l,r;noun9sw0tE;icipa7;ce;lFt0;er;e3ow;ee;rd;aPdGju8mBoP;it;st;!reA;ss;cHhie4knowled3tiva7;te;ge;ve;eGouDu1;se;nt;pt;on",
        Unit: "true¦0:16;a11b0Zc0Ld0Ke0If0Dg09h06in0Ejoule0k00lYmNnMoLpIqHsqCt7volts,w6y4z3°2µ1;g,s;c,f,n;b,e2;a0Kb,d0Qears old,o1;tt0E;att0b;able4b3e2on1sp;!ne0;a2r0A;!l,sp;spo01; ft,uare 1;c0Fd0Ef3i0Ckilo0Gm1ya0B;e0Jil1;e0li0E;eet0o0A;t,uart0;ascals,e2i1ou0Mt;c0Jnt0;rcent,tZ;hms,uVz;an0GewtQ;/s,b,e7g,i3l,m2p1²,³;h,s;!²;!/h,cro3l1;e1li05;! DsC²;g05s0A;gPter1;! 2s1;! 1;per second;b,iZm,u1x;men0x0;b,elvin0g,ilo2m1nQ;!/h,ph,²;byYgWmeter1;! 2s1;! 1;per hour;e1g,z;ct1rtz0;aXogQ;al2b,igAra1;in0m0;!l1;on0;a4emtPl2t1;²,³; oz,uid ou1;nce0;hrenheit0rad0;b,x1;abyH;eciCg,l,mA;arat0eAg,m9oulomb0u1;bic 1p0;c5d4fo3i2meAya1;rd0;nch0;ot0;eci2;enti1;me4;!²,³;lsius0nti1;g2li1me1;ter0;ram0;bl,y1;te0;c4tt1;os1;eco1;nd0;re0;!s",
        Organization: "true¦0:46;a3Ab2Qc2Ad21e1Xf1Tg1Lh1Gi1Dj19k17l13m0Sn0Go0Dp07qu06rZsStFuBv8w3y1;amaha,m0Xou1w0X;gov,tu2S;a3e1orld trade organizati41;lls fargo,st1;fie22inghou16;l1rner br3D;-m11gree31l street journ25m11;an halNeriz3Wisa,o1;dafo2Gl1;kswagLvo;bs,kip,n2ps,s1;a tod2Rps;es35i1;lev2Xted natio2Uv; mobi2Kaco bePd bMeAgi frida9h3im horto2Tmz,o1witt2W;shiba,y1;ota,s r Y;e 1in lizzy;b3carpen33daily ma2Xguess w2holli0rolling st1Ms1w2;mashing pumpki2Ouprem0;ho;ea1lack eyed pe3Fyrds;ch bo1tl0;ys;l2s1;co,la m12;efoni07us;a6e4ieme2Gnp,o2pice gir5ta1ubaru;rbucks,to2N;ny,undgard1;en;a2Rx pisto1;ls;few25insbu26msu1X;.e.m.,adiohead,b6e3oyal 1yan2X;b1dutch she4;ank;/max,aders dige1Ed 1vl32;bu1c1Uhot chili peppe2Klobst28;ll;c,s;ant2Vizno2F;an5bs,e3fiz24hilip morrBi2r1;emier27octer & gamb1Rudenti14;nk floyd,zza hut;psi28tro1uge08;br2Qchina,n2Q; 2ason1Xda2G;ld navy,pec,range juli2xf1;am;us;a9b8e5fl,h4i3o1sa,wa;kia,tre dame,vart1;is;ke,ntendo,ss0K;l,s;c,st1Etflix,w1; 1sweek;kids on the block,york08;a,c;nd1Us2t1;ional aca2Fo,we0Q;a,cYd0O;aAcdonald9e5i3lb,o1tv,yspace;b1Nnsanto,ody blu0t1;ley crue,or0O;crosoft,t1;as,subisO;dica3rcedes2talli1;ca;!-benz;id,re;'s,s;c's milk,tt13z1Y;'ore09a3e1g,ittle caesa1Ktd;novo,x1;is,mark; pres5-z-boy,bour party;atv,fc,kk,m1od1K;art;iffy lu0Lo3pmorgan1sa;! cha1;se;hnson & johns1Sy d1R;bm,hop,n1tv;c,g,te1;l,rpol; & m,asbro,ewlett-packaTi3o1sbc,yundai;me dep1n1J;ot;tac1zbollah;hi;eneral 6hq,l5mb,o2reen d0Iu1;cci,ns n ros0;ldman sachs,o1;dye1g0B;ar;axo smith kliZencore;electr0Im1;oto0V;a3bi,da,edex,i1leetwood mac,oGrito-l0A;at,nancial1restoV; tim0;cebook,nnie mae;b06sa,u3xxon1; m1m1;ob0H;!rosceptics;aiml0Ae5isney,o3u1;nkin donuts,po0Wran dur1;an;j,w j1;on0;a,f leppa3ll,p2r spiegZstiny's chi1;ld;eche mode,t;rd;aEbc,hBi9nn,o3r1;aigsli5eedence clearwater reviv1ossra05;al;!ca c5l4m1o0Ast05;ca2p1;aq;st;dplMgate;ola;a,sco1tigroup;! systems;ev2i1;ck fil-a,na daily;r0Hy;dbury,pital o1rl's jr;ne;aGbc,eCfAl6mw,ni,o2p,r1;exiteeWos;ei3mbardiJston 1;glo1pizza;be;ng;ack & deckFo2ue c1;roX;ckbuster video,omingda1;le; g1g1;oodriN;cht3e ge0n & jer2rkshire hathaw1;ay;ryH;el;nana republ3s1xt5y5;f,kin robbi1;ns;ic;bXcSdidRerosmith,ig,lLmFnheuser-busEol,ppleAr7s3t&t,v2y1;er;is,on;hland2s1;n,ociated F; o1;il;by4g2m1;co;os; compu2bee1;'s;te1;rs;ch;c,d,erican3t1;!r1;ak; ex1;pre1;ss; 4catel2t1;air;!-luce1;nt;jazeera,qae1;da;as;/dc,a3er,t1;ivisi1;on;demy of scienc0;es;ba,c",
        Demonym: "true¦0:16;1:13;a0Wb0Nc0Cd0Ae09f07g04h02iYjVkTlPmLnIomHpDqatari,rBs7t5u4v3wel0Rz2;am0Fimbabwe0;enezuel0ietnam0H;g9krai1;aiwThai,rinida0Iu2;ni0Qrkmen;a4cot0Ke3ingapoOlovak,oma0Tpa05udRw2y0X;edi0Kiss;negal0Br08;mo0uU;o6us0Lw2;and0;a3eru0Hhilipp0Po2;li0Ertugu06;kist3lesti1na2raguay0;ma1;ani;amiZi2orweP;caragu0geri2;an,en;a3ex0Mo2;ngo0Erocc0;cedo1la2;gasy,y08;a4eb9i2;b2thua1;e0Dy0;o,t02;azakh,eny0o2uwaiti;re0;a2orda1;ma0Bp2;anN;celandic,nd4r2sraeli,ta02vo06;a2iT;ni0qi;i0oneV;aiDin2ondur0unN;di;amDe2hanai0reek,uatemal0;or2rm0;gi0;i2ren7;lipino,n4;cuadoVgyp6ngliJsto1thiopi0urope0;a2ominXut4;niH;a9h6o4roa3ub0ze2;ch;ti0;lom2ngol5;bi0;a6i2;le0n2;ese;lifor1m2na3;bo2eroo1;di0;angladeshi,el8o6r3ul2;gaG;aziBi2;ti2;sh;li2s1;vi0;aru2gi0;si0;fAl7merBngol0r5si0us2;sie,tr2;a2i0;li0;gent2me1;ine;ba1ge2;ri0;ni0;gh0r2;ic0;an",
        Possessive: "true¦anyAh5its,m3noCo1sometBthe0yo1;ir1mselves;ur0;!s;i8y0;!se4;er1i0;mse2s;!s0;!e0;lf;o1t0;hing;ne",
        Currency: "true¦$,aud,bScQdLeurKfJgbp,hkd,iIjpy,kGlEp8r7s3usd,x2y1z0¢,£,¥,ден,лв,руб,฿,₡,₨,€,₭,﷼;lotySł;en,uanR;af,of;h0t5;e0il5;k0q0;elM;iel,oubleLp,upeeL;e2ound st0;er0;lingI;n0soH;ceGn0;ies,y;e0i8;i,mpi7;n,r0wanzaCyatC;!onaBw;ls,nr;ori7ranc9;!o8;en3i2kk,o0;b0ll2;ra5;me4n0rham4;ar3;ad,e0ny;nt1;aht,itcoin0;!s",
        City: "true¦a2Wb26c1Wd1Re1Qf1Og1Ih1Ai18jakar2Hk0Zl0Tm0Gn0Co0ApZquiYrVsLtCuBv8w3y1z0;agreb,uri1Z;ang1Te0okohama;katerin1Hrev34;ars3e2i0rocl3;ckl0Vn0;nipeg,terth0W;llingt1Oxford;aw;a1i0;en2Hlni2Z;lenc2Uncouv0Gr2G;lan bat0Dtrecht;a6bilisi,e5he4i3o2rondheim,u0;nVr0;in,ku;kyo,ronIulouC;anj23l13miso2Jra2A; haJssaloni0X;gucigalpa,hr2Ol av0L;i0llinn,mpe2Bngi07rtu;chu22n2MpT;a3e2h1kopje,t0ydney;ockholm,uttga12;angh1Fenzh1X;o0KvZ;int peters0Ul3n0ppo1F; 0ti1B;jo0salv2;se;v0z0Q;adU;eykjavik,i1o0;me,sario,t25;ga,o de janei17;to;a8e6h5i4o2r0ueb1Qyongya1N;a0etor24;gue;rt0zn24; elizabe3o;ls1Grae24;iladelph1Znom pe07oenix;r0tah tik19;th;lerJr0tr10;is;dessa,s0ttawa;a1Hlo;a2ew 0is;delTtaip0york;ei;goya,nt0Upl0Uv1R;a5e4i3o1u0;mb0Lni0I;nt0scH;evideo,real;l1Mn01skolc;dellín,lbour0S;drid,l5n3r0;ib1se0;ille;or;chest0dalWi0Z;er;mo;a4i1o0vAy01;nd00s angel0F;ege,ma0nz,sbZverpo1;!ss0;ol; pla0Iusan0F;a5hark4i3laipeda,o1rak0uala lump2;ow;be,pavog0sice;ur;ev,ng8;iv;b3mpa0Kndy,ohsiu0Hra0un03;c0j;hi;ncheMstanb0̇zmir;ul;a5e3o0; chi mi1ms,u0;stI;nh;lsin0rakliG;ki;ifa,m0noi,va0A;bu0SiltD;alw4dan3en2hent,iza,othen1raz,ua0;dalaj0Gngzhou;bu0P;eUoa;sk;ay;es,rankfu0;rt;dmont4indhovU;a1ha01oha,u0;blRrb0Eshanbe;e0kar,masc0FugavpiJ;gu,je0;on;a7ebu,h2o0raioJuriti01;lo0nstanJpenhagNrk;gFmbo;enn3i1ristchur0;ch;ang m1c0ttagoL;ago;ai;i0lgary,pe town,rac4;ro;aHeBirminghWogoAr5u0;char3dap3enos air2r0sZ;g0sa;as;es;est;a2isba1usse0;ls;ne;silPtisla0;va;ta;i3lgrade,r0;g1l0n;in;en;ji0rut;ng;ku,n3r0sel;celo1ranquil0;la;na;g1ja lu0;ka;alo0kok;re;aBb9hmedabad,l7m4n2qa1sh0thens,uckland;dod,gabat;ba;k0twerp;ara;m5s0;terd0;am;exandr0maty;ia;idj0u dhabi;an;lbo1rh0;us;rg",
        Abbreviation: "true¦a08b05cZdXeUfSgRhQiPjNkanMlKmGnEoDpCque,rAs6t4u3v2w0;is0y00;!c;a,s,t;niv,safa,t;ce,e0;nn,x;ask,e1fc,gt,ir,r,t,u0;pt,rg;nDp0;!t;d,e0;pAs,v;a,d,ennGhd,l,rof,vt;ct,kla,nt,p,rd;eb0ov;!r;a2d,essrs,i1lle,me,r5s0t;!tr;nn,ster;!j,r;it,lb,t0;!d;!s;an,r,u0;l,n;a,da,e,nc;on,wy;a,en,ov;eb,l0t,y;!a;g,s1tc,x0;!p;p,q;ak,e0ist,r;c,pt,t;a3ca,l,m2o0pl,res,t;!l0m1nn,rp;!o;dr;!l0pt;!if;a,c,l1r0;ig,os;!dg,vd;d3l2pr,r1ss0tty,ug,ve;n,t;c,iz;!ta;!j,m,v",
        Place: "true¦a07b05cZdYeXfVgRhQiOjfk,kMlKmHneEoDp9que,rd,s8t5u4v3w0yyz;is1y0;!o;!c;a,t;pYsafa,t;e1he 0;bronx,hamptons;nn,x;ask,fo,oho,t,under6yd;a2e1h0;l,x;k,nnK;!cifX;kla,nt;b1w eng0;land;!r;a1co,i0t,uc;dKnn;libu,nhattS;a0gw,hr;s,x;an0ul;!s;a0cn,da,ndianMst;!x;arlem,kg,nd,wy;a2re0;at 0enwich;britain,lak6;!y village;co,l0ra;!a;urope,verglad2;ak,en,fw,ist,own4xb;al4dg,gk,hina3l2o1r0t;es;lo,nn;!t;town;!if;cn,e0kk,lvd,rooklyn;l air,verly hills;frica,lta,m5ntarct2r1sia,tl0ve;!ant1;ct0iz;ic0; oce0;an;ericas,s",
        Country: "true¦0:38;1:2L;a2Wb2Dc21d1Xe1Rf1Lg1Bh19i13j11k0Zl0Um0Gn05om3CpZqat1JrXsKtCu6v4wal3yemTz2;a24imbabwe;es,lis and futu2X;a2enezue31ietnam;nuatu,tican city;.5gTkraiZnited 3ruXs2zbeE;a,sr;arab emirat0Kkingdom,states2;! of am2X;k.,s.2; 27a.;a7haBimor-les0Bo6rinidad4u2;nis0rk2valu;ey,me2Xs and caic1T; and 2-2;toba1J;go,kel0Ynga;iw2Vji2nz2R;ki2T;aCcotl1eBi8lov7o5pa2Bri lanka,u4w2yr0;az2ed9itzerl1;il1;d2Qriname;lomon1Vmal0uth 2;afr2IkLsud2O;ak0en0;erra leoEn2;gapo1Wt maart2;en;negKrb0ychellY;int 2moa,n marino,udi arab0;hele24luc0mart1Z;epublic of ir0Com2Cuss0w2;an25;a3eHhilippinTitcairn1Ko2uerto riM;l1rtugE;ki2Bl3nama,pua new0Tra2;gu6;au,esti2;ne;aAe8i6or2;folk1Gth3w2;ay; k2ern mariana1B;or0M;caragua,ger2ue;!ia;p2ther18w zeal1;al;mib0u2;ru;a6exi5icro09o2yanm04;ldova,n2roc4zamb9;a3gol0t2;enegro,serrat;co;c9dagascZl6r4urit3yot2;te;an0i14;shall0Vtin2;ique;a3div2i,ta;es;wi,ys0;ao,ed00;a5e4i2uxembourg;b2echtenste10thu1E;er0ya;ban0Gsotho;os,tv0;azakh1De2iriba02osovo,uwait,yrgyz1D;eling0Jnya;a2erF;ma15p1B;c6nd5r3s2taly,vory coast;le of m19rael;a2el1;n,q;ia,oI;el1;aiSon2ungary;dur0Mg kong;aAermany,ha0Pibralt9re7u2;a5ern4inea2ya0O;!-biss2;au;sey;deloupe,m,tema0P;e2na0M;ce,nl1;ar;bTmb0;a6i5r2;ance,ench 2;guia0Dpoly2;nes0;ji,nl1;lklandTroeT;ast tim6cu5gypt,l salv5ngl1quatorial3ritr4st2thiop0;on0; guin2;ea;ad2;or;enmark,jibou4ominica3r con2;go;!n B;ti;aAentral african 9h7o4roat0u3yprQzech2; 8ia;ba,racao;c3lo2morPngo-brazzaville,okFsta r03te d'ivoiK;mb0;osD;i2ristmasF;le,na;republic;m2naTpe verde,yman9;bod0ero2;on;aFeChut00o8r4u2;lgar0r2;kina faso,ma,undi;azil,itish 2unei;virgin2; is2;lands;liv0nai4snia and herzegoviGtswaGuvet2; isl1;and;re;l2n7rmuF;ar2gium,ize;us;h3ngladesh,rbad2;os;am3ra2;in;as;fghaFlCmAn5r3ustr2zerbaijH;al0ia;genti2men0uba;na;dorra,g4t2;arct6igua and barbu2;da;o2uil2;la;er2;ica;b2ger0;an0;ia;ni2;st2;an",
        Region: "true¦0:1U;a20b1Sc1Id1Des1Cf19g13h10i0Xj0Vk0Tl0Qm0FnZoXpSqPrMsDtAut9v6w3y1zacatec22;o05u1;cat18kZ;a1est vi4isconsin,yomi14;rwick0shington1;! dc;er2i1;rgin1S;acruz,mont;ah,tar pradesh;a2e1laxca1DuscaA;nnessee,x1R;bas0Kmaulip1QsmJ;a6i4o2taf0Ou1ylh13;ffVrr00s0Y;me10no1Auth 1;cSdR;ber1Ic1naloa;hu0Sily;n2skatchew0Rxo1;ny; luis potosi,ta catari1I;a1hode7;j1ngp02;asth0Mshahi;inghai,u1;e1intana roo;bec,ensWreta0E;ara4e2rince edward1; isU;i,nnsylv1rnambu02;an14;!na;axa0Ndisha,h1klaho1Bntar1reg4x04;io;ayarit,eBo3u1;evo le1nav0L;on;r1tt0Rva scot0X;f6mandy,th1; 1ampton0;c3d2yo1;rk0;ako0Y;aroli0V;olk;bras0Xva01w1; 2foundland1;! and labrador;brunswick,hamp0jers1mexiJyork state;ey;a6i2o1;nta0Nrelos;ch3dlanBn2ss1;issippi,ouri;as geraGneso0M;igQoacQ;dhya,harasht04ine,ni3r1ssachusetts;anhao,y1;land;p1toba;ur;anca0e1incoln0ouis8;e1iH;ds;a1entucky,hul0A;ns08rnata0Dshmir;alis1iangxi;co;daho,llino2nd1owa;ia05;is;a2ert1idalEunA;ford0;mp0waii;ansu,eorgWlou5u1;an2erre1izhou,jarat;ro;ajuato,gdo1;ng;cester0;lori2uji1;an;da;sex;e4o2uran1;go;rs1;et;lawaErby0;a8ea7hi6o1umbrH;ahui4l3nnectic2rsi1ventry;ca;ut;iMorado;la;apEhuahua;ra;l8m1;bridge0peche;a5r4uck1;ingham0;shi1;re;emen,itish columb3;h2ja cal1sque,var2;iforn1;ia;guascalientes,l4r1;izo2kans1;as;na;a2ber1;ta;ba2s1;ka;ma",
        FemaleName: "true¦0:FY;1:G2;2:FR;3:FD;4:FC;5:EP;6:ER;7:FS;8:GF;9:EZ;A:GB;B:E5;C:FO;D:FL;E:G8;F:EG;aE2bD4cB8dAIe9Gf91g8Hh83i7Sj6Uk60l4Om38n2To2Qp2Fqu2Er1Os0Qt04ursu6vUwOyLzG;aJeHoG;e,la,ra;lGna;da,ma;da,ra;as7EeHol1TvG;et5onB9;le0sen3;an9endBNhiB4iG;lInG;if3AniGo0;e,f39;a,helmi0lGma;a,ow;aMeJiG;cHviG;an9XenG1;kCZtor3;da,l8Vnus,rG;a,nGoniD2;a,iDC;leGnesEC;nDLrG;i1y;aSePhNiMoJrGu6y4;acG3iGu0E;c3na,sG;h9Mta;nHrG;a,i;i9Jya;a5IffaCGna,s7;al3eGomasi0;a,l8Go6Xres1;g7Uo6WrHssG;!a,ie;eFi,ri8;bNliMmKnIrHs7tGwa0;ia0um;a,yn;iGya;a,ka,s7;a4e4iGmCAra;!ka;a,t7;at7it7;a05carlet2Ye04hUiSkye,oQtMuHyG;bFJlvi1;e,sHzG;an2Tet5ie,y;anGi8;!a,e,nG;aDe;aIeG;fGl3DphG;an2;cF8r6;f3nGphi1;d4ia,ja,ya;er4lv3mon1nGobh75;dy;aKeGirlBLo0y6;ba,e0i6lIrG;iGrBPyl;!d70;ia,lBV;ki4nIrHu0w0yG;la,na;i,leAon,ron;a,da,ia,nGon;a,on;l5Yre0;bMdLi9lKmIndHrGs7vannaD;aDi0;ra,y;aGi4;nt7ra;lBNome;e,ie;in1ri0;a02eXhViToHuG;by,thBK;bQcPlOnNsHwe0xG;an94ie,y;aHeGie,lE;ann8ll1marBFtB;!lGnn1;iGyn;e,nG;a,d7W;da,i,na;an9;hel53io;bin,erByn;a,cGkki,na,ta;helBZki;ea,iannDXoG;da,n12;an0bIgi0i0nGta,y0;aGee;!e,ta;a,eG;cARkaD;chGe,i0mo0n5EquCDvCy0;aCCelGi9;!e,le;een2ia0;aMeLhJoIrG;iGudenAW;scil1Uyamva9;lly,rt3;ilome0oebe,ylG;is,lis;arl,ggy,nelope,r6t4;ige,m0Fn4Oo6rvaBBtHulG;a,et5in1;ricGsy,tA8;a,e,ia;ctav3deHfAWlGphAW;a,ga,iv3;l3t5;aQePiJoGy6;eHrG;aDeCma;ll1mi;aKcIkGla,na,s7ta;iGki;!ta;hoB2k8BolG;a,eBH;!mh;l7Tna,risF;dIi5PnHo23taG;li1s7;cy,et5;eAiCO;a01ckenz2eViLoIrignayani,uriBGyG;a,rG;a,na,tAS;i4ll9XnG;a,iG;ca,ka,qB4;a,chOkaNlJmi,nIrGtzi;aGiam;!n9;a,dy,erva,h,n2;a,dIi9JlG;iGy;cent,e;red;!e6;ae6el3G;ag4KgKi,lHrG;edi61isFyl;an2iGliF;nGsAM;a,da;!an,han;b08c9Ed06e,g04i03l01nZrKtJuHv6Sx87yGz2;a,bell,ra;de,rG;a,eC;h75il9t2;a,cSgOiJjor2l6In2s7tIyG;!aGbe5QjaAlou;m,n9S;a,ha,i0;!aIbALeHja,lEna,sGt53;!a,ol,sa;!l06;!h,m,nG;!a,e,n1;arIeHie,oGr3Kueri5;!t;!ry;et3IiB;elGi61y;a,l1;dGon,ue6;akranBy;iGlo36;a,ka,n9;a,re,s2;daGg2;!l2W;alEd2elGge,isBGon0;eiAin1yn;el,le;a0Ie08iWoQuKyG;d3la,nG;!a,dHe9SnGsAQ;!a,e9R;a,sAO;aB1cJelIiFlHna,pGz;e,iB;a,u;a,la;iGy;a2Ae,l25n9;is,l1GrHtt2uG;el6is1;aIeHi8na,rG;a6Zi8;lei,n1tB;!in1;aQbPd3lLnIsHv3zG;!a,be4Ket5z2;a,et5;a,dG;a,sGy;ay,ey,i,y;a,iaIlG;iGy;a8Ge;!n4F;b7Terty;!n5R;aNda,e0iLla,nKoIslARtGx2;iGt2;c3t3;la,nGra;a,ie,o4;a,or1;a,gh,laG;!ni;!h,nG;a,d4e,n4N;cNdon7Si6kes7na,rMtKurIvHxGy6;mi;ern1in3;a,eGie,yn;l,n;as7is7oG;nya,ya;a,isF;ey,ie,y;aZeUhadija,iMoLrIyG;lGra;a,ee,ie;istGy5B;a,en,iGy;!e,n48;ri,urtn9A;aMerLl99mIrGzzy;a,stG;en,in;!berlG;eGi,y;e,y;a,stC;!na,ra;el6PiJlInHrG;a,i,ri;d4na;ey,i,l9Qs2y;ra,s7;c8Wi5XlOma6nyakumari,rMss5LtJviByG;!e,lG;a,eG;e,i78;a5EeHhGi3PlEri0y;ar5Cer5Cie,leCr9Fy;!lyn73;a,en,iGl4Uyn;!ma,n31sF;ei72i,l2;a04eVilToMuG;anKdJliGst56;aHeGsF;!nAt0W;!n8X;i2Ry;a,iB;!anLcelEd5Vel71han6IlJni,sHva0yG;a,ce;eGie;fi0lEph4X;eGie;en,n1;!a,e,n36;!i10lG;!i0Z;anLle0nIrHsG;i5Qsi5Q;i,ri;!a,el6Pif1RnG;a,et5iGy;!e,f1P;a,e72iHnG;a,e71iG;e,n1;cLd1mi,nHqueliAsmin2Uvie4yAzG;min8;a8eHiG;ce,e,n1s;!lGsFt06;e,le;inHk2lEquelG;in1yn;da,ta;lPmNnMo0rLsHvaG;!na;aHiGob6U;do4;!belGdo4;!a,e,l2G;en1i0ma;a,di4es,gr5R;el9ogG;en1;a,eAia0o0se;aNeKilHoGyacin1N;ll2rten1H;aHdGlaH;a,egard;ry;ath0WiHlGnrietBrmiAst0W;en24ga;di;il75lKnJrGtt2yl75z6D;iGmo4Fri4G;etG;!te;aDnaD;ey,l2;aYeTiOlMold12rIwG;enGyne18;!dolE;acHetGisel9;a,chC;e,ieG;!la;adys,enGor3yn1Y;a,da,na;aJgi,lHna,ov71selG;a,e,le;da,liG;an;!n0;mYnIorgHrG;ald35i,m2Stru73;et5i5T;a,eGna;s1Nvieve;briel3Fil,le,rnet,yle;aReOio0loMrG;anHe9iG;da,e9;!cG;esHiGoi0G;n1s3V;!ca;!rG;a,en43;lHrnG;!an9;ec3ic3;rHtiGy8;ma;ah,rah;d0FileCkBl00mUn4ArRsMtLuKvG;aIelHiG;e,ta;in0Ayn;!ngel2H;geni1la,ni3R;h52ta;meral9peranJtG;eHhGrel6;er;l2Pr;za;iGma,nest29yn;cGka,n;a,ka;eJilImG;aGie,y;!liA;ee,i1y;lGrald;da,y;aTeRiMlLma,no4oJsIvG;a,iG;na,ra;a,ie;iGuiG;se;a,en,ie,y;a0c3da,nJsGzaH;aGe;!beG;th;!a,or;anor,nG;!a;in1na;en,iGna,wi0;e,th;aWeKiJoGul2U;lor51miniq3Yn30rGtt2;a,eCis,la,othGthy;ea,y;an09naDonAx2;anPbOde,eNiLja,lImetr3nGsir4U;a,iG;ce,se;a,iHla,orGphiA;es,is;a,l5J;dGrdG;re;!d4Mna;!b2CoraDra;a,d4nG;!a,e;hl3i0mMnKphn1rHvi1WyG;le,na;a,by,cHia,lG;a,en1;ey,ie;a,et5iG;!ca,el1Aka;arGia;is;a0Qe0Mh04i02lUoJrHynG;di,th3;istGy04;al,i0;lOnLrHurG;tn1D;aId28iGn28riA;!nG;a,e,n1;!l1S;n2sG;tanGuelo;ce,za;eGleC;en,t5;aIeoHotG;il4B;!pat4;ir8rIudG;et5iG;a,ne;a,e,iG;ce,sX;a4er4ndG;i,y;aPeMloe,rG;isHyG;stal;sy,tG;aHen,iGy;!an1e,n1;!l;lseHrG;!i8yl;a,y;nLrG;isJlHmG;aiA;a,eGot5;n1t5;!sa;d4el1PtG;al,el1O;cHlG;es5i3F;el3ilG;e,ia,y;iYlXmilWndVrNsLtGy6;aJeIhGri0;erGleCrEy;in1;ri0;li0ri0;a2GsG;a2Fie;a,iMlKmeIolHrG;ie,ol;!e,in1yn;lGn;!a,la;a,eGie,y;ne,y;na,sF;a0Di0D;a,e,l1;isBl2;tlG;in,yn;arb0CeYianXlVoTrG;andRePiIoHyG;an0nn;nwEok8;an2NdgKg0ItG;n27tG;!aHnG;ey,i,y;ny;etG;!t8;an0e,nG;da,na;i8y;bbi8nG;iBn2;ancGossom,ythe;a,he;ca;aRcky,lin9niBrNssMtIulaDvG;!erlG;ey,y;hHsy,tG;e,i0Zy8;!anG;ie,y;!ie;nGt7yl;adHiG;ce;et5iA;!triG;ce,z;a4ie,ra;aliy29b24d1Lg1Hi19l0Sm0Nn01rWsNthe0uJvIyG;anGes7;a,na;a,r25;drIgusHrG;el3;ti0;a,ey,i,y;hHtrG;id;aKlGt1P;eHi8yG;!n;e,iGy;gh;!nG;ti;iIleHpiB;ta;en,n1t5;an19elG;le;aYdWeUgQiOja,nHtoGya;inet5n3;!aJeHiGmI;e,ka;!mGt5;ar2;!belHliFmT;sa;!le;ka,sGta;a,sa;elGie;a,iG;a,ca,n1qG;ue;!t5;te;je6rea;la;!bHmGstas3;ar3;el;aIberHel3iGy;e,na;!ly;l3n9;da;aTba,eNiKlIma,yG;a,c3sG;a,on,sa;iGys0J;e,s0I;a,cHna,sGza;a,ha,on,sa;e,ia;c3is7jaIna,ssaIxG;aGia;!nd4;nd4;ra;ia;i0nHyG;ah,na;a,is,naD;c7da,leCmLnslKsG;haDlG;inGyW;g,n;!h;ey;ee;en;at7g2nG;es;ie;ha;aVdiSelLrG;eIiG;anLenG;a,e,ne;an0;na;aKeJiHyG;nn;a,n1;a,e;!ne;!iG;de;e,lEsG;on;yn;!lG;iAyn;ne;agaJbHiG;!gaI;ey,i8y;!e;il;ah",
        WeekDay: "true¦fri4mon4s2t1wed0;!nesd4;hurs2ues2;at0un1;!urd1;!d0;ay0;!s",
        Month: "true¦aBdec9feb7j2mar,nov9oct1sep0;!t8;!o8;an3u0;l1n0;!e;!y;!u1;!ru0;ary;!em0;ber;pr1ug0;!ust;!il",
        FirstName: "true¦aEblair,cCdevBj8k6lashawn,m3nelly,quinn,re2sh0;ay,e0iloh;a,lby;g1ne;ar1el,org0;an;ion,lo;as8e0r9;ls7nyatta,rry;am0ess1ude;ie,m0;ie;an,on;as0heyenne;ey,sidy;lex1ndra,ubr0;ey;is",
        LastName: "true¦0:34;1:39;2:3B;3:2Y;4:2E;5:30;a3Bb31c2Od2Ee2Bf25g1Zh1Pi1Kj1Ek17l0Zm0Nn0Jo0Gp05rYsMtHvFwCxBy8zh6;a6ou,u;ng,o;a6eun2Uoshi1Kun;ma6ng;da,guc1Zmo27sh21zaR;iao,u;a7eb0il6o3right,u;li3Bs1;gn0lk0ng,tanabe;a6ivaldi;ssilj37zqu2;a9h8i2Go7r6sui,urn0;an,ynisJ;lst0Prr1Uth;at1Uomps1;kah0Vnaka,ylor;aEchDeChimizu,iBmiAo9t7u6zabo;ar2lliv2AzuE;a6ein0;l23rm0;sa,u3;rn4th;lva,mmo24ngh;mjon4rrano;midt,neid0ulz;ito,n7sa6to;ki;ch2dLtos,z;amBeag1Zi9o7u6;bio,iz,sD;b6dri1MgIj0Tme24osevelt,ssi,ux;erts,ins1;c6ve0F;ci,hards1;ir2os;aEeAh8ic6ow20;as6hl0;so;a6illips;m,n1T;ders5et8r7t6;e0Nr4;ez,ry;ers;h21rk0t6vl4;el,te0J;baBg0Blivei01r6;t6w1O;ega,iz;a6eils1guy5ix1owak,ym1E;gy,ka6var1K;ji6muW;ma;aEeCiBo8u6;ll0n6rr0Bssolini,ñ6;oz;lina,oKr6zart;al0Me6r0U;au,no;hhail4ll0;rci0ssi6y0;!er;eWmmad4r6tsu07;in6tin2;!o;aCe8i6op2uo;!n6u;coln,dholm;fe7n0Qr6w0J;oy;bv6v6;re;mmy,rs5u;aBennedy,imuAle0Lo8u7wo6;k,n;mar,znets4;bay6vacs;asY;ra;hn,rl9to,ur,zl4;aAen9ha3imen2o6u3;h6nYu3;an6ns1;ss1;ki0Es5;cks1nsse0D;glesi9ke8noue,shik7to,vano6;u,v;awa;da;as;aBe8itchcock,o7u6;!a3b0ghNynh;a3ffmann,rvat;mingw7nde6rN;rs1;ay;ns5rrQs7y6;asDes;an4hi6;moJ;a9il,o8r7u6;o,tierr2;ayli3ub0;m2nzal2;nd6o,rcia;hi;erAis9lor8o7uj6;ita;st0urni0;es;ch0;nand2;d7insteHsposi6vaL;to;is1wards;aCeBi9omin8u6;bo6rand;is;gu2;az,mitr4;ov;lgado,vi;nkula,rw7vi6;es,s;in;aFhBlarkAo6;h5l6op0rbyn,x;em7li6;ns;an;!e;an8e7iu,o6ristens5u3we;i,ng,u3w,y;!n,on6u3;!g;mpb7rt0st6;ro;ell;aBe8ha3lanco,oyko,r6yrne;ooks,yant;ng;ck7ethov5nnett;en;er,ham;ch,h8iley,rn6;es,i0;er;k,ng;dDl9nd6;ers6rA;en,on,s1;on;eks7iy8var2;ez;ej6;ev;ams",
        MaleName: "true¦0:CE;1:BL;2:C2;3:BT;4:B5;5:9V;6:BZ;7:AT;8:BD;9:AX;A:AO;aB4bA8c97d87e7Gf6Yg6Gh5Wi5Ij4Lk4Bl3Rm2Pn2Eo28p22qu20r1As0Qt06u05v00wNxavi3yGzB;aBor0;cBh8Ine;hCkB;!aB1;ar51eB0;ass2i,oCuB;sDu25;nEsDusB;oBsC;uf;ef;at0g;aJeHiCoByaAP;lfgang,odrow;lBn1O;bDey,frBJlB;aA5iB;am,e,s;e89ur;i,nde5sB;!l7t1;de,lCrr6yB;l1ne;lBt3;a93y;aEern1iB;cCha0nceBrg9Bva0;!nt;ente,t5A;lentin49n8Yughn;lyss4Msm0;aTeOhKiIoErCyB;!l3ro8s1;av9QeBist0oy,um0;nt9Iv54y;bDd7XmBny;!as,mBoharu;aAYie,y;i83y;mBt9;!my,othy;adDeoCia7DomB;!as;!do7M;!de9;dErB;en8HrB;an8GeBy;ll,n8F;!dy;dgh,ic9Tnn3req,ts45;aRcotPeNhJiHoFpenc3tBur1Oylve8Hzym1;anDeBua7B;f0phAFvBwa7A;e57ie;!islaw,l7;lom1nA3uB;leyma8ta;dBl7Jm1;!n7;aDeB;lBrm0;d1t1;h6Sne,qu0Uun,wn,y8;aBbasti0k1Xl41rg40th,ymo9I;m9n;!tB;!ie,y;lCmBnti21q4Iul;!mAu4;ik,vato6V;aWeShe92iOoFuCyB;an,ou;b6LdCf9pe6QssB;!elAI;ol2Uy;an,bIcHdGel,geFh0landA9mEnDry,sCyB;!ce;coe,s;!a95nA;an,eo;l3Jr;e4Qg3n7olfo,ri68;co,ky;bAe9U;cBl7;ar5Oc5NhCkBo;!ey,ie,y;a85ie;gCid,ub6x,yBza;ansh,nS;g8WiB;na8Ss;ch5Yfa4lDmCndBpha4sh6Uul,ymo70;al9Yol2By;i9Ion;f,ph;ent2inB;cy,t1;aFeDhilCier62ol,reB;st1;!ip,lip;d9Brcy,tB;ar,e2V;b3Sdra6Ft44ul;ctav2Vliv3m96rFsCtBum8Uw6;is,to;aCc8SvB;al52;ma;i,l49vJ;athJeHiDoB;aBel,l0ma0r2X;h,m;cCg4i3IkB;h6Uola;hol5XkBol5X;!ol5W;al,d,il,ls1vB;il50;anBy;!a4i4;aWeTiKoFuCyB;l21r1;hamCr5ZstaB;fa,p4G;ed,mF;dibo,e,hamDis1XntCsBussa;es,he;e,y;ad,ed,mB;ad,ed;cGgu4kElDnCtchB;!e5;a78ik;house,o03t1;e,olB;aj;ah,hBk7;a4eB;al,l;hClv2rB;le,ri5v2;di,met;ck,hNlLmOnu4rHs1tDuricCxB;!imilian8Cwe5;e,io;eo,hCi52tB;!eo,hew,ia;eBis;us,w;cDio,k86lCqu6Gsha5tBv2;i2Hy;in,on;!el,oKus;achBcolm,ik;ai,y;amBdi,moud;adB;ou;aReNiMlo2RoIuCyB;le,nd1;cEiDkBth3;aBe;!s;gi,s;as,iaB;no;g0nn6RrenDuBwe5;!iB;e,s;!zo;am,on4;a7Bevi,la4SnDoBst3vi;!nB;!a60el;!ny;mCnBr67ur4Twr4T;ce,d1;ar,o4N;aIeDhaled,iBrist4Vu48y3B;er0p,rB;by,k,ollos;en0iEnBrmit,v2;!dCnBt5C;e0Yy;a5ri4N;r,th;na68rBthem;im,l;aYeQiOoDuB;an,liBst2;an,o,us;aqu2eJhnInGrEsB;eChBi7Bue;!ua;!ph;dBge;an,i,on;!aBny;h,s,th4X;!ath4Wie,nA;!l,sBy;ph;an,e,mB;!mA;d,ffGrDsB;sBus;!e;a5JemCmai8oBry;me,ni0O;i6Uy;!e58rB;ey,y;cHd6kGmFrDsCvi3yB;!d6s1;on,p3;ed,od,rBv4M;e4Zod;al,es,is1;e,ob,ub;k,ob,quB;es;aNbrahMchika,gKkeJlija,nuIrGsDtBv0;ai,sB;uki;aBha0i6Fma4sac;ac,iaB;h,s;a,vinBw2;!g;k,nngu52;!r;nacBor;io;im;in,n;aJeFina4VoDuByd56;be25gBmber4CsD;h,o;m3ra33sBwa3X;se2;aDctCitCn4ErB;be20m0;or;th;bKlJmza,nIo,rDsCyB;a43d6;an,s0;lEo4FrDuBv7;hi40ki,tB;a,o;is1y;an,ey;k,s;!im;ib;aQeMiLlenKoIrEuB;illerCsB;!tavo;mo;aDegBov3;!g,orB;io,y;dy,h57nt;nzaBrd1;lo;!n;lbe4Qno,ovan4R;ne,oDrB;aBry;ld,rd4U;ffr7rge;bri4l6rBv2;la1Zr3Eth,y;aReNiLlJorr0IrB;anDedBitz;!dAeBri24;ri23;cDkB;!ie,lB;in,yn;esJisB;!co,zek;etch3oB;yd;d4lBonn;ip;deriDliCng,rnB;an01;pe,x;co;bi0di;arZdUfrTit0lNmGnFo2rCsteb0th0uge8vBym6zra;an,ere2V;gi,iCnBrol,v2w2;est45ie;c07k;och,rique,zo;aGerFiCmB;aFe2P;lCrB;!h0;!io;s1y;nu4;be09d1iEliDmCt1viBwood;n,s;er,o;ot1Ts;!as,j43sB;ha;a2en;!dAg32mEuCwB;a25in;arB;do;o0Su0S;l,nB;est;aYeOiLoErDuCwByl0;ay8ight;a8dl7nc0st2;ag0ew;minFnDri0ugCyB;le;!l03;!a29nBov0;e5ie,y;go,icB;!k;armuCeBll1on,rk;go;id;anIj0lbeHmetri9nFon,rEsDvCwBxt3;ay8ey;en,in;hawn,mo08;ek,ri0F;is,nBv3;is,y;rt;!dB;re;lKmInHrDvB;e,iB;!d;en,iDne5rByl;eBin,yl;l2Vn;n,o,us;!e,i4ny;iBon;an,en,on;e,lB;as;a06e04hWiar0lLoGrEuCyrB;il,us;rtB;!is;aBistobal;ig;dy,lEnCrB;ey,neli9y;or,rB;ad;by,e,in,l2t1;aGeDiByI;fBnt;fo0Ct1;meCt9velaB;nd;nt;rDuCyB;!t1;de;enB;ce;aFeErisCuB;ck;!tB;i0oph3;st3;d,rlBs;eBie;s,y;cBdric,s11;il;lEmer1rB;ey,lCro5y;ll;!os,t1;eb,v2;ar02eUilTlaSoPrCuByr1;ddy,rtI;aJeEiDuCyB;an,ce,on;ce,no;an,ce;nCtB;!t;dCtB;!on;an,on;dCndB;en,on;!foBl7y;rd;bCrByd;is;!by;i8ke;al,lA;nFrBshoi;at,nCtB;!r10;aBie;rd0S;!edict,iCjam2nA;ie,y;to;n7rBt;eBy;tt;ey;ar0Xb0Nd0Jgust2hm0Gid6ja0ElZmXnPputsiOrFsaEuCveBya0ziz;ry;gust9st2;us;hi;aIchHi4jun,maFnDon,tBy0;hBu06;ur;av,oB;ld;an,nd0A;el;ie;ta;aq;dGgel05tB;hoEoB;i8nB;!i02y;ne;ny;reBy;!as,s,w;ir,mBos;ar;an,beOd6eIfFi,lEonDphonHt1vB;aMin;on;so,zo;an,en;onCrB;edP;so;c,jaEksandDssaExB;!and3;er;ar,er;ndB;ro;rtH;ni;en;ad,eB;d,t;in;aColfBri0vik;!o;mBn;!a;dFeEraCuB;!bakr,lfazl;hBm;am;!l;allEel,oulaye,ulB;!lCrahm0;an;ah,o;ah;av,on",
        Person: "true¦ashton kutchSbRcMdKeIgastNhGinez,jEkDleCmBnettJoAp8r4s3t2v0;a0irgin maG;lentino rossi,n go3;heresa may,iger woods,yra banks;addam hussain,carlett johanssJlobodan milosevic,uB;ay romano,eese witherspoIo1ush limbau0;gh;d stewart,nald0;inho,o;a0ipJ;lmIris hiltD;prah winfrFra;essiaen,itt romnEubarek;bron james,e;anye west,iefer sutherland,obe bryant;aime,effers8k rowli0;ng;alle ber0itlBulk hogan;ry;ff0meril lagasse,zekiel;ie;a0enzel washingt2ick wolf;lt1nte;ar1lint0ruz;on;dinal wols1son0;! palm2;ey;arack obama,rock;er",
        Verb: "true¦awak9born,cannot,fr8g7h5k3le2m1s0wors9;e8h3;ake sure,sg;ngth6ss6;eep tabs,n0;own;as0e2;!t2;iv1onna;ight0;en",
        PhrasalVerb: "true¦0:71;1:6P;2:7D;3:73;4:6I;5:7G;6:75;7:6O;8:6B;9:6C;A:5H;B:70;C:6Z;a7Gb62c5Cd59e57f45g3Nh37iron0j33k2Yl2Km2Bn29o27p1Pr1Es09tQuOvacuum 1wGyammerCzD;eroAip EonD;e0k0;by,up;aJeGhFiEorDrit52;d 1k2Q;mp0n49pe0r8s8;eel Bip 7K;aEiD;gh 06rd0;n Br 3C;it 5Jk8lk6rm 0Qsh 73t66v4O;rgeCsD;e 9herA;aRePhNiJoHrFuDype 0N;ckArn D;d2in,o3Fup;ade YiDot0y 32;ckle67p 79;ne66p Ds4C;d2o6Kup;ck FdEe Dgh5Sme0p o0Dre0;aw3ba4d2in,up;e5Jy 1;by,o6U;ink Drow 5U;ba4ov7up;aDe 4Hll4N;m 1r W;ckCke Elk D;ov7u4N;aDba4d2in,o30up;ba4ft7p4Sw3;a0Gc0Fe09h05i02lYmXnWoVpSquare RtJuHwD;earFiD;ngEtch D;aw3ba4o6O; by;ck Dit 1m 1ss0;in,up;aIe0RiHoFrD;aigh1LiD;ke 5Xn2X;p Drm1O;by,in,o6A;n2Yr 1tc3H;c2Xmp0nd Dr6Gve6y 1;ba4d2up;d2o66up;ar2Uell0ill4TlErDurC;ingCuc8;a32it 3T;be4Brt0;ap 4Dow B;ash 4Yoke0;eep EiDow 9;c3Mp 1;in,oD;ff,v7;gn Eng2Yt Dz8;d2o5up;in,o5up;aFoDu4E;ot Dut0w 5W;aw3ba4f36o5Q;c2EdeAk4Rve6;e Hll0nd GtD; Dtl42;d2in,o5upD;!on;aw3ba4d2in,o1Xup;o5to;al4Kout0rap4K;il6v8;at0eKiJoGuD;b 4Dle0n Dstl8;aDba4d2in52o3Ft2Zu3D;c1Ww3;ot EuD;g2Jnd6;a1Wf2Qo5;ng 4Np6;aDel6inAnt0;c4Xd D;o2Su0C;aQePiOlMoKrHsyc29uD;ll Ft D;aDba4d2in,o1Gt33up;p38w3;ap37d2in,o5t31up;attleCess EiGoD;p 1;ah1Gon;iDp 52re3Lur44wer 52;nt0;ay3YuD;gAmp 9;ck 52g0leCn 9p3V;el 46ncilA;c3Oir 2Hn0ss FtEy D;ba4o4Q; d2c1X;aw3ba4o11;pDw3J;e3It B;arrow3Serd0oD;d6te3R;aJeHiGoEuD;ddl8ll36;c16p 1uth6ve D;al3Ad2in,o5up;ss0x 1;asur8lt 9ss D;a19up;ke Dn 9r2Zs1Kx0;do,o3Xup;aOeMiHoDuck0;a16c36g 0AoDse0;k Dse34;aft7ba4d2forw2Ain3Vov7uD;nd7p;e GghtFnEsDv1T;ten 4D;e 1k 1; 1e2Y;ar43d2;av1Ht 2YvelD; o3L;p 1sh DtchCugh6y1U;in3Lo5;eEick6nock D;d2o3H;eDyA;l2Hp D;aw3ba4d2fSin,o05to,up;aFoEuD;ic8mpA;ke2St2W;c31zz 1;aPeKiHoEuD;nker2Ts0U;lDneArse2O;d De 1;ba4d2fast,oZup;de Et D;ba4on,up;aw3o5;aDlp0;d Fr Dt 1;fDof;rom;in,oO;cZm 1nDve it;d Dg 27kerF;d2in,o5;aReLive Jloss1VoFrEunD; f0M;in39ow 23; Dof 0U;aEb17it,oDr35t0Ou12;ff,n,v7;bo5ft7hJw3;aw3ba4d2in,oDup,w3;ff,n,ut;a17ek0t D;aEb11d2oDr2Zup;ff,n,ut,v7;cEhDl1Pr2Xt,w3;ead;ross;d aEnD;g 1;bo5;a08e01iRlNoJrFuD;cDel 1;k 1;eEighten DownCy 1;aw3o2L;eDshe1G; 1z8;lFol D;aDwi19;bo5r2I;d 9;aEeDip0;sh0;g 9ke0mDrD;e 2K;gLlJnHrFsEzzD;le0;h 2H;e Dm 1;aw3ba4up;d0isD;h 1;e Dl 11;aw3fI;ht ba4ure0;eInEsD;s 1;cFd D;fDo1X;or;e B;dQl 1;cHll Drm0t0O;apYbFd2in,oEtD;hrough;ff,ut,v7;a4ehi1S;e E;at0dge0nd Dy8;o1Mup;o09rD;ess 9op D;aw3bNin,o15;aShPlean 9oDross But 0T;me FoEuntD; o1M;k 1l6;aJbIforGin,oFtEuD;nd7;ogeth7;ut,v7;th,wD;ard;a4y;pDr19w3;art;eDipA;ck BeD;r 1;lJncel0rGsFtch EveA; in;o16up;h Bt6;ry EvD;e V;aw3o12;l Dm02;aDba4d2o10up;r0Vw3;a0He08l01oSrHuD;bbleFcklTilZlEndlTrn 05tDy 10zz6;t B;k 9; ov7;anMeaKiDush6;ghHng D;aEba4d2forDin,o5up;th;bo5lDr0Lw3;ong;teD;n 1;k D;d2in,o5up;ch0;arKgJil 9n8oGssFttlEunce Dx B;aw3ba4;e 9; ar0B;k Bt 1;e 1;d2up; d2;d 1;aIeed0oDurt0;cFw D;aw3ba4d2o5up;ck;k D;in,oK;ck0nk0st6; oJaGef 1nd D;d2ov7up;er;up;r0t D;d2in,oDup;ff,ut;ff,nD;to;ck Jil0nFrgEsD;h B;ainCe B;g BkC; on;in,o5; o5;aw3d2o5up;ay;cMdIsk Fuction6; oD;ff;arDo5;ouD;nd;d D;d2oDup;ff,n;own;t D;o5up;ut",
        Modal: "true¦c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to;ay,ight,ust;an,o0;uld",
        Adjective: "true¦0:75;1:7K;2:7Q;3:7J;4:7C;5:5C;6:48;7:49;8:4S;9:61;A:7H;B:70;C:6Z;D:73;E:5X;a6Jb65c5Rd57e4Tf49g41h3Qi35j33k32l2Rm2Gn27o1Rp1Aquack,r10s0Gt09uQvNwFyear5;arp0eJholeIiHoF;man5oFu6C;d6Ezy;despr75s5G;!sa7;eGlFste26;co1Il o4L;!k5;aGiFola4B;b7Tce versa,ol55;ca2gabo63nilla;ltWnJpGrb5Asu4tterF;!moC; f34b1OpGsFti1H;ca7et,ide dMtairs;er,i3N;aPbeco6Rconvin27deMeLfair,ivers4knKprecedYrIsGwF;iel20ritt5Z;i1VuF;pervis0specti3;eFu5;cognLgul6Hl6H;own;ndi3v5Txpect0;cid0rF;!grou5OsF;iz0tood;b7ppeaLssu6GuthorF;iz0;i24ra;aJeHhough4PoGrF;i1oubl0;geth8p,rpB;en5QlFm50rr2Ust0;li3;boo,lFn;ent0;aXcWeUhTiRmug,nobbi3EoPpOqueami3EtJuFymb64;bHi gener55pFrprisi3;erFre0L;! dup8b,i29;du0seq4U;anda6UeIi0PrFy38;aightFip0; fFfF;or5B;adfaCreotyp0;aEec2Gir1JlendBot on; call0le,mb8phist1XrFu0Xvi42;dBry;gnifica2nF;ceEg7;am2Pe8ocki3ut;cFda1em5lfi2Yni1Wpa69re6;o1Gr3W;at58ient28reec58;cr0me,ns serif;aMeIiGoF;buCtt4UuSy4;ghtFv4;!-29f9;ar,bel,condi1du63fres52lHpublic3WsFtard0;is48oF;lu1na2;e1Euc46;bBciF;al,st;aQeOicayu6lacBopuliCrGuF;bl5Amp0;eJiGoF;!b0AfuDmi32p8;mGor,sFva1;ti6;a4We;ciDmF;a0IiF;er,um;ac20rFti1;feAma2Uplexi3v34;rFst;allelHtF;-tiFi4;me;!ed;bQffOkNld fashion0nMpLrg1Hth8utKvF;al,erF;!aHniGt,wF;eiFrouF;ght;ll;do0Ver,g2Msi46;en,posi1; boa5Gg2Kli6;!ay; gua5EbFli6;eat;eHsF;cFer0Hole1;e6uE;d2Tse;ak0eMiLoFua4P;nJrGtF;ab7;thF;!eF;rn;chala2descri50stop;ght5;arby,cessa3Xighbor5xt;aNeLiIoFultip7;bi7derGlFnth5ot,st;dy;a1n;nFx0;iaFor;tuE;di4FnaFre;ci3;cFgenta,in,j03keshift,le,mmoth,ny,sculi6;abEho;aOeJiGoFu13;uti12vi3;mGteraF;l,te;it0;ftIgFth4;al,eGitiF;ma1;nda3D;!-0C;nguBst,tt8;ap1Tind5no0A;agg0uF;niOstifi0veni7;de4gno4Clleg4mSnHpso 1WrF;a1releF;va2; NaMbr0corLdJfluenTiTnIsHtF;aAenDoxF;ic37;a6i2S;a1er,oce2;iGoF;or;reA;deq3Kppr2Z;fFsitu,vitro;ro2;mJpF;arHerfeAoFrop8;li1rtF;a2ed;ti4;eFi0R;d2RnD;aKelJiHoFumdr3C;neCok0rrFs07ur5;if2T;ghfalut1PspF;an2R;liZpf9;lInHrF;d05roF;wi3;dy,gi3;f,low0;ainf9ener2Kiga23lLoKraHuF;ilFng ho;ty;cGtF;ef9is;ef9;ne,od;ea2Eob4;aUeOinNlMoHrF;a1UeFoz1L;e2Eq13tf9;oHrF; keeps,eFm8tuna1;g05ign;liF;sh;ag30ue2;al,i1;dJmGrF;ti7;a7ini6;ne;le; up;bl0i2lDr Gux,voF;ri1uri1;oFreac1F;ff;aOfficie2lNmiMnKreAthere4veJxF;aAcess,peHtraGuF;be2Ml0I;!va1E;ct0rt;n,ryday; Fcouragi3tiE;rou1sui1;ne2;abo23dQe18i1;g8sF;t,ygF;oi3;er;aVeNiHoFrea15ue;mina2ne,ubF;le,tf9;dact1Bfficu1OsGvF;erD;creHeas0gruntl0honeCordGtF;a2ress0;er5;et; LadpKfJgene1PliHrang0spe1PtGvoF;ut;ail0ermin0;be1Mca1ghF;tf9;ia2;an;facto;i5magFngeroZs0I;ed,i3;ly;ertaRhief,ivil,oHrF;aFowd0u0H;mp0v02z0;loNmLnGoi3rrFve0P;eAu1I;cre1grIsHtF;emFra0F;po0D;ta2;ue2;mer08pleF;te,x;ni4ss4;in;aPeLizarElJoGrF;and new,isk,okP;gGna fiWttom,urgeoF;is;us;ank,iI;re;autif9hiGlov0nFst,yoG;eVt;nd;ul;ckGnkru0XrrF;en;!wards; priori,b0Nc0Kd0AfraBg05h04lZma06ntiquYpUrOsMttracti07utheLvIwF;aGkF;wa0U;ke,re;ant garGerF;age;de;ntV;leep,tonisF;hi3;ab,bitIroHtiF;fiF;ci4;ga2;raF;ry;pFt;are2etiPrF;oprF;ia1;at0;arIcohGeFiMl,oof;rt;olF;ic;mi3;ead;ainCgressiGoniF;zi3;ve;st;id; MeKuJvF;aGerD;se;nc0;ed;lt;pt,qF;ua1;hoc,infinitF;um;cuGtu4u1;al;ra1;erPlOoMruLsGuF;nda2;e2oGtraA;ct;lu1rbi3;ng;te;pt;aFve;rd;aze,e;ra2;nt",
        Comparable: "true¦0:40;1:4H;2:44;3:4A;4:2X;5:3W;a4Nb43c3Nd3Ce34f2Qg2Eh23i1Uj1Tk1Ql1Hm1Bn15o13p0Tqu0Rr0IsRtKuIvFw7y6za11;ell26ou3;aBe9hi1Xi7r6;o3y;ck0Mde,l6n1ry,se;d,y;a6i4Lt;k,ry;n1Sr6sI;m,y;a7e6ulgar;nge5rda2xi3;gue,in,st;g0n6pco3Lse5;like0ti1;aAen9hi8i7ough,r6;anqu2Pen1ue;dy,g3Tme0ny,r09;ck,n,rs2Q;d41se;ll,me,rt,s6wd46;te5;aVcarUeThRiQkin0FlMmKoHpGqua1GtAu7w6;eet,ift;b7dd14per0Gr6;e,re2I;sta2Gt4;aAe9iff,r7u6;pXr1;a6ict,o3;ig3Gn0V;a1ep,rn;le,rk;e23i3Gright0;ci29ft,l7o6re,ur;n,thi3;emn,id;a6el0ooth;ll,rt;e8i6ow,y;ck,g36m6;!y;ek,nd3E;ck,l0mp4;a6iTort,rill,y;dy,ll0Yrp;cu0Sve0Sxy;ce,ed,y;d,fe,int0l1Wv15;aBe9i8o6ude;mantic,o1Jsy,u6;gh,nd;ch,pe,tzy;a6d,mo0I;dy,l;gg7ndom,p6re,w;id;ed;ai2i6;ck,et;aEhoDi1RlCoBr8u6;ny,r6;e,p4;egna2ic7o6;fouZud;ey,k0;li05or,te1C;ain,easa2;ny;in5le;dd,f6i0ld,ranR;fi11;aAe8i7o6;b4isy,rm16sy;ce,mb4;a6w;r,t;ive,rr02;aAe8ild,o7u6;nda1Ate;ist,o1;a6ek,llY;n,s0ty;d,tuR;aCeBi9o6ucky;f0Vn7o1Eu6ve0w18y0U;d,sy;e0g;g1Uke0tt4v6;e0i3;an,wd;me,r6te;ge;e7i6;nd;en;ol0ui1P;cy,ll,n6;sBt6;e6ima8;llege2r6;es7media6;te;ti3;ecu6ta2;re;aEeBiAo8u6;ge,m6ng1R;b4id;ll6me0t;ow;gh,l0;a6f04sita2;dy,v6;en0y;nd1Hppy,r6te5;d,sh;aGenFhDiClBoofy,r6;a9e8is0o6ue1E;o6ss;vy;at,en,y;nd,y;ad,ib,ooI;a2d1;a6o6;st0;t4uiY;u1y;aIeeb4iDlat,oAr8u6;ll,n6r14;!ny;aHe6iend0;e,sh;a7r6ul;get5mG;my;erce8n6rm,t;an6e;ciC;! ;le;ir,ke,n0Fr,st,t,ulA;aAerie,mp9sse7v6xtre0Q;il;nti6;al;ty;r7s6;tern,y;ly,th0;aFeCi9r7u6;ll,mb;u6y;nk;r7vi6;ne;e,ty;a6ep,nD;d6f,r;!ly;mp,pp03rk;aHhDlAo8r7u6;dd0r0te;isp,uel;ar6ld,mmon,ol,st0ward0zy;se;e6ou1;a6vW;n,r;ar8e6il0;ap,e6;sy;mi3;gey,lm8r6;e5i3;ful;!i3;aNiLlIoEr8u6;r0sy;ly;aAi7o6;ad,wn;ef,g7llia2;nt;ht;sh,ve;ld,r7un6;cy;ed,i3;ng;a7o6ue;nd,o1;ck,nd;g,tt6;er;d,ld,w1;dy;bsu9ng8we6;so6;me;ry;rd",
        TextValue: "true¦bMeIfChundredNmMnin9one,qu8s6t0zeroN;enMh3rLw0;e0o;l0ntC;fGve;ir0ousandIree;d,t5;e0ix7;cond,ptEven6xtE;adrDintD;e0th;!t0;e9ie8y;i3o0;rt1ur0;!t2;ie4y;ft0rst,ve;e3h,ie2y;ight0lev2;!e1h,ie0y;th;en1;illion0;!th",
        Ordinal: "true¦bGeDf9hundredHmGnin7qu6s4t0zeroH;enGh1rFwe0;lfFn9;ir0ousandE;d,t4;e0ixt9;cond,ptAvent8xtA;adr9int9;et0th;e6ie8;i2o0;r0urt3;tie5;ft1rst;ight0lev1;e0h,ie2;en1;illion0;th",
        Cardinal: "true¦bGeDf7hundred,mGnine9one,qu6s4t0zero;en,h2rFw0;e0o;lve,n7;irt8ousand,ree;e0ix4;ptAven3xtA;adr9int9;i3o0;r1ur0;!t2;ty;ft0ve;e2y;ight0lev1;!e0y;en;illion",
        Expression: "true¦a02b01dXeVfuck,gShLlImHnGoDpBshAu7voi04w3y0;a1eLu0;ck,p;!a,hoo,y;h1ow,t0;af,f;e0oa;e,w;gh,h0;! 0h,m;huh,oh;eesh,hh,it;ff,hew,l0sst;ease,z;h1o0w,y;h,o,ps;!h;ah,ope;eh,mm;m1ol0;!s;ao,fao;a4e2i,mm,oly1urr0;ah;! mo6;e,ll0y;!o;ha0i;!ha;ah,ee,o0rr;l0odbye;ly;e0h,t cetera,ww;k,p;'oh,a0uh;m0ng;mit,n0;!it;ah,oo,ye; 1h0rgh;!em;la",
        Adverb: "true¦a07by 05d01eYfShQinPjustOkinda,mMnJoEpCquite,r9s5t2up1very,w0Bye0;p,s; to,wards5;h1o0wiO;o,t6ward;en,us;everal,o0uch;!me1rt0; of;hXtimes,w07;a1e0;alS;ndomRthN;ar excellDer0oint blank; Mhaps;f3n0;ce0ly;! 0;ag00moU; courHten;ewJo0; longEt 0;onHwithstanding;aybe,eanwhiAore0;!ovB;! aboS;deed,steT;en0;ce;or2u0;l9rther0;!moH; 0ev3;examp0good,suF;le;n mas1v0;er;se;e0irect1; 1finite0;ly;ju7trop;far,n0;ow; CbroBd nauseam,gAl5ny2part,side,t 0w3;be5l0mo5wor5;arge,ea4;mo1w0;ay;re;l 1mo0one,ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori",
        Preposition: "true¦'o,-,aKbHcGdFexcept,fEinDmidPnotwithstandiQoBpRqua,sAt6u3vi2w0;/o,hereMith0;!in,oQ;a,s-a-vis;n1p0;!on;like,til;h0ill,owards;an,r0;ough0u;!oI;ans,ince,o that;',f0n1ut;!f;!to;or,rom;espite,own,u3;hez,irca;ar1e0oAy;low,sides,tween;ri6;',bo7cross,ft6lo5m3propos,round,s1t0;!op;! long 0;as;id0ong0;!st;ng;er;ut",
        Determiner: "true¦aAboth,d8e5few,l3mu7neiCown,plenty,some,th2various,wh0;at0ich0;evB;at,e3is,ose;a,e0;!ast,s;a1i6l0nough,very;!se;ch;e0u;!s;!n0;!o0y;th0;er"
    }, lt = ["Person", "Place", "Organization"], ct = {
        Noun: {
            notA: ["Verb", "Adjective", "Adverb"]
        },
        Singular: {
            isA: "Noun",
            notA: "Plural"
        },
        ProperNoun: {
            isA: "Noun"
        },
        Person: {
            isA: ["ProperNoun", "Singular"],
            notA: ["Place", "Organization", "Date"]
        },
        FirstName: {
            isA: "Person"
        },
        MaleName: {
            isA: "FirstName",
            notA: ["FemaleName", "LastName"]
        },
        FemaleName: {
            isA: "FirstName",
            notA: ["MaleName", "LastName"]
        },
        LastName: {
            isA: "Person",
            notA: ["FirstName"]
        },
        Honorific: {
            isA: "Noun",
            notA: ["FirstName", "LastName"]
        },
        Place: {
            isA: "Singular",
            notA: ["Person", "Organization"]
        },
        Country: {
            isA: ["Place", "ProperNoun"],
            notA: ["City"]
        },
        City: {
            isA: ["Place", "ProperNoun"],
            notA: ["Country"]
        },
        Region: {
            isA: ["Place", "ProperNoun"]
        },
        Address: {
            isA: "Place"
        },
        Organization: {
            isA: ["Singular", "ProperNoun"],
            notA: ["Person", "Place"]
        },
        SportsTeam: {
            isA: "Organization"
        },
        School: {
            isA: "Organization"
        },
        Company: {
            isA: "Organization"
        },
        Plural: {
            isA: "Noun",
            notA: ["Singular"]
        },
        Uncountable: {
            isA: "Noun"
        },
        Pronoun: {
            isA: "Noun",
            notA: lt
        },
        Actor: {
            isA: "Noun",
            notA: lt
        },
        Activity: {
            isA: "Noun",
            notA: ["Person", "Place"]
        },
        Unit: {
            isA: "Noun",
            notA: lt
        },
        Demonym: {
            isA: ["Noun", "ProperNoun"],
            notA: lt
        },
        Possessive: {
            isA: "Noun"
        }
    }, ht = {
        Verb: {
            notA: ["Noun", "Adjective", "Adverb", "Value"]
        },
        PresentTense: {
            isA: "Verb",
            notA: ["PastTense", "Copula", "FutureTense"]
        },
        Infinitive: {
            isA: "PresentTense",
            notA: ["PastTense", "Gerund"]
        },
        Gerund: {
            isA: "PresentTense",
            notA: ["PastTense", "Copula", "FutureTense"]
        },
        PastTense: {
            isA: "Verb",
            notA: ["FutureTense"]
        },
        FutureTense: {
            isA: "Verb"
        },
        Copula: {
            isA: "Verb"
        },
        Modal: {
            isA: "Verb",
            notA: ["Infinitive"]
        },
        PerfectTense: {
            isA: "Verb",
            notA: "Gerund"
        },
        Pluperfect: {
            isA: "Verb"
        },
        Participle: {
            isA: "Verb"
        },
        PhrasalVerb: {
            isA: "Verb"
        },
        Particle: {
            isA: "PhrasalVerb"
        }
    }, ft = {
        Value: {
            notA: ["Verb", "Adjective", "Adverb"]
        },
        Ordinal: {
            isA: "Value",
            notA: ["Cardinal"]
        },
        Cardinal: {
            isA: "Value",
            notA: ["Ordinal"]
        },
        RomanNumeral: {
            isA: "Cardinal",
            notA: ["Ordinal", "TextValue"]
        },
        TextValue: {
            isA: "Value",
            notA: ["NumericValue"]
        },
        NumericValue: {
            isA: "Value",
            notA: ["TextValue"]
        },
        Money: {
            isA: "Cardinal"
        },
        Percent: {
            isA: "Value"
        }
    }, dt = ["Noun", "Verb", "Adjective", "Adverb", "Value"], pt = {
        Adjective: {
            notA: ["Noun", "Verb", "Adverb", "Value"]
        },
        Comparable: {
            isA: ["Adjective"]
        },
        Comparative: {
            isA: ["Adjective"]
        },
        Superlative: {
            isA: ["Adjective"],
            notA: ["Comparative"]
        },
        NumberRange: {
            isA: ["Contraction"]
        },
        Adverb: {
            notA: ["Noun", "Verb", "Adjective", "Value"]
        },
        Date: {
            notA: ["Verb", "Conjunction", "Adverb", "Preposition", "Adjective"]
        },
        Month: {
            isA: ["Date", "Singular"],
            notA: ["Year", "WeekDay", "Time"]
        },
        WeekDay: {
            isA: ["Date", "Noun"]
        },
        Time: {
            isA: ["Date"],
            notA: ["Value"]
        },
        Determiner: {
            notA: dt
        },
        Conjunction: {
            notA: dt
        },
        Preposition: {
            notA: dt
        },
        QuestionWord: {
            notA: ["Determiner"]
        },
        Currency: {},
        Expression: {
            notA: ["Noun", "Adjective", "Verb", "Adverb"]
        },
        Abbreviation: {},
        Url: {
            notA: ["HashTag", "PhoneNumber", "Verb", "Adjective", "Value", "AtMention", "Email"]
        },
        PhoneNumber: {
            notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention", "Email"]
        },
        HashTag: {},
        AtMention: {
            isA: ["Noun"],
            notA: ["HashTag", "Verb", "Adjective", "Value", "Email"]
        },
        Emoji: {
            notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
        },
        Emoticon: {
            notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
        },
        Email: {
            notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
        },
        Auxiliary: {
            notA: ["Noun", "Adjective", "Value"]
        },
        Acronym: {
            notA: ["Plural", "RomanNumeral"]
        },
        Negative: {
            notA: ["Noun", "Adjective", "Value"]
        },
        Condition: {
            notA: ["Verb", "Adjective", "Noun", "Value"]
        }
    }, mt = {
        Noun: "blue",
        Verb: "green",
        Negative: "green",
        Date: "red",
        Value: "red",
        Adjective: "magenta",
        Preposition: "cyan",
        Conjunction: "cyan",
        Determiner: "cyan",
        Adverb: "cyan"
    }, gt = function(e) {
        return Object.keys(e).forEach((function(t) {
            mt[t] ? e[t].color = mt[t] : e[t].isA.some((function(n) {
                return !!mt[n] && (e[t].color = mt[n],
                !0)
            }
            ))
        }
        )),
        e
    }, vt = function(e) {
        return Object.keys(e).forEach((function(t) {
            for (var n = e[t], r = n.isA.length, i = 0; i < r; i++) {
                var a = n.isA[i];
                e[a] && (n.isA = n.isA.concat(e[a].isA))
            }
            n.isA = function(e) {
                return e.filter((function(e, t, n) {
                    return n.indexOf(e) === t
                }
                ))
            }(n.isA)
        }
        )),
        e
    }, bt = function(e) {
        var t = Object.keys(e);
        return t.forEach((function(n) {
            var r = e[n];
            r.notA = r.notA || [],
            r.isA.forEach((function(t) {
                if (e[t] && e[t].notA) {
                    var n = "string" == typeof e[t].notA ? [e[t].isA] : e[t].notA || [];
                    r.notA = r.notA.concat(n)
                }
            }
            ));
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                -1 !== e[a].notA.indexOf(n) && r.notA.push(a)
            }
            r.notA = function(e) {
                return e.filter((function(e, t, n) {
                    return n.indexOf(e) === t
                }
                ))
            }(r.notA)
        }
        )),
        e
    }, yt = function(e) {
        var t = Object.keys(e);
        return t.forEach((function(n) {
            var r = e[n];
            r.lineage = [];
            for (var i = 0; i < t.length; i++)
                -1 !== e[t[i]].isA.indexOf(n) && r.lineage.push(t[i])
        }
        )),
        e
    }, wt = function(e) {
        return e = function(e) {
            return Object.keys(e).forEach((function(t) {
                var n = e[t];
                n.isA = n.isA || [],
                "string" == typeof n.isA && (n.isA = [n.isA]),
                n.notA = n.notA || [],
                "string" == typeof n.notA && (n.notA = [n.notA])
            }
            )),
            e
        }(e),
        e = vt(e),
        e = bt(e),
        e = gt(e),
        e = yt(e)
    }, At = function(e, t) {
        Object.keys(e).forEach((function(n) {
            t[n] = e[n]
        }
        ))
    }, kt = function() {
        var e = {};
        return At(ct, e),
        At(ht, e),
        At(ft, e),
        At(pt, e),
        e = wt(e)
    }(), $t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", Pt = $t.split("").reduce((function(e, t, n) {
        return e[t] = n,
        e
    }
    ), {}), Ct = function(e) {
        if (void 0 !== Pt[e])
            return Pt[e];
        for (var t = 0, n = 1, r = 36, i = 1; n < e.length; t += r,
        n++,
        r *= 36)
            ;
        for (var a = e.length - 1; a >= 0; a--,
        i *= 36) {
            var o = e.charCodeAt(a) - 48;
            o > 10 && (o -= 7),
            t += o * i
        }
        return t
    }, Et = function(e, t, n) {
        var r = Ct(t);
        return r < e.symCount ? e.syms[r] : n + r + 1 - e.symCount
    }, xt = function(e) {
        var t = {
            nodes: e.split(";"),
            syms: [],
            symCount: 0
        };
        return e.match(":") && function(e) {
            for (var t = new RegExp("([0-9A-Z]+):([0-9A-Z]+)"), n = 0; n < e.nodes.length; n++) {
                var r = t.exec(e.nodes[n]);
                if (!r) {
                    e.symCount = n;
                    break
                }
                e.syms[Ct(r[1])] = Ct(r[2])
            }
            e.nodes = e.nodes.slice(e.symCount, e.nodes.length)
        }(t),
        function(e) {
            var t = [];
            return function n(r, i) {
                var a = e.nodes[r];
                "!" === a[0] && (t.push(i),
                a = a.slice(1));
                for (var o = a.split(/([A-Z0-9,]+)/g), s = 0; s < o.length; s += 2) {
                    var u = o[s]
                      , l = o[s + 1];
                    if (u) {
                        var c = i + u;
                        if ("," !== l && void 0 !== l)
                            n(Et(e, l, r), c);
                        else
                            t.push(c)
                    }
                }
            }(0, ""),
            t
        }(t)
    }, jt = function(e) {
        var t = e.split("|").reduce((function(e, t) {
            var n = t.split("¦");
            return e[n[0]] = n[1],
            e
        }
        ), {})
          , n = {};
        return Object.keys(t).forEach((function(e) {
            var r = xt(t[e]);
            "true" === e && (e = !0);
            for (var i = 0; i < r.length; i++) {
                var a = r[i];
                !0 === n.hasOwnProperty(a) ? !1 === Array.isArray(n[a]) ? n[a] = [n[a], e] : n[a].push(e) : n[a] = e
            }
        }
        )),
        n
    }, Gt = function(e, t, n) {
        void 0 !== n[e] ? ("string" == typeof n[e] && (n[e] = [n[e]]),
        n[e].push(t)) : n[e] = t
    }, Nt = Gt, Ft = function(e, t, n) {
        var r = n.words
          , i = n.transforms
          , a = e.split(" ");
        if (a.length > 1 && (n.hasCompound[a[0]] = !0),
        "Singular" === t) {
            var o = i.toPlural(e, n);
            r[o] = r[o] || "Plural"
        }
        if ("Infinitive" === t)
            for (var s = i.conjugate(e, n), u = Object.keys(s), l = 0; l < u.length; l++) {
                var c = s[u[l]];
                r[c] = r[c] || u[l]
            }
        if ("Comparable" === t)
            for (var h = i.adjectives(e), f = Object.keys(h), d = 0; d < f.length; d++) {
                var p = h[f[d]];
                r[p] = r[p] || f[d]
            }
        if ("PhrasalVerb" === t) {
            Gt(e, "Infinitive", r);
            for (var m = i.conjugate(a[0], n), g = Object.keys(m), v = 0; v < g.length; v++) {
                n.hasCompound[m[g[v]]] = !0;
                var b = m[g[v]] + " " + a[1];
                Gt(b, g[v], r),
                Gt(b, "PhrasalVerb", r)
            }
        }
        if ("Demonym" === t) {
            var y = i.toPlural(e, n);
            r[y] = r[y] || ["Demonym", "Plural"]
        }
    }, Bt = function(e) {
        for (var t = e.irregulars.nouns, n = Object.keys(t), r = 0; r < n.length; r++) {
            var i = n[r];
            e.words[i] = "Singular",
            e.words[t[i]] = "Plural"
        }
        for (var a = e.irregulars.verbs, o = Object.keys(a), s = function(t) {
            var n = o[t];
            e.words[n] = e.words[n] || "Infinitive";
            var r = e.transforms.conjugate(n, e);
            r = Object.assign(r, a[n]),
            Object.keys(r).forEach((function(t) {
                e.words[r[t]] = e.words[r[t]] || t
            }
            ))
        }, u = 0; u < o.length; u++)
            s(u)
    }, Ot = {
        "20th century fox": "Organization",
        "7 eleven": "Organization",
        "7-eleven": "Organization",
        g8: "Organization",
        "motel 6": "Organization",
        vh1: "Organization",
        q1: "Date",
        q2: "Date",
        q3: "Date",
        q4: "Date"
    }, Dt = {
        g: "Gerund",
        prt: "Participle",
        perf: "PerfectTense",
        pst: "PastTense",
        fut: "FuturePerfect",
        pres: "PresentTense",
        pluperf: "Pluperfect",
        a: "Actor"
    }, Tt = {
        act: {
            a: "_or"
        },
        age: {
            g: "ageing",
            pst: "aged",
            pres: "ages"
        },
        aim: {
            a: "_er",
            g: "_ing",
            pst: "_ed"
        },
        arise: {
            prt: "_n",
            pst: "arose"
        },
        babysit: {
            a: "_ter",
            pst: "babysat"
        },
        ban: {
            a: "",
            g: "_ning",
            pst: "_ned"
        },
        be: {
            a: "",
            g: "am",
            prt: "been",
            pst: "was",
            pres: "is"
        },
        beat: {
            a: "_er",
            g: "_ing",
            prt: "_en"
        },
        become: {
            prt: "_"
        },
        begin: {
            g: "_ning",
            prt: "begun",
            pst: "began"
        },
        being: {
            g: "are",
            pst: "were",
            pres: "are"
        },
        bend: {
            prt: "bent"
        },
        bet: {
            a: "_ter",
            prt: "_"
        },
        bind: {
            pst: "bound"
        },
        bite: {
            g: "biting",
            prt: "bitten",
            pst: "bit"
        },
        bleed: {
            prt: "bled",
            pst: "bled"
        },
        blow: {
            prt: "_n",
            pst: "blew"
        },
        boil: {
            a: "_er"
        },
        brake: {
            prt: "broken"
        },
        break: {
            pst: "broke"
        },
        breed: {
            pst: "bred"
        },
        bring: {
            prt: "brought",
            pst: "brought"
        },
        broadcast: {
            pst: "_"
        },
        budget: {
            pst: "_ed"
        },
        build: {
            prt: "built",
            pst: "built"
        },
        burn: {
            prt: "_ed"
        },
        burst: {
            prt: "_"
        },
        buy: {
            prt: "bought",
            pst: "bought"
        },
        can: {
            a: "",
            fut: "_",
            g: "",
            pst: "could",
            perf: "could",
            pluperf: "could",
            pres: "_"
        },
        catch: {
            pst: "caught"
        },
        choose: {
            g: "choosing",
            prt: "chosen",
            pst: "chose"
        },
        cling: {
            prt: "clung"
        },
        come: {
            prt: "_",
            pst: "came"
        },
        compete: {
            a: "competitor",
            g: "competing",
            pst: "_d"
        },
        cost: {
            pst: "_"
        },
        creep: {
            prt: "crept"
        },
        cut: {
            prt: "_"
        },
        deal: {
            prt: "_t",
            pst: "_t"
        },
        develop: {
            a: "_er",
            g: "_ing",
            pst: "_ed"
        },
        die: {
            g: "dying",
            pst: "_d"
        },
        dig: {
            g: "_ging",
            prt: "dug",
            pst: "dug"
        },
        dive: {
            prt: "_d"
        },
        do: {
            pst: "did",
            pres: "_es"
        },
        draw: {
            prt: "_n",
            pst: "drew"
        },
        dream: {
            prt: "_t"
        },
        drink: {
            prt: "drunk",
            pst: "drank"
        },
        drive: {
            g: "driving",
            prt: "_n",
            pst: "drove"
        },
        drop: {
            g: "_ping",
            pst: "_ped"
        },
        eat: {
            a: "_er",
            g: "_ing",
            prt: "_en",
            pst: "ate"
        },
        edit: {
            g: "_ing"
        },
        egg: {
            pst: "_ed"
        },
        fall: {
            prt: "_en",
            pst: "fell"
        },
        feed: {
            prt: "fed",
            pst: "fed"
        },
        feel: {
            a: "_er",
            pst: "felt"
        },
        fight: {
            prt: "fought",
            pst: "fought"
        },
        find: {
            pst: "found"
        },
        flee: {
            g: "_ing",
            prt: "fled"
        },
        fling: {
            prt: "flung"
        },
        fly: {
            prt: "flown",
            pst: "flew"
        },
        forbid: {
            pst: "forbade"
        },
        forget: {
            g: "_ing",
            prt: "forgotten",
            pst: "forgot"
        },
        forgive: {
            g: "forgiving",
            prt: "_n",
            pst: "forgave"
        },
        free: {
            a: "",
            g: "_ing"
        },
        freeze: {
            g: "freezing",
            prt: "frozen",
            pst: "froze"
        },
        get: {
            pst: "got",
            prt: "gotten"
        },
        give: {
            g: "giving",
            prt: "_n",
            pst: "gave"
        },
        go: {
            prt: "_ne",
            pst: "went",
            pres: "goes"
        },
        grow: {
            prt: "_n"
        },
        hang: {
            prt: "hung",
            pst: "hung"
        },
        have: {
            g: "having",
            prt: "had",
            pst: "had",
            pres: "has"
        },
        hear: {
            prt: "_d",
            pst: "_d"
        },
        hide: {
            prt: "hidden",
            pst: "hid"
        },
        hit: {
            prt: "_"
        },
        hold: {
            prt: "held",
            pst: "held"
        },
        hurt: {
            prt: "_",
            pst: "_"
        },
        ice: {
            g: "icing",
            pst: "_d"
        },
        imply: {
            pst: "implied",
            pres: "implies"
        },
        is: {
            a: "",
            g: "being",
            pst: "was",
            pres: "_"
        },
        keep: {
            prt: "kept"
        },
        kneel: {
            prt: "knelt"
        },
        know: {
            prt: "_n"
        },
        lay: {
            prt: "laid",
            pst: "laid"
        },
        lead: {
            prt: "led",
            pst: "led"
        },
        leap: {
            prt: "_t"
        },
        leave: {
            prt: "left",
            pst: "left"
        },
        lend: {
            prt: "lent"
        },
        lie: {
            g: "lying",
            pst: "lay"
        },
        light: {
            prt: "lit",
            pst: "lit"
        },
        log: {
            g: "_ging",
            pst: "_ged"
        },
        loose: {
            prt: "lost"
        },
        lose: {
            g: "losing",
            pst: "lost"
        },
        make: {
            prt: "made",
            pst: "made"
        },
        mean: {
            prt: "_t",
            pst: "_t"
        },
        meet: {
            a: "_er",
            g: "_ing",
            prt: "met",
            pst: "met"
        },
        miss: {
            pres: "_"
        },
        pay: {
            prt: "paid",
            pst: "paid"
        },
        prove: {
            prt: "_n"
        },
        puke: {
            g: "puking"
        },
        put: {
            prt: "_"
        },
        quit: {
            prt: "_"
        },
        read: {
            prt: "_",
            pst: "_"
        },
        ride: {
            prt: "ridden"
        },
        ring: {
            prt: "rung",
            pst: "rang"
        },
        rise: {
            fut: "will have _n",
            g: "rising",
            prt: "_n",
            pst: "rose",
            pluperf: "had _n"
        },
        rub: {
            g: "_bing",
            pst: "_bed"
        },
        run: {
            g: "_ning",
            prt: "_",
            pst: "ran"
        },
        say: {
            prt: "said",
            pst: "said",
            pres: "_s"
        },
        seat: {
            prt: "sat"
        },
        see: {
            g: "_ing",
            prt: "_n",
            pst: "saw"
        },
        seek: {
            prt: "sought"
        },
        sell: {
            prt: "sold",
            pst: "sold"
        },
        send: {
            prt: "sent"
        },
        set: {
            prt: "_"
        },
        sew: {
            prt: "_n"
        },
        shake: {
            prt: "_n"
        },
        shave: {
            prt: "_d"
        },
        shed: {
            g: "_ding",
            pst: "_",
            pres: "_s"
        },
        shine: {
            prt: "shone",
            pst: "shone"
        },
        shoot: {
            prt: "shot",
            pst: "shot"
        },
        show: {
            pst: "_ed"
        },
        shut: {
            prt: "_"
        },
        sing: {
            prt: "sung",
            pst: "sang"
        },
        sink: {
            pst: "sank",
            pluperf: "had sunk"
        },
        sit: {
            pst: "sat"
        },
        ski: {
            pst: "_ied"
        },
        slay: {
            prt: "slain"
        },
        sleep: {
            prt: "slept"
        },
        slide: {
            prt: "slid",
            pst: "slid"
        },
        smash: {
            pres: "_es"
        },
        sneak: {
            prt: "snuck"
        },
        speak: {
            fut: "will have spoken",
            prt: "spoken",
            pst: "spoke",
            perf: "have spoken",
            pluperf: "had spoken"
        },
        speed: {
            prt: "sped"
        },
        spend: {
            prt: "spent"
        },
        spill: {
            prt: "_ed",
            pst: "spilt"
        },
        spin: {
            g: "_ning",
            prt: "spun",
            pst: "spun"
        },
        spit: {
            prt: "spat"
        },
        split: {
            prt: "_"
        },
        spread: {
            pst: "_"
        },
        spring: {
            prt: "sprung"
        },
        stand: {
            pst: "stood"
        },
        steal: {
            a: "_er",
            pst: "stole"
        },
        stick: {
            pst: "stuck"
        },
        sting: {
            pst: "stung"
        },
        stink: {
            prt: "stunk",
            pst: "stunk"
        },
        stream: {
            a: "_er"
        },
        strew: {
            prt: "_n"
        },
        strike: {
            g: "striking",
            pst: "struck"
        },
        suit: {
            a: "_er",
            g: "_ing",
            pst: "_ed"
        },
        sware: {
            prt: "sworn"
        },
        swear: {
            pst: "swore"
        },
        sweep: {
            prt: "swept"
        },
        swim: {
            g: "_ming",
            pst: "swam"
        },
        swing: {
            pst: "swung"
        },
        take: {
            fut: "will have _n",
            pst: "took",
            perf: "have _n",
            pluperf: "had _n"
        },
        teach: {
            pst: "taught",
            pres: "_es"
        },
        tear: {
            pst: "tore"
        },
        tell: {
            pst: "told"
        },
        think: {
            pst: "thought"
        },
        thrive: {
            prt: "_d"
        },
        tie: {
            g: "tying",
            pst: "_d"
        },
        undergo: {
            prt: "_ne"
        },
        understand: {
            pst: "understood"
        },
        upset: {
            prt: "_"
        },
        wait: {
            a: "_er",
            g: "_ing",
            pst: "_ed"
        },
        wake: {
            pst: "woke"
        },
        wear: {
            pst: "wore"
        },
        weave: {
            prt: "woven"
        },
        weep: {
            prt: "wept"
        },
        win: {
            g: "_ning",
            pst: "won"
        },
        wind: {
            prt: "wound"
        },
        withdraw: {
            pst: "withdrew"
        },
        wring: {
            prt: "wrung"
        },
        write: {
            g: "writing",
            prt: "written",
            pst: "wrote"
        }
    }, Vt = Object.keys(Tt), zt = function(e) {
        var t = Vt[e]
          , n = {};
        Object.keys(Tt[t]).forEach((function(e) {
            var r = Tt[t][e];
            r = r.replace("_", t),
            n[Dt[e]] = r
        }
        )),
        Tt[t] = n
    }, Ht = 0; Ht < Vt.length; Ht++)
        zt(Ht);
    var It = Tt
      , Mt = {
        b: [{
            reg: /([^aeiou][aeiou])b$/i,
            repl: {
                pr: "$1bs",
                pa: "$1bbed",
                gr: "$1bbing"
            }
        }],
        d: [{
            reg: /(end)$/i,
            repl: {
                pr: "$1s",
                pa: "ent",
                gr: "$1ing",
                ar: "$1er"
            }
        }, {
            reg: /(eed)$/i,
            repl: {
                pr: "$1s",
                pa: "$1ed",
                gr: "$1ing",
                ar: "$1er"
            }
        }, {
            reg: /(ed)$/i,
            repl: {
                pr: "$1s",
                pa: "$1ded",
                ar: "$1der",
                gr: "$1ding"
            }
        }, {
            reg: /([^aeiou][ou])d$/i,
            repl: {
                pr: "$1ds",
                pa: "$1dded",
                gr: "$1dding"
            }
        }],
        e: [{
            reg: /(eave)$/i,
            repl: {
                pr: "$1s",
                pa: "$1d",
                gr: "eaving",
                ar: "$1r"
            }
        }, {
            reg: /(ide)$/i,
            repl: {
                pr: "$1s",
                pa: "ode",
                gr: "iding",
                ar: "ider"
            }
        }, {
            reg: /(ake)$/i,
            repl: {
                pr: "$1s",
                pa: "ook",
                gr: "aking",
                ar: "$1r"
            }
        }, {
            reg: /(a[tg]|i[zn]|ur|nc|gl|is)e$/i,
            repl: {
                pr: "$1es",
                pa: "$1ed",
                gr: "$1ing",
                prt: "$1en"
            }
        }, {
            reg: /([bd]l)e$/i,
            repl: {
                pr: "$1es",
                pa: "$1ed",
                gr: "$1ing"
            }
        }, {
            reg: /(om)e$/i,
            repl: {
                pr: "$1es",
                pa: "ame",
                gr: "$1ing"
            }
        }],
        g: [{
            reg: /([^aeiou][ou])g$/i,
            repl: {
                pr: "$1gs",
                pa: "$1gged",
                gr: "$1gging"
            }
        }],
        h: [{
            reg: /(..)([cs]h)$/i,
            repl: {
                pr: "$1$2es",
                pa: "$1$2ed",
                gr: "$1$2ing"
            }
        }],
        k: [{
            reg: /(ink)$/i,
            repl: {
                pr: "$1s",
                pa: "unk",
                gr: "$1ing",
                ar: "$1er"
            }
        }],
        m: [{
            reg: /([^aeiou][aeiou])m$/i,
            repl: {
                pr: "$1ms",
                pa: "$1mmed",
                gr: "$1mming"
            }
        }],
        n: [{
            reg: /(en)$/i,
            repl: {
                pr: "$1s",
                pa: "$1ed",
                gr: "$1ing"
            }
        }],
        p: [{
            reg: /(e)(ep)$/i,
            repl: {
                pr: "$1$2s",
                pa: "$1pt",
                gr: "$1$2ing",
                ar: "$1$2er"
            }
        }, {
            reg: /([^aeiou][aeiou])p$/i,
            repl: {
                pr: "$1ps",
                pa: "$1pped",
                gr: "$1pping"
            }
        }, {
            reg: /([aeiu])p$/i,
            repl: {
                pr: "$1ps",
                pa: "$1p",
                gr: "$1pping"
            }
        }],
        r: [{
            reg: /([td]er)$/i,
            repl: {
                pr: "$1s",
                pa: "$1ed",
                gr: "$1ing"
            }
        }, {
            reg: /(er)$/i,
            repl: {
                pr: "$1s",
                pa: "$1ed",
                gr: "$1ing"
            }
        }],
        s: [{
            reg: /(ish|tch|ess)$/i,
            repl: {
                pr: "$1es",
                pa: "$1ed",
                gr: "$1ing"
            }
        }],
        t: [{
            reg: /(ion|end|e[nc]t)$/i,
            repl: {
                pr: "$1s",
                pa: "$1ed",
                gr: "$1ing"
            }
        }, {
            reg: /(.eat)$/i,
            repl: {
                pr: "$1s",
                pa: "$1ed",
                gr: "$1ing"
            }
        }, {
            reg: /([aeiu])t$/i,
            repl: {
                pr: "$1ts",
                pa: "$1t",
                gr: "$1tting"
            }
        }, {
            reg: /([^aeiou][aeiou])t$/i,
            repl: {
                pr: "$1ts",
                pa: "$1tted",
                gr: "$1tting"
            }
        }],
        w: [{
            reg: /(..)(ow)$/i,
            repl: {
                pr: "$1$2s",
                pa: "$1ew",
                gr: "$1$2ing",
                prt: "$1$2n"
            }
        }],
        y: [{
            reg: /([i|f|rr])y$/i,
            repl: {
                pr: "$1ies",
                pa: "$1ied",
                gr: "$1ying"
            }
        }],
        z: [{
            reg: /([aeiou]zz)$/i,
            repl: {
                pr: "$1es",
                pa: "$1ed",
                gr: "$1ing"
            }
        }]
    }
      , St = {
        pr: "PresentTense",
        pa: "PastTense",
        gr: "Gerund",
        prt: "Participle",
        ar: "Actor"
    }
      , Lt = function(e, t) {
        for (var n = {}, r = Object.keys(t.repl), i = 0; i < r.length; i += 1) {
            var a = r[i];
            n[St[a]] = e.replace(t.reg, t.repl[a])
        }
        return n
    }
      , _t = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = e[e.length - 1];
        if (!0 === Mt.hasOwnProperty(t))
            for (var n = 0; n < Mt[t].length; n += 1) {
                var r = Mt[t][n].reg;
                if (!0 === r.test(e))
                    return Lt(e, Mt[t][n])
            }
        return {}
    }
      , qt = /[bcdfghjklmnpqrstvwxz]y$/
      , Wt = {
        Gerund: function(e) {
            return "e" === e.charAt(e.length - 1) ? e.replace(/e$/, "ing") : e + "ing"
        },
        PresentTense: function(e) {
            return "s" === e.charAt(e.length - 1) ? e + "es" : !0 === qt.test(e) ? e.slice(0, -1) + "ies" : e + "s"
        },
        PastTense: function(e) {
            return "e" === e.charAt(e.length - 1) ? e + "d" : "ed" === e.substr(-2) ? e : !0 === qt.test(e) ? e.slice(0, -1) + "ied" : e + "ed"
        }
    }
      , Jt = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = arguments.length > 1 ? arguments[1] : void 0
          , n = {};
        return t && t.irregulars && !0 === t.irregulars.verbs.hasOwnProperty(e) && (n = Object.assign({}, t.irregulars.verbs[e])),
        void 0 === (n = Object.assign({}, _t(e), n)).Gerund && (n.Gerund = Wt.Gerund(e)),
        void 0 === n.PastTense && (n.PastTense = Wt.PastTense(e)),
        void 0 === n.PresentTense && (n.PresentTense = Wt.PresentTense(e)),
        n
    }
      , Rt = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /oud$/, /...p$/]
      , Ut = [/ary$/]
      , Kt = {
        nice: "nicest",
        late: "latest",
        hard: "hardest",
        inner: "innermost",
        outer: "outermost",
        far: "furthest",
        worse: "worst",
        bad: "worst",
        good: "best",
        big: "biggest",
        large: "largest"
    }
      , Qt = [{
        reg: /y$/i,
        repl: "iest"
    }, {
        reg: /([aeiou])t$/i,
        repl: "$1ttest"
    }, {
        reg: /([aeou])de$/i,
        repl: "$1dest"
    }, {
        reg: /nge$/i,
        repl: "ngest"
    }, {
        reg: /([aeiou])te$/i,
        repl: "$1test"
    }]
      , Xt = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /old$/, /oud$/, /e[ae]p$/]
      , Zt = [/ary$/, /ous$/]
      , Yt = {
        grey: "greyer",
        gray: "grayer",
        green: "greener",
        yellow: "yellower",
        red: "redder",
        good: "better",
        well: "better",
        bad: "worse",
        sad: "sadder",
        big: "bigger"
    }
      , en = [{
        reg: /y$/i,
        repl: "ier"
    }, {
        reg: /([aeiou])t$/i,
        repl: "$1tter"
    }, {
        reg: /([aeou])de$/i,
        repl: "$1der"
    }, {
        reg: /nge$/i,
        repl: "nger"
    }]
      , tn = {
        toSuperlative: function(e) {
            if (Kt.hasOwnProperty(e))
                return Kt[e];
            for (var t = 0; t < Qt.length; t++)
                if (Qt[t].reg.test(e))
                    return e.replace(Qt[t].reg, Qt[t].repl);
            for (var n = 0; n < Ut.length; n++)
                if (!0 === Ut[n].test(e))
                    return null;
            for (var r = 0; r < Rt.length; r++)
                if (!0 === Rt[r].test(e))
                    return "e" === e.charAt(e.length - 1) ? e + "st" : e + "est";
            return e + "est"
        },
        toComparative: function(e) {
            if (Yt.hasOwnProperty(e))
                return Yt[e];
            for (var t = 0; t < en.length; t++)
                if (!0 === en[t].reg.test(e))
                    return e.replace(en[t].reg, en[t].repl);
            for (var n = 0; n < Zt.length; n++)
                if (!0 === Zt[n].test(e))
                    return null;
            for (var r = 0; r < Xt.length; r++)
                if (!0 === Xt[r].test(e))
                    return e + "er";
            return !0 === /e$/.test(e) ? e + "r" : e + "er"
        }
    }
      , nn = function(e) {
        var t = {}
          , n = tn.toSuperlative(e);
        n && (t.Superlative = n);
        var r = tn.toComparative(e);
        return r && (t.Comparative = r),
        t
    }
      , rn = {
        a: [[/(antenn|formul|nebul|vertebr|vit)a$/i, "$1ae"], [/([ti])a$/i, "$1a"]],
        e: [[/(kn|l|w)ife$/i, "$1ives"], [/(hive)$/i, "$1s"], [/([m|l])ouse$/i, "$1ice"], [/([m|l])ice$/i, "$1ice"]],
        f: [[/^(dwar|handkerchie|hoo|scar|whar)f$/i, "$1ves"], [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i, "$1ves"]],
        i: [[/(octop|vir)i$/i, "$1i"]],
        m: [[/([ti])um$/i, "$1a"]],
        n: [[/^(oxen)$/i, "$1"]],
        o: [[/(al|ad|at|er|et|ed|ad)o$/i, "$1oes"]],
        s: [[/(ax|test)is$/i, "$1es"], [/(alias|status)$/i, "$1es"], [/sis$/i, "ses"], [/(bu)s$/i, "$1ses"], [/(sis)$/i, "ses"], [/^(?!talis|.*hu)(.*)man$/i, "$1men"], [/(octop|vir|radi|nucle|fung|cact|stimul)us$/i, "$1i"]],
        x: [[/(matr|vert|ind|cort)(ix|ex)$/i, "$1ices"], [/^(ox)$/i, "$1en"]],
        y: [[/([^aeiouy]|qu)y$/i, "$1ies"]],
        z: [[/(quiz)$/i, "$1zes"]]
    }
      , an = /(x|ch|sh|s|z)$/
      , on = function(e) {
        var t = e[e.length - 1];
        if (!0 === rn.hasOwnProperty(t))
            for (var n = 0; n < rn[t].length; n += 1) {
                var r = rn[t][n][0];
                if (!0 === r.test(e))
                    return e.replace(r, rn[t][n][1])
            }
        return null
    }
      , sn = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = arguments.length > 1 ? arguments[1] : void 0
          , n = t.irregulars.nouns;
        if (n.hasOwnProperty(e))
            return n[e];
        var r = on(e);
        return null !== r ? r : an.test(e) ? e + "es" : e + "s"
    }
      , un = [[/([^v])ies$/i, "$1y"], [/ises$/i, "isis"], [/(kn|[^o]l|w)ives$/i, "$1ife"], [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i, "$1f"], [/^(dwar|handkerchie|hoo|scar|whar)ves$/i, "$1f"], [/(antenn|formul|nebul|vertebr|vit)ae$/i, "$1a"], [/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i, "$1us"], [/(buffal|tomat|tornad)(oes)$/i, "$1o"], [/(..[aeiou]s)es$/i, "$1"], [/(vert|ind|cort)(ices)$/i, "$1ex"], [/(matr|append)(ices)$/i, "$1ix"], [/(x|ch|ss|sh|z|o)es$/i, "$1"], [/men$/i, "man"], [/(n)ews$/i, "$1ews"], [/([ti])a$/i, "$1um"], [/([^aeiouy]|qu)ies$/i, "$1y"], [/(s)eries$/i, "$1eries"], [/(m)ovies$/i, "$1ovie"], [/([m|l])ice$/i, "$1ouse"], [/(cris|ax|test)es$/i, "$1is"], [/(alias|status)es$/i, "$1"], [/(ss)$/i, "$1"], [/(ics)$/i, "$1"], [/s$/i, ""]]
      , ln = function(e, t) {
        var n, r = t.irregulars.nouns, i = (n = r,
        Object.keys(n).reduce((function(e, t) {
            return e[n[t]] = t,
            e
        }
        ), {}));
        if (i.hasOwnProperty(e))
            return i[e];
        for (var a = 0; a < un.length; a++)
            if (!0 === un[a][0].test(e))
                return e = e.replace(un[a][0], un[a][1]);
        return e
    }
      , cn = {
        Participle: [{
            reg: /own$/i,
            to: "ow"
        }, {
            reg: /(.)un([g|k])$/i,
            to: "$1in$2"
        }],
        Actor: [{
            reg: /(er)er$/i,
            to: "$1"
        }],
        PresentTense: [{
            reg: /(..)(ies)$/i,
            to: "$1y"
        }, {
            reg: /(tch|sh)es$/i,
            to: "$1"
        }, {
            reg: /(ss|zz)es$/i,
            to: "$1"
        }, {
            reg: /([tzlshicgrvdnkmu])es$/i,
            to: "$1e"
        }, {
            reg: /(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,
            to: "$1"
        }, {
            reg: /(ow)s$/i,
            to: "$1"
        }, {
            reg: /(op)s$/i,
            to: "$1"
        }, {
            reg: /([eirs])ts$/i,
            to: "$1t"
        }, {
            reg: /(ll)s$/i,
            to: "$1"
        }, {
            reg: /(el)s$/i,
            to: "$1"
        }, {
            reg: /(ip)es$/i,
            to: "$1e"
        }, {
            reg: /ss$/i,
            to: "ss"
        }, {
            reg: /s$/i,
            to: ""
        }],
        Gerund: [{
            reg: /pping$/i,
            to: "p"
        }, {
            reg: /lling$/i,
            to: "ll"
        }, {
            reg: /tting$/i,
            to: "t"
        }, {
            reg: /dding$/i,
            to: "d"
        }, {
            reg: /ssing$/i,
            to: "ss"
        }, {
            reg: /(..)gging$/i,
            to: "$1g"
        }, {
            reg: /([^aeiou])ying$/i,
            to: "$1y"
        }, {
            reg: /([^ae]i.)ing$/i,
            to: "$1e"
        }, {
            reg: /(ea.)ing$/i,
            to: "$1"
        }, {
            reg: /(u[rtcb]|[bdtpkg]l|n[cg]|a[gdkvtc]|[ua]s|[dr]g|yz|o[rlsp]|cre)ing$/i,
            to: "$1e"
        }, {
            reg: /(ch|sh)ing$/i,
            to: "$1"
        }, {
            reg: /(..)ing$/i,
            to: "$1"
        }],
        PastTense: [{
            reg: /(ued)$/i,
            to: "ue"
        }, {
            reg: /a([^aeiouy])ed$/i,
            to: "a$1e"
        }, {
            reg: /([aeiou]zz)ed$/i,
            to: "$1"
        }, {
            reg: /(e|i)lled$/i,
            to: "$1ll"
        }, {
            reg: /(.)(sh|ch)ed$/i,
            to: "$1$2"
        }, {
            reg: /(tl|gl)ed$/i,
            to: "$1e"
        }, {
            reg: /(um?pt?)ed$/i,
            to: "$1"
        }, {
            reg: /(ss)ed$/i,
            to: "$1"
        }, {
            reg: /pped$/i,
            to: "p"
        }, {
            reg: /tted$/i,
            to: "t"
        }, {
            reg: /(..)gged$/i,
            to: "$1g"
        }, {
            reg: /(..)lked$/i,
            to: "$1lk"
        }, {
            reg: /([^aeiouy][aeiou])ked$/i,
            to: "$1ke"
        }, {
            reg: /(.[aeiou])led$/i,
            to: "$1l"
        }, {
            reg: /(..)(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$/i,
            to: "$1$2"
        }, {
            reg: /(.ut)ed$/i,
            to: "$1e"
        }, {
            reg: /(.pt)ed$/i,
            to: "$1"
        }, {
            reg: /(us)ed$/i,
            to: "$1e"
        }, {
            reg: /(..[^aeiouy])ed$/i,
            to: "$1e"
        }, {
            reg: /(..)ied$/i,
            to: "$1y"
        }, {
            reg: /(.o)ed$/i,
            to: "$1o"
        }, {
            reg: /(..i)ed$/i,
            to: "$1"
        }, {
            reg: /(.a[^aeiou])ed$/i,
            to: "$1"
        }, {
            reg: /([rl])ew$/i,
            to: "$1ow"
        }, {
            reg: /([pl])t$/i,
            to: "$1t"
        }]
    }
      , hn = {
        Gerund: ["ing"],
        Actor: ["erer"],
        Infinitive: ["ate", "ize", "tion", "rify", "then", "ress", "ify", "age", "nce", "ect", "ise", "ine", "ish", "ace", "ash", "ure", "tch", "end", "ack", "and", "ute", "ade", "ock", "ite", "ase", "ose", "use", "ive", "int", "nge", "lay", "est", "ain", "ant", "ent", "eed", "er", "le", "own", "unk", "ung", "en"],
        PastTense: ["ed", "lt", "nt", "pt", "ew", "ld"],
        PresentTense: ["rks", "cks", "nks", "ngs", "mps", "tes", "zes", "ers", "les", "acks", "ends", "ands", "ocks", "lays", "eads", "lls", "els", "ils", "ows", "nds", "ays", "ams", "ars", "ops", "ffs", "als", "urs", "lds", "ews", "ips", "es", "ts", "ns"]
    }
      , fn = hn = Object.keys(hn).reduce((function(e, t) {
        return hn[t].forEach((function(n) {
            return e[n] = t
        }
        )),
        e
    }
    ), {})
      , dn = {
        nouns: {
            addendum: "addenda",
            alga: "algae",
            alumna: "alumnae",
            alumnus: "alumni",
            analysis: "analyses",
            antenna: "antennae",
            appendix: "appendices",
            avocado: "avocados",
            axis: "axes",
            bacillus: "bacilli",
            barracks: "barracks",
            beau: "beaux",
            bus: "buses",
            cactus: "cacti",
            chateau: "chateaux",
            child: "children",
            circus: "circuses",
            clothes: "clothes",
            corpus: "corpora",
            criterion: "criteria",
            curriculum: "curricula",
            database: "databases",
            deer: "deer",
            diagnosis: "diagnoses",
            echo: "echoes",
            embargo: "embargoes",
            epoch: "epochs",
            foot: "feet",
            formula: "formulae",
            fungus: "fungi",
            genus: "genera",
            goose: "geese",
            halo: "halos",
            hippopotamus: "hippopotami",
            index: "indices",
            larva: "larvae",
            leaf: "leaves",
            libretto: "libretti",
            loaf: "loaves",
            man: "men",
            matrix: "matrices",
            memorandum: "memoranda",
            modulus: "moduli",
            mosquito: "mosquitoes",
            mouse: "mice",
            move: "moves",
            nebula: "nebulae",
            nucleus: "nuclei",
            octopus: "octopi",
            opus: "opera",
            ovum: "ova",
            ox: "oxen",
            parenthesis: "parentheses",
            person: "people",
            phenomenon: "phenomena",
            prognosis: "prognoses",
            quiz: "quizzes",
            radius: "radii",
            referendum: "referenda",
            rodeo: "rodeos",
            sex: "sexes",
            shoe: "shoes",
            sombrero: "sombreros",
            stimulus: "stimuli",
            stomach: "stomachs",
            syllabus: "syllabi",
            synopsis: "synopses",
            tableau: "tableaux",
            thesis: "theses",
            thief: "thieves",
            tooth: "teeth",
            tornado: "tornados",
            tuxedo: "tuxedos",
            vertebra: "vertebrae"
        },
        verbs: It
    }
      , pn = {
        conjugate: Jt,
        adjectives: nn,
        toPlural: sn,
        toSingular: ln,
        toInfinitive: function(e, t, n) {
            if (!e)
                return "";
            if (!0 === t.words.hasOwnProperty(e))
                for (var r = t.irregulars.verbs, i = Object.keys(r), a = 0; a < i.length; a++)
                    for (var o = Object.keys(r[i[a]]), s = 0; s < o.length; s++)
                        if (e === r[i[a]][o[s]])
                            return i[a];
            if ((n = n || function(e) {
                var t = e.substr(e.length - 3);
                if (!0 === fn.hasOwnProperty(t))
                    return fn[t];
                var n = e.substr(e.length - 2);
                return !0 === fn.hasOwnProperty(n) ? fn[n] : "s" === e.substr(e.length - 1) ? "PresentTense" : null
            }(e)) && cn[n])
                for (var u = 0; u < cn[n].length; u++) {
                    var l = cn[n][u];
                    if (!0 === l.reg.test(e))
                        return e.replace(l.reg, l.to)
                }
            return e
        }
    }
      , mn = !1
      , gn = function() {
        function e() {
            i(this, e),
            Object.defineProperty(this, "words", {
                enumerable: !1,
                value: Ot,
                writable: !0
            }),
            Object.defineProperty(this, "hasCompound", {
                enumerable: !1,
                value: {},
                writable: !0
            }),
            Object.defineProperty(this, "irregulars", {
                enumerable: !1,
                value: dn,
                writable: !0
            }),
            Object.defineProperty(this, "tags", {
                enumerable: !1,
                value: Object.assign({}, kt),
                writable: !0
            }),
            Object.defineProperty(this, "transforms", {
                enumerable: !1,
                value: pn,
                writable: !0
            }),
            Object.defineProperty(this, "taggers", {
                enumerable: !1,
                value: [],
                writable: !0
            }),
            this.unpackWords(ut),
            this.addIrregulars(),
            Object.defineProperty(this, "cache", {
                enumerable: !1,
                value: {
                    abbreviations: this.getByTag("Abbreviation")
                }
            })
        }
        return o(e, [{
            key: "verbose",
            value: function(e) {
                return mn = e,
                this
            }
        }, {
            key: "isVerbose",
            value: function() {
                return mn
            }
        }, {
            key: "getByTag",
            value: function(e) {
                for (var t = this.words, n = {}, r = Object.keys(t), i = 0; i < r.length; i++)
                    "string" == typeof t[r[i]] ? t[r[i]] === e && (n[r[i]] = !0) : t[r[i]].some((function(t) {
                        return t === e
                    }
                    )) && (n[r[i]] = !0);
                return n
            }
        }, {
            key: "unpackWords",
            value: function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++)
                    for (var r = Object.keys(jt(e[t[n]])), i = 0; i < r.length; i++)
                        Nt(r[i], t[n], this.words),
                        Ft(r[i], t[n], this)
            }
        }, {
            key: "addWords",
            value: function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                    var r = t[n].toLowerCase();
                    Nt(r, e[t[n]], this.words),
                    Ft(r, e[t[n]], this)
                }
            }
        }, {
            key: "addIrregulars",
            value: function() {
                return Bt(this),
                this
            }
        }, {
            key: "addTags",
            value: function(e) {
                return e = Object.assign({}, e),
                this.tags = Object.assign(this.tags, e),
                this.tags = wt(this.tags),
                this
            }
        }, {
            key: "postProcess",
            value: function(e) {
                return this.taggers.push(e),
                this
            }
        }, {
            key: "stats",
            value: function() {
                return {
                    words: Object.keys(this.words).length,
                    plurals: Object.keys(this.irregulars.nouns).length,
                    conjugations: Object.keys(this.irregulars.verbs).length,
                    compounds: Object.keys(this.hasCompound).length,
                    postProcessors: this.taggers.length
                }
            }
        }]),
        e
    }()
      , vn = function(e) {
        return JSON.parse(JSON.stringify(e))
    };
    gn.prototype.clone = function() {
        var e = new gn;
        return e.words = Object.assign({}, this.words),
        e.hasCompound = Object.assign({}, this.hasCompound),
        e.irregulars = vn(this.irregulars),
        e.tags = vn(this.tags),
        e.transforms = this.transforms,
        e.taggers = this.taggers,
        e
    }
    ;
    var bn = gn
      , yn = F((function(e, t) {
        t.all = function() {
            return this.parents()[0] || this
        }
        ,
        t.parent = function() {
            return this.from ? this.from : this
        }
        ,
        t.parents = function(e) {
            var t = [];
            return function e(n) {
                n.from && (t.push(n.from),
                e(n.from))
            }(this),
            t = t.reverse(),
            "number" == typeof e ? t[e] : t
        }
        ,
        t.clone = function(e) {
            var t = this.list.map((function(t) {
                return t.clone(e)
            }
            ));
            return this.buildFrom(t)
        }
        ,
        t.wordCount = function() {
            return this.list.reduce((function(e, t) {
                return e += t.wordCount()
            }
            ), 0)
        }
        ,
        t.wordcount = t.wordCount,
        t.cache = function(e) {
            var t = this;
            return e = e || {},
            this.list.forEach((function(n) {
                var r = {};
                n.cache = n.cache || {},
                n.cache.terms = n.cache.terms || n.terms(),
                n.cache.terms.forEach((function(n) {
                    r[n.clean] = !0,
                    r[n.reduced] = !0,
                    r[n.text.toLowerCase()] = !0,
                    n.implicit && (r[n.implicit] = !0),
                    n.root && (r[n.root] = !0),
                    void 0 !== n.alias && (r = Object.assign(r, n.alias)),
                    e.root && (n.setRoot(t.world),
                    r[n.root] = !0)
                }
                )),
                delete r[""],
                n.cache.words = r
            }
            )),
            this
        }
        ,
        t.uncache = function() {
            return this.list.forEach((function(e) {
                e.cache = {}
            }
            )),
            this.parents().forEach((function(e) {
                e.list.forEach((function(e) {
                    e.cache = {}
                }
                ))
            }
            )),
            this
        }
    }
    ))
      , wn = (yn.all,
    yn.parent,
    yn.parents,
    yn.clone,
    yn.wordCount,
    yn.wordcount,
    yn.cache,
    yn.uncache,
    F((function(e, t) {
        t.first = function(e) {
            return void 0 === e ? this.get(0) : this.slice(0, e)
        }
        ,
        t.last = function(e) {
            if (void 0 === e)
                return this.get(this.list.length - 1);
            var t = this.list.length;
            return this.slice(t - e, t)
        }
        ,
        t.slice = function(e, t) {
            var n = this.list.slice(e, t);
            return this.buildFrom(n)
        }
        ,
        t.eq = function(e) {
            var t = this.list[e];
            return void 0 === t ? this.buildFrom([]) : this.buildFrom([t])
        }
        ,
        t.get = t.eq,
        t.firstTerm = function() {
            return this.match("^.")
        }
        ,
        t.lastTerm = function() {
            return this.match(".$")
        }
        ,
        t.termList = function(e) {
            for (var t = [], n = 0; n < this.list.length; n++)
                for (var r = this.list[n].terms(), i = 0; i < r.length; i++)
                    if (t.push(r[i]),
                    void 0 !== e && void 0 !== t[e])
                        return t[e];
            return t
        }
    }
    )))
      , An = (wn.first,
    wn.last,
    wn.slice,
    wn.eq,
    wn.get,
    wn.firstTerm,
    wn.lastTerm,
    wn.termList,
    F((function(e, t) {
        t.match = function(e) {
            var t = Oe(e);
            if (0 === t.length)
                return this.buildFrom([]);
            var n = this.list.reduce((function(e, n) {
                return e.concat(n.match(t))
            }
            ), []);
            return this.buildFrom(n)
        }
        ,
        t.not = function(e) {
            var t = Oe(e);
            if (0 === t.length)
                return this;
            var n = this.list.reduce((function(e, n) {
                return e.concat(n.not(t))
            }
            ), []);
            return this.buildFrom(n)
        }
        ,
        t.matchOne = function(e) {
            for (var t = Oe(e), n = 0; n < this.list.length; n++) {
                var r = this.list[n].match(t, !0);
                return this.buildFrom(r)
            }
            return this.buildFrom([])
        }
        ,
        t.if = function(e) {
            var t = Oe(e)
              , n = this.list.filter((function(e) {
                return !0 === e.has(t)
            }
            ));
            return this.buildFrom(n)
        }
        ,
        t.ifNo = function(e) {
            var t = Oe(e)
              , n = this.list.filter((function(e) {
                return !1 === e.has(t)
            }
            ));
            return this.buildFrom(n)
        }
        ,
        t.has = function(e) {
            var t = Oe(e);
            return this.list.some((function(e) {
                return !0 === e.has(t)
            }
            ))
        }
        ,
        t.lookAhead = function(e) {
            e || (e = ".*");
            var t = Oe(e)
              , n = [];
            return this.list.forEach((function(e) {
                n = n.concat(e.lookAhead(t))
            }
            )),
            n = n.filter((function(e) {
                return e
            }
            )),
            this.buildFrom(n)
        }
        ,
        t.lookAfter = t.lookAhead,
        t.lookBehind = function(e) {
            e || (e = ".*");
            var t = Oe(e)
              , n = [];
            return this.list.forEach((function(e) {
                n = n.concat(e.lookBehind(t))
            }
            )),
            n = n.filter((function(e) {
                return e
            }
            )),
            this.buildFrom(n)
        }
        ,
        t.lookBefore = t.lookBehind,
        t.before = function(e) {
            var t = Oe(e)
              , n = this.if(t).list.map((function(e) {
                var n = e.terms().map((function(e) {
                    return e.id
                }
                ))
                  , r = e.match(t)[0]
                  , i = n.indexOf(r.start);
                return 0 === i || -1 === i ? null : e.buildFrom(e.start, i)
            }
            ));
            return n = n.filter((function(e) {
                return null !== e
            }
            )),
            this.buildFrom(n)
        }
        ,
        t.after = function(e) {
            var t = Oe(e)
              , n = this.if(t).list.map((function(e) {
                var n = e.terms()
                  , r = n.map((function(e) {
                    return e.id
                }
                ))
                  , i = e.match(t)[0]
                  , a = r.indexOf(i.start);
                if (-1 === a || !n[a + i.length])
                    return null;
                var o = n[a + i.length].id
                  , s = e.length - a - i.length;
                return e.buildFrom(o, s)
            }
            ));
            return n = n.filter((function(e) {
                return null !== e
            }
            )),
            this.buildFrom(n)
        }
    }
    )))
      , kn = (An.match,
    An.not,
    An.matchOne,
    An.ifNo,
    An.has,
    An.lookAhead,
    An.lookAfter,
    An.lookBehind,
    An.lookBefore,
    An.before,
    An.after,
    function(e, t, n, r) {
        var i = [];
        "string" == typeof e && (i = e.split(" ")),
        t.list.forEach((function(a) {
            var o = a.cache.terms || a.terms();
            !0 === n && (o = o.filter((function(n) {
                return n.canBe(e, t.world)
            }
            ))),
            o.forEach((function(n, a) {
                i.length > 1 ? i[a] && "." !== i[a] && n.tag(i[a], r, t.world) : n.tag(e, r, t.world)
            }
            ))
        }
        ))
    }
    )
      , $n = {
        tag: function(e, t) {
            return e ? (kn(e, this, !1, t),
            this) : this
        },
        tagSafe: function(e, t) {
            return e ? (kn(e, this, !0, t),
            this) : this
        },
        unTag: function(e, t) {
            var n = this;
            return this.list.forEach((function(r) {
                r.terms().forEach((function(r) {
                    return r.unTag(e, t, n.world)
                }
                ))
            }
            )),
            this
        },
        canBe: function(e) {
            if (!e)
                return this;
            var t = this.world
              , n = this.list.reduce((function(n, r) {
                return n.concat(r.canBe(e, t))
            }
            ), []);
            return this.buildFrom(n)
        }
    }
      , Pn = {
        map: function(e) {
            var t = this;
            if (!e)
                return this;
            var n = this.list.map((function(n, r) {
                var i = t.buildFrom([n]);
                i.from = null;
                var a = e(i, r);
                return a.list && a.list[0] ? a.list[0] : a
            }
            ));
            return 0 === n.length ? this.buildFrom(n) : "object" !== r(n[0]) || "Phrase" !== n[0].isA ? n : this.buildFrom(n)
        },
        forEach: function(e, t) {
            var n = this;
            return e ? (this.list.forEach((function(r, i) {
                var a = n.buildFrom([r]);
                !0 === t && (a.from = null),
                e(a, i)
            }
            )),
            this) : this
        },
        filter: function(e) {
            var t = this;
            if (!e)
                return this;
            var n = this.list.filter((function(n, r) {
                var i = t.buildFrom([n]);
                return i.from = null,
                e(i, r)
            }
            ));
            return this.buildFrom(n)
        },
        find: function(e) {
            var t = this;
            if (!e)
                return this;
            var n = this.list.find((function(n, r) {
                var i = t.buildFrom([n]);
                return i.from = null,
                e(i, r)
            }
            ));
            return n ? this.buildFrom([n]) : void 0
        },
        some: function(e) {
            var t = this;
            return e ? this.list.some((function(n, r) {
                var i = t.buildFrom([n]);
                return i.from = null,
                e(i, r)
            }
            )) : this
        },
        random: function(e) {
            if (!this.found)
                return this;
            var t = Math.floor(Math.random() * this.list.length);
            if (void 0 === e) {
                var n = [this.list[t]];
                return this.buildFrom(n)
            }
            return t + e > this.length && (t = (t = this.length - e) < 0 ? 0 : t),
            this.slice(t, t + e)
        }
    }
      , Cn = F((function(e, t) {
        var n = function(e, t) {
            return "" !== t && (e.reduced === t || e.implicit === t || e.root === t || e.text.toLowerCase() === t)
        };
        t.lookup = function(e) {
            var t = this;
            "string" == typeof e && (e = [e]);
            var i = e.map((function(e) {
                e = e.toLowerCase();
                var t = it(e);
                return t = t.map((function(e) {
                    return e.trim()
                }
                ))
            }
            ));
            this.cache();
            var a = [];
            return i.forEach((function(e) {
                t.list.forEach((function(t) {
                    if (!0 === t.cache.words[e[0]]) {
                        var i = t.terms()
                          , o = function(e, t) {
                            for (var i = function(r) {
                                if (n(t[r], e[0]) && e.every((function(e, i) {
                                    return !0 === n(t[r + i], e)
                                }
                                )))
                                    return {
                                        v: t[r].id
                                    }
                            }, a = 0; a < t.length; a++) {
                                var o = i(a);
                                if ("object" === r(o))
                                    return o.v
                            }
                            return !1
                        }(e, i);
                        if (!1 === o)
                            ;
                        else {
                            var s = t.buildFrom(o, e.length);
                            a.push(s)
                        }
                    }
                }
                ))
            }
            )),
            this.buildFrom(a)
        }
        ,
        t.lookUp = t.lookup
    }
    ))
      , En = (Cn.lookup,
    Cn.lookUp,
    function(e) {
        return e.charAt(0).toUpperCase() + e.substr(1)
    }
    )
      , xn = {
        replaceWith: function(e) {
            var t = this
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e ? (!0 === n && (n = {
                keepTags: !0
            }),
            !1 === n && (n = {
                keepTags: !1
            }),
            n = n || {},
            this.uncache(),
            this.list.forEach((function(i) {
                var a, o = e;
                if ("function" == typeof e && (o = e(i)),
                o && "object" === r(o) && "Doc" === o.isA)
                    a = o.list,
                    t.pool().merge(o.pool());
                else {
                    if ("string" != typeof o)
                        return;
                    !1 !== n.keepCase && i.terms(0).isTitleCase() && (o = En(o)),
                    a = ot(o, t.world, t.pool()),
                    t.buildFrom(a).tagger()
                }
                if (!0 === n.keepTags) {
                    var s = i.json({
                        terms: {
                            tags: !0
                        }
                    }).terms;
                    a[0].terms().forEach((function(e, n) {
                        s[n] && e.tagSafe(s[n].tags, "keptTag", t.world)
                    }
                    ))
                }
                i.replace(a[0], t)
            }
            )),
            this) : this.delete()
        },
        replace: function(e, t, n) {
            return void 0 === t ? this.replaceWith(e, n) : (this.match(e).replaceWith(t, n),
            this)
        }
    }
      , jn = F((function(e, t) {
        t.append = function(e) {
            var t = this;
            return e ? (this.uncache(),
            this.list.forEach((function(n) {
                var r = ot(e, t.world, t.pool())[0];
                t.buildFrom([r]).tagger(),
                n.append(r, t)
            }
            )),
            this) : this
        }
        ,
        t.insertAfter = t.append,
        t.insertAt = t.append,
        t.prepend = function(e) {
            var t = this;
            return e ? (this.uncache(),
            this.list.forEach((function(n) {
                var r = ot(e, t.world, t.pool())[0];
                t.buildFrom([r]).tagger(),
                n.prepend(r, t)
            }
            )),
            this) : this
        }
        ,
        t.insertBefore = t.prepend,
        t.concat = function() {
            this.uncache();
            for (var e = this.list.slice(0), t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                if ("string" == typeof n) {
                    var r = ot(n, this.world);
                    e = e.concat(r)
                } else
                    "Doc" === n.isA ? e = e.concat(n.list) : "Phrase" === n.isA && e.push(n)
            }
            return this.buildFrom(e)
        }
        ,
        t.delete = function(e) {
            var t = this;
            this.uncache();
            var n = this;
            return e && (n = this.match(e)),
            n.list.forEach((function(e) {
                return e.delete(t)
            }
            )),
            this
        }
        ,
        t.remove = t.delete
    }
    ))
      , Gn = (jn.append,
    jn.insertAfter,
    jn.insertAt,
    jn.prepend,
    jn.insertBefore,
    jn.concat,
    jn.remove,
    {
        clean: !0,
        reduced: !0,
        root: !0
    })
      , Nn = {
        text: function(e) {
            var t = this;
            e = e || {};
            var n = !1;
            0 === this.parents().length && (n = !0),
            ("root" === e || "object" === r(e) && e.root) && this.list.forEach((function(e) {
                e.terms().forEach((function(e) {
                    null === e.root && e.setRoot(t.world)
                }
                ))
            }
            ));
            var i = this.list.reduce((function(r, i, a) {
                var o = !n && 0 === a
                  , s = !n && a === t.list.length - 1;
                return r + i.text(e, o, s)
            }
            ), "");
            return !0 !== Gn[e] && !0 !== e.reduced && !0 !== e.clean && !0 !== e.root || (i = i.trim()),
            i
        }
    }
      , Fn = F((function(e, t) {
        var n = {
            text: !0,
            terms: !0,
            trim: !0
        }
          , i = function(e) {
            var t = 0
              , n = 0
              , r = {};
            return e.termList().forEach((function(e) {
                r[e.id] = {
                    index: n,
                    start: t + e.pre.length,
                    length: e.text.length
                },
                t += e.pre.length + e.text.length + e.post.length,
                n += 1
            }
            )),
            r
        };
        t.json = function() {
            var e = this
              , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ("number" == typeof t && this.list[t])
                return this.list[t].json(n);
            ("root" === (t = Object.assign({}, n, t)) || "object" === r(t) && t.root) && this.list.forEach((function(t) {
                t.terms().forEach((function(t) {
                    null === t.root && t.setRoot(e.world)
                }
                ))
            }
            )),
            t.unique && (t.reduced = !0),
            t.offset && (t.terms = !0 === t.terms ? {} : t.terms,
            t.terms.offset = !0),
            (t.index || t.terms.index) && (t.terms = !0 === t.terms ? {} : t.terms,
            t.terms.id = !0);
            var a = this.list.map((function(n) {
                return n.json(t, e.world)
            }
            ));
            if (t.terms.offset || t.offset || t.terms.index || t.index) {
                var o = i(this.all());
                (t.terms.index || t.index) && a.forEach((function(e) {
                    e.terms.forEach((function(e) {
                        e.index = o[e.id].index
                    }
                    )),
                    e.index = e.terms[0].index
                }
                )),
                (t.terms.offset || t.offset) && a.forEach((function(e) {
                    e.terms.forEach((function(e) {
                        e.offset = o[e.id] || {}
                    }
                    ));
                    var t = e.terms.reduce((function(e, t) {
                        return e += t.offset.length || 0
                    }
                    ), 0);
                    e.offset = e.terms[0].offset,
                    e.offset.length = t
                }
                ))
            }
            if (t.frequency || t.freq || t.count) {
                var s = {};
                this.list.forEach((function(e) {
                    var t = e.text("reduced");
                    s[t] = s[t] || 0,
                    s[t] += 1
                }
                )),
                this.list.forEach((function(e, t) {
                    a[t].count = s[e.text("reduced")]
                }
                ))
            }
            if (t.unique) {
                var u = {};
                a = a.filter((function(e) {
                    return !0 !== u[e.reduced] && (u[e.reduced] = !0,
                    !0)
                }
                ))
            }
            return a
        }
        ,
        t.data = t.json
    }
    ))
      , Bn = (Fn.json,
    Fn.data,
    ["Person", "Place", "Organization"])
      , On = {
        Noun: {
            notA: ["Verb", "Adjective", "Adverb"]
        },
        Singular: {
            isA: "Noun",
            notA: "Plural"
        },
        ProperNoun: {
            isA: "Noun"
        },
        Person: {
            isA: ["ProperNoun", "Singular"],
            notA: ["Place", "Organization", "Date"]
        },
        FirstName: {
            isA: "Person"
        },
        MaleName: {
            isA: "FirstName",
            notA: ["FemaleName", "LastName"]
        },
        FemaleName: {
            isA: "FirstName",
            notA: ["MaleName", "LastName"]
        },
        LastName: {
            isA: "Person",
            notA: ["FirstName"]
        },
        Honorific: {
            isA: "Noun",
            notA: ["FirstName", "LastName"]
        },
        Place: {
            isA: "Singular",
            notA: ["Person", "Organization"]
        },
        Country: {
            isA: ["Place", "ProperNoun"],
            notA: ["City"]
        },
        City: {
            isA: ["Place", "ProperNoun"],
            notA: ["Country"]
        },
        Region: {
            isA: ["Place", "ProperNoun"]
        },
        Address: {
            isA: "Place"
        },
        Organization: {
            isA: ["Singular", "ProperNoun"],
            notA: ["Person", "Place"]
        },
        SportsTeam: {
            isA: "Organization"
        },
        School: {
            isA: "Organization"
        },
        Company: {
            isA: "Organization"
        },
        Plural: {
            isA: "Noun",
            notA: ["Singular"]
        },
        Uncountable: {
            isA: "Noun"
        },
        Pronoun: {
            isA: "Noun",
            notA: Bn
        },
        Actor: {
            isA: "Noun",
            notA: Bn
        },
        Activity: {
            isA: "Noun",
            notA: ["Person", "Place"]
        },
        Unit: {
            isA: "Noun",
            notA: Bn
        },
        Demonym: {
            isA: ["Noun", "ProperNoun"],
            notA: Bn
        },
        Possessive: {
            isA: "Noun"
        }
    }
      , Dn = {
        Verb: {
            notA: ["Noun", "Adjective", "Adverb", "Value"]
        },
        PresentTense: {
            isA: "Verb",
            notA: ["PastTense", "Copula", "FutureTense"]
        },
        Infinitive: {
            isA: "PresentTense",
            notA: ["PastTense", "Gerund"]
        },
        Gerund: {
            isA: "PresentTense",
            notA: ["PastTense", "Copula", "FutureTense"]
        },
        PastTense: {
            isA: "Verb",
            notA: ["FutureTense"]
        },
        FutureTense: {
            isA: "Verb"
        },
        Copula: {
            isA: "Verb"
        },
        Modal: {
            isA: "Verb",
            notA: ["Infinitive"]
        },
        PerfectTense: {
            isA: "Verb",
            notA: "Gerund"
        },
        Pluperfect: {
            isA: "Verb"
        },
        Participle: {
            isA: "Verb"
        },
        PhrasalVerb: {
            isA: "Verb"
        },
        Particle: {
            isA: "PhrasalVerb"
        }
    }
      , Tn = {
        Value: {
            notA: ["Verb", "Adjective", "Adverb"]
        },
        Ordinal: {
            isA: "Value",
            notA: ["Cardinal"]
        },
        Cardinal: {
            isA: "Value",
            notA: ["Ordinal"]
        },
        RomanNumeral: {
            isA: "Cardinal",
            notA: ["Ordinal", "TextValue"]
        },
        TextValue: {
            isA: "Value",
            notA: ["NumericValue"]
        },
        NumericValue: {
            isA: "Value",
            notA: ["TextValue"]
        },
        Money: {
            isA: "Cardinal"
        },
        Percent: {
            isA: "Value"
        }
    }
      , Vn = ["Noun", "Verb", "Adjective", "Adverb", "Value"]
      , zn = {
        Adjective: {
            notA: ["Noun", "Verb", "Adverb", "Value"]
        },
        Comparable: {
            isA: ["Adjective"]
        },
        Comparative: {
            isA: ["Adjective"]
        },
        Superlative: {
            isA: ["Adjective"],
            notA: ["Comparative"]
        },
        NumberRange: {
            isA: ["Contraction"]
        },
        Adverb: {
            notA: ["Noun", "Verb", "Adjective", "Value"]
        },
        Date: {
            notA: ["Verb", "Conjunction", "Adverb", "Preposition", "Adjective"]
        },
        Month: {
            isA: ["Date", "Singular"],
            notA: ["Year", "WeekDay", "Time"]
        },
        WeekDay: {
            isA: ["Date", "Noun"]
        },
        Time: {
            isA: ["Date"],
            notA: ["Value"]
        },
        Determiner: {
            notA: Vn
        },
        Conjunction: {
            notA: Vn
        },
        Preposition: {
            notA: Vn
        },
        QuestionWord: {
            notA: ["Determiner"]
        },
        Currency: {},
        Expression: {
            notA: ["Noun", "Adjective", "Verb", "Adverb"]
        },
        Abbreviation: {},
        Url: {
            notA: ["HashTag", "PhoneNumber", "Verb", "Adjective", "Value", "AtMention", "Email"]
        },
        PhoneNumber: {
            notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention", "Email"]
        },
        HashTag: {},
        AtMention: {
            isA: ["Noun"],
            notA: ["HashTag", "Verb", "Adjective", "Value", "Email"]
        },
        Emoji: {
            notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
        },
        Emoticon: {
            notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
        },
        Email: {
            notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
        },
        Auxiliary: {
            notA: ["Noun", "Adjective", "Value"]
        },
        Acronym: {
            notA: ["Plural", "RomanNumeral"]
        },
        Negative: {
            notA: ["Noun", "Adjective", "Value"]
        },
        Condition: {
            notA: ["Verb", "Adjective", "Noun", "Value"]
        }
    }
      , Hn = {
        Noun: "blue",
        Verb: "green",
        Negative: "green",
        Date: "red",
        Value: "red",
        Adjective: "magenta",
        Preposition: "cyan",
        Conjunction: "cyan",
        Determiner: "cyan",
        Adverb: "cyan"
    }
      , In = function(e) {
        return Object.keys(e).forEach((function(t) {
            Hn[t] ? e[t].color = Hn[t] : e[t].isA.some((function(n) {
                return !!Hn[n] && (e[t].color = Hn[n],
                !0)
            }
            ))
        }
        )),
        e
    }
      , Mn = function(e) {
        return Object.keys(e).forEach((function(t) {
            for (var n = e[t], r = n.isA.length, i = 0; i < r; i++) {
                var a = n.isA[i];
                e[a] && (n.isA = n.isA.concat(e[a].isA))
            }
            n.isA = function(e) {
                return e.filter((function(e, t, n) {
                    return n.indexOf(e) === t
                }
                ))
            }(n.isA)
        }
        )),
        e
    }
      , Sn = function(e) {
        var t = Object.keys(e);
        return t.forEach((function(n) {
            var r = e[n];
            r.notA = r.notA || [],
            r.isA.forEach((function(t) {
                if (e[t] && e[t].notA) {
                    var n = "string" == typeof e[t].notA ? [e[t].isA] : e[t].notA || [];
                    r.notA = r.notA.concat(n)
                }
            }
            ));
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                -1 !== e[a].notA.indexOf(n) && r.notA.push(a)
            }
            r.notA = function(e) {
                return e.filter((function(e, t, n) {
                    return n.indexOf(e) === t
                }
                ))
            }(r.notA)
        }
        )),
        e
    }
      , Ln = function(e) {
        var t = Object.keys(e);
        return t.forEach((function(n) {
            var r = e[n];
            r.lineage = [];
            for (var i = 0; i < t.length; i++)
                -1 !== e[t[i]].isA.indexOf(n) && r.lineage.push(t[i])
        }
        )),
        e
    }
      , _n = function(e) {
        return e = function(e) {
            return Object.keys(e).forEach((function(t) {
                var n = e[t];
                n.isA = n.isA || [],
                "string" == typeof n.isA && (n.isA = [n.isA]),
                n.notA = n.notA || [],
                "string" == typeof n.notA && (n.notA = [n.notA])
            }
            )),
            e
        }(e),
        e = Mn(e),
        e = Sn(e),
        e = In(e),
        e = Ln(e)
    }
      , qn = function(e, t) {
        Object.keys(e).forEach((function(n) {
            t[n] = e[n]
        }
        ))
    }
      , Wn = function() {
        var e = {};
        return qn(On, e),
        qn(Dn, e),
        qn(Tn, e),
        qn(zn, e),
        e = _n(e)
    }()
      , Jn = F((function(e) {
        var t = function(e, t) {
            for (e = e.toString(); e.length < t; )
                e += " ";
            return e
        };
        var n = {
            green: "#7f9c6c",
            red: "#914045",
            blue: "#6699cc",
            magenta: "#6D5685",
            cyan: "#2D85A8",
            yellow: "#e6d7b3",
            black: "#303b50"
        }
          , r = {
            green: function(e) {
                return "[32m" + e + "[0m"
            },
            red: function(e) {
                return "[31m" + e + "[0m"
            },
            blue: function(e) {
                return "[34m" + e + "[0m"
            },
            magenta: function(e) {
                return "[35m" + e + "[0m"
            },
            cyan: function(e) {
                return "[36m" + e + "[0m"
            },
            yellow: function(e) {
                return "[33m" + e + "[0m"
            },
            black: function(e) {
                return "[30m" + e + "[0m"
            }
        };
        e.exports = function(e) {
            return "undefined" != typeof window && window.document ? (function(e) {
                e.list.forEach((function(e) {
                    console.log('\n%c"' + e.text() + '"', "color: #e6d7b3;"),
                    (e.cache.terms || e.terms()).forEach((function(e) {
                        var r = Object.keys(e.tags)
                          , i = e.text || "-";
                        e.implicit && (i = "[" + e.implicit + "]");
                        var a = "'" + i + "'";
                        a = t(a, 8);
                        var o = r.find((function(e) {
                            return Wn[e] && Wn[e].color
                        }
                        ))
                          , s = "steelblue";
                        Wn[o] && (s = Wn[o].color,
                        s = n[s]),
                        console.log("   ".concat(a, "  -  %c").concat(r.join(", ")), "color: ".concat(s || "steelblue", ";"))
                    }
                    ))
                }
                ))
            }(e),
            e) : (console.log(r.blue("=====")),
            e.list.forEach((function(e) {
                console.log(r.blue("  -----")),
                (e.cache.terms || e.terms()).forEach((function(e) {
                    var n = Object.keys(e.tags)
                      , i = e.text || "-";
                    e.implicit && (i = "[" + e.implicit + "]");
                    var a = "'" + (i = r.yellow(i)) + "'";
                    a = t(a, 18);
                    var o = r.blue("  ｜ ") + a + "  - " + function(e) {
                        return (e = e.map((function(e) {
                            if (!Wn.hasOwnProperty(e))
                                return e;
                            var t = Wn[e].color || "blue";
                            return r[t](e)
                        }
                        ))).join(", ")
                    }(n);
                    console.log(o)
                }
                ))
            }
            )),
            console.log(""),
            e)
        }
    }
    ))
      , Rn = function(e) {
        var t = e.json({
            text: !1,
            terms: !1,
            reduced: !0
        })
          , n = {};
        t.forEach((function(e) {
            n[e.reduced] || (e.count = 0,
            n[e.reduced] = e),
            n[e.reduced].count += 1
        }
        ));
        var r = Object.keys(n).map((function(e) {
            return n[e]
        }
        ));
        return r.sort((function(e, t) {
            return e.count > t.count ? -1 : e.count < t.count ? 1 : 0
        }
        )),
        r
    }
      , Un = {
        debug: function() {
            return Jn(this),
            this
        },
        out: function(e) {
            if ("text" === e)
                return this.text();
            if ("normal" === e)
                return this.text("normal");
            if ("json" === e)
                return this.json();
            if ("offset" === e || "offsets" === e)
                return this.json({
                    offset: !0
                });
            if ("array" === e)
                return this.json({
                    terms: !1
                }).map((function(e) {
                    return e.text
                }
                ));
            if ("freq" === e || "frequency" === e)
                return Rn(this);
            if ("terms" === e) {
                var t = [];
                return this.json({
                    text: !1,
                    terms: {
                        text: !0
                    }
                }).forEach((function(e) {
                    var n = e.terms.map((function(e) {
                        return e.text
                    }
                    ));
                    n = n.filter((function(e) {
                        return e
                    }
                    )),
                    t = t.concat(n)
                }
                )),
                t
            }
            return "tags" === e ? this.list.map((function(e) {
                return e.terms().reduce((function(e, t) {
                    return e[t.clean || t.implicit] = Object.keys(t.tags),
                    e
                }
                ), {})
            }
            )) : "debug" === e ? (Jn(this),
            this) : this.text()
        }
    }
      , Kn = function(e, t) {
        var n = t.tags
          , r = [];
        return e.forEach((function(e) {
            n[e] && n[e].isA && (r = r.concat(n[e].isA))
        }
        )),
        r = r.reduce((function(e, t) {
            return e[t] = !0,
            e
        }
        ), {}),
        e = e.filter((function(e) {
            return !r[e]
        }
        ))
    }
      , Qn = {
        export: function() {
            var e = this
              , t = this.json({
                text: !0,
                trim: !1,
                terms: {
                    tags: !0,
                    whitespace: !0
                }
            })
              , n = [];
            t.forEach((function(t) {
                t.terms.forEach((function(t) {
                    var r = Kn(t.tags, e.world);
                    n = n.concat(r)
                }
                ))
            }
            )),
            n = function(e) {
                var t = {};
                e.forEach((function(e) {
                    t[e] = t[e] || 0,
                    t[e] += 1
                }
                ));
                var n = Object.keys(t);
                return (n = n.sort((function(e, n) {
                    return t[e] > t[n] ? -1 : 1
                }
                ))).map((function(e) {
                    return [e, t[e]]
                }
                ))
            }(n);
            var r = {};
            return n.forEach((function(e, t) {
                r[e[0]] = t
            }
            )),
            t = t.map((function(t) {
                var n = t.terms.map((function(t) {
                    var n = t.tags;
                    return n = (n = (n = Kn(n, e.world)).map((function(e) {
                        return r[e]
                    }
                    ))).join(",")
                }
                ));
                return n = n.join("|"),
                [t.text, n]
            }
            )),
            {
                tags: Object.keys(r),
                list: t
            }
        }
    }
      , Xn = {
        alpha: function(e, t) {
            var n = e.text("clean")
              , r = t.text("clean");
            return n < r ? -1 : n > r ? 1 : 0
        },
        length: function(e, t) {
            var n = e.text().trim().length
              , r = t.text().trim().length;
            return n < r ? 1 : n > r ? -1 : 0
        },
        wordCount: function(e, t) {
            var n = e.wordCount()
              , r = t.wordCount();
            return n < r ? 1 : n > r ? -1 : 0
        }
    };
    Xn.alphabetical = Xn.alpha,
    Xn.wordcount = Xn.wordCount;
    var Zn = {
        index: !0,
        sequence: !0,
        seq: !0,
        sequential: !0,
        chron: !0,
        chronological: !0
    }
      , Yn = {
        sort: function(e) {
            return "freq" === (e = e || "alpha") || "frequency" === e || "topk" === e ? (n = {},
            r = {
                case: !0,
                punctuation: !1,
                whitespace: !0,
                unicode: !0
            },
            (t = this).list.forEach((function(e) {
                var t = e.text(r);
                n[t] = n[t] || 0,
                n[t] += 1
            }
            )),
            t.list.sort((function(e, t) {
                var i = n[e.text(r)]
                  , a = n[t.text(r)];
                return i < a ? 1 : i > a ? -1 : 0
            }
            )),
            t) : Zn.hasOwnProperty(e) ? function(e) {
                var t = {};
                return e.json({
                    terms: {
                        offset: !0
                    }
                }).forEach((function(e) {
                    t[e.terms[0].id] = e.terms[0].offset.start
                }
                )),
                e.list = e.list.sort((function(e, n) {
                    return t[e.start] > t[n.start] ? 1 : t[e.start] < t[n.start] ? -1 : 0
                }
                )),
                e
            }(this) : "function" == typeof (e = Xn[e] || e) ? (this.list = this.list.sort(e),
            this) : this;
            var t, n, r
        },
        reverse: function() {
            var e = [].concat(this.list);
            return e = e.reverse(),
            this.buildFrom(e)
        },
        unique: function() {
            var e = [].concat(this.list)
              , t = {};
            return e = e.filter((function(e) {
                var n = e.text("reduced").trim();
                return !0 !== t.hasOwnProperty(n) && (t[n] = !0,
                !0)
            }
            )),
            this.buildFrom(e)
        }
    }
      , er = /[\[\]{}⟨⟩:,،、‒–—―…‹›«»‐\-;\/⁄·*\•^†‡°¡¿※№÷×ºª%‰=‱¶§~|‖¦©℗®℠™¤₳฿]/g
      , tr = /['‘’“”"′″‴]+/g
      , nr = {
        whitespace: function(e) {
            var t = e.list.map((function(e) {
                return e.terms()
            }
            ));
            t.forEach((function(e, n) {
                e.forEach((function(r, i) {
                    !0 !== r.hasDash() ? (r.pre = r.pre.replace(/\s/g, ""),
                    r.post = r.post.replace(/\s/g, ""),
                    (e.length - 1 !== i || t[n + 1]) && (r.implicit && !0 === Boolean(r.text) || !0 !== r.hasHyphen() && (r.post += " "))) : r.post = " - "
                }
                ))
            }
            ))
        },
        punctuation: function(e) {
            e.forEach((function(e) {
                !0 === e.hasHyphen() && (e.post = " "),
                e.pre = e.pre.replace(er, ""),
                e.post = e.post.replace(er, ""),
                e.post = e.post.replace(/\.\.\./, ""),
                !0 === /!/.test(e.post) && (e.post = e.post.replace(/!/g, ""),
                e.post = "!" + e.post),
                !0 === /\?/.test(e.post) && (e.post = e.post.replace(/[\?!]*/, ""),
                e.post = "?" + e.post)
            }
            ))
        },
        unicode: function(e) {
            e.forEach((function(e) {
                !0 !== e.isImplicit() && (e.text = m(e.text))
            }
            ))
        },
        quotations: function(e) {
            e.forEach((function(e) {
                e.post = e.post.replace(tr, ""),
                e.pre = e.pre.replace(tr, "")
            }
            ))
        },
        adverbs: function(e) {
            e.match("#Adverb").not("(not|nary|seldom|never|barely|almost|basically|so)").remove()
        },
        abbreviations: function(e) {
            e.list.forEach((function(e) {
                var t = e.terms();
                t.forEach((function(e, n) {
                    !0 === e.tags.Abbreviation && t[n + 1] && (e.post = e.post.replace(/^\./, ""))
                }
                ))
            }
            ))
        }
    }
      , rr = {
        whitespace: !0,
        unicode: !0,
        punctuation: !0,
        emoji: !0,
        acronyms: !0,
        abbreviations: !0,
        case: !1,
        contractions: !1,
        parentheses: !1,
        quotations: !1,
        adverbs: !1,
        possessives: !1,
        verbs: !1,
        nouns: !1,
        honorifics: !1
    }
      , ir = {
        light: {},
        medium: {
            case: !0,
            contractions: !0,
            parentheses: !0,
            quotations: !0,
            adverbs: !0
        }
    };
    ir.heavy = Object.assign({}, ir.medium, {
        possessives: !0,
        verbs: !0,
        nouns: !0,
        honorifics: !0
    });
    var ar = {
        normalize: function(e) {
            "string" == typeof (e = e || {}) && (e = ir[e] || {}),
            e = Object.assign({}, rr, e),
            this.uncache();
            var t = this.termList();
            return e.case && this.toLowerCase(),
            e.whitespace && nr.whitespace(this),
            e.unicode && nr.unicode(t),
            e.punctuation && nr.punctuation(t),
            e.emoji && this.remove("(#Emoji|#Emoticon)"),
            e.acronyms && this.acronyms().strip(),
            e.abbreviations && nr.abbreviations(this),
            (e.contraction || e.contractions) && this.contractions().expand(),
            e.parentheses && this.parentheses().unwrap(),
            (e.quotations || e.quotes) && nr.quotations(t),
            e.adverbs && nr.adverbs(this),
            (e.possessive || e.possessives) && this.possessives().strip(),
            e.verbs && this.verbs().toInfinitive(),
            (e.nouns || e.plurals) && this.nouns().toSingular(),
            e.honorifics && this.remove("#Honorific"),
            this
        }
    }
      , or = F((function(e, t) {
        t.splitOn = function(e) {
            if (!e)
                return this.parent().splitOn(this);
            var t = Oe(e)
              , n = [];
            return this.list.forEach((function(e) {
                var r = e.match(t);
                if (0 !== r.length) {
                    var i = e;
                    r.forEach((function(e) {
                        var t = i.splitOn(e);
                        t.before && n.push(t.before),
                        t.match && n.push(t.match),
                        i = t.after
                    }
                    )),
                    i && n.push(i)
                } else
                    n.push(e)
            }
            )),
            this.buildFrom(n)
        }
        ,
        t.splitAfter = function(e) {
            if (!e)
                return this.parent().splitAfter(this);
            var t = Oe(e)
              , n = [];
            return this.list.forEach((function(e) {
                var r = e.match(t);
                if (0 !== r.length) {
                    var i = e;
                    r.forEach((function(e) {
                        var t = i.splitOn(e);
                        t.before && t.match ? (t.before.length += t.match.length,
                        n.push(t.before)) : t.match && n.push(t.match),
                        i = t.after
                    }
                    )),
                    i && n.push(i)
                } else
                    n.push(e)
            }
            )),
            this.buildFrom(n)
        }
        ,
        t.split = t.splitAfter,
        t.splitBefore = function(e) {
            if (!e)
                return this.parent().splitBefore(this);
            var t = Oe(e)
              , n = [];
            return this.list.forEach((function(e) {
                var r = e.match(t);
                if (0 !== r.length) {
                    var i = e;
                    r.forEach((function(e) {
                        var t = i.splitOn(e);
                        t.before && n.push(t.before),
                        t.match && t.after && (t.match.length += t.after.length),
                        i = t.match
                    }
                    )),
                    i && n.push(i)
                } else
                    n.push(e)
            }
            )),
            this.buildFrom(n)
        }
        ,
        t.segment = function(e, t) {
            e = e || {},
            t = t || {
                text: !0
            };
            var n = this
              , r = Object.keys(e);
            return r.forEach((function(e) {
                n = n.splitOn(e)
            }
            )),
            n.list.forEach((function(t) {
                for (var n = 0; n < r.length; n += 1)
                    if (t.has(r[n]))
                        return void (t.segment = e[r[n]])
            }
            )),
            n.list.map((function(e) {
                var n = e.json(t);
                return n.segment = e.segment || null,
                n
            }
            ))
        }
    }
    ))
      , sr = (or.splitOn,
    or.splitAfter,
    or.split,
    or.splitBefore,
    or.segment,
    function(e, t) {
        var n = e.world;
        return e.list.forEach((function(e) {
            e.terms().forEach((function(e) {
                return e[t](n)
            }
            ))
        }
        )),
        e
    }
    )
      , ur = {
        toLowerCase: function() {
            return sr(this, "toLowerCase")
        },
        toUpperCase: function() {
            return sr(this, "toUpperCase")
        },
        toTitleCase: function() {
            return this.tag("TitleCase"),
            sr(this, "toTitleCase")
        },
        toCamelCase: function() {
            return this.list.forEach((function(e) {
                var t = e.terms();
                t.forEach((function(e, n) {
                    0 !== n && e.toTitleCase(),
                    n !== t.length - 1 && (e.post = "")
                }
                ))
            }
            )),
            this
        }
    }
      , lr = F((function(e, t) {
        t.pre = function(e, t) {
            return void 0 === e ? this.list[0].terms(0).pre : (this.list.forEach((function(n) {
                var r = n.terms(0);
                !0 === t ? r.pre += e : r.pre = e
            }
            )),
            this)
        }
        ,
        t.post = function(e, t) {
            return void 0 === e ? this.list.map((function(e) {
                var t = e.terms();
                return t[t.length - 1].post
            }
            )) : (this.list.forEach((function(n) {
                var r = n.terms()
                  , i = r[r.length - 1];
                !0 === t ? i.post += e : i.post = e
            }
            )),
            this)
        }
        ,
        t.trim = function() {
            return this.list = this.list.map((function(e) {
                return e.trim()
            }
            )),
            this
        }
        ,
        t.hyphenate = function() {
            return this.list.forEach((function(e) {
                var t = e.terms();
                t.forEach((function(e, n) {
                    0 !== n && (e.pre = ""),
                    t[n + 1] && (e.post = "-")
                }
                ))
            }
            )),
            this
        }
        ,
        t.dehyphenate = function() {
            var e = /(-|–|—)/;
            return this.list.forEach((function(t) {
                t.terms().forEach((function(t) {
                    e.test(t.post) && (t.post = " ")
                }
                ))
            }
            )),
            this
        }
        ,
        t.deHyphenate = t.dehyphenate,
        t.toQuotations = function(e, t) {
            return e = e || '"',
            t = t || '"',
            this.list.forEach((function(n) {
                var r = n.terms();
                r[0].pre = e + r[0].pre;
                var i = r[r.length - 1];
                i.post = t + i.post
            }
            )),
            this
        }
        ,
        t.toQuotation = t.toQuotations,
        t.toParentheses = function(e, t) {
            return e = e || "(",
            t = t || ")",
            this.list.forEach((function(n) {
                var r = n.terms();
                r[0].pre = e + r[0].pre;
                var i = r[r.length - 1];
                i.post = t + i.post
            }
            )),
            this
        }
    }
    ))
      , cr = (lr.pre,
    lr.post,
    lr.trim,
    lr.hyphenate,
    lr.dehyphenate,
    lr.deHyphenate,
    lr.toQuotations,
    lr.toQuotation,
    lr.toParentheses,
    {
        join: function(e) {
            this.uncache();
            for (var t = this.list[0], n = t.length, r = {}, i = 1; i < this.list.length; i++) {
                var a = this.list[i];
                r[a.start] = !0;
                var o = t.lastTerm();
                e && (o.post += e),
                o.next = a.start,
                a.terms(0).prev = o.id,
                t.length += a.length
            }
            var s = t.length - n;
            return this.parents().forEach((function(e) {
                e.list.forEach((function(e) {
                    for (var n = e.terms(), r = 0; r < n.length; r++)
                        if (n[r].id === t.start) {
                            e.length += s;
                            break
                        }
                }
                )),
                e.list = e.list.filter((function(e) {
                    return !0 !== r[e.start]
                }
                ))
            }
            )),
            this.buildFrom([t])
        }
    })
      , hr = /[,\)"';:\-–—\.…]/
      , fr = function(e, t) {
        if (e.found) {
            for (var n = e.termList(), r = 0; r < n.length - 1; r++) {
                var i = n[r];
                if (hr.test(i.post))
                    return
            }
            n.forEach((function(e) {
                e.implicit = e.clean
            }
            )),
            n[0].text += t,
            n.slice(1).forEach((function(e) {
                e.text = ""
            }
            ));
            for (var a = 0; a < n.length - 1; a++) {
                var o = n[a];
                o.post = o.post.replace(/ /, "")
            }
        }
    }
      , dr = {
        contract: function() {
            var e = this.not("@hasContraction")
              , t = e.match("(we|they|you) are");
            return fr(t, "'re"),
            t = e.match("(he|she|they|it|we|you) will"),
            fr(t, "'ll"),
            t = e.match("(he|she|they|it|we) is"),
            fr(t, "'s"),
            t = e.match("#Person is"),
            fr(t, "'s"),
            t = e.match("#Person would"),
            fr(t, "'d"),
            t = e.match("(is|was|had|would|should|could|do|does|have|has|can) not"),
            fr(t, "n't"),
            t = e.match("(i|we|they) have"),
            fr(t, "'ve"),
            t = e.match("(would|should|could) have"),
            fr(t, "'ve"),
            t = e.match("i am"),
            fr(t, "'m"),
            t = e.match("going to"),
            this
        }
    }
      , pr = Object.assign({}, yn, wn, An, $n, Pn, Cn, xn, jn, Nn, Fn, Un, Qn, Yn, ar, or, ur, lr, cr, dr)
      , mr = {};
    [["terms", "."], ["hyphenated", "@hasHyphen ."], ["adjectives", "#Adjective"], ["hashTags", "#HashTag"], ["emails", "#Email"], ["emoji", "#Emoji"], ["emoticons", "#Emoticon"], ["atMentions", "#AtMention"], ["urls", "#Url"], ["adverbs", "#Adverb"], ["pronouns", "#Pronoun"], ["conjunctions", "#Conjunction"], ["prepositions", "#Preposition"]].forEach((function(e) {
        mr[e[0]] = function(t) {
            var n = this.match(e[1]);
            return "number" == typeof t && (n = n.get(t)),
            n
        }
    }
    )),
    mr.emojis = mr.emoji,
    mr.atmentions = mr.atMentions,
    mr.words = mr.terms,
    mr.phoneNumbers = function(e) {
        var t = this.splitAfter("@hasComma");
        return t = t.match("#PhoneNumber+"),
        "number" == typeof e && (t = t.get(e)),
        t
    }
    ,
    mr.money = function(e) {
        var t = this.match("#Money #Currency?");
        return "number" == typeof e && (t = t.get(e)),
        t
    }
    ,
    mr.places = function(e) {
        var t = this.match("(#City && @hasComma) (#Region|#Country)")
          , n = this.not(t).splitAfter("@hasComma");
        return (n = n.concat(t)).sort("index"),
        n = n.match("#Place+"),
        "number" == typeof e && (n = n.get(e)),
        n
    }
    ,
    mr.organizations = function(e) {
        var t = this.clauses();
        return t = t.match("#Organization+"),
        "number" == typeof e && (t = t.get(e)),
        t
    }
    ,
    mr.entities = function(e) {
        var t = this.clauses()
          , n = t.people();
        return (n = (n = (n = n.concat(t.places())).concat(t.organizations())).not(["someone", "man", "woman", "mother", "brother", "sister", "father"])).sort("sequence"),
        "number" == typeof e && (n = n.get(e)),
        n
    }
    ,
    mr.things = mr.entities,
    mr.topics = mr.entities,
    mr.sentences = function() {
        return this.all()
    }
    ;
    var gr = mr
      , vr = function(e, t, n) {
        var r = n.words
          , i = e[t].reduced + " " + e[t + 1].reduced;
        return void 0 !== r[i] && !0 === r.hasOwnProperty(i) ? (e[t].tag(r[i], "lexicon-two", n),
        e[t + 1].tag(r[i], "lexicon-two", n),
        1) : t + 2 < e.length && void 0 !== r[i += " " + e[t + 2].reduced] && !0 === r.hasOwnProperty(i) ? (e[t].tag(r[i], "lexicon-three", n),
        e[t + 1].tag(r[i], "lexicon-three", n),
        e[t + 2].tag(r[i], "lexicon-three", n),
        2) : t + 3 < e.length && void 0 !== r[i += " " + e[t + 3].reduced] && !0 === r.hasOwnProperty(i) ? (e[t].tag(r[i], "lexicon-four", n),
        e[t + 1].tag(r[i], "lexicon-four", n),
        e[t + 2].tag(r[i], "lexicon-four", n),
        e[t + 3].tag(r[i], "lexicon-four", n),
        3) : 0
    }
      , br = function(e, t) {
        for (var n = t.words, r = t.hasCompound, i = 0; i < e.length; i += 1) {
            var a = e[i].clean;
            if (!0 === r[a] && i + 1 < e.length) {
                var o = vr(e, i, t);
                if (o > 0) {
                    i += o;
                    continue
                }
            }
            void 0 !== n[a] && !0 === n.hasOwnProperty(a) && e[i].tag(n[a], "lexicon", t),
            a !== e[i].reduced && !0 === n.hasOwnProperty(e[i].reduced) && e[i].tag(n[e[i].reduced], "lexicon", t)
        }
        return e
    }
      , yr = /[\'‘’‛‵′`´]$/
      , wr = /^[A-Z]('s|,)?$/
      , Ar = {
        I: !0,
        A: !0
    }
      , kr = function(e, t, n) {
        var r = e[t];
        if (yr.test(r.text) && !yr.test(r.pre) && !yr.test(r.post) && r.clean.length > 2) {
            var i = r.clean[r.clean.length - 2];
            if ("s" === i)
                return void r.tag(["Possessive", "Noun"], "end-tick", n);
            "n" === i && r.tag(["Gerund"], "chillin", n)
        }
        !function(e, t) {
            var n = e.reduced;
            return !!e.tags.Acronym || !(n.length > 4 && t.words[n]) && e.isAcronym()
        }(r, n) ? !Ar.hasOwnProperty(r.text) && wr.test(r.text) && (r.tag("Acronym", "one-letter-acronym", n),
        r.tag("Noun", "one-letter-infer", n)) : (r.tag("Acronym", "acronym-step", n),
        r.tag("Noun", "acronym-infer", n))
    }
      , $r = [[/^[0-9]{3}-[0-9]{4}$/, "PhoneNumber"], [/^[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$/, "PhoneNumber"], [/^[-+]?[$€¥£][0-9]+(.[0-9]{1,2})?([a-z]{1,4})?$/, ["Money", "Value"]], [/^[-+]?[$€¥£][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$/, ["Money", "Value"]], [/^[-+]?[0-9]([0-9,.]+)?(usd|eur|jpy|gbp|cad|aud|chf|cny|hkd|nzd|kr|rub)$/i, ["Money", "Value"]], [/^\w+@\w+\.[a-z]{2,3}$/, "Email"], [/^#[a-z0-9_\u00C0-\u00FF]{2,}$/, "HashTag"], [/^@\w{2,}$/, "AtMention"], [/^(https?:\/\/|www\.)\w+\.[a-z]{2,3}/, "Url"], [/^[\w\.\/]+\.(com|net|gov|org|ly|edu|info|biz|ru|jp|de|in|uk|br)/, "Url"], [/^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$/, "Time"], [/^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$/, "Time"], [/^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$/, "Time"], [/^[PMCE]ST$/, "Time"], [/^utc ?[+-]?[0-9]+?$/, "Time"], [/^[a-z0-9]*? o\'?clock$/, "Time"], [/^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$/, "Date"], [/^[0-9]{1,4}\/[0-9]{1,2}\/[0-9]{1,4}$/, "Date"], [/^ma?c\'.*/, "LastName"], [/^o\'[drlkn].*/, "LastName"], [/^ma?cd[aeiou]/, "LastName"], [/^(lol)+[sz]$/, "Expression"], [/^(un|de|re)\\-[a-z\u00C0-\u00FF]{2}/, "Verb"], [/^[\-\+]?[0-9]+(\.[0-9])*$/, ["Cardinal", "NumericValue"]], [/^(over|under)[a-z]{2,}/, "Adjective"], [/^[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}$/, "Date"], [/^[\-\+]?[0-9][0-9,]*(\.[0-9])*$/, ["Cardinal", "NumericValue"]], [/^[-+]?[0-9]+(.[0-9]+)?$/, ["Cardinal", "NumericValue"]], [/^[0-9\.]{1,4}(st|nd|rd|th)?[-–][0-9\.]{1,4}(st|nd|rd|th)?$/, "NumberRange"], [/^[-+]?[0-9.,]{1,3}(,[0-9.,]{3})+(.[0-9]+)?$/, "NumericValue"], [/^.?[0-9]+([0-9,.]+)?%$/, ["Percent", "Cardinal", "NumericValue"]], [/^[0-9]{1,4}\/[0-9]{1,4}$/, "Fraction"], [/^[0-9\.]{1,2}[-–][0-9]{1,2}$/, ["Value", "NumberRange"]], [/^[0-9][0-9,\.]*(st|nd|rd|r?th)$/, ["NumericValue", "Ordinal"]], [/[0-9]\+$/, ["Cardinal", "NumericValue"]], [/^[0-9]+(st|nd|rd|th)$/, "Ordinal"], [/^[0-9\.]+([a-z]{1,4})$/, "Value"]]
      , Pr = /^[IVXLCDM]{2,}$/
      , Cr = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
      , Er = "Adjective"
      , xr = "Infinitive"
      , jr = "Singular"
      , Gr = "PastTense"
      , Nr = "Expression"
      , Fr = "LastName"
      , Br = {
        a: [[/.[aeiou]na$/, "Noun"], [/.[oau][wvl]ska$/, Fr], [/.[^aeiou]ica$/, jr], [/^([hyj]a)+$/, Nr]],
        c: [[/.[^aeiou]ic$/, Er]],
        d: [[/.[ia]sed$/, Er], [/.[gt]led$/, Er], [/.[td]ed$/, Gr], [/.[aeiou]red$/, Gr], [/.[^aeiou]led$/, Gr], [/[^aeiou]ard$/, jr], [/[aeiou][^aeiou]id$/, Er], [/[aeiou]c?ked$/, Gr], [/[^aeiou][aeiou][tvx]ed$/, Gr], [/.[vrl]id$/, Er]],
        e: [[/.[lnr]ize$/, xr], [/.[^aeiou]ise$/, xr], [/.[aeiou]te$/, xr], [/.[^aeiou][ai]ble$/, Er], [/.[^aeiou]eable$/, Er], [/.[ts]ive$/, Er]],
        h: [[/.[^aeiouf]ish$/, Er], [/.v[iy]ch$/, Fr], [/^ug?h+$/, Nr], [/^uh[ -]?oh$/, Nr]],
        i: [[/.[oau][wvl]ski$/, Fr]],
        k: [[/^(k)+$/, Nr]],
        l: [[/.[gl]ial$/, Er], [/.[^aeiou]ful$/, Er], [/.[nrtumcd]al$/, Er], [/.[^aeiou][ei]al$/, Er]],
        m: [[/.[^aeiou]ium$/, jr], [/[^aeiou]ism$/, jr], [/^h*u*m+$/, Nr], [/^\d+ ?[ap]m$/, "Date"]],
        n: [[/.[lsrnpb]ian$/, Er], [/[^aeiou]ician$/, "Actor"], [/[aeiou][ktrp]in$/, "Gerund"]],
        o: [[/^no+$/, Nr], [/^(yo)+$/, Nr], [/^woo+[pt]?$/, Nr]],
        r: [[/.[bdfklmst]ler$/, "Noun"], [/.[ilk]er$/, "Comparative"], [/[aeiou][pns]er$/, jr], [/[^i]fer$/, xr], [/.[^aeiou][ao]pher$/, "Actor"]],
        t: [[/.[di]est$/, "Superlative"], [/.[icldtgrv]ent$/, Er], [/[aeiou].*ist$/, Er], [/^[a-z]et$/, "Verb"]],
        s: [[/.[rln]ates$/, "PresentTense"], [/.[^z]ens$/, "Verb"], [/.[lstrn]us$/, jr], [/[aeiou][^aeiou]is$/, jr], [/[a-z]\'s$/, "Noun"], [/^yes+$/, Nr]],
        v: [[/.[^aeiou][ai][kln]ov$/, Fr]],
        y: [[/.[cts]hy$/, Er], [/.[st]ty$/, Er], [/.[gk]y$/, Er], [/.[tnl]ary$/, Er], [/.[oe]ry$/, jr], [/[rdntkbhs]ly$/, "Adverb"], [/...lly$/, "Adverb"], [/[bszmp]{2}y$/, Er], [/.(gg|bb|zz)ly$/, Er], [/.[aeiou]my$/, Er], [/[ea]{2}zy$/, Er], [/.[^aeiou]ity$/, jr]]
    }
      , Or = "Adjective"
      , Dr = "Infinitive"
      , Tr = "PresentTense"
      , Vr = "Singular"
      , zr = "PastTense"
      , Hr = "Adverb"
      , Ir = "Plural"
      , Mr = "Verb"
      , Sr = "LastName"
      , Lr = [null, null, {
        ea: Vr,
        ia: "Noun",
        ic: Or,
        ly: Hr,
        "'n": Mr,
        "'t": Mr
    }, {
        que: Or,
        lar: Or,
        ffy: Or,
        nny: Or,
        rmy: Or,
        azy: Or,
        oid: Or,
        mum: Or,
        ous: Or,
        end: Mr,
        sis: Vr,
        rol: Vr,
        ize: Dr,
        ify: Dr,
        zes: Tr,
        nes: Tr,
        ing: "Gerund",
        " so": Hr,
        "'ll": "Modal",
        "'re": "Copula"
    }, {
        teen: "Value",
        tors: "Noun",
        amed: zr,
        ched: zr,
        ends: Mr,
        oses: Tr,
        fies: Tr,
        ects: Tr,
        nded: zr,
        cede: Dr,
        tage: Dr,
        gate: Dr,
        vice: Vr,
        tion: Vr,
        cted: zr,
        ette: Vr,
        some: Or,
        llen: Or,
        ried: Or,
        gone: Or,
        made: Or,
        fore: Hr,
        less: Hr,
        ices: Ir,
        ions: Ir,
        ints: Ir,
        aped: zr,
        lked: zr,
        ould: "Modal",
        tive: "Actor",
        sson: Sr,
        czyk: Sr,
        chuk: Sr,
        enko: Sr,
        akis: Sr,
        nsen: Sr
    }, {
        fully: Hr,
        where: Hr,
        wards: Hr,
        urned: zr,
        tized: zr,
        eased: zr,
        ances: Ir,
        tures: Ir,
        ports: Ir,
        ettes: Ir,
        ities: Ir,
        rough: Or,
        ology: "Noun",
        bound: Or,
        tieth: "Ordinal",
        ishes: Tr,
        tches: Tr,
        nssen: Sr,
        marek: Sr
    }, {
        keeper: "Actor",
        logist: "Actor",
        auskas: Sr,
        teenth: "Value"
    }, {
        sdottir: Sr,
        opoulos: Sr
    }]
      , _r = {
        ":(": !0,
        ":)": !0,
        ":P": !0,
        ":p": !0,
        ":O": !0,
        ":3": !0,
        ":|": !0,
        ":/": !0,
        ":\\": !0,
        ":$": !0,
        ":*": !0,
        ":@": !0,
        ":-(": !0,
        ":-)": !0,
        ":-P": !0,
        ":-p": !0,
        ":-O": !0,
        ":-3": !0,
        ":-|": !0,
        ":-/": !0,
        ":-\\": !0,
        ":-$": !0,
        ":-*": !0,
        ":-@": !0,
        ":^(": !0,
        ":^)": !0,
        ":^P": !0,
        ":^p": !0,
        ":^O": !0,
        ":^3": !0,
        ":^|": !0,
        ":^/": !0,
        ":^\\": !0,
        ":^$": !0,
        ":^*": !0,
        ":^@": !0,
        "):": !0,
        "(:": !0,
        "$:": !0,
        "*:": !0,
        ")-:": !0,
        "(-:": !0,
        "$-:": !0,
        "*-:": !0,
        ")^:": !0,
        "(^:": !0,
        "$^:": !0,
        "*^:": !0,
        "<3": !0,
        "</3": !0,
        "<\\3": !0
    }
      , qr = /^(\u00a9|\u00ae|[\u2319-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/
      , Wr = {
        lexicon: br,
        punctuation: kr,
        regex: function(e, t) {
            for (var n = e.text, r = 0; r < $r.length; r += 1)
                if (!0 === $r[r][0].test(n)) {
                    e.tagSafe($r[r][1], "regex #" + r, t);
                    break
                }
            e.text.length >= 2 && Pr.test(n) && Cr.test(n) && e.tag("RomanNumeral", "xvii", t)
        },
        suffix: function(e, t) {
            !function(e, t) {
                var n = e.clean.length
                  , r = 7;
                n <= r && (r = n - 1);
                for (var i = r; i > 1; i -= 1) {
                    var a = e.clean.substr(n - i, n);
                    if (!0 === Lr[a.length].hasOwnProperty(a)) {
                        var o = Lr[a.length][a];
                        e.tagSafe(o, "suffix -" + a, t);
                        break
                    }
                }
            }(e, t),
            function(e, t) {
                var n = e.clean
                  , r = n[n.length - 1];
                if (!0 === Br.hasOwnProperty(r))
                    for (var i = Br[r], a = 0; a < i.length; a += 1)
                        if (!0 === i[a][0].test(n)) {
                            e.tagSafe(i[a][1], "endReg ".concat(r, " #").concat(a), t);
                            break
                        }
            }(e, t)
        },
        emoji: function(e, t) {
            var n, r = e.pre + e.text + e.post;
            !0 === function(e) {
                return ":" === e.charAt(0) && (null !== e.match(/:.?$/) && (!e.match(" ") && !(e.length > 35)))
            }(r = r.trim()) && (e.tag("Emoji", "comma-emoji", t),
            e.text = r,
            e.pre = e.pre.replace(":", ""),
            e.post = e.post.replace(":", "")),
            e.text.match(qr) && (e.tag("Emoji", "unicode-emoji", t),
            e.text = r),
            !0 === (n = (n = r).replace(/^[:;]/, ":"),
            _r.hasOwnProperty(n)) && (e.tag("Emoticon", "emoticon-emoji", t),
            e.text = r)
        }
    }
      , Jr = function(e, t) {
        var n = e.world;
        Wr.lexicon(t, n);
        for (var r = 0; r < t.length; r += 1) {
            var i = t[r];
            Wr.punctuation(t, r, n),
            Wr.regex(i, n),
            Wr.suffix(i, n),
            Wr.emoji(i, n)
        }
        return e
    }
      , Rr = {
        beforeThisWord: {
            there: "Verb",
            me: "Verb",
            man: "Adjective",
            only: "Verb",
            him: "Verb",
            were: "Noun",
            took: "Noun",
            himself: "Verb",
            went: "Noun",
            who: "Noun",
            jr: "Person"
        },
        afterThisWord: {
            i: "Verb",
            first: "Noun",
            it: "Verb",
            there: "Verb",
            not: "Verb",
            because: "Noun",
            if: "Noun",
            but: "Noun",
            who: "Verb",
            this: "Noun",
            his: "Noun",
            when: "Noun",
            you: "Verb",
            very: "Adjective",
            old: "Noun",
            never: "Verb",
            before: "Noun"
        },
        beforeThisPos: {
            Copula: "Noun",
            PastTense: "Noun",
            Conjunction: "Noun",
            Modal: "Noun",
            Pluperfect: "Noun",
            PerfectTense: "Verb"
        },
        afterThisPos: {
            Adjective: "Noun",
            Possessive: "Noun",
            Determiner: "Noun",
            Adverb: "Verb",
            Pronoun: "Verb",
            Value: "Noun",
            Ordinal: "Noun",
            Modal: "Verb",
            Superlative: "Noun",
            Demonym: "Noun",
            Honorific: "Person"
        }
    }
      , Ur = Object.keys(Rr.afterThisPos)
      , Kr = Object.keys(Rr.beforeThisPos)
      , Qr = function(e, t) {
        for (var n = function(n) {
            var r = e[n];
            if (!0 === r.isKnown())
                return "continue";
            var i = e[n - 1];
            if (i) {
                if (!0 === Rr.afterThisWord.hasOwnProperty(i.clean)) {
                    var a = Rr.afterThisWord[i.clean];
                    return r.tag(a, "after-" + i.clean, t),
                    "continue"
                }
                var o = Ur.find((function(e) {
                    return i.tags[e]
                }
                ));
                if (void 0 !== o) {
                    var s = Rr.afterThisPos[o];
                    return r.tag(s, "after-" + o, t),
                    "continue"
                }
            }
            var u = e[n + 1];
            if (u) {
                if (!0 === Rr.beforeThisWord.hasOwnProperty(u.clean)) {
                    var l = Rr.beforeThisWord[u.clean];
                    return r.tag(l, "before-" + u.clean, t),
                    "continue"
                }
                var c = Kr.find((function(e) {
                    return u.tags[e]
                }
                ));
                if (void 0 !== c) {
                    var h = Rr.beforeThisPos[c];
                    return r.tag(h, "before-" + c, t),
                    "continue"
                }
            }
        }, r = 0; r < e.length; r += 1)
            n(r)
    }
      , Xr = /^[A-Z][a-z'\u00C0-\u00FF]/
      , Zr = /[0-9]/
      , Yr = function(e, t) {
        e.forEach((function(e, n) {
            !0 === Xr.test(e.text) && !1 === Zr.test(e.text) && (0 !== n ? e.tag("TitleCase", "case", t) : (e.tags.Person || e.tags.Organization || e.tags.Place) && e.tag("TitleCase", "case-person", t),
            0 !== n && e.tag("ProperNoun", "case-noun", t))
        }
        ))
    }
      , ei = /^(re|un)-?[a-z\u00C0-\u00FF]/
      , ti = /^(re|un)-?/
      , ni = function(e, t) {
        var n = t.words;
        e.forEach((function(e) {
            if (!0 !== e.isKnown() && !0 === ei.test(e.clean)) {
                var r = e.clean.replace(ti, "");
                r && r.length > 3 && void 0 !== n[r] && !0 === n.hasOwnProperty(r) && e.tag(n[r], "stem-" + r, t)
            }
        }
        ))
    }
      , ri = {
        isSingular: [/(ax|test)is$/i, /(octop|vir|radi|nucle|fung|cact|stimul)us$/i, /(octop|vir)i$/i, /(rl)f$/i, /(alias|status)$/i, /(bu)s$/i, /(al|ad|at|er|et|ed|ad)o$/i, /(ti)um$/i, /(ti)a$/i, /sis$/i, /(?:(^f)fe|(lr)f)$/i, /hive$/i, /s[aeiou]+ns$/i, /(^aeiouy|qu)y$/i, /(x|ch|ss|sh|z)$/i, /(matr|vert|ind|cort)(ix|ex)$/i, /(m|l)ouse$/i, /(m|l)ice$/i, /(antenn|formul|nebul|vertebr|vit)a$/i, /.sis$/i, /^(?!talis|.*hu)(.*)man$/i],
        isPlural: [/(^v)ies$/i, /ises$/i, /ives$/i, /(antenn|formul|nebul|vertebr|vit)ae$/i, /(octop|vir|radi|nucle|fung|cact|stimul)i$/i, /(buffal|tomat|tornad)oes$/i, /(analy|ba|diagno|parenthe|progno|synop|the)ses$/i, /(vert|ind|cort)ices$/i, /(matr|append)ices$/i, /(x|ch|ss|sh|s|z|o)es$/i, /is$/i, /men$/i, /news$/i, /.tia$/i, /(^f)ves$/i, /(lr)ves$/i, /(^aeiouy|qu)ies$/i, /(m|l)ice$/i, /(cris|ax|test)es$/i, /(alias|status)es$/i, /ics$/i]
    }
      , ii = ["Uncountable", "Pronoun", "Place", "Value", "Person", "Month", "WeekDay", "Holiday"]
      , ai = [/ss$/, /sis$/, /[^aeiou][uo]s$/, /'s$/]
      , oi = [/i$/, /ae$/]
      , si = function(e, t) {
        if (e.tags.Noun && !e.tags.Acronym) {
            var n = e.clean;
            if (e.tags.Singular || e.tags.Plural)
                return;
            if (n.length <= 3)
                return void e.tag("Singular", "short-singular", t);
            if (ii.find((function(t) {
                return e.tags[t]
            }
            )))
                return;
            if (ri.isPlural.find((function(e) {
                return e.test(n)
            }
            )))
                return void e.tag("Plural", "plural-rules", t);
            if (ri.isSingular.find((function(e) {
                return e.test(n)
            }
            )))
                return void e.tag("Singular", "singular-rules", t);
            if (!0 === /s$/.test(n)) {
                if (ai.find((function(e) {
                    return e.test(n)
                }
                )))
                    return;
                return void e.tag("Plural", "plural-fallback", t)
            }
            if (oi.find((function(e) {
                return e.test(n)
            }
            )))
                return;
            e.tag("Singular", "singular-fallback", t)
        }
    }
      , ui = ["academy", "administration", "agence", "agences", "agencies", "agency", "airlines", "airways", "army", "assoc", "associates", "association", "assurance", "authority", "autorite", "aviation", "bank", "banque", "board", "boys", "brands", "brewery", "brotherhood", "brothers", "building society", "bureau", "cafe", "caisse", "capital", "care", "cathedral", "center", "central bank", "centre", "chemicals", "choir", "chronicle", "church", "circus", "clinic", "clinique", "club", "co", "coalition", "coffee", "collective", "college", "commission", "committee", "communications", "community", "company", "comprehensive", "computers", "confederation", "conference", "conseil", "consulting", "containers", "corporation", "corps", "corp", "council", "crew", "daily news", "data", "departement", "department", "department store", "departments", "design", "development", "directorate", "division", "drilling", "education", "eglise", "electric", "electricity", "energy", "ensemble", "enterprise", "enterprises", "entertainment", "estate", "etat", "evening news", "faculty", "federation", "financial", "fm", "foundation", "fund", "gas", "gazette", "girls", "government", "group", "guild", "health authority", "herald", "holdings", "hospital", "hotel", "hotels", "inc", "industries", "institut", "institute", "institute of technology", "institutes", "insurance", "international", "interstate", "investment", "investments", "investors", "journal", "laboratory", "labs", "liberation army", "limited", "local authority", "local health authority", "machines", "magazine", "management", "marine", "marketing", "markets", "media", "memorial", "mercantile exchange", "ministere", "ministry", "military", "mobile", "motor", "motors", "musee", "museum", "news", "news service", "observatory", "office", "oil", "optical", "orchestra", "organization", "partners", "partnership", "people's party", "petrol", "petroleum", "pharmacare", "pharmaceutical", "pharmaceuticals", "pizza", "plc", "police", "polytechnic", "post", "power", "press", "productions", "quartet", "radio", "regional authority", "regional health authority", "reserve", "resources", "restaurant", "restaurants", "savings", "school", "securities", "service", "services", "social club", "societe", "society", "sons", "standard", "state police", "state university", "stock exchange", "subcommittee", "syndicat", "systems", "telecommunications", "telegraph", "television", "times", "tribunal", "tv", "union", "university", "utilities", "workers"].reduce((function(e, t) {
        return e[t] = "Noun",
        e
    }
    ), {})
      , li = function(e) {
        return !!e.tags.Noun && (!(e.tags.Pronoun || e.tags.Comma || e.tags.Possessive) && !!(e.tags.Organization || e.tags.Acronym || e.tags.Place || e.titleCase()))
    }
      , ci = {
        neighbours: Qr,
        case: Yr,
        stem: ni,
        plural: si,
        organizations: function(e, t) {
            for (var n = 0; n < e.length; n += 1) {
                var r = e[n];
                if (void 0 !== ui[r.clean] && !0 === ui.hasOwnProperty(r.clean)) {
                    var i = e[n - 1];
                    if (void 0 !== i && !0 === li(i)) {
                        i.tagSafe("Organization", "org-word-1", t),
                        r.tagSafe("Organization", "org-word-2", t);
                        continue
                    }
                    var a = e[n + 1];
                    if (void 0 !== a && "of" === a.clean && e[n + 2] && li(e[n + 2])) {
                        r.tagSafe("Organization", "org-of-word-1", t),
                        a.tagSafe("Organization", "org-of-word-2", t),
                        e[n + 2].tagSafe("Organization", "org-of-word-3", t);
                        continue
                    }
                }
            }
        }
    }
      , hi = function(e, t) {
        var n = e.world;
        return ci.neighbours(t, n),
        ci.case(t, n),
        ci.stem(t, n),
        t.forEach((function(t) {
            !1 === t.isKnown() && t.tag("Noun", "noun-fallback", e.world)
        }
        )),
        ci.organizations(t, n),
        t.forEach((function(t) {
            ci.plural(t, e.world)
        }
        )),
        e
    }
      , fi = /n't$/
      , di = {
        "won't": ["will", "not"],
        wont: ["will", "not"],
        "can't": ["can", "not"],
        cant: ["can", "not"],
        cannot: ["can", "not"],
        "shan't": ["should", "not"],
        dont: ["do", "not"],
        dun: ["do", "not"]
    }
      , pi = function(e, t) {
        return !0 === di.hasOwnProperty(e.clean) ? di[e.clean] : "ain't" === e.clean || "aint" === e.clean ? function(e, t) {
            var n = t.cache.terms || t.terms()
              , r = n.indexOf(e)
              , i = n.slice(0, r).find((function(e) {
                return e.tags.Noun
            }
            ));
            return i && i.tags.Plural ? ["are", "not"] : ["is", "not"]
        }(e, t) : !0 === fi.test(e.clean) ? [e.clean.replace(fi, ""), "not"] : null
    }
      , mi = /([a-z\u00C0-\u00FF]+)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]([a-z]{1,2})$/i
      , gi = {
        ll: "will",
        ve: "have",
        re: "are",
        m: "am",
        "n't": "not"
    }
      , vi = function(e) {
        var t = e.text.match(mi);
        return null === t ? null : gi.hasOwnProperty(t[2]) ? [t[1], gi[t[2]]] : null
    }
      , bi = {
        wanna: ["want", "to"],
        gonna: ["going", "to"],
        im: ["i", "am"],
        alot: ["a", "lot"],
        ive: ["i", "have"],
        imma: ["I", "will"],
        "where'd": ["where", "did"],
        whered: ["where", "did"],
        "when'd": ["when", "did"],
        whend: ["when", "did"],
        howd: ["how", "did"],
        whatd: ["what", "did"],
        dunno: ["do", "not", "know"],
        brb: ["be", "right", "back"],
        gtg: ["got", "to", "go"],
        irl: ["in", "real", "life"],
        tbh: ["to", "be", "honest"],
        imo: ["in", "my", "opinion"],
        til: ["today", "i", "learned"],
        rn: ["right", "now"],
        twas: ["it", "was"],
        "@": ["at"]
    }
      , yi = function(e) {
        return bi.hasOwnProperty(e.clean) ? bi[e.clean] : null
    }
      , wi = /([a-z\u00C0-\u00FF]+)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]s$/i
      , Ai = {
        that: !0,
        there: !0
    }
      , ki = function(e, t, n) {
        var r = e.text.match(wi);
        if (null !== r) {
            if (!0 === function(e, t) {
                if (e.tags.Possessive)
                    return !0;
                if (e.tags.Pronoun || e.tags.QuestionWord)
                    return !1;
                if (Ai.hasOwnProperty(e.clean))
                    return !1;
                var n = t.get(e.next);
                if (!n)
                    return !0;
                if (n.tags.Verb)
                    return !!n.tags.Infinitive || !!n.tags.PresentTense;
                if (n.tags.Noun)
                    return !0;
                var r = t.get(n.next);
                return !(!r || !r.tags.Noun || r.tags.Pronoun) || (n.tags.Adjective || n.tags.Adverb || n.tags.Verb,
                !1)
            }(e, t.pool))
                return e.tag("#Possessive", "isPossessive", n),
                null;
            if (null !== r)
                return function(e, t) {
                    var n = t.cache.terms || t.terms()
                      , r = n.indexOf(e);
                    return n.slice(r + 1, r + 3).find((function(e) {
                        return e.tags.PastTense
                    }
                    ))
                }(e, t) ? [r[1], "has"] : [r[1], "is"]
        }
        return null
    }
      , $i = /[a-z\u00C0-\u00FF]'d$/
      , Pi = {
        how: !0,
        what: !0
    }
      , Ci = function(e, t) {
        if ($i.test(e.clean)) {
            for (var n = e.clean.replace(/'d$/, ""), r = t.cache.terms || t.terms(), i = r.indexOf(e), a = r.slice(i + 1, i + 4), o = 0; o < a.length; o++) {
                var s = a[o];
                if (s.tags.Verb)
                    return s.tags.PastTense ? [n, "had"] : !0 === Pi[n] ? [n, "did"] : [n, "would"]
            }
            return [n, "would"]
        }
        return null
    }
      , Ei = /^([0-9]+)[-–—]([0-9]+)$/i
      , xi = function(e) {
        if (!0 === e.tags.PhoneNumber)
            return null;
        var t = e.text.match(Ei);
        return null !== t ? [t[1], "to", t[2]] : null
    }
      , ji = /^[0-9]+$/
      , Gi = function(e, t) {
        var n = ot(e.join(" "), t.world, t.pool())[0]
          , r = n.terms();
        return br(r, t.world),
        r.forEach((function(e) {
            e.implicit = e.text,
            e.text = "",
            e.clean = "",
            e.pre = "",
            e.post = "",
            ji.test(e.implicit) && (e.tags.Number = !0,
            e.tags.Cardinal = !0)
        }
        )),
        n
    }
      , Ni = function(e) {
        var t = e.world;
        return e.list.forEach((function(n) {
            for (var r = n.cache.terms || n.terms(), i = 0; i < r.length; i += 1) {
                var a = r[i]
                  , o = pi(a, n);
                if (null !== (o = (o = (o = (o = (o = o || vi(a)) || yi(a)) || ki(a, n, t)) || Ci(a, n)) || xi(a))) {
                    var s = Gi(o, e);
                    s.terms(0).text = a.text,
                    n.buildFrom(a.id, 1, e.pool()).replace(s, e, !0)
                }
            }
        }
        )),
        e
    }
      , Fi = function(e) {
        e.match("(foot|feet)").tag("Noun", "foot-noun"),
        e.match("(#Noun && @hasComma) #Noun (and|or) [#PresentTense]").tag("#Noun", "noun-list"),
        e.match("#Value [(foot|feet)]").tag("Unit", "foot-unit"),
        e.match("#Conjunction [u]").tag("Pronoun", "u-pronoun-2"),
        e.match("#Holiday (day|eve)").tag("Holiday", "holiday-day"),
        e.match("#Noun [(who|whom)]").tag("Determiner", "captain-who"),
        e.match("(standard|daylight|summer|eastern|pacific|central|mountain) standard? time").tag("Time", "timezone"),
        e.match("#Demonym #Currency").tag("Currency", "demonym-currency"),
        e.match("[about to] #Adverb? #Verb").tag(["Auxiliary", "Verb"], "about-to"),
        e.match("(right|rights) of .").tag("Noun", "right-of"),
        e.match("[much] #Adjective").tag("Adverb", "bit-1"),
        e.match("a [bit]").tag("Noun", "bit-2"),
        e.match("a bit much").tag("Determiner Adverb Adjective", "bit-3"),
        e.match("too much").tag("Adverb Adjective", "bit-4"),
        e.match("u r").tag("Pronoun #Copula", "u r"),
        e.match("^(well|so|okay)").tag("Expression", "well-"),
        e.match("had #Noun+ #PastTense").ifNo("@hasComma").firstTerm().tag("Condition", "had-he"),
        e.match("were #Noun+ to #Infinitive").ifNo("@hasComma").firstTerm().tag("Condition", "were-he"),
        e.match("holy (shit|fuck|hell)").tag("Expression", "swears-expression"),
        e.match("#Determiner [(shit|damn|hell)]").tag("Noun", "swears-noun"),
        e.match("[(shit|damn|fuck)] (#Determiner|#Possessive|them)").tag("Verb", "swears-verb"),
        e.match("#Copula fucked up?").not("#Copula").tag("Adjective", "swears-adjective");
        var t = e.if("so");
        !0 === t.found && (t.match("[so] #Adjective").tag("Adverb", "so-adv"),
        t.match("[so] #Noun").tag("Conjunction", "so-conj"),
        t.match("do [so]").tag("Noun", "so-noun"));
        var n = e.if("all");
        !0 === n.found && (n.match("[all] #Determiner? #Noun").tag("Adjective", "all-noun"),
        n.match("[all] #Verb").tag("Adverb", "all-verb"));
        var r = e.if("which");
        !0 === r.found && (r.match("#Verb #Adverb? #Noun [(that|which)]").tag("Preposition", "that-prep"),
        r.match("that #Noun [#Verb]").tag("Determiner", "that-determiner"),
        r.match("@hasComma [which] (#Pronoun|#Verb)").tag("Preposition", "which-copula"));
        var i = e.if("like");
        !0 === i.found && (i.match("just [like]").tag("Preposition", "like-preposition"),
        i.match("#Noun [like] #Noun").tag("Preposition", "noun-like"),
        i.match("#Verb [like]").tag("Adverb", "verb-like"),
        i.match("#Adverb like").notIf("(really|generally|typically|usually|sometimes|often) [like]").tag("Adverb", "adverb-like"));
        var a = e.if("@titleCase");
        !0 === a.found && (a.match("@titleCase (ltd|co|inc|dept|assn|bros)").tag("Organization", "org-abbrv"),
        a.match("@titleCase+ (district|region|province|county|prefecture|municipality|territory|burough|reservation)").tag("Region", "foo-district"),
        a.match("(district|region|province|municipality|territory|burough|state) of @titleCase").tag("Region", "district-of-Foo"));
        var o = e.if("@hasHyphen");
        !0 === o.found && (o.match("@hasHyphen .").match("#Noun #Verb").tag("Noun", "hyphen-verb"),
        o.if("#Expression").match("@hasHyphen+").tag("Expression", "ooh-wee"));
        var s = e.if("#Place");
        return !0 === s.found && (s.match("(west|north|south|east|western|northern|southern|eastern)+ #Place").tag("Region", "west-norfolk"),
        s.match("#City [#Acronym]").match("(al|ak|az|ar|ca|ct|dc|fl|ga|id|il|nv|nh|nj|ny|oh|or|pa|sc|tn|tx|ut|vt|pr)").tag("Region", "us-state")),
        e
    }
      , Bi = function(e) {
        var t = e.if("#Determiner");
        if (!0 === t.found) {
            var n = t.if("#Adjective");
            n.found && (n.match("(the|this|those|these) #Adjective [#Verb]").tag("Noun", "the-adj-verb"),
            n.match("(the|this|those|these) #Adverb #Adjective [#Verb]").tag("Noun", "correction-determiner4"),
            n.match("#Determiner [#Adjective] (#Copula|#PastTense|#Auxiliary)").tag("Noun", "the-adj-2"),
            n.match("#Determiner #Adjective$").notIf("(#Comparative|#Superlative)").terms(1).tag("Noun", "the-adj-1"));
            var r = t.if("#Infinitive");
            r.found && (r.match("(the|this|a|an) [#Infinitive] #Adverb? #Verb").tag("Noun", "correction-determiner5"),
            r.match("#Determiner [#Infinitive] #Noun").tag("Noun", "correction-determiner7"),
            r.match("#Determiner [#Infinitive]$").tag("Noun", "a-inf")),
            t.match("(the|this) [#Verb] #Preposition .").tag("Noun", "correction-determiner1"),
            t.match("#Determiner [#Verb] of").tag("Noun", "the-verb-of"),
            t.match("#Determiner #Noun of [#Verb]").tag("Noun", "noun-of-noun"),
            t.match("#Determiner #Adverb? [close]").tag("Adjective", "a-close"),
            t.match("#Determiner [(western|eastern|northern|southern|central)] #Noun").tag("Noun", "western-line"),
            t.match("(the|those|these) [(#Infinitive|#PresentTense|#PastTense)]").tag("Noun", "correction-determiner2")
        }
        var i = e.if("(a|an)");
        return !0 === i.found && (i.match("(a|an) [#Gerund]").tag("Adjective", "correction-a|an"),
        i.match("#Verb (a|an) [#Value]").tag("Singular", "a-value"),
        i.match("(a|an) #Noun [#Infinitive]").tag("Noun", "a-noun-inf"),
        i.match("(a|an) #Adjective (#Infinitive|#PresentTense)").terms(2).tag("Noun", "correction-a|an2"),
        i.match("[(a|an)] (#Duration|hundred|thousand|million|billion|trillion)").ifNo("#Plural").tag("Value", "a-is-one")),
        e
    }
      , Oi = function(e) {
        var t = e.if("#Noun");
        if (!0 === t.found) {
            t.match("more #Noun").tag("Noun", "more-noun"),
            t.match("#Noun #Adverb [#Noun]").tag("Verb", "quickly-foo"),
            t.match("#Noun [#Particle]").tag("Preposition", "repair-noPhrasal"),
            t.match("#Noun (&|n) #Noun").tag("Organization", "Noun-&-Noun"),
            t.match("#Noun #Actor").tag("Actor", "thing-doer"),
            e.match("#Noun van der? #Noun").tagSafe("#Person", "von der noun"),
            e.match("(king|queen|prince|saint|lady) of? #Noun").tagSafe("#Person", "king-of-noun"),
            e.match("#Value #Noun (st|street|rd|road|crescent|cr|way|tr|terrace|avenue|ave)").tag("Address"),
            e.match("#Noun+ (public|private) school").tag("School"),
            t.match("[second] #Noun").notIf("#Honorific").unTag("Unit").tag("Ordinal", "second-noun"),
            t.match("(#Determiner|#Value) [(linear|binary|mobile|lexical|technical|computer|scientific|formal)] #Noun").tag("Noun", "technical-noun");
            var n = t.if("#Organization");
            !0 === n.found && (n.match("#Organization of the? @titleCase").tagSafe("Organization", "org-of-place"),
            n.match("#Organization #Country").tag("Organization", "org-country"),
            n.match("(world|global|international|national|#Demonym) #Organization").tag("Organization", "global-org"),
            n.match("#TitleCase #Organization").ifNo("@hasComma").tag("Organization", "titlecase-org"));
            var r = t.if("#Plural");
            !0 === r.found && (r.match("some [#Verb] #Plural").tag("Noun", "correction-determiner6"),
            t.match("(this|that) [#Plural]").tag("PresentTense", "this-verbs"))
        }
        var i = e.if("#Acronym");
        !0 === i.found && (i.match("the [#Acronym]").notIf("(iou|fomo|yolo|diy|dui|nimby)").tag("Organization", "the-acronym"),
        i.match("#Acronym").match("#Possessive").tag("Organization", "possessive-acronym"));
        var a = e.if("#Possessive");
        if (!0 === a.found) {
            a.match("#Possessive [#FirstName]").unTag("Person", "possessive-name"),
            a.match("#FirstName #Acronym? #Possessive").ifNo("@hasComma").match("#FirstName #Acronym? #LastName").tag("Possessive"),
            a.match("#Organization+ #Possessive").ifNo("@hasComma").tag("Possessive"),
            a.match("#Place+ #Possessive").ifNo("@hasComma").tag("Possessive"),
            a.match("#Possessive [#Gerund]").tag("Noun", "her-polling"),
            a.match("(his|her|its) [#PresentTense]").tag("Noun", "her-polling");
            var o = a.match("#Possessive [#Infinitive]");
            o.lookBehind("(let|made|make|force|ask)").found || o.tag("Noun", "her-match")
        }
        return e.match("(let|make|made) (him|her|it|#Person|#Place|#Organization)+ #Singular (a|an|the|it)").ifNo("@hasComma").match("[#Singular] (a|an|the|it)").tag("#Infinitive", "let-him-glue"),
        e
    }
      , Di = "(rose|robin|dawn|ray|holly|bill|joy|viola|penny|sky|violet|daisy|melody|kelvin|hope|mercedes|olive|jewel|faith|van|charity|miles|lily|summer|dolly|rod|dick|cliff|lane|reed|kitty|art|jean|trinity)"
      , Ti = "(pat|wade|ollie|will|rob|buck|bob|mark|jack)"
      , Vi = "(misty|rusty|dusty|rich|randy)"
      , zi = "(april|june|may|jan|august|eve)"
      , Hi = "(paris|alexandria|houston|kobe|salvador|sydney)"
      , Ii = function(e) {
        var t = e.if("#Honorific");
        !0 === t.found && (e.match("(mr|mrs|ms|dr) (#TitleCase|#Possessive)+").tag("#Person", "mr-putin"),
        t.match("#Honorific #Acronym").tag("Person", "Honorific-TitleCase"),
        t.match("^#Honorific$").unTag("Person", "single-honorific"),
        t.match("[(1st|2nd|first|second)] #Honorific").tag("Honorific", "ordinal-honorific"));
        var n = e.if("#TitleCase");
        !0 === n.found && (n.match("#Acronym #TitleCase").tagSafe("#Person", "acronym-titlecase"),
        n.match("#TitleCase (van|al|bin) #TitleCase").tagSafe("Person", "titlecase-van-titlecase"),
        n.match("#TitleCase (de|du) la? #TitleCase").tagSafe("Person", "titlecase-van-titlecase"),
        n.match("[#ProperNoun] #Person").notIf("@hasComma").tagSafe("Person", "proper-person"),
        n.match("(lady|queen|sister) #TitleCase").ifNo("#Date").ifNo("#Honorific").tag("#FemaleName", "lady-titlecase"),
        n.match("(king|pope|father) #TitleCase").ifNo("#Date").tag("#MaleName", "poe"),
        n.match(Di + " #Acronym? #TitleCase").tagSafe("Person", "ray-smith"),
        n.match(Ti + " #Acronym? #TitleCase").tag("Person", "rob-smith"),
        n.match(Vi + " #Acronym? #TitleCase").tag("Person", "rusty-smith"),
        n.match(zi + " #Acronym? (#TitleCase && !#Month)").tag("Person", "june-smith"));
        var r = e.if("#Person");
        if (!0 === r.found) {
            r.match("#Person (jr|sr|md)").tag("Person", "person-honorific"),
            r.match("#Person #Person the? #RomanNumeral").tag("Person", "roman-numeral"),
            r.match("#Honorific #Person").tag("Person", "Honorific-Person"),
            r.match("#FirstName [/^[^aiurck]$/]").tag(["Acronym", "Person"], "john-e"),
            r.match("#Honorific #Person").tag("Person", "honorific-person"),
            r.match("[(private|general|major|corporal|lord|lady|secretary|premier)] #Honorific? #Person").tag("Honorific", "ambg-honorifics"),
            n.match("#Person #TitleCase").match("#TitleCase #Noun").tagSafe("Person", "person-titlecase");
            var i = r.if(Di);
            !0 === i.found && i.match(Di + " #Person").tagSafe("Person", "ray-smith");
            var a = r.if(Ti);
            !0 === a && (a.match("(#Modal|#Adverb) [" + Ti + "]").tag("Verb", "would-mark"),
            a.match(Ti + " #Person").tag("Person", "rob-smith"));
            var o = r.if(Vi);
            !0 === o.found && (o.match("#Adverb [" + Vi + "]").tag("Adjective", "really-rich"),
            o.match(Vi + " #Person").tag("Person", "randy-smith"));
            var s = r.if(zi);
            !0 === s.found && (s.match(zi + " #ProperNoun").tag(["FirstName", "Person"], "june-smith"),
            s.match("(in|during|on|by|before|#Date) [" + zi + "]").tag("Date", "in-june"),
            s.match(zi + " (#Date|#Value)").tag("Date", "june-5th"));
            var u = r.if(Hi);
            !0 === u.found && (u.match("(in|near|at|from|to|#Place) [" + Hi + "]").tagSafe("Place", "in-paris"),
            u.match("[" + Hi + "] #Place").tagSafe("Place", "paris-france"));
            var l = r.if("al");
            !0 === l.found && (l.match("al (#Person|#TitleCase)").tagSafe("#Person", "al-borlen"),
            l.match("#TitleCase al #TitleCase").tagSafe("#Person", "arabic-al-arabic"));
            var c = r.if("#FirstName");
            if (!0 === c.found)
                c.match("#FirstName de #Noun").tag("#Person", "firstname-de-noun"),
                c.match("#FirstName (bin|al) #Noun").tag("#Person", "firstname-al-noun"),
                c.match("#FirstName #Acronym #TitleCase").tag("Person", "firstname-acronym-titlecase"),
                c.match("#FirstName #FirstName #TitleCase").tag("Person", "firstname-firstname-titlecase"),
                c.match("#Honorific #FirstName? #TitleCase").tag("Person", "Honorific-TitleCase"),
                c.match("#FirstName the #Adjective").tag("Person", "determiner5"),
                c.match("#FirstName (green|white|brown|hall|young|king|hill|cook|gray|price)").tag("#Person", "firstname-maybe"),
                c.match("#FirstName #TitleCase #TitleCase?").match("#Noun+").tag("Person", "firstname-titlecase"),
                c.match("#FirstName #Acronym #Noun").ifNo("#Date").tag("#Person", "n-acro-noun").lastTerm().tag("#LastName", "n-acro-noun"),
                c.match("#FirstName [#Determiner #Noun] #LastName").tag("#NickName", "first-noun-last").tag("#Person", "first-noun-last"),
                c.match("#FirstName (#Singular|#Possessive)").ifNo("(#Date|#Pronoun|#NickName)").tag("#Person", "first-possessive").lastTerm().tag("#LastName", "first-possessive"),
                c.match("#FirstName (#Noun|#TitleCase)").ifNo("^#Possessive").ifNo("#ClauseEnd .").ifNo("#Pronoun").lastTerm().tag("#LastName", "firstname-noun");
            var h = r.if("#LastName");
            !0 === h.found && (h.match("#Copula [(#Noun|#PresentTense)] #LastName").tag("#FirstName", "copula-noun-lastname"),
            h.match("[#Noun] #LastName").canBe("#FirstName").tag("#FirstName", "noun-lastname"),
            h.match("[(will|may|april|june|said|rob|wade|ray|rusty|drew|miles|jack|chuck|randy|jan|pat|cliff|bill)] #LastName").tag("#FirstName", "maybe-lastname"),
            h.match("(#TitleCase|#Singular) #Acronym? #LastName").ifNo("#Date").tag("#Person", "title-acro-noun").lastTerm().tag("#LastName", "title-acro-noun"))
        }
        return e
    }
      , Mi = "(#Adverb|not)+?"
      , Si = function(e) {
        var t = e.if("#Verb");
        if (t.found) {
            t.match("[(do|does|will|have|had)] (not|#Adverb)? #Verb").tag("Auxiliary", "have-had"),
            t.match("[still] #Verb").tag("Adverb", "still-verb"),
            t.match("[u] #Verb").tag("Pronoun", "u-pronoun-1"),
            t.match("is no [#Verb]").tag("Noun", "is-no-verb"),
            t.match("[#Verb] than").tag("Noun", "correction"),
            t.match("[#PastTense] #Singular is").tag("#Adjective", "smoked-poutine"),
            t.match("[#PastTense] #Plural are").tag("#Adjective", "baked-onions"),
            t.match("(go|goes|went) to [#Infinitive]").tag("#Noun", "goes-to-verb"),
            t.match("there (are|were) #Adjective? [#PresentTense]").tag("Plural", "there-are"),
            t.match("#Singular (seems|appears) #Adverb? [#PastTense$]").tag("Adjective", "seems-filled"),
            t.match("#PhrasalVerb [#PhrasalVerb]").tag("Particle", "phrasal-particle"),
            t.match("(be|been) ".concat(Mi, " #Gerund")).not("#Verb$").tag("Auxiliary", "be-walking"),
            t.match("(try|use|attempt|build|make) #Verb").ifNo("(@hasComma|#Negative|#Copula|will|be)").lastTerm().tag("#Noun", "do-verb");
            var n = t.if("(#Modal|did|had|has)");
            !0 === n.found && (n.match("(has|had) ".concat(Mi, " #PastTense")).not("#Verb$").tag("Auxiliary", "had-walked"),
            n.match("(#Modal|did) ".concat(Mi, " #Verb")).not("#Verb$").tag("Auxiliary", "modal-verb"),
            n.match("#Modal ".concat(Mi, " have ").concat(Mi, " had ").concat(Mi, " #Verb")).not("#Verb$").tag("Auxiliary", "would-have"),
            n.match("#Modal ".concat(Mi, " be ").concat(Mi, " #Verb")).not("#Verb$").tag("Auxiliary", "would-be"),
            n.match("(#Modal|had|has) ".concat(Mi, " been ").concat(Mi, " #Verb")).not("#Verb$").tag("Auxiliary", "would-be"));
            var r = t.if("#Copula");
            !0 === r.found && (r.match("#Copula ".concat(Mi, " #Gerund")).not("#Verb$").tag("Auxiliary", "copula-walking"),
            r.match("#Copula [#Infinitive] #Noun").tag("Noun", "is-pres-noun"),
            r.match("[#Infinitive] #Copula").tag("Noun", "inf-copula"),
            r.match("#Copula [(just|alone)]$").tag("Adjective", "not-adverb"),
            r.match("#Singular is #Adverb? [#PastTense$]").tag("Adjective", "is-filled"),
            r.match("#Copula [#Adjective to] #Verb").tag("Verb", "adj-to"),
            r.match("#Copula (pretty|dead|full|well) (#Adjective|#Noun)").ifNo("@hasComma").tag("#Copula #Adverb #Adjective", "sometimes-adverb"));
            var i = t.if("#Gerund");
            !0 === i.found && (i.match("[#Gerund] #Adverb? not? #Copula").tag("Activity", "gerund-copula"),
            i.match("[#Gerund] #Modal").tag("Activity", "gerund-modal"),
            i.match("#Gerund #Determiner [#Infinitive]").tag("Noun", "running-a-show"));
            var a = t.if("will #Adverb? not? #Adverb? be");
            !0 === a.found && !1 === a.has("will #Adverb? not? #Adverb? be #Gerund") && (a.match("will not? be").tag("Copula", "will-be-copula"),
            a.match("will #Adverb? not? #Adverb? be #Adjective").match("be").tag("Copula", "be-copula"))
        }
        var o = e.if("(who|what|where|why|how|when)");
        return o.found && (o.match("^how").tag("QuestionWord", "how-question"),
        o.match("[how] (#Determiner|#Copula|#Modal|#PastTense)").tag("QuestionWord", "how-is"),
        o.match("^which").tag("QuestionWord", "which-question"),
        o.match("[which] . (#Noun)+ #Pronoun").tag("QuestionWord", "which-question2"),
        o.match("which").tag("QuestionWord", "which-question3"),
        o.match("[#QuestionWord] #Noun #Copula #Adverb? (#Verb|#Adjective)").unTag("QuestionWord").tag("Conjunction", "how-he-is-x"),
        o.match("#QuestionWord #Noun #Adverb? #Infinitive not? #Gerund").unTag("QuestionWord").tag("Conjunction", "when i go fishing")),
        e
    }
      , Li = function(e) {
        var t = e.if("#Adjective");
        return t.found && (t.match("[still] #Adjective").tag("Adverb", "still-advb"),
        t.match("(barely|hardly) even").tag("#Adverb", "barely-even"),
        t.match("#Adjective [#PresentTense]").tag("Noun", "adj-presentTense"),
        t.match("will [#Adjective]").tag("Verb", "will-adj"),
        t.match("#PresentTense [(hard|quick|long|bright|slow)]").tag("Adverb", "lazy-ly"),
        t.match("(his|her|its) [#Adjective]").tag("Noun", "his-fine"),
        t.match("#Noun #Adverb? [left]").tag("PastTense", "left-verb"),
        t.match("#Pronoun [#Adjective] #Determiner #Adjective? #Noun").tag("Verb", "he-adj-the")),
        e
    }
      , _i = "(hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion)"
      , qi = function(e) {
        var t = e.if("#Value");
        if (!0 === t.found) {
            t.match("1 #Value #PhoneNumber").tag("PhoneNumber", "1-800-Value"),
            t.match("#NumericValue #PhoneNumber").tag("PhoneNumber", "(800) PhoneNumber"),
            t.match("#Value [#PresentTense]").tag("Plural", "value-presentTense");
            var n = t.match("#Value+ #Currency");
            n.lastTerm().tag("Unit", "money-unit"),
            n.match("#Value+").tag("Money", "value-currency")
        }
        t.match("#Value #Abbreviation").tag("Value", "value-abbr"),
        t.match("#Value (point|decimal) #Value").tag("Value", "value-point-value"),
        t.match("(minus|negative) #Value").tag("Value", "minus-value"),
        t.match("#Value grand").tag("Value", "value-grand"),
        t.match("(a|the) [(half|quarter)] #Ordinal").tag("Value", "half-ordinal");
        var r = t.if(_i);
        return !0 === r.found && (r.match("a #Value").tag("Value", "a-value"),
        r.match("".concat(_i, " and #Value")).tag("Value", "magnitude-and-value")),
        e
    }
      , Wi = "(in|by|before|during|on|until|after|of|within|all)"
      , Ji = "(january|april|may|june|summer|autumn|jan|sep)"
      , Ri = "(may|march)"
      , Ui = function(e) {
        var t = e.if(Ji);
        !0 === t.found && (t.match("#Infinitive #Determiner? #Adjective? #Noun? (to|for) [".concat(Ji, "]")).tag("Person", "ambig-person"),
        t.match("#Infinitive [".concat(Ji, "]")).tag("Person", "infinitive-person"),
        t.match("[".concat(Ji, "] #PresentTense (to|for)")).tag("Person", "ambig-active"),
        t.match("[".concat(Ji, "] #Modal")).tag("Person", "ambig-modal"),
        t.match("#Modal [".concat(Ji, "]")).tag("Person", "modal-ambig"),
        t.match("(that|with|for) [".concat(Ji, "]")).tag("Person", "that-month"),
        t.match("#Copula [".concat(Ji, "]")).tag("Person", "is-may"),
        t.match("[".concat(Ji, "] #Copula")).tag("Person", "may-is"),
        t.match("[".concat(Ji, "] the? #Value")).tag("Month", "person-value"),
        t.match("#Date [".concat(Ji, "]")).tag("Month", "correction-may"),
        t.match("[".concat(Ji, "] the? #Value")).tag("Month", "may-5th"),
        t.match("#Value of [".concat(Ji, "]")).tag("Month", "5th-of-may"),
        t.match("".concat(Wi, " [").concat(Ji, "]")).ifNo("#Holiday").tag("Month", "preps-month"),
        t.match("(next|this|last) [".concat(Ji, "]")).tag("Month", "correction-may"));
        var n = e.if(Ri);
        if (!0 === n.found) {
            n.match("#Adverb [".concat(Ri, "]")).tag("Infinitive", "ambig-verb"),
            n.match("".concat(Ri, " [#Adverb]")).tag("Infinitive", "ambig-verb"),
            n.match("".concat(Wi, " [").concat(Ri, "]")).tag("Month", "in-month"),
            n.match("(next|this|last) [".concat(Ri, "]")).tag("Month", "this-month"),
            n.match("[".concat(Ri, "] the? #Value")).tag("Month", "march-5th"),
            n.match("#Value of? [".concat(Ri, "]")).tag("Month", "5th-of-march"),
            n.match("[".concat(Ri, "] .? #Date")).tag("Month", "march-and-feb"),
            n.match("#Date .? [".concat(Ri, "]")).tag("Month", "feb-and-march");
            var r = e.if("march");
            !0 === r.found && (r.match("[march] (up|down|back|to|toward)").tag("Infinitive", "march-to"),
            r.match("#Modal [march]").tag("Infinitive", "must-march"))
        }
        var i = e.if("sun");
        !0 === i.found && (i.match("[sun] #Date").tag("WeekDay", "sun-feb"),
        i.match("sun the #Ordinal").tag("Date").firstTerm().tag("WeekDay", "sun-the-5th"),
        i.match("#Determiner [sun]").tag("Singular", "the-sun"));
        var a = e.if("sat");
        a.found && (a.match("[sat] #Date").tag("WeekDay", "sat-feb"),
        a.match("".concat(Wi, " [sat]")).tag("WeekDay", "sat"));
        var o = e.if("#Month");
        !0 === o.found && (o.match("#Month #DateRange+").tag("Date", "correction-numberRange"),
        o.match("#Value of #Month").tag("Date", "value-of-month"),
        o.match("#Cardinal #Month").tag("Date", "cardinal-month"),
        o.match("#Month #Value to #Value").tag("Date", "value-to-value"),
        o.match("#Month the #Value").tag("Date", "month-the-value"));
        var s = e.if("#Value");
        return !0 === s.found && (s.match("#Value #Abbreviation").tag("Value", "value-abbr"),
        s.match("#Value (point|decimal) #Value").tag("Value", "value-point-value"),
        s.match("(minus|negative) #Value").tag("Value", "minus-value"),
        s.match("#Value grand").tag("Value", "value-grand"),
        s.match("(a|the) [(half|quarter)] #Ordinal").tag("Value", "half-ordinal"),
        s.match("(#WeekDay|#Month) #Value").ifNo("#Money").tag("Date", "date-value"),
        s.match("#Value (#WeekDay|#Month)").ifNo("#Money").tag("Date", "value-date"),
        s.match("#TextValue #TextValue").if("#Date").tag("#Date", "textvalue-date")),
        e
    }
      , Ki = function(e) {
        return Bi(e),
        Oi(e),
        Ii(e),
        Si(e),
        Li(e),
        qi(e),
        Ui(e),
        Fi(e),
        e
    }
      , Qi = function(e) {
        var t = e.termList();
        return e = Jr(e, t),
        e = hi(e, t),
        (e = Ni(e)).cache(),
        (e = Ki(e)).world.taggers.forEach((function(t) {
            t(e)
        }
        )),
        e
    }
      , Xi = function(e) {
        var t = function(e) {
            function t() {
                return i(this, t),
                c(this, u(t).apply(this, arguments))
            }
            return s(t, e),
            o(t, [{
                key: "stripPeriods",
                value: function() {
                    return this.termList().forEach((function(e) {
                        !0 === e.tags.Abbreviation && e.next && (e.post = e.post.replace(/^\./, ""));
                        var t = e.text.replace(/\./, "");
                        e.set(t)
                    }
                    )),
                    this
                }
            }, {
                key: "addPeriods",
                value: function() {
                    return this.termList().forEach((function(e) {
                        e.post = e.post.replace(/^\./, ""),
                        e.post = "." + e.post
                    }
                    )),
                    this
                }
            }]),
            t
        }(e);
        return t.prototype.unwrap = t.prototype.stripPeriods,
        e.prototype.abbreviations = function(e) {
            var n = this.match("#Abbreviation");
            return "number" == typeof e && (n = n.get(e)),
            new t(n.list,this,this.world)
        }
        ,
        e
    }
      , Zi = /\./
      , Yi = function(e) {
        var t = function(e) {
            function t() {
                return i(this, t),
                c(this, u(t).apply(this, arguments))
            }
            return s(t, e),
            o(t, [{
                key: "stripPeriods",
                value: function() {
                    return this.termList().forEach((function(e) {
                        var t = e.text.replace(/\./g, "");
                        e.set(t)
                    }
                    )),
                    this
                }
            }, {
                key: "addPeriods",
                value: function() {
                    return this.termList().forEach((function(e) {
                        var t = e.text.replace(/\./g, "");
                        t = t.split("").join("."),
                        !1 === Zi.test(e.post) && (t += "."),
                        e.set(t)
                    }
                    )),
                    this
                }
            }]),
            t
        }(e);
        return t.prototype.unwrap = t.prototype.stripPeriods,
        t.prototype.strip = t.prototype.stripPeriods,
        e.prototype.acronyms = function(e) {
            var n = this.match("#Acronym");
            return "number" == typeof e && (n = n.get(e)),
            new t(n.list,this,this.world)
        }
        ,
        e
    }
      , ea = function(e) {
        return e.prototype.clauses = function(t) {
            var n = this.if("@hasComma").notIf("@hasComma @hasComma").notIf("@hasComma . .? (and|or) .").notIf("(#City && @hasComma) #Country").notIf("(#Date && @hasComma) #Year").notIf("@hasComma (too|also)$").match("@hasComma")
              , r = this.splitAfter(n)
              , i = r.quotations()
              , a = (r = r.splitOn(i)).parentheses()
              , o = (r = r.splitOn(a)).if("#Copula #Adjective #Conjunction (#Pronoun|#Determiner) #Verb").match("#Conjunction")
              , s = (r = r.splitBefore(o)).if("if .{2,9} then .").match("then")
              , u = (r = (r = (r = (r = (r = (r = r.splitBefore(s)).splitBefore("as well as .")).splitBefore("such as .")).splitBefore("in addition to .")).splitAfter("@hasSemicolon")).splitAfter("@hasDash")).filter((function(e) {
                return e.wordCount() > 5 && e.match("#Verb+").length >= 2
            }
            ));
            if (u.found) {
                var l = u.splitAfter("#Noun .* #Verb .* #Noun+");
                r = r.splitOn(l.eq(0))
            }
            return "number" == typeof t && (r = r.get(t)),
            new e(r.list,this,this.world)
        }
        ,
        e
    }
      , ta = function(e) {
        var t = function(e) {
            function t(e, n, r) {
                var a;
                return i(this, t),
                (a = c(this, u(t).call(this, e, n, r))).contracted = null,
                a
            }
            return s(t, e),
            o(t, [{
                key: "expand",
                value: function() {
                    return this.list.forEach((function(e) {
                        var t = e.terms()
                          , n = t[0].isTitleCase();
                        t.forEach((function(e, n) {
                            e.set(e.implicit || e.text),
                            e.implicit = void 0,
                            n < t.length - 1 && "" === e.post && (e.post += " ")
                        }
                        )),
                        n && t[0].toTitleCase()
                    }
                    )),
                    this
                }
            }]),
            t
        }(e);
        return e.prototype.contractions = function(e) {
            var n = this.match("@hasContraction+");
            return "number" == typeof e && (n = n.get(e)),
            new t(n.list,this,this.world)
        }
        ,
        e.prototype.expanded = e.prototype.isExpanded,
        e.prototype.contracted = e.prototype.isContracted,
        e
    }
      , na = function(e) {
        var t = function(e) {
            var t = e.splitAfter("@hasComma").not("(and|or) not?")
              , n = e.match("[.] (and|or)");
            return {
                things: t,
                conjunction: e.match("(and|or) not?"),
                beforeLast: n,
                hasOxford: n.has("@hasComma")
            }
        }
          , n = function(e) {
            function n() {
                return i(this, n),
                c(this, u(n).apply(this, arguments))
            }
            return s(n, e),
            o(n, [{
                key: "conjunctions",
                value: function() {
                    return this.match("(and|or)")
                }
            }, {
                key: "parts",
                value: function() {
                    return this.splitAfter("(@hasComma|#Conjunction)")
                }
            }, {
                key: "items",
                value: function() {
                    return this.parts().notIf("#Conjunction")
                }
            }, {
                key: "add",
                value: function(e) {
                    return this.forEach((function(n) {
                        var r = t(n).beforeLast;
                        r.append(e),
                        r.termList(0).addPunctuation(",")
                    }
                    )),
                    this
                }
            }, {
                key: "remove",
                value: function() {
                    return this
                }
            }, {
                key: "hasOxfordComma",
                value: function() {
                    return this.filter((function(e) {
                        return t(e).hasOxford
                    }
                    ))
                }
            }, {
                key: "addOxfordComma",
                value: function() {
                    return this
                }
            }, {
                key: "removeOxfordComma",
                value: function() {
                    return this
                }
            }]),
            n
        }(e);
        return n.prototype.things = n.prototype.items,
        e.prototype.lists = function(e) {
            var t = this.if("@hasComma+ .? (and|or) not? .")
              , r = t.match("(#Noun|#Adjective)+ #Conjunction not? #Adjective? #Noun+")
              , i = t.match("(#Adjective|#Adverb)+ #Conjunction not? #Adverb? #Adjective+")
              , a = t.match("(#Verb|#Adverb)+ #Conjunction not? #Adverb? #Verb+")
              , o = r.concat(i);
            return o = (o = o.concat(a)).if("@hasComma"),
            "number" == typeof e && (o = t.get(e)),
            new n(o.list,this,this.world)
        }
        ,
        e
    }
      , ra = function(e) {
        return !0 === e.has("#Plural") || !0 !== e.has("(#Pronoun|#Place|#Value|#Person|#Uncountable|#Month|#WeekDay|#Holiday|#Possessive)")
    }
      , ia = {
        hour: "an",
        heir: "an",
        heirloom: "an",
        honest: "an",
        honour: "an",
        honor: "an",
        uber: "an"
    }
      , aa = {
        a: !0,
        e: !0,
        f: !0,
        h: !0,
        i: !0,
        l: !0,
        m: !0,
        n: !0,
        o: !0,
        r: !0,
        s: !0,
        x: !0
    }
      , oa = [/^onc?e/i, /^u[bcfhjkqrstn][aeiou]/i, /^eul/i]
      , sa = function(e) {
        if (e.has("#Person") || e.has("#Place"))
            return "";
        if (e.has("#Plural"))
            return "the";
        var t = e.text("normal").trim();
        if (ia.hasOwnProperty(t))
            return ia[t];
        var n = t.substr(0, 1);
        if (e.has("^@isAcronym") && aa.hasOwnProperty(n))
            return "an";
        for (var r = 0; r < oa.length; r++)
            if (oa[r].test(t))
                return "a";
        return /^[aeiou]/i.test(t) ? "an" : "a"
    }
      , ua = {
        isSingular: [/(ax|test)is$/i, /(octop|vir|radi|nucle|fung|cact|stimul)us$/i, /(octop|vir)i$/i, /(rl)f$/i, /(alias|status)$/i, /(bu)s$/i, /(al|ad|at|er|et|ed|ad)o$/i, /(ti)um$/i, /(ti)a$/i, /sis$/i, /(?:(^f)fe|(lr)f)$/i, /hive$/i, /(^aeiouy|qu)y$/i, /(x|ch|ss|sh|z)$/i, /(matr|vert|ind|cort)(ix|ex)$/i, /(m|l)ouse$/i, /(m|l)ice$/i, /(antenn|formul|nebul|vertebr|vit)a$/i, /.sis$/i, /^(?!talis|.*hu)(.*)man$/i],
        isPlural: [/(antenn|formul|nebul|vertebr|vit)ae$/i, /(octop|vir|radi|nucle|fung|cact|stimul)i$/i, /men$/i, /.tia$/i, /(m|l)ice$/i]
    }
      , la = /s$/
      , ca = function(e) {
        return !ua.isSingular.find((function(t) {
            return t.test(e)
        }
        )) && (!0 === la.test(e) || (!!ua.isPlural.find((function(t) {
            return t.test(e)
        }
        )) || null))
    }
      , ha = {
        he: "his",
        she: "hers",
        they: "theirs",
        we: "ours",
        i: "mine",
        you: "yours",
        her: "hers",
        their: "theirs",
        our: "ours",
        my: "mine",
        your: "yours"
    }
      , fa = function(e) {
        var t = e.text("text").trim();
        return ha.hasOwnProperty(t) ? (e.replaceWith(ha[t], !0),
        void e.tag("Possessive", "toPossessive")) : /s$/.test(t) ? (t += "'",
        e.replaceWith(t, !0),
        void e.tag("Possessive", "toPossessive")) : (t += "'s",
        e.replaceWith(t, !0),
        void e.tag("Possessive", "toPossessive"))
    }
      , da = function(e) {
        var t = {
            main: e
        };
        if (e.has("#Noun (of|by|for) .")) {
            var n = e.splitAfter("[#Noun+]");
            t.main = n.eq(0),
            t.post = n.eq(1)
        }
        return t
    }
      , pa = {
        json: function(e) {
            var t = null;
            "number" == typeof e && (t = e,
            e = null),
            e = e || {
                text: !0,
                normal: !0,
                trim: !0,
                terms: !0
            };
            var n = [];
            return this.forEach((function(t) {
                var r = t.json(e)[0];
                r.article = sa(t),
                n.push(r)
            }
            )),
            null !== t ? n[t] : n
        },
        adjectives: function() {
            var e = this.lookAhead("^(that|who|which)? (was|is|will)? be? #Adverb? #Adjective+");
            return (e = (e = e.concat(this.lookBehind("#Adjective+ #Adverb?$"))).match("#Adjective")).sort("index")
        },
        isPlural: function() {
            return this.if("#Plural")
        },
        hasPlural: function() {
            return this.filter((function(e) {
                return ra(e)
            }
            ))
        },
        toPlural: function(e) {
            var t = this
              , n = this.world.transforms.toPlural;
            return this.forEach((function(r) {
                if (!r.has("#Plural") && !1 !== ra(r)) {
                    var i = da(r).main
                      , a = i.text();
                    if ((i.has("#Singular") || !0 !== ca(a)) && (a = n(a, t.world),
                    i.replace(a).tag("#Plural"),
                    e)) {
                        var o = i.lookBefore("(an|a) #Adjective?$").not("#Adjective");
                        !0 === o.found && o.remove()
                    }
                }
            }
            )),
            this
        },
        toSingular: function(e) {
            var t = this
              , n = this.world.transforms.toSingular;
            return this.forEach((function(r) {
                if (!r.has("#Singular") && !1 !== ra(r)) {
                    var i = da(r).main
                      , a = i.text();
                    if ((i.has("#Plural") || !0 === ca(a)) && (a = n(a, t.world),
                    i.replace(a).tag("#Singular"),
                    e)) {
                        var o = r
                          , s = r.lookBefore("#Adjective");
                        s.found && (o = s);
                        var u = sa(o);
                        o.insertBefore(u)
                    }
                }
            }
            )),
            this
        },
        toPossessive: function() {
            return this.forEach((function(e) {
                fa(e)
            }
            )),
            this
        }
    }
      , ma = function(e) {
        var t = function(e) {
            function t() {
                return i(this, t),
                c(this, u(t).apply(this, arguments))
            }
            return s(t, e),
            t
        }(e);
        return Object.assign(t.prototype, pa),
        e.prototype.nouns = function(e) {
            var n = this.match("(#City && @hasComma) (#Region|#Country)")
              , r = this.not(n).splitAfter("@hasComma");
            return r = (r = (r = (r = (r = (r = (r = r.concat(n)).match("#Noun+ (of|by)? the? #Noun+?")).not("#Pronoun")).not("(there|these)")).not("(#Month|#WeekDay)")).not("(my|our|your|their|her|his)")).not("(of|for|by|the)$"),
            "number" == typeof e && (r = r.get(e)),
            new t(r.list,this,this.world)
        }
        ,
        e
    }
      , ga = /\(/
      , va = /\)/
      , ba = function(e) {
        var t = function(e) {
            function t() {
                return i(this, t),
                c(this, u(t).apply(this, arguments))
            }
            return s(t, e),
            o(t, [{
                key: "unwrap",
                value: function() {
                    return this.list.forEach((function(e) {
                        var t = e.terms(0);
                        t.pre = t.pre.replace(ga, "");
                        var n = e.lastTerm();
                        n.post = n.post.replace(va, "")
                    }
                    )),
                    this
                }
            }]),
            t
        }(e);
        return e.prototype.parentheses = function(e) {
            var n = [];
            return this.list.forEach((function(e) {
                for (var t = e.terms(), r = 0; r < t.length; r += 1) {
                    var i = t[r];
                    if (ga.test(i.pre))
                        for (var a = r; a < t.length; a += 1)
                            if (va.test(t[a].post)) {
                                var o = a - r + 1;
                                n.push(e.buildFrom(i.id, o)),
                                r = a;
                                break
                            }
                }
            }
            )),
            "number" == typeof e ? (n = n[e] ? [n[e]] : [],
            new t(n,this,this.world)) : new t(n,this,this.world)
        }
        ,
        e
    }
      , ya = function(e) {
        var t = function(e) {
            function t(e, n, r) {
                var a;
                return i(this, t),
                (a = c(this, u(t).call(this, e, n, r))).contracted = null,
                a
            }
            return s(t, e),
            o(t, [{
                key: "strip",
                value: function() {
                    return this.list.forEach((function(e) {
                        e.terms().forEach((function(e) {
                            var t = e.text.replace(/'s$/, "");
                            e.set(t || e.text)
                        }
                        ))
                    }
                    )),
                    this
                }
            }]),
            t
        }(e);
        return e.prototype.possessives = function(e) {
            var n = this.match("#Noun+? #Possessive");
            return "number" == typeof e && (n = n.get(e)),
            new t(n.list,this,this.world)
        }
        ,
        e
    }
      , wa = {
        '"': '"',
        "＂": "＂",
        "'": "'",
        "“": "”",
        "‘": "’",
        "‟": "”",
        "‛": "’",
        "„": "”",
        "⹂": "”",
        "‚": "’",
        "«": "»",
        "‹": "›",
        "‵": "′",
        "‶": "″",
        "‷": "‴",
        "〝": "〞",
        "`": "´",
        "〟": "〞"
    }
      , Aa = RegExp("(" + Object.keys(wa).join("|") + ")")
      , ka = function(e, t) {
        var n = e.verb
          , r = n.text("normal");
        if (n.has("#Infinitive"))
            return r;
        var i = null;
        return n.has("#PastTense") ? i = "PastTense" : n.has("#Gerund") ? i = "Gerund" : n.has("#PresentTense") ? i = "PresentTense" : n.has("#Participle") ? i = "Participle" : n.has("#Actor") && (i = "Actor"),
        t.transforms.toInfinitive(r, t, i)
    }
      , $a = function(e) {
        var t = e.verb;
        if (t.has("(are|were|does)") || e.auxiliary.has("(are|were|does)"))
            return !0;
        if (t.has("(is|am|do|was)") || e.auxiliary.has("(is|am|do|was)"))
            return !1;
        var n = function(e) {
            return e.lookBehind("#Noun+").last()
        }(t);
        return !!n.has("(we|they|you)") || (!!n.has("#Plural") || !n.has("#Singular") && null)
    }
      , Pa = function(e, t) {
        var n = e.verb;
        if (!e.negative.found)
            if (e.auxiliary.found)
                e.auxiliary.eq(0).append("not");
            else if (n.has("(#Copula|will|has|had|do)"))
                n.append("not");
            else {
                if (n.has("#PastTense")) {
                    var r = ka(e, t);
                    return n.replaceWith(r, !0),
                    void n.prepend("did not")
                }
                if (n.has("#PresentTense")) {
                    var i = ka(e, t);
                    return n.replaceWith(i, !0),
                    void ($a(e) ? n.prepend("do not") : n.prepend("does not"))
                }
                if (n.has("#Gerund")) {
                    var a = ka(e, t);
                    return n.replaceWith(a, !0),
                    void n.prepend("not")
                }
                $a(e) ? n.prepend("does not") : n.prepend("do not")
            }
    }
      , Ca = function(e) {
        var t = {
            adverb: e.match("#Adverb+"),
            negative: e.match("#Negative"),
            auxiliary: e.match("#Auxiliary").not("(#Negative|#Adverb)"),
            particle: e.match("#Particle"),
            verb: e.match("#Verb").not("(#Adverb|#Negative|#Auxiliary|#Particle)")
        };
        if (!t.verb.found)
            return Object.keys(t).forEach((function(e) {
                t[e] = t[e].not(".")
            }
            )),
            t.verb = e,
            t;
        if (t.adverb && t.adverb.found) {
            var n = t.adverb.text("reduced") + "$";
            e.has(n) && (t.adverbAfter = !0)
        }
        return t
    }
      , Ea = function(e) {
        var t = !1
          , n = $a(e)
          , r = e.negative.found;
        e.verb.lookBehind("(i|we) (#Adverb|#Verb)?$").found && (t = !0);
        var i = {
            PastTense: "was",
            PresentTense: "is",
            FutureTense: "will be",
            Infinitive: "is",
            Gerund: "being",
            Actor: "",
            PerfectTense: "been",
            Pluperfect: "been"
        };
        return !0 === t && (i.PresentTense = "am",
        i.Infinitive = "am"),
        n && (i.PastTense = "were",
        i.PresentTense = "are",
        i.Infinitive = "are"),
        r && (i.PastTense += " not",
        i.PresentTense += " not",
        i.FutureTense = "will not be",
        i.Infinitive += " not",
        i.PerfectTense = "not " + i.PerfectTense,
        i.Pluperfect = "not " + i.Pluperfect,
        i.Gerund = "not " + i.Gerund),
        i
    }
      , xa = function(e, t) {
        var n = e.verb;
        if (n.has("#Copula") || "be" === n.out("normal") && e.auxiliary.has("will"))
            return Ea(e);
        var r = ka(e, t);
        if (!r)
            return {};
        var i = t.transforms.conjugate(r, t);
        if (i.Infinitive = r,
        e.particle.found) {
            var a = e.particle.text();
            Object.keys(i).forEach((function(e) {
                return i[e] += " " + a
            }
            ))
        }
        if (e.adverb.found) {
            var o = e.adverb.text();
            !0 === e.adverbAfter ? Object.keys(i).forEach((function(e) {
                return i[e] += " " + o
            }
            )) : Object.keys(i).forEach((function(e) {
                return i[e] = o + " " + i[e]
            }
            ))
        }
        var s = e.negative.found;
        return s && (i.PastTense = "did not " + i.Infinitive,
        i.PresentTense = "does not " + i.Infinitive,
        i.Gerund = "not " + i.Gerund),
        i.FutureTense || (i.FutureTense = s ? "will not " + i.Infinitive : "will " + i.Infinitive),
        s && (i.Infinitive = "not " + i.Infinitive),
        i
    }
      , ja = {
        json: function(e) {
            var t = this
              , n = null;
            "number" == typeof e && (n = e,
            e = null),
            e = e || {
                text: !0,
                normal: !0,
                trim: !0,
                terms: !0
            };
            var r = [];
            return this.forEach((function(n) {
                var i = n.json(e)[0]
                  , a = Ca(n);
                i.parts = {},
                Object.keys(a).forEach((function(e) {
                    i.parts[e] = a[e].text("normal")
                }
                )),
                i.isNegative = n.has("#Negative"),
                i.conjugations = xa(a, t.world),
                r.push(i)
            }
            )),
            null !== n ? r[n] : r
        },
        adverbs: function() {
            var e = [];
            this.forEach((function(t) {
                var n = Ca(t).adverb;
                n.found && (e = e.concat(n.list))
            }
            ));
            var t = this.lookBehind("#Adverb$");
            return t.found && (e = t.list.concat(e)),
            (t = this.lookAhead("^#Adverb")).found && (e = e.concat(t.list)),
            this.buildFrom(e)
        },
        isPlural: function() {
            var e = this
              , t = [];
            return this.forEach((function(n) {
                var r = Ca(n);
                !0 === $a(r, e.world) && t.push(n.list[0])
            }
            )),
            this.buildFrom(t)
        },
        isSingular: function() {
            var e = this
              , t = [];
            return this.forEach((function(n) {
                var r = Ca(n);
                !1 === $a(r, e.world) && t.push(n.list[0])
            }
            )),
            this.buildFrom(t)
        },
        conjugate: function() {
            var e = this
              , t = [];
            return this.forEach((function(n) {
                var r = Ca(n)
                  , i = xa(r, e.world);
                t.push(i)
            }
            )),
            t
        },
        toPastTense: function() {
            var e = this;
            return this.forEach((function(t) {
                var n = Ca(t)
                  , r = xa(n, e.world).PastTense;
                r && t.replaceWith(r, !1)
            }
            )),
            this
        },
        toPresentTense: function() {
            var e = this;
            return this.forEach((function(t) {
                var n = Ca(t)
                  , r = xa(n, e.world)
                  , i = r.PresentTense;
                t.lookBehind("(i|we) (#Adverb|#Verb)?$").found && (i = r.Infinitive),
                i && (t.replaceWith(i, !1),
                t.tag("PresentTense"))
            }
            )),
            this
        },
        toFutureTense: function() {
            var e = this;
            return this.forEach((function(t) {
                var n = Ca(t)
                  , r = xa(n, e.world).FutureTense;
                r && (t.replaceWith(r, !1),
                t.tag("FutureTense"))
            }
            )),
            this
        },
        toInfinitive: function() {
            var e = this;
            return this.forEach((function(t) {
                var n = Ca(t)
                  , r = ka(n, e.world);
                r && (t.replaceWith(r, !1),
                t.tag("Infinitive"))
            }
            )),
            this
        },
        toGerund: function() {
            var e = this;
            return this.forEach((function(t) {
                var n = Ca(t)
                  , r = xa(n, e.world).Gerund;
                r && (t.replaceWith(r, !1),
                t.tag("Gerund"))
            }
            )),
            this
        },
        isNegative: function() {
            return this.if("#Negative")
        },
        isPositive: function() {
            return this.ifNo("#Negative")
        },
        toNegative: function() {
            var e = this;
            return this.list.forEach((function(t) {
                var n = e.buildFrom([t])
                  , r = Ca(n);
                Pa(r, n.world)
            }
            )),
            this
        },
        toPositive: function() {
            var e = this.match("do not #Verb");
            return e.found && e.remove("do not"),
            this.remove("#Negative")
        }
    }
      , Ga = [Xi, Yi, ea, ta, na, ma, ba, ya, function(e) {
        var t = function(e) {
            function t() {
                return i(this, t),
                c(this, u(t).apply(this, arguments))
            }
            return s(t, e),
            o(t, [{
                key: "unwrap",
                value: function() {
                    return this
                }
            }]),
            t
        }(e);
        return e.prototype.quotations = function(e) {
            var n = [];
            return this.list.forEach((function(e) {
                for (var t = e.terms(), r = 0; r < t.length; r += 1) {
                    var i = t[r];
                    if (Aa.test(i.pre))
                        for (var a = (i.pre.match(Aa) || [])[0], o = wa[a], s = r; s < t.length; s += 1)
                            if (-1 !== t[s].post.indexOf(o)) {
                                var u = s - r + 1;
                                n.push(e.buildFrom(i.id, u)),
                                r = s;
                                break
                            }
                }
            }
            )),
            "number" == typeof e ? (n = n[e] ? [n[e]] : [],
            new t(n,this,this.world)) : new t(n,this,this.world)
        }
        ,
        e.prototype.quotes = e.prototype.quotations,
        e
    }
    , function(e) {
        var t = function(e) {
            function t() {
                return i(this, t),
                c(this, u(t).apply(this, arguments))
            }
            return s(t, e),
            t
        }(e);
        return Object.assign(t.prototype, ja),
        t.prototype.negate = t.prototype.toNegative,
        e.prototype.verbs = function(e) {
            var n = this.match("(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+")
              , r = (n = (n = n.not("^#Adverb+")).not("#Adverb+$")).match("(#Adverb && @hasComma) #Adverb")
              , i = n.not(r).splitAfter("@hasComma");
            return (i = i.concat(r)).sort("index"),
            i = i.if("#Verb"),
            "number" == typeof e && (i = i.get(e)),
            new t(i.list,this,this.world)
        }
        ,
        e
    }
    , function(e) {
        var t = function(e) {
            function t() {
                return i(this, t),
                c(this, u(t).apply(this, arguments))
            }
            return s(t, e),
            t
        }(e);
        return e.prototype.people = function(e) {
            var n = this.splitAfter("@hasComma");
            return n = n.match("#Person+"),
            "number" == typeof e && (n = n.get(e)),
            new t(n.list,this,this.world)
        }
        ,
        e
    }
    ]
      , Na = function(e) {
        return Object.keys(gr).forEach((function(t) {
            return e.prototype[t] = gr[t]
        }
        )),
        Ga.forEach((function(t) {
            return t(e)
        }
        )),
        e
    }
      , Fa = {
        misc: pr,
        selections: gr
    }
      , Ba = function() {
        function e(t, n, r) {
            var a = this;
            i(this, e),
            this.list = t,
            Object.defineProperty(this, "from", {
                enumerable: !1,
                value: n,
                writable: !0
            }),
            void 0 === r && void 0 !== n && (r = n.world),
            Object.defineProperty(this, "world", {
                enumerable: !1,
                value: r,
                writable: !0
            }),
            Object.defineProperty(this, "found", {
                get: function() {
                    return a.list.length > 0
                }
            }),
            Object.defineProperty(this, "length", {
                get: function() {
                    return a.list.length
                }
            }),
            Object.defineProperty(this, "isA", {
                get: function() {
                    return "Doc"
                }
            })
        }
        return o(e, [{
            key: "tagger",
            value: function() {
                return Qi(this)
            }
        }, {
            key: "pool",
            value: function() {
                return this.list.length > 0 ? this.list[0].pool : this.all().list[0].pool
            }
        }]),
        e
    }();
    Ba.prototype.buildFrom = function(e) {
        return e = e.map((function(e) {
            return e.clone(!0)
        }
        )),
        new Ba(e,this,this.world)
    }
    ,
    Ba.prototype.fromText = function(e) {
        var t = ot(e, this.world, this.pool());
        return this.buildFrom(t)
    }
    ,
    Object.assign(Ba.prototype, Fa.misc),
    Object.assign(Ba.prototype, Fa.selections),
    Na(Ba);
    var Oa = {
        untag: "unTag",
        and: "match",
        notIf: "ifNo",
        only: "if",
        onlyIf: "if"
    };
    Object.keys(Oa).forEach((function(e) {
        return Ba.prototype[e] = Ba.prototype[Oa[e]]
    }
    ));
    var Da = Ba
      , Ta = new bn
      , Va = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = arguments.length > 1 ? arguments[1] : void 0;
        t && Ta.addWords(t);
        var n = ot(e, Ta)
          , r = new Da(n,null,Ta);
        return r.tagger(),
        r
    };
    Va.tokenize = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = arguments.length > 1 ? arguments[1] : void 0;
        t && Ta.addWords(t);
        var n = ot(e, Ta)
          , r = new Da(n,null,Ta);
        return r
    }
    ,
    Va.extend = function(e) {
        return e(Da, Ta),
        this
    }
    ,
    Va.clone = function() {
        return Ta = Ta.clone(),
        this
    }
    ,
    Va.load = function(e) {
        var t = st(e, Ta);
        return new Da(t,null,Ta)
    }
    ,
    Va.verbose = function() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return Ta.verbose(e),
        this
    }
    ,
    Va.version = "12.2.1",
    Va.import = Va.load;
    var za = Va;
    t.default = za
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function i(e, t) {
        return (i = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function a(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }
    n.r(t);
    var o = "twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|fourty"
      , s = function(e, t) {
        var n = e.match("#Value+");
        if (n.has("#NumericValue #NumericValue") && (n.has("#Value @hasComma #Value") ? n.splitAfter("@hasComma") : n = n.splitAfter("#NumericValue")),
        n.has("#Value #Value #Value") && !n.has("#Multiple") && n.has("(" + o + ") #Cardinal #Cardinal") && (n = n.splitAfter("(" + o + ") #Cardinal")),
        n.has("#Value #Value")) {
            n.has("#NumericValue #NumericValue") && (n = n.splitOn("#Year")),
            n.has("(" + o + ") (eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen)") && (n = n.splitAfter("(" + o + ")"));
            var r = n.match("#Cardinal #Cardinal");
            r.found && !n.has("(point|decimal)") && (r.has("#Cardinal (#Multiple|point|decimal)") || r.has("(" + o + ") #Cardinal") || r.has("#Multiple #Value") || r.terms().forEach((function(e) {
                n = n.splitOn(e)
            }
            ))),
            n.match("#Ordinal #Ordinal").match("#TextValue").found && !n.has("#Multiple") && (n.has("(" + o + ") #Ordinal") || (n = n.splitAfter("#Ordinal"))),
            n.has("#Ordinal #Cardinal") && (n = n.splitBefore("#Cardinal+")),
            n.has("#TextValue #NumericValue") && !n.has("(" + o + "|#Multiple)") && (n = n.splitBefore("#NumericValue+"))
        }
        return n.has("#NumberRange") && (n = n.splitAfter("#NumberRange")),
        "number" == typeof t && (n = n.get(t)),
        n
    }
      , u = function(e) {
        for (var t = [{
            reg: /^(minus|negative)[\s\-]/i,
            mult: -1
        }, {
            reg: /^(a\s)?half[\s\-](of\s)?/i,
            mult: .5
        }], n = 0; n < t.length; n++)
            if (!0 === t[n].reg.test(e))
                return {
                    amount: t[n].mult,
                    str: e.replace(t[n].reg, "")
                };
        return {
            amount: 1,
            str: e
        }
    }
      , l = {
        ones: {
            zeroth: 0,
            first: 1,
            second: 2,
            third: 3,
            fourth: 4,
            fifth: 5,
            sixth: 6,
            seventh: 7,
            eighth: 8,
            ninth: 9,
            zero: 0,
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9
        },
        teens: {
            tenth: 10,
            eleventh: 11,
            twelfth: 12,
            thirteenth: 13,
            fourteenth: 14,
            fifteenth: 15,
            sixteenth: 16,
            seventeenth: 17,
            eighteenth: 18,
            nineteenth: 19,
            ten: 10,
            eleven: 11,
            twelve: 12,
            thirteen: 13,
            fourteen: 14,
            fifteen: 15,
            sixteen: 16,
            seventeen: 17,
            eighteen: 18,
            nineteen: 19
        },
        tens: {
            twentieth: 20,
            thirtieth: 30,
            fortieth: 40,
            fourtieth: 40,
            fiftieth: 50,
            sixtieth: 60,
            seventieth: 70,
            eightieth: 80,
            ninetieth: 90,
            twenty: 20,
            thirty: 30,
            forty: 40,
            fourty: 40,
            fifty: 50,
            sixty: 60,
            seventy: 70,
            eighty: 80,
            ninety: 90
        },
        multiples: {
            hundredth: 100,
            thousandth: 1e3,
            millionth: 1e6,
            billionth: 1e9,
            trillionth: 1e12,
            quadrillionth: 1e15,
            quintillionth: 1e18,
            sextillionth: 1e21,
            septillionth: 1e24,
            hundred: 100,
            thousand: 1e3,
            million: 1e6,
            billion: 1e9,
            trillion: 1e12,
            quadrillion: 1e15,
            quintillion: 1e18,
            sextillion: 1e21,
            septillion: 1e24,
            grand: 1e3
        }
    }
      , c = function(e, t) {
        if (l.ones.hasOwnProperty(e)) {
            if (t.ones || t.teens)
                return !1
        } else if (l.teens.hasOwnProperty(e)) {
            if (t.ones || t.teens || t.tens)
                return !1
        } else if (l.tens.hasOwnProperty(e) && (t.ones || t.teens || t.tens))
            return !1;
        return !0
    }
      , h = function(e) {
        for (var t = "0.", n = 0; n < e.length; n++) {
            var r = e[n];
            if (!0 === l.ones.hasOwnProperty(r))
                t += l.ones[r];
            else if (!0 === l.teens.hasOwnProperty(r))
                t += l.teens[r];
            else if (!0 === l.tens.hasOwnProperty(r))
                t += l.tens[r];
            else {
                if (!0 !== /^[0-9]$/.test(r))
                    return 0;
                t += r
            }
        }
        return parseFloat(t)
    }
      , f = function(e) {
        return e = (e = (e = (e = (e = (e = (e = (e = e.replace(/1st$/, "1")).replace(/2nd$/, "2")).replace(/3rd$/, "3")).replace(/([4567890])r?th$/, "$1")).replace(/^[$€¥£¢]/, "")).replace(/[%$€¥£¢]$/, "")).replace(/,/g, "")).replace(/([0-9])([a-z\u00C0-\u00FF]{1,2})$/, "$1")
    }
      , d = /^([0-9,\. ]+)\/([0-9,\. ]+)$/
      , p = {
        "a couple": 2,
        "a dozen": 12,
        "two dozen": 24,
        zero: 0
    }
      , m = function(e) {
        return Object.keys(e).reduce((function(t, n) {
            return t += e[n]
        }
        ), 0)
    }
      , g = function(e) {
        if (!0 === p.hasOwnProperty(e))
            return p[e];
        if ("a" === e || "an" === e)
            return 1;
        for (var t = u(e), n = null, r = {}, i = 0, a = !1, o = (e = t.str).split(/[ -]/), s = 0; s < o.length; s++) {
            var g = o[s];
            if ((g = f(g)) && "and" !== g)
                if ("-" !== g && "negative" !== g) {
                    if ("-" === g.charAt(0) && (a = !0,
                    g = g.substr(1)),
                    "point" === g)
                        return i += m(r),
                        i += h(o.slice(s + 1, o.length)),
                        i *= t.amount;
                    var v = g.match(d);
                    if (v) {
                        var b = parseFloat(v[1].replace(/[, ]/g, ""))
                          , y = parseFloat(v[2].replace(/[, ]/g, ""));
                        y && (i += b / y || 0)
                    } else {
                        if (!1 === c(g, r))
                            return null;
                        if (/^[0-9\.]+$/.test(g))
                            r.ones = parseFloat(g);
                        else if (!0 === l.ones.hasOwnProperty(g))
                            r.ones = l.ones[g];
                        else if (!0 === l.teens.hasOwnProperty(g))
                            r.teens = l.teens[g];
                        else if (!0 === l.tens.hasOwnProperty(g))
                            r.tens = l.tens[g];
                        else if (!0 === l.multiples.hasOwnProperty(g)) {
                            var w = l.multiples[g];
                            if (w === n)
                                return null;
                            if (100 === w && void 0 !== o[s + 1]) {
                                var A = o[s + 1];
                                l.multiples[A] && (w *= l.multiples[A],
                                s += 1)
                            }
                            null === n || w < n ? (i += (m(r) || 1) * w,
                            n = w,
                            r = {}) : (n = w,
                            i = ((i += m(r)) || 1) * w,
                            r = {})
                        }
                    }
                } else
                    a = !0
        }
        return i += m(r),
        i *= t.amount,
        0 === (i *= a ? -1 : 1) && 0 === Object.keys(r).length ? null : i
    }
      , v = function(e) {
        var t = e.text("reduced")
          , n = /[0-9],[0-9]/.test(e.text("text"))
          , r = (t = t.replace(/,/g, "")).split(/^([^0-9]*)([0-9.,]*)([^0-9]*)$/);
        if (r && r[2] && e.terms().length < 2) {
            var i = parseFloat(r[2] || t);
            "number" != typeof i && (i = null);
            var a = r[3] || "";
            return "st" !== a && "nd" !== a && "rd" !== a && "th" !== a || (a = ""),
            "m" !== a && "M" !== a || (i *= 1e6,
            a = ""),
            "k" !== a && "k" !== a || (i *= 1e3,
            a = ""),
            {
                hasComma: n,
                prefix: r[1] || "",
                num: i,
                suffix: a
            }
        }
        return {
            hasComma: n,
            prefix: "",
            num: g(t),
            suffix: ""
        }
    }
      , b = function(e, t, n) {
        if (!1 !== e) {
            var r = t.lookAhead("^(#Unit|#Noun)");
            r.has("(#Address|#Money|#Percent)") || t.has("#Ordinal") || (1 === n.num ? r.nouns().toSingular() : r.has("#Singular") && r.nouns().toPlural())
        }
    }
      , y = function(e) {
        return e < 1e6 ? String(e) : -1 === (t = "number" == typeof e ? e.toFixed(0) : e).indexOf("e+") ? t : t.replace(".", "").split("e+").reduce((function(e, t) {
            return e + Array(t - e.length + 2).join(0)
        }
        ));
        var t
    }
      , w = [["ninety", 90], ["eighty", 80], ["seventy", 70], ["sixty", 60], ["fifty", 50], ["forty", 40], ["thirty", 30], ["twenty", 20]]
      , A = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
      , k = [[1e24, "septillion"], [1e20, "hundred sextillion"], [1e21, "sextillion"], [1e20, "hundred quintillion"], [1e18, "quintillion"], [1e17, "hundred quadrillion"], [1e15, "quadrillion"], [1e14, "hundred trillion"], [1e12, "trillion"], [1e11, "hundred billion"], [1e9, "billion"], [1e8, "hundred million"], [1e6, "million"], [1e5, "hundred thousand"], [1e3, "thousand"], [100, "hundred"], [1, "one"]]
      , $ = function(e) {
        var t = [];
        if (e > 100)
            return t;
        for (var n = 0; n < w.length; n++)
            e >= w[n][1] && (e -= w[n][1],
            t.push(w[n][0]));
        return A[e] && t.push(A[e]),
        t
    }
      , P = function(e) {
        if (0 === e || "0" === e)
            return "zero";
        e > 1e21 && (e = y(e));
        var t = [];
        e < 0 && (t.push("minus"),
        e = Math.abs(e));
        for (var n = function(e) {
            var t = e
              , n = [];
            return k.forEach((function(r) {
                if (e >= r[0]) {
                    var i = Math.floor(t / r[0]);
                    t -= i * r[0],
                    i && n.push({
                        unit: r[1],
                        count: i
                    })
                }
            }
            )),
            n
        }(e), r = 0; r < n.length; r++) {
            var i = n[r].unit;
            "one" === i && (i = "",
            t.length > 1 && t.push("and")),
            (t = t.concat($(n[r].count))).push(i)
        }
        return 0 === (t = (t = t.concat(function(e) {
            var t = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
              , n = []
              , r = y(e).match(/\.([0-9]+)/);
            if (!r || !r[0])
                return n;
            n.push("point");
            for (var i = r[0].split(""), a = 0; a < i.length; a++)
                n.push(t[i[a]]);
            return n
        }(e))).filter((function(e) {
            return e
        }
        ))).length && (t[0] = ""),
        t.join(" ")
    }
      , C = function(e) {
        if (!e && 0 !== e)
            return null;
        var t = e % 100;
        if (t > 10 && t < 20)
            return String(e) + "th";
        var n = {
            0: "th",
            1: "st",
            2: "nd",
            3: "rd"
        }
          , r = y(e)
          , i = r.slice(r.length - 1, r.length);
        return r += n[i] ? n[i] : "th"
    }
      , E = {
        one: "first",
        two: "second",
        three: "third",
        five: "fifth",
        eight: "eighth",
        nine: "ninth",
        twelve: "twelfth",
        twenty: "twentieth",
        thirty: "thirtieth",
        forty: "fortieth",
        fourty: "fourtieth",
        fifty: "fiftieth",
        sixty: "sixtieth",
        seventy: "seventieth",
        eighty: "eightieth",
        ninety: "ninetieth"
    }
      , x = function(e) {
        var t = P(e).split(" ")
          , n = t[t.length - 1];
        return E.hasOwnProperty(n) ? t[t.length - 1] = E[n] : t[t.length - 1] = n.replace(/y$/, "i") + "th",
        t.join(" ")
    }
      , j = {
        "¢": "cents",
        $: "dollars",
        "£": "pounds",
        "¥": "yen",
        "€": "euros",
        "₡": "colón",
        "฿": "baht",
        "₭": "kip",
        "₩": "won",
        "₹": "rupees",
        "₽": "ruble",
        "₺": "liras"
    }
      , G = {
        "%": "percent",
        s: "seconds",
        cm: "centimetres",
        km: "kilometres"
    }
      , N = {
        usd: !0,
        eur: !0,
        jpy: !0,
        gbp: !0,
        cad: !0,
        aud: !0,
        chf: !0,
        cny: !0,
        hkd: !0,
        nzd: !0,
        kr: !0,
        rub: !0
    }
      , F = function(e) {
        return j.hasOwnProperty(e.prefix) && (e.suffix += j[e.prefix],
        e.prefix = ""),
        G.hasOwnProperty(e.suffix) && (e.suffix = G[e.suffix]),
        N.hasOwnProperty(e.suffix) && (e.suffix = e.suffix.toUpperCase()),
        e.suffix && (e.suffix = " " + e.suffix),
        e
    }
      , B = function(e, t, n) {
        var r = String(e.num);
        return t ? (e = F(e),
        n ? (r = x(r),
        "".concat(e.prefix || "").concat(r).concat(e.suffix || "")) : (r = P(r),
        "".concat(e.prefix || "").concat(r).concat(e.suffix || ""))) : n ? (r = C(r),
        e = F(e),
        "".concat(e.prefix || "").concat(r).concat(e.suffix || "")) : (!0 === e.hasComma && (r = e.num.toLocaleString()),
        r = y(r),
        "".concat(e.prefix || "").concat(r).concat(e.suffix || ""))
    }
      , O = {
        json: function(e) {
            var t = null;
            "number" == typeof e && (t = e,
            e = null),
            e = e || {
                text: !0,
                normal: !0,
                trim: !0,
                terms: !0
            };
            var n = [];
            return this.forEach((function(t) {
                var r = t.json(e)[0]
                  , i = v(t);
                r.prefix = i.prefix,
                r.number = i.num,
                r.suffix = i.suffix,
                r.cardinal = B(i, !1, !1),
                r.ordinal = B(i, !1, !0),
                r.textCardinal = B(i, !0, !1),
                r.textOrdinal = B(i, !0, !0),
                n.push(r)
            }
            )),
            null !== t ? n[t] : n
        },
        units: function() {
            return this.lookAhead("^(#Unit|#Noun)")
        },
        isOrdinal: function() {
            return this.if("#Ordinal")
        },
        isCardinal: function() {
            return this.if("#Cardinal")
        },
        toNumber: function() {
            return this.forEach((function(e) {
                var t = v(e);
                if (null !== t.num) {
                    var n = B(t, !1, e.has("#Ordinal"));
                    e.replaceWith(n, !0),
                    e.tag("NumericValue")
                }
            }
            )),
            this
        },
        toLocaleString: function() {
            return this.forEach((function(e) {
                var t = v(e);
                if (null !== t.num) {
                    t.num = t.num.toLocaleString();
                    var n = B(t, !1, e.has("#Ordinal"));
                    e.replaceWith(n, !0)
                }
            }
            )),
            this
        },
        toText: function() {
            return this.forEach((function(e) {
                var t = v(e);
                if (null !== t.num) {
                    var n = B(t, !0, e.has("#Ordinal"));
                    e.replaceWith(n, !0),
                    e.tag("TextValue")
                }
            }
            )),
            this
        },
        toCardinal: function(e) {
            return this.if("#Ordinal").forEach((function(t) {
                var n = v(t);
                if (null !== n.num) {
                    var r = B(n, t.has("#TextValue"), !1);
                    t.replaceWith(r, !0, !0),
                    t.tag("Cardinal"),
                    b(e, t, n)
                }
            }
            )),
            this
        },
        toOrdinal: function() {
            var e = this;
            return this.if("#Cardinal").forEach((function(t) {
                var n = v(t);
                if (null !== n.num) {
                    var r = B(n, t.has("#TextValue"), !0);
                    t.replaceWith(r, !0, !0),
                    t.tag("Ordinal");
                    var i = e.lookAhead("^#Plural");
                    i.found && i.nouns().toSingular()
                }
            }
            )),
            this
        },
        isEqual: function(e) {
            return this.filter((function(t) {
                return v(t).num === e
            }
            ))
        },
        greaterThan: function(e) {
            return this.filter((function(t) {
                return v(t).num > e
            }
            ))
        },
        lessThan: function(e) {
            return this.filter((function(t) {
                return v(t).num < e
            }
            ))
        },
        between: function(e, t) {
            return this.filter((function(n) {
                var r = v(n).num;
                return r > e && r < t
            }
            ))
        },
        set: function(e, t) {
            return void 0 === e ? this : ("string" == typeof e && (e = g(e)),
            this.forEach((function(n) {
                var r = v(n);
                if (r.num = e,
                null !== r.num) {
                    var i = B(r, n.has("#TextValue"), n.has("#Ordinal"));
                    n.replaceWith(i, !0, !0),
                    b(t, n, r)
                }
            }
            )),
            this)
        },
        add: function(e, t) {
            return e ? ("string" == typeof e && (e = g(e)),
            this.forEach((function(n) {
                var r = v(n);
                if (null !== r.num) {
                    r.num += e;
                    var i = B(r, n.has("#TextValue"), n.has("#Ordinal"));
                    n.replaceWith(i, !0, !0),
                    b(t, n, r)
                }
            }
            )),
            this) : this
        },
        subtract: function(e, t) {
            return this.add(-1 * e, t)
        },
        increment: function(e) {
            return this.add(1, e),
            this
        },
        decrement: function(e) {
            return this.add(-1, e),
            this
        },
        fractions: function(e) {
            var t = this.match("#Fraction");
            return "number" == typeof e && (t = t.get(e)),
            t
        },
        romanNumerals: function(e) {
            var t = this.match("#RomanNumeral").numbers();
            return "number" == typeof e && (t = t.get(e)),
            t
        },
        money: function(e) {
            var t = this.splitOn("@hasComma");
            return t = (t = t.match("#Money+ #Currency?")).numbers(),
            "number" == typeof e && (t = t.get(e)),
            t
        }
    };
    O.toNice = O.toLocaleString,
    O.isBetween = O.between,
    O.minus = O.subtract,
    O.plus = O.add,
    O.equals = O.isEqual;
    var D = O
      , T = function(e) {
        e.match("(hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion)").tag("#Multiple"),
        e.match("the [/[0-9]+s$/]").tag("#Plural"),
        e.match("half a? #Value").tag("Value", "half-a-value"),
        e.match("#Value and a (half|quarter)").tag("Value", "value-and-a-half"),
        e.match("#Money and #Money #Currency?").tag("Money", "money-and-money")
    }
      , V = {
        Fraction: {
            isA: "Value"
        },
        Multiple: {
            isA: "Value"
        }
    }
      , z = function(e, t) {
        t.addTags(V),
        t.postProcess(T);
        var n = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                a(this, r(t).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && i(e, t)
            }(t, e),
            t
        }(e);
        return Object.assign(n.prototype, D),
        e.prototype.numbers = function(e) {
            var t = s(this, e);
            return new n(t.list,this,this.world)
        }
        ,
        e.prototype.values = e.prototype.numbers,
        e
    };
    t.default = z
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function a(e, t) {
        return (a = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function o(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }
    n.r(t);
    var s = function(e) {
        var t = e.clone(!0);
        return 1 === t.length ? t : 1 === (t = t.if("#Verb")).length ? t : 1 === (t = (t = (t = (t = (t = t.ifNo("(after|although|as|because|before|if|since|than|that|though|when|whenever|where|whereas|wherever|whether|while|why|unless|until|once)")).ifNo("^even (if|though)")).ifNo("^so that")).ifNo("^rather than")).ifNo("^provided that")).length ? t : 1 === (t = t.ifNo("(that|which|whichever|who|whoever|whom|whose|whomever)")).length ? t : 1 === (t = t.ifNo("(despite|during|before|through|throughout)")).length ? t : (0 === t.length && (t = e),
        t.eq(0))
    }
      , u = function(e) {
        var t = e.clauses()
          , n = s(t)
          , r = n.match("#Determiner? (#Noun|#Adjective)+").if("#Noun")
          , i = n.verbs().eq(0);
        return {
            subject: r.eq(0),
            verb: i,
            object: i.lookAhead(".*")
        }
    }
      , l = {
        toNegative: function() {
            return this.forEach((function(e) {
                var t = u(e)
                  , n = t.verb.clone();
                n = n.verbs().toNegative(),
                t.verb.replaceWith(n, !1)
            }
            )),
            this
        },
        toPositive: function() {
            return this.forEach((function(e) {
                var t = u(e)
                  , n = t.verb.clone();
                n = n.verbs().toPositive(),
                t.verb.replaceWith(n, !1)
            }
            )),
            this
        }
    }
      , c = {
        isQuestion: function() {
            return this.filter((function(e) {
                return e.lastTerm().termList(0).hasPost("?")
            }
            ))
        },
        isExclamation: function() {
            return this.filter((function(e) {
                return e.lastTerm().termList(0).hasPost("!")
            }
            ))
        },
        isStatement: function() {
            return this.filter((function(e) {
                var t = e.lastTerm().termList(0);
                return !t.hasPost("?") && !t.hasPost("!")
            }
            ))
        },
        toExclamation: function() {
            return this
        },
        toQuestion: function() {
            return this
        },
        toStatement: function() {
            return this
        }
    }
      , h = {
        toPastTense: function() {
            return this.forEach((function(e) {
                if (!e.has("#PastTense")) {
                    var t = u(e)
                      , n = t.verb.clone();
                    if (n = n.verbs().toPastTense(),
                    t.verb.replaceWith(n, !1),
                    t.object && t.object.found && t.object.has("#PresentTense"))
                        t.object.verbs().if("#PresentTense").verbs().toPastTense()
                }
            }
            )),
            this
        },
        toPresentTense: function() {
            return this.forEach((function(e) {
                var t = u(e)
                  , n = t.verb.lookBehind("(i|we) (#Adverb|#Verb)?$").found
                  , r = t.verb.clone();
                (r = n ? r.has("(is|was|am|be)") ? r.replace("will? (is|was|am|be)", "am") : r.verbs().toInfinitive() : r.verbs().toPresentTense(),
                t.verb.replaceWith(r, !1),
                t.object && t.object.found && t.object.has("#PastTense")) && t.object.verbs().if("#PastTense").verbs().toPresentTense()
            }
            )),
            this
        },
        toFutureTense: function() {
            return this.forEach((function(e) {
                var t = u(e)
                  , n = t.verb.clone();
                (n = n.verbs().toFutureTense(),
                t.verb.replaceWith(n, !1),
                t.object && t.object.found && t.object.has("(#PastTense|#PresentTense)")) && t.object.verbs().if("(#PastTense|#PresentTense)").verbs().toInfinitive()
            }
            )),
            this
        }
    }
      , f = Object.assign({}, l, c, h)
      , d = function(e) {
        var t = function(e) {
            function t(e, n, r) {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                e = e.map((function(e) {
                    return e.clone(!0)
                }
                )),
                o(this, i(t).call(this, e, n, r))
            }
            var n, s, l;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && a(e, t)
            }(t, e),
            n = t,
            (s = [{
                key: "json",
                value: function(e) {
                    var t = null;
                    "number" == typeof e && (t = e,
                    e = null),
                    e = e || {
                        text: !0,
                        normal: !0,
                        trim: !0,
                        terms: !0
                    };
                    var n = [];
                    return this.forEach((function(t) {
                        var r = t.json(e)[0]
                          , i = u(t);
                        r.subject = i.subject.json(e)[0],
                        r.verb = i.verb.json(e)[0],
                        r.object = i.object.json(e)[0],
                        n.push(r)
                    }
                    )),
                    null !== t ? n[t] : n
                }
            }, {
                key: "subjects",
                value: function() {
                    return this.map((function(e) {
                        return u(e).subject
                    }
                    ))
                }
            }, {
                key: "isPassive",
                value: function() {
                    return this.if("was #Adverb? #PastTense #Adverb? by")
                }
            }, {
                key: "prepend",
                value: function(e) {
                    return this.forEach((function(t) {
                        var n = t.match("^.");
                        n.not("#ProperNoun").toLowerCase(),
                        n.prepend(e),
                        n.terms(0).toTitleCase()
                    }
                    )),
                    this
                }
            }, {
                key: "append",
                value: function(e) {
                    var t = /[.?!]\s*$/.test(e);
                    return this.forEach((function(n) {
                        var r = n.match(".$")
                          , i = r.termList(0)
                          , a = i.post;
                        !0 === t && (a = ""),
                        r.append(e + a),
                        i.post = " "
                    }
                    )),
                    this
                }
            }]) && r(n.prototype, s),
            l && r(n, l),
            t
        }(e);
        return Object.assign(t.prototype, f),
        e.prototype.sentences = function(e) {
            var n = this.all();
            return "number" == typeof e && (n = n.get(e)),
            new t(n.list,this,this.world)
        }
        ,
        e
    };
    t.default = d
}
]);
