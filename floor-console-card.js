var FCC_FONT_LINK = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap">';
var FCC_SYS_FONTS = { "font-display": 'ui-sans-serif,system-ui,sans-serif', "font-body": 'ui-sans-serif,system-ui,sans-serif', "font-mono": 'ui-monospace,SFMono-Regular,Menlo,monospace' };
var FCC_THEMES = {
  walnut: { fonts: FCC_FONT_LINK, vars: { "bg": "#130d07", "surface": "#1d150c", "surface-2": "#271d12", "sheet-end": "#19120a", "line": "rgba(205,163,86,0.20)", "fg": "#f1e7d6", "fg-dim": "#a89a82", "accent": "#caa15a", "accent-strong": "#eec07c", "on": "#8ab98f", "info": "#8ca3b8", "alert": "#d97a55", "scrim": "rgba(6,4,2,0.6)", "font-display": '"Fraunces",ui-serif,Georgia,serif', "font-body": '"Manrope",ui-sans-serif,system-ui,sans-serif', "font-mono": '"JetBrains Mono",ui-monospace,monospace', "color-scheme": "dark" } },
  slate: { fonts: "", vars: Object.assign({ "bg": "#0f141a", "surface": "#161d26", "surface-2": "#1d2733", "sheet-end": "#121922", "line": "rgba(140,170,200,0.20)", "fg": "#e6edf5", "fg-dim": "#8c9bad", "accent": "#5aa9e6", "accent-strong": "#8cc8f5", "on": "#7fc99a", "info": "#8ca3b8", "alert": "#e0745a", "scrim": "rgba(3,6,10,0.6)", "color-scheme": "dark" }, FCC_SYS_FONTS) },
  light: { fonts: "", vars: Object.assign({ "bg": "#f4f1ec", "surface": "#ffffff", "surface-2": "#f7f4ef", "sheet-end": "#efebe4", "line": "rgba(60,50,30,0.18)", "fg": "#2a241a", "fg-dim": "#7a705f", "accent": "#a8741a", "accent-strong": "#8a5c0e", "on": "#3f8f55", "info": "#4f7191", "alert": "#c4552e", "scrim": "rgba(30,25,15,0.35)", "color-scheme": "light" }, FCC_SYS_FONTS) },
  auto: { fonts: "", vars: Object.assign({ "bg": "var(--primary-background-color,#111)", "surface": "var(--card-background-color,#1c1c1c)", "surface-2": "var(--secondary-background-color,#222)", "sheet-end": "var(--secondary-background-color,#222)", "line": "var(--divider-color,rgba(128,128,128,0.3))", "fg": "var(--primary-text-color,#eee)", "fg-dim": "var(--secondary-text-color,#999)", "accent": "var(--primary-color,#03a9f4)", "accent-strong": "var(--accent-color,#ff9800)", "on": "var(--success-color,#43a047)", "info": "var(--info-color,#039be5)", "alert": "var(--error-color,#db4437)", "scrim": "rgba(0,0,0,0.5)", "color-scheme": "light dark" }, FCC_SYS_FONTS) }
};

var FCC_I18N = {
  zh: {
    "bulbs": "{n} 盞",
    "single": "单灯直控",
    "fan": "风扇",
    "climate": "空调",
    "tv": "电视",
    "tap_view": "点击查看画面",
    "all_off": "全部关闭",
    "sep": "、",
    "on_list": "{names}开启中",
    "n_devices": "{n} 个设备",
    "other": "其他",
    "nothing_on": "目前没有开启的设备。",
    "all_lights": "全部灯光",
    "all_fans": "全部风扇",
    "all_ac": "全部空调",
    "on": "开启",
    "off": "关闭",
    "gate_on": "已开启",
    "gate_off": "已关闭",
    "gate_btn_on": "关闭",
    "gate_btn_off": "开启",
    "c_closed": "已关",
    "c_open": "已开",
    "c_part": "开 {a}/{b}",
    "curtain": "窗帘",
    "sheer": "纱帘",
    "watch": "仅观看",
    "talk": "对讲",
    "details": "详情",
    "dev_ac": "冷气",
    "cat_common": "公共区域",
    "cat_function": "功能区",
    "cat_room": "房间",
    "pick_area": "选择区域",
    "n_areas": "{n} 个区域",
    "live": "实时画面",
    "visitor_title": "访客来访",
    "visitor_status": "有访客按门铃",
    "zone_title": "{z}即时画面",
    "zone_status": "侦测到有人活动",
    "power_title": "电源开关",
    "n_switches": "{n} 个开关",
    "alarm_title": "安防控制",
    "alarm_status": "家庭安防面板",
    "w_clear-night": "晴朗夜",
    "w_sunny": "晴朗",
    "w_partlycloudy": "多云",
    "w_cloudy": "密云",
    "w_rainy": "有雨",
    "vacuum": "扫地机",
    "vacuum_busy": "{name}在打扫",
    "away": "离家",
    "left_on": "{label}未关",
    "armed_home": "在家布防",
    "armed_away": "外出布防",
    "zone_detected": "{z}侦测到人",
    "zone_tap": "点击查看{z}画面",
    "hint_pick": "点击选择房间",
    "area_btn": "区域",
    "power": "电源",
    "sleep": "睡眠模式",
    "tap_toggle": "点击切换",
    "security": "安防",
    "hold_open": "按住开启",
    "visitor_bar": "有访客按门铃",
    "visitor_tap": "点击查看访客画面",
    "view": "查看 ›",
    "back": "返回",
    "close": "关闭",
    "bare_light": "灯",
    "s_running": "运行中",
    "s_rinsing": "漂洗中",
    "s_spinning": "脱水中",
    "s_dispensing": "投放洗剂",
    "s_drying": "烘干中",
    "s_cool_down": "冷却中",
    "s_cooling": "冷却中",
    "s_steam_softening": "蒸汽软化",
    "s_rinse_hold": "漂洗暂停",
    "s_refreshing": "清新中",
    "s_detecting": "检测中",
    "s_pause": "已暂停",
    "s_reserved": "预约中",
    "s_wrinkle_care": "防皱中",
    "s_error": "故障",
    "left_m": "剩 {m} 分",
    "left_hm": "剩 {h} 时 {m} 分",
    "s_end": "已完成",
    "s_initial": "待机",
    "s_power_off": "已关机",
    "appl_status": "状态",
    "appl_remaining": "剩余时间",
    "appl_finish": "预计完成",
    "appl_total": "总时长",
    "appl_cycles": "累计次数",
    "appl_more": "在 HA 中查看详情",
    "dur_m": "{m} 分钟",
    "dur_hm": "{h} 时 {m} 分"
  },
  en: {
    "bulbs": "{n} bulbs",
    "single": "Single light",
    "fan": "Fan",
    "climate": "A/C",
    "tv": "TV",
    "tap_view": "Tap to view",
    "all_off": "All off",
    "sep": ", ",
    "on_list": "{names} on",
    "n_devices": "{n} devices",
    "other": "Other",
    "nothing_on": "Nothing is on right now.",
    "all_lights": "All lights",
    "all_fans": "All fans",
    "all_ac": "All A/C",
    "on": "On",
    "off": "Off",
    "gate_on": "Open",
    "gate_off": "Closed",
    "gate_btn_on": "Close",
    "gate_btn_off": "Open",
    "c_closed": "Closed",
    "c_open": "Open",
    "c_part": "Open {a}/{b}",
    "curtain": "Curtain",
    "sheer": "Sheer",
    "watch": "Watch only",
    "talk": "Talk",
    "details": "Details",
    "dev_ac": "A/C",
    "cat_common": "Common areas",
    "cat_function": "Functional",
    "cat_room": "Rooms",
    "pick_area": "Select area",
    "n_areas": "{n} areas",
    "live": "Live view",
    "visitor_title": "Visitor",
    "visitor_status": "Someone rang the doorbell",
    "zone_title": "{z} live view",
    "zone_status": "Person detected",
    "power_title": "Power switches",
    "n_switches": "{n} switches",
    "alarm_title": "Security",
    "alarm_status": "Home alarm panel",
    "w_clear-night": "Clear night",
    "w_sunny": "Sunny",
    "w_partlycloudy": "Partly cloudy",
    "w_cloudy": "Cloudy",
    "w_rainy": "Rainy",
    "vacuum": "Vacuum",
    "vacuum_busy": "{name} cleaning",
    "away": "Away",
    "left_on": "{label} still on",
    "armed_home": "Armed home",
    "armed_away": "Armed away",
    "zone_detected": "Person at {z}",
    "zone_tap": "Tap to view {z}",
    "hint_pick": "Tap to pick a room",
    "area_btn": "Areas",
    "power": "Power",
    "sleep": "Sleep mode",
    "tap_toggle": "Tap to toggle",
    "security": "Security",
    "hold_open": "Hold to open",
    "visitor_bar": "Someone rang the doorbell",
    "visitor_tap": "Tap to see the visitor",
    "view": "View ›",
    "back": "Back",
    "close": "Close",
    "bare_light": "Light",
    "s_running": "Running",
    "s_rinsing": "Rinsing",
    "s_spinning": "Spinning",
    "s_dispensing": "Dispensing",
    "s_drying": "Drying",
    "s_cool_down": "Cooling down",
    "s_cooling": "Cooling",
    "s_steam_softening": "Steam softening",
    "s_rinse_hold": "Rinse hold",
    "s_refreshing": "Refreshing",
    "s_detecting": "Detecting",
    "s_pause": "Paused",
    "s_reserved": "Scheduled",
    "s_wrinkle_care": "Wrinkle care",
    "s_error": "Error",
    "left_m": "{m} min left",
    "left_hm": "{h}h {m}m left",
    "s_end": "Finished",
    "s_initial": "Standby",
    "s_power_off": "Off",
    "appl_status": "Status",
    "appl_remaining": "Time left",
    "appl_finish": "Finishes at",
    "appl_total": "Cycle length",
    "appl_cycles": "Cycles",
    "appl_more": "Open in HA",
    "dur_m": "{m} min",
    "dur_hm": "{h}h {m}m"
  }
};

class FloorConsoleCard extends HTMLElement {
  setConfig(config) {
    this._config = config || {};
    if (this._root) this._applyTheme();
  }

  _theme() {
    var t = FCC_THEMES[this._config.theme] || FCC_THEMES.walnut;
    var vars = Object.assign({}, t.vars, this._config.theme_vars || {});
    return { fonts: t.fonts, css: ":root,:host{" + Object.keys(vars).map(function (k) { return "--" + k + ":" + vars[k] + ";"; }).join("") + "}" };
  }
  _applyTheme() {
    var el = this._root.getElementById("themeStyle");
    if (el) el.textContent = this._theme().css;
  }
  getCardSize() { return 12; }

