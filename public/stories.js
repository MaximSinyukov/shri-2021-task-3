(()=>{"use strict";var a={389:(a,t,s)=>{s(318),s(774);var e=s(740),i=s(681),n=s(623),r=s(874),c=s(374),d=s(91),o=s(425),l=s(234),_=s(218),p=s(140),v=s(572),g=s(612);document.querySelector(".page"),document.querySelector("#favicon");const u=window.location.search,f=new URLSearchParams(u),h=(f.get("slide"),f.get("theme"),{1:e,2:i,3:n,4:r,5:c,6:d,7:o,8:l,9:_,10:p,11:v,12:g}),m=new class{chart(a){let t="",s="";const e=a.data.values.reduce(((a,t)=>a>t.value?a:t.value),0);return a.data.values.forEach(((a,s)=>{s>3&&s<13&&(t+=`<div class="chart__column-container ${a.active?"chart__column-container_active":""}">\n                                            <h3 class="chart__column-value">${a.value}</h3>\n                                            <div class="chart__column" style="height: calc((${a.value} / ${e}) * 66.2%);"></div>\n                                            <h4 class="chart__column-name">${a.title}</h4>\n                                          </div>`)})),a.data.users.forEach(((a,t)=>{t<2&&(s+=`<div class="chart__person">\n                                            <div class="chart__photo-container">\n                                              <img class="chart__person-photo" src="${h[a.id]}" alt="фото участника">\n                                            </div>\n                                            <div class="chart__data-container">\n                                              <h3 class="chart__person-name">${a.name}</h3>\n                                              <h4 class="chart__person-results">${a.valueText}</h4>\n                                            </div>\n                                          </div>`)})),`<div class="chart">\n              <div class="chart__results">\n                ${t}\n              </div>\n              <div class="chart__leaders">\n                ${s}\n              </div>\n            </div>`}vote(a){let t="",s=a.data.offset-8||0,e=a.data.offset||8;return a.data.users.forEach(((i,n)=>{n<e&&n>=s&&(t+=`<li class="vote__card ${n>e-3?"vote__card_portrait":""} ${a.data.selectedUserId===i.id?"vote__card_selected":""}"    data-action="update" data-params='{ "alias": "leaders", "data": { "selectedUserId": ${i.id} }}'>\n                                            <div class="person">\n                                              <div class="person__photo-container">\n                                                <img class="person__photo" src="${h[i.id]}" alt="фото участника">\n                                              </div>\n                                              <span class="person__name">${i.name}</span>\n                                            </div>\n                                          </li>`)})),`<div class="vote">\n              <button type="button" class="vote__button vote__button_up" data-action="update" data-params='{ "alias": "vote", "data": { "offset": ${e-2} }}' ${e-2<8?"disabled":""}></button>\n              <button type="button" class="vote__button vote__button_down" data-action="update" data-params='{ "alias": "vote", "data": { "offset": ${e+2} }}'  ${e+2>a.data.users.length?"disabled":""}></button>\n              <ul class="vote__cards-container">\n                ${t}\n              </ul>\n            </div>`}leaders(a){let t="";const s=a.data.users.find((t=>t.id===a.data.selectedUserId)),e=a.data.users.indexOf(s);let i=e;return[4,2,0,1,3].forEach((n=>{4===n&&i>4&&(a.data.users[4].originalIndex=i,a.data.users[4]=s,i=4),t+=`<div class="leaders__column ${4===n||3===n?"leaders__column_small "+(i!==n||3!==i&&4!==i?"":"leaders__column_choice"):"leaders__column_"+(0===n?"large":"medium")}  ${1===n?"leaders__column_medium_right-column":""}">\n                                              <div class="person ${1===n||3===n?"person_right-columns":""}">\n                                                ${0===n||i===n?`<span class="person__emoji">${0===n?`${a.data.emoji}`:"👍"}</span>`:""}\n                                                <div class="person__photo-container">\n                                                  <img class="person__photo" src="${h[a.data.users[n].id]}" alt="фото участника">\n                                                </div>\n                                                <span class="person__name">${a.data.users[n].name}</span>\n                                                <span class="person__results">${a.data.users[n].valueText}</span>\n                                              </div>\n                                              <div class="leaders__base ${1===n||3===n?"leaders__base_right-columns":""}">\n                                                <span class="leaders__number">${e!==i&&4===n?e:n+1}</span>\n                                              </div>\n                                            </div>`})),`<div class="leaders">\n              ${t}\n            </div>`}activity(a){let t="";for(let s=0;s<168;s++){let e=0,i=0,n=0,r=0,c=0,d=0;const o=["mon","tue","wed","thu","fri","sat","sun"];s%2==0&&(n=Math.floor(s/24),r=s%24,e=a.data.data[o[n]][r]+a.data.data[o[n]][r+1]),c=s%7,d=Math.floor(s/7),i=a.data.data[o[c]][d],t+=`<div class="activity__cell">\n                                  <div class="activity__image activity__image_${0===e?"min":e<3?"mid":e<5?"max":"extra"}"></div>\n                                  <div class="activity__image activity__image_${0===i?"min":i<3?"mid":i<5?"max":"extra"}"></div>\n                                </div>`}return`<div class="activity">\n              <div class="activity__map">\n                ${t}\n              </div>\n              <ul class="activity__pointers">\n                <li class="activity__gap">\n                  <div class="activity__ingot">\n                    <span class="activity__time-gap"></span>\n                    <span class="activity__time-gap"></span>\n                    <span class="activity__time-gap"></span>\n                  </div>\n                  <h3 class="activity__title">2 часа</h3>\n                  <h3 class="activity__title">1 час</h3>\n                </li>\n                <li class="activity__gap">\n                  <div class="activity__ingot activity__ingot_grey-dark"></div>\n                  <h3 class="activity__title">0</h3>\n                </li>\n                <li class="activity__gap">\n                  <div class="activity__ingot activity__ingot_grey-light"></div>\n                  <h3 class="activity__title">1 — 2</h3>\n                </li>\n                <li class="activity__gap">\n                  <div class="activity__ingot activity__ingot_gold-low"></div>\n                  <h3 class="activity__title">3 — 4</h3>\n                </li>\n                <li class="activity__gap">\n                  <div class="activity__ingot activity__ingot_gold"></div>\n                  <h3 class="activity__title">5 — 6</h3>\n                </li>\n              </ul>\n            </div>`}diagram(a){let t="",s="";const e=a.data.categories.reduce(((a,t)=>a+parseInt(t.valueText)),0);return a.data.categories.reduce(((a,i,n)=>{s+=`<li class="diagram__list-line">\n                                                  <div class="diagram__line-color"></div>\n                                                  <span class="diagram__main-text">${i.title}</span>\n                                                  <span class="diagram__additional-text">${i.differenceText.slice(0,1)}${parseInt(i.differenceText.slice(1))}</span>\n                                                  <span class="diagram__additional-text">${parseInt(i.valueText)}</span>\n                                                </li>`;const r=356*parseInt(i.valueText)/e;return 0===n&&(a+=r/2),t+=`<circle class="diagram__donut-segment" stroke-dasharray="${r} ${360-r}" stroke-dashoffset="${a}"></circle>`,a-r-1}),90),`<div class="diagram">\n              <div class="diagram__chart">\n                <h3 class="diagram__donut-title">${a.data.totalText}</h3>\n                <h4 class="diagram__donut-subtitle">${a.data.differenceText}</h4>\n                <svg viewBox="0 0 140 140" class="diagram__donut">\n\n                  <defs>\n                    <radialGradient id="light-gold" cx="49.84%" cy="49.84%" r="58%">\n                      <stop offset="81.25%" stop-color="rgba(255, 184, 0, 0.56)"/>\n                      <stop offset="100%" stop-color="rgba(255, 239, 153, 0.32)"/>\n                    </radialGradient>\n                    <radialGradient id="light-gold-low" cx="49.84%" cy="49.84%" r="66%">\n                      <stop offset="81.25%" stop-color="rgba(255, 184, 0, 0.24)"/>\n                      <stop offset="100%" stop-color="rgba(255, 239, 153, 0.12)"/>\n                    </radialGradient>\n                    <radialGradient id="light-grey-light" cx="49.84%" cy="49.84%" r="67%">\n                      <stop offset="82.81%" stop-color="rgba(166, 166, 166, 0.1725)"/>\n                      <stop offset="92.19%" stop-color="rgba(203, 203, 203, 0.05)"/>\n                    </radialGradient>\n                    <radialGradient id="light-grey-dark" cx="49.84%" cy="49.84%" r="68%">\n                      <stop offset="82.81%" stop-color="rgba(191, 191, 191, 0.345)"/>\n                      <stop offset="92.19%" stop-color="rgba(228, 228, 228, 0.1)"/>\n                    </radialGradient>\n\n                    <radialGradient id="dark-gold" cx="49.84%" cy="50.16%" r="56%">\n                      <stop offset="71.88%" stop-color="rgba(255, 163, 0, 0.8)"/>\n                      <stop offset="100%" stop-color="rgba(91, 58, 0, 0.8)"/>\n                    </radialGradient>\n                    <radialGradient id="dark-gold-low" cx="49.84%" cy="50.16%" r="70%">\n                      <stop offset="72.92%" stop-color="rgba(99, 63, 0, 0.8)"/>\n                      <stop offset="100%" stop-color="rgba(15, 9, 0, 0.9)"/>\n                    </radialGradient>\n                    <radialGradient id="dark-grey-light" cx="49.84%" cy="50.16%" r="60%">\n                      <stop offset="71.88%" stop-color="rgba(155, 155, 155, 0.5)"/>\n                      <stop offset="100%" stop-color="rgba(56, 41, 0, 0.5)"/>\n                    </radialGradient>\n                    <radialGradient id="dark-grey-dark" cx="49.84%" cy="50.16%" r="60%">\n                      <stop offset="71.88%" stop-color="rgba(77, 77, 77, 0.5)"/>\n                      <stop offset="100%" stop-color="rgba(56, 41, 0, 0.5)"/>\n                    </radialGradient>\n                  </defs>\n                  ${t}\n                </svg>\n              </div>\n              <ul class="diagram__list">\n                ${s}\n              </ul>\n            </div>`}};window.renderTemplate=function(a,t){const s=m[a](t);return`<section class="stories" data-action="empty">\n            <h1 class="stories__title">${t.data.title}</h1>\n            <h2 class="stories__subtitle">${t.data.subtitle}</h2>\n            ${s}\n          </section>`}},740:(a,t,s)=>{a.exports=s.p+"f2415ab14fb5ffd32c95.jpg"},140:(a,t,s)=>{a.exports=s.p+"0cedb587a7b722c9f536.jpg"},572:(a,t,s)=>{a.exports=s.p+"a96cb0f694d5ddf50c56.jpg"},612:(a,t,s)=>{a.exports=s.p+"2784e91faa0d34cb6100.jpg"},681:(a,t,s)=>{a.exports=s.p+"e979d8986a9c4efcc3b6.jpg"},623:(a,t,s)=>{a.exports=s.p+"9ce409de9e6e565770cd.jpg"},874:(a,t,s)=>{a.exports=s.p+"f56ab2844b967ab7a5a4.jpg"},374:(a,t,s)=>{a.exports=s.p+"e6423d61344bbbc39445.jpg"},91:(a,t,s)=>{a.exports=s.p+"564c9de0259d24195d44.jpg"},425:(a,t,s)=>{a.exports=s.p+"7eb8e91ea77c57fc1f56.jpg"},234:(a,t,s)=>{a.exports=s.p+"051927cff4de1d723c26.jpg"},218:(a,t,s)=>{a.exports=s.p+"245246031f4e033c6351.jpg"},318:(a,t,s)=>{a.exports=s.p+"5048b5e55fbf65792e4d.ico"},774:(a,t,s)=>{a.exports=s.p+"7d4a74c7f18efa5a6348.ico"}},t={};function s(e){if(t[e])return t[e].exports;var i=t[e]={exports:{}};return a[e](i,i.exports,s),i.exports}s.p="/",s(389)})();