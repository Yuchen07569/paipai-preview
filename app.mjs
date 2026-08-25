const RESEARCH_DATE = '2026-08-25';

export const locations = {
  heping: { label: '天津 · 和平区', lat: 39.1167, lng: 117.1954 },
  nankai: { label: '天津 · 南开区', lat: 39.1051, lng: 117.1644 },
  hedong: { label: '天津 · 河东区', lat: 39.1143, lng: 117.2516 },
  wuqing: { label: '天津 · 武清区', lat: 39.3849, lng: 117.0444 },
  jinghai: { label: '天津 · 静海区', lat: 38.9474, lng: 117.0630 }
};

export const venues = [
  {
    id: 'people-gymnasium',
    name: '天津市人民体育馆',
    district: '和平区',
    address: '贵州路33号',
    lat: 39.10795,
    lng: 117.18884,
    type: '综合体育馆',
    scene: '室内场馆与室外健身区域',
    equipment: '排球赛事设施，公众排球订场待确认',
    air: '馆内配套需电话确认',
    hours: '具体开放项目与时段待核验',
    access: 'pending',
    statusLabel: '公众排球使用待确认',
    intro: '人民体育馆位于和平区市中心，是天津排球赛事的重要场馆。公开资料确认了场馆位置、规模和全民健身开放背景，但没有给出当前散客排球订场时段。适合作为优先电话核验对象。',
    caveat: '场馆会承接赛事和大型活动，公开开放项目可能临时调整；赛事场馆不等于随时可租的排球场。',
    faqs: {
      transport: '场馆位于和平区贵州路33号，靠近五大道。正式上线前需要补充地铁出口、入口和停车信息。',
      beginner: '公开资料没有确认散客新手服务。建议先电话核对是否接受个人或团体排球预约。',
      facility: '已确认是综合体育馆并承办排球赛事。空调、排球网和散客器材提供情况仍需场馆确认。',
      booking: '当前没有核验到可直接使用的公众排球预约入口。合作沟通时应先确认可预约时段、计费方式和联系人。'
    },
    sources: [
      { label: '天津市体育局 · 体育场馆开放与人民体育馆介绍', url: 'https://ty.tj.gov.cn/jmty/sjdt/202007/t20200722_3073979.html' },
      { label: '高德地图搜索 · 天津市人民体育馆', url: 'https://uri.amap.com/search?keyword=%E5%A4%A9%E6%B4%A5%E5%B8%82%E4%BA%BA%E6%B0%91%E4%BD%93%E8%82%B2%E9%A6%86&city=%E5%A4%A9%E6%B4%A5&callnative=0' }
    ]
  },
  {
    id: 'fukang-air-volleyball',
    name: '复康路9号气排球场',
    district: '南开区',
    address: '复康路9号天津女排训练馆旁',
    lat: 39.09758,
    lng: 117.16361,
    type: '室外气排球场',
    scene: '3 块标准气排球场',
    equipment: '气排球场与沙滩排球场',
    air: '室外，无空调',
    hours: '2023 年公开安排为周末及法定休息日',
    access: 'pending',
    statusLabel: '当前开放安排待复核',
    intro: '公开资料显示，复康路9号在天津女排训练馆旁设有三块标准气排球室外场地，启用时面向社会团体低收费开放。这个信息发布于2023年，当前预约和开放安排需要重新电话核验。',
    caveat: '这是气排球室外场地，不应与标准室内排球馆混为一类。天气、季节和团体预约要求会直接影响使用。',
    faqs: {
      transport: '场地位于南开区复康路9号，靠近天津网球中心和天津女排训练馆。正式合作前需核对实际入口。',
      beginner: '公开资料将青少年和气排球爱好者列为服务人群，具体是否提供器材与指导仍需确认。',
      facility: '已确认有三块标准气排球室外场地，并提及沙滩排球场。没有空调，天气会影响体验。',
      booking: '2023年公开安排是周末及法定休息日面向社会团体低收费开放。当前时段、价格和预约入口尚未核验。'
    },
    sources: [
      { label: '哏都体育公开报道 · 复康路9号气排球场启用', url: 'https://k.sina.cn/article_7831476444_1d2cad8dc001015npi.html' },
      { label: '高德地图搜索 · 复康路9号', url: 'https://uri.amap.com/search?keyword=%E5%A4%8D%E5%BA%B7%E8%B7%AF9%E5%8F%B7%E6%B0%94%E6%8E%92%E7%90%83%E5%9C%BA&city=%E5%A4%A9%E6%B4%A5&callnative=0' }
    ]
  },
  {
    id: 'workers-palace-2',
    name: '天津市第二工人文化宫',
    district: '河东区',
    address: '光华路2号',
    lat: 39.10302,
    lng: 117.24647,
    type: '公共文化与运动空间',
    scene: '园区内记录有排球场',
    equipment: '排球场具体制式待现场核验',
    air: '场地类型待确认',
    hours: '园区公开参考 06:00–22:00',
    access: 'researchable',
    statusLabel: '基础信息可公开查询',
    intro: '第二工人文化宫位于河东区光华路，公开资料记录园区内有排球场等运动设施。园区开放时间可以查询，但排球场制式、预约方式和器材仍需现场或电话确认。',
    caveat: '园区开放时间不等于排球场可用时间，请在出发前确认球场安排。',
    faqs: {
      transport: '地址为河东区光华路2号，靠近中山门与东兴路片区。地图可以导航到园区，具体球场入口待补充。',
      beginner: '园区适合公共健身，但没有核验到排球新手服务、教练或组局信息。',
      facility: '公开资料确认园区有排球场。室内外、地面、球网、照明和空调状态需要继续核验。',
      booking: '园区开放时间可公开查询，排球场是否预约、是否收费及使用规则尚未确认。'
    },
    sources: [
      { label: '携程地图资料 · 地址与园区开放时间', url: 'https://gs.ctrip.com/html5/you/sight/tianjin154/1964544.html' },
      { label: '高德地图搜索 · 天津市第二工人文化宫', url: 'https://uri.amap.com/search?keyword=%E5%A4%A9%E6%B4%A5%E5%B8%82%E7%AC%AC%E4%BA%8C%E5%B7%A5%E4%BA%BA%E6%96%87%E5%8C%96%E5%AE%AB&city=%E5%A4%A9%E6%B4%A5&callnative=0' }
    ]
  },
  {
    id: 'nankai-balitai',
    name: '南开大学八里台校区排球场',
    district: '南开区',
    address: '卫津路94号',
    lat: 39.10854,
    lng: 117.17502,
    type: '高校体育场地',
    scene: '4 块室外排球场，馆内含排球教学训练空间',
    equipment: '教学训练场地，公众使用权限待确认',
    air: '室外场无空调',
    hours: '以校内预约系统与校园管理为准',
    access: 'restricted',
    statusLabel: '校内权限待确认',
    intro: '南开大学官方场馆页记录八里台校区有4块室外排球场，老体育馆也承担排球教学训练与群体活动。公开页面提供预约系统，但校外人员的使用权限需要单独确认。',
    caveat: '高校存在校园进出、教学优先和身份权限，普通用户是否可以预约需向学校确认。',
    faqs: {
      transport: '八里台校区地址为南开区卫津路94号。校外人员还需要核对入校规则和场馆入口。',
      beginner: '场地主要服务教学与校内活动，是否接受校外新手或社会团体需要向场馆中心确认。',
      facility: '官方资料确认4块室外排球场，并记录老体育馆承担排球教学训练。器材与照明未在公开页写明。',
      booking: '官方页面提供体育场馆在线预订入口，但校外身份是否可预约没有在本次公开资料中确认。'
    },
    sources: [
      { label: '南开大学体育部 · 场馆介绍及预订', url: 'https://tyb.nankai.edu.cn/2861/list.htm' },
      { label: '高德地图搜索 · 南开大学八里台校区', url: 'https://uri.amap.com/search?keyword=%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E5%85%AB%E9%87%8C%E5%8F%B0%E6%A0%A1%E5%8C%BA&city=%E5%A4%A9%E6%B4%A5&callnative=0' }
    ]
  },
  {
    id: 'tjus-volleyball-gym',
    name: '天津体育学院排球馆',
    district: '静海区',
    address: '团泊新城西区东海道16号',
    lat: 38.95245,
    lng: 117.05313,
    type: '专业排球训练场馆',
    scene: '排球馆租赁与专业训练资源',
    equipment: '专业场馆，具体公众器材待确认',
    air: '馆内环境需场馆确认',
    hours: '按机构预约',
    access: 'researchable',
    statusLabel: '存在公开租赁参考',
    intro: '天津体育学院公开收费公示中列有排球馆租赁项目，参考标准为500元每小时全场。团泊校区同时设有中国排球学院及专业排球训练资源，适合作为机构合作和团体租场线索。',
    caveat: '500元每小时来自2025年公开收费公示，只能作为调研参考。当前价格、可约日期、服务对象和发票规则都需要再次确认。',
    faqs: {
      transport: '场馆位于静海区团泊新城西区东海道16号，距离中心城区较远，更适合团体集中使用。',
      beginner: '公开资料主要面向专业训练、培训和机构租赁，没有确认个人新手散客服务。',
      facility: '官方资料显示中国排球学院训练馆含10块标准排球场地，另有2块室内沙滩排球场地。具体可租区域需要确认。',
      booking: '2025年收费公示列出排球馆500元每小时全场、10000元每天全馆。当前预约入口和价格需要联系学校确认。'
    },
    sources: [
      { label: '天津体育学院 · 经营服务性收费项目及标准公示', url: 'https://cwcgz.tjus.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbnewsid=1518&wbtreeid=1017' },
      { label: '中国排球学院 · 学院与场地介绍', url: 'https://vac.tjus.edu.cn/xygk/xyjj.htm' },
      { label: '高德地图搜索 · 天津体育学院团泊校区', url: 'https://uri.amap.com/search?keyword=%E5%A4%A9%E6%B4%A5%E4%BD%93%E8%82%B2%E5%AD%A6%E9%99%A2%E5%9B%A2%E6%B3%8A%E6%A0%A1%E5%8C%BA&city=%E5%A4%A9%E6%B4%A5&callnative=0' }
    ]
  },
  {
    id: 'wuqing-sports-center',
    name: '武清体育中心',
    district: '武清区',
    address: '翠通路2号',
    lat: 39.38891,
    lng: 117.00635,
    type: '公共体育中心',
    scene: '公开记录中包含室内排球场',
    equipment: '室内排球场，照明按预约时段开放',
    air: '室内，空调状态待确认',
    hours: '2026 上半年每周三开放记录已过期',
    access: 'pending',
    statusLabel: '新一期安排待复核',
    intro: '公开信息显示，武清体育中心在2026年上半年曾设置每周三免费或低收费运动时段，覆盖室内排球场，并通过官方公众号预约。该实施周期已经结束，新的开放安排需向场馆复核。',
    caveat: '公开记录的实施时间为2026年1月1日至6月30日。当前日期已超过该周期，必须向场馆确认新一期安排后才能对用户展示为可预约。',
    faqs: {
      transport: '地址为武清区翠通路2号。距离中心城区较远，适合武清本地用户或团体出行。',
      beginner: '公开活动规则没有说明新手指导与器材提供，需要向场馆确认。',
      facility: '公开记录确认覆盖室内排球场，并说明非开放及预订时间不提供照明。空调和更衣设施未确认。',
      booking: '2026年上半年规则要求通过武清体育中心官方公众号预约并凭二维码入场。新一期规则尚未核验。'
    },
    sources: [
      { label: '天津本地宝 · 2026 上半年武清体育中心预约规则', url: 'https://tj.bendibao.com/xiuxian/202619/164536.shtm' },
      { label: '天津市体育局 · 公共场馆开放资料', url: 'https://ty.tj.gov.cn/sy2/gabsycs/tzgggh/202509/W020250928689351856899.pdf' },
      { label: '高德地图搜索 · 武清体育中心', url: 'https://uri.amap.com/search?keyword=%E6%AD%A6%E6%B8%85%E4%BD%93%E8%82%B2%E4%B8%AD%E5%BF%83&city=%E5%A4%A9%E6%B4%A5&callnative=0' }
    ]
  }
];

