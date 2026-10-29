# Floor Console Card

A mobile-first Home Assistant Lovelace card that turns one **floor** into a control console.
Rooms, lights, fans, A/C, TVs, curtains and cameras are generated from Home Assistant's own
floor / area / device / entity registries, so the card config only holds exceptions.

- Status badges (lights / fans / A/C / curtains on, weather, away, vacuum, washer / dryer, armed alarm)
- Round **Areas** button opening an area picker bottom sheet, then a per-area control sheet
- Gate row with a clear Open / Close button and live camera
- Camera sheets with a fixed aspect-ratio box and a blurred "last frame" loading cover
- Zone-occupancy buttons, visitor (doorbell) pop-up with talk-back, sleep / power / alarm quick actions
- Themes: `walnut` (default), `slate`, `light`, `auto` (follows the HA theme) + per-colour overrides
- Languages: English and Chinese (`language: en | zh`, defaults to the HA user language)

Optional companions: [`webrtc-camera`](https://github.com/AlexxIT/WebRTC) for camera sheets and
[`alarmo-card`](https://github.com/nielsfaber/alarmo-card) for the alarm sheet.

## Install

### HACS (custom repository)

1. HACS -> three-dot menu -> **Custom repositories**.
2. Repository: `https://github.com/ylei0910/floor-console-card`, category **Dashboard** (plugin).
3. Install **Floor Console Card**, then reload the browser (or Settings -> Reset frontend cache in the app).

### Manual

Copy `floor-console-card.js` to `/config/www/community/floor-console-card/` and add the resource
`/hacsfiles/floor-console-card/floor-console-card.js?v=1` (type *JavaScript module*). Bump `?v=` after each update.

## Minimal config

Use a **panel** view so the card fills the screen:

```yaml
type: custom:floor-console-card
floor: first_floor          # floor_id from Settings -> Areas -> Floors
```

## Example

```yaml
type: custom:floor-console-card
theme: walnut               # walnut | slate | light | auto
language: en                # en | zh
floor: second_floor
weather: weather.home
presence: binary_sensor.family_member_2f   # off = nobody from this floor is home
alarm: { entity: alarm_control_panel.home_alarm }
sleep: { entity: input_boolean.sleep_mode }
visitor: { sensor: binary_sensor.doorbell_visitor, camera: camera.doorbell }
badges:                      # sensors whose attribute lists the entities that are on
  - { sensor: sensor.lights_on, label: Lights, icon: i-bulb }
  - { sensor: sensor.fans_on, label: Fans, icon: i-fan }
power:                       # shown in the Power sheet
  - { entity: switch.water_pump, label: Pump, icon: i-drop }
appliances:                  # badge while running + detail sheet on tap
  - label: Washer
    icon: i-washer
    status: sensor.washer_current_status
    remaining: sensor.washer_remaining_time   # timestamp sensor (finish time)
    total: sensor.washer_total_time           # optional, minutes
    cycles: sensor.washer_cycles              # optional
    power: switch.washer_power                # optional, adds a power row (omit for read-only)
camera_ratios: { camera.doorbell: "4/3" }
areas:
  garage: { add: [switch.garage_gate, camera.front_door] }
  kitchen: { roman: Kitchen }
entities:
  switch.garage_gate: { name: Gate, gate: true, cam: camera.front_door }
  light.kitchen_main: { name: Main light, order: 0 }
```

## Options

| Key | Description |
|---|---|
| `floor` | Floor id whose areas are shown. |
| `theme` / `theme_vars` | `walnut`, `slate`, `light`, `auto`, `walnut-light`, `walnut-grey`, `walnut-grey-light`, `walnut-grey-sun`, `sun` (light by day, slate by night) or `walnut-sun` (warm `walnut-light` by day, `walnut` by night) -- both follow `sun.sun`: `theme_day`, default `light`, while the sun is up, `theme_night`, default `slate`, otherwise); `theme_vars` overrides single colours (`bg`, `surface`, `surface-2`, `fg`, `fg-dim`, `accent`, `accent-strong`, `on`, `info`, `alert`, ...). |
| `language` | `en` or `zh`; default follows the HA user language. |
| `weather`, `vacuum`, `home_zone`, `presence` | Badge sources. `presence` (binary sensor, off = away) wins over `home_zone` (person count). |
| `badges` | `{sensor, label, icon}`; the sensor's `first_floor` / `second_floor` attribute (or `floor_attr`) lists entities that are on; tapping opens a list grouped by area. |
| `appliances` | `{label, icon, status, remaining, total, cycles, power, idle, area}`. Also listed as a row in the sheet of the area the status sensor belongs to (override with `area`). Badge shows while the status is not in `idle` (default `power_off, initial, unavailable, unknown`), so a finished cycle (`end`) stays visible until the machine is powered off. |
| `power` | Rows for the Power sheet (shown away-from-home as "<name> still on" when left on). |
| `sleep`, `alarm`, `visitor`, `zones` | Quick actions, doorbell pop-up and occupancy buttons. A zone is `{key, label, camera, sensor?, vehicle_sensors?}`; it alerts on its person sensor, and on any `vehicle_sensors` (e.g. car / motorcycle occupancy) too, titled "Vehicle at …" when only a vehicle is there. One detection is shown for at most 2 minutes (`zone_max_show` seconds, or `max_show` per zone); it shows again only after the sensor has gone off and on. |
| `gate_alert` | `{ entity: switch.gate, camera: camera.front_door }` — a row appears at the top of the home screen while the switch is `on`; one tap turns it off. With `camera`, a live view (muted, `stream_names` applies) is part of the same card, created only while the gate is open; tapping the top part closes the gate, tapping the live view opens it full size (the gate stays open). Person-detected zones get the same treatment: one card per camera (zones sharing a camera, e.g. the gate camera, stack as rows in one card over a single live view). While a camera pop-up is open the alert cards' live views are stopped (they are behind it) and come back when it closes. `max_streams` (default 2) caps how many cards stream at once, in priority order (gate first); the rest stay plain rows until a stream frees up. The controls in the camera pop-ups (大门 button etc.) come from `camera_controls`; the doorbell's watch / talk switch sits on the bottom edge of its video. If the top list doesn't fit above the quick actions, the live view shrinks (min 120px) and then the list scrolls with a "… N more" pill; rows slide in and out. While the clock / area button are hidden for room, a further swipe or wheel past the end of the list (or the "↓ Keep scrolling for the map" chip under it) slides to a second page with them, like a phone's notifications sitting above the home screen (swipe / wheel back or the "↑ alerts" chip returns; a new alert or 15 s without touch also returns). |
| `camera_controls` | Controls under a camera's video in every camera pop-up (person zones, gate card, area camera rows, visitor all use one builder, so a camera looks the same however it was reached; only the back arrow follows the path). `{ camera.x: [ entry, ... ] }` or `{ camera.x: { label?, icon?, controls: [ ... ] } }`; an entry is an entity id or `{ entity, label?, icon?, gate? }`. `gate: true` makes the 大门 row (state + button). Every gate button (these rows and the 大门 row in the area list) needs a second tap to open (the button turns red and reads "tap again" for 4 s); closing is one tap. Opening the gate from the area list closes the pop-up (no inline camera any more: the home screen's gate alert card already shows it); in a camera pop-up it stays open. One control is a plain row; more than one collapse into a single expandable control (label default 控制 / Controls, the header shows how many are on) and the individual rows show once it is expanded. Cameras not listed show no controls. Without this option the gate camera and the doorbell get the 大门 row. Example: `camera.dahua_front_door: [{entity: switch.gate, gate: true}, light.a, light.b]`. |
| `ha_icons` | `true` uses each area's Home Assistant icon (`mdi:*`) on the map, in the area list and in area sheet headers; `areas.<id>.icon` still wins. |
| `floorplan` | Replaces the area button with a 3D floor plan you can tap (see below). |
| `areas.<area_id>` | `rows`, `add`, `exclude`, `cameras`, `hide`, `name`, `roman`, `icon`, `cat` (`common`/`function`/`room`), `common`, `device_columns`. |
| `entities.<entity_id>` | `name`, `sub`, `icon`, `order`, `kind` (curtain / sheer), `gate: true` + `cam` (render a switch as a gate row with a live camera view). Overrides win over the automatic naming. |
| `layout` | `mobile` (default) or `panel` (480x480 wall panel: clock + date, optional `people` chips (`[{entity, name}]`; omit for clock + date only), compact sizing, `idle_return` seconds (default 60 in panel layout) that closes sheets after no touch; `hide_header: true` hides HA's top toolbar so the card gets the full height; `top_offset` px of top padding, default 22; badges sit on top, clock + date just above the area button). `min_gap` px (default 12) is the gap kept below the top list: when alert rows (gate, visitor, person zones) leave less room than that, the area button is hidden (panel layout: the clock + date too) until they clear). |
| `stream_names` | `{camera_entity: go2rtc_stream}` – stream to play for a camera (e.g. an H.264 `_sub` stream for a wall panel). |
| `exclude`, `order`, `area_hints`, `icon_hints` | Hide entities, order areas, tune icon / category guesses. |
| `device_columns` | Fan / air-con / TV / vacuum tiles per row in area sheets (default `3`; per-area override in `areas.<id>.device_columns`). |
| `strip_area_prefix` | `false` keeps the area name in entity names inside area sheets (default strips it). |
| `camera_ratios`, `sun_entity` | Per-camera aspect ratio (default `16/9`); sun entity for day / night loading frames. |

Icons: `i-bulb i-fan i-ac i-curtain i-tv i-door i-gate i-car i-sofa i-bed i-book i-table i-stove i-cabinet i-balcony i-frame i-path i-tree i-bell i-shield i-cctv i-power i-drop i-vacuum i-moon i-away i-washer i-dryer`.

## Floor plan

`floorplan` draws your floor as an oblique 3D plan in place of the area button. Floors stay square while walls stand up; the upper storey is raised by `storey` above rooms marked `ground: true`. Tapping any room opens its area's sheet (no back arrow); with `tap_radius: 26` only a circle of that many px around each icon is tappable instead, for rooms that sit close together; `all_areas: true` adds a small "All areas" chip that opens the area list. Each area shows its icon at the centre of its rooms, with corner dots for what's running besides lights (fan top-left, air-con top-right, TV / appliance bottom-left, curtain open bottom-right). A room glows while one of its lights is on: `lights` maps a light to a room, and unmapped lights light the area's first listed room.

Coordinates are plan units at any scale; `view` is the visible box `[x, y, w, h]`.

```yaml
floorplan:
  view: [0, -60, 620, 460]
  storey: 42              # 0 = single level
  wall_height: 26
  rooms:
    - { id: living, area: living_room, points: [[100,20],[400,20],[400,200],[100,200]], walls: true }
    - { id: bath, area: bedroom, floor: wet, points: [[400,20],[500,20],[500,100],[400,100]], walls: true }
    - { id: bed, area: bedroom, points: [[400,100],[500,100],[500,200],[400,200]], walls: true }
    - { id: yard, area: garden, floor: court, ground: true, points: [[20,200],[600,200],[600,380],[20,380]] }
  house: [[97,17],[503,17],[503,203],[97,203]]   # outer faces of the storey below
  partitions: [[[400,100],[500,100]]]              # walls inside one area: drawn low
  lights: { light.bath_ceiling: bath }
  gate: { entity: switch.gate, a: [20,250], b: [20,330], panels: 4 }
```

Other keys: `site`, `verge`, `paving` (ground polygons), `slab`, `slab_edges`, `posts`, `shadow`, `walls` (`{points, height, thickness, layer, closed}`), `ground_walls` (same, plus `mitre: true`), `open` (wall lines left open), `dividers`, `dashed`, `furniture` (`{points: [x0,y0,x1,y1], height}`), room `floor` (`room`, `wet`, `wood`, `terrace`, `court`, `stair`), room `stairs` (`{y: [y0,y1], runs: [[from, to, treads, shade, shade], ...]}`), room `visible` and `patches`, and `icons` (`{area_id: [x, y]}`) to pin an icon. Colours come from `fp-*` theme variables (`fp-room`, `fp-wall`, `fp-glow`, `fp-fan`, ...), overridable in `theme_vars`.

## Notes

- Camera sheets use `custom:webrtc-camera` streams named after the camera entity.
- Learned loading frames are stored in the browser's localStorage (`floor-cam:*`), per device.
- Cards are tuned for portrait phones (about 430 px wide).

## License

MIT
