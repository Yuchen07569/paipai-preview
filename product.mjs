import { venues, locations, rankVenues, answerQuestion } from './app.mjs';

const demoImages = {
  hero: './assets/generated/volleyball-night-hero.jpg',
  indoor: './assets/generated/indoor-arena-demo.jpg',
  community: './assets/generated/community-activity-demo.jpg',
  outdoor: './assets/generated/outdoor-court-demo.jpg'
};

const volleyballStickers = [
  ['mikasa-v200w', '米卡萨 V200W'], ['mikasa-v330w', '米卡萨 V330W'],
  ['mikasa-v200w-vnl', '米卡萨 V200W-VNL'], ['mikasa-bv550c', '米卡萨 BV550C'],
  ['molten-v5m5000', '摩腾 V5M5000'], ['molten-v5m4500', '摩腾 V5M4500'],
  ['molten-v5m4000', '摩腾 V5M4000'], ['molten-v5m3500', '摩腾 V5M3500'],
  ['lanhua-s11-green', '兰华 S11 绿黄'], ['lanhua-s11-blue', '兰华 S11 蓝黄'],
  ['lanhua-s11-red', '兰华 S11 红白'], ['lanhua-mv518-ace1981', '兰华 MV518 / ACE1981'],
  ['mikasa-v200w-usa', '米卡萨 V200W-USA'], ['mikasa-v200w-usan', '米卡萨 V200W-USAN'],
  ['mikasa-v360w-lovb', '米卡萨 V360W-LOVB'], ['mikasa-v360w', '米卡萨 V360W'],
  ['mikasa-v300w-at', '米卡萨 V300W-AT'], ['mikasa-bv551e', '米卡萨 BV551E'],
  ['mikasa-bv540e-aau', '米卡萨 BV540E-AAU'], ['mikasa-bv540e-usa', '米卡萨 BV540E-USA'],
  ['mikasa-bv543c-vxa-y', '米卡萨 BV543C-VXA-Y'], ['mikasa-bv535c-wyb-1', '米卡萨 BV535C-WYB-1'],
  ['mikasa-bv552c-f', '米卡萨 BV552C-F'], ['mikasa-bv552c-wybr', '米卡萨 BV552C-WYBR']
].map(([id, name]) => ({ id, name, src: `./assets/stickers/${id}.png` }));

function venueImage(venue) {
  return venue.scene.includes('室内') ? demoImages.indoor : demoImages.outdoor;
}

function venueGallery(venue) {
  const primary = venueImage(venue);
  return [primary, primary === demoImages.indoor ? demoImages.community : demoImages.hero, demoImages.outdoor, demoImages.indoor, demoImages.community];
}

function activityImage(activity) {
  return activity.level.includes('零基础') || activity.level.includes('新手') ? demoImages.community : demoImages.hero;
}

export const activities = [
  {
    id: 'beginner-evening', venueId: 'people-gymnasium',
    title: '第一次也能来的排球晚场', date: '2026-08-28', weekday: '周五', time: '19:30–21:30',
    level: '零基础 / 新手', price: 35, capacity: 18, joined: 11,
    tags: ['新手友好', '可单人参加', '提供训练球'], host: '排排发起',
    description: '从热身、垫球和传球开始，按经验分组。第一次参加也不需要自己找搭子。',
    equipment: '建议穿防滑运动鞋；计划提供训练球，不提供护膝。',
    arrival: '成行后发送集合时间、场馆入口和联系人。'
  },
  {
    id: 'nankai-weekend', venueId: 'nankai-balitai',
    title: '南开周末轻松排球', date: '2026-08-30', weekday: '周日', time: '14:00–16:00',
    level: '新手 / 初级', price: 25, capacity: 16, joined: 13,
    tags: ['还差 3 人', '男女不限', '轻对抗'], host: '排排发起',
    description: '以连续回合和轻对抗为主，不追求竞技强度。高校入场权限需在成行前确认。',
    equipment: '自备运动鞋与饮用水；球网和排球随成行通知确认。',
    arrival: '集合点和入校方式将在确认后通过程序内消息发送。'
  },
  {
    id: 'air-volleyball-trial', venueId: 'fukang-air-volleyball',
    title: '气排球入门体验', date: '2026-09-02', weekday: '周三', time: '18:30–20:00',
    level: '零基础', price: 20, capacity: 12, joined: 6,
    tags: ['节奏轻松', '室外', '天气相关'], host: '排排发起',
    description: '认识气排球规则，练习发球和简单站位。实际场地开放与天气需要合作后重新确认。',
    equipment: '计划提供气排球；建议穿轻便运动服。',
    arrival: '活动前 2 小时根据天气发送是否照常进行。'
  },
  {
    id: 'rally-night', venueId: 'workers-palace-2',
    title: '下班后来一场', date: '2026-09-04', weekday: '周五', time: '19:00–21:00',
    level: '初级 / 进阶', price: 30, capacity: 18, joined: 8,
    tags: ['下班场', '轮转组队', '可候补'], host: '排排发起',
    description: '面向会基础垫传的球友，现场随机分队并轮转。达到招募人数后确认场地。',
    equipment: '自备护膝与运动鞋；用球随成行通知确认。',
    arrival: '确认后发送场地入口、联系人和分组编号。'
  }
];

export const abilityMetrics = [
  ['serve', '发球'], ['receive', '一传'], ['set', '二传'],
  ['attack', '进攻'], ['block', '拦网'], ['defense', '防守']
];

export const volleyballPositions = [
  { id: 'outside', name: '主攻', code: 'OH', note: '进攻与一传都要承担' },
  { id: 'middle', name: '副攻', code: 'MB', note: '快攻、拦网与移动判断' },
  { id: 'setter', name: '二传', code: 'S', note: '组织进攻与稳定传配' },
  { id: 'opposite', name: '接应', code: 'OPP', note: '右翼进攻与前排拦网' },
  { id: 'libero', name: '自由人', code: 'L', note: '一传、防守与场上覆盖' },
  { id: 'exploring', name: '暂未确定', code: 'ALL', note: '先体验轮转，再寻找位置' }
];

export function abilityLevel(values) {
  const scores = abilityMetrics.map(([key]) => Number(values[key]) || 0);
  return Math.round((scores.reduce((sum, score) => sum + score, 0) / scores.length / 20) * 10) / 10;
}

export function radarPoints(values, radius = 78, center = 100) {
  return abilityMetrics.map(([key], index) => {
    const angle = -Math.PI / 2 + index * Math.PI / 3;
    const scaled = Math.max(0, Math.min(100, Number(values[key]) || 0)) / 100 * radius;
    return `${(center + Math.cos(angle) * scaled).toFixed(1)},${(center + Math.sin(angle) * scaled).toFixed(1)}`;
  }).join(' ');
}

export function outcomeScore(outcomes = {}) {
  const accurate = Math.max(0, Number(outcomes.accurate) || 0);
  const playable = Math.max(0, Number(outcomes.playable) || 0);
  const missed = Math.max(0, Number(outcomes.missed) || 0);
  const total = accurate + playable + missed;
  return total ? Math.round((accurate + playable * 0.5) / total * 100) : 0;
}

export function valuesFromMatches(matches = []) {
  return Object.fromEntries(abilityMetrics.map(([key]) => {
    const totals = matches.reduce((sum, match) => {
      const item = match.metrics?.[key] || {};
      sum.accurate += Number(item.accurate) || 0;
      sum.playable += Number(item.playable) || 0;
      sum.missed += Number(item.missed) || 0;
      return sum;
    }, { accurate: 0, playable: 0, missed: 0 });
    return [key, outcomeScore(totals)];
  }));
}