export function haversineKm(a, b) {
  const radius = 6371;
  const toRad = value => value * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const value = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

export function rankVenues(items, origin) {
  return items
    .map(item => ({ ...item, distance: haversineKm(origin, item) }))
    .sort((a, b) => a.distance - b.distance)
    .map((item, index) => ({ ...item, rank: index + 1 }));
}

export function answerQuestion(venue, question) {
  const text = question.trim().toLowerCase();
  if (!text) return '';
  if (/怎么去|交通|地铁|地址|入口|停车/.test(text)) return venue.faqs.transport;
  if (/新手|第一次|带什么|装备|鞋|球/.test(text)) return venue.faqs.beginner;
  if (/空调|室内|室外|设施|器材|场地/.test(text)) return venue.faqs.facility;
  if (/预约|价格|费用|开放|营业|时间|电话|订/.test(text)) return venue.faqs.booking;
  return `当前收录资料没有确认“${question}”。建议查看资料来源或联系场馆核验。`;
}

const isBrowser = typeof document !== 'undefined';

const state = {
  locationKey: 'heping',
  query: '',
  filter: 'all',
  selectedId: null,
  saved: new Set(isBrowser ? JSON.parse(localStorage.getItem('paipai-demo-saved') || '[]') : []),
  map: null,
  markers: new Map()
};

const app = isBrowser ? document.querySelector('#app') : null;
const toast = isBrowser ? document.querySelector('.toast') : null;

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => { toast.hidden = true; }, 2400);
}

