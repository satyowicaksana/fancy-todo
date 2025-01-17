// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/jquery-datetimepicker.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function HighlightedDate(e, t, a) {
  "use strict";

  this.date = e, this.desc = t, this.style = a;
}

!function (e) {
  "use strict";

  var t = {
    i18n: {
      ar: {
        months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
        dayOfWeek: ["ن", "ث", "ع", "خ", "ج", "س", "ح"]
      },
      ro: {
        months: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"],
        dayOfWeek: ["l", "ma", "mi", "j", "v", "s", "d"]
      },
      id: {
        months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        dayOfWeek: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
      },
      bg: {
        months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        dayOfWeek: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
      },
      fa: {
        months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        dayOfWeek: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]
      },
      ru: {
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        dayOfWeek: ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
      },
      uk: {
        months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        dayOfWeek: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"]
      },
      en: {
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      el: {
        months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
        dayOfWeek: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"]
      },
      de: {
        months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        dayOfWeek: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
      },
      nl: {
        months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        dayOfWeek: ["zo", "ma", "di", "wo", "do", "vr", "za"]
      },
      tr: {
        months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        dayOfWeek: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"]
      },
      fr: {
        months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        dayOfWeek: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
      },
      es: {
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        dayOfWeek: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
      },
      th: {
        months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
        dayOfWeek: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."]
      },
      pl: {
        months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
        dayOfWeek: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"]
      },
      pt: {
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        dayOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
      },
      ch: {
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        dayOfWeek: ["日", "一", "二", "三", "四", "五", "六"]
      },
      se: {
        months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        dayOfWeek: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
      },
      kr: {
        months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayOfWeek: ["일", "월", "화", "수", "목", "금", "토"]
      },
      it: {
        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        dayOfWeek: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
      },
      da: {
        months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
        dayOfWeek: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
      },
      no: {
        months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        dayOfWeek: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
      },
      ja: {
        months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        dayOfWeek: ["日", "月", "火", "水", "木", "金", "土"]
      },
      vi: {
        months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        dayOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
      },
      sl: {
        months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
        dayOfWeek: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"]
      },
      cs: {
        months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        dayOfWeek: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
      },
      hu: {
        months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
        dayOfWeek: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"]
      },
      az: {
        months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
        dayOfWeek: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"]
      },
      bs: {
        months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
        dayOfWeek: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"]
      },
      ca: {
        months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
        dayOfWeek: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"]
      },
      "en-GB": {
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      et: {
        months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
        dayOfWeek: ["P", "E", "T", "K", "N", "R", "L"]
      },
      eu: {
        months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
        dayOfWeek: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."]
      },
      fi: {
        months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
        dayOfWeek: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"]
      },
      gl: {
        months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
        dayOfWeek: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"]
      },
      hr: {
        months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
        dayOfWeek: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"]
      },
      ko: {
        months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayOfWeek: ["일", "월", "화", "수", "목", "금", "토"]
      },
      lt: {
        months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"],
        dayOfWeek: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"]
      },
      lv: {
        months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
        dayOfWeek: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"]
      },
      mk: {
        months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
        dayOfWeek: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"]
      },
      mn: {
        months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
        dayOfWeek: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"]
      },
      "pt-BR": {
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        dayOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
      },
      sk: {
        months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
        dayOfWeek: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"]
      },
      sq: {
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      "sr-YU": {
        months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
        dayOfWeek: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"]
      },
      sr: {
        months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
        dayOfWeek: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"]
      },
      sv: {
        months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        dayOfWeek: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
      },
      "zh-TW": {
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        dayOfWeek: ["日", "一", "二", "三", "四", "五", "六"]
      },
      zh: {
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        dayOfWeek: ["日", "一", "二", "三", "四", "五", "六"]
      },
      he: {
        months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
        dayOfWeek: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"]
      },
      hy: {
        months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
        dayOfWeek: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"]
      },
      kg: {
        months: ["Үчтүн айы", "Бирдин айы", "Жалган Куран", "Чын Куран", "Бугу", "Кулжа", "Теке", "Баш Оона", "Аяк Оона", "Тогуздун айы", "Жетинин айы", "Бештин айы"],
        dayOfWeek: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"]
      }
    },
    value: "",
    lang: "en",
    format: "Y/m/d H:i",
    formatTime: "H:i",
    formatDate: "Y/m/d",
    startDate: !1,
    step: 60,
    monthChangeSpinner: !0,
    closeOnDateSelect: !1,
    closeOnTimeSelect: !0,
    closeOnWithoutClick: !0,
    closeOnInputClick: !0,
    timepicker: !0,
    datepicker: !0,
    weeks: !1,
    defaultTime: !1,
    defaultDate: !1,
    minDate: !1,
    maxDate: !1,
    minTime: !1,
    maxTime: !1,
    allowTimes: [],
    opened: !1,
    initTime: !0,
    inline: !1,
    theme: "",
    onSelectDate: function onSelectDate() {},
    onSelectTime: function onSelectTime() {},
    onChangeMonth: function onChangeMonth() {},
    onChangeYear: function onChangeYear() {},
    onChangeDateTime: function onChangeDateTime() {},
    onShow: function onShow() {},
    onClose: function onClose() {},
    onGenerate: function onGenerate() {},
    withoutCopyright: !0,
    inverseButton: !1,
    hours12: !1,
    next: "xdsoft_next",
    prev: "xdsoft_prev",
    dayOfWeekStart: 0,
    parentID: "body",
    timeHeightInTimePicker: 25,
    timepickerScrollbar: !0,
    todayButton: !0,
    prevButton: !0,
    nextButton: !0,
    defaultSelect: !0,
    scrollMonth: !0,
    scrollTime: !0,
    scrollInput: !0,
    lazyInit: !1,
    mask: !1,
    validateOnBlur: !0,
    allowBlank: !0,
    yearStart: 1950,
    yearEnd: 2050,
    monthStart: 0,
    monthEnd: 11,
    style: "",
    id: "",
    fixed: !1,
    roundTime: "round",
    className: "",
    weekends: [],
    highlightedDates: [],
    highlightedPeriods: [],
    disabledDates: [],
    yearOffset: 0,
    beforeShowDay: null,
    enterLikeTab: !0,
    showApplyButton: !1
  };
  Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
    var a, n;

    for (a = t || 0, n = this.length; n > a; a += 1) {
      if (this[a] === e) return a;
    }

    return -1;
  }), Date.prototype.countDaysInMonth = function () {
    return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
  }, e.fn.xdsoftScroller = function (t) {
    return this.each(function () {
      var a,
          n,
          r,
          o,
          s,
          i = e(this),
          u = function u(e) {
        var t,
            a = {
          x: 0,
          y: 0
        };
        return "touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type ? (t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], a.x = t.clientX, a.y = t.clientY) : ("mousedown" === e.type || "mouseup" === e.type || "mousemove" === e.type || "mouseover" === e.type || "mouseout" === e.type || "mouseenter" === e.type || "mouseleave" === e.type) && (a.x = e.clientX, a.y = e.clientY), a;
      },
          d = 100,
          l = !1,
          c = 0,
          f = 0,
          m = 0,
          h = !1,
          g = 0,
          p = function p() {};

      return "hide" === t ? void i.find(".xdsoft_scrollbar").hide() : (e(this).hasClass("xdsoft_scroller_box") || (a = i.children().eq(0), n = i[0].clientHeight, r = a[0].offsetHeight, o = e('<div class="xdsoft_scrollbar"></div>'), s = e('<div class="xdsoft_scroller"></div>'), o.append(s), i.addClass("xdsoft_scroller_box").append(o), p = function p(e) {
        var t = u(e).y - c + g;
        0 > t && (t = 0), t + s[0].offsetHeight > m && (t = m - s[0].offsetHeight), i.trigger("scroll_element.xdsoft_scroller", [d ? t / d : 0]);
      }, s.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function (a) {
        n || i.trigger("resize_scroll.xdsoft_scroller", [t]), c = u(a).y, g = parseInt(s.css("margin-top"), 10), m = o[0].offsetHeight, "mousedown" === a.type ? (document && e(document.body).addClass("xdsoft_noselect"), e([document.body, window]).on("mouseup.xdsoft_scroller", function r() {
          e([document.body, window]).off("mouseup.xdsoft_scroller", r).off("mousemove.xdsoft_scroller", p).removeClass("xdsoft_noselect");
        }), e(document.body).on("mousemove.xdsoft_scroller", p)) : (h = !0, a.stopPropagation(), a.preventDefault());
      }).on("touchmove", function (e) {
        h && (e.preventDefault(), p(e));
      }).on("touchend touchcancel", function () {
        h = !1, g = 0;
      }), i.on("scroll_element.xdsoft_scroller", function (e, t) {
        n || i.trigger("resize_scroll.xdsoft_scroller", [t, !0]), t = t > 1 ? 1 : 0 > t || isNaN(t) ? 0 : t, s.css("margin-top", d * t), setTimeout(function () {
          a.css("marginTop", -parseInt((a[0].offsetHeight - n) * t, 10));
        }, 10);
      }).on("resize_scroll.xdsoft_scroller", function (e, t, u) {
        var l, c;
        n = i[0].clientHeight, r = a[0].offsetHeight, l = n / r, c = l * o[0].offsetHeight, l > 1 ? s.hide() : (s.show(), s.css("height", parseInt(c > 10 ? c : 10, 10)), d = o[0].offsetHeight - s[0].offsetHeight, u !== !0 && i.trigger("scroll_element.xdsoft_scroller", [t || Math.abs(parseInt(a.css("marginTop"), 10)) / (r - n)]));
      }), i.on("mousewheel", function (e) {
        var t = Math.abs(parseInt(a.css("marginTop"), 10));
        return t -= 20 * e.deltaY, 0 > t && (t = 0), i.trigger("scroll_element.xdsoft_scroller", [t / (r - n)]), e.stopPropagation(), !1;
      }), i.on("touchstart", function (e) {
        l = u(e), f = Math.abs(parseInt(a.css("marginTop"), 10));
      }), i.on("touchmove", function (e) {
        if (l) {
          e.preventDefault();
          var t = u(e);
          i.trigger("scroll_element.xdsoft_scroller", [(f - (t.y - l.y)) / (r - n)]);
        }
      }), i.on("touchend touchcancel", function () {
        l = !1, f = 0;
      })), void i.trigger("resize_scroll.xdsoft_scroller", [t]));
    });
  }, e.fn.datetimepicker = function (a) {
    var n,
        r,
        o = 48,
        s = 57,
        i = 96,
        u = 105,
        d = 17,
        l = 46,
        c = 13,
        f = 27,
        m = 8,
        h = 37,
        g = 38,
        p = 39,
        D = 40,
        x = 9,
        v = 116,
        y = 65,
        b = 67,
        T = 86,
        k = 90,
        w = 89,
        M = !1,
        S = e.isPlainObject(a) || !a ? e.extend(!0, {}, t, a) : e.extend(!0, {}, t),
        O = 0,
        _ = function _(e) {
      e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft", function t() {
        e.is(":disabled") || e.data("xdsoft_datetimepicker") || (clearTimeout(O), O = setTimeout(function () {
          e.data("xdsoft_datetimepicker") || n(e), e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft", t).trigger("open.xdsoft");
        }, 100));
      });
    };

    return n = function n(t) {
      function n() {
        var e,
            a = !1;
        return S.startDate ? a = Y.strToDate(S.startDate) : (a = S.value || (t && t.val && t.val() ? t.val() : ""), a ? a = Y.strToDateTime(a) : S.defaultDate && (a = Y.strToDateTime(S.defaultDate), S.defaultTime && (e = Y.strtotime(S.defaultTime), a.setHours(e.getHours()), a.setMinutes(e.getMinutes())))), a && Y.isValidDate(a) ? P.data("changed", !0) : a = "", a || 0;
      }

      var r,
          O,
          _,
          F,
          A,
          Y,
          P = e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
          W = e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
          C = e('<div class="xdsoft_datepicker active"></div>'),
          J = e('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),
          H = e('<div class="xdsoft_calendar"></div>'),
          I = e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
          N = I.find(".xdsoft_time_box").eq(0),
          z = e('<div class="xdsoft_time_variant"></div>'),
          j = e('<button class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
          L = e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
          B = e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
          R = !1,
          E = 0,
          V = 0;

      S.id && P.attr("id", S.id), S.style && P.attr("style", S.style), S.weeks && P.addClass("xdsoft_showweeks"), P.addClass("xdsoft_" + S.theme), P.addClass(S.className), J.find(".xdsoft_month span").after(L), J.find(".xdsoft_year span").after(B), J.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft", function (t) {
        var a,
            n,
            r = e(this).find(".xdsoft_select").eq(0),
            o = 0,
            s = 0,
            i = r.is(":visible");

        for (J.find(".xdsoft_select").hide(), Y.currentTime && (o = Y.currentTime[e(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), r[i ? "hide" : "show"](), a = r.find("div.xdsoft_option"), n = 0; n < a.length && a.eq(n).data("value") !== o; n += 1) {
          s += a[0].offsetHeight;
        }

        return r.xdsoftScroller(s / (r.children()[0].offsetHeight - r[0].clientHeight)), t.stopPropagation(), !1;
      }), J.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft", function (e) {
        e.stopPropagation(), e.preventDefault();
      }).on("mousedown.xdsoft", ".xdsoft_option", function () {
        (void 0 === Y.currentTime || null === Y.currentTime) && (Y.currentTime = Y.now());
        var t = Y.currentTime.getFullYear();
        Y && Y.currentTime && Y.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](e(this).data("value")), e(this).parent().parent().hide(), P.trigger("xchange.xdsoft"), S.onChangeMonth && e.isFunction(S.onChangeMonth) && S.onChangeMonth.call(P, Y.currentTime, P.data("input")), t !== Y.currentTime.getFullYear() && e.isFunction(S.onChangeYear) && S.onChangeYear.call(P, Y.currentTime, P.data("input"));
      }), P.setOptions = function (a) {
        var n = {},
            r = function r(e) {
          try {
            if (document.selection && document.selection.createRange) {
              var t = document.selection.createRange();
              return t.getBookmark().charCodeAt(2) - 2;
            }

            if (e.setSelectionRange) return e.selectionStart;
          } catch (a) {
            return 0;
          }
        },
            O = function O(e, t) {
          if (e = "string" == typeof e || e instanceof String ? document.getElementById(e) : e, !e) return !1;

          if (e.createTextRange) {
            var a = e.createTextRange();
            return a.collapse(!0), a.moveEnd("character", t), a.moveStart("character", t), a.select(), !0;
          }

          return e.setSelectionRange ? (e.setSelectionRange(t, t), !0) : !1;
        },
            _ = function _(e, t) {
          var a = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
          return new RegExp(a).test(t);
        };

        S = e.extend(!0, {}, S, a), a.allowTimes && e.isArray(a.allowTimes) && a.allowTimes.length && (S.allowTimes = e.extend(!0, [], a.allowTimes)), a.weekends && e.isArray(a.weekends) && a.weekends.length && (S.weekends = e.extend(!0, [], a.weekends)), a.highlightedDates && e.isArray(a.highlightedDates) && a.highlightedDates.length && (e.each(a.highlightedDates, function (t, a) {
          var r,
              o = e.map(a.split(","), e.trim),
              s = new HighlightedDate(Date.parseDate(o[0], S.formatDate), o[1], o[2]),
              i = s.date.dateFormat(S.formatDate);
          void 0 !== n[i] ? (r = n[i].desc, r && r.length && s.desc && s.desc.length && (n[i].desc = r + "\n" + s.desc)) : n[i] = s;
        }), S.highlightedDates = e.extend(!0, [], n)), a.highlightedPeriods && e.isArray(a.highlightedPeriods) && a.highlightedPeriods.length && (n = e.extend(!0, [], S.highlightedDates), e.each(a.highlightedPeriods, function (t, a) {
          for (var r, o, s, i = e.map(a.split(","), e.trim), u = Date.parseDate(i[0], S.formatDate), d = Date.parseDate(i[1], S.formatDate), l = i[2], c = i[3]; d >= u;) {
            r = new HighlightedDate(u, l, c), o = u.dateFormat(S.formatDate), u.setDate(u.getDate() + 1), void 0 !== n[o] ? (s = n[o].desc, s && s.length && r.desc && r.desc.length && (n[o].desc = s + "\n" + r.desc)) : n[o] = r;
          }
        }), S.highlightedDates = e.extend(!0, [], n)), a.disabledDates && e.isArray(a.disabledDates) && a.disabledDates.length && (S.disabledDates = e.extend(!0, [], a.disabledDates)), !S.open && !S.opened || S.inline || t.trigger("open.xdsoft"), S.inline && (R = !0, P.addClass("xdsoft_inline"), t.after(P).hide()), S.inverseButton && (S.next = "xdsoft_prev", S.prev = "xdsoft_next"), S.datepicker ? C.addClass("active") : C.removeClass("active"), S.timepicker ? I.addClass("active") : I.removeClass("active"), S.value && (Y.setCurrentTime(S.value), t && t.val && t.val(Y.str)), S.dayOfWeekStart = isNaN(S.dayOfWeekStart) ? 0 : parseInt(S.dayOfWeekStart, 10) % 7, S.timepickerScrollbar || N.xdsoftScroller("hide"), S.minDate && /^-(.*)$/.test(S.minDate) && (S.minDate = Y.strToDateTime(S.minDate).dateFormat(S.formatDate)), S.maxDate && /^\+(.*)$/.test(S.maxDate) && (S.maxDate = Y.strToDateTime(S.maxDate).dateFormat(S.formatDate)), j.toggle(S.showApplyButton), J.find(".xdsoft_today_button").css("visibility", S.todayButton ? "visible" : "hidden"), J.find("." + S.prev).css("visibility", S.prevButton ? "visible" : "hidden"), J.find("." + S.next).css("visibility", S.nextButton ? "visible" : "hidden"), S.mask && (t.off("keydown.xdsoft"), S.mask === !0 && (S.mask = S.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), "string" === e.type(S.mask) && (_(S.mask, t.val()) || t.val(S.mask.replace(/[0-9]/g, "_")), t.on("keydown.xdsoft", function (a) {
          var n,
              F,
              A = this.value,
              Y = a.which;

          if (Y >= o && s >= Y || Y >= i && u >= Y || Y === m || Y === l) {
            for (n = r(this), F = Y !== m && Y !== l ? String.fromCharCode(Y >= i && u >= Y ? Y - o : Y) : "_", Y !== m && Y !== l || !n || (n -= 1, F = "_"); /[^0-9_]/.test(S.mask.substr(n, 1)) && n < S.mask.length && n > 0;) {
              n += Y === m || Y === l ? -1 : 1;
            }

            if (A = A.substr(0, n) + F + A.substr(n + 1), "" === e.trim(A)) A = S.mask.replace(/[0-9]/g, "_");else if (n === S.mask.length) return a.preventDefault(), !1;

            for (n += Y === m || Y === l ? 0 : 1; /[^0-9_]/.test(S.mask.substr(n, 1)) && n < S.mask.length && n > 0;) {
              n += Y === m || Y === l ? -1 : 1;
            }

            _(S.mask, A) ? (this.value = A, O(this, n)) : "" === e.trim(A) ? this.value = S.mask.replace(/[0-9]/g, "_") : t.trigger("error_input.xdsoft");
          } else if (-1 !== [y, b, T, k, w].indexOf(Y) && M || -1 !== [f, g, D, h, p, v, d, x, c].indexOf(Y)) return !0;

          return a.preventDefault(), !1;
        }))), S.validateOnBlur && t.off("blur.xdsoft").on("blur.xdsoft", function () {
          if (S.allowBlank && !e.trim(e(this).val()).length) e(this).val(null), P.data("xdsoft_datetime").empty();else if (Date.parseDate(e(this).val(), S.format)) P.data("xdsoft_datetime").setCurrentTime(e(this).val());else {
            var t = +[e(this).val()[0], e(this).val()[1]].join(""),
                a = +[e(this).val()[2], e(this).val()[3]].join("");
            e(this).val(!S.datepicker && S.timepicker && t >= 0 && 24 > t && a >= 0 && 60 > a ? [t, a].map(function (e) {
              return e > 9 ? e : "0" + e;
            }).join(":") : Y.now().dateFormat(S.format)), P.data("xdsoft_datetime").setCurrentTime(e(this).val());
          }
          P.trigger("changedatetime.xdsoft");
        }), S.dayOfWeekStartPrev = 0 === S.dayOfWeekStart ? 6 : S.dayOfWeekStart - 1, P.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft");
      }, P.data("options", S).on("mousedown.xdsoft", function (e) {
        return e.stopPropagation(), e.preventDefault(), B.hide(), L.hide(), !1;
      }), N.append(z), N.xdsoftScroller(), P.on("afterOpen.xdsoft", function () {
        N.xdsoftScroller();
      }), P.append(C).append(I), S.withoutCopyright !== !0 && P.append(W), C.append(J).append(H).append(j), e(S.parentID).append(P), r = function r() {
        var t = this;
        t.now = function (e) {
          var a,
              n,
              r = new Date();
          return !e && S.defaultDate && (a = t.strToDateTime(S.defaultDate), r.setFullYear(a.getFullYear()), r.setMonth(a.getMonth()), r.setDate(a.getDate())), S.yearOffset && r.setFullYear(r.getFullYear() + S.yearOffset), !e && S.defaultTime && (n = t.strtotime(S.defaultTime), r.setHours(n.getHours()), r.setMinutes(n.getMinutes())), r;
        }, t.isValidDate = function (e) {
          return "[object Date]" !== Object.prototype.toString.call(e) ? !1 : !isNaN(e.getTime());
        }, t.setCurrentTime = function (e) {
          t.currentTime = "string" == typeof e ? t.strToDateTime(e) : t.isValidDate(e) ? e : t.now(), P.trigger("xchange.xdsoft");
        }, t.empty = function () {
          t.currentTime = null;
        }, t.getCurrentTime = function () {
          return t.currentTime;
        }, t.nextMonth = function () {
          (void 0 === t.currentTime || null === t.currentTime) && (t.currentTime = t.now());
          var a,
              n = t.currentTime.getMonth() + 1;
          return 12 === n && (t.currentTime.setFullYear(t.currentTime.getFullYear() + 1), n = 0), a = t.currentTime.getFullYear(), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), n + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(n), S.onChangeMonth && e.isFunction(S.onChangeMonth) && S.onChangeMonth.call(P, Y.currentTime, P.data("input")), a !== t.currentTime.getFullYear() && e.isFunction(S.onChangeYear) && S.onChangeYear.call(P, Y.currentTime, P.data("input")), P.trigger("xchange.xdsoft"), n;
        }, t.prevMonth = function () {
          (void 0 === t.currentTime || null === t.currentTime) && (t.currentTime = t.now());
          var a = t.currentTime.getMonth() - 1;
          return -1 === a && (t.currentTime.setFullYear(t.currentTime.getFullYear() - 1), a = 11), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), a + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(a), S.onChangeMonth && e.isFunction(S.onChangeMonth) && S.onChangeMonth.call(P, Y.currentTime, P.data("input")), P.trigger("xchange.xdsoft"), a;
        }, t.getWeekOfYear = function (e) {
          var t = new Date(e.getFullYear(), 0, 1);
          return Math.ceil(((e - t) / 864e5 + t.getDay() + 1) / 7);
        }, t.strToDateTime = function (e) {
          var a,
              n,
              r = [];
          return e && e instanceof Date && t.isValidDate(e) ? e : (r = /^(\+|\-)(.*)$/.exec(e), r && (r[2] = Date.parseDate(r[2], S.formatDate)), r && r[2] ? (a = r[2].getTime() - 6e4 * r[2].getTimezoneOffset(), n = new Date(t.now(!0).getTime() + parseInt(r[1] + "1", 10) * a)) : n = e ? Date.parseDate(e, S.format) : t.now(), t.isValidDate(n) || (n = t.now()), n);
        }, t.strToDate = function (e) {
          if (e && e instanceof Date && t.isValidDate(e)) return e;
          var a = e ? Date.parseDate(e, S.formatDate) : t.now(!0);
          return t.isValidDate(a) || (a = t.now(!0)), a;
        }, t.strtotime = function (e) {
          if (e && e instanceof Date && t.isValidDate(e)) return e;
          var a = e ? Date.parseDate(e, S.formatTime) : t.now(!0);
          return t.isValidDate(a) || (a = t.now(!0)), a;
        }, t.str = function () {
          return t.currentTime.dateFormat(S.format);
        }, t.currentTime = this.now();
      }, Y = new r(), j.on("click", function (e) {
        e.preventDefault(), P.data("changed", !0), Y.setCurrentTime(n()), t.val(Y.str()), P.trigger("close.xdsoft");
      }), J.find(".xdsoft_today_button").on("mousedown.xdsoft", function () {
        P.data("changed", !0), Y.setCurrentTime(0), P.trigger("afterOpen.xdsoft");
      }).on("dblclick.xdsoft", function () {
        var e = Y.getCurrentTime();
        e = new Date(e.getFullYear(), e.getMonth(), e.getDate());
        var a = Y.strToDate(S.minDate);

        if (a = new Date(a.getFullYear(), a.getMonth(), a.getDate()), !(a > e)) {
          var n = Y.strToDate(S.maxDate);
          n = new Date(n.getFullYear(), n.getMonth(), n.getDate()), e > n || (t.val(Y.str()), P.trigger("close.xdsoft"));
        }
      }), J.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft", function () {
        var t = e(this),
            a = 0,
            n = !1;
        !function r(e) {
          t.hasClass(S.next) ? Y.nextMonth() : t.hasClass(S.prev) && Y.prevMonth(), S.monthChangeSpinner && (n || (a = setTimeout(r, e || 100)));
        }(500), e([document.body, window]).on("mouseup.xdsoft", function o() {
          clearTimeout(a), n = !0, e([document.body, window]).off("mouseup.xdsoft", o);
        });
      }), I.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft", function () {
        var t = e(this),
            a = 0,
            n = !1,
            r = 110;
        !function o(e) {
          var s = N[0].clientHeight,
              i = z[0].offsetHeight,
              u = Math.abs(parseInt(z.css("marginTop"), 10));
          t.hasClass(S.next) && i - s - S.timeHeightInTimePicker >= u ? z.css("marginTop", "-" + (u + S.timeHeightInTimePicker) + "px") : t.hasClass(S.prev) && u - S.timeHeightInTimePicker >= 0 && z.css("marginTop", "-" + (u - S.timeHeightInTimePicker) + "px"), N.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(z.css("marginTop"), 10) / (i - s))]), r = r > 10 ? 10 : r - 10, n || (a = setTimeout(o, e || r));
        }(500), e([document.body, window]).on("mouseup.xdsoft", function s() {
          clearTimeout(a), n = !0, e([document.body, window]).off("mouseup.xdsoft", s);
        });
      }), O = 0, P.on("xchange.xdsoft", function (t) {
        clearTimeout(O), O = setTimeout(function () {
          (void 0 === Y.currentTime || null === Y.currentTime) && (Y.currentTime = Y.now());

          for (var t, n, r, o, s, i, u, d, l, c = "", f = new Date(Y.currentTime.getFullYear(), Y.currentTime.getMonth(), 1, 12, 0, 0), m = 0, h = Y.now(), g = !1, p = !1, D = [], x = !0, v = "", y = ""; f.getDay() !== S.dayOfWeekStart;) {
            f.setDate(f.getDate() - 1);
          }

          for (c += "<table><thead><tr>", S.weeks && (c += "<th></th>"), t = 0; 7 > t; t += 1) {
            c += "<th>" + S.i18n[S.lang].dayOfWeek[(t + S.dayOfWeekStart) % 7] + "</th>";
          }

          for (c += "</tr></thead>", c += "<tbody>", S.maxDate !== !1 && (g = Y.strToDate(S.maxDate), g = new Date(g.getFullYear(), g.getMonth(), g.getDate(), 23, 59, 59, 999)), S.minDate !== !1 && (p = Y.strToDate(S.minDate), p = new Date(p.getFullYear(), p.getMonth(), p.getDate())); m < Y.currentTime.countDaysInMonth() || f.getDay() !== S.dayOfWeekStart || Y.currentTime.getMonth() === f.getMonth();) {
            D = [], m += 1, r = f.getDate(), o = f.getFullYear(), s = f.getMonth(), i = Y.getWeekOfYear(f), l = "", D.push("xdsoft_date"), u = S.beforeShowDay && e.isFunction(S.beforeShowDay.call) ? S.beforeShowDay.call(P, f) : null, g !== !1 && f > g || p !== !1 && p > f || u && u[0] === !1 ? D.push("xdsoft_disabled") : -1 !== S.disabledDates.indexOf(f.dateFormat(S.formatDate)) && D.push("xdsoft_disabled"), u && "" !== u[1] && D.push(u[1]), Y.currentTime.getMonth() !== s && D.push("xdsoft_other_month"), (S.defaultSelect || P.data("changed")) && Y.currentTime.dateFormat(S.formatDate) === f.dateFormat(S.formatDate) && D.push("xdsoft_current"), h.dateFormat(S.formatDate) === f.dateFormat(S.formatDate) && D.push("xdsoft_today"), (0 === f.getDay() || 6 === f.getDay() || -1 !== S.weekends.indexOf(f.dateFormat(S.formatDate))) && D.push("xdsoft_weekend"), void 0 !== S.highlightedDates[f.dateFormat(S.formatDate)] && (n = S.highlightedDates[f.dateFormat(S.formatDate)], D.push(void 0 === n.style ? "xdsoft_highlighted_default" : n.style), l = void 0 === n.desc ? "" : n.desc), S.beforeShowDay && e.isFunction(S.beforeShowDay) && D.push(S.beforeShowDay(f)), x && (c += "<tr>", x = !1, S.weeks && (c += "<th>" + i + "</th>")), c += '<td data-date="' + r + '" data-month="' + s + '" data-year="' + o + '" class="xdsoft_date xdsoft_day_of_week' + f.getDay() + " " + D.join(" ") + '" title="' + l + '"><div>' + r + "</div></td>", f.getDay() === S.dayOfWeekStartPrev && (c += "</tr>", x = !0), f.setDate(r + 1);
          }

          if (c += "</tbody></table>", H.html(c), J.find(".xdsoft_label span").eq(0).text(S.i18n[S.lang].months[Y.currentTime.getMonth()]), J.find(".xdsoft_label span").eq(1).text(Y.currentTime.getFullYear()), v = "", y = "", s = "", d = function d(e, t) {
            var a,
                n,
                r = Y.now();
            r.setHours(e), e = parseInt(r.getHours(), 10), r.setMinutes(t), t = parseInt(r.getMinutes(), 10), a = new Date(Y.currentTime), a.setHours(e), a.setMinutes(t), D = [], (S.minDateTime !== !1 && S.minDateTime > a || S.maxTime !== !1 && Y.strtotime(S.maxTime).getTime() < r.getTime() || S.minTime !== !1 && Y.strtotime(S.minTime).getTime() > r.getTime()) && D.push("xdsoft_disabled"), n = new Date(Y.currentTime), n.setHours(parseInt(Y.currentTime.getHours(), 10)), n.setMinutes(Math[S.roundTime](Y.currentTime.getMinutes() / S.step) * S.step), (S.initTime || S.defaultSelect || P.data("changed")) && n.getHours() === parseInt(e, 10) && (S.step > 59 || n.getMinutes() === parseInt(t, 10)) && (S.defaultSelect || P.data("changed") ? D.push("xdsoft_current") : S.initTime && D.push("xdsoft_init_time")), parseInt(h.getHours(), 10) === parseInt(e, 10) && parseInt(h.getMinutes(), 10) === parseInt(t, 10) && D.push("xdsoft_today"), v += '<div class="xdsoft_time ' + D.join(" ") + '" data-hour="' + e + '" data-minute="' + t + '">' + r.dateFormat(S.formatTime) + "</div>";
          }, S.allowTimes && e.isArray(S.allowTimes) && S.allowTimes.length) for (m = 0; m < S.allowTimes.length; m += 1) {
            y = Y.strtotime(S.allowTimes[m]).getHours(), s = Y.strtotime(S.allowTimes[m]).getMinutes(), d(y, s);
          } else for (m = 0, t = 0; m < (S.hours12 ? 12 : 24); m += 1) {
            for (t = 0; 60 > t; t += S.step) {
              y = (10 > m ? "0" : "") + m, s = (10 > t ? "0" : "") + t, d(y, s);
            }
          }

          for (z.html(v), a = "", m = 0, m = parseInt(S.yearStart, 10) + S.yearOffset; m <= parseInt(S.yearEnd, 10) + S.yearOffset; m += 1) {
            a += '<div class="xdsoft_option ' + (Y.currentTime.getFullYear() === m ? "xdsoft_current" : "") + '" data-value="' + m + '">' + m + "</div>";
          }

          for (B.children().eq(0).html(a), m = parseInt(S.monthStart, 10), a = ""; m <= parseInt(S.monthEnd, 10); m += 1) {
            a += '<div class="xdsoft_option ' + (Y.currentTime.getMonth() === m ? "xdsoft_current" : "") + '" data-value="' + m + '">' + S.i18n[S.lang].months[m] + "</div>";
          }

          L.children().eq(0).html(a), e(P).trigger("generate.xdsoft");
        }, 10), t.stopPropagation();
      }).on("afterOpen.xdsoft", function () {
        if (S.timepicker) {
          var e, t, a, n;
          z.find(".xdsoft_current").length ? e = ".xdsoft_current" : z.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"), e ? (t = N[0].clientHeight, a = z[0].offsetHeight, n = z.find(e).index() * S.timeHeightInTimePicker + 1, n > a - t && (n = a - t), N.trigger("scroll_element.xdsoft_scroller", [parseInt(n, 10) / (a - t)])) : N.trigger("scroll_element.xdsoft_scroller", [0]);
        }
      }), _ = 0, H.on("click.xdsoft", "td", function (a) {
        a.stopPropagation(), _ += 1;
        var n = e(this),
            r = Y.currentTime;
        return (void 0 === r || null === r) && (Y.currentTime = Y.now(), r = Y.currentTime), n.hasClass("xdsoft_disabled") ? !1 : (r.setDate(1), r.setFullYear(n.data("year")), r.setMonth(n.data("month")), r.setDate(n.data("date")), P.trigger("select.xdsoft", [r]), t.val(Y.str()), (_ > 1 || S.closeOnDateSelect === !0 || 0 === S.closeOnDateSelect && !S.timepicker) && !S.inline && P.trigger("close.xdsoft"), S.onSelectDate && e.isFunction(S.onSelectDate) && S.onSelectDate.call(P, Y.currentTime, P.data("input"), a), P.data("changed", !0), P.trigger("xchange.xdsoft"), P.trigger("changedatetime.xdsoft"), void setTimeout(function () {
          _ = 0;
        }, 200));
      }), z.on("click.xdsoft", "div", function (t) {
        t.stopPropagation();
        var a = e(this),
            n = Y.currentTime;
        return (void 0 === n || null === n) && (Y.currentTime = Y.now(), n = Y.currentTime), a.hasClass("xdsoft_disabled") ? !1 : (n.setHours(a.data("hour")), n.setMinutes(a.data("minute")), P.trigger("select.xdsoft", [n]), P.data("input").val(Y.str()), S.inline !== !0 && S.closeOnTimeSelect === !0 && P.trigger("close.xdsoft"), S.onSelectTime && e.isFunction(S.onSelectTime) && S.onSelectTime.call(P, Y.currentTime, P.data("input"), t), P.data("changed", !0), P.trigger("xchange.xdsoft"), void P.trigger("changedatetime.xdsoft"));
      }), C.on("mousewheel.xdsoft", function (e) {
        return S.scrollMonth ? (e.deltaY < 0 ? Y.nextMonth() : Y.prevMonth(), !1) : !0;
      }), t.on("mousewheel.xdsoft", function (e) {
        return S.scrollInput ? !S.datepicker && S.timepicker ? (F = z.find(".xdsoft_current").length ? z.find(".xdsoft_current").eq(0).index() : 0, F + e.deltaY >= 0 && F + e.deltaY < z.children().length && (F += e.deltaY), z.children().eq(F).length && z.children().eq(F).trigger("mousedown"), !1) : S.datepicker && !S.timepicker ? (C.trigger(e, [e.deltaY, e.deltaX, e.deltaY]), t.val && t.val(Y.str()), P.trigger("changedatetime.xdsoft"), !1) : void 0 : !0;
      }), P.on("changedatetime.xdsoft", function (t) {
        if (S.onChangeDateTime && e.isFunction(S.onChangeDateTime)) {
          var a = P.data("input");
          S.onChangeDateTime.call(P, Y.currentTime, a, t), delete S.value, a.trigger("change");
        }
      }).on("generate.xdsoft", function () {
        S.onGenerate && e.isFunction(S.onGenerate) && S.onGenerate.call(P, Y.currentTime, P.data("input")), R && (P.trigger("afterOpen.xdsoft"), R = !1);
      }).on("click.xdsoft", function (e) {
        e.stopPropagation();
      }), F = 0, A = function A() {
        var t = P.data("input").offset(),
            a = t.top + P.data("input")[0].offsetHeight - 1,
            n = t.left,
            r = "absolute";
        S.fixed ? (a -= e(window).scrollTop(), n -= e(window).scrollLeft(), r = "fixed") : (a + P[0].offsetHeight > e(window).height() + e(window).scrollTop() && (a = t.top - P[0].offsetHeight + 1), 0 > a && (a = 0), n + P[0].offsetWidth > e(window).width() && (n = e(window).width() - P[0].offsetWidth)), P.css({
          left: n,
          top: a,
          position: r
        });
      }, P.on("open.xdsoft", function (t) {
        var a = !0;
        S.onShow && e.isFunction(S.onShow) && (a = S.onShow.call(P, Y.currentTime, P.data("input"), t)), a !== !1 && (P.show(), A(), e(window).off("resize.xdsoft", A).on("resize.xdsoft", A), S.closeOnWithoutClick && e([document.body, window]).on("mousedown.xdsoft", function n() {
          P.trigger("close.xdsoft"), e([document.body, window]).off("mousedown.xdsoft", n);
        }));
      }).on("close.xdsoft", function (t) {
        var a = !0;
        J.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), S.onClose && e.isFunction(S.onClose) && (a = S.onClose.call(P, Y.currentTime, P.data("input"), t)), a === !1 || S.opened || S.inline || P.hide(), t.stopPropagation();
      }).on("toggle.xdsoft", function () {
        P.trigger(P.is(":visible") ? "close.xdsoft" : "open.xdsoft");
      }).data("input", t), E = 0, V = 0, P.data("xdsoft_datetime", Y), P.setOptions(S), Y.setCurrentTime(n()), t.data("xdsoft_datetimepicker", P).on("open.xdsoft focusin.xdsoft mousedown.xdsoft", function () {
        t.is(":disabled") || t.data("xdsoft_datetimepicker").is(":visible") && S.closeOnInputClick || (clearTimeout(E), E = setTimeout(function () {
          t.is(":disabled") || (R = !0, Y.setCurrentTime(n()), P.trigger("open.xdsoft"));
        }, 100));
      }).on("keydown.xdsoft", function (t) {
        var a,
            n = (this.value, t.which);
        return -1 !== [c].indexOf(n) && S.enterLikeTab ? (a = e("input:visible,textarea:visible"), P.trigger("close.xdsoft"), a.eq(a.index(this) + 1).focus(), !1) : -1 !== [x].indexOf(n) ? (P.trigger("close.xdsoft"), !0) : void 0;
      });
    }, r = function r(t) {
      var a = t.data("xdsoft_datetimepicker");
      a && (a.data("xdsoft_datetime", null), a.remove(), t.data("xdsoft_datetimepicker", null).off(".xdsoft"), e(window).off("resize.xdsoft"), e([window, document.body]).off("mousedown.xdsoft"), t.unmousewheel && t.unmousewheel());
    }, e(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function (e) {
      e.keyCode === d && (M = !0);
    }).on("keyup.xdsoftctrl", function (e) {
      e.keyCode === d && (M = !1);
    }), this.each(function () {
      var t,
          o = e(this).data("xdsoft_datetimepicker");

      if (o) {
        if ("string" === e.type(a)) switch (a) {
          case "show":
            e(this).select().focus(), o.trigger("open.xdsoft");
            break;

          case "hide":
            o.trigger("close.xdsoft");
            break;

          case "toggle":
            o.trigger("toggle.xdsoft");
            break;

          case "destroy":
            r(e(this));
            break;

          case "reset":
            this.value = this.defaultValue, this.value && o.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value, S.format)) || o.data("changed", !1), o.data("xdsoft_datetime").setCurrentTime(this.value);
            break;

          case "validate":
            t = o.data("input"), t.trigger("blur.xdsoft");
        } else o.setOptions(a);
        return 0;
      }

      "string" !== e.type(a) && (!S.lazyInit || S.open || S.inline ? n(e(this)) : _(e(this)));
    });
  }, e.fn.datetimepicker.defaults = t;
}(jQuery), function () {
  !function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e : e(jQuery);
  }(function (e) {
    function t(t) {
      var s = t || window.event,
          i = u.call(arguments, 1),
          d = 0,
          c = 0,
          f = 0,
          m = 0,
          h = 0,
          g = 0;

      if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (f = -1 * s.detail), "wheelDelta" in s && (f = s.wheelDelta), "wheelDeltaY" in s && (f = s.wheelDeltaY), "wheelDeltaX" in s && (c = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (c = -1 * f, f = 0), d = 0 === f ? c : f, "deltaY" in s && (f = -1 * s.deltaY, d = f), "deltaX" in s && (c = s.deltaX, 0 === f && (d = -1 * c)), 0 !== f || 0 !== c) {
        if (1 === s.deltaMode) {
          var p = e.data(this, "mousewheel-line-height");
          d *= p, f *= p, c *= p;
        } else if (2 === s.deltaMode) {
          var D = e.data(this, "mousewheel-page-height");
          d *= D, f *= D, c *= D;
        }

        if (m = Math.max(Math.abs(f), Math.abs(c)), (!o || o > m) && (o = m, n(s, m) && (o /= 40)), n(s, m) && (d /= 40, c /= 40, f /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / o), c = Math[c >= 1 ? "floor" : "ceil"](c / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), l.settings.normalizeOffset && this.getBoundingClientRect) {
          var x = this.getBoundingClientRect();
          h = t.clientX - x.left, g = t.clientY - x.top;
        }

        return t.deltaX = c, t.deltaY = f, t.deltaFactor = o, t.offsetX = h, t.offsetY = g, t.deltaMode = 0, i.unshift(t, d, c, f), r && clearTimeout(r), r = setTimeout(a, 200), (e.event.dispatch || e.event.handle).apply(this, i);
      }
    }

    function a() {
      o = null;
    }

    function n(e, t) {
      return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0;
    }

    var r,
        o,
        s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        u = Array.prototype.slice;
    if (e.event.fixHooks) for (var d = s.length; d;) {
      e.event.fixHooks[s[--d]] = e.event.mouseHooks;
    }
    var l = e.event.special.mousewheel = {
      version: "3.1.12",
      setup: function setup() {
        if (this.addEventListener) for (var a = i.length; a;) {
          this.addEventListener(i[--a], t, !1);
        } else this.onmousewheel = t;
        e.data(this, "mousewheel-line-height", l.getLineHeight(this)), e.data(this, "mousewheel-page-height", l.getPageHeight(this));
      },
      teardown: function teardown() {
        if (this.removeEventListener) for (var a = i.length; a;) {
          this.removeEventListener(i[--a], t, !1);
        } else this.onmousewheel = null;
        e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function getLineHeight(t) {
        var a = e(t),
            n = a["offsetParent" in e.fn ? "offsetParent" : "parent"]();
        return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(a.css("fontSize"), 10) || 16;
      },
      getPageHeight: function getPageHeight(t) {
        return e(t).height();
      },
      settings: {
        adjustOldDeltas: !0,
        normalizeOffset: !0
      }
    };
    e.fn.extend({
      mousewheel: function mousewheel(e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
      },
      unmousewheel: function unmousewheel(e) {
        return this.unbind("mousewheel", e);
      }
    });
  }), Date.parseFunctions = {
    count: 0
  }, Date.parseRegexes = [], Date.formatFunctions = {
    count: 0
  }, Date.prototype.dateFormat = function (e) {
    if ("unixtime" == e) return parseInt(this.getTime() / 1e3);
    null == Date.formatFunctions[e] && Date.createNewFormat(e);
    var t = Date.formatFunctions[e];
    return this[t]();
  }, Date.createNewFormat = function (format) {
    var funcName = "format" + Date.formatFunctions.count++;
    Date.formatFunctions[format] = funcName;

    for (var codePrefix = "Date.prototype." + funcName + " = function() {return ", code = "", special = !1, ch = "", i = 0; i < format.length; ++i) {
      ch = format.charAt(i), special || "\\" != ch ? special ? (special = !1, code += "'" + String.escape(ch) + "' + ") : code += Date.getFormatCode(ch) : special = !0;
    }

    code = 0 == code.length ? '""' : code.substring(0, code.length - 3), eval(codePrefix + code + ";}");
  }, Date.getFormatCode = function (e) {
    switch (e) {
      case "d":
        return "String.leftPad(this.getDate(), 2, '0') + ";

      case "D":
        return "Date.dayNames[this.getDay()].substring(0, 3) + ";

      case "j":
        return "this.getDate() + ";

      case "l":
        return "Date.dayNames[this.getDay()] + ";

      case "S":
        return "this.getSuffix() + ";

      case "w":
        return "this.getDay() + ";

      case "z":
        return "this.getDayOfYear() + ";

      case "W":
        return "this.getWeekOfYear() + ";

      case "F":
        return "Date.monthNames[this.getMonth()] + ";

      case "m":
        return "String.leftPad(this.getMonth() + 1, 2, '0') + ";

      case "M":
        return "Date.monthNames[this.getMonth()].substring(0, 3) + ";

      case "n":
        return "(this.getMonth() + 1) + ";

      case "t":
        return "this.getDaysInMonth() + ";

      case "L":
        return "(this.isLeapYear() ? 1 : 0) + ";

      case "Y":
        return "this.getFullYear() + ";

      case "y":
        return "('' + this.getFullYear()).substring(2, 4) + ";

      case "a":
        return "(this.getHours() < 12 ? 'am' : 'pm') + ";

      case "A":
        return "(this.getHours() < 12 ? 'AM' : 'PM') + ";

      case "g":
        return "((this.getHours() %12) ? this.getHours() % 12 : 12) + ";

      case "G":
        return "this.getHours() + ";

      case "h":
        return "String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";

      case "H":
        return "String.leftPad(this.getHours(), 2, '0') + ";

      case "i":
        return "String.leftPad(this.getMinutes(), 2, '0') + ";

      case "s":
        return "String.leftPad(this.getSeconds(), 2, '0') + ";

      case "O":
        return "this.getGMTOffset() + ";

      case "T":
        return "this.getTimezone() + ";

      case "Z":
        return "(this.getTimezoneOffset() * -60) + ";

      default:
        return "'" + String.escape(e) + "' + ";
    }
  }, Date.parseDate = function (e, t) {
    if ("unixtime" == t) return new Date(isNaN(parseInt(e)) ? 0 : 1e3 * parseInt(e));
    null == Date.parseFunctions[t] && Date.createParser(t);
    var a = Date.parseFunctions[t];
    return Date[a](e);
  }, Date.createParser = function (format) {
    var funcName = "parse" + Date.parseFunctions.count++,
        regexNum = Date.parseRegexes.length,
        currentGroup = 1;
    Date.parseFunctions[format] = funcName;

    for (var code = "Date." + funcName + " = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes[" + regexNum + "]);\nif (results && results.length > 0) {", regex = "", special = !1, ch = "", i = 0; i < format.length; ++i) {
      ch = format.charAt(i), special || "\\" != ch ? special ? (special = !1, regex += String.escape(ch)) : (obj = Date.formatCodeToRegex(ch, currentGroup), currentGroup += obj.g, regex += obj.s, obj.g && obj.c && (code += obj.c)) : special = !0;
    }

    code += "if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}", code += "if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}", Date.parseRegexes[regexNum] = new RegExp("^" + regex + "$", "i"), eval(code);
  }, Date.formatCodeToRegex = function (e, t) {
    switch (e) {
      case "D":
        return {
          g: 0,
          c: null,
          s: "(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"
        };

      case "j":
      case "d":
        return {
          g: 1,
          c: "d = parseInt(results[" + t + "], 10);\n",
          s: "(\\d{1,2})"
        };

      case "l":
        return {
          g: 0,
          c: null,
          s: "(?:" + Date.dayNames.join("|") + ")"
        };

      case "S":
        return {
          g: 0,
          c: null,
          s: "(?:st|nd|rd|th)"
        };

      case "w":
        return {
          g: 0,
          c: null,
          s: "\\d"
        };

      case "z":
        return {
          g: 1,
          c: "z = parseInt(results[" + t + "], 10);\n",
          s: "(\\d{1,3})"
        };

      case "W":
        return {
          g: 0,
          c: null,
          s: "(?:\\d{2})"
        };

      case "F":
        return {
          g: 1,
          c: "m = parseInt(Date.monthNumbers[results[" + t + "].substring(0, 3)], 10);\n",
          s: "(" + Date.monthNames.join("|") + ")"
        };

      case "M":
        return {
          g: 1,
          c: "m = parseInt(Date.monthNumbers[results[" + t + "]], 10);\n",
          s: "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"
        };

      case "n":
      case "m":
        return {
          g: 1,
          c: "m = parseInt(results[" + t + "], 10) - 1;\n",
          s: "(\\d{1,2})"
        };

      case "t":
        return {
          g: 0,
          c: null,
          s: "\\d{1,2}"
        };

      case "L":
        return {
          g: 0,
          c: null,
          s: "(?:1|0)"
        };

      case "Y":
        return {
          g: 1,
          c: "y = parseInt(results[" + t + "], 10);\n",
          s: "(\\d{4})"
        };

      case "y":
        return {
          g: 1,
          c: "var ty = parseInt(results[" + t + "], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
          s: "(\\d{1,2})"
        };

      case "a":
        return {
          g: 1,
          c: "if (results[" + t + "] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",
          s: "(am|pm)"
        };

      case "A":
        return {
          g: 1,
          c: "if (results[" + t + "] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",
          s: "(AM|PM)"
        };

      case "g":
      case "G":
      case "h":
      case "H":
        return {
          g: 1,
          c: "h = parseInt(results[" + t + "], 10);\n",
          s: "(\\d{1,2})"
        };

      case "i":
        return {
          g: 1,
          c: "i = parseInt(results[" + t + "], 10);\n",
          s: "(\\d{2})"
        };

      case "s":
        return {
          g: 1,
          c: "s = parseInt(results[" + t + "], 10);\n",
          s: "(\\d{2})"
        };

      case "O":
        return {
          g: 0,
          c: null,
          s: "[+-]\\d{4}"
        };

      case "T":
        return {
          g: 0,
          c: null,
          s: "[A-Z]{3}"
        };

      case "Z":
        return {
          g: 0,
          c: null,
          s: "[+-]\\d{1,5}"
        };

      default:
        return {
          g: 0,
          c: null,
          s: String.escape(e)
        };
    }
  }, Date.prototype.getTimezone = function () {
    return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/, "$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3");
  }, Date.prototype.getGMTOffset = function () {
    return (this.getTimezoneOffset() > 0 ? "-" : "+") + String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset()) / 60), 2, "0") + String.leftPad(Math.abs(this.getTimezoneOffset()) % 60, 2, "0");
  }, Date.prototype.getDayOfYear = function () {
    var e = 0;
    Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;

    for (var t = 0; t < this.getMonth(); ++t) {
      e += Date.daysInMonth[t];
    }

    return e + this.getDate();
  }, Date.prototype.getWeekOfYear = function () {
    var e = this.getDayOfYear() + (4 - this.getDay()),
        t = new Date(this.getFullYear(), 0, 1),
        a = 7 - t.getDay() + 4;
    return String.leftPad(Math.ceil((e - a) / 7) + 1, 2, "0");
  }, Date.prototype.isLeapYear = function () {
    var e = this.getFullYear();
    return 0 == (3 & e) && (e % 100 || e % 400 == 0 && e);
  }, Date.prototype.getFirstDayOfMonth = function () {
    var e = (this.getDay() - (this.getDate() - 1)) % 7;
    return 0 > e ? e + 7 : e;
  }, Date.prototype.getLastDayOfMonth = function () {
    var e = (this.getDay() + (Date.daysInMonth[this.getMonth()] - this.getDate())) % 7;
    return 0 > e ? e + 7 : e;
  }, Date.prototype.getDaysInMonth = function () {
    return Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28, Date.daysInMonth[this.getMonth()];
  }, Date.prototype.getSuffix = function () {
    switch (this.getDate()) {
      case 1:
      case 21:
      case 31:
        return "st";

      case 2:
      case 22:
        return "nd";

      case 3:
      case 23:
        return "rd";

      default:
        return "th";
    }
  }, String.escape = function (e) {
    return e.replace(/('|\\)/g, "\\$1");
  }, String.leftPad = function (e, t, a) {
    var n = new String(e);

    for (null == a && (a = " "); n.length < t;) {
      n = a + n;
    }

    return n;
  }, Date.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Date.y2kYear = 50, Date.monthNumbers = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
  }, Date.patterns = {
    ISO8601LongPattern: "Y-m-d H:i:s",
    ISO8601ShortPattern: "Y-m-d",
    ShortDatePattern: "n/j/Y",
    LongDatePattern: "l, F d, Y",
    FullDateTimePattern: "l, F d, Y g:i:s A",
    MonthDayPattern: "F d",
    ShortTimePattern: "g:i A",
    LongTimePattern: "g:i:s A",
    SortableDateTimePattern: "Y-m-d\\TH:i:s",
    UniversalSortableDateTimePattern: "Y-m-d H:i:sO",
    YearMonthPattern: "F, Y"
  };
}();
},{}],"../../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64216" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/jquery-datetimepicker.js"], null)
//# sourceMappingURL=/jquery-datetimepicker.8e2fe74f.js.map