function initialAbility() {
  return {
    source: '本人自评', primaryPosition: 'exploring', secondaryPosition: 'outside',
    dominantHand: '右手', playCount: 0, visibility: '活动组织者与好友可见', matches: [],
    values: { serve: 42, receive: 56, set: 48, attack: 44, block: 30, defense: 54 }
  };
}

export function spotsLeft(activity, hasActiveRegistration = false) {
  return Math.max(0, activity.capacity - activity.joined - (hasActiveRegistration ? 1 : 0));
}

export function validateProfile(input) {
  const errors = [];
  if (!String(input.nickname || '').trim()) errors.push('请填写昵称');
  if (!/^1\d{10}$/.test(String(input.phone || ''))) errors.push('请填写 11 位手机号');
  if (!input.city) errors.push('请选择常用区域');
  if (!input.experience) errors.push('请选择排球经验');
  if (!input.agreed) errors.push('需要同意隐私说明');
  return errors;
}

export function nextRegistrationStatus(current, action) {
  const transitions = {
    submitted: { confirm: 'confirmed', cancel: 'user_cancelled' },
    confirmed: { attend: 'attended', cancel: 'user_cancelled' }
  };
  return transitions[current]?.[action] || current;
}

export function mapLinks(venue) {
  const name = encodeURIComponent(venue.name);
  const address = encodeURIComponent(`天津市${venue.district}${venue.address}`);
  const marker = `coord:${venue.lat},${venue.lng};title:${name};addr:${address}`;
  return [
    {
      id: 'tencent',
      label: '腾讯地图',
      hint: '查看地点并设为终点',
      url: `https://apis.map.qq.com/uri/v1/marker?marker=${marker}&coord_type=1&referer=paipai-demo`
    },
    {
      id: 'baidu',
      label: '百度地图',
      hint: '查看地点并选择到这去',
      url: `https://api.map.baidu.com/marker?location=${venue.lat},${venue.lng}&title=${name}&content=${address}&output=html&src=webapp.paipai.demo&coord_type=wgs84`
    },
    {
      id: 'amap',
      label: '高德地图',
      hint: '优先尝试调起高德 App',
      url: `https://uri.amap.com/marker?position=${venue.lng},${venue.lat}&name=${name}&src=paipai&coordinate=wgs84&callnative=1`
    }
  ];
}

const STORAGE_KEY = 'paipai-product-demo-v1';
const isBrowser = typeof document !== 'undefined';

function initialStore() {
  return {
    profile: null,
    ability: initialAbility(),
    savedVenues: [],
    registrations: [],
    messages: [
      { id: 'welcome', conversationId: 'system', from: 'assistant', text: '欢迎来到排排。完成报名后，确认结果和到场信息都会从这里发送。', at: '刚刚' },
      { id: 'friend-hi', conversationId: 'friend:chenxia', from: 'assistant', text: '嗨，我也是刚来天津不久。以后有新手局可以一起去。', at: '昨天' }
    ]
  };
}

function loadStore() {
  if (!isBrowser) return initialStore();
  try {
    return { ...initialStore(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
  } catch {
    return initialStore();
  }
}

const state = {
  store: loadStore(),
  locationKey: 'heping',
  activityFilter: 'all',
  activityDate: 'all',
  venueView: 'map',
  venuePhotoIndex: 0,
  selectedVenueId: null,
  onboardingDraft: {},
  onboardingStep: 1,
  positionPicker: null,
  map: null
};

const app = isBrowser ? document.querySelector('#app') : null;
const nav = isBrowser ? document.querySelector('#bottom-nav') : null;
const subtitle = isBrowser ? document.querySelector('#page-subtitle') : null;
const toast = isBrowser ? document.querySelector('.toast') : null;

function saveStore() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.store));
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => { toast.hidden = true; }, 2200);
}

function go(routeName) {
  location.hash = routeName;
}

function activeRegistration(activityId) {
  return state.store.registrations.find(item => item.activityId === activityId && !['user_cancelled', 'activity_cancelled'].includes(item.status));
}

function activityWithState(activity) {
  const registration = activeRegistration(activity.id);
  return { ...activity, registration, left: spotsLeft(activity, Boolean(registration)) };
}

function venueById(id) {
  return venues.find(item => item.id === id);
}

function statusLabel(status) {
  return ({ submitted: '等待确认', confirmed: '报名成功', attended: '已到场', user_cancelled: '已取消' })[status] || status;
}

function setShell(routeName, title = '天津排球') {
  subtitle.textContent = title;
  const root = routeName.split('/')[0];
  const active = root === 'activities' || root === 'activity' || root === 'registration' || root === 'registration-success' ? 'activities'
    : root === 'messages' || root === 'chat' || root === 'venue-chat' ? 'messages'
      : root === 'profile' || root === 'registrations' || root === 'friends' || root === 'saved' ? 'profile' : 'home';
  nav.hidden = routeName === 'onboarding';
  const navIcon = route => ({
    home: '<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    activities: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4m8-4v4M3 10h18"/></svg>',
    messages: '<svg viewBox="0 0 24 24"><path d="M4 5.5h16v11H9l-5 4z"/><path d="M8 10h8m-8 3h5"/></svg>',
    profile: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.2-6.3 7.5-6.3s6.8 2.1 7.5 6.3"/></svg>'
  })[route];
  nav.innerHTML = [
    ['home', '首页', '发现'],
    ['activities', '活动', '去运动'],
    ['messages', '消息', `${state.store.messages.length} 条`],
    ['profile', '我的', state.store.profile?.nickname || '未登录']
  ].map(([route, label, small]) => `<a class="nav-item ${active === route ? 'active' : ''}" href="#${route}"><i class="nav-icon" aria-hidden="true">${navIcon(route)}</i><span>${label}</span><small>${escapeHtml(small)}</small></a>`).join('');
}

function renderOnboarding() {
  setShell('onboarding', '天津排球 · 新用户注册');
  if (state.onboardingStep === 1) {
    app.innerHTML = `<section class="onboarding-page">
      <div class="onboarding-visual photo-visual" style="--photo:url('${demoImages.hero}')"><span class="volleyball-mark">排</span><strong>从一次报名开始</strong><small>天津排球，从这里找到组织</small></div>
      <form class="floating-form" data-form="onboarding-basic">
        <span class="eyebrow">1 / 2 · 创建账号</span>
        <h1>你好，欢迎来到排排</h1>
        <p>填写用于活动联系的基本信息。当前版本不会发送短信。</p>
        <label>昵称<input name="nickname" autocomplete="nickname" value="${escapeHtml(state.onboardingDraft.nickname || '')}" placeholder="球友怎么称呼你" required></label>
        <label>手机号<input name="phone" inputmode="numeric" autocomplete="tel" value="${escapeHtml(state.onboardingDraft.phone || '')}" placeholder="用于报名联系" maxlength="11" required></label>
        <button class="primary-action full" type="submit">继续</button>
      </form>
    </section>`;
    return;
  }
  app.innerHTML = `<section class="onboarding-page">
    <div class="onboarding-visual compact photo-visual" style="--photo:url('${demoImages.outdoor}')"><span class="volleyball-mark">津</span><strong>设置你的运动起点</strong><small>之后可以在“我的”修改</small></div>
    <form class="floating-form" data-form="onboarding-preferences">
      <span class="eyebrow">2 / 2 · 参与偏好</span>
      <h1>先从天津排球开始</h1>
      <label>常用区域<select name="city" required>${Object.entries(locations).map(([key, item]) => `<option value="${key}">${escapeHtml(item.label)}</option>`).join('')}</select></label>
      <fieldset><legend>排球经验</legend>
        <label class="choice"><input type="radio" name="experience" value="第一次尝试" required><span>第一次尝试<small>希望有人说明规则和装备</small></span></label>
        <label class="choice"><input type="radio" name="experience" value="新手"><span>新手<small>接触过垫球和传球</small></span></label>
        <label class="choice"><input type="radio" name="experience" value="有固定经验"><span>有固定经验<small>可以参加基础对抗</small></span></label>
      </fieldset>
      <label class="agreement"><input type="checkbox" name="agreed" required>我已阅读并同意隐私说明：当前资料保存在本机，可随时清空。</label>
      <button class="primary-action full" type="submit">完成注册并进入排排</button>
      <button class="text-button" type="button" data-action="onboarding-back">返回上一步</button>
    </form>
  </section>`;
}