function getRankedVenues() {
  const ranked = rankVenues(venues, locations[state.locationKey]);
  return ranked.filter(venue => {
    const matchesQuery = `${venue.name}${venue.district}${venue.type}${venue.address}`.toLowerCase().includes(state.query.toLowerCase());
    const matchesFilter = state.filter === 'all' ||
      (state.filter === 'researchable' && venue.access === 'researchable') ||
      (state.filter === 'pending' && venue.access !== 'researchable');
    return matchesQuery && matchesFilter;
  });
}

function statusClass(access) {
  if (access === 'researchable') return 'success';
  if (access === 'restricted') return 'warning';
  return 'warning';
}

function renderDiscover() {
  const ranked = getRankedVenues();
  state.selectedId = ranked.some(item => item.id === state.selectedId) ? state.selectedId : ranked[0]?.id || null;
  app.innerHTML = `
    <section aria-labelledby="discover-title">
      <div class="page-head">
        <div>
          <span class="tag">天津 · 排球</span>
          <h1 id="discover-title">先找到真实存在的场地</h1>
          <p>编号会按照你选择的区域距离重新排序。</p>
        </div>
        <div class="source-note">资料整理于 ${RESEARCH_DATE}。名称、地址和公开设施来自地图、场馆官网或公共信息；可预约状态仍需电话核验。</div>
      </div>

      <div class="controls">
        <label><span class="sr-only">搜索场地</span><input class="control" type="search" data-search value="${escapeHtml(state.query)}" placeholder="搜索场地、区域或类型"></label>
        <label><span class="sr-only">选择当前位置</span><select class="control" data-location>${Object.entries(locations).map(([key, location]) => `<option value="${key}" ${key === state.locationKey ? 'selected' : ''}>${location.label}</option>`).join('')}</select></label>
      </div>
      <div class="filter-row" role="group" aria-label="场地资料筛选">
        <button class="chip" type="button" data-filter="all" aria-pressed="${state.filter === 'all'}">全部 ${venues.length}</button>
        <button class="chip" type="button" data-filter="researchable" aria-pressed="${state.filter === 'researchable'}">公开资料较完整</button>
        <button class="chip" type="button" data-filter="pending" aria-pressed="${state.filter === 'pending'}">开放方式待确认</button>
      </div>

      <div class="discover-grid">
        <div class="map-panel"><div id="venue-map" aria-label="天津排球场地地图"></div></div>
        <div class="venue-list" aria-label="按距离排序的场地列表">
          ${ranked.length ? ranked.map(venueCardTemplate).join('') : '<div class="list-empty">没有符合当前条件的场地。</div>'}
        </div>
      </div>
    </section>`;

  bindDiscoverEvents();
  renderMap(ranked);
}

