var FCC_FONT_LINK = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap">';
var FCC_SYS_FONTS = { "font-display": 'ui-sans-serif,system-ui,sans-serif', "font-body": 'ui-sans-serif,system-ui,sans-serif', "font-mono": 'ui-monospace,SFMono-Regular,Menlo,monospace' };
var FCC_THEMES = {
  walnut: { fonts: FCC_FONT_LINK, vars: { "bg": "#130d07", "surface": "#1d150c", "surface-2": "#271d12", "sheet-end": "#19120a", "line": "rgba(205,163,86,0.20)", "fg": "#f1e7d6", "fg-dim": "#a89a82", "accent": "#caa15a", "accent-strong": "#eec07c", "on": "#8ab98f", "info": "#8ca3b8", "alert": "#d97a55", "scrim": "rgba(6,4,2,0.6)", "font-display": '"Fraunces",ui-serif,Georgia,serif', "font-body": '"Manrope",ui-sans-serif,system-ui,sans-serif', "font-mono": '"JetBrains Mono",ui-monospace,monospace', "color-scheme": "dark" } },
  slate: { fonts: "", vars: Object.assign({ "bg": "#0f141a", "surface": "#161d26", "surface-2": "#1d2733", "sheet-end": "#121922", "line": "rgba(140,170,200,0.20)", "fg": "#e6edf5", "fg-dim": "#8c9bad", "accent": "#5aa9e6", "accent-strong": "#8cc8f5", "on": "#7fc99a", "info": "#8ca3b8", "alert": "#e0745a", "scrim": "rgba(3,6,10,0.6)", "color-scheme": "dark" }, FCC_SYS_FONTS) },
  light: { fonts: "", vars: Object.assign({ "bg": "#f1f3f6", "surface": "#ffffff", "surface-2": "#f7f8fa", "sheet-end": "#eaedf2", "line": "rgba(20,35,60,0.13)", "fg": "#1b2430", "fg-dim": "#6b7686", "accent": "#2f7de1", "accent-strong": "#1b5fc0", "on": "#2e9e5b", "info": "#5b7a99", "alert": "#d9482b", "scrim": "rgba(15,25,40,0.35)", "color-scheme": "light" }, FCC_SYS_FONTS) },
  "walnut-grey": { fonts: FCC_FONT_LINK, vars: { "bg": "#141211", "surface": "#1e1b19", "surface-2": "#292522", "sheet-end": "#1a1816", "line": "rgba(190,172,148,0.18)", "fg": "#ece7df", "fg-dim": "#a29c92", "accent": "#b99d6e", "accent-strong": "#dcc28f", "on": "#8fb596", "info": "#8c9fb2", "alert": "#d3805e", "scrim": "rgba(8,7,6,0.6)", "font-display": '"Fraunces",ui-serif,Georgia,serif', "font-body": '"Manrope",ui-sans-serif,system-ui,sans-serif', "font-mono": '"JetBrains Mono",ui-monospace,monospace', "color-scheme": "dark" } },
  "walnut-grey-light": { fonts: FCC_FONT_LINK, vars: { "bg": "#f1efec", "surface": "#ffffff", "surface-2": "#f6f4f1", "sheet-end": "#eae7e2", "line": "rgba(58,52,44,0.16)", "fg": "#2b2824", "fg-dim": "#77716a", "accent": "#94753f", "accent-strong": "#775a2a", "on": "#3f8f55", "info": "#566f8a", "alert": "#c4552e", "scrim": "rgba(25,22,18,0.35)", "font-display": '"Fraunces",ui-serif,Georgia,serif', "font-body": '"Manrope",ui-sans-serif,system-ui,sans-serif', "font-mono": '"JetBrains Mono",ui-monospace,monospace', "color-scheme": "light" } },
  "walnut-light": { fonts: FCC_FONT_LINK, vars: { "bg": "#f4f1ec", "surface": "#ffffff", "surface-2": "#f7f4ef", "sheet-end": "#efebe4", "line": "rgba(60,50,30,0.18)", "fg": "#2a241a", "fg-dim": "#7a705f", "accent": "#a8741a", "accent-strong": "#8a5c0e", "on": "#3f8f55", "info": "#4f7191", "alert": "#c4552e", "scrim": "rgba(30,25,15,0.35)", "font-display": '"Fraunces",ui-serif,Georgia,serif', "font-body": '"Manrope",ui-sans-serif,system-ui,sans-serif', "font-mono": '"JetBrains Mono",ui-monospace,monospace', "color-scheme": "light" } },
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
    "all_off": "全部关闭",
    "all_off_confirm": "再点一次确认关闭",
    "all_fans": "全部风扇",
    "all_ac": "全部空调",
    "on": "开启",
    "off": "关闭",
    "gate_on": "已开启",
    "gate_off": "已关闭",
    "gate_btn_on": "关闭",
    "gate_confirm": "再点确认开启",
    "zone_cam": "{z}监控",
    "controls": "控制",
    "group_n_on": "{n} 项已开启",
    "group_none_on": "全部关闭",
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
    "vacuum_error": "{name} 故障",
    "vacuum_paused": "{name}已暂停",
    "vs_docked": "已回充",
    "vs_cleaning": "清扫中",
    "vs_returning": "回充中",
    "vs_idle": "待命",
    "vs_paused": "已暂停",
    "vs_error": "故障",
    "away": "离家",
    "left_on": "{label}未关",
    "armed_home": "在家布防",
    "armed_away": "外出布防",
    "zone_detected": "{z}侦测到人",
    "zone_vehicle": "{z}侦测到车辆",
    "zone_tap": "点击查看{z}画面",
    "hint_pick": "点击选择房间",
    "area_btn": "区域",
    "all_areas": "全部区域",
    "power": "电源",
    "sleep": "睡眠模式",
    "tap_toggle": "点击切换",
    "security": "安防",
    "hold_open": "按住开启",
    "visitor_bar": "有访客按门铃",
    "visitor_tap": "点击查看访客画面",
    "gate_alert_bar": "大门已开启",
    "gate_alert_tap": "点击关闭大门",
    "gate_cam": "前门",
    "more_items": "… 还有 {n} 项",
    "alerts_chip": "↑ 还有 {n} 项提醒",
    "map_chip": "↓ 继续滑动返回地图",
    "areas_chip": "↓ 继续滑动返回区域",
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
    "all_off": "Turn all off",
    "all_off_confirm": "Tap again to confirm",
    "all_fans": "All fans",
    "all_ac": "All A/C",
    "on": "On",
    "off": "Off",
    "gate_on": "Open",
    "gate_off": "Closed",
    "gate_btn_on": "Close",
    "gate_confirm": "Tap again to open",
    "zone_cam": "{z} camera",
    "controls": "Controls",
    "group_n_on": "{n} on",
    "group_none_on": "All off",
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
    "vacuum_error": "{name} fault",
    "vacuum_paused": "{name} paused",
    "vs_docked": "Docked",
    "vs_cleaning": "Cleaning",
    "vs_returning": "Returning",
    "vs_idle": "Idle",
    "vs_paused": "Paused",
    "vs_error": "Error",
    "away": "Away",
    "left_on": "{label} still on",
    "armed_home": "Armed home",
    "armed_away": "Armed away",
    "zone_detected": "Person at {z}",
    "zone_vehicle": "Vehicle at {z}",
    "zone_tap": "Tap to view {z}",
    "hint_pick": "Tap to pick a room",
    "area_btn": "Areas",
    "all_areas": "All areas",
    "power": "Power",
    "sleep": "Sleep mode",
    "tap_toggle": "Tap to toggle",
    "security": "Security",
    "hold_open": "Hold to open",
    "visitor_bar": "Someone rang the doorbell",
    "visitor_tap": "Tap to see the visitor",
    "gate_alert_bar": "Gate is open",
    "gate_alert_tap": "Tap to close the gate",
    "gate_cam": "Front door",
    "more_items": "… {n} more",
    "alerts_chip": "↑ {n} alerts",
    "map_chip": "↓ Keep scrolling for the map",
    "areas_chip": "↓ Keep scrolling for areas",
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

// ---- floor plan ----------------------------------------------------------
// Draws the card's `floorplan` config as an oblique 3D plan: floors stay
// square and walls stand up, leaning by `lean` per `wall_height`, so a wall's
// top is drawn shifted up-left by its height. Rooms are on the upper storey
// (raised by `storey`) unless `ground: true`. Coordinates are plan units at
// any scale; `view` is the visible box [x, y, w, h]. Returns the SVG markup
// plus where each area's icon goes (as fractions of the view box).
function fccFloorplan(fp) {
  var H = fp.wall_height || 26, DX = fp.lean != null ? fp.lean : -8, T = fp.wall || 6, E = fp.storey || 0;
  var shift = function (h) { return [DX * h / H, -h]; };
  var LIFT = shift(E);
  var mv = function (q, o) { return [q[0] + o[0], q[1] + o[1]]; };
  var key2 = function (a, b) { return [String(a), String(b)].sort().join("|"); };
  var pts = function (a) { return a.map(function (p) { return Math.round(p[0] * 10) / 10 + "," + Math.round(p[1] * 10) / 10; }).join(" "); };
  var P = function (cls, a, extra) { return '<polygon class="' + cls + '" points="' + pts(a) + '"' + (extra || "") + "/>"; };
  var Ln = function (cls, a, b) { return '<line class="' + cls + '" x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '"/>'; };
  var esc = function (s) { return String(s).replace(/"/g, "&quot;"); };
  var setOf = function (list) { var s = {}; (list || []).forEach(function (l) { s[key2(l[0], l[1])] = 1; }); return s; };
  var OPEN = setOf(fp.open), INTERNAL = setOf(fp.partitions);
  var view = [-DX, H], faces = function (n) { return n[0] * view[0] + n[1] * view[1] > 0; };
  var rooms = fp.rooms || [];

  // walls of one level, painted lowest layer first, back to front within a layer
  function walls() {
    var items = [], seen = {};
    function add(a, b, h, t, layer) {
      h = h || H; t = t || T;
      var k0 = key2(a, b);
      if (h === H && INTERNAL[k0]) { h = fp.partition_height || 7; t = 3; layer = h; }
      if (layer == null) layer = h;
      var k = k0 + "|" + h;
      if (seen[k] || (h === H && OPEN[k0])) return;
      seen[k] = 1;
      items.push({ a: a, b: b, h: h, t: t, layer: layer, y: Math.max(a[1], b[1]), hz: Math.abs(a[0] - b[0]) > Math.abs(a[1] - b[1]) ? 1 : 0 });
    }
    function block(it) {
      var a = it.a, b = it.b, e = it.t / 2, o = shift(it.h), U = function (q) { return mv(q, o); };
      var len = Math.hypot(b[0] - a[0], b[1] - a[1]), d = [(b[0] - a[0]) / len, (b[1] - a[1]) / len], n = [-d[1], d[0]];
      // footprint, extended by half a thickness at both ends so corners close
      var A = [a[0] - d[0] * e, a[1] - d[1] * e], B = [b[0] + d[0] * e, b[1] + d[1] * e];
      var off = function (q, k) { return [q[0] + n[0] * e * k, q[1] + n[1] * e * k]; };
      var q = [off(A, -1), off(B, -1), off(B, 1), off(A, 1)], f = "";
      var face = function (p, r, nn) { f += P(Math.abs(nn[1]) >= Math.abs(nn[0]) ? "f-wf" : "f-ws", [p, r, U(r), U(p)]); };
      if (faces(n)) face(q[3], q[2], n); else face(q[0], q[1], [-n[0], -n[1]]);
      // thin railings butt into walls: no end faces
      if (it.t > 3) { if (faces(d)) face(q[1], q[2], d); else face(q[0], q[3], [-d[0], -d[1]]); }
      return { f: f, c: P("f-wt", q.map(U)) };
    }
    return {
      add: add, items: items,
      line: function (p, h, t, layer, closed) { for (var i = 0; i < p.length - (closed ? 0 : 1); i++) add(p[i], p[(i + 1) % p.length], h, t, layer); },
      draw: function () {
        var layers = [];
        items.forEach(function (it) { if (layers.indexOf(it.layer) < 0) layers.push(it.layer); });
        return layers.sort(function (a, b) { return a - b; }).map(function (L) {
          var f = "", c = "";
          items.filter(function (it) { return it.layer === L; }).sort(function (p, q) { return p.y - q.y || p.hz - q.hz; }).forEach(function (it) {
            var r = it.svg ? { f: it.svg(), c: "" } : block(it);
            f += r.f; c += r.c;
          });
          return f + c;
        }).join("");
      }
    };
  }

  // a polyline wall with mitred joints, so its corners meet as one wall
  function mitred(p, h, t) {
    var e = t / 2, o = shift(h), U = function (q) { return mv(q, o); }, out = "";
    var dirs = p.slice(1).map(function (q, i) { var a = p[i], l = Math.hypot(q[0] - a[0], q[1] - a[1]); return [(q[0] - a[0]) / l, (q[1] - a[1]) / l]; });
    var nrm = function (d) { return [-d[1], d[0]]; };
    var off = p.map(function (q, i) {
      var n = [dirs[i - 1], dirs[i]].filter(Boolean).map(nrm);
      var m = [n.reduce(function (s, v) { return s + v[0]; }, 0) / n.length, n.reduce(function (s, v) { return s + v[1]; }, 0) / n.length];
      var ml = Math.hypot(m[0], m[1]); m = [m[0] / ml, m[1] / ml];
      var k = e / (m[0] * n[0][0] + m[1] * n[0][1]);
      return { l: [q[0] + m[0] * k, q[1] + m[1] * k], r: [q[0] - m[0] * k, q[1] - m[1] * k] };
    });
    dirs.forEach(function (d, i) {
      var n = nrm(d), s = faces(n) ? "l" : "r", a = off[i][s], b = off[i + 1][s];
      out += P(Math.abs(n[1]) >= Math.abs(n[0]) ? "f-wf" : "f-ws", [a, b, U(b), U(a)]);
    });
    return out + P("f-wt", off.map(function (x) { return x.l; }).concat(off.slice().reverse().map(function (x) { return x.r; })).map(U));
  }

  function box(p, r, h, top) {
    var U = function (q) { return mv(q, shift(h)); };
    var tl = [p[0] - r, p[1] - r], tr = [p[0] + r, p[1] - r], br = [p[0] + r, p[1] + r], bl = [p[0] - r, p[1] + r];
    return P("f-wf", [bl, br, U(br), U(bl)]) + P("f-ws", [tr, br, U(br), U(tr)]) + P(top || "f-wt", [tl, tr, br, bl].map(U));
  }

  function stairs(r) {
    var s = r.stairs, y0 = s.y[0], y1 = s.y[1], out = "";
    (s.runs || []).forEach(function (run) {
      var a = run[0], b = run[1], n = run[2], s0 = run[3], s1 = run[4], k = Math.max(n, 1), w = (b - a) / k;
      for (var i = 0; i < k; i++) {
        var x = a + i * w, sh = s0 + (s1 - s0) * (k > 1 ? i / (k - 1) : 0);
        out += P("f-step", [[x, y0], [x + w, y0], [x + w, y1], [x, y1]], ' style="fill-opacity:' + sh.toFixed(2) + '"');
        if (n) out += Ln("f-nose", [x, y0], [x, y1]);
      }
    });
    return out;
  }

  function roomSVG(r) {
    var s = '<g class="f-rm" data-room="' + esc(r.id) + '">' + P("f-fl f-" + (r.floor || "room"), r.points);
    (r.patches || []).forEach(function (pa) { s += P("f-" + (pa.fill || "grass"), pa.points); });
    if (r.stairs) s += stairs(r);
    s += P("f-glow", r.points, ' fill="url(#fpG-' + safe(r.id) + ')"');
    // colour accent: an RGB light in colour mode glows as a soft edge along the walls
    // band width follows the room's narrow side, so a small room keeps its white centre
    var xs = r.points.map(function (q) { return q[0]; }), ys = r.points.map(function (q) { return q[1]; });
    var bw = Math.max(10, Math.min(34, 0.4 * Math.min(Math.max.apply(0, xs) - Math.min.apply(0, xs), Math.max.apply(0, ys) - Math.min.apply(0, ys))));
    // layered strokes (vector, no blur raster) fade from the wall into the room
    var layers = "";
    for (var i = 0; i < 14; i++) layers += P("", r.points, ' style="stroke-width:' + (2 * bw * (1 - i / 14)).toFixed(1) + '"');
    return s + '<g class="f-accent" clip-path="url(#fpC-' + safe(r.id) + ')">' + layers + "</g></g>";
  }
  var safe = function (id) { return String(id).replace(/[^a-zA-Z0-9_-]/g, "_"); };
  var hit = function (r) { return P("f-hit", r.points, ' data-area="' + esc(r.area) + '"'); };

  // folding gate: closed = panels in a line across the opening; open = folded
  // into a V at each post, sticking out on the `outside` side
  function gate(g, open) {
    var a = g.a, b = g.b, h = g.height || 14, n = g.panels || 4, out = "";
    var panel = function (p0, p1) {
      out += P("f-gp", [p0, p1, mv(p1, shift(h)), mv(p0, shift(h))]);
      for (var i = 1; i < 5; i++) { var o = shift(h * i / 5); out += Ln("f-gs", mv(p0, o), mv(p1, o)); }
    };
    out += box(a, 4.5, (g.wall || h) + 3);
    var len = Math.hypot(b[0] - a[0], b[1] - a[1]) / n;
    if (!open) {
      for (var i = 0; i < n; i++) panel([a[0] + (b[0] - a[0]) * i / n, a[1] + (b[1] - a[1]) * i / n], [a[0] + (b[0] - a[0]) * (i + 1) / n, a[1] + (b[1] - a[1]) * (i + 1) / n]);
    } else {
      var sx = g.outside === "right" ? 1 : -1;
      [[a, 1], [b, -1]].forEach(function (hd) {
        var hinge = hd[0], dir = hd[1] * (b[1] >= a[1] ? 1 : -1);
        var fold = [hinge[0] + sx * len * 0.97, hinge[1] + dir * len * 0.24], back = [hinge[0], hinge[1] + dir * len * 0.48];
        if (hd[1] > 0) { panel(hinge, fold); panel(fold, back); } else { panel(fold, back); panel(hinge, fold); }
      });
    }
    return out + box(b, 4.5, (g.wall || h) + 3);
  }

  // ground level
  var gr = "";
  (fp.verge || []).forEach(function (p) { gr += P("f-verge", p); });
  (fp.paving || []).forEach(function (p) { gr += P("f-pave", p); });
  if (fp.site) gr += P("f-plinth", fp.site.map(function (q) { return [q[0], q[1] + 12]; })) + P("f-ground", fp.site);
  rooms.filter(function (r) { return r.ground; }).forEach(function (r) { gr += roomSVG(r); });
  if (fp.shadow && E) {
    var so = fp.shadow_offset || [16, 12];
    gr += '<g' + (fp.site ? ' clip-path="url(#fpClip)"' : "") + ">" + P("f-cast", fp.shadow.map(function (q) { return mv(q, so); }), ' filter="url(#fpSoft)"') + "</g>";
  }
  var gw = walls();
  (fp.ground_walls || []).forEach(function (w) {
    if (w.mitre) gr += mitred(w.points, w.height || 8, w.thickness || 5);
    else gw.line(w.points, w.height || 8, w.thickness || 5, w.layer, w.closed);
  });
  gr += gw.draw();
  if (fp.gate) gr += '<g class="f-gate f-gate-closed">' + gate(fp.gate, false) + '</g><g class="f-gate f-gate-open">' + gate(fp.gate, true) + "</g>";
  rooms.filter(function (r) { return r.ground; }).forEach(function (r) { gr += hit(r); });

  // the storey below the upper floor: faces of the house block, posts
  var bk = "";
  if (E) {
    var hs = fp.house || [];
    hs.forEach(function (a, i) {
      var b = hs[(i + 1) % hs.length], n = [b[1] - a[1], a[0] - b[0]];
      if (!faces(n)) return;
      bk += P(Math.abs(n[1]) >= Math.abs(n[0]) ? "f-wf" : "f-ws", [a, b, mv(b, LIFT), mv(a, LIFT)]);
    });
    (fp.posts || []).forEach(function (p) { bk += P("f-ws", [p, [p[0] + 5, p[1]], mv([p[0] + 5, p[1]], LIFT), mv(p, LIFT)]); });
  }

  // upper level
  var up = "";
  if (E) {
    (fp.slab || []).forEach(function (p) { up += P("f-wf", p); });
    (fp.slab_edges || []).forEach(function (s) { var d = shift(-(s.drop || 7)); up += P("f-wf", [s.points[0], s.points[1], mv(s.points[1], d), mv(s.points[0], d)]); });
  }
  rooms.filter(function (r) { return !r.ground; }).forEach(function (r) { up += roomSVG(r); });
  (fp.dashed || []).forEach(function (p) { up += P("f-dash", p); });
  (fp.dividers || []).forEach(function (l) { up += Ln("f-div", [l[0], l[1]], [l[2], l[3]]); });
  var uw = walls();
  rooms.filter(function (r) { return !r.ground && r.walls; }).forEach(function (r) { uw.line(r.points, H, T, null, true); });
  (fp.walls || []).forEach(function (w) { uw.line(w.points, w.height, w.thickness, w.layer, w.closed); });
  (fp.furniture || []).forEach(function (f) {
    var x0 = f.points[0], y0 = f.points[1], x1 = f.points[2], y1 = f.points[3];
    uw.items.push({ layer: H, y: y1, hz: 0, svg: function () {
      var o = shift(f.height || H / 2), U = function (q) { return mv(q, o); }, s = "";
      s += P("f-cupf", [[x0, y1], [x1, y1], U([x1, y1]), U([x0, y1])]) + P("f-cups", [[x1, y0], [x1, y1], U([x1, y1]), U([x1, y0])]);
      s += P("f-cupt", [[x0, y0], [x1, y0], [x1, y1], [x0, y1]].map(U));
      for (var y = y0 + (f.seam || 22); y < y1; y += f.seam || 22) s += Ln("f-cupl", U([x0, y]), U([x1, y]));
      return s;
    } });
  });
  up += uw.draw();
  rooms.filter(function (r) { return !r.ground; }).forEach(function (r) { up += hit(r); });

  // icon spot per area: the centre of all its rooms (only the visible part of a
  // room counts), nudged to the nearest spot clear of the walls; `icons` pins it
  var inside = function (q, p) {
    var c = false;
    for (var i = 0, j = p.length - 1; i < p.length; j = i++) {
      if ((p[i][1] > q[1]) !== (p[j][1] > q[1]) && q[0] < (p[j][0] - p[i][0]) * (q[1] - p[i][1]) / (p[j][1] - p[i][1]) + p[i][0]) c = !c;
    }
    return c;
  };
  var segDist = function (q, a, b) {
    var dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((q[0] - a[0]) * dx + (q[1] - a[1]) * dy) / (dx * dx + dy * dy || 1)));
    return Math.hypot(q[0] - a[0] - t * dx, q[1] - a[1] - t * dy);
  };
  function centre(polys) {
    var A = 0, X = 0, Y = 0;
    polys.forEach(function (p) { p.forEach(function (a, i) { var b = p[(i + 1) % p.length], c = a[0] * b[1] - b[0] * a[1]; A += c; X += (a[0] + b[0]) * c; Y += (a[1] + b[1]) * c; }); });
    var c = [X / (3 * A), Y / (3 * A)], CL = 18;
    var clear = function (q) { return polys.some(function (p) { return inside(q, p) && p.every(function (v, i) { return segDist(q, v, p[(i + 1) % p.length]) >= CL; }); }); };
    if (clear(c)) return c;
    var best = c, bd = 1e9;
    polys.forEach(function (p) {
      var xs = p.map(function (v) { return v[0]; }), ys = p.map(function (v) { return v[1]; });
      for (var x = Math.min.apply(0, xs); x <= Math.max.apply(0, xs); x += 3)
        for (var y = Math.min.apply(0, ys); y <= Math.max.apply(0, ys); y += 3) {
          var d = Math.hypot(x - c[0], y - c[1]);
          if (d < bd && clear([x, y])) { bd = d; best = [x, y]; }
        }
    });
    return best;
  }
  var vb = fp.view || [0, 0, 1000, 600], pins = [], areas = [];
  rooms.forEach(function (r) { if (r.area && areas.indexOf(r.area) < 0) areas.push(r.area); });
  areas.forEach(function (id) {
    var rs = rooms.filter(function (r) { return r.area === id; });
    var c = (fp.icons || {})[id] || centre(rs.map(function (r) { return r.visible || r.points; }));
    if (!rs[0].ground) c = mv(c, LIFT);
    pins.push({ area: id, x: (c[0] - vb[0]) / vb[2], y: (c[1] - vb[1]) / vb[3] });
  });

  var svg = '<svg class="fp-svg" viewBox="' + vb.join(" ") + '" preserveAspectRatio="xMidYMid meet">' +
    '<defs>' + rooms.map(function (r) {
      var c = "rgb(var(--fpg-" + safe(r.id) + ",var(--fp-glow)))";
      return '<radialGradient id="fpG-' + safe(r.id) + '" cx="50%" cy="55%" r="65%"><stop offset="0" style="stop-color:' + c + ';stop-opacity:.6"/><stop offset=".6" style="stop-color:' + c + ';stop-opacity:.22"/><stop offset="1" style="stop-color:' + c + ';stop-opacity:0"/></radialGradient>';
    }).join("") + rooms.map(function (r) { return '<clipPath id="fpC-' + safe(r.id) + '">' + P("", r.points) + "</clipPath>"; }).join("") +
    '<filter id="fpSoft" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="7"/></filter>' +
    (fp.site ? '<clipPath id="fpClip">' + P("", fp.site) + "</clipPath>" : "") + "</defs>" +
    "<g>" + gr + "</g><g>" + bk + '</g><g transform="translate(' + LIFT[0] + " " + LIFT[1] + ')">' + up + "</g></svg>";
  return { svg: svg, view: vb, pins: pins };
}

// A light's colour as [r, g, b, strength 0..1]. `override` (Kelvin or [r, g, b])
// wins; otherwise HA's rgb_color (also set for colour-temperature lights), then
// color_temp_kelvin, then `fallback` for on/off lights (default 4500 K, soft neutral white).
function fccLightColour(st, override, fallback) {
  var a = (st && st.attributes) || {}, k = a.color_temp_kelvin, c = a.rgb_color;
  var bri = a.brightness != null ? Math.max(0.15, a.brightness / 255) : 1;
  if (override != null) { if (Array.isArray(override)) c = override; else { c = null; k = +override; } }
  else if (!(Array.isArray(c) && c.length === 3) && !k) {
    if (Array.isArray(fallback)) c = fallback; else k = +fallback || 4500;
  }
  if (Array.isArray(c) && c.length === 3) return [c[0], c[1], c[2], bri];
  // Tanner Helland's blackbody approximation
  var t = k / 100, r, g, b;
  r = t <= 66 ? 255 : 329.7 * Math.pow(t - 60, -0.1332);
  g = t <= 66 ? 99.47 * Math.log(t) - 161.12 : 288.12 * Math.pow(t - 60, -0.0755);
  b = t >= 66 ? 255 : t <= 19 ? 0 : 138.52 * Math.log(t - 10) - 305.04;
  var cl = function (v) { return Math.max(0, Math.min(255, Math.round(v))); };
  return [cl(r), cl(g), cl(b), bri];
}
// Is the light showing a colour (RGB light in a colour mode), as opposed to white?
function fccIsColour(st, rgb) {
  var mode = st && st.attributes && st.attributes.color_mode;
  if (mode) return ["hs", "rgb", "xy", "rgbw", "rgbww"].indexOf(mode) >= 0 && fccSat(rgb) > 0.25;
  return fccSat(rgb) > 0.45;
}
function fccSat(c) { var mx = Math.max(c[0], c[1], c[2]), mn = Math.min(c[0], c[1], c[2]); return mx ? (mx - mn) / mx : 0; }

// Night: the light's own colour. Day: near-white light on a light floor would be
// invisible, so the colour is pushed away from white along its own direction
// (warm stays warm, cool stays cool), and plain white becomes a cool neutral.
function fccGlowTint(rgb, dark) {
  if (dark) return rgb.map(Math.round);
  var dist = 255 - Math.min(rgb[0], rgb[1], rgb[2]);
  if (dist < 18) return [214, 224, 238];
  var k = Math.min(1.8, Math.max(1, 70 / dist));
  return rgb.map(function (v) { return Math.max(0, Math.round(255 - (255 - v) * k)); });
}

var FCC_FP_LIGHT = { "fp-ground": "#e2dbd0", "fp-plinth": "#c9c0b2", "fp-wall": "#ffffff", "fp-wall-face": "#d6cdbf", "fp-wall-side": "#bdb2a1", "fp-room": "#e9dfcd", "fp-wet": "#d5dadd", "fp-wood": "#e0caab", "fp-terrace": "#dbcdb9", "fp-court": "#ddd4c2", "fp-grass": "#c4d0ab", "fp-verge": "#d6dbc8", "fp-pave": "#bcb8b1", "fp-cast": "rgba(70,55,35,.28)", "fp-stair": "#d9d6d1", "fp-step": "#4f4a44", "fp-line": "#bfb7ab", "fp-gate": "#2e2b29", "fp-gate-slat": "#55504b", "fp-gate-frame": "#f5f3ef", "fp-cup-top": "#b38d66", "fp-cup-face": "#9b7653", "fp-cup-side": "#7e5e41", "fp-glow": "255,190,100", "fp-fan": "#9b4fc8", "fp-ac": "#2e78d2", "fp-media": "#4a4540", "fp-curtain": "#d9a900" };
var FCC_FP_DARK = { "fp-ground": "#252220", "fp-plinth": "#151312", "fp-wall": "#6e665d", "fp-wall-face": "#4a443e", "fp-wall-side": "#38332f", "fp-room": "#37322c", "fp-wet": "#303336", "fp-wood": "#413529", "fp-terrace": "#2e2925", "fp-court": "#2b2723", "fp-grass": "#323d2a", "fp-verge": "#2a3224", "fp-pave": "#22201e", "fp-cast": "rgba(0,0,0,.55)", "fp-stair": "#4a4540", "fp-step": "#000000", "fp-line": "#2a2623", "fp-gate": "#1c1a19", "fp-gate-slat": "#4a4541", "fp-gate-frame": "#a6a199", "fp-cup-top": "#6a5240", "fp-cup-face": "#574334", "fp-cup-side": "#45352a", "fp-glow": "255,180,90", "fp-fan": "#c79cec", "fp-ac": "#78b0ef", "fp-media": "#ddd6cb", "fp-curtain": "#f0cc3e" };

class FloorConsoleCard extends HTMLElement {
  setConfig(config) {
    this._config = config || {};
    if (this._root) { this._applyTheme(); this._fpMount(); }
  }

  // `theme: sun` follows sun.sun (or `sun_entity`): `theme_day` (default
  // light) while the sun is up, `theme_night` (default slate) otherwise
  _themeName() {
    var c = this._config || {};
    var pair = { "sun": ["light", "slate"], "walnut-sun": ["walnut-light", "walnut"], "walnut-grey-sun": ["walnut-grey-light", "walnut-grey"] }[c.theme];
    if (!pair) return c.theme;
    var sun = this._hass && this._hass.states[c.sun_entity || "sun.sun"];
    return sun && sun.state === "above_horizon" ? (c.theme_day || pair[0]) : (c.theme_night || pair[1]);
  }
  _theme() {
    var t = FCC_THEMES[this._themeName()] || FCC_THEMES.walnut;
    var vars = Object.assign({}, t.vars, t.vars["color-scheme"] === "dark" ? FCC_FP_DARK : FCC_FP_LIGHT, this._config.theme_vars || {});
    return { fonts: t.fonts, css: ":root,:host{" + Object.keys(vars).map(function (k) { return "--" + k + ":" + vars[k] + ";"; }).join("") + "}" };
  }
  _applyTheme() {
    var el = this._root.getElementById("themeStyle");
    if (el) el.textContent = this._theme().css;
  }
  getCardSize() { return 12; }

  // Make room for the alert rows: when the content no longer fits the card
  // height (keeping min_gap px below the top list), hide the area button —
  // and in the panel layout the clock/date too. Measured with everything
  // shown, so the result depends on content only (no flapping).
  _fitSoon() {
    if (this._fitQ) return;
    this._fitQ = requestAnimationFrame(function () { this._fitQ = 0; this._fit(); }.bind(this));
  }
  _fit() {
    var app = this._root && this._root.querySelector(".app");
    if (!app) return;
    if (window.ResizeObserver && this._fitEl !== app) {
      if (this._fitRO) this._fitRO.disconnect();
      this._fitRO = this._fitRO || new ResizeObserver(this._fitSoon.bind(this));
      this._fitRO.observe(app);
      this._fitEl = app;
    }
    if (!app.clientHeight) return;
    var H = app.clientHeight, gapPx = (this._config || {}).min_gap != null ? this._config.min_gap : 12;
    var list = this._$("occupancyList"), top = list.scrollTop, cams = Array.prototype.slice.call(list.querySelectorAll(".occcard:not(.leaving) .occcam"));
    var cs = getComputedStyle(app), gap = parseFloat(cs.rowGap) || 0, pad = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    // everything shown at its natural size, as if there were no limits
    app.classList.remove("compact", "page-home");
    app.classList.add("measuring");
    list.style.maxHeight = "";
    cams.forEach(function (cam) { cam.classList.remove("shrunk"); cam.style.removeProperty("--cam-h"); });
    var measure = function () {
      var need = pad, n = 0;
      Array.prototype.forEach.call(app.children, function (c) {
        var k = getComputedStyle(c);
        if (k.display === "none" || k.position === "absolute" || k.position === "fixed") return;
        need += c.offsetHeight + (parseFloat(k.marginTop) || 0) + (parseFloat(k.marginBottom) || 0);
        n++;
      });
      return need + gap * Math.max(0, n - 1) + gapPx;
    };
    var over = measure() - H;
    if (over > 0) {
      // 1) hide the area button (+ clock in the panel layout)
      app.classList.add("compact");
      over = measure() - H;
      // 2) shrink the live view (cropped) down to a minimum height
      if (over > 0 && cams.length) {
        // lowest-priority live view first
        var left = over;
        cams.slice().reverse().forEach(function (cam) {
          if (left <= 0) return;
          var natural = cam.offsetHeight, target = Math.max(120, natural - left);
          if (target < natural) { cam.classList.add("shrunk"); cam.style.setProperty("--cam-h", target + "px"); left -= natural - target; }
        });
        over = measure() - H;
      }
      // 3) whatever is left: the list scrolls, with "… N more"
      if (over > 0) list.style.maxHeight = Math.max(56, list.offsetHeight - over) + "px";
    }
    app.classList.remove("measuring");
    if (app.classList.contains("compact")) { if (this._page === "home") app.classList.add("page-home"); }
    else { this._page = "alerts"; clearTimeout(this._pgTimer); }
    list.scrollTop = top;
    this._occMore();
  }

  // layout: panel (480x480 wall panel): clock, date, people chips, idle return
  _renderPanel() {
    var cfg = this._config || {};
    var head = this._root && this._root.getElementById("panelHead");
    if (!head) return;
    var on = cfg.layout === "panel";
    head.hidden = !on;
    var app = this._root.querySelector(".app");
    if (app) app.style.setProperty("--top-offset", (cfg.top_offset != null ? cfg.top_offset : 22) + "px");
    this._hideHeader();
    if (!on) return;
    var now = new Date(), lang = this._lang() === "zh" ? "zh-CN" : "en-GB";
    var clock = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2);
    var date = now.toLocaleDateString(lang, { month: "short", day: "numeric", weekday: "short" });
    if (this._$("pClock").textContent !== clock) this._$("pClock").textContent = clock;
    if (this._$("pDate").textContent !== date) this._$("pDate").textContent = date;
    var h = this._hass;
    var html = (cfg.people || []).map(function (p) {
      var e = typeof p === "string" ? { entity: p } : p;
      var st = h.states[e.entity];
      var name = e.name || (st && st.attributes && st.attributes.friendly_name) || e.entity;
      return '<div class="person' + (st && st.state === "home" ? " home" : "") + '"><span class="dot"></span>' + name + "</div>";
    }).join("");
    var pp = this._$("pPeople");
    if (pp.innerHTML !== html) pp.innerHTML = html;
  }
  // layout: panel + hide_header: hide HA's toolbar (hui-root) and give its space to the view
  _hideHeader() {
    var want = (this._config || {}).layout === "panel" && (this._config || {}).hide_header === true;
    var root = this._huiRoot;
    if (!root) {
      var n = this;
      while (n && !(n.tagName === "HUI-ROOT")) n = n.parentNode || n.host;
      root = this._huiRoot = n && n.shadowRoot;
    }
    if (!root) return;
    var st = root.getElementById("fcc-hide-header");
    if (want && !st) {
      st = document.createElement("style");
      st.id = "fcc-hide-header";
      st.textContent = ".header{display:none!important}#view{padding-top:0!important;min-height:100vh!important}";
      root.appendChild(st);
    } else if (!want && st) st.remove();
  }
  _idleReset() {
    var sec = (this._config || {}).idle_return;
    if (sec == null) sec = (this._config || {}).layout === "panel" ? 60 : 0;
    clearTimeout(this._idleTimer);
    if (!(sec > 0)) return;
    this._idleTimer = setTimeout(function () { this._closeSheet(); this._setPage("alerts"); }.bind(this), sec * 1000);
  }
  connectedCallback() {
    this._clockTimer = setInterval(function () { if (this._hass) this._renderPanel(); }.bind(this), 15000);
    this._idleFn = this._idleFn || this._idleReset.bind(this);
    ["pointerdown", "touchstart", "keydown"].forEach(function (ev) { this.addEventListener(ev, this._idleFn, { capture: true, passive: true }); }.bind(this));
    this._idleReset();
    this._hideHeader();
  }
  disconnectedCallback() {
    if (this._fitRO) { this._fitRO.disconnect(); this._fitEl = null; }
    var hh = this._huiRoot && this._huiRoot.getElementById("fcc-hide-header");
    if (hh) hh.remove();
    this._huiRoot = null;
    clearInterval(this._clockTimer);
    clearTimeout(this._idleTimer);
    ["pointerdown", "touchstart", "keydown"].forEach(function (ev) { this.removeEventListener(ev, this._idleFn, { capture: true }); }.bind(this));
  }

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
    if (this._themeName() !== this._config.theme && this._themeShown !== this._themeName()) { this._themeShown = this._themeName(); this._applyTheme(); }
    this._render();
    this._renderPanel();
    this._fitSoon();
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
    // a vacuum is "on" while it is out cleaning or heading home
    if (entity_id.indexOf("vacuum.") === 0) return st.state === "cleaning" || st.state === "returning";
    return st.state === "on" || st.state === "open" || st.state === "opening";
  }
  // status text under a pulled-out device tile (vacuums report their real state)
  _devStatus(entity_id) {
    var st = this._hass.states[entity_id];
    if (entity_id.indexOf("vacuum.") === 0 && st) {
      var key = "vs_" + st.state;
      var txt = this._t(key);
      return txt === key ? st.state : txt;
    }
    return this._t(this._isOn(entity_id) ? "on" : "off");
  }
  _toggle(entity_id) {
    var domain = entity_id.split(".")[0];
    if (domain === "vacuum") {
      // tap while cleaning / returning sends it home, otherwise starts a run
      this._svc("vacuum", this._isOn(entity_id) ? "return_to_base" : "start", entity_id);
    } else if (domain === "climate") {
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
    $("fpAll").addEventListener("click", this._openAreaList.bind(this));
    $("fpMap").addEventListener("click", function (e) {
      var t = e.target.closest("[data-area]");
      var a = t && this._AREAS.find(function (x) { return x.id === t.getAttribute("data-area"); });
      if (a) this._openAreaSheet(a, true);
    }.bind(this));
    this._fpMount();
    $("badges").addEventListener("click", function (e) {
      var badge = e.target.closest(".badge[data-list-sensor], .badge[data-power], .badge[data-appl], .badge[data-vac]");
      if (!badge) return;
      if (badge.hasAttribute("data-vac")) { this._moreInfo((this._config || {}).vacuum); return; }
      if (badge.hasAttribute("data-appl")) { this._openApplianceSheet(parseInt(badge.getAttribute("data-appl"), 10)); return; }
      if (badge.hasAttribute("data-power")) { this._openPowerSheet(); return; }
      this._openEntityListSheet(badge.getAttribute("data-list-sensor"), badge.getAttribute("data-list-title"), badge.getAttribute("data-list-icon"));
    }.bind(this));
    $("visitorBtn").addEventListener("click", this._openVisitorSheet.bind(this));
    $("occupancyList").addEventListener("click", function (e) {
      // gate_alert live view: expands to the full camera sheet, gate stays open
      var ex = e.target.closest(".camexp");
      if (ex) {
        this._openCameraSheet(ex.getAttribute("data-cam"), ex.getAttribute("data-label"), { back: null });
        return;
      }
      var btn = e.target.closest(".occupancybtn");
      if (!btn) return;
      // gate_alert top row: one tap closes the open gate, no confirmation
      if (btn.hasAttribute("data-gate")) this._svc("switch", "turn_off", this._config.gate_alert.entity);
      else this._openZoneSheet(btn.getAttribute("data-zone"));
    }.bind(this));
    $("occupancyList").addEventListener("scroll", this._occMore.bind(this), { passive: true });
    $("occupancyList").addEventListener("animationend", function (e) {
      var el = e.target;
      if (el.classList && el.classList.contains("leaving")) { el.remove(); this._occTidy(); }
      else if (el.classList) el.classList.remove("enter");
      this._fitSoon();
    }.bind(this));
    $("occupancyList").addEventListener("scroll", function () { this._lastScroll = Date.now(); }.bind(this), { passive: true });
    $("pgChip").addEventListener("click", function () { this._setPage("alerts"); }.bind(this));
    $("mapChip").addEventListener("click", function () { this._setPage("home"); }.bind(this));
    this._pageGestures();
    $("occMore").addEventListener("click", function () {
      var l = $("occupancyList");
      l.scrollBy({ top: Math.max(60, l.clientHeight * 0.8), behavior: "smooth" });
    });
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

  _icon(id) {
    if (String(id).indexOf(":") > 0) return '<ha-icon icon="' + id + '"></ha-icon>';
    return '<svg viewBox="0 0 24 24"><use href="#' + id + '"/></svg>';
  }

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
    var base = { light: "i-bulb", fan: "i-fan", climate: "i-ac", media_player: "i-tv", cover: "i-curtain", vacuum: "i-vacuum" }[d] || "i-bulb";
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
    return { fan: this._t("fan"), climate: this._t("climate"), media_player: this._t("tv"), vacuum: this._t("vacuum") }[d] || "";
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
      var da = (ents[a] || {}).gate ? 0.5 : rank[a.split(".")[0]], db = (ents[b] || {}).gate ? 0.5 : rank[b.split(".")[0]];
      if (da == null) da = 9;
      if (db == null) db = 9;
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
      if (o.gate) { rows.push({ icon: o.icon || "i-gate", label: nameOf(id), gate: true, entity: id, cam: o.cam, trigger: o.trigger }); return; }
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
        rows = ac.rows.map(function (r) {
          var o = Object.assign({}, r);
          // a configured entity row without `sub` gets the same default as an auto row
          if (o.entity && o.sub == null && h.states[o.entity]) o.sub = self._subFor(o.entity, o.entity.split(".")[0]);
          return o;
        });
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
        devCols: ac.device_columns || cfg.device_columns || 3,
        icon: ac.icon || (cfg.ha_icons && a.icon) || (hint && hint[1]) || "i-door",
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

  // what's running in an area besides its lights (the map's corner dots, the area list's dot)
  _areaRunning(a) {
    var on = this._isOn.bind(this), cfg = this._config || {}, h = this._hass, out = { fan: false, ac: false, media: false, curtain: false };
    a.rows.forEach(function (r) {
      if (r.curtain) { if (r.entities.some(on)) out.curtain = true; return; }
      if (!r.entity || !on(r.entity)) return;
      var d = r.entity.split(".")[0];
      if (d === "fan") out.fan = true;
      else if (d === "climate") out.ac = true;
      else if (d === "media_player") out.media = true;
    });
    if (this._applianceRows(a.id).some(function (r) { return this._applianceActive(cfg.appliances[r.appliance]); }.bind(this))) out.media = true;
    return out;
  }
  _areaLive(a) { var r = this._areaRunning(a); return r.fan || r.ac || r.media || r.curtain; }

  // ---- floor plan ---------------------------------------------------------
  _fpMount() {
    var fp = (this._config || {}).floorplan, map = this._$ && this._$("fpMap");
    if (!map) return;
    this._root.querySelector(".radialzone").classList.toggle("has-fp", !!fp);
    this._$("fpAll").hidden = !(fp && fp.all_areas);
    if (!fp) { map.innerHTML = ""; this._fp = null; return; }
    if (this._fp && this._fp.src === fp) return;
    var r = fccFloorplan(fp);
    this._fp = { src: fp, lit: {}, pins: {} };
    map.style.aspectRatio = r.view[2] + " / " + r.view[3];
    // tap_radius: only a circle of that many px around each icon is tappable, not the whole room
    map.classList.toggle("pin-only", fp.tap_radius > 0);
    map.style.setProperty("--fp-tap", (fp.tap_radius > 14 ? fp.tap_radius - 14 : 0) + "px");
    map.innerHTML = r.svg + '<div class="fp-pins">' + r.pins.map(function (p) {
      return '<button class="fp-pin" data-area="' + p.area + '" style="left:' + (p.x * 100).toFixed(2) + '%;top:' + (p.y * 100).toFixed(2) + '%"><span class="fp-ic"></span>' +
        '<i class="fp-d fp-d-fan"></i><i class="fp-d fp-d-ac"></i><i class="fp-d fp-d-media"></i><i class="fp-d fp-d-curtain"></i></button>';
    }).join("") + "</div>";
    if (this._hass) this._fpRender();
  }
  // live state: a room glows while any of its lights is on (`lights` maps a light
  // to its room; unmapped lights light the area's first room), corner dots per
  // area, and the gate drawn open / closed
  _fpRender() {
    var fp = this._fp, map = this._$("fpMap");
    if (!fp) return;
    var cfg = this._config.floorplan, lights = cfg.lights || {}, rooms = cfg.rooms || [], lit = {}, self = this;
    var areas = this._AREAS, svg = map.querySelector(".fp-svg");
    var dark = ((FCC_THEMES[this._themeName()] || {}).vars || {})["color-scheme"] === "dark";
    areas.forEach(function (a) {
      var first = rooms.find(function (r) { return r.area === a.id; });
      if (!first) return;
      a.rows.forEach(function (r) {
        if (!r.entity || r.entity.indexOf("light.") !== 0 || !self._isOn(r.entity)) return;
        var id = lights[r.entity] || first.id, st = self._hass.states[r.entity];
        var c = fccLightColour(st, (cfg.light_colours || {})[r.entity], cfg.default_light);
        var room = lit[id] = lit[id] || { white: { r: 0, g: 0, b: 0, w: 0, bri: 0 }, accent: { r: 0, g: 0, b: 0, w: 0, bri: 0 } };
        // white lights light the floor; RGB lights in colour mode add a coloured edge
        var m = fccIsColour(st, c) ? room.accent : room.white;
        m.r += c[0] * c[3]; m.g += c[1] * c[3]; m.b += c[2] * c[3]; m.w += c[3]; m.bri = Math.max(m.bri, c[3]);
      });
    });
    var colour = function (m) { return fccGlowTint([m.r / m.w, m.g / m.w, m.b / m.w], dark); };
    map.querySelectorAll(".f-rm").forEach(function (g) {
      var id = g.getAttribute("data-room"), room = lit[id], key = "--fpg-" + id.replace(/[^a-zA-Z0-9_-]/g, "_");
      g.classList.toggle("lit", !!room);
      g.classList.toggle("acc", !!(room && room.accent.w));
      if (!room) return;
      var base = room.white.w ? room.white : room.accent, glow = g.querySelector(".f-glow");
      svg.style.setProperty(key, colour(base).join(","));
      // a dimmed light glows softer; a strip alone only tints the floor faintly
      glow.style.opacity = ((0.45 + 0.55 * base.bri) * (room.white.w ? 1 : 0.4)).toFixed(2);
      if (room.accent.w) {
        var acc = g.querySelector(".f-accent");
        acc.style.stroke = "rgb(" + colour(room.accent).join(",") + ")";
        acc.style.opacity = ((room.white.w ? 0.3 : 0.45) + 0.35 * room.accent.bri).toFixed(2);
      }
    });
    map.querySelectorAll(".fp-pin").forEach(function (pin) {
      var id = pin.getAttribute("data-area"), a = areas.find(function (x) { return x.id === id; });
      pin.hidden = !a;
      if (!a) return;
      if (pin.getAttribute("data-icon") !== a.icon) { pin.setAttribute("data-icon", a.icon); pin.querySelector(".fp-ic").innerHTML = self._icon(a.icon); pin.setAttribute("aria-label", a.name); }
      var run = self._areaRunning(a);
      Object.keys(run).forEach(function (k) { pin.classList.toggle("run-" + k, run[k]); });
      var am = rooms.filter(function (r) { return r.area === id && lit[r.id]; }).map(function (r) { var x = lit[r.id]; return x.white.w ? x.white : x.accent; });
      pin.classList.toggle("lit", am.length > 0);
      if (am.length) pin.style.setProperty("--fp-glow", colour(am.reduce(function (s, m) { return { r: s.r + m.r, g: s.g + m.g, b: s.b + m.b, w: s.w + m.w }; }, { r: 0, g: 0, b: 0, w: 0 })).join(","));
    });
    if (svg && cfg.gate) svg.classList.toggle("gate-open", this._isOn(cfg.gate.entity));
  }
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

  // Appliances belonging to an area (config `area`, else the area of the status
  // sensor / its device) become tappable rows at the top of that area's sheet.
  _applianceRows(areaId) {
    var h = this._hass, out = [];
    ((this._config || {}).appliances || []).forEach(function (a, i) {
      var e = a.status && h.entities && h.entities[a.status], dev = e && e.device_id && h.devices && h.devices[e.device_id];
      var aid = a.area || (e && e.area_id) || (dev && dev.area_id);
      if (aid === areaId && h.states[a.status]) out.push({ appliance: i, icon: a.icon || "i-washer", label: a.label, sub: this._applianceSubText(a) });
    }.bind(this));
    return out;
  }
  _applianceSubText(a) {
    var parts = [this._applianceStatusText(a)];
    var rem = a.remaining && this._hass.states[a.remaining], t = rem ? Date.parse(rem.state) : NaN;
    if (!isNaN(t) && t > Date.now()) {
      var min = Math.max(1, Math.ceil((t - Date.now()) / 60000));
      parts.push(min >= 60 ? this._t("left_hm", { h: Math.floor(min / 60), m: min % 60 }) : this._t("left_m", { m: min }));
    }
    return parts.join(" · ");
  }
  _applianceActive(a) {
    var st = a.status && this._hass.states[a.status];
    return !!st && (a.idle || ["power_off", "initial", "unavailable", "unknown"]).indexOf(st.state) === -1;
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
  _openApplianceSheet(idx, fromArea) {
    var a = ((this._config || {}).appliances || [])[idx];
    if (!a) return;
    var rows = a.power && this._hass.states[a.power] ? [{ icon: "i-power", label: this._t("power"), sub: "", entity: a.power }] : [];
    this._openSheet({ name: a.label, icon: a.icon || "i-washer", status: this._applianceStatusText(a), rows: rows,
      back: fromArea && this._lastArea ? function () { this._openAreaSheet(this._lastArea); }.bind(this) : false });
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
    var groups = [];
    secs.forEach(function (sec) {
      var parts = [sec];
      sharedOrder.forEach(function (k) { if (shared[k].after === sec.name) parts.push(shared[k]); });
      parts.forEach(function (x) { if (x.rows.length) groups.push(x); });
    });
    // Two rows per line only if some area actually fills a second column;
    // otherwise every row spans the full sheet width.
    var lineCls = groups.some(function (x) { return x.rows.length > 1; }) ? "row-line" : "row-line solo";
    groups.forEach(function (x) {
      x.rows.forEach(function (r) { matched[r.entity] = true; });
      var rowsH = x.rows.map(this._rowHTML.bind(this));
      var lines = rowsH.filter(function (_, i) { return i % 2 === 0; }).map(function (r, i) { return r + (rowsH[2 * i + 1] || ""); });
      html += '<div class="row-section-label">' + x.name + '</div>' + lines.map(function (l) { return '<div class="' + lineCls + '">' + l + '</div>'; }).join("");
    }.bind(this));
    var leftover = ids.filter(function (id) { return !matched[id]; });
    if (leftover.length) {
      html += '<div class="row-section-label">' + this._t("other") + '</div>' + leftover.map(function (id) {
        var es = this._hass.states[id];
        return this._rowHTML({ icon: icon, label: (es && es.attributes && es.attributes.friendly_name) || id, sub: id, entity: id });
      }.bind(this)).join("");
    }
    body.innerHTML = (html ? '<div class="list-bar"><button class="alloff" id="allOff">' + this._icon("i-power") + '<span>' + this._t("all_off") + '</span><span class="n">' + ids.length + '</span></button></div>' : "") + html || '<div class="note">' + this._t("nothing_on") + '</div>';
    this._wireRows(body);
    var allOff = body.querySelector("#allOff");
    if (allOff) {
      var self = this, armed = null;
      allOff.addEventListener("click", function () {
        var label = allOff.querySelector("span");
        if (!armed) {
          // two taps: the first arms the button, the second turns everything off
          label.textContent = self._t("all_off_confirm");
          allOff.classList.add("armed");
          armed = setTimeout(function () { armed = null; label.textContent = self._t("all_off"); allOff.classList.remove("armed"); }, 3000);
          return;
        }
        clearTimeout(armed);
        var by = {};
        ids.forEach(function (id) { var d = id.split(".")[0]; (by[d] = by[d] || []).push(id); });
        Object.keys(by).forEach(function (d) {
          var svc = { cover: "close_cover", vacuum: "return_to_base" }[d] || "turn_off";
          self._svc(d, svc, by[d]);
        });
        self._closeSheet();
      });
    }
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
    if (r.appliance != null) {
      // Washer / dryer: a tile like the fan / air-con ones; tap opens its sheet.
      var ap = ((this._config || {}).appliances || [])[r.appliance];
      return '<div class="dev-tile appl-tile' + (ap && this._applianceActive(ap) ? " on" : "") + '" data-appl-row="' + r.appliance + '"><button class="dev-main">' + this._icon(r.icon) +
        '<span class="dl"><b>' + r.label + '</b><span class="ds">' + r.sub + '</span></span></button></div>';
    }
    if (r.cgroup) {
      var gids = r.rows.map(function (x) { return x.entity; }), gon = gids.filter(function (id) { return this._isOn(id); }.bind(this)).length;
      return '<div class="cgroup" data-ids="' + gids.join(",") + '"><div class="row cg-head' + (gon ? " on" : "") + '"><div class="ricon">' + this._icon(r.icon) + '</div>' +
        '<div class="rlabel"><b>' + r.label + '</b><span class="cs">' + this._groupStatus(gon) + '</span></div>' +
        '<svg class="chev cg-chev" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>' +
        '<div class="cg-body" hidden>' + r.rows.map(this._rowHTML.bind(this)).join("") + '</div></div>';
    }
    var on = this._isOn(r.entity);
    if (r.dev) {
      // Fan / air-con pulled out of the list: tap toggles, "⋯" opens more-info.
      return '<div class="dev-tile' + (on ? " on" : "") + '" data-entity="' + r.entity + '"><button class="dev-main">' + this._icon(r.icon) +
        '<span class="dl"><b>' + r.devLabel + '</b><span class="ds">' + this._devStatus(r.entity) + '</span></span></button>' +
        '<button class="dev-more" aria-label="' + this._t("details") + '">⋯</button></div>';
    }
    if (r.gate) {
      // Gate control: the row shows the entity's state (icon highlight +
      // status text); the button toggles `trigger` (defaults to `entity`,
      // e.g. a template switch that pulses the relay). Only the button
      // toggles; tapping the name opens the gate camera.
      return '<div class="row gate' + (on ? " on" : "") + '" data-entity="' + r.entity + '" data-trigger="' + (r.trigger || r.entity) + '" data-gatecam="' + (r.cam || "") + '"' + (r.nonav ? ' data-nonav="1"' : "") + '><div class="ricon">' + this._icon(r.icon) + '</div>' +
        '<div class="rlabel"><b>' + r.label + '</b><span class="gs">' + this._t(on ? "gate_on" : "gate_off") + '</span></div>' +
        '<button class="gate-btn">' + this._icon("i-power") + '<span class="gl">' + this._t(on ? "gate_btn_on" : "gate_btn_off") + '</span></button></div>';
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

  _groupStatus(n) { return n ? this._t("group_n_on", { n: n }) : this._t("group_none_on"); }

  // THE gate button logic, shared by every place that has one (area list, camera
  // pop-ups, whatever comes next): opening takes a second tap (the button turns
  // red and reads "tap again" for 4 s), closing is one tap.
  _gateToggle(row, entity, trigger) {
    var self = this, gl = row.querySelector(".gate-btn .gl");
    if (!this._isOn(entity)) {
      if (!row._armed) {
        row._armed = true;
        gl.textContent = this._t("gate_confirm");
        row.classList.add("armed");
        clearTimeout(row._armT);
        row._armT = setTimeout(function () { row._armed = false; row.classList.remove("armed"); gl.textContent = self._t(self._isOn(entity) ? "gate_btn_on" : "gate_btn_off"); }, 4000);
        return;
      }
      row._armed = false;
      row.classList.remove("armed");
      clearTimeout(row._armT);
      gl.textContent = this._t("gate_btn_off");
    }
    var opening = !this._isOn(entity);
    this._toggle(trigger);
    // opened from a list (no video of its own): the home screen's alert card
    // shows the gate camera now, so just get out of the way
    if (opening && !row.hasAttribute("data-nonav")) this._closeSheet();
  }

  // expandable control: tap the header to open / close
  _wireGroups(container) {
    var self = this;
    container.querySelectorAll(".cgroup").forEach(function (g) {
      g.querySelector(".cg-head").addEventListener("click", function () {
        var body = g.querySelector(".cg-body"), open = body.hidden;
        body.hidden = !open;
        g.classList.toggle("open", open);
        // members are wired with the sheet; just bring them into view
        if (open && body.lastElementChild) body.lastElementChild.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    });
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
      if (row.hasAttribute("data-appl-row")) {
        row.addEventListener("click", function () { self._openApplianceSheet(parseInt(row.getAttribute("data-appl-row"), 10), true); });
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
          self._gateToggle(row, gateEntity, trigger);
        });
        row.addEventListener("click", function () {
          if (row.hasAttribute("data-nonav")) return;
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
    this._idleReset();
    var wasOpen = this._$("scrim").classList.contains("open");
    var sheetEl = this._$("sheet");
    if (this._hAnim) { this._hAnim.cancel(); this._hAnim = null; sheetEl.classList.remove("morphing"); }
    var h0 = wasOpen ? sheetEl.getBoundingClientRect().height : 0;
    this._currentArea = null;
    this._applOpen = null;
    var $ = this._$;
    $("sheetBack").hidden = !a.back;
    this._backFn = a.back ? (typeof a.back === "function" ? a.back : this._openAreaList.bind(this)) : null;
    $("sheetIcon").innerHTML = this._icon(a.icon);
    $("sheetTitle").textContent = a.name;
    $("sheetSub").textContent = a.roman ? (a.roman + " · " + a.status) : a.status;
    var html = "";
    // a gate row next to a video doesn't need a camera of its own, and its name doesn't navigate
    var withVideo = function (r) { return r.gate && a.embed ? Object.assign({}, r, { cam: "", nonav: true }) : r.cgroup ? Object.assign({}, r, { rows: r.rows.map(withVideo) }) : r; };
    var allRows = (a.rows || []).map(withVideo);
    // the watch / talk switch sits on the bottom edge of the video, so the video
    // card carries it and the rows below keep the room
    var tb = a.talk ? '<div class="talkbar"><button class="talk-opt on" data-mode="watch">' + this._t("watch") + '</button><button class="talk-opt" data-mode="talk">' + this._t("talk") + '</button></div>' : "";
    if (a.embed) html += '<div class="embedwrap"><div class="sheet-embed" id="sheetEmbed"' + (a.ratio ? ' style="aspect-ratio:' + a.ratio + ';background:#000"' : '') + '></div>' + tb + '</div>';
    else html += tb;
    var masterRows = allRows.filter(function (r) { return r.master; });
    var isDev = function (r) { return a.pullout && r.entity && (r.entity.indexOf("fan.") === 0 || r.entity.indexOf("climate.") === 0 || r.entity.indexOf("media_player.") === 0 || r.entity.indexOf("vacuum.") === 0); };
    var tt = this._t.bind(this);
    var devRows = allRows.filter(isDev).map(function (r) {
      return Object.assign({}, r, { dev: true, devLabel: r.entity.indexOf("vacuum.") === 0 || allRows.filter(function (x) { return x.entity && x.entity.split(".")[0] === r.entity.split(".")[0]; }).length > 1 ? r.label : ({ fan: tt("fan"), climate: tt("dev_ac"), media_player: tt("tv") }[r.entity.split(".")[0]]) });
    });
    var applRows = allRows.filter(function (r) { return r.appliance != null; });
    var plainRows = allRows.filter(function (r) { return !r.master && !r.camera && !r.curtain && !isDev(r) && r.appliance == null; });
    var curtainRows = allRows.filter(function (r) { return r.curtain; });
    var camRows = allRows.filter(function (r) { return r.camera; });
    if (masterRows.length || curtainRows.length) html += '<div class="master-bar">' + masterRows.concat(curtainRows).map(this._rowHTML.bind(this)).join("") + '</div>';
    if (devRows.length) html += '<div class="dev-bar" style="--dev-cols:' + (a.devCols || 3) + '">' + devRows.map(this._rowHTML.bind(this)).join("") + '</div>';
    if (applRows.length) html += '<div class="dev-bar appl-bar">' + applRows.map(this._rowHTML.bind(this)).join("") + '</div>';
    html += plainRows.map(this._rowHTML.bind(this)).join("");
    if (camRows.length) html += '<div class="cam-bar">' + camRows.map(this._rowHTML.bind(this)).join("") + '</div>';
    $("sheetBody").innerHTML = html;
    this._wireRows($("sheetBody"));
    this._wireGroups($("sheetBody"));
    if (a.embed) this._mountEmbed($("sheetEmbed"), a.embed);
    this._setVideoSheet(!!(a.embed && a.embed.streams));
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

  _setVideoSheet(v) {
    if (!!this._videoSheet === v) return;
    this._videoSheet = v;
    this._renderOccupancy();
  }

  _closeSheet() {
    this._setVideoSheet(false);
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
        if (a) self._openAreaSheet(a, false);
      });
    });
  }

  // fromMap: opened from the floor plan, so no back arrow to the area list;
  // re-opens (back from a camera / appliance) keep how it was first reached
  _openAreaSheet(a, fromMap) {
    if (fromMap !== undefined) this._areaFromMap = fromMap;
    // Master toggle only covers this area's own light rows (not switches,
    // and never anything outside this sheet) — built fresh from a.rows
    // every open, so it can't drift from what's actually shown below it.
    var kinds = [["light", "light.", 2], ["fan", "fan.", 2], ["climate", "climate.", 2]];
    var masters = [];
    kinds.forEach(function (k) {
      var ids = a.rows.filter(function (r) { return r.entity && r.entity.indexOf(k[1]) === 0; }).map(function (r) { return r.entity; });
      if (ids.length >= k[2]) masters.push({ master: true, kind: k[0], ids: ids });
    });
    var rows = masters.concat(this._applianceRows(a.id), a.rows);
    this._openSheet({ id: a.id, name: a.name, roman: a.roman, icon: a.icon, common: a.common, status: this._areaStatus(a), rows: rows, back: !this._areaFromMap, pullout: true, devCols: a.devCols });
    this._currentArea = a;
    this._lastArea = a;
  }

  // Every camera pop-up (area camera row, person zone, gate card, doorbell
  // visitor) comes through here, and what it shows depends only on the camera,
  // never on how it was reached: same title, same video, the doorbell's
  // watch / talk switch, and the 大门 control for the gate camera and the
  // doorbell. Only the back arrow follows the path (back to the area list).
  // o.back: function, true = area list, null = none
  _openCameraSheet(stream, label, o) {
    o = o || {};
    var area = this._lastArea;
    this._openSheet({
      name: this._cameraName(stream) || label, roman: "Camera", icon: "i-cctv", status: this._t("live"),
      embed: this._camEmbed(stream), ratio: this._ratio(stream),
      talk: this._isDoorbell(stream) ? this._doorbell() : null,
      rows: this._cameraControls(stream),
      back: "back" in o ? o.back : (area ? function () { this._openAreaSheet(area); }.bind(this) : true)
    });
  }

  // The controls shown under a camera's video, from the card option
  //   camera_controls: { camera.x: [ "light.a", { entity: switch.gate, gate: true } ] }
  // or { camera.x: { label?, icon?, controls: [ ... ] } }. An entry is an entity id
  // or { entity, label?, icon?, gate? }. One control is a plain row; more than one
  // collapse into a single expandable control (label default "Controls") that
  // shows the individual rows once opened. Without the option, the gate camera and
  // the doorbell get the 大门 row.
  _cameraControls(stream) {
    var cfg = this._config || {}, h = this._hass, self = this, ents = cfg.entities || {};
    if (!cfg.camera_controls) return this._isGateCam(stream) && this._gateRow() ? [this._gateRow()] : [];
    var spec = cfg.camera_controls[stream] || [];
    if (!Array.isArray(spec)) spec = spec.controls || [];
    var meta = Array.isArray(cfg.camera_controls[stream]) ? {} : (cfg.camera_controls[stream] || {});
    var rows = [];
    spec.forEach(function (e) {
      if (typeof e === "string") e = { entity: e };
      var id = e.entity, o = ents[id] || {}, d = id && id.split(".")[0];
      if (!id || !h.states[id]) return;
      var label = e.label || o.name || self._cleanName(h.states[id].attributes.friendly_name || id);
      if (e.gate || o.gate) rows.push({ icon: e.icon || o.icon || "i-gate", label: label, gate: true, entity: id, trigger: o.trigger });
      else rows.push({ icon: e.icon || o.icon || self._iconFor(id, d, cfg), label: label, sub: o.sub != null ? o.sub : self._subFor(id, d), entity: id });
    });
    if (rows.length < 2) return rows;
    return [{ cgroup: true, label: meta.label || this._t("controls"), icon: meta.icon || "i-power", rows: rows }];
  }

  // the gate camera and the doorbell are where you decide about the gate
  _isGateCam(stream) {
    var ga = (this._config || {}).gate_alert || {};
    return !!stream && (stream === ga.camera || this._isDoorbell(stream));
  }

  // one name per camera: configured entity name, else the zone it covers, else
  // the area's camera label, else HA's friendly name
  _cameraName(stream) {
    var cfg = this._config || {}, n = ((cfg.entities || {})[stream] || {}).name;
    if (n) return n;
    var z = this._zones().filter(function (x) { return x.camera === stream; })[0];
    if (z) return /监控$/.test(z.label) ? z.label : this._t("zone_cam", { z: z.label });
    var found = null;
    Object.keys(cfg.areas || {}).some(function (k) {
      return ((cfg.areas[k] || {}).cameras || []).some(function (c) { if (c.entity === stream) { found = c.label; return true; } });
    });
    if (found) return found;
    var st = this._hass && this._hass.states[stream];
    return st && st.attributes.friendly_name || "";
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
    // `stream_names` maps a camera entity to the go2rtc stream to play (e.g. a
    // small H.264 sub-stream for a wall panel that can't decode the main one)
    stream = ((this._config || {}).stream_names || {})[stream] || stream;
    var streams = doorbell ? [talk
      ? { url: stream, mode: "webrtc,webrtc/tcp,mse", name: "🎙️", media: "video,audio,microphone" }
      : { url: stream, mode: "webrtc,webrtc/tcp", name: "🎙️🚫", media: "video,audio" }
    ] : [{ url: stream, name: "🎙️🚫" }];
    return {
      type: "custom:webrtc-camera",
      mode: "webrtc,webrtc/tcp,mse",
      streams: streams,
      ui: true,
      style: ":host { display: block; height: 100%; } ha-card { height: 100%; } .player, .player * { height: 100%; } video { width: 100%; height: 100%; object-fit: var(--cam-fit, fill); } .header { display: none; } .pictureinpicture { display: none; } .mode { display: none; } .screenshot { display: none; } .fullscreen { display: none; } .stream { font-size: 15px; width: 150px; font-weight: bold; padding-left: 2px;}" + " .stream { display: none; }"
    };
  }

  _openVisitorSheet() {
    this._openCameraSheet(this._doorbell(), this._t("visitor_title"), { back: null });
    this._visitorSheetOpen = true;
  }

  // Frigate zone occupancy sensors (zones named inside_* / outside_*) — the
  // areas the user actually cares about — each mapped to the camera that
  // covers it. Person only by default (car / "all" sensors stay on while cars
  // are parked); a zone may add `vehicle_sensors` that also raise the alert.
  _zones() { return (this._config || {}).zones || []; }

  _openZoneSheet(key) {
    var z = this._zones().filter(function (x) { return x.key === key; })[0];
    if (!z) return;
    this._openCameraSheet(z.camera, this._t("zone_title", { z: z.label }), { back: null });
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
      var vst = h.states[cfg.vacuum];
      // integrations often repeat the name ("Mary  Mary"): collapse it
      var vw = ((vst && vst.attributes.friendly_name) || this._t("vacuum")).trim().split(/\s+/);
      var vh = vw.length / 2;
      var vname = vw.length % 2 === 0 && vw.slice(0, vh).join(" ") === vw.slice(vh).join(" ") ? vw.slice(0, vh).join(" ") : vw.join(" ");
      var vkey = { cleaning: "vacuum_busy", returning: "vacuum_busy", paused: "vacuum_paused", error: "vacuum_error" }[vacuum];
      if (vkey) out.push(this._badgeHTML(vacuum === "error" ? "--alert" : "--on", "i-vacuum", this._t(vkey, { name: vname })).replace('class="badge"', 'class="badge" data-vac="1"'));
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
      var veh = (z.vehicle_sensors || []).some(function (e) { return get(e) === "on"; });
      var active = person || veh;
      if (active) o.veh = veh && !person;
      // one on-event is shown for at most `max_show` seconds (default 120);
      // it can only show again after the sensor has gone off and back on
      if (active && !o.active && !o.on && !o.expired) {
        o.expired = false; clearTimeout(o.exp);
        o.exp = setTimeout(function () { o.exp = null; o.expired = true; o.on = false; this._renderOccupancy(); }.bind(this), (z.max_show != null ? z.max_show : (cfg.zone_max_show != null ? cfg.zone_max_show : 120)) * 1000);
      } else if (!active && o.active && !o.on) {
        // after the cap the sensor must stay off for 4s (same debounce) before a new event can show
        clearTimeout(o.exp); o.exp = null;
        if (o.expired) o.rearm = setTimeout(function () { o.rearm = null; o.expired = false; }, 4000);
      } else if (active && o.rearm) { clearTimeout(o.rearm); o.rearm = null; }
      o.active = active;
      if (active && !o.expired) {
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

    // gate alert card: shown while the gate is open, one tap closes it
    var ga = cfg.gate_alert;
    this._gateOpen = !!(ga && ga.entity && get(ga.entity) === "on");
    this._renderOccupancy();

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

    // appliance rows inside an open area sheet
    this._root.querySelectorAll(".appl-tile").forEach(function (row) {
      var ap = (cfg.appliances || [])[parseInt(row.getAttribute("data-appl-row"), 10)];
      if (!ap) return;
      var sub = row.querySelector(".ds"), txt = this._applianceSubText(ap);
      if (sub.textContent !== txt) sub.textContent = txt;
      row.classList.toggle("on", this._applianceActive(ap));
    }.bind(this));

    // keep an open appliance sheet live too
    if (this._applOpen) {
      var info = $("applInfo"), ahtml = this._applianceInfoHTML(this._applOpen);
      if (info && info.innerHTML !== ahtml) info.innerHTML = ahtml;
      var astat = this._applianceStatusText(this._applOpen);
      if ($("sheetSub").textContent !== astat) $("sheetSub").textContent = astat;
    }

    this._syncRows();
    this._fpRender();
    if (this._embedEl) this._embedEl.hass = h;
  }

  // Alert cards, in priority order: the gate alert, then one card per camera
  // with a person detected. A card is its rows (gate, person zones sharing
  // that camera) stacked over one live view. Only the first `max_streams`
  // (default 2) cards stream; the panel's decoder can't take more at once.
  _occGroups() {
    var cfg = this._config || {}, ga = cfg.gate_alert || {}, self = this, groups = [], byCam = {};
    var zones = this._zones().filter(function (z) { return self._occ[z.key] && self._occ[z.key].on; });
    if (this._gateOpen) {
      var g = { key: "gate", gate: true, cam: ga.camera || "", label: this._t("gate_cam"), zones: [] };
      groups.push(g);
      if (g.cam) byCam[g.cam] = g;
    }
    zones.forEach(function (z) {
      var g = z.camera && byCam[z.camera];
      if (!g) {
        g = { key: z.camera ? "c:" + z.camera : "z:" + z.key, gate: false, cam: z.camera || "", label: z.label, zones: [] };
        groups.push(g);
        if (z.camera) byCam[z.camera] = g;
      }
      g.zones.push(z);
    });
    var cap = cfg.max_streams != null ? cfg.max_streams : 2;
    // a camera pop-up covers the home screen: its alert streams would only burn resources behind it
    groups.forEach(function (g, n) { g.stream = !!g.cam && n < cap && !self._videoSheet; });
    return groups;
  }

  _renderOccupancy() {
    var groups = this._occGroups(), self = this, tt = this._t.bind(this);
    var key = JSON.stringify(groups.map(function (g) { return [g.key, g.stream, g.zones.map(function (z) { return z.key; })]; }));
    if (key === this._occKey) return;
    this._occKey = key;
    var list = this._$("occupancyList"), have = {}, prev = null, fresh0 = false;
    var chev = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
    var expand = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
    Array.prototype.forEach.call(list.children, function (c) { if (!c.classList.contains("leaving")) have[c.getAttribute("data-k")] = c; });
    groups.forEach(function (g) {
      var el = have[g.key];
      if (!el) {
        fresh0 = true;
        el = document.createElement("div");
        el.className = "occitem occcard" + (g.gate ? " gatecard" : "");
        el.setAttribute("data-k", g.key);
        if (g.gate) el.innerHTML = '<button class="occupancybtn gatebtn" data-gate="1"><span class="plabel"><b>' + tt("gate_alert_bar") + '</b><span>' + tt("gate_alert_tap") + '</span></span><span class="gclose">' + tt("gate_btn_on") + '</span></button>';
        if (this._occInit) el.classList.add("enter");
      }
      var after = prev ? prev.nextSibling : list.firstChild;
      if (el !== after) list.insertBefore(el, after);
      // person rows (rebuilt only when the set changes; the stream is untouched)
      var zk = g.zones.map(function (z) { return z.key; }).join(",");
      if (el.getAttribute("data-zs") !== zk) {
        if (el.hasAttribute("data-zs") && zk.split(",").length > el.getAttribute("data-zs").split(",").length) fresh0 = true;
        Array.prototype.slice.call(el.querySelectorAll(".zrow")).forEach(function (r) { r.remove(); });
        var anchor = el.querySelector(".occcam");
        g.zones.forEach(function (z) {
          var b = document.createElement("button");
          b.className = "occupancybtn zrow";
          b.setAttribute("data-zone", z.key);
          b.innerHTML = '<span class="plabel"><b>' + tt(self._occ[z.key].veh ? "zone_vehicle" : "zone_detected", { z: z.label }) + '</b><span>' + tt("zone_tap", { z: z.label }) + '</span></span>' + chev;
          el.insertBefore(b, anchor);
        });
        el.setAttribute("data-zs", zk);
      }
      // live view
      var slot = el.querySelector(".occcam");
      if (g.stream && !slot) {
        slot = document.createElement("div");
        slot.className = "occcam";
        slot.innerHTML = '<button class="camexp" data-cam="' + g.cam + '" data-label="' + g.label + '"' + ' aria-label="' + tt("live") + '">' + expand + '</button>';
        el.appendChild(slot);
        this._mountOccCam(slot, g.cam);
      } else if (!g.stream && slot) slot.remove();
      prev = el;
    }.bind(this));
    var want = groups.map(function (g) { return g.key; });
    Object.keys(have).forEach(function (k) {
      if (want.indexOf(k) >= 0) return;
      var el = have[k];
      el.classList.remove("enter");
      el.classList.add("leaving");
      // animationend normally removes it; this is the fallback
      setTimeout(function () { if (el.parentNode) { el.remove(); this._occTidy(); this._fitSoon(); } }.bind(this), 450);
    }.bind(this));
    if (fresh0 && this._occInit) this._setPage("alerts");
    this._occInit = true;
    this._occTidy();
    this._fitSoon();
  }

  // Two "pages" while the alert list has pushed the clock + 区域 out of the
  // card: the alerts, and the clock + 区域. A further swipe/wheel past the end
  // of the list goes to the clock page; a swipe/wheel back (or the chip)
  // returns. New alerts and 15 s without touch bring the alerts back.
  _pageGestures() {
    var self = this, app = this._root.querySelector(".app"), $ = this._$.bind(this), ts = null;
    var atEnd = function () { var l = $("occupancyList"); return l.scrollTop + l.clientHeight >= l.scrollHeight - 2; };
    var active = function () { return app.classList.contains("compact") && !$("scrim").classList.contains("open"); };
    app.addEventListener("touchstart", function (e) {
      if (self._page === "home") self._pgArm();
      if (!active()) { ts = null; return; }
      ts = { y: e.touches[0].clientY, end: self._page !== "home" && atEnd(), done: false };
    }, { passive: true });
    app.addEventListener("touchmove", function (e) {
      if (!ts || ts.done) return;
      var dy = e.touches[0].clientY - ts.y;
      if (self._page === "home") { if (dy > 36) { ts.done = true; self._setPage("alerts"); } }
      else if (ts.end && dy < -36) { ts.done = true; self._setPage("home"); }
    }, { passive: true });
    app.addEventListener("wheel", function (e) {
      if (!active() || Date.now() - (self._pgAt || 0) < 700) return;
      if (self._page === "home") { self._pgArm(); if (e.deltaY < -10) self._setPage("alerts"); return; }
      // only a NEW scroll counts: the one that reached the end must have settled
      if (e.deltaY > 0 && atEnd() && Date.now() - (self._lastScroll || 0) > 200) {
        self._wheelAcc = (self._wheelAcc || 0) + e.deltaY;
        if (self._wheelAcc > 40) { self._wheelAcc = 0; self._setPage("home"); }
      } else self._wheelAcc = 0;
    }, { passive: true });
  }

  _pgArm() {
    clearTimeout(this._pgTimer);
    this._pgTimer = setTimeout(function () { this._setPage("alerts"); }.bind(this), 15000);
  }

  _setPage(p) {
    var app = this._root && this._root.querySelector(".app");
    if (!app) return;
    if (!app.classList.contains("compact")) { this._page = "alerts"; return; }
    if (p === (this._page || "alerts") || this._pgBusy) return;
    var self = this, up = p === "home";
    this._pgAt = Date.now();
    app.style.setProperty("--pg-out", up ? "-22px" : "22px");
    app.style.setProperty("--pg-in", up ? "22px" : "-22px");
    var outCls = "pg-out-" + (up ? "alerts" : "home"), inCls = "pg-in-" + p;
    this._pgBusy = true;
    app.classList.add(outCls);
    setTimeout(function () {
      self._pgBusy = false;
      app.classList.remove(outCls);
      self._page = p;
      app.classList.toggle("page-home", up);
      app.classList.add(inCls);
      setTimeout(function () { app.classList.remove(inCls); }, 360);
      if (up) self._pgArm(); else clearTimeout(self._pgTimer);
      self._fitSoon();
    }, 200);
  }

  _occTidy() {
    var list = this._$("occupancyList");
    this._$("occWrap").hidden = !list.children.length;
    var n = list.querySelectorAll(".occcard:not(.leaving) .occupancybtn").length;
    this._$("pgChip").textContent = this._t("alerts_chip", { n: n });
    this._$("mapChip").textContent = this._t((this._config || {}).floorplan ? "map_chip" : "areas_chip");
    this._occMore();
  }

  // Live view under the gate alert: created only while the gate is open
  // (the panel's decoder streams one camera at a time, not all of them).
  _mountOccCam(slot, cam) {
    var self = this;
    slot.style.aspectRatio = this._ratio(cam);
    window.loadCardHelpers().then(function (helpers) {
      if (!slot.isConnected) return;
      var embed = self._camEmbed(cam);
      var el = helpers.createCardElement(embed);
      el.hass = self._hass;
      slot.appendChild(el);
      self._spin(slot, el, embed.streams[0].url);
    });
  }

  // "… N more" pill + edge fades for the (scrollable) alert list
  _occMore() {
    var list = this._$("occupancyList"), more = this._$("occMore");
    if (!list) return;
    var bottom = list.scrollTop + list.clientHeight;
    var hasMore = list.scrollHeight - bottom > 2, hasTop = list.scrollTop > 2;
    var n = 0;
    Array.prototype.forEach.call(list.children, function (c) {
      if (!c.classList.contains("leaving") && c.offsetTop + c.offsetHeight > bottom + 2) n++;
    });
    list.style.setProperty("--ft", hasTop ? "16px" : "0px");
    list.style.setProperty("--fb", hasMore ? "30px" : "0px");
    more.hidden = !hasMore;
    more.textContent = n ? this._t("more_items", { n: n }) : "…";
  }

  _syncRows() {
    // ha-switch owns its own rendering (a real HA/LitElement component, the
    // same one every stock HA toggle uses) — we only ever set its `checked`
    // property from truth. No classList/attribute twiddling of our own on
    // the switch itself, so there's no custom code left that can desync.
    if (!this._hass || !this._$("scrim").classList.contains("open")) return;
    this._root.querySelectorAll(".sheet-body .cgroup").forEach(function (g) {
      var ids = g.getAttribute("data-ids").split(","), n = ids.filter(function (id) { return this._isOn(id); }.bind(this)).length;
      var cs = g.querySelector(".cs"), t1 = this._groupStatus(n);
      g.querySelector(".cg-head").classList.toggle("on", n > 0);
      if (cs.textContent !== t1) cs.textContent = t1;
    }.bind(this));
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
        if (gl && !row._armed && gl.textContent !== gbl) gl.textContent = gbl;
        return;
      }
      var ds = row.querySelector(".ds");
      if (ds) {
        var dwant = this._devStatus(entity);
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
':host{display:block;height:100%;position:relative;overflow:hidden;touch-action:none;overscroll-behavior:none}' +
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
'.radialzone.has-fp{flex-direction:column;align-items:stretch}' +
'.radialzone.has-fp .radialtrigger,.radialzone.has-fp + .radialtrigger-hint{display:none}' +
'.fp{display:none;position:relative;width:100%}' +
'.radialzone.has-fp .fp{display:block}' +
'.fp-map{position:relative;width:100%;border-radius:16px;overflow:hidden;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}' +
'.fp-svg{position:absolute;inset:0;width:100%;height:100%;display:block}' +
'.fp-all[hidden]{display:none}.fp-all{position:absolute;top:4px;right:4px;z-index:2;font:inherit;font-size:.7rem;font-weight:600;color:var(--fg);background:color-mix(in srgb,var(--surface) 88%,transparent);border:1px solid var(--line);border-radius:99px;padding:4px 10px;cursor:pointer;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}' +
'.fp .f-wf{fill:var(--fp-wall-face);stroke:var(--fp-wall-face);stroke-width:.6}.fp .f-ws{fill:var(--fp-wall-side);stroke:var(--fp-wall-side);stroke-width:.6}' +
'.fp .f-wt{fill:var(--fp-wall);stroke:var(--fp-wall);stroke-width:.6;stroke-linejoin:round}' +
'.fp .f-ground{fill:var(--fp-ground)}.fp .f-plinth{fill:var(--fp-plinth)}.fp .f-grass{fill:var(--fp-grass)}.fp .f-verge{fill:var(--fp-verge)}.fp .f-pave{fill:var(--fp-pave)}.fp .f-cast{fill:var(--fp-cast)}' +
'.fp .f-fl.f-room{fill:var(--fp-room)}.fp .f-wet{fill:var(--fp-wet)}.fp .f-wood{fill:var(--fp-wood)}.fp .f-terrace{fill:var(--fp-terrace)}.fp .f-court{fill:var(--fp-court)}.fp .f-stair{fill:var(--fp-stair)}' +
'.fp .f-step{fill:var(--fp-step)}.fp .f-nose{stroke:var(--fp-wall);stroke-width:1.2;opacity:.9}' +
'.fp .f-glow{opacity:0;transition:opacity .45s ease;pointer-events:none}.fp .f-rm:not(.lit) .f-glow{opacity:0!important}.fp .f-accent{opacity:0;transition:opacity .45s ease;pointer-events:none}.fp .f-accent polygon{fill:none;stroke-linejoin:round;stroke-opacity:.085}.fp .f-rm:not(.acc) .f-accent{opacity:0!important}.fp .f-rm.lit .f-glow{opacity:1}' +
'.fp .f-dash{fill:none;stroke:var(--fp-line);stroke-width:1.3;stroke-dasharray:4 4}.fp .f-div{stroke:var(--fp-line);stroke-width:1.5;stroke-dasharray:5 5}' +
'.fp .f-gp{fill:var(--fp-gate);stroke:var(--fp-gate-frame);stroke-width:1.4;stroke-linejoin:round}.fp .f-gs{stroke:var(--fp-gate-slat);stroke-width:.8}' +
'.fp .f-gate{pointer-events:none}.fp .f-gate-open,.fp .gate-open .f-gate-closed{display:none}.fp .gate-open .f-gate-open{display:inline}' +
'.fp .f-cupt{fill:var(--fp-cup-top);stroke:var(--fp-cup-side);stroke-width:.8}.fp .f-cupf{fill:var(--fp-cup-face)}.fp .f-cups{fill:var(--fp-cup-side)}.fp .f-cupl{stroke:var(--fp-cup-side);stroke-width:1}' +
'.fp .f-hit{fill:transparent;cursor:pointer;transition:fill .2s}.fp .f-hit:active{fill:color-mix(in srgb,var(--accent) 18%,transparent)}' +
'.fp-pins{position:absolute;inset:0;z-index:1;pointer-events:none}' +
'.fp-pin{position:absolute;width:28px;height:28px;margin:-14px 0 0 -14px;padding:0;border-radius:50%;border:1px solid var(--line);background:var(--surface);color:var(--fg-dim);display:flex;align-items:center;justify-content:center;cursor:pointer;pointer-events:auto;box-shadow:0 2px 6px rgba(0,0,0,.18);transition:transform .15s,box-shadow .3s,border-color .3s}' +
'.fp-map.pin-only .f-hit{pointer-events:none;cursor:default}.fp-pin::before{content:"";position:absolute;z-index:-1;inset:calc(-1 * var(--fp-tap,0px));border-radius:50%}' +
'.fp-pin[hidden]{display:none}.fp-pin:active{transform:scale(.9)}' +
'.fp-pin.lit{border-color:rgba(var(--fp-glow),.95);box-shadow:0 0 0 1px rgba(var(--fp-glow),.6),0 2px 8px rgba(var(--fp-glow),.45)}' +
'.fp-pin .fp-ic{display:flex}.fp-pin ha-icon{--mdc-icon-size:16px;display:flex}.fp-pin .fp-ic svg{width:16px;height:16px;stroke:currentColor}' +
'.fp-d{position:absolute;width:9px;height:9px;border-radius:50%;border:1.5px solid var(--surface);box-sizing:border-box;opacity:0;transform:scale(.4);transition:opacity .25s,transform .25s}' +
'.fp-d-fan{top:-3px;left:-3px;background:var(--fp-fan)}.fp-d-ac{top:-3px;right:-3px;background:var(--fp-ac)}.fp-d-media{bottom:-3px;left:-3px;background:var(--fp-media)}.fp-d-curtain{bottom:-3px;right:-3px;background:var(--fp-curtain)}' +
'.fp-pin.run-fan .fp-d-fan,.fp-pin.run-ac .fp-d-ac,.fp-pin.run-media .fp-d-media,.fp-pin.run-curtain .fp-d-curtain{opacity:1;transform:none}' +
'.area-cell .icon ha-icon{--mdc-icon-size:24px;color:var(--accent-strong);display:flex}.sheet-head .icon ha-icon{--mdc-icon-size:18px;color:var(--accent-strong);display:flex}' +
'.radialtrigger-hint{margin-top:10px;font-size:.72rem;color:var(--fg-dim);text-align:center}' +
'.area-section{margin-bottom:14px}' +
'.area-section:last-child{margin-bottom:0}' +
'.area-section-label{font-size:.68rem;font-weight:600;letter-spacing:.04em;color:var(--fg-dim);text-transform:uppercase;margin-bottom:4px}' +
'.row-line{display:grid;grid-template-columns:1fr 1fr;column-gap:12px;border-bottom:1px solid var(--line)}' +
'.row-line:last-child{border-bottom:none}' +
'.row-line.solo{grid-template-columns:1fr}' +
'.row-line .row{padding:6px 0;gap:8px;min-width:0;border-bottom:none}' +
'.row-line .row .rlabel{flex-direction:column;align-items:flex-start;gap:0}' +
'.row-line .row .rlabel span{max-width:100%;font-size:.66rem}' +
'.row-line .row .rlabel b{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis}' +
'.list-bar{position:sticky;top:0;z-index:2;padding:2px 0 6px;background:var(--surface-2)}' +
'.alloff{width:100%;display:flex;align-items:center;justify-content:center;gap:6px;padding:9px 4px;border-radius:999px;border:1px solid color-mix(in srgb,var(--alert) 40%,transparent);background:color-mix(in srgb,var(--alert) 10%,transparent);color:var(--alert);font:inherit;font-size:.78rem;font-weight:700;cursor:pointer}' +
'.alloff svg{width:15px;height:15px;stroke:currentColor}' +
'.alloff .n{font-family:var(--font-mono);font-weight:500;opacity:.8}' +
'.alloff.armed{background:var(--alert);color:#fff;border-color:var(--alert)}' +
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
'.sheet-body{overflow-y:auto;touch-action:pan-y;overscroll-behavior:contain;margin-top:8px;padding-bottom:4px}' +
'.embedwrap{position:relative;grid-column:1/-1;margin-bottom:10px}' +
'.sheet-embed{position:relative;border-radius:12px;overflow:hidden}' +
'.cam-spin{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}' +
'.cam-spin::before{content:"";position:relative;z-index:1;width:34px;height:34px;border-radius:50%;border:3px solid color-mix(in srgb,var(--accent-strong) 22%,transparent);border-top-color:var(--accent-strong);animation:camSpin .9s linear infinite}' +
'.cam-ph{position:absolute;inset:-24px;background-size:cover;background-position:center;filter:blur(16px) brightness(0.5)}' +
'@keyframes camSpin{to{transform:rotate(360deg)}}' +
'.talkbar{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);z-index:5;display:flex;gap:2px;padding:3px;border-radius:999px;background:rgba(20,16,12,.62);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}' +
'.talk-opt{padding:6px 16px;border:none;border-radius:999px;background:transparent;color:rgba(255,255,255,.78);font:inherit;font-size:.78rem;font-weight:700;cursor:pointer;white-space:nowrap}' +
'.talk-opt.on{background:rgba(255,255,255,.9);color:#2a1f14}' +
'.occwrap{flex:none;position:relative}' +
'.occupancylist{position:relative;display:flex;flex-direction:column;gap:6px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none;touch-action:pan-y;-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 var(--ft,0px),#000 calc(100% - var(--fb,0px)),transparent 100%);mask-image:linear-gradient(to bottom,transparent 0,#000 var(--ft,0px),#000 calc(100% - var(--fb,0px)),transparent 100%)}' +
'.occupancylist::-webkit-scrollbar{display:none}' +
'.occitem{flex:none;overflow:hidden}' +
'.occitem.enter{animation:occIn .34s cubic-bezier(.2,.8,.2,1)}' +
'.occitem.leaving{animation:occOut .28s ease forwards;pointer-events:none}' +
'@keyframes occIn{from{max-height:0;opacity:0;transform:translateY(-10px);margin-top:-6px;padding-top:0;padding-bottom:0;border-width:0}to{max-height:700px;opacity:1;transform:none;margin-top:0}}' +
'@keyframes occOut{from{max-height:700px;opacity:1}to{max-height:0;opacity:0;margin-top:-6px;padding-top:0;padding-bottom:0;border-width:0}}' +
'@media (prefers-reduced-motion:reduce){.occitem.enter,.occitem.leaving{animation-duration:.01s}}' +
'.app.measuring .occitem{max-height:none!important;margin-top:0!important}' +
'.app.measuring .occupancybtn{padding-top:10px!important;padding-bottom:10px!important;border-width:1px!important}' +
'.app.measuring .occcard .occupancybtn{border-left-width:0!important;border-right-width:0!important;border-bottom-width:0!important}' +
'.app.measuring .occitem.leaving{max-height:0!important;margin-top:-6px!important;padding-top:0!important;padding-bottom:0!important;border-width:0!important}' +
'.occcard{border-radius:14px;border:1px solid var(--line);background:var(--surface)}' +
'.occcard .occupancybtn{border:0;border-radius:0;background:none}' +
'.occcard .occupancybtn+.occupancybtn{border-top:1px solid var(--line)}' +
'.gatecard .gatebtn{background:color-mix(in srgb,var(--alert) 12%,var(--surface))}' +
'.occcam{position:relative;background:#000;border-top:1px solid var(--line)}' +
'.camexp{position:absolute;inset:0;z-index:3;width:100%;height:100%;border:0;padding:0;background:transparent;cursor:pointer}' +
'.camexp svg{position:absolute;right:8px;bottom:8px;width:26px;height:26px;padding:5px;box-sizing:border-box;border-radius:8px;background:rgba(0,0,0,.55);stroke:#fff}' +
'.occcam.shrunk{aspect-ratio:auto!important;height:var(--cam-h);--cam-fit:cover}' +
'.app.panel .occcam{aspect-ratio:auto!important;height:150px;--cam-fit:cover}' +
'.app.panel .occcam.shrunk{height:var(--cam-h)}' +
'.occmore{position:absolute;left:50%;bottom:2px;transform:translateX(-50%);padding:4px 14px;border-radius:999px;border:1px solid var(--line);background:color-mix(in srgb,var(--surface) 92%,#000);color:var(--fg);font:inherit;font-size:.74rem;font-weight:600;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.45)}' +
'.occupancybtn{width:100%;flex:none;display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--fg);font:inherit;text-align:left;cursor:pointer;}' +
'.occupancybtn .plabel{flex:1;min-width:0}' +
'.occupancybtn .plabel b{display:block;font-size:.88rem;font-weight:600}' +
'.occupancybtn .plabel span{display:block;font-size:.72rem;color:var(--fg-dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
'.gatebtn .plabel b{color:var(--alert)}' +
'.gatebtn .gclose{flex:none;font-size:.82rem;font-weight:600;color:var(--alert)}' +
'.occupancybtn .chev{flex:none;width:16px;height:16px;stroke:var(--fg-dim)}' +
'.app.panel .occupancybtn{gap:8px;padding:6px 12px}' +
'.app.panel .occupancybtn .plabel b{font-size:.8rem;line-height:1.25}' +
'.app.panel .occupancybtn .plabel span{font-size:.64rem;line-height:1.25}' +
'.app.panel.measuring .occupancybtn{padding-top:6px!important;padding-bottom:6px!important}' +
'.panelhead{flex:none;display:flex;flex-direction:column;align-items:center;gap:2px}' +
'.pclock{font-family:var(--font-display);font-size:2.6rem;font-weight:600;line-height:1;letter-spacing:.01em;color:var(--fg);font-variant-numeric:tabular-nums}' +
'.pdate{font-size:.8rem;color:var(--fg-dim)}' +
'.people{display:flex;gap:8px;justify-content:center;margin-top:6px}' +
'.people:empty{display:none}' +
'.person{display:flex;align-items:center;gap:7px;padding:5px 12px 5px 6px;border-radius:999px;border:1px solid var(--line);background:var(--surface);font-size:.8rem;font-weight:600;color:var(--fg-dim)}' +
'.person .dot{width:9px;height:9px;border-radius:50%;background:var(--fg-dim)}' +
'.person.home{color:var(--fg)}' +
'.person.home .dot{background:var(--on);box-shadow:0 0 5px var(--on)}' +
'.app.panel{min-height:0;padding-block:var(--top-offset,22px) 8px;gap:6px}' +
'.app.panel .badges,.app.panel .occwrap{order:-1}' +
'.app.panel .panelhead{margin-top:auto;margin-bottom:8px}' +
'.app.measuring>*{margin-top:0!important}.app.measuring>.radialzone{margin-bottom:0!important;flex:none!important}' +
'.app.compact:not(.page-home) .quickactions{margin-top:auto}.app.compact:not(.page-home) .visitorbar{margin-top:0}' +
'.app.compact:not(.page-home) .radialzone,.app.compact .radialtrigger-hint,.app.panel.compact:not(.page-home) .panelhead{display:none}' +
'.app.compact.page-home .occwrap{display:none}' +
'.pgchipwrap{display:none;flex:none;position:relative;height:0;z-index:3}' +
'.pgchip{position:absolute;left:50%;top:0;transform:translateX(-50%);white-space:nowrap;padding:4px 16px;border-radius:999px;border:1px solid var(--line);background:color-mix(in srgb,var(--surface) 92%,#000);color:var(--fg);font:inherit;font-size:.74rem;font-weight:600;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.45)}' +
'.mapchipwrap{display:none;flex:none;justify-content:center}.app.compact:not(.page-home) .mapchipwrap{display:flex}' +
'.mapchip{padding:3px 14px;border-radius:999px;border:1px solid var(--line);background:color-mix(in srgb,var(--surface) 70%,transparent);color:var(--fg-dim);font:inherit;font-size:.72rem;font-weight:600;cursor:pointer}' +
'.app.pg-out-alerts .mapchipwrap{animation:pgOut .2s ease forwards}.app.pg-in-alerts .mapchipwrap{animation:pgIn .32s cubic-bezier(.2,.8,.2,1)}' +
'.app.compact.page-home .pgchipwrap{display:block}.app.panel .pgchipwrap{order:-1}' +
'@keyframes pgIn{from{opacity:0;transform:translateY(var(--pg-in,22px))}to{opacity:1;transform:none}}' +
'@keyframes pgOut{to{opacity:0;transform:translateY(var(--pg-out,-22px))}}' +
'.app.pg-out-alerts .occwrap,.app.pg-out-home .panelhead,.app.pg-out-home .radialzone,.app.pg-out-home .pgchipwrap{animation:pgOut .2s ease forwards}' +
'.app.pg-in-alerts .occwrap,.app.pg-in-home .panelhead,.app.pg-in-home .radialzone,.app.pg-in-home .pgchipwrap{animation:pgIn .32s cubic-bezier(.2,.8,.2,1)}' +
'.app.panel .radialzone{flex:none;margin-bottom:auto}' +
'.app.panel .radialtrigger{width:92px;height:92px}' +
'.app.panel .radialtrigger svg{width:26px;height:26px}' +
'.app.panel .radialtrigger-hint{display:none}' +
'.app.panel .badge{padding:6px 12px 6px 9px}' +
'.app.panel .qa-btn{padding:8px 6px;gap:3px}' +
'.app.panel .qa-btn .icon{width:30px;height:30px}' +
'.app.panel .row{padding:9px 2px}' +
'.app.panel .area-grid{grid-template-columns:repeat(5,1fr);gap:8px 4px;padding:2px 0}' +
'.app.panel .area-cell .icon{width:46px;height:46px}' +
'.app.panel .area-cell{gap:4px}' +
'.app.panel .sheet{max-height:100%;height:100%;border-radius:0}' +
'.app.panel .sheet-grab{display:none}' +
'.app.panel .sheet-head p{display:none}' +
'.app.panel .sheet-body{display:grid;grid-template-columns:1fr 1fr;column-gap:14px;align-content:start;grid-auto-rows:max-content}' +
'.app.panel .sheet-body>*{grid-column:1/-1}' +
'.app.panel .sheet-body>.row:not(.gate){grid-column:auto;min-width:0}' +
'.app.panel .sheet-body>.row .rlabel{flex-direction:column;align-items:flex-start;gap:0}' +
'.app.panel .sheet-body>.row .rlabel b{max-width:100%;overflow:hidden;text-overflow:ellipsis}' +
'.app.panel .sheet-body>.row .rlabel span{max-width:100%}' +
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
'.dev-bar{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:6px}' +
'.dev-bar:not(.appl-bar)>.dev-tile{flex:1 1 calc((100% - (var(--dev-cols,3) - 1) * 8px) / var(--dev-cols,3))}' +
'.dev-tile{flex:1;min-width:0;display:flex;align-items:center;border-radius:14px;border:1px solid var(--line);background:var(--surface)}' +
'.dev-tile.on{background:color-mix(in srgb,var(--accent) 20%,transparent);border-color:var(--accent)}' +
'.dev-main{flex:1;min-width:0;display:flex;align-items:center;gap:8px;padding:8px 4px 8px 10px;border:none;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}' +
'.dev-main svg{width:20px;height:20px;stroke:var(--fg-dim);flex:none}' +
'.dev-tile.on .dev-main svg{stroke:var(--accent-strong)}' +
'.dev-main .dl{min-width:0;display:flex;flex-direction:column}' +
'.dev-main b{font-size:.82rem;font-weight:700;color:var(--fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
'.dev-main .ds{font-size:.66rem;color:var(--fg-dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
'.appl-bar{flex-wrap:wrap}.appl-tile{flex:1 1 calc(50% - 4px)}.appl-tile .dev-main{padding:9px 10px}' +
'.dev-tile.on .ds{color:var(--accent-strong)}' +
'.dev-more{flex:none;width:34px;align-self:stretch;border:none;border-left:1px solid var(--line);background:none;color:var(--fg-dim);font:inherit;font-size:1.1rem;cursor:pointer;border-radius:0 14px 14px 0}' +
'.master-toggle.curtain-tile .n{font-family:inherit;font-weight:600}' +
'.row ha-switch{flex:none}' +
'.row.gate{cursor:pointer}' +
'.cgroup{grid-column:1/-1}' +
'.cg-head .rlabel{flex:1;min-width:0}' +
'.cg-head .cs{display:block;font-size:.72rem;color:var(--fg-dim)}' +
'.cg-chev{flex:none;width:18px;height:18px;stroke:var(--fg-dim);transition:transform .2s}' +
'.cgroup.open .cg-chev{transform:rotate(180deg)}' +
'.row.gate[data-nonav]{cursor:default}' +
'.row.gate.armed .gate-btn{background:color-mix(in srgb,var(--alert) 22%,transparent);border-color:var(--alert);color:var(--alert)}' +
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
'<div class="app' + ((this._config || {}).layout === "panel" ? " panel" : "") + '">' +
'<div class="panelhead" id="panelHead" hidden><div class="pclock" id="pClock"></div><div class="pdate" id="pDate"></div><div class="people" id="pPeople"></div></div>' +
'<div class="badges" id="badges"></div>' +
'<div class="pgchipwrap"><button class="pgchip" id="pgChip"></button></div>' +
'<div class="occwrap" id="occWrap" hidden><div class="occupancylist" id="occupancyList"></div><button class="occmore" id="occMore" hidden></button></div>' +
'<div class="mapchipwrap"><button class="mapchip" id="mapChip"></button></div>' +
'<div class="radialzone"><button class="radialtrigger" id="radialTrigger"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg><span>' + this._t("area_btn") + '</span></button><div class="fp"><div class="fp-map" id="fpMap"></div><button class="fp-all" id="fpAll">' + this._t("all_areas") + '</button></div></div>' +
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