function activityCard(activity) {
  const item = activityWithState(activity);
  return `<a class="activity-card" href="#activity/${item.id}">
    <div class="activity-poster photo-card" style="--photo:url('${activityImage(item)}')"><span>${escapeHtml(item.weekday)}</span><strong>${escapeHtml(item.date.slice(5).replace('-', '/'))}</strong><small>活动招募</small></div>
    <div class="activity-copy"><div class="card-top"><span class="tag success">${escapeHtml(item.level)}</span><strong>¥${item.price}</strong></div>
      <h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.time)} · ${escapeHtml(venueById(item.venueId).district)}</p>
      <div class="tag-row">${item.tags.slice(0, 2).map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
      <div class="card-bottom"><span>${item.registration ? statusLabel(item.registration.status) : `还可报名 ${item.left} 人`}</span><b>查看 →</b></div>
    </div>
  </a>`;
}

function compactVenueCard(venue) {
  return `<a class="compact-card" href="#venue/${venue.id}"><span class="venue-thumb" style="--photo:url('${venueImage(venue)}')" aria-label="场地图片"><b>${venue.rank}</b></span><div><strong>${escapeHtml(venue.name)}</strong><small>${escapeHtml(venue.district)} · ${venue.distance.toFixed(1)} km</small><em>${escapeHtml(venue.statusLabel)}</em></div><span>›</span></a>`;
}

function renderHome() {
  setShell('home', '天津排球 · 为野生球友找入口');
  const ranked = rankVenues(venues, locations[state.locationKey]);
  app.innerHTML = `<section class="product-page">
    <div class="hero-card photo-hero" style="--photo:url('${demoImages.hero}')"><span class="eyebrow">天津 · 排球</span><h1>${state.store.profile ? `你好，${escapeHtml(state.store.profile.nickname)}` : '今天想去打球吗？'}</h1>
      <p>先判断哪里能去、什么活动适合，再完成报名和到场。</p>
      <div class="hero-actions"><a class="primary-action" href="#activities">找本周活动</a><a class="secondary-action" href="#venues">查看附近场地</a></div>
    </div>
    <div class="section-head"><div><span class="eyebrow">本周可参加</span><h2>一个人也能报名</h2></div><a href="#activities">全部活动</a></div>
    <div class="activity-stack">${activities.slice(0, 2).map(activityCard).join('')}</div>
    <div class="section-head"><div><span class="eyebrow">按距离排序</span><h2>附近场地线索</h2></div><label class="inline-select"><span class="sr-only">选择区域</span><select data-location>${Object.entries(locations).map(([key, item]) => `<option value="${key}" ${key === state.locationKey ? 'selected' : ''}>${item.label.replace('天津 · ', '')}</option>`).join('')}</select></label></div>
    <div class="home-map-wrap"><div class="mini-map" id="venue-map" aria-label="天津排球场地地图"></div><a class="home-map-expand" href="#venues">⛶ 放大地图</a></div>
    <div class="compact-list">${ranked.slice(0, 3).map(compactVenueCard).join('')}</div>
  </section>`;
  app.querySelector('[data-location]').addEventListener('change', event => { state.locationKey = event.target.value; renderHome(); });
  renderMap(ranked.slice(0, 6));
}

function mapSelectionCard(venue) {
  return `<a class="map-selection-card" href="#venue/${venue.id}"><span class="map-selection-photo" style="--photo:url('${venueImage(venue)}')"><b>${venue.rank}</b></span><span><strong>${escapeHtml(venue.name)}</strong><small>${escapeHtml(venue.district)} · ${venue.distance.toFixed(1)} km</small><em>${escapeHtml(venue.statusLabel)}</em></span><b>查看 ›</b></a>`;
}

function mapMarkerIcon(venue, active, detailed) {
  const shortName = venue.name.replace('天津市', '').replace('排球场', '').slice(0, 9);
  const html = `<div class="map-label-marker ${detailed ? 'detailed' : 'compact'} ${active ? 'active' : ''}"><b>${venue.rank}</b><span>${escapeHtml(shortName)}</span></div>`;
  return L.divIcon({ className: '', html, iconSize: [150, 44], iconAnchor: [20, 22] });
}

function renderMap(items, { detailed = false } = {}) {
  if (!window.L) { document.querySelector('#venue-map').innerHTML = '<div class="map-fallback">地图暂未加载，下面的场地列表仍可使用。</div>'; return; }
  state.map?.remove();
  const origin = locations[state.locationKey];
  state.map = L.map('venue-map', { zoomControl: detailed, scrollWheelZoom: detailed, touchZoom: true, dragging: true, tap: true }).setView([origin.lat, origin.lng], 12);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap &copy; CARTO' }).addTo(state.map);
  const markers = new Map();
  const selectVenue = venue => {
    state.selectedVenueId = venue.id;
    items.forEach(item => {
      const marker = markers.get(item.id);
      marker.setIcon(mapMarkerIcon(item, item.id === venue.id, detailed));
      marker.setZIndexOffset(item.id === venue.id ? 1000 : 0);
    });
    const selection = document.querySelector('#map-selection');
    if (selection) selection.innerHTML = mapSelectionCard(venue);
    if (detailed) state.map.panTo([venue.lat, venue.lng], { animate: true });
  };
  items.forEach(venue => {
    const marker = L.marker([venue.lat, venue.lng], { icon: mapMarkerIcon(venue, venue.id === state.selectedVenueId, detailed) }).addTo(state.map);
    markers.set(venue.id, marker);
    marker.on('click', () => detailed ? selectVenue(venue) : go('venues'));
  });
  if (detailed) selectVenue(items.find(item => item.id === state.selectedVenueId) || items[0]);
}

