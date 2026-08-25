import assert from 'node:assert/strict';
import { activities, spotsLeft, validateProfile, nextRegistrationStatus, mapLinks, abilityLevel, radarPoints, outcomeScore, valuesFromMatches, calendarCells } from './product.mjs';

assert.equal(spotsLeft(activities[0]), activities[0].capacity - activities[0].joined);
assert.equal(spotsLeft(activities[0], true), activities[0].capacity - activities[0].joined - 1);
assert.deepEqual(validateProfile({ nickname: '小排', phone: '13800138000', city: 'heping', experience: '新手', agreed: true }), []);
assert.ok(validateProfile({ nickname: '', phone: '123', city: '', experience: '', agreed: false }).length >= 5);
assert.equal(nextRegistrationStatus('submitted', 'confirm'), 'confirmed');
assert.equal(nextRegistrationStatus('confirmed', 'attend'), 'attended');
assert.equal(nextRegistrationStatus('attended', 'confirm'), 'attended');

const links = mapLinks({ name: '测试场馆', district: '和平区', address: '测试路1号', lat: 39.1, lng: 117.2 });
assert.deepEqual(links.map(item => item.id), ['tencent', 'baidu', 'amap']);
assert.ok(links.every(item => item.url.startsWith('https://')));
assert.match(links[0].url, /coord_type=1/);
assert.match(links[1].url, /coord_type=wgs84/);
assert.match(links[2].url, /coordinate=wgs84/);

const balancedAbility = { serve: 40, receive: 40, set: 40, attack: 40, block: 40, defense: 40 };
assert.equal(abilityLevel(balancedAbility), 2);
assert.equal(radarPoints(balancedAbility).split(' ').length, 6);
assert.equal(radarPoints({ ...balancedAbility, serve: 200 }).split(' ')[0], '100.0,22.0');
assert.equal(outcomeScore({ accurate: 2, playable: 1, missed: 1 }), 63);
assert.equal(outcomeScore({}), 0);
const matchValues = valuesFromMatches([{ metrics: Object.fromEntries(['serve','receive','set','attack','block','defense'].map(key => [key, { accurate: 1, playable: 1, missed: 0 }])) }]);
assert.deepEqual(matchValues, { serve: 75, receive: 75, set: 75, attack: 75, block: 75, defense: 75 });
const august = calendarCells(2026, 8, [25]);
assert.equal(august.filter(Boolean).length, 31);
assert.equal(august.find(item => item?.day === 25).marked, true);

console.log('paipai product flow tests: ok');