function venueCardTemplate(venue) {
  return `
    <button class="venue-card ${venue.id === state.selectedId ? 'active' : ''}" type="button" data-venue-card="${venue.id}" aria-label="查看${escapeHtml(venue.name)}详情">
      <div class="venue-card-head"><div><h2>${escapeHtml(venue.name)}</h2><div class="venue-meta">${escapeHtml(venue.district)} · ${escapeHtml(venue.type)}<br>${escapeHtml(venue.scene)}</div></div><span class="rank">${venue.rank}</span></div>
      <div class="venue-card-foot"><span class="tag ${statusClass(venue.access)}">${escapeHtml(venue.statusLabel)}</span><span class="distance">${venue.distance.toFixed(1)} km</span></div>
    </button>`;
}

function bindDiscoverEvents() {
  app.querySelector('[data-search]').addEventListener('change', event => { state.query = event.target.value; renderDiscover(); });
  app.querySelector('[data-location]').addEventListener('change', event => { state.locationKey = event.target.value; state.selectedId = null; renderDiscover(); });
  app.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { state.filter = button.dataset.filter; state.selectedId = null; renderDiscover(); }));
  app.querySelectorAll('[data-venue-card]').forEach(button => {
    button.addEventListener('mouseenter', () => selectVenue(button.dataset.venueCard, false));
    button.addEventListener('focus', () => selectVenue(button.dataset.venueCard, false));
    button.addEventListener('click', () => { location.hash = `venue/${button.dataset.venueCard}`; });
  });
}