function renderVenues() {
  setShell('home', '天津排球 · 场地');
  const ranked = rankVenues(venues, locations[state.locationKey]);
  app.innerHTML = `<section class="product-page"><a class="back" href="#home">← 返回首页</a>
    <div class="section-head"><div><span class="eyebrow">天津场地</span><h1>附近排球场地</h1></div></div>
    <label class="block-select">当前位置<select data-location>${Object.entries(locations).map(([key, item]) => `<option value="${key}" ${key === state.locationKey ? 'selected' : ''}>${item.label}</option>`).join('')}</select></label>
    <div class="view-switch" aria-label="场地查看方式"><button data-action="venue-view" data-view="map" aria-pressed="${state.venueView === 'map'}">地图</button><button data-action="venue-view" data-view="list" aria-pressed="${state.venueView === 'list'}">列表</button></div>
    ${state.venueView === 'map' ? `<div class="map-stage"><div class="mini-map large" id="venue-map" aria-label="可缩放的天津排球场地真实地图"></div><div class="map-status"><span>真实地图 · 编号按距离</span><small>拖动或双指缩放 · 点场地名称查看</small></div><div class="map-tools"><button data-action="map-fullscreen" type="button" aria-label="全屏查看地图">⛶ <span>全屏</span></button><button data-action="map-recenter" type="button" aria-label="回到所选区域中心">◎</button></div><div class="map-selection" id="map-selection"></div></div>` : ''}<div class="compact-list ${state.venueView === 'map' ? 'map-companion-list' : ''}">${ranked.map(compactVenueCard).join('')}</div></section>`;
  app.querySelector('[data-location]').addEventListener('change', event => { state.locationKey = event.target.value; state.selectedVenueId = null; renderVenues(); });
  if (state.venueView === 'map') renderMap(ranked, { detailed: true });
}

function renderVenue(id) {
  const venue = venueById(id);
  if (!venue) return go('venues');
  const ranked = rankVenues(venues, locations[state.locationKey]);
  const current = ranked.find(item => item.id === id);
  const saved = state.store.savedVenues.includes(id);
  const navigationLinks = mapLinks(venue);
  const gallery = venueGallery(venue);
  setShell('home', '天津排球 · 场地详情');
  app.innerHTML = `<section class="product-page"><a class="back" href="#venues">← 返回场地</a>
    <div class="venue-hero photo-visual" style="--photo:url('${gallery[state.venuePhotoIndex]}')" data-region="P3-场地视觉"><strong>${escapeHtml(venue.name)}</strong><div class="photo-index">${state.venuePhotoIndex + 1} / 5</div><div class="gallery-controls" aria-label="场地图片">${Array.from({length: 5}, (_, index) => `<button data-action="venue-photo" data-index="${index}" aria-label="查看第 ${index + 1} 张图片" aria-pressed="${state.venuePhotoIndex === index}"></button>`).join('')}</div></div>
    <div class="detail-card"><div class="detail-title"><div><span class="tag warning">${escapeHtml(venue.statusLabel)}</span><h1>${escapeHtml(venue.name)}</h1><p>${escapeHtml(venue.district)} · ${escapeHtml(venue.address)} · ${current.distance.toFixed(1)} km</p></div><button class="save-button ${saved ? 'saved' : ''}" data-action="toggle-save" data-id="${id}" aria-label="收藏场地">${saved ? '♥' : '♡'}</button></div>
      <div class="fact-grid"><div><small>场地类型</small><strong>${escapeHtml(venue.type)}</strong></div><div><small>设备提供</small><strong>${escapeHtml(venue.equipment)}</strong></div><div><small>空调</small><strong>${escapeHtml(venue.air)}</strong></div><div><small>营业时间</small><strong>${escapeHtml(venue.hours)}</strong></div></div>
      <div class="content-section"><h2>场地介绍</h2><p>${escapeHtml(venue.intro)}</p></div>
      <details class="map-chooser" data-region="P3-地图导航"><summary>选择地图导航</summary><div class="map-options">${navigationLinks.map(item => `<a href="${item.url}" target="_blank" rel="noreferrer"><span class="map-logo ${item.id}">${item.label.slice(0, 1)}</span><span><strong>${item.label}</strong><small>${item.hint}</small></span><b>打开 ↗</b></a>`).join('')}</div><p>将打开你选择的地图服务；具体路线、路况和目的地入口以地图平台为准。</p></details>
      <div class="notice"><strong>信息边界</strong><span>${escapeHtml(venue.caveat)}</span></div>
      <div class="content-section"><h2>公开来源</h2>${venue.sources.map(source => `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.label)} ↗</a>`).join('')}</div>
      <div class="sticky-actions detail-actions"><a class="primary-action" href="#venue-chat/${id}">问问场地助手</a><a class="secondary-action" href="#activities">查看相关活动</a></div>
    </div></section>`;
}

function renderActivities() {
  setShell('activities', '天津排球 · 活动');
  const dates = [...new Set(activities.map(item => item.date))];
  const filtered = activities.filter(item => (state.activityDate === 'all' || item.date === state.activityDate) && (state.activityFilter === 'all' || (state.activityFilter === 'newbie' && item.level.includes('新手')) || (state.activityFilter === 'open' && activityWithState(item).left > 0)));
  app.innerHTML = `<section class="product-page"><div class="section-head"><div><span class="eyebrow">活动招募</span><h1>找到适合的一场</h1></div></div>
    <div class="date-strip" aria-label="按日期筛选"><button data-action="activity-date" data-date="all" aria-pressed="${state.activityDate === 'all'}"><small>全部</small><strong>日期</strong></button>${dates.map(date => { const item = activities.find(activity => activity.date === date); return `<button data-action="activity-date" data-date="${date}" aria-pressed="${state.activityDate === date}"><small>${escapeHtml(item.weekday)}</small><strong>${escapeHtml(date.slice(5).replace('-', '/'))}</strong></button>`; }).join('')}</div>
    <div class="filter-row">${[['all','全部'],['newbie','新手友好'],['open','仍可报名']].map(([key,label]) => `<button class="chip" data-action="activity-filter" data-filter="${key}" aria-pressed="${state.activityFilter === key}">${label}</button>`).join('')}</div>
    <div class="activity-stack">${filtered.map(activityCard).join('')}</div></section>`;
}

function renderActivity(id) {
  const raw = activities.find(item => item.id === id);
  if (!raw) return go('activities');
  const activity = activityWithState(raw);
  const venue = venueById(activity.venueId);
  setShell('activities', '天津排球 · 活动详情');
  app.innerHTML = `<section class="product-page"><a class="back" href="#activities">← 返回活动</a>
    <div class="activity-detail-hero photo-visual" style="--photo:url('${activityImage(activity)}')"><span>排排发起</span><h1>${escapeHtml(activity.title)}</h1><p>${escapeHtml(activity.date)} ${escapeHtml(activity.weekday)} · ${escapeHtml(activity.time)}</p></div>
    <div class="detail-card"><div class="tag-row">${activity.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
      <div class="activity-facts"><div><small>适合水平</small><strong>${escapeHtml(activity.level)}</strong></div><div><small>预计费用</small><strong>¥${activity.price} · 成行后确认</strong></div><div><small>招募名额</small><strong>${activity.left} / ${activity.capacity} 可登记</strong></div></div>
      <div class="content-section"><h2>活动说明</h2><p>${escapeHtml(activity.description)}</p></div>
      <a class="venue-inline" href="#venue/${venue.id}"><span>活动场地</span><strong>${escapeHtml(venue.name)}</strong><small>${escapeHtml(venue.address)} · 查看场地资料 →</small></a>
      <div class="content-section"><h2>需要准备</h2><p>${escapeHtml(activity.equipment)}</p></div>
      <div class="notice"><strong>活动成行说明</strong><span>提交后进入参与意向名单；场地、费用和联系人确认后，排排会通过站内消息通知。</span></div>
      <div class="detail-actions single">${activity.registration ? `<a class="primary-action full" href="#registrations">${statusLabel(activity.registration.status)} · 查看我的报名</a>` : activity.left ? `<a class="primary-action full" href="#registration/${activity.id}">单人报名</a>` : '<button class="primary-action full" disabled>名额已满</button>'}</div>
    </div></section>`;
}

