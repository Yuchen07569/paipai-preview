import assert from 'node:assert/strict';
import { answerQuestion, haversineKm, locations, rankVenues, venues } from './app.mjs';

const samePoint = haversineKm(locations.heping, locations.heping);
assert.equal(samePoint, 0, '相同坐标距离应为0');

const ranked = rankVenues(venues, locations.heping);
assert.equal(ranked.length, venues.length, '排序不应丢失场地');
assert.deepEqual(ranked.map(item => item.rank), [1, 2, 3, 4, 5, 6], '编号必须连续');
assert.ok(ranked.every((item, index) => index === 0 || ranked[index - 1].distance <= item.distance), '编号必须按距离升序');

const fukang = venues.find(item => item.id === 'fukang-air-volleyball');
assert.match(answerQuestion(fukang, '有空调吗？'), /室外|空调/, '设施问题应返回核验资料');
assert.match(answerQuestion(fukang, '现在能订吗？'), /当前|2023|核验|确认/, '预约问题必须保留时效边界');
assert.match(answerQuestion(fukang, '有淋浴吗？'), /没有确认|不会替场馆推测|场馆确认/, '未知问题不能编造答案');

console.log('paipai demo logic tests: ok');