function renderMap(ranked) {
  if (!window.L) {
    document.querySelector('#venue-map').outerHTML = '<div class="map-fallback">地图资源没有加载，场地列表仍可完整使用。</div>';
    return;
  }
  state.map?.remove();
  const origin = locations[state.locationKey];
  state.map = L.map('venue-map', { zoomControl: true, scrollWheelZoom: false }).setView([origin.lat, origin.lng], state.locationKey === 'wuqing' || state.locationKey === 'jinghai' ? 11 : 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(state.map);
  L.circleMarker([origin.lat, origin.lng], { radius: 8, color: '#fff', weight: 3, fillColor: '#356291', fillOpacity: 1 }).addTo(state.map).bindTooltip('当前位置');
  state.markers.clear();
  ranked.forEach(venue => {
    const icon = L.divIcon({ className: '', html: `<div class="number-marker ${venue.id === state.selectedId ? 'active' : ''}" data-marker-id="${venue.id}">${venue.rank}</div>`, iconSize: [42, 42], iconAnchor: [21, 21] });
    const marker = L.marker([venue.lat, venue.lng], { icon }).addTo(state.map).bindTooltip(`${venue.name} · ${venue.distance.toFixed(1)} km`);
    marker.on('click', () => { state.selectedId = venue.id; location.hash = `venue/${venue.id}`; });
    state.markers.set(venue.id, marker);
  });
}

function selectVenue(id, scroll = true) {
  state.selectedId = id;
  document.querySelectorAll('[data-venue-card]').forEach(card => card.classList.toggle('active', card.dataset.venueCard === id));
  document.querySelectorAll('[data-marker-id]').forEach(marker => marker.classList.toggle('active', marker.dataset.markerId === id));
  const venue = venues.find(item => item.id === id);
  if (venue && state.map) state.map.panTo([venue.lat, venue.lng]);
  if (scroll) document.querySelector(`[data-venue-card="${id}"]`)?.scrollIntoView({ block: 'nearest' });
}

function renderDetail(id) {
  const venue = venues.find(item => item.id === id);
  if (!venue) { location.hash = 'discover'; return; }
  const ranked = rankVenues(venues, locations[state.locationKey]);
  const current = ranked.find(item => item.id === id);
  const saved = state.saved.has(id);
  app.innerHTML = `
    <section aria-labelledby="detail-title">
      <a class="back" href="#discover">← 返回场地地图</a>
      <div class="detail-hero">
        <div class="photo-placeholder"><span>商家图片授权位</span><span class="photo-title">${escapeHtml(venue.name)}</span><span>正式合作后支持上传最多 5 张真实场地图</span></div>
        <div class="photo-strip" aria-label="图片位置"><span class="photo-dot">1</span><span class="photo-dot">2</span><span class="photo-dot">3</span><span class="photo-dot">4</span><span class="photo-dot">5</span></div>
      </div>
      <div class="detail-body">
        <div class="detail-title-row">
          <div><span class="tag ${statusClass(venue.access)}">${escapeHtml(venue.statusLabel)}</span><h1 id="detail-title">${escapeHtml(venue.name)}</h1><p class="detail-address">${escapeHtml(venue.district)} · ${escapeHtml(venue.address)} · 距当前位置 ${current.distance.toFixed(1)} km</p></div>
          <button class="save-button ${saved ? 'saved' : ''}" type="button" data-save="${id}" aria-label="${saved ? '取消收藏' : '收藏场地'}">${saved ? '♥' : '♡'}</button>
        </div>
        <div class="fact-grid">
          <div class="fact"><small>场地类型</small><strong>${escapeHtml(venue.type)}</strong></div>
          <div class="fact"><small>公开设施</small><strong>${escapeHtml(venue.equipment)}</strong></div>
          <div class="fact"><small>空调</small><strong>${escapeHtml(venue.air)}</strong></div>
          <div class="fact"><small>开放信息</small><strong>${escapeHtml(venue.hours)}</strong></div>
        </div>
        <div class="section"><h2>场地介绍</h2><p>${escapeHtml(venue.intro)}</p></div>
        <div class="section"><h2>信息边界</h2><div class="notice">${escapeHtml(venue.caveat)}</div></div>
        <div class="section"><h2>资料来源</h2><ul class="source-list">${venue.sources.map(source => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.label)} ↗</a></li>`).join('')}</ul><p>整理日期 ${RESEARCH_DATE}。执行合作或公开发布前需要再次核验。</p></div>
        <div class="action-row"><button class="primary-action" type="button" data-open-assistant="${id}">问问场地助手</button><a class="secondary-action" href="${venue.sources.at(-1).url}" target="_blank" rel="noreferrer">在地图中查看</a></div>
      </div>
    </section>`;
  app.querySelector('[data-save]').addEventListener('click', () => toggleSaved(id));
  app.querySelector('[data-open-assistant]').addEventListener('click', () => { location.hash = `assistant/${id}`; });
}

function assistantIntro(venue) {
  return `你好，我是${venue.name}的场地资料助手。\n\n${venue.intro}\n\n我只回答公开资料能支持的问题。当前开放、价格和预约情况仍需向场馆确认。`;
}

function renderAssistant(id) {
  const venue = venues.find(item => item.id === id);
  if (!venue) { location.hash = 'discover'; return; }
  app.innerHTML = `
    <section class="assistant-page" aria-labelledby="assistant-title">
      <a class="back" href="#venue/${id}">← 返回场地详情</a>
      <div class="assistant-head"><div><h1 id="assistant-title">${escapeHtml(venue.name)}助手</h1><small>固定资料问答 · 不连接大模型</small></div><span class="tag ${statusClass(venue.access)}">${escapeHtml(venue.statusLabel)}</span></div>
      <div class="chat" data-chat-log aria-live="polite"><div class="bubble assistant">${escapeHtml(assistantIntro(venue))}</div><div class="suggestions"><button class="suggestion" data-question="怎么去？">怎么去？</button><button class="suggestion" data-question="新手需要带什么？">新手带什么？</button><button class="suggestion" data-question="场地有什么设施？">设施怎么样？</button><button class="suggestion" data-question="怎么预约，多少钱？">怎么预约？</button></div></div>
      <form class="composer" data-chat-form><input name="question" autocomplete="off" placeholder="询问交通、设施、开放或预约" aria-label="输入场地问题"><button type="submit">发送</button></form>
    </section>`;
  app.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => appendAnswer(venue, button.dataset.question)));
  app.querySelector('[data-chat-form]').addEventListener('submit', event => {
    event.preventDefault();
    const input = event.currentTarget.elements.question;
    const question = input.value.trim();
    if (!question) return;
    appendAnswer(venue, question);
    input.value = '';
  });
}

function appendAnswer(venue, question) {
  const log = app.querySelector('[data-chat-log]');
  const user = document.createElement('div');
  user.className = 'bubble user';
  user.textContent = question;
  const assistant = document.createElement('div');
  assistant.className = 'bubble assistant';
  assistant.textContent = answerQuestion(venue, question);
  log.append(user, assistant);
  assistant.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function toggleSaved(id) {
  if (state.saved.has(id)) state.saved.delete(id); else state.saved.add(id);
  localStorage.setItem('paipai-demo-saved', JSON.stringify([...state.saved]));
  updateSavedCount();
  renderDetail(id);
  showToast(state.saved.has(id) ? '已收藏场地' : '已取消收藏');
}

function updateSavedCount() {
  document.querySelector('#saved-count').textContent = `${state.saved.size} 个场地`;
}

function route() {
  const captureView = new URLSearchParams(location.search).get('captureView');
  const [view = 'discover', id] = (captureView || location.hash.replace(/^#/, '')).split('/');
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (view === 'venue') renderDetail(id);
  else if (view === 'assistant') renderAssistant(id);
  else renderDiscover();
}

if (isBrowser && document.body.dataset.legacyDemo === 'true') {
  document.querySelector('[data-show-saved]').addEventListener('click', () => {
    if (!state.saved.size) { showToast('还没有收藏场地'); return; }
    state.query = '';
    state.filter = 'all';
    location.hash = 'discover';
    setTimeout(() => showToast(`已收藏 ${state.saved.size} 个场地，可在详情页取消`), 0);
  });
  document.querySelector('[data-demo-note]').addEventListener('click', () => showToast('场地编号会按所选区域距离排序'));
  window.addEventListener('hashchange', route);
  updateSavedCount();
  route();
}