function renderRegistration(id) {
  const activity = activities.find(item => item.id === id);
  if (!activity) return go('activities');
  if (activeRegistration(id)) return go('registrations');
  setShell('activities', '天津排球 · 报名确认');
  app.innerHTML = `<section class="product-page narrow"><a class="back" href="#activity/${id}">← 返回活动</a>
    <form class="form-card" data-form="registration" data-id="${id}"><span class="eyebrow">报名确认</span><h1>${escapeHtml(activity.title)}</h1>
      <div class="summary-row"><span>${escapeHtml(activity.date)} ${escapeHtml(activity.time)}</span><strong>¥${activity.price}</strong></div>
      <label>报名人<input name="nickname" value="${escapeHtml(state.store.profile.nickname)}" required></label>
      <label>联系电话<input name="phone" inputmode="numeric" value="${escapeHtml(state.store.profile.phone)}" maxlength="11" required></label>
      <label>想对活动方说明<textarea name="note" rows="3" placeholder="例如：第一次参加，希望安排新手组"></textarea></label>
      <label class="agreement"><input type="checkbox" name="agreed" required>我同意提交参与意向；活动成行前不会扣款或产生场地订单。</label>
      <button class="primary-action full" type="submit">提交报名</button>
    </form></section>`;
}

function renderRegistrationSuccess(id) {
  const activity = activities.find(item => item.id === id);
  setShell('activities', '天津排球 · 报名已提交');
  app.innerHTML = `<section class="result-page"><div class="result-mark">✓</div><span class="eyebrow">submitted · 等待确认</span><h1>报名已提交</h1><p>${escapeHtml(activity.title)}</p>
    <div class="notice"><span>活动成行后，确认结果和到场信息会通过站内消息发送。</span></div>
    <a class="secondary-action full" href="#registrations">先查看我的报名</a></section>`;
}

function renderMessages() {
  setShell('messages', '天津排球 · 消息');
  const recentSystem = [...state.store.messages].reverse().find(item => item.conversationId === 'system');
  app.innerHTML = `<section class="product-page"><div class="section-head"><div><span class="eyebrow">站内沟通</span><h1>消息</h1></div></div>
    <div class="conversation-list">
      <a class="conversation" href="#chat/system"><span class="avatar system">排</span><div><strong>报名与到场通知</strong><p>${escapeHtml(recentSystem?.text || '报名结果会显示在这里')}</p></div><small>${escapeHtml(recentSystem?.at || '')}</small></a>
      <a class="conversation" href="#chat/friend:chenxia"><span class="avatar">夏</span><div><strong>陈夏</strong><p>以后有新手局可以一起去。</p></div><small>昨天</small></a>
      <a class="conversation" href="#venue-chat/people-gymnasium"><span class="avatar venue">馆</span><div><strong>人民体育馆资料助手</strong><p>询问交通、设备和开放信息</p></div><small>公开资料</small></a>
    </div>
    <div class="notice"><strong>消息说明</strong><span>场地助手根据已收录资料回答；当前账号的消息保存在本机。</span></div>
  </section>`;
}

function renderChat(id, venueId = null) {
  const venue = venueId ? venueById(venueId) : null;
  const conversationId = venue ? `venue:${venue.id}` : id;
  const title = venue ? `${venue.name}资料助手` : id === 'system' ? '报名与到场通知' : '陈夏';
  setShell('messages', title);
  const stored = state.store.messages.filter(item => item.conversationId === conversationId);
  const initial = venue ? [{ from: 'assistant', text: `你好，我只根据公开资料回答${venue.name}的交通、设备、开放和预约问题。` }] : [];
  const all = [...initial, ...stored];
  app.innerHTML = `<section class="chat-page"><a class="back" href="#messages">← 返回消息</a><div class="chat-head"><strong>${escapeHtml(title)}</strong><small>${venue ? '公开资料问答 · 非实时客服' : '程序内部消息'}</small></div>
    <div class="chat-log" data-chat-log>${all.map(item => `<div class="bubble ${item.from === 'user' ? 'user' : 'assistant'}">${escapeHtml(item.text)}</div>`).join('') || '<div class="empty-state">还没有消息</div>'}</div>
    ${venue ? `<div class="suggestions">${['怎么去？','新手需要带什么？','有空调吗？','怎么预约？'].map(q => `<button data-action="quick-question" data-question="${q}">${q}</button>`).join('')}</div>` : ''}
    <form class="composer" data-form="chat" data-id="${escapeHtml(conversationId)}"><input name="message" autocomplete="off" placeholder="输入消息" required><button type="submit">发送</button></form></section>`;
  requestAnimationFrame(() => document.querySelector('.chat-log')?.scrollTo(0, 99999));
}

function renderProfile() {
  const profile = state.store.profile;
  const ability = state.store.ability || initialAbility();
  setShell('profile', '天津排球 · 我的');
  const activeCount = state.store.registrations.filter(item => !item.status.includes('cancel')).length;
  app.innerHTML = `<section class="product-page profile-page"><div class="profile-card profile-hero"><span class="profile-avatar">${escapeHtml(profile.nickname.slice(0,1))}</span><div><h1>${escapeHtml(profile.nickname)}</h1><p>${Number(ability.playCount) || 0} 次运动 · ${escapeHtml(locations[profile.city]?.label || '天津')}</p></div>${positionPickerMarkup(ability)}</div>
    <div class="profile-shortcuts" data-region="P8-我的快捷入口">
      <a href="#registrations"><strong>${activeCount}</strong><span>我的报名</span></a>
      <a href="#saved"><strong>${state.store.savedVenues.length}</strong><span>收藏场地</span></a>
      <a href="#friends"><strong>1</strong><span>我的球友</span></a>
      <a href="#ability"><strong>${abilityLevel(ability.values).toFixed(1)}</strong><span>能力卡</span></a>
    </div>
    ${renderStickerCalendar()}
    <a class="feedback-entry" href="#feedback"><span><small>帮助排排变得更好</small><strong>提交使用建议</strong></span><b>写反馈 →</b></a>
    <div class="notice"><strong>数据管理</strong><span>账号、报名、收藏和消息保存在当前浏览器。</span></div>
    <button class="danger-button" data-action="reset-demo">清空本机数据并重新注册</button>
  </section>`;
}

function positionById(id) {
  return volleyballPositions.find(item => item.id === id) || volleyballPositions.at(-1);
}

function positionPickerMarkup(ability) {
  const primary = positionById(ability.primaryPosition);
  const secondary = positionById(ability.secondaryPosition);
  return `<div class="position-tags" data-region="P7-位置标签">
    <button data-action="toggle-position-picker" data-kind="primary" aria-expanded="${state.positionPicker === 'primary'}"><small>当前位置</small><strong>${primary.code} · ${escapeHtml(primary.name)}</strong></button>
    <button data-action="toggle-position-picker" data-kind="secondary" aria-expanded="${state.positionPicker === 'secondary'}"><small>想尝试</small><strong>${secondary.code} · ${escapeHtml(secondary.name)}</strong></button>
  </div>
  ${state.positionPicker ? `<div class="position-picker"><span>${state.positionPicker === 'primary' ? '选择当前位置' : '选择想尝试的位置'}</span><div>${volleyballPositions.map(position => `<button class="${position.id === (state.positionPicker === 'primary' ? ability.primaryPosition : ability.secondaryPosition) ? 'active' : ''}" data-action="select-position" data-kind="${state.positionPicker}" data-position="${position.id}"><b>${position.code}</b><small>${position.name}</small></button>`).join('')}</div></div>` : ''}`;
}