  // UI language: `language` in the card config, else the HA user language
  // (zh* -> Chinese, anything else -> English)
  _lang() {
    var l = (this._config || {}).language || (this._hass && this._hass.language) || "en";
    return String(l).toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }
  _t(key, p) {
    var s = (FCC_I18N[this._lang()] || FCC_I18N.en)[key];
    if (s == null) s = FCC_I18N.en[key] != null ? FCC_I18N.en[key] : key;
    if (p) Object.keys(p).forEach(function (k) { s = s.split("{" + k + "}").join(p[k]); });
    return s;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._built) { this._build(); this._built = true; }
    this._render();
  }

  _svc(domain, service, entity_id, data) {
    this._hass.callService(domain, service, Object.assign({ entity_id }, data || {}));
  }
  _isOn(entity_id) {
    var st = this._hass.states[entity_id];
    if (!st) return false;
    // climate entities report their HVAC mode as the state ("cool", "dry", ...),
    // so anything other than off counts as on
    if (entity_id.indexOf("climate.") === 0 || entity_id.indexOf("media_player.") === 0) return ["off", "unavailable", "unknown"].indexOf(st.state) === -1;
    return st.state === "on" || st.state === "open" || st.state === "opening";
  }
  _toggle(entity_id) {
    var domain = entity_id.split(".")[0];
    if (domain === "climate") {
      var on = this._isOn(entity_id);
      this._svc("climate", on ? "turn_off" : "turn_on", entity_id);
    } else if (domain === "input_boolean") {
      this._svc("input_boolean", "toggle", entity_id);
    } else {
      this._svc(domain, "toggle", entity_id);
    }
  }

  _build() {
    var root = this.attachShadow({ mode: "open" });
    root.innerHTML = this._skeleton();
    var $ = this._$ = function (id) { return root.getElementById(id); };
    this._root = root;

    $("sheetClose").addEventListener("click", this._closeSheet.bind(this));
    $("sheetBack").addEventListener("click", function () { this._navBack = true; if (this._backFn) this._backFn(); this._navBack = false; }.bind(this));
    $("scrim").addEventListener("click", function (e) { if (e.target === $("scrim")) this._closeSheet(); }.bind(this));
    $("radialTrigger").addEventListener("click", this._openAreaList.bind(this));
    $("badges").addEventListener("click", function (e) {
      var badge = e.target.closest(".badge[data-list-sensor], .badge[data-power], .badge[data-appl]");
      if (!badge) return;
      if (badge.hasAttribute("data-appl")) { this._openApplianceSheet(parseInt(badge.getAttribute("data-appl"), 10)); return; }
      if (badge.hasAttribute("data-power")) { this._openPowerSheet(); return; }
      this._openEntityListSheet(badge.getAttribute("data-list-sensor"), badge.getAttribute("data-list-title"), badge.getAttribute("data-list-icon"));
    }.bind(this));
    $("visitorBtn").addEventListener("click", this._openVisitorSheet.bind(this));
    $("occupancyList").addEventListener("click", function (e) {
      var btn = e.target.closest(".occupancybtn");
      if (btn) this._openZoneSheet(btn.getAttribute("data-zone"));
    }.bind(this));
    $("powerBtn").addEventListener("click", this._openPowerSheet.bind(this));
    $("sleepBtn").addEventListener("click", function () {
      var sl = (this._config || {}).sleep;
      if (sl && sl.entity) this._toggle(sl.entity);
    }.bind(this));

    var alarmBtn = $("alarmBtn");
    var holdTimer = null;
    var startHold = function (e) {
      e.preventDefault();
      try { alarmBtn.setPointerCapture(e.pointerId); } catch (err) {}
      alarmBtn.classList.add("holding");
      holdTimer = setTimeout(function () { holdTimer = null; this._openAlarmSheet(); }.bind(this), 450);
    }.bind(this);
    var cancelHold = function (e) {
      alarmBtn.classList.remove("holding");
      if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
      try { alarmBtn.releasePointerCapture(e.pointerId); } catch (err) {}
    };
    alarmBtn.addEventListener("pointerdown", startHold);
    alarmBtn.addEventListener("pointerup", cancelHold);
    alarmBtn.addEventListener("pointercancel", cancelHold);

    $("powerBtn").querySelector(".icon").innerHTML = this._icon("i-power");
    $("sleepBtn").querySelector(".icon").innerHTML = this._icon("i-bed");
    $("alarmBtn").querySelector(".icon").innerHTML = this._icon("i-shield");
    $("visitorBtn").querySelector(".icon").innerHTML = this._icon("i-bell");

    this._visitorSheetOpen = false;
    this._prevVisitor = null;

    // Safety net: force a re-sync of any open sheet's row switches,
    // independent of hass updates. _render() only re-evaluates rows when
    // hass itself ticks; if some external mutation ever sets a row's "on"
    // class without going through _isOn() (root cause unconfirmed —
    // intermittent, survived instrumenting classList.add/toggle/className/
    // setAttribute/innerHTML on desktop Chrome), a wrong display shouldn't
    // persist. Three independent triggers, since rAF alone is unreliable on
    // mobile (commonly throttled/paused when the screen is off, the app is
    // backgrounded, or the WebView isn't actively compositing):
    //  - requestAnimationFrame: sub-frame correction while actively visible
    //  - setInterval: a backstop that (per spec) still fires at roughly
    //    1/sec even when rAF is fully paused in the background
    //  - visibilitychange: an immediate resync the instant the screen wakes
    //    or the app returns to the foreground, not waiting for either loop
    // Not throttled: whatever sets a row wrong needs correcting as fast as
    // possible, since each occurrence is now visible for however long it
    // takes to self-correct. _syncRows() itself is cheap when idle (early
    // return) and, when a sheet is open, only writes to the DOM for rows
    // whose value actually changed — so running every frame is fine.
    var self = this;
    (function syncLoop() {
      try { self._syncRows(); } catch (err) { console.error("floor-console-card syncLoop error", err); }
      requestAnimationFrame(syncLoop);
    })();
    setInterval(function () {
      try { self._syncRows(); } catch (err) { console.error("floor-console-card syncInterval error", err); }
    }, 1000);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) self._syncRows();
    });
    // time-left text in appliance badges only changes with the clock
    setInterval(function () {
      if (self._hass && (self._config.appliances || []).length && !document.hidden) self._render();
    }, 30000);
  }

  _icon(id) { return '<svg viewBox="0 0 24 24"><use href="#' + id + '"/></svg>'; }

  // ---- configuration-driven areas ---------------------------------------
  // Areas, rows and icons are generated from HA's own registries (floors,
  // areas, devices, entities); the card config only carries exceptions.
  // See `areas`, `entities`, `exclude`, `order` in the card config.
  get _AREAS() {
    var h = this._hass;
    if (!h) return [];
    var key = this._areasKey;
    if (!key || key.e !== h.entities || key.d !== h.devices || key.a !== h.areas || key.f !== h.floors || key.n !== Object.keys(h.states).length) {
      this._areasKey = { e: h.entities, d: h.devices, a: h.areas, f: h.floors, n: Object.keys(h.states).length };
      this._areasCache = this._buildAreas();
    }
    return this._areasCache;
  }

  // attribute of the *_on / curtains_open sensors that lists this floor's entities
  _floorAttr() {
    var cfg = this._config || {}, h = this._hass;
    var fl = cfg.floor && h && h.floors ? h.floors[cfg.floor] : null;
    return cfg.floor_attr || (fl ? ["", "first_floor", "second_floor", "third_floor", "fourth_floor"][fl.level] : "") || "second_floor";
  }

  _gateRow() {
    var found = null;
    this._AREAS.some(function (a) { return a.rows.some(function (r) { if (r.gate) { found = r; return true; } }); });
    return found;
  }

  _cleanName(n) { return String(n || "").replace(/\s*light ?bulb\d*$/i, "").trim(); }

  _iconFor(id, d, cfg) {
    var base = { light: "i-bulb", fan: "i-fan", climate: "i-ac", media_player: "i-tv", cover: "i-curtain" }[d] || "i-bulb";
    if (d !== "light") return base;
    var hints = cfg.icon_hints || [["chu_ju|ju_deng|gui", "i-cabinet"], ["chuang_lian", "i-curtain"], ["yang_tai", "i-balcony"], ["da_men", "i-door"]];
    for (var i = 0; i < hints.length; i++) if (new RegExp(hints[i][0]).test(id)) return hints[i][1];
    return base;
  }

  _subFor(id, d) {
    var st = this._hass.states[id];
    if (d === "light") {
      var m = st && st.attributes && st.attributes.entity_id;
      return Array.isArray(m) ? this._t("bulbs", { n: m.length }) : this._t("single");
    }
    return { fan: this._t("fan"), climate: this._t("climate"), media_player: this._t("tv") }[d] || "";
  }

  _autoRows(ids, cfg, prefixes) {
    var h = this._hass, ents = cfg.entities || {}, self = this;
    var gauze = new RegExp(cfg.gauze || "sha_lian|纱帘|sheer", "i");
    var rank = { light: 0, fan: 1, climate: 2, media_player: 3, cover: 4, camera: 5 };
    var seen = {};
    var list = ids.filter(function (id) { if (seen[id]) return false; seen[id] = true; return true; });
    var fullOf = function (id) { var o = ents[id] || {}; return o.name || self._cleanName(h.states[id].attributes.friendly_name || id); };
    var nameOf = function (id) {
      var n = fullOf(id);
      if ((ents[id] || {}).name || cfg.strip_area_prefix === false) return n;
      for (var i = 0; i < (prefixes || []).length; i++) {
        var p = prefixes[i];
        if (p && n.length > p.length && n.indexOf(p) === 0) {
          var rest = n.slice(p.length).replace(/^[\s\-_·]+/, "");
          if (rest && rest !== self._t("bare_light") && rest !== "灯" && !/^[\/／]/.test(rest)) return rest;
        }
      }
      return n;
    };
    list.sort(function (a, b) {
      var da = rank[a.split(".")[0]], db = rank[b.split(".")[0]];
      if (da !== db) return da - db;
      var oa = (ents[a] || {}).order, ob = (ents[b] || {}).order;
      if (oa != null && ob != null && oa !== ob) return oa - ob;
      if (oa != null && ob == null) return -1;
      if (oa == null && ob != null) return 1;
      return nameOf(a).localeCompare(nameOf(b), "zh");
    });
    var rows = [], curt = { curtain: [], sheer: [] };
    list.forEach(function (id) {
      var d = id.split(".")[0], o = ents[id] || {};
      if (!h.states[id]) return;
      if (d === "cover") {
        var kd = { "窗帘": "curtain", "纱帘": "sheer" }[o.kind] || o.kind;
        curt[kd === "curtain" || kd === "sheer" ? kd : (gauze.test(id + " " + nameOf(id)) ? "sheer" : "curtain")].push(id);
        return;
      }
      if (d === "camera") { rows.push({ icon: "i-cctv", label: nameOf(id), sub: self._t("tap_view"), camera: id }); return; }
      rows.push({ icon: o.icon || self._iconFor(id, d, cfg), label: nameOf(id), fullLabel: fullOf(id), sub: o.sub != null ? o.sub : self._subFor(id, d), entity: id });
    });
    ["curtain", "sheer"].forEach(function (k) {
      if (curt[k].length) rows.push({ curtain: true, kind: self._t(k), icon: "i-curtain", entities: curt[k] });
    });
    return rows;
  }

  _buildAreas() {
    var h = this._hass, cfg = this._config || {}, self = this;
    var acfg = cfg.areas || {};
    var floor = cfg.floor && h.floors ? h.floors[cfg.floor] : null;
    var floorName = floor ? floor.name || "" : "";
    // lights that are members of a light group are shown through the group
    var members = {};
    Object.keys(h.states).forEach(function (id) {
      if (id.indexOf("light.") !== 0) return;
      var m = h.states[id].attributes.entity_id;
      if (Array.isArray(m)) m.forEach(function (x) { members[x] = true; });
    });
    var gone = {};
    (cfg.exclude || []).forEach(function (id) { gone[id] = true; });
    var doms = { light: 1, fan: 1, climate: 1, cover: 1, media_player: 1, camera: 1 };
    var byArea = {};
    Object.keys(h.entities).forEach(function (id) {
      var e = h.entities[id], d = id.split(".")[0];
      if (!doms[d] || e.hidden || e.entity_category || !h.states[id] || gone[id] || (d === "light" && members[id])) return;
      var dev = e.device_id && h.devices[e.device_id];
      var aid = e.area_id || (dev && dev.area_id);
      if (aid) (byArea[aid] = byArea[aid] || []).push(id);
    });
    var hints = cfg.area_hints || [
      ["ke_ting", "i-sofa", "function"], ["fan_ting|can_ting", "i-table", "function"], ["chu_fang", "i-stove", "function"],
      ["shu_fang", "i-book", "room"], ["zhu_ren_fang|ke_fang", "i-bed", "room"], ["zou_lang", "i-path", "common"],
      ["xuan_guan", "i-frame", "common"], ["che_fang", "i-car", "common"], ["hou_yuan", "i-tree", "common"]
    ];
    var areas = [];
    Object.keys(h.areas).forEach(function (aid) {
      var a = h.areas[aid], ac = acfg[aid] || {};
      if (aid === "default" || ac.hide) return;
      if (a.floor_id && cfg.floor && a.floor_id !== cfg.floor) return;
      var rows;
      if (ac.rows) {
        rows = ac.rows.map(function (r) { return Object.assign({}, r); });
      } else {
        var skip = {};
        (ac.exclude || []).forEach(function (id) { skip[id] = true; });
        var ids = (byArea[aid] || []).filter(function (id) { return !skip[id]; }).concat(ac.add || []);
        var fl = floorName && a.name.indexOf(floorName) === 0 ? a.name.slice(floorName.length) : a.name;
        rows = self._autoRows(ids, cfg, [ac.name, fl, a.name].filter(function (x, i, arr) { return x && arr.indexOf(x) === i; }));
      }
      (ac.cameras || []).forEach(function (c) {
        rows.push({ icon: "i-cctv", label: c.label, sub: self._t("tap_view"), camera: c.entity });
      });
      if (!rows.length) return;
      var hint = null;
      hints.some(function (x) { if (new RegExp(x[0]).test(aid)) { hint = x; return true; } });
      var name = ac.name || a.name;
      if (!ac.name && floorName && name.indexOf(floorName) === 0) name = name.slice(floorName.length);
      areas.push({
        id: aid, floor: a.floor_id, common: !!ac.common, name: name, roman: ac.roman || "",
        icon: ac.icon || (hint && hint[1]) || "i-door",
        cat: ac.cat || (hint && hint[2]) || (a.floor_id ? "room" : "common"),
        rows: rows
      });
    });
    var order = cfg.order || [];
    areas.sort(function (x, y) {
      var ix = order.indexOf(x.id), iy = order.indexOf(y.id);
      if (ix === -1) ix = 1e3; if (iy === -1) iy = 1e3;
      return ix - iy;
    });
    return areas;
  }

  _areaLive(a) { return a.rows.some(function (r) { return this._isOn(r.entity); }.bind(this)); }
  _areaStatus(a) {
    var onRows = a.rows.filter(function (r) { return this._isOn(r.entity); }.bind(this));
    if (!onRows.length) return this._t("all_off");
    return this._t("on_list", { names: onRows.map(function (r) { return r.label; }).join(this._t("sep")) });
  }

  // Appliance (washer / dryer ...) badge: shown while the status sensor is in
  // an active state, with the status text and the time left (`remaining` is a
  // timestamp sensor holding the finish time). `idle` lists the states that
  // count as not running.
  _applianceBadge(a, idx) {
    var st = a.status && this._hass.states[a.status];
    if (!st) return "";
    var idle = a.idle || ["power_off", "initial", "unavailable", "unknown"];
    if (idle.indexOf(st.state) !== -1) return "";
    var key = "s_" + st.state, txt = this._t(key);
    var parts = [a.label, txt === key ? st.state : txt];
    var rem = a.remaining && this._hass.states[a.remaining];
    var t = rem ? Date.parse(rem.state) : NaN;
    if (!isNaN(t) && t > Date.now()) {
      var min = Math.max(1, Math.ceil((t - Date.now()) / 60000));
      parts.push(min >= 60 ? this._t("left_hm", { h: Math.floor(min / 60), m: min % 60 }) : this._t("left_m", { m: min }));
    }
    var tone = st.state === "error" ? "--alert" : "--accent";
    return this._badgeHTML(tone, a.icon || "i-washer", parts.join(" · ")).replace('class="badge"', 'class="badge" data-appl="' + idx + '"');
  }

  _fmtMin(min) {
    return min >= 60 ? this._t("dur_hm", { h: Math.floor(min / 60), m: min % 60 }) : this._t("dur_m", { m: min });
  }
  _applianceStatusText(a) {
    var st = this._hass.states[a.status];
    if (!st) return "";
    var key = "s_" + st.state, txt = this._t(key);
    return txt === key ? st.state : txt;
  }
  _applianceInfoHTML(a) {
    var h = this._hass, lines = [];
    var line = function (k, v) { lines.push('<div class="appl-line"><span>' + k + '</span><b>' + v + '</b></div>'); };
    var rem = a.remaining && h.states[a.remaining];
    var t = rem ? Date.parse(rem.state) : NaN;
    if (!isNaN(t) && t > Date.now()) {
      line(this._t("appl_remaining"), this._fmtMin(Math.max(1, Math.ceil((t - Date.now()) / 60000))));
      line(this._t("appl_finish"), new Date(t).toLocaleTimeString(this._lang() === "zh" ? "zh-CN" : undefined, { hour: "2-digit", minute: "2-digit", hour12: false }));
    }
    var total = a.total && h.states[a.total], tm = total ? parseFloat(total.state) : NaN;
    if (!isNaN(tm) && tm > 0) line(this._t("appl_total"), this._fmtMin(Math.round(tm)));
    var cyc = a.cycles && h.states[a.cycles];
    if (cyc && !isNaN(parseFloat(cyc.state))) line(this._t("appl_cycles"), cyc.state);
    return lines.join("");
  }
  _openApplianceSheet(idx) {
    var a = ((this._config || {}).appliances || [])[idx];
    if (!a) return;
    var rows = a.power && this._hass.states[a.power] ? [{ icon: "i-power", label: this._t("power"), sub: "", entity: a.power }] : [];
    this._openSheet({ name: a.label, icon: a.icon || "i-washer", status: this._applianceStatusText(a), rows: rows });
    var body = this._$("sheetBody");
    body.insertAdjacentHTML("afterbegin", '<div class="appl-info" id="applInfo">' + this._applianceInfoHTML(a) + '</div>');
    body.insertAdjacentHTML("beforeend", '<div class="master-bar"><button class="master-toggle" id="applMore">' + this._t("appl_more") + '</button></div>');
    this._$("applMore").addEventListener("click", function () { this._moreInfo(a.status); }.bind(this));
    this._applOpen = a;
  }

  _badgeHTML(tone, iconId, label, n, listSensor) {
    var attrs = listSensor ? ' data-list-sensor="' + listSensor + '" data-list-icon="' + iconId + '" data-list-title="' + label + '"' : '';
    return '<span class="badge" style="--tone:var(' + tone + ')"' + attrs + '>' + this._icon(iconId) + '<span>' + label + '</span>' + (n != null ? '<span class="n">' + n + '</span>' : '') + '</span>';
  }

  _openEntityListSheet(sensorId, title, icon) {
    // Grouped by area, same as the demo — not a flat entity list. Matches
    // each "on" entity id back to the area it's defined under in _AREAS;
    // anything unmatched (shouldn't normally happen, curated list) falls
    // into a catch-all "其他" section rather than being silently dropped.
    var st = this._hass.states[sensorId];
    var ids = (st && st.attributes && st.attributes[this._floorAttr()]) || [];
    this._openSheet({ name: title, icon: icon, status: this._t("n_devices", { n: ids.length }), rows: [] });
    var body = this._$("sheetBody");
    var areas = this._AREAS;
    var matched = {};
    var html = "";
    // Collect each area's matching rows first, so an entity that lives in
    // more than one area (via `add`) can be pulled into a combined
    // "A / B" section instead of showing up twice.
    var secs = [], owners = {};
    areas.forEach(function (a) {
      var rows = [];
      a.rows.forEach(function (r) {
        if (r.entity && ids.indexOf(r.entity) !== -1) rows.push(r.fullLabel ? Object.assign({}, r, { label: r.fullLabel }) : r);
        else if (r.curtain) r.entities.forEach(function (id) {
          if (ids.indexOf(id) === -1) return;
          var es = this._hass.states[id];
          rows.push({ icon: r.icon, label: (es && es.attributes && es.attributes.friendly_name) || id, sub: r.kind, entity: id });
        }.bind(this));
      }.bind(this));
      if (!rows.length) return;
      secs.push({ name: a.name, rows: rows });
      rows.forEach(function (r) { (owners[r.entity] = owners[r.entity] || []).push(a.name); });
    }.bind(this));
    var shared = {}, sharedOrder = [];
    secs.forEach(function (sec) {
      sec.rows = sec.rows.filter(function (r) {
        var o = owners[r.entity];
        if (o.length < 2) return true;
        var key = o.join(" / ");
        if (!shared[key]) { shared[key] = { name: key, rows: [], seen: {}, after: o[0] }; sharedOrder.push(key); }
        if (!shared[key].seen[r.entity]) { shared[key].seen[r.entity] = 1; shared[key].rows.push(r); }
        return false;
      });
    });
    secs.forEach(function (sec) {
      var parts = [sec];
      sharedOrder.forEach(function (k) { if (shared[k].after === sec.name) parts.push(shared[k]); });
      parts.forEach(function (x) {
        if (!x.rows.length) return;
        x.rows.forEach(function (r) { matched[r.entity] = true; });
        html += '<div class="row-section-label">' + x.name + '</div>' + x.rows.map(this._rowHTML.bind(this)).join("");
      }.bind(this));
    }.bind(this));
    var leftover = ids.filter(function (id) { return !matched[id]; });
    if (leftover.length) {
      html += '<div class="row-section-label">' + this._t("other") + '</div>' + leftover.map(function (id) {
        var es = this._hass.states[id];
        return this._rowHTML({ icon: icon, label: (es && es.attributes && es.attributes.friendly_name) || id, sub: id, entity: id });
      }.bind(this)).join("");
    }
    body.innerHTML = html || '<div class="note">' + this._t("nothing_on") + '</div>';
    this._wireRows(body);
  }

  _rowHTML(r) {
    if (r.master) {
      // Compact chip (no switch) — all masters share one line, see _openSheet.
      var kind = { light: ["i-bulb", this._t("all_lights")], fan: ["i-fan", this._t("all_fans")], climate: ["i-ac", this._t("all_ac")] }[r.kind];
      var anyOn = r.ids.some(function (id) { return this._isOn(id); }.bind(this));
      return '<button class="master-toggle' + (anyOn ? " on" : "") + '" data-group="' + r.ids.join(",") + '" data-domain="' + r.kind + '">' + this._icon(kind[0]) + '<span>' + kind[1] + '</span><span class="n">' + r.ids.length + '</span></button>';
    }
    if (r.curtain) {
      // 窗帘 / 纱帘 tile: one tap opens or closes every cover in the group.
      var n = r.entities.length;
      var nOpen = r.entities.filter(function (id) { return this._isOn(id); }.bind(this)).length;
      return '<button class="master-toggle curtain-tile' + (nOpen ? " on" : "") + '" data-entities="' + r.entities.join(",") + '">' + this._icon(r.icon) +
        '<span>' + r.kind + '</span><span class="n ds">' + this._curtainText(nOpen, n) + '</span></button>';
    }
    if (r.camera) {
      // Cameras are round buttons in their own bar (see _openSheet), so
      // they read differently from the switch rows (controls).
      return '<button class="cam-btn" data-camera="' + r.camera + '" data-label="' + r.label + '"><span class="circle">' + this._icon(r.icon) + '</span><span class="l">' + r.label + '</span></button>';
    }
    var on = this._isOn(r.entity);
    if (r.dev) {
      // Fan / air-con pulled out of the list: tap toggles, "⋯" opens more-info.
      return '<div class="dev-tile' + (on ? " on" : "") + '" data-entity="' + r.entity + '"><button class="dev-main">' + this._icon(r.icon) +
        '<span class="dl"><b>' + r.devLabel + '</b><span class="ds">' + this._t(on ? "on" : "off") + '</span></span></button>' +
        '<button class="dev-more" aria-label="' + this._t("details") + '">⋯</button></div>';
    }
    if (r.gate) {
      // Gate control: the row shows the entity's state (icon highlight +
      // status text); the button toggles `trigger` (defaults to `entity`,
      // e.g. a template switch that pulses the relay). Only the button
      // toggles; tapping the name opens the gate camera.
      return '<div class="row gate' + (on ? " on" : "") + '" data-entity="' + r.entity + '" data-trigger="' + (r.trigger || r.entity) + '" data-gatecam="' + (r.cam || "") + '"><div class="ricon">' + this._icon(r.icon) + '</div>' +
        '<div class="rlabel"><b>' + r.label + '</b><span class="gs">' + this._t(on ? "gate_on" : "gate_off") + '</span></div>' +
        '<button class="gate-btn">' + this._icon("i-power") + '<span class="gl">' + this._t(on ? "gate_btn_on" : "gate_btn_off") + '</span></button></div>' +
        '<div class="gate-cam" hidden></div>';
    }
    return '<div class="row' + (on ? " on" : "") + '" data-entity="' + r.entity + '"><div class="ricon">' + this._icon(r.icon) + '</div>' +
      '<div class="rlabel"><b>' + r.label + '</b><span>' + r.sub + '</span></div>' +
      '<ha-switch></ha-switch></div>';
  }

  _curtainText(nOpen, n) {
    return nOpen === 0 ? this._t("c_closed") : (nOpen === n ? this._t("c_open") : this._t("c_part", { a: nOpen, b: n }));
  }

  _moreInfo(entity_id) {
    // Standard HA convention: dispatch a composed hass-more-info event from
    // a light-DOM node (the card element itself) so it bubbles straight up
    // to the dashboard's dialog manager without needing to cross our own
    // shadow boundary a second time.
    var event = new Event("hass-more-info", { bubbles: true, cancelable: false, composed: true });
    event.detail = { entityId: entity_id };
    this.dispatchEvent(event);
  }

  _wireRows(container) {
    var self = this;
    container.querySelectorAll(".row, .master-toggle, .cam-btn, .dev-tile, .curtain-tile").forEach(function (row) {
      if (row.classList.contains("curtain-tile")) {
        var cids = row.getAttribute("data-entities").split(",");
        row.addEventListener("click", function () {
          var anyOpen = cids.some(function (id) { return self._isOn(id); });
          self._svc("cover", anyOpen ? "close_cover" : "open_cover", cids);
        });
        return;
      }
      if (row.classList.contains("dev-tile")) {
        var devEntity = row.getAttribute("data-entity");
        row.querySelector(".dev-main").addEventListener("click", function () { self._toggle(devEntity); });
        row.querySelector(".dev-more").addEventListener("click", function () { self._moreInfo(devEntity); });
        return;
      }
      var lightsAttr = row.getAttribute("data-group");
      if (lightsAttr) {
        var ids = lightsAttr.split(",");
        var domain = row.getAttribute("data-domain");
        row.addEventListener("click", function () {
          var anyOn = ids.some(function (id) { return self._isOn(id); });
          self._svc(domain, anyOn ? "turn_off" : "turn_on", ids);
        });
        return;
      }
      var cam = row.getAttribute("data-camera");
      if (cam) {
        row.addEventListener("click", function () { self._openCameraSheet(cam, row.getAttribute("data-label")); });
        return;
      }
      var trigger = row.getAttribute("data-trigger");
      if (trigger) {
        var gateEntity = row.getAttribute("data-entity");
        row.querySelector(".gate-btn").addEventListener("click", function (e) {
          e.stopPropagation();
          self._toggle(trigger);
          self._showGateCam(row.getAttribute("data-gatecam"));
        });
        row.addEventListener("click", function () {
          // name area: live camera view (the visitor sheet already embeds it)
          var gc = row.getAttribute("data-gatecam");
          if (!gc) self._moreInfo(gateEntity);
          else if (!self._visitorSheetOpen) self._openCameraSheet(gc, row.querySelector(".rlabel b").textContent);
        });
        return;
      }
      var entity = row.getAttribute("data-entity");
      if (!entity) return;
      var sw = row.querySelector("ha-switch");
      if (!sw) return;
      sw.checked = self._isOn(entity);
      sw.addEventListener("change", function () {
        self._toggle(entity);
      });
      row.addEventListener("click", function (e) {
        if (e.target === sw || sw.contains(e.target)) return;
        self._moreInfo(entity);
      });
    });
  }

  _openSheet(a) {
    var wasOpen = this._$("scrim").classList.contains("open");
    var sheetEl = this._$("sheet");
    if (this._hAnim) { this._hAnim.cancel(); this._hAnim = null; sheetEl.classList.remove("morphing"); }
    var h0 = wasOpen ? sheetEl.getBoundingClientRect().height : 0;
    clearTimeout(this._gateCamTimer);
    this._currentArea = null;
    this._applOpen = null;
    var $ = this._$;
    $("sheetBack").hidden = !a.back;
    this._backFn = a.back ? (typeof a.back === "function" ? a.back : this._openAreaList.bind(this)) : null;
    $("sheetIcon").innerHTML = this._icon(a.icon);
    $("sheetTitle").textContent = a.name;
    $("sheetSub").textContent = a.roman ? (a.roman + " · " + a.status) : a.status;
    var html = "";
    if (a.embed) html += '<div class="sheet-embed" id="sheetEmbed"' + (a.ratio ? ' style="aspect-ratio:' + a.ratio + ';background:#000"' : '') + '></div>';
    if (a.talk) html += '<div class="talkbar"><button class="talk-opt on" data-mode="watch">' + this._t("watch") + '</button><button class="talk-opt" data-mode="talk">' + this._t("talk") + '</button></div>';
    var allRows = a.rows || [];
    var masterRows = allRows.filter(function (r) { return r.master; });
    var isDev = function (r) { return a.pullout && r.entity && (r.entity.indexOf("fan.") === 0 || r.entity.indexOf("climate.") === 0 || r.entity.indexOf("media_player.") === 0); };
    var tt = this._t.bind(this);
    var devRows = allRows.filter(isDev).map(function (r) {
      return Object.assign({}, r, { dev: true, devLabel: allRows.filter(function (x) { return x.entity && x.entity.split(".")[0] === r.entity.split(".")[0]; }).length > 1 ? r.label : ({ fan: tt("fan"), climate: tt("dev_ac"), media_player: tt("tv") }[r.entity.split(".")[0]]) });
    });
    var plainRows = allRows.filter(function (r) { return !r.master && !r.camera && !r.curtain && !isDev(r); });
    var curtainRows = allRows.filter(function (r) { return r.curtain; });
    var camRows = allRows.filter(function (r) { return r.camera; });
    if (masterRows.length || curtainRows.length) html += '<div class="master-bar">' + masterRows.concat(curtainRows).map(this._rowHTML.bind(this)).join("") + '</div>';
    if (devRows.length) html += '<div class="dev-bar">' + devRows.map(this._rowHTML.bind(this)).join("") + '</div>';
    html += plainRows.map(this._rowHTML.bind(this)).join("");
    if (camRows.length) html += '<div class="cam-bar">' + camRows.map(this._rowHTML.bind(this)).join("") + '</div>';
    $("sheetBody").innerHTML = html;
    this._wireRows($("sheetBody"));
    if (a.embed) this._mountEmbed($("sheetEmbed"), a.embed);
    if (a.talk) {
      var self = this;
      var opts = $("sheetBody").querySelectorAll(".talk-opt");
      opts.forEach(function (btn) {
        btn.addEventListener("click", function () {
          opts.forEach(function (o) { o.classList.toggle("on", o === btn); });
          self._mountEmbed($("sheetEmbed"), self._camEmbed(a.talk, btn.getAttribute("data-mode") === "talk"), btn.getAttribute("data-mode") === "talk");
        });
      });
    }
    $("scrim").classList.add("open");
    if (wasOpen) {
      // sheet-to-sheet switch: slide the new content in from the side it
      // navigated from (right when going deeper, left when going back)
      var dir = this._navBack ? "swap-back" : "swap-fwd";
      [this._root.querySelector(".sheet-head"), $("sheetBody")].forEach(function (el) {
        el.classList.remove("swap-fwd", "swap-back");
        void el.offsetWidth;
        el.classList.add(dir);
      });
      // animate the sheet's height from the old content's to the new content's.
      // Measured in a microtask: some callers (area list, badge lists) fill
      // the body right after _openSheet returns, before anything is painted.
      var self2 = this;
      Promise.resolve().then(function () {
        var h1 = sheetEl.getBoundingClientRect().height;
        if (Math.abs(h1 - h0) <= 1) return;
        if (self2._hAnim) self2._hAnim.cancel();
        sheetEl.classList.add("morphing");
        var anim = self2._hAnim = sheetEl.animate([{ height: h0 + "px" }, { height: h1 + "px" }], { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" });
        var done = function () { if (self2._hAnim === anim) { sheetEl.classList.remove("morphing"); self2._hAnim = null; } };
        anim.onfinish = done;
        anim.oncancel = done;
      });
    }
  }

  _showGateCam(cam) {
    // Live view of the gate (front-door camera) right under the 车房大门 row,
    // so the user can watch it move. Shown on tap and whenever the gate's
    // status changes; hides itself again after 30s without activity.
    var slot = this._root.querySelector(".gate-cam");
    if (!slot || !cam) return;
    var self = this;
    if (slot.hidden || !slot.firstElementChild) {
      slot.hidden = false;
      slot.style.aspectRatio = this._ratio(cam);
      slot.style.background = "#000";
      window.loadCardHelpers().then(function (helpers) {
        if (!slot.isConnected) return;
        var el = helpers.createCardElement(self._camEmbed(cam));
        el.hass = self._hass;
        slot.innerHTML = "";
        slot.appendChild(el);
        self._spin(slot, el, self._camEmbed(cam).streams[0].url);
      });
    }
    clearTimeout(this._gateCamTimer);
    this._gateCamTimer = setTimeout(function () {
      slot.hidden = true;
      slot.innerHTML = "";
    }, 30000);
  }

  _closeSheet() {
    clearTimeout(this._gateCamTimer);
    this._$("scrim").classList.remove("open");
    this._visitorSheetOpen = false;
    this._currentArea = null;
    this._applOpen = null;
  }

  // Loading cover for a camera box until the live stream is really playing:
  // a turning circle over a blurred, dimmed frame from this camera's last
  // view in the same period (day / night, from sun.sun) — never shown sharp,
  // so it can't be mistaken for live. Each time the stream plays, a tiny
  // frame is saved for next time (this browser only). webrtc-camera's own
  // spinner uses ha-circular-progress, which this HA version no longer
  // defines, so it renders as nothing.
  _period() {
    var sun = this._hass && this._hass.states[(this._config || {}).sun_entity || "sun.sun"];
    return sun && sun.state === "below_horizon" ? "night" : "day";
  }
  _spin(container, cardEl, cam) {
    var key = "floor-cam:" + cam + ":" + this._period();
    var sp = document.createElement("div");
    sp.className = "cam-spin";
    var img = null;
    try { img = localStorage.getItem(key); } catch (err) {}
    if (img) {
      var ph = document.createElement("div");
      ph.className = "cam-ph";
      ph.style.backgroundImage = 'url("' + img + '")';
      sp.appendChild(ph);
    }
    container.appendChild(sp);
    var n = 0;
    var iv = setInterval(function () {
      var v = cardEl.video || (cardEl.shadowRoot && cardEl.shadowRoot.querySelector("video"));
      var playing = v && v.currentTime > 0 && !v.paused;
      if (playing) {
        try {
          var w = 96, hgt = Math.max(1, Math.round(w * v.videoHeight / v.videoWidth));
          var cv = document.createElement("canvas");
          cv.width = w; cv.height = hgt;
          cv.getContext("2d").drawImage(v, 0, 0, w, hgt);
          localStorage.setItem(key, cv.toDataURL("image/jpeg", 0.6));
        } catch (err) {}
      }
      if (playing || ++n > 250 || !sp.isConnected) { clearInterval(iv); sp.remove(); }
    }, 100);
  }

  async _mountEmbed(container, cardConfig, unmute) {
    if (!this._helpers) this._helpers = await window.loadCardHelpers();
    var el = this._helpers.createCardElement(cardConfig);
    el.hass = this._hass;
    container.innerHTML = "";
    container.appendChild(el);
    if (cardConfig.type === "custom:webrtc-camera") this._spin(container, el, cardConfig.streams[0].url);
    this._embedEl = el;
    if (unmute) {
      // webrtc-camera starts the <video> muted (browser autoplay policy);
      // the 对讲 tap is a user gesture, so un-muting the speaker is allowed.
      // Keep re-applying for a few seconds since the card re-creates the
      // video / re-mutes it while the stream is connecting.
      var ticks = 0;
      var iv = setInterval(function () {
        var v = el.video || (el.shadowRoot && el.shadowRoot.querySelector("video")) || el.querySelector("video");
        if (v) { try { v.muted = false; v.volume = 1; } catch (err) {} }
        if (++ticks >= 32 || !el.isConnected) clearInterval(iv);
      }, 250);
    }
  }

  _openAreaList() {
    var self = this;
    var areas = this._AREAS;
    var cats = [{ key: "common", label: this._t("cat_common") }, { key: "function", label: this._t("cat_function") }, { key: "room", label: this._t("cat_room") }];
    this._openSheet({ name: this._t("pick_area"), icon: "i-door", status: this._t("n_areas", { n: areas.length }), rows: [] });
    var body = this._$("sheetBody");
    function cellHTML(a) {
      return '<button class="area-cell' + (a.common ? " is-common" : "") + '" data-id="' + a.id + '">' +
        '<div class="icon">' + self._icon(a.icon) + (self._areaLive(a) ? '<span class="livedot"></span>' : '') + '</div>' +
        '<div class="name">' + a.name + '</div></button>';
    }
    body.innerHTML = cats.map(function (c) {
      var inCat = areas.filter(function (a) { return a.cat === c.key; });
      if (!inCat.length) return "";
      return '<div class="area-section"><div class="area-section-label">' + c.label + '</div><div class="area-grid">' + inCat.map(cellHTML).join("") + '</div></div>';
    }).join("");
    body.querySelectorAll(".area-cell").forEach(function (cell) {
      cell.addEventListener("click", function () {
        var a = areas.find(function (x) { return x.id === cell.getAttribute("data-id"); });
        if (a) self._openAreaSheet(a);
      });
    });
  }

  _openAreaSheet(a) {
    // Master toggle only covers this area's own light rows (not switches,
    // and never anything outside this sheet) — built fresh from a.rows
    // every open, so it can't drift from what's actually shown below it.
    var kinds = [["light", "light.", 2], ["fan", "fan.", 2], ["climate", "climate.", 2]];
    var masters = [];
    kinds.forEach(function (k) {
      var ids = a.rows.filter(function (r) { return r.entity && r.entity.indexOf(k[1]) === 0; }).map(function (r) { return r.entity; });
      if (ids.length >= k[2]) masters.push({ master: true, kind: k[0], ids: ids });
    });
    var rows = masters.concat(a.rows);
    this._openSheet({ id: a.id, name: a.name, roman: a.roman, icon: a.icon, common: a.common, status: this._areaStatus(a), rows: rows, back: true, pullout: true });
    this._currentArea = a;
    this._lastArea = a;
  }

  _openCameraSheet(stream, label) {
    var area = this._lastArea;
    this._openSheet({
      name: label, roman: "Camera", icon: "i-cctv", status: this._t("live"),
      embed: this._camEmbed(stream), ratio: this._ratio(stream),
      talk: this._isDoorbell(stream) ? this._doorbell() : null,
      rows: [],
      back: area ? function () { this._openAreaSheet(area); }.bind(this) : true
    });
  }

  _doorbell() { var v = (this._config || {}).visitor; return v && v.camera; }
  // The embed box is sized from the camera's aspect ratio up front (config
  // `camera_ratios`, default 16/9), so the spinner and the live stream
  // occupy the same box instead of the card resizing when it starts.
  _ratio(stream) {
    var s = this._isDoorbell(stream) ? this._doorbell() : stream;
    return ((this._config || {}).camera_ratios || {})[s] || "16/9";
  }
  _isDoorbell(stream) { var d = this._doorbell(); return !!d && (!stream || stream === d); }

  _camEmbed(stream, talk) {
    // Same webrtc-camera setup the main dashboard uses for its cctv pop-ups.
    // The doorbell has two modes (muted watch / microphone talk-back); the
    // mode switch is our own control below the video (.talkbar), so the
    // built-in on-video stream selector is hidden for it. No `poster`: only
    // the live stream is shown, with the card's spinner while it connects.
    var doorbell = this._isDoorbell(stream);
    stream = doorbell ? this._doorbell() : stream;
    var streams = doorbell ? [talk
      ? { url: stream, mode: "webrtc,webrtc/tcp,mse", name: "🎙️", media: "video,audio,microphone" }
      : { url: stream, mode: "webrtc,webrtc/tcp", name: "🎙️🚫", media: "video,audio" }
    ] : [{ url: stream, name: "🎙️🚫" }];
    return {
      type: "custom:webrtc-camera",
      mode: "webrtc,webrtc/tcp,mse",
      streams: streams,
      ui: true,
      style: ":host { display: block; height: 100%; } ha-card { height: 100%; } .player, .player * { height: 100%; } video { width: 100%; height: 100%; object-fit: fill; } .header { display: none; } .pictureinpicture { display: none; } .mode { display: none; } .screenshot { display: none; } .fullscreen { display: none; } .stream { font-size: 15px; width: 150px; font-weight: bold; padding-left: 2px;}" + " .stream { display: none; }"
    };
  }

  _openVisitorSheet() {
    this._openSheet({
      name: this._t("visitor_title"), roman: "Visitor", icon: "i-bell",
      status: this._t("visitor_status"),
      embed: this._camEmbed(), ratio: this._ratio(),
      talk: this._doorbell(),
      rows: this._gateRow() ? [this._gateRow()] : []
    });
    this._visitorSheetOpen = true;
  }

  // Frigate zone occupancy sensors (zones named inside_* / outside_*) — the
  // areas the user actually cares about — each mapped to the camera that
  // covers it. Person only: car / "all" sensors stay on while cars are parked.
  _zones() { return (this._config || {}).zones || []; }

  _openZoneSheet(key) {
    var z = this._zones().filter(function (x) { return x.key === key; })[0];
    if (!z) return;
    this._openSheet({
      name: this._t("zone_title", { z: z.label }), roman: "Person", icon: "i-cctv",
      status: this._t("zone_status"),
      embed: this._camEmbed(z.camera), ratio: this._ratio(z.camera),
      talk: this._isDoorbell(z.camera) ? this._doorbell() : null,
      rows: []
    });
  }

  _openPowerSheet() {
    var rows = ((this._config || {}).power || []).map(function (r) {
      return { icon: r.icon, label: r.label, sub: r.sub || "", entity: r.entity };
    });
    this._openSheet({ name: this._t("power_title"), roman: "Power", icon: "i-power", status: this._t("n_switches", { n: rows.length }), rows: rows });
  }

  _openAlarmSheet() {
    this._openSheet({
      name: this._t("alarm_title"), roman: "Alarmo", icon: "i-shield",
      status: this._t("alarm_status"),
      embed: {
        type: "custom:alarmo-card",
        entity: ((this._config || {}).alarm || {}).entity,
        // alarmo-card has built-in card-mod support (it renders its own
        // internal <card-mod> slot) — used here to drop its redundant
        // "Alarmo 主警报" branding and corner options menu (our own sheet
        // header already covers both) and recolor its shell to match.
        card_mod: {
          style: ".name{display:none !important}#cornerMenu{display:none !important}" +
            "ha-card{background:var(--surface) !important;border:1px solid var(--line) !important;box-shadow:none !important;border-radius:14px !important}"
        }
      },
      rows: []
    });
  }

  _render() {
    var h = this._hass, $ = this._$;
    var get = function (id) { return h.states[id] ? h.states[id].state : "unavailable"; };

    // badges
    var cfg = this._config || {};
    var attr = this._floorAttr();
    var weather = cfg.weather ? h.states[cfg.weather] : null;
    var temp = weather && weather.attributes ? weather.attributes.temperature : "--";
    var wst = weather ? weather.state : "";
    var condLabel = ["clear-night", "sunny", "partlycloudy", "cloudy", "rainy"].indexOf(wst) !== -1 ? this._t("w_" + wst) : wst;
    var alarm = cfg.alarm && cfg.alarm.entity ? get(cfg.alarm.entity) : "";
    var zoneHome = cfg.home_zone ? parseInt(get(cfg.home_zone), 10) : NaN;
    // "away" = nobody from this floor is home (presence sensor off); falls
    // back to the whole-home zone count when no presence sensor is configured
    var presence = cfg.presence ? h.states[cfg.presence] : null;
    var away = presence && presence.state !== "unavailable" && presence.state !== "unknown" ? presence.state === "off" : (!isNaN(zoneHome) && zoneHome < 1);

    var out = [];
    if (weather) out.push('<span class="badge badge-static" style="--tone:var(--info)">' + this._icon("i-moon") + '<span>' + temp + '° ' + condLabel + '</span></span>');
    (cfg.badges || []).forEach(function (b) {
      var st = h.states[b.sensor];
      var n = st && st.attributes && st.attributes[attr] ? st.attributes[attr].length : 0;
      if (n > 0) out.push(this._badgeHTML("--on", b.icon, b.label, n, b.sensor));
    }.bind(this));
    if (cfg.vacuum) {
      var vacuum = get(cfg.vacuum);
      if (vacuum !== "docked" && vacuum !== "idle" && vacuum !== "unavailable") out.push(this._badgeHTML("--on", "i-vacuum", this._t("vacuum_busy", { name: (h.states[cfg.vacuum] && h.states[cfg.vacuum].attributes.friendly_name) || this._t("vacuum") })));
    }
    (cfg.appliances || []).forEach(function (a, i) {
      var b = this._applianceBadge(a, i);
      if (b) out.push(b);
    }.bind(this));
    if (away) out.push(this._badgeHTML("--info", "i-away", this._t("away")));
    // nobody home but a power switch is still on
    if (away) (cfg.power || []).forEach(function (p) {
      if (this._isOn(p.entity)) out.push(this._badgeHTML("--alert", p.icon, this._t("left_on", { label: p.label })).replace('class="badge"', 'class="badge" data-power="1"'));
    }.bind(this));
    if (alarm === "armed_home") out.push(this._badgeHTML("--alert", "i-shield", this._t("armed_home")));
    if (alarm === "armed_away") out.push(this._badgeHTML("--alert", "i-shield", this._t("armed_away")));
    var badgesEl = $("badges");
    var newBadges = out.join("");
    if (badgesEl.innerHTML !== newBadges) badgesEl.innerHTML = newBadges;

    // occupancy buttons — one per zone with a person in it (zone sensors named
    // inside_* / outside_*, not the camera's own whole-frame detection).
    // Debounced (instant-on, delayed-off): the sensors flap on/off within
    // seconds during real activity, and each hide/show reflows the layout
    // below (measured CLS), so a zone stays listed 4s after it clears.
    var occ = this._occ = this._occ || {};
    var zones = this._zones();
    zones.forEach(function (z) {
      var o = occ[z.key] = occ[z.key] || { on: false, timer: null };
      var person = get(z.sensor || ("binary_sensor." + z.key + "_person_occupancy")) === "on";
      if (person) {
        if (o.timer) { clearTimeout(o.timer); o.timer = null; }
        o.on = true;
      } else if (o.on && !o.timer) {
        o.timer = setTimeout(function () { o.timer = null; o.on = false; this._renderOccupancy(); }.bind(this), 4000);
      }
    }.bind(this));
    this._renderOccupancy();

    // visitor auto-popup (trigger_entity / trigger_state / trigger_close)
    var visitor = cfg.visitor && cfg.visitor.sensor ? get(cfg.visitor.sensor) === "on" : false;
    $("visitorBar").hidden = !visitor;
    if (visitor !== this._prevVisitor) {
      if (visitor && !this._visitorSheetOpen) this._openVisitorSheet();
      else if (!visitor && this._visitorSheetOpen) this._closeSheet();
      this._prevVisitor = visitor;
    }

    // gate status changed (by anyone) while a sheet with the gate row is open
    var gateRow = this._gateRow();
    var gateState = gateRow ? get(gateRow.entity) : undefined;
    if (this._prevGate !== undefined && gateState !== this._prevGate && $("scrim").classList.contains("open")) this._showGateCam(gateRow.cam);
    this._prevGate = gateState;

    // power button (opens the switch sheet; lit while any switch is on)
    var pw = cfg.power || [];
    $("powerBtn").hidden = !pw.length;
    $("powerBtn").classList.toggle("on", pw.some(function (r) { return this._isOn(r.entity); }.bind(this)));
    var pwSub = pw.map(function (r) { return r.label; }).join(" · ");
    var pwSubEl = $("powerBtn").querySelector(".sub");
    if (pwSubEl.textContent !== pwSub) pwSubEl.textContent = pwSub;

    // sleep button
    var sl = cfg.sleep || {};
    var sleepOn = sl.entity ? get(sl.entity) === "on" : false;
    $("sleepBtn").hidden = !sl.entity;
    $("sleepBtn").classList.toggle("on", sleepOn);

    // keep an open area sheet's subtitle live too
    if (this._currentArea) {
      $("sheetSub").textContent = (this._currentArea.roman ? this._currentArea.roman + " · " : "") + this._areaStatus(this._currentArea);
    }

    // keep an open appliance sheet live too
    if (this._applOpen) {
      var info = $("applInfo"), ahtml = this._applianceInfoHTML(this._applOpen);
      if (info && info.innerHTML !== ahtml) info.innerHTML = ahtml;
      var astat = this._applianceStatusText(this._applOpen);
      if ($("sheetSub").textContent !== astat) $("sheetSub").textContent = astat;
    }

    this._syncRows();
    if (this._embedEl) this._embedEl.hass = h;
  }

  _renderOccupancy() {
    var zones = this._zones().filter(function (z) { return this._occ[z.key] && this._occ[z.key].on; }.bind(this));
    var key = zones.map(function (z) { return z.key; }).join(",");
    if (key === this._occKey) return;
    this._occKey = key;
    var tt = this._t.bind(this);
    this._$("occupancyList").innerHTML = zones.map(function (z) {
      return '<button class="occupancybtn" data-zone="' + z.key + '"><span class="plabel"><b>' + tt("zone_detected", { z: z.label }) + '</b><span>' + tt("zone_tap", { z: z.label }) + '</span></span>' +
        '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>';
    }).join("");
  }

  _syncRows() {
    // ha-switch owns its own rendering (a real HA/LitElement component, the
    // same one every stock HA toggle uses) — we only ever set its `checked`
    // property from truth. No classList/attribute twiddling of our own on
    // the switch itself, so there's no custom code left that can desync.
    if (!this._hass || !this._$("scrim").classList.contains("open")) return;
    var openRows = this._root.querySelectorAll(".sheet-body .row, .sheet-body .master-toggle, .sheet-body .dev-tile, .sheet-body .curtain-tile");
    openRows.forEach(function (row) {
      var curtainIds = row.getAttribute("data-entities");
      if (curtainIds) {
        var cl = curtainIds.split(",");
        var nOpen = cl.filter(function (id) { return this._isOn(id); }.bind(this)).length;
        row.classList.toggle("on", nOpen > 0);
        var cds = row.querySelector(".ds");
        var ctext = this._curtainText(nOpen, cl.length);
        if (cds && cds.textContent !== ctext) cds.textContent = ctext;
        return;
      }
      var lightsAttr = row.getAttribute("data-group");
      if (lightsAttr) {
        var ids = lightsAttr.split(",");
        var anyOn = ids.some(function (id) { return this._isOn(id); }.bind(this));
        row.classList.toggle("on", anyOn);
        return;
      }
      var entity = row.getAttribute("data-entity");
      if (!entity) return;
      var on = this._isOn(entity);
      row.classList.toggle("on", on);
      var gbtn = row.querySelector(".gate-btn");
      if (gbtn) {
        var gs = row.querySelector(".gs"), gl = gbtn.querySelector(".gl");
        var gst = this._t(on ? "gate_on" : "gate_off"), gbl = this._t(on ? "gate_btn_on" : "gate_btn_off");
        if (gs && gs.textContent !== gst) gs.textContent = gst;
        if (gl && gl.textContent !== gbl) gl.textContent = gbl;
        return;
      }
      var ds = row.querySelector(".ds");
      if (ds) {
        var dwant = this._t(on ? "on" : "off");
        if (ds.textContent !== dwant) ds.textContent = dwant;
        return;
      }
      var sw = row.querySelector("ha-switch");
      if (sw) {
        if (sw.checked !== on) sw.checked = on;
        return;
      }
      var chip = row.querySelector(".statuschip");
      if (chip) {
        chip.classList.toggle("on", on);
        var want = this._t(on ? "on" : "off");
        if (chip.textContent !== want) chip.textContent = want;
      }
    }.bind(this));
  }

  _skeleton() {
    var th = this._theme();
    return th.fonts +
'<style id="themeStyle">' + th.css + '</style>' +
'<style>' +
':host{display:block;height:100%}' +
'*{box-sizing:border-box}' +
'.app{height:100%;min-height:560px;display:flex;flex-direction:column;overflow:hidden;background:var(--bg);color:var(--fg);font-family:var(--font-body);-webkit-font-smoothing:antialiased;padding-inline:14px;padding-block:10px 10px;gap:8px;' +
'  background-image:radial-gradient(ellipse 120% 50% at 50% 0%, color-mix(in srgb,var(--accent) 10%,transparent), transparent 60%), repeating-linear-gradient(100deg, color-mix(in srgb,var(--fg) 1.2%,transparent) 0px, color-mix(in srgb,var(--fg) 1.2%,transparent) 1px, transparent 1px, transparent 7px);}' +
'img{max-width:100%}' +
'[hidden]{display:none!important}' +
'h1,h2,h3{font-family:var(--font-display);font-weight:600;text-wrap:balance;margin:0}' +
'.badges{flex:none;display:flex;flex-wrap:wrap;justify-content:center;gap:6px;min-height:0}' +
'.badges:empty{display:none}' +
'.badge{display:flex;align-items:center;gap:6px;padding:7px 13px 7px 10px;border-radius:999px;font-size:.8rem;font-weight:600;letter-spacing:.01em;background:color-mix(in srgb, var(--tone) 18%, transparent);border:1px solid color-mix(in srgb, var(--tone) 38%, transparent);color:var(--tone);cursor:pointer}' +
'.badge svg{width:15px;height:15px;stroke:currentColor;flex:none}' +
'.badge .n{font-family:var(--font-mono);font-variant-numeric:tabular-nums}' +
'.badge-static{cursor:default}' +
'.appl-info{margin-bottom:8px}' +
'.appl-line{display:flex;justify-content:space-between;align-items:baseline;padding:9px 2px;border-bottom:1px solid var(--line);font-size:.85rem}' +
'.appl-line span{color:var(--fg-dim)}' +
'.appl-line b{font-weight:600;color:var(--fg);font-variant-numeric:tabular-nums}' +
'.radialzone{flex:1;min-height:0;display:flex;align-items:center;justify-content:center}' +
'.radialtrigger{width:104px;height:104px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;border:1px solid var(--accent);background:radial-gradient(circle at 35% 30%, color-mix(in srgb,var(--accent-strong) 22%,transparent), color-mix(in srgb,var(--accent) 8%,transparent) 70%);box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 12%,transparent), 0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 color-mix(in srgb,var(--accent-strong) 12%,transparent);color:var(--fg);font:inherit;cursor:pointer;touch-action:none;transition:transform .15s ease;}' +
'.radialtrigger:active{transform:scale(0.94)}' +
'.radialtrigger svg{width:30px;height:30px;stroke:var(--accent-strong)}' +
'.radialtrigger span{font-size:.78rem;font-weight:600;letter-spacing:.02em}' +
'.radialtrigger-hint{margin-top:10px;font-size:.72rem;color:var(--fg-dim);text-align:center}' +
'.area-section{margin-bottom:14px}' +
'.area-section:last-child{margin-bottom:0}' +
'.area-section-label{font-size:.68rem;font-weight:600;letter-spacing:.04em;color:var(--fg-dim);text-transform:uppercase;margin-bottom:4px}' +
'.row-section-label{font-size:.68rem;font-weight:600;letter-spacing:.04em;color:var(--fg-dim);text-transform:uppercase;margin:14px 2px 2px}' +
'.area-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px 6px;padding:6px 0 2px}' +
'.area-cell{display:flex;flex-direction:column;align-items:center;gap:7px;border:none;background:none;color:inherit;font:inherit;cursor:pointer;padding:2px 0;}' +
'.area-cell .icon{position:relative;width:54px;height:54px;border-radius:15px;background:color-mix(in srgb,var(--accent) 10%,transparent);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;}' +
'.area-cell .icon svg{width:24px;height:24px;stroke:var(--accent-strong)}' +
'.area-cell.is-common .icon{border-color:color-mix(in srgb,var(--accent) 55%,transparent);background:color-mix(in srgb,var(--accent) 16%,transparent)}' +
'.area-cell .icon .livedot{position:absolute;top:-3px;right:-3px;width:12px;height:12px;border-radius:50%;background:var(--accent-strong);border:2px solid var(--surface-2);box-shadow:0 0 4px var(--accent-strong);}' +
'.area-cell .name{font-size:.74rem;font-weight:600;color:var(--fg);text-align:center;line-height:1.2;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
'.area-cell:active .icon{transform:scale(0.92)}' +
'.visitorbar{flex:none;margin-top:auto}' +
'.visitorbtn{width:100%;display:flex;align-items:center;gap:13px;padding:14px 16px;border-radius:16px;border:1px solid var(--alert);background:linear-gradient(160deg, color-mix(in srgb,var(--alert) 20%,transparent) 0%, color-mix(in srgb,var(--alert) 8%,transparent) 100%);color:var(--fg);font:inherit;text-align:left;cursor:pointer;animation:visitorPulse 1.8s ease-in-out infinite;}' +
'@keyframes visitorPulse{0%,100%{box-shadow:0 0 0 0 color-mix(in srgb,var(--alert) 35%,transparent)}50%{box-shadow:0 0 0 6px color-mix(in srgb,var(--alert) 0%,transparent)}}' +
'.visitorbtn .icon{flex:none;width:50px;height:50px;border-radius:14px;background:color-mix(in srgb,var(--alert) 22%,transparent);display:flex;align-items:center;justify-content:center}' +
'.visitorbtn .icon svg{width:26px;height:26px;stroke:var(--alert)}' +
'.visitorbtn .plabel{flex:1;min-width:0}' +
'.visitorbtn .plabel b{display:block;font-size:1.1rem;font-weight:600;color:var(--alert)}' +
'.visitorbtn .plabel span{display:block;font-size:.78rem;color:var(--fg-dim)}' +
'.visitorbtn .go{flex:none;font-size:.82rem;font-weight:600;color:var(--alert)}' +
'.scrim{position:absolute;inset:0;z-index:50;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .22s ease}' +
'.scrim.open{opacity:1;pointer-events:auto}' +
'.sheet{position:absolute;left:0;right:0;bottom:0;z-index:51;max-height:min(88%, 700px);display:flex;flex-direction:column;background:linear-gradient(180deg, var(--surface-2) 0%, var(--sheet-end) 100%);border:1px solid var(--line);border-bottom:none;border-radius:22px 22px 0 0;box-shadow:0 -20px 60px rgba(0,0,0,0.55);padding:10px 18px 16px;transform:translateY(100%);transition:transform .26s cubic-bezier(.2,.8,.2,1);}' +
'.scrim.open .sheet{transform:translateY(0)}' +
'.sheet.morphing,.sheet.morphing .sheet-body{overflow:hidden}' +
'@keyframes swapIn{from{opacity:0;transform:translateX(var(--dx))}to{opacity:1;transform:none}}' +
'.swap-fwd{--dx:32px;animation:swapIn .26s cubic-bezier(.2,.8,.2,1)}' +
'.swap-back{--dx:-32px;animation:swapIn .26s cubic-bezier(.2,.8,.2,1)}' +
'.sheet-grab{width:36px;height:4px;border-radius:99px;background:var(--line);margin:4px auto 10px}' +
'.sheet-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:4px}' +
'.sheet-head .icon{width:34px;height:34px;border-radius:10px;background:color-mix(in srgb,var(--accent) 14%,transparent);display:flex;align-items:center;justify-content:center;flex:none}' +
'.sheet-head .icon svg{width:18px;height:18px;stroke:var(--accent-strong)}' +
'.sheet-titles{flex:1;min-width:0}' +
'.sheet-titles h3{font-size:1.1rem;color:var(--fg)}' +
'.sheet-titles p{margin:2px 0 0;font-size:.74rem;color:var(--fg-dim)}' +
'.sheet-close{flex:none;width:30px;height:30px;border-radius:50%;border:1px solid var(--line);background:transparent;color:var(--fg-dim);font-size:.9rem;line-height:1;cursor:pointer}' +
'.sheet-back{flex:none;width:30px;height:30px;border-radius:50%;border:1px solid var(--line);background:transparent;color:var(--fg-dim);font-size:1.3rem;line-height:1;cursor:pointer;margin-right:2px}' +
'.sheet-body{overflow-y:auto;margin-top:8px;padding-bottom:4px}' +
'.sheet-embed{position:relative;margin-bottom:10px;border-radius:12px;overflow:hidden}' +
'.gate-cam{position:relative}' +
'.cam-spin{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}' +
'.cam-spin::before{content:"";position:relative;z-index:1;width:34px;height:34px;border-radius:50%;border:3px solid color-mix(in srgb,var(--accent-strong) 22%,transparent);border-top-color:var(--accent-strong);animation:camSpin .9s linear infinite}' +
'.cam-ph{position:absolute;inset:-24px;background-size:cover;background-position:center;filter:blur(16px) brightness(0.5)}' +
'@keyframes camSpin{to{transform:rotate(360deg)}}' +
'.talkbar{display:flex;gap:4px;padding:4px;margin-bottom:10px;border-radius:999px;background:var(--surface);border:1px solid var(--line)}' +
'.talk-opt{flex:1;padding:8px 6px;border:none;border-radius:999px;background:transparent;color:var(--fg-dim);font:inherit;font-size:.78rem;font-weight:700;cursor:pointer}' +
'.talk-opt.on{background:color-mix(in srgb,var(--accent) 30%,transparent);color:var(--accent-strong)}' +
'.occupancylist{flex:none;display:flex;flex-direction:column;gap:6px}' +
'.occupancylist:empty{display:none}' +
'.occupancybtn{width:100%;display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--fg);font:inherit;text-align:left;cursor:pointer;}' +
'.occupancybtn .plabel{flex:1;min-width:0}' +
'.occupancybtn .plabel b{display:block;font-size:.88rem;font-weight:600}' +
'.occupancybtn .plabel span{display:block;font-size:.72rem;color:var(--fg-dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
'.occupancybtn .chev{flex:none;width:16px;height:16px;stroke:var(--fg-dim)}' +
'.quickactions{flex:none;display:flex;gap:8px}' +
'.qa-btn{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 8px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--fg);font:inherit;cursor:pointer;touch-action:none;}' +
'.qa-btn .icon{width:34px;height:34px;border-radius:10px;background:color-mix(in srgb,var(--accent) 10%,transparent);display:flex;align-items:center;justify-content:center}' +
'.qa-btn .icon svg{width:18px;height:18px;stroke:var(--accent-strong)}' +
'.qa-btn .lbl{font-size:.8rem;font-weight:600}' +
'.qa-btn .sub{font-size:.62rem;color:var(--fg-dim)}' +
'.qa-btn.on .icon{background:color-mix(in srgb,var(--accent) 30%,transparent)}' +
'.qa-btn.on .lbl{color:var(--accent-strong)}' +
'.qa-btn.qa-alarm{border-color:color-mix(in srgb,var(--alert) 40%,transparent)}' +
'.qa-btn.qa-alarm .icon{background:color-mix(in srgb,var(--alert) 14%,transparent)}' +
'.qa-btn.qa-alarm .icon svg{stroke:var(--alert)}' +
'.qa-btn.qa-alarm.holding{background:color-mix(in srgb,var(--alert) 10%,transparent)}' +
'.note{font-size:.72rem;color:var(--fg-dim);background:color-mix(in srgb,var(--fg) 3%,transparent);border:1px dashed var(--line);border-radius:10px;padding:8px 10px;margin-bottom:8px}' +
'.row{display:flex;align-items:center;gap:10px;padding:7px 2px;border-bottom:1px solid var(--line);cursor:pointer}' +
'.row:last-child{border-bottom:none}' +
'.row .ricon{flex:none;width:26px;height:26px;border-radius:9px;background:color-mix(in srgb,var(--fg) 4%,transparent);display:flex;align-items:center;justify-content:center}' +
'.row .ricon svg{width:15px;height:15px;stroke:var(--fg-dim)}' +
'.row.on .ricon{background:color-mix(in srgb,var(--accent) 18%,transparent)}' +
'.row.on .ricon svg{stroke:var(--accent-strong)}' +
'.row .rlabel{flex:1;min-width:0;display:flex;align-items:baseline;gap:6px;overflow:hidden}' +
'.row .rlabel b{flex:none;white-space:nowrap;font-size:.85rem;font-weight:600;color:var(--fg)}' +
'.row .rlabel span{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.7rem;color:var(--fg-dim)}' +
'.dev-bar{display:flex;gap:8px;margin-bottom:6px}' +
'.dev-tile{flex:1;min-width:0;display:flex;align-items:center;border-radius:14px;border:1px solid var(--line);background:var(--surface)}' +
'.dev-tile.on{background:color-mix(in srgb,var(--accent) 20%,transparent);border-color:var(--accent)}' +
'.dev-main{flex:1;min-width:0;display:flex;align-items:center;gap:8px;padding:8px 4px 8px 10px;border:none;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}' +
'.dev-main svg{width:20px;height:20px;stroke:var(--fg-dim);flex:none}' +
'.dev-tile.on .dev-main svg{stroke:var(--accent-strong)}' +
'.dev-main .dl{min-width:0;display:flex;flex-direction:column}' +
'.dev-main b{font-size:.82rem;font-weight:700;color:var(--fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
'.dev-main .ds{font-size:.66rem;color:var(--fg-dim)}' +
'.dev-tile.on .ds{color:var(--accent-strong)}' +
'.dev-more{flex:none;width:34px;align-self:stretch;border:none;border-left:1px solid var(--line);background:none;color:var(--fg-dim);font:inherit;font-size:1.1rem;cursor:pointer;border-radius:0 14px 14px 0}' +
'.master-toggle.curtain-tile .n{font-family:inherit;font-weight:600}' +
'.row ha-switch{flex:none}' +
'.row.gate{cursor:pointer}' +
'.gate-btn{flex:none;display:flex;align-items:center;gap:5px;padding:7px 14px 7px 11px;border-radius:999px;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 28%,transparent);color:var(--accent-strong);font:inherit;font-size:.8rem;font-weight:700;cursor:pointer}' +
'.gate-btn svg{width:15px;height:15px;stroke:currentColor;flex:none}' +
'.gate-btn:active{opacity:.8;transform:scale(0.96)}' +
'.row.gate.on .gate-btn{background:color-mix(in srgb,var(--alert) 22%,transparent);border-color:var(--alert);color:var(--alert)}' +
'.master-bar{display:flex;gap:6px;margin-bottom:8px}' +
'.master-toggle{flex:1;min-width:0;display:flex;align-items:center;justify-content:center;gap:5px;padding:9px 4px;border-radius:999px;border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);background:color-mix(in srgb,var(--accent) 8%,transparent);color:var(--accent-strong);font:inherit;font-size:.74rem;font-weight:700;white-space:nowrap;cursor:pointer}' +
'.master-toggle svg{width:15px;height:15px;stroke:currentColor;flex:none}' +
'.master-toggle .n{font-family:var(--font-mono);font-weight:500;color:var(--fg-dim)}' +
'.master-toggle.on{background:color-mix(in srgb,var(--accent) 30%,transparent);border-color:var(--accent)}' +
'.master-toggle.on .n{color:var(--fg)}' +
'.master-toggle:active{opacity:.85}' +
'.gate-cam{margin:4px 0 8px;border-radius:12px;overflow:hidden}' +
'.cam-bar{display:flex;flex-wrap:wrap;gap:14px;margin-top:4px;padding:10px 2px 0;border-top:1px solid var(--line)}' +
'.cam-btn{display:flex;flex-direction:column;align-items:center;gap:6px;width:72px;border:none;background:none;color:inherit;font:inherit;cursor:pointer;padding:0}' +
'.cam-btn .circle{width:48px;height:48px;border-radius:50%;background:color-mix(in srgb,var(--info) 16%,transparent);border:1px solid color-mix(in srgb,var(--info) 45%,transparent);display:flex;align-items:center;justify-content:center}' +
'.cam-btn .circle svg{width:22px;height:22px;stroke:var(--info)}' +
'.cam-btn .l{font-size:.68rem;font-weight:600;color:var(--fg-dim);text-align:center;line-height:1.2}' +
'.cam-btn:active .circle{transform:scale(0.92)}' +
'.chevtxt{flex:none;color:var(--fg-dim);font-size:1.1rem}' +
'.statuschip{flex:none;padding:4px 10px;border-radius:999px;font-size:.74rem;font-weight:600;background:color-mix(in srgb,var(--fg) 8%,transparent);color:var(--fg-dim);border:1px solid var(--line)}' +
'.statuschip.on{background:color-mix(in srgb,var(--accent) 22%,transparent);color:var(--accent-strong);border-color:var(--accent)}' +
// ha-switch is a Web Awesome component (shadow parts base/control/thumb,
// checked state exposed as a CSS custom state, not an attribute) — themed
// via ::part() + :state(checked) rather than guessed custom properties.
'ha-switch::part(control){background:color-mix(in srgb,var(--fg) 10%,transparent);border:1px solid var(--line)}' +
'ha-switch::part(thumb){background:var(--fg-dim);border-color:var(--surface-2)}' +
'ha-switch:state(checked)::part(control){background:color-mix(in srgb,var(--accent) 30%,transparent);border-color:var(--accent)}' +
'ha-switch:state(checked)::part(thumb){background:var(--accent-strong);border-color:var(--accent)}' +
'</style>' +
'<div class="app">' +
'<div class="badges" id="badges"></div>' +
'<div class="occupancylist" id="occupancyList"></div>' +
'<div class="radialzone"><button class="radialtrigger" id="radialTrigger"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg><span>' + this._t("area_btn") + '</span></button></div>' +
'<p class="radialtrigger-hint">' + this._t("hint_pick") + '</p>' +
'<div class="quickactions">' +
'<button class="qa-btn" id="powerBtn" hidden><span class="icon"></span><span class="lbl">' + this._t("power") + '</span><span class="sub"></span></button>' +
'<button class="qa-btn" id="sleepBtn" hidden><span class="icon"></span><span class="lbl">' + this._t("sleep") + '</span><span class="sub">' + this._t("tap_toggle") + '</span></button>' +
'<button class="qa-btn qa-alarm" id="alarmBtn"><span class="icon"></span><span class="lbl">' + this._t("security") + '</span><span class="sub">' + this._t("hold_open") + '</span></button>' +
'</div>' +
'<div class="visitorbar" id="visitorBar" hidden><button class="visitorbtn" id="visitorBtn"><span class="icon"></span><span class="plabel"><b>' + this._t("visitor_bar") + '</b><span>' + this._t("visitor_tap") + '</span></span><span class="go">' + this._t("view") + '</span></button></div>' +
'<div class="scrim" id="scrim"><div class="sheet" id="sheet" role="dialog" aria-modal="true"><div class="sheet-grab"></div><div class="sheet-head"><button class="sheet-back" id="sheetBack" aria-label="' + this._t("back") + '" hidden>‹</button><div class="icon" id="sheetIcon"></div><div class="sheet-titles"><h3 id="sheetTitle"></h3><p id="sheetSub"></p></div><button class="sheet-close" id="sheetClose" aria-label="' + this._t("close") + '">✕</button></div><div class="sheet-body" id="sheetBody"></div></div></div>' +
'<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
'<g id="i-car" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16l1.5-5.5A2 2 0 0 1 6.4 9h11.2a2 2 0 0 1 1.9 1.5L21 16"/><path d="M3 16h18v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><circle cx="7.5" cy="16" r="1.1"/><circle cx="16.5" cy="16" r="1.1"/></g>' +
'<g id="i-door" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="12" height="18" rx="1"/><circle cx="13.3" cy="12" r=".9" fill="currentColor" stroke="none"/><path d="M17 21h3M5 21h3M5 3h12"/></g>' +
'<g id="i-sofa" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="7" width="12" height="6" rx="2"/><path d="M3 12v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5"/><path d="M3 15h18"/><path d="M5 18v2M19 18v2"/></g>' +
'<g id="i-stove" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="1.5"/><circle cx="8.5" cy="10" r="1.6"/><circle cx="15.5" cy="10" r="1.6"/><path d="M7 16h10"/></g>' +
'<g id="i-cabinet" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 3v18"/><circle cx="9.3" cy="12" r=".6" fill="currentColor" stroke="none"/><circle cx="14.7" cy="12" r=".6" fill="currentColor" stroke="none"/></g>' +
'<g id="i-table" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="4" rx="1"/><path d="M6 11v8M18 11v8"/></g>' +
'<g id="i-bed" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 19v2M21 19v2"/><rect x="5" y="11" width="6" height="4" rx="1"/><path d="M11 13h10"/></g>' +
'<g id="i-bell" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a5 5 0 0 0-5 5v3l-1.5 3h13L17 11V8a5 5 0 0 0-5-5z"/><path d="M10 18a2 2 0 0 0 4 0"/></g>' +
'<g id="i-book" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V4c-3-1-6-.5-8 1z"/><path d="M12 5v13"/></g>' +
'<g id="i-path" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><path d="M3 12l4-4M3 12l4 4"/><path d="M21 12l-4-4M21 12l-4 4"/></g>' +
'<g id="i-frame" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M8 14l2.5-3 2 2.2L16 9.5l2 3.5"/></g>' +
'<g id="i-balcony" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h16"/><path d="M4 9v10M20 9v10"/><path d="M7 12v7M10.3 12v7M13.7 12v7M17 12v7"/></g>' +
'<g id="i-bulb" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.2 11.1c.4.3.7.8.7 1.3V16h5v-.6c0-.5.3-1 .7-1.3A6 6 0 0 0 12 3z"/></g>' +
'<g id="i-curtain" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16"/><path d="M7 4c0 6-2 9-2 16M12 4c1.5 6 .5 9 0 16M17 4c0 6 2 9 2 16"/></g>' +
'<g id="i-ac" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="6" rx="2"/><path d="M6 15v2M10 15v3M14 15v2M18 15v3"/></g>' +
'<g id="i-gate" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V7l9-4 9 4v14"/><path d="M3 21h18"/><path d="M9 21v-7h6v7"/></g>' +
'<g id="i-shield" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/></g>' +
'<g id="i-vacuum" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="7"/><circle cx="12" cy="13" r="2"/><path d="M12 6V3"/></g>' +
'<g id="i-fan" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.4"/><path d="M12 10.6C10 8 8.5 5.5 10 3.5 11.5 1.5 14 3 12 10.6zM13.4 12C16 10 18.5 8.5 20.5 10 22.5 11.5 21 14 13.4 12zM12 13.4C14 16 15.5 18.5 14 20.5 12.5 22.5 10 21 12 13.4zM10.6 12C8 14 5.5 15.5 3.5 14 1.5 12.5 3 10 10.6 12z"/></g>' +
'<g id="i-tree" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-6"/><path d="M12 15c-4 0-6-2.5-6-5.5S8.5 4 12 3c3.5 1 6 3.5 6 6.5S16 15 12 15z"/></g>' +
'<g id="i-tv" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/></g>' +
'<g id="i-drop" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3.5 4.5 6 7.4 6 10.5a6 6 0 0 1-12 0C6 10.4 8.5 7.5 12 3z"/></g>' +
'<g id="i-power" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></g>' +
'<g id="i-moon" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></g>' +
'<g id="i-cctv" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="14" height="10" rx="2"/><circle cx="9" cy="12" r="2.6"/><path d="M16 10.5l5-2.5v9l-5-2.5"/></g>' +
'<g id="i-washer" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16"/><circle cx="12" cy="14" r="4"/><path d="M9.6 14.6c.8-.9 1.7-.9 2.4 0s1.6.9 2.4 0"/><circle cx="7" cy="5.5" r=".6" fill="currentColor" stroke="none"/></g>' +
'<g id="i-dryer" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16"/><circle cx="12" cy="14" r="4"/><path d="M12 11.5c-1 1-1 2 0 3s1 1.600 0 2.500"/><circle cx="7" cy="5.5" r=".6" fill="currentColor" stroke="none"/></g>' +
'<g id="i-away" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="3"/><path d="M5 21c0-4 3-6 7-6s7 2 7 6"/><path d="M18 3l3 3m0-3l-3 3"/></g>' +
'</defs></svg>' +
'</div>';
  }
}
customElements.define("floor-console-card", FloorConsoleCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: "floor-console-card", name: "Floor Console", description: "Per-floor home control console built from the HA registries" });