export function calendarCells(year, month, markedDays = []) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const mondayOffset = (firstDay + 6) % 7;
  const days = new Date(year, month, 0).getDate();
  return [...Array(mondayOffset).fill(null), ...Array.from({ length: days }, (_, index) => ({ day: index + 1, marked: markedDays.includes(index + 1) }))];
}

function renderStickerCalendar() {
  const ability = state.store.ability || initialAbility();
  const year = 2026, month = 8;
  const matchDays = (ability.matches || []).filter(item => item.date?.startsWith('2026-08')).map(item => Number(item.date.slice(-2)));
  const attendedDays = state.store.registrations.filter(item => item.status === 'attended').map(item => activities.find(activity => activity.id === item.activityId)?.date).filter(date => date?.startsWith('2026-08')).map(date => Number(date.slice(-2)));
  const markedDays = [...new Set([...matchDays, ...attendedDays])];
  const cells = calendarCells(year, month, markedDays);
  return `<section class="sticker-calendar" data-region="P8-排球贴纸日历"><div class="calendar-head"><div><span class="eyebrow">运动足迹</span><h2>2026 年 8 月</h2></div><small>${markedDays.length} 个运动日</small></div>
    <div class="weekdays">${['一','二','三','四','五','六','日'].map(day => `<span>${day}</span>`).join('')}</div>
    <div class="calendar-grid">${cells.map(cell => cell ? `<div class="calendar-day ${cell.marked ? 'marked' : ''}">${cell.marked ? (() => { const sticker = volleyballStickers[markedDays.indexOf(cell.day) % volleyballStickers.length]; return `<img class="ball-sticker" src="${sticker.src}" alt="${sticker.name} 排球贴纸" title="${sticker.name}">`; })() : `<span>${cell.day}</span>`}<small>${cell.marked ? cell.day : ''}</small></div>` : '<div class="calendar-day empty"></div>').join('')}</div>
    ${markedDays.length ? '<p>每保存一场比赛记录或完成一次报名活动，就会从真实型号贴纸库中收集一枚排球。</p>' : '<p>完成比赛记录后，这里会出现你的第一枚型号排球贴纸。</p>'}
  </section>`;
}

function radarSvg(values) {
  const rings = [26, 52, 78].map(radius => `<circle cx="100" cy="100" r="${radius}" />`).join('');
  const axes = abilityMetrics.map(([, label], index) => {
    const angle = -Math.PI / 2 + index * Math.PI / 3;
    const x = 100 + Math.cos(angle) * 78;
    const y = 100 + Math.sin(angle) * 78;
    const lx = 100 + Math.cos(angle) * 94;
    const ly = 100 + Math.sin(angle) * 94 + 4;
    return `<line x1="100" y1="100" x2="${x}" y2="${y}"/><text x="${lx}" y="${ly}" text-anchor="middle">${label}</text>`;
  }).join('');
  return `<svg class="ability-radar" viewBox="0 0 200 200" role="img" aria-label="发球、一传、二传、进攻、拦网和防守能力雷达图"><g class="radar-grid">${rings}${axes}</g><polygon class="radar-value" points="${radarPoints(values)}"/></svg>`;
}

function renderAbility() {
  const ability = state.store.ability || initialAbility();
  const primary = positionById(ability.primaryPosition);
  const secondary = positionById(ability.secondaryPosition);
  const level = abilityLevel(ability.values).toFixed(1);
  setShell('profile', '天津排球 · 我的能力卡');
  app.innerHTML = `<section class="ability-page" data-region="P7-能力总览">
    <a class="back ability-back" href="#profile">← 返回我的</a>
    <div class="ability-hero photo-visual" style="--photo:url('${demoImages.hero}')">
      <div class="ability-identity"><span class="eyebrow">排排球员</span><h1>${escapeHtml(state.store.profile.nickname)}</h1><p>球员号 PAI-0001 · ${escapeHtml(locations[state.store.profile.city]?.label || '天津')}</p></div>
      <div class="ability-score"><small>排力</small><strong>${level}</strong><span>${escapeHtml(ability.source)}</span></div>
      ${positionPickerMarkup(ability)}
    </div>
    <div class="ability-sheet">
      <div class="ability-sheet-head"><div><span class="eyebrow">P7-能力雷达</span><h2>我的六项技术</h2></div><a href="#ability-edit">编辑资料</a></div>
      <p class="ability-disclaimer">${ability.matches?.length ? `当前六维值由 ${ability.matches.length} 场本人比赛记录累计计算` : '当前分数只来自本人自评'}，用于帮助选择合适活动，不是竞技认证，也不会进入公开排行榜。</p>
      <div class="radar-panel">${radarSvg(ability.values)}<div class="metric-list">${abilityMetrics.map(([key,label]) => `<div><span>${label}</span><strong>${ability.values[key]}</strong></div>`).join('')}</div></div>
      <div class="ability-facts"><div><small>惯用手</small><strong>${escapeHtml(ability.dominantHand)}</strong></div><div><small>运动次数</small><strong>${Number(ability.playCount) || 0} 次</strong></div><div><small>比赛记录</small><strong>${ability.matches?.length || 0} 场</strong></div></div>
      <section class="match-records" data-region="P7-比赛记录"><div class="ability-sheet-head"><div><span class="eyebrow">单场自我统计</span><h2>比赛记录</h2></div><a href="#match-record">＋ 记录一场</a></div>
        ${ability.matches?.length ? ability.matches.slice().reverse().map(match => `<article><div><strong>${escapeHtml(match.title)}</strong><small>${escapeHtml(match.date)} · 六项累计进入能力图</small></div><b>${abilityLevel(valuesFromMatches([match])).toFixed(1)}</b></article>`).join('') : '<p class="ability-disclaimer">还没有比赛记录。记录每项技术的到位、勉强到位和不到位次数后，六维图会按全部比赛累计更新。</p>'}
      </section>
      <div class="notice"><strong>评分如何变得更可信</strong><span>首版保留自评来源；后续只有实际共同参加后，才允许轻量互评或组织者确认。比赛视频与技术统计属于更晚阶段。</span></div>
    </div>
  </section>`;
}

function renderAbilityEdit() {
  const ability = state.store.ability || initialAbility();
  setShell('profile', '天津排球 · 编辑能力自评');
  app.innerHTML = `<section class="product-page narrow"><a class="back" href="#ability">← 返回能力卡</a><form class="form-card ability-form" data-form="ability">
    <span class="eyebrow">本人自评 · 可随时修改</span><h1>更新位置与能力</h1><p>按你目前在轻松对抗中的真实感受填写；不确定时保留中间值即可。</p>
    <label>优先位置<select name="primaryPosition">${volleyballPositions.map(item => `<option value="${item.id}" ${item.id === ability.primaryPosition ? 'selected' : ''}>${item.name}（${item.code}）</option>`).join('')}</select></label>
    <label>想尝试的位置<select name="secondaryPosition">${volleyballPositions.map(item => `<option value="${item.id}" ${item.id === ability.secondaryPosition ? 'selected' : ''}>${item.name}（${item.code}）</option>`).join('')}</select></label>
    <div class="slider-list">${abilityMetrics.map(([key,label]) => `<label><span>${label}<output>${ability.values[key]}</output></span><input type="range" name="${key}" min="0" max="100" step="5" value="${ability.values[key]}" data-ability-range></label>`).join('')}</div>
    <label>惯用手<select name="dominantHand"><option ${ability.dominantHand === '右手' ? 'selected' : ''}>右手</option><option ${ability.dominantHand === '左手' ? 'selected' : ''}>左手</option></select></label>
    <label>运动次数<input type="number" name="playCount" min="0" max="9999" value="${Number(ability.playCount) || 0}" required></label>
    <button class="primary-action full" type="submit">保存能力卡</button>
  </form></section>`;
  app.querySelectorAll('[data-ability-range]').forEach(input => input.addEventListener('input', () => { input.previousElementSibling.querySelector('output').textContent = input.value; }));
}

function renderMatchRecord() {
  setShell('profile', '天津排球 · 记录一场比赛');
  const metricRows = abilityMetrics.map(([key, label]) => `<fieldset class="outcome-row"><legend>${label}</legend>${[
    ['accurate','到位'], ['playable','勉强到位'], ['missed','不到位']
  ].map(([outcome, text]) => `<label><span>${text}</span><input type="number" name="${key}-${outcome}" min="0" max="999" value="0" inputmode="numeric" required></label>`).join('')}</fieldset>`).join('');
  app.innerHTML = `<section class="product-page narrow"><a class="back" href="#ability">← 返回能力卡</a><form class="form-card match-form" data-form="match-record">
    <span class="eyebrow">P7-单场比赛记录</span><h1>记录一场比赛</h1><p>按本场每次触球结果统计。到位表示达到战术目标；勉强到位表示仍可继续组织；不到位表示失误或无法继续组织。</p>
    <label>比赛名称<input name="title" value="天津排球练习赛" maxlength="30" required></label><label>日期<input type="date" name="date" value="${new Date().toISOString().slice(0,10)}" required></label>
    <div class="outcome-legend"><span>到位 <b>100%</b></span><span>勉强到位 <b>50%</b></span><span>不到位 <b>0%</b></span></div>
    <div class="outcome-list">${metricRows}</div><button class="primary-action full" type="submit">保存并更新六维图</button>
  </form></section>`;
}

function renderRegistrations() {
  setShell('profile', '天津排球 · 我的报名');
  const items = state.store.registrations.map(reg => ({ reg, activity: activities.find(item => item.id === reg.activityId) })).filter(item => item.activity);
  app.innerHTML = `<section class="product-page"><a class="back" href="#profile">← 返回我的</a><div class="section-head"><div><span class="eyebrow">履约状态</span><h1>我的报名</h1></div></div>
    <div class="registration-list">${items.length ? items.map(({reg,activity}) => `<article class="registration-card"><div><span class="tag ${reg.status === 'confirmed' || reg.status === 'attended' ? 'success' : 'warning'}">${statusLabel(reg.status)}</span><h3>${escapeHtml(activity.title)}</h3><p>${escapeHtml(activity.date)} · ${escapeHtml(activity.time)}</p></div>
      ${reg.status === 'confirmed' ? `<div class="arrival-info">${escapeHtml(activity.arrival)}</div>` : ''}
      ${['submitted','confirmed'].includes(reg.status) ? `<button class="text-danger" data-action="cancel-registration" data-id="${activity.id}">取消报名</button>` : ''}
    </article>`).join('') : '<div class="empty-state"><strong>还没有报名</strong><a href="#activities">去看看活动</a></div>'}</div></section>`;
}

function renderSaved() {
  setShell('profile', '天津排球 · 收藏场地');
  const items = rankVenues(venues.filter(item => state.store.savedVenues.includes(item.id)), locations[state.locationKey]);
  app.innerHTML = `<section class="product-page"><a class="back" href="#profile">← 返回我的</a><h1>收藏场地</h1><div class="compact-list">${items.length ? items.map(compactVenueCard).join('') : '<div class="empty-state">还没有收藏场地</div>'}</div></section>`;
}

function renderFriends() {
  setShell('profile', '天津排球 · 好友与球友');
  app.innerHTML = `<section class="product-page"><a class="back" href="#profile">← 返回我的</a><h1>好友与球友</h1><div class="friend-card"><span class="avatar">夏</span><div><strong>陈夏</strong><p>初到天津 · 新手排球</p><small>共同参加活动后添加</small></div><a href="#chat/friend:chenxia">聊天</a></div><div class="notice"><strong>关系边界</strong><span>只有共同参加活动或双方同意后才能建立好友关系。</span></div></section>`;
}

function renderFeedback() {
  setShell('profile', '天津排球 · 使用建议');
  app.innerHTML = `<section class="product-page narrow"><a class="back" href="#profile">← 返回我的</a>
    <form class="form-card" data-form="feedback"><span class="eyebrow">产品共创</span><h1>告诉我们哪里需要改</h1><p>你的建议会整理成一段可分享文字，可直接通过微信、短信或其他应用发送给排排团队。</p>
      <label>反馈页面<select name="page"><option>注册</option><option>首页</option><option>地图与场地</option><option>活动与报名</option><option>能力卡</option><option>我的</option><option>其他</option></select></label>
      <label>使用感受<textarea name="message" rows="6" maxlength="500" placeholder="例如：我没有看懂地图上的编号，建议……" required></textarea></label>
      <label>怎么称呼你（选填）<input name="contact" maxlength="40" placeholder="昵称或联系方式"></label>
      <button class="primary-action full" type="submit">分享反馈</button>
    </form></section>`;
}

function addMessage(conversationId, from, text) {
  state.store.messages.push({ id: `${Date.now()}-${Math.random()}`, conversationId, from, text, at: '刚刚' });
  saveStore();
}

function updateRegistration(activityId, action) {
  const registration = state.store.registrations.find(item => item.activityId === activityId && !item.status.includes('cancel'));
  if (!registration) return;
  const next = nextRegistrationStatus(registration.status, action);
  registration.status = next;
  const activity = activities.find(item => item.id === activityId);
  if (next === 'confirmed') addMessage('system', 'assistant', `《${activity.title}》报名已确认。${activity.arrival}`);
  if (next === 'attended') addMessage('system', 'assistant', `你已完成《${activity.title}》。可以在好友页继续联系共同参加的球友。`);
  if (next === 'user_cancelled') addMessage('system', 'assistant', `你已取消《${activity.title}》的参与意向。未产生任何费用。`);
  saveStore();
}

function route() {
  const routeName = location.hash.replace(/^#/, '') || 'home';
  const [view, id] = routeName.split('/');
  if (!state.store.profile && view !== 'onboarding') { go('onboarding'); return; }
  state.map?.remove(); state.map = null;
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (view === 'onboarding') renderOnboarding();
  else if (view === 'home') renderHome();
  else if (view === 'venues') renderVenues();
  else if (view === 'venue') renderVenue(id);
  else if (view === 'activities') renderActivities();
  else if (view === 'activity') renderActivity(id);
  else if (view === 'registration') renderRegistration(id);
  else if (view === 'registration-success') renderRegistrationSuccess(id);
  else if (view === 'messages') renderMessages();
  else if (view === 'chat') renderChat(id);
  else if (view === 'venue-chat') renderChat(null, id);
  else if (view === 'profile') renderProfile();
  else if (view === 'ability') renderAbility();
  else if (view === 'ability-edit') renderAbilityEdit();
  else if (view === 'match-record') renderMatchRecord();
  else if (view === 'registrations') renderRegistrations();
  else if (view === 'saved') renderSaved();
  else if (view === 'friends') renderFriends();
  else if (view === 'feedback') renderFeedback();
  else go('home');
}

async function handleSubmit(event) {
  const form = event.target.closest('form[data-form]');
  if (!form) return;
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (form.dataset.form === 'onboarding-basic') {
    state.onboardingDraft = { nickname: data.nickname.trim(), phone: data.phone.trim() };
    const errors = validateProfile({ ...state.onboardingDraft, city: 'heping', experience: 'pending', agreed: true }).filter(item => !item.includes('区域') && !item.includes('经验'));
    if (errors.length) return showToast(errors[0]);
    state.onboardingStep = 2; renderOnboarding();
  } else if (form.dataset.form === 'onboarding-preferences') {
    const profile = { ...state.onboardingDraft, city: data.city, experience: data.experience, agreed: data.agreed === 'on' };
    const errors = validateProfile(profile);
    if (errors.length) return showToast(errors[0]);
    state.store.profile = profile; state.locationKey = profile.city; saveStore(); go('home');
  } else if (form.dataset.form === 'registration') {
    const activityId = form.dataset.id;
    if (activeRegistration(activityId)) return go('registrations');
    state.store.registrations.push({ id: `reg-${Date.now()}`, activityId, status: 'submitted', note: data.note || '', createdAt: new Date().toISOString() });
    addMessage('system', 'assistant', `《${activities.find(item => item.id === activityId).title}》报名已提交，等待确认。`);
    saveStore(); go(`registration-success/${activityId}`);
  } else if (form.dataset.form === 'chat') {
    const conversationId = form.dataset.id;
    const text = data.message.trim();
    if (!text) return;
    addMessage(conversationId, 'user', text);
    if (conversationId.startsWith('venue:')) {
      const venue = venueById(conversationId.split(':')[1]);
      addMessage(conversationId, 'assistant', answerQuestion(venue, text));
    } else if (conversationId === 'friend:chenxia') addMessage(conversationId, 'assistant', '可以呀，等有合适的新手活动我们一起报名。');
    else addMessage(conversationId, 'assistant', '系统通知会根据报名状态自动发送，这里暂不支持人工客服。');
    if (conversationId.startsWith('venue:')) renderChat(null, conversationId.split(':')[1]);
    else renderChat(conversationId);
  } else if (form.dataset.form === 'feedback') {
    const text = `排排使用建议\n页面：${data.page}\n建议：${data.message.trim()}${data.contact.trim() ? `\n来自：${data.contact.trim()}` : ''}`;
    try {
      if (navigator.share) await navigator.share({ title: '排排使用建议', text });
      else { await navigator.clipboard.writeText(text); showToast('反馈已复制，可以发送给排排团队'); }
    } catch (error) {
      if (error.name !== 'AbortError') { await navigator.clipboard?.writeText(text); showToast('反馈已复制，可以发送给排排团队'); }
    }
  } else if (form.dataset.form === 'ability') {
    state.store.ability = {
      ...state.store.ability,
      source: '本人自评', primaryPosition: data.primaryPosition, secondaryPosition: data.secondaryPosition,
      dominantHand: data.dominantHand, playCount: Number(data.playCount) || 0,
      values: Object.fromEntries(abilityMetrics.map(([key]) => [key, Number(data[key])]))
    };
    saveStore(); showToast('能力卡已更新'); go('ability');
  } else if (form.dataset.form === 'match-record') {
    const metrics = Object.fromEntries(abilityMetrics.map(([key]) => [key, {
      accurate: Number(data[`${key}-accurate`]) || 0,
      playable: Number(data[`${key}-playable`]) || 0,
      missed: Number(data[`${key}-missed`]) || 0
    }]));
    const total = Object.values(metrics).reduce((sum, item) => sum + item.accurate + item.playable + item.missed, 0);
    if (!total) return showToast('请至少记录一次技术结果');
    const ability = state.store.ability || initialAbility();
    ability.matches = [...(ability.matches || []), { id: `match-${Date.now()}`, title: data.title.trim(), date: data.date, metrics }];
    ability.values = valuesFromMatches(ability.matches);
    ability.playCount = (Number(ability.playCount) || 0) + 1;
    ability.source = `比赛自记 · ${ability.matches.length}场`;
    state.store.ability = ability; saveStore(); showToast('比赛已记录，六维图已更新'); go('ability');
  }
}

function handleClick(event) {
  const target = event.target.closest('[data-action]');
  if (!target) return;
  const action = target.dataset.action;
  if (action === 'onboarding-back') { state.onboardingStep = 1; renderOnboarding(); }
  else if (action === 'activity-filter') { state.activityFilter = target.dataset.filter; renderActivities(); }
  else if (action === 'activity-date') { state.activityDate = target.dataset.date; renderActivities(); }
  else if (action === 'venue-view') { state.venueView = target.dataset.view; renderVenues(); }
  else if (action === 'venue-photo') { state.venuePhotoIndex = Number(target.dataset.index); renderVenue(location.hash.split('/')[1]); }
  else if (action === 'map-recenter') { const origin = locations[state.locationKey]; state.map?.setView([origin.lat, origin.lng], 12, { animate: true }); }
  else if (action === 'map-fullscreen') {
    const stage = target.closest('.map-stage');
    const active = stage.classList.toggle('is-fullscreen');
    document.body.classList.toggle('map-is-fullscreen', active);
    target.querySelector('span').textContent = active ? '退出' : '全屏';
    target.setAttribute('aria-label', active ? '退出全屏地图' : '全屏查看地图');
    setTimeout(() => state.map?.invalidateSize(), 80);
  }
  else if (action === 'toggle-save') {
    const id = target.dataset.id;
    state.store.savedVenues = state.store.savedVenues.includes(id) ? state.store.savedVenues.filter(item => item !== id) : [...state.store.savedVenues, id];
    saveStore(); renderVenue(id); showToast(state.store.savedVenues.includes(id) ? '已收藏场地' : '已取消收藏');
  } else if (action === 'confirm-registration') { updateRegistration(target.dataset.id, 'confirm'); go('registrations'); }
  else if (action === 'attend-registration') { updateRegistration(target.dataset.id, 'attend'); renderRegistrations(); }
  else if (action === 'cancel-registration') { updateRegistration(target.dataset.id, 'cancel'); renderRegistrations(); }
  else if (action === 'quick-question') {
    const form = app.querySelector('[data-form="chat"]'); form.elements.message.value = target.dataset.question; form.requestSubmit();
  } else if (action === 'toggle-position-picker') {
    state.positionPicker = state.positionPicker === target.dataset.kind ? null : target.dataset.kind;
    route();
  } else if (action === 'select-position') {
    const ability = state.store.ability || initialAbility();
    if (target.dataset.kind === 'primary') ability.primaryPosition = target.dataset.position;
    else ability.secondaryPosition = target.dataset.position;
    state.store.ability = ability; state.positionPicker = null; saveStore(); route(); showToast('位置标签已更新');
  } else if (action === 'reset-demo') {
    localStorage.removeItem(STORAGE_KEY); state.store = initialStore(); state.onboardingStep = 1; go('onboarding');
  }
}

if (isBrowser) {
  app.addEventListener('submit', handleSubmit);
  app.addEventListener('click', handleClick);
  window.addEventListener('hashchange', route);
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
  route();
}
