(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(a){if(a.ep)return;a.ep=!0;const t=n(a);fetch(a.href,t)}})();const d=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1580,rate:7},{id:3,name:"綠島自由行套裝行程",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",area:"東部",description:" 嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。",group:87,price:6800,rate:10},{id:4,name:"清境高空觀景步道",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",area:"台中",description:"清境農場青青草原數十公頃碧草，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",group:26,price:1400,rate:2},{id:5,name:"山林悠遊套票",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",area:"台中",description:"山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。",group:20,price:1765,rate:7}],p=[{text:"全部地區",value:"全部"},{text:"台北",value:"台北"},{text:"台中",value:"台中"},{text:"高雄",value:"高雄"},{text:"東部",value:"東部"},{text:"台灣海峽",value:"台灣海峽"}];function f(e,i){const n=new FormData(e),l=e.querySelectorAll("[name][property]");let a="";return l.forEach(t=>{const r=t.getAttribute("name"),u=t.getAttribute("property"),s=document.querySelector(`[data-message=${r}]`);if(t.hasAttribute("required")&&!n.get(r)?(s.style.display="block",a+=`${r} ${s.innerText}
`,t.focus()):(s.style.display="none",i[u]=n.get(r)),n.get(r)&&t.hasAttribute("min")){let c=Number(t.getAttribute("min"));Number(n.get(r))<c?(s.style.display="block",a+=`${r}：目前 ${n.get(r)} ，必須大於 ${c}
`,t.focus()):(s.style.display="none",i[u]=n.get(r))}if(n.get(r)&&t.hasAttribute("max")){let c=Number(t.getAttribute("max"));Number(n.get(r))>c?(s.style.display="block",a+=`${r}：目前 ${n.get(r)} ，必須小於 ${c}
`,t.focus()):(s.style.display="none",i[u]=n.get(r))}if(n.get(r)&&t.hasAttribute("maxlength")){let c=Number(t.getAttribute("maxlength"));Number(n.get(r)).length>c?(s.style.display="block",a+=`${r}：目前長度 ${n.get(r).length}，必須小於${c}
`,t.focus()):(s.style.display="none",i[u]=n.get(r))}}),a}const h=e=>`
<li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img
                src="${e.imgUrl}"
                alt=""
              />
            </a>
            <div class="ticketCard-region">${e.area}</div>
            <div class="ticketCard-rank">${e.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${e.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${e.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${e.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${e.price}</span>
              </p>
            </div>
          </div>
        </li>
`,y=e=>`
<option value="${e.value}">${e.text}</option>
`,g='<option value="地區搜尋" disabled selected hidden>地區搜尋</option>',o={areaSelectId:"searchByArea",areaSelectInAddId:"ticketRegion",cardContainerId:"ticketCards",canotFindAreaId:"cantFind-area",filterResultId:"searchResult-text",addNewCardId:"addNewCard",newTicketFormId:"newTicketForm",selectAllValue:"全部",loadJson1BtnId:"loadLV1",loadJson2BtnId:"loadLV2",json1Url:"https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json",json2Url:"https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json"};function b(){x(),I(),m(o.selectAllValue),w([{btnId:o.loadJson1BtnId,jsonUrl:o.json1Url,level:"LV1"},{btnId:o.loadJson2BtnId,jsonUrl:o.json2Url,level:"LV2"}])}function I(){const e=document.getElementById(o.areaSelectInAddId),i=document.getElementById(o.areaSelectId);i.addEventListener("change",a=>m(a.target.value));let n=g,l=g;p.forEach((a,t)=>{const r=y(a);n+=r,t!=0&&(l+=r)}),e.innerHTML=l,i.innerHTML=n}function m(e){const i=document.getElementById(o.cardContainerId),n=document.getElementById(o.filterResultId);let l="",a=0;d.forEach((t,r)=>{(e===o.selectAllValue||t.area===e)&&(l+=h(t),a++)}),i.innerHTML=l,n.innerText=`本次搜尋共 ${a} 筆資料`,k(a)}function x(){document.getElementById(o.addNewCardId).addEventListener("click",v)}function v(){const e=document.getElementById(o.newTicketFormId),i={};i.id=d.length;const n=f(e,i);n!=""?alert(`=====  新增失敗！  =====

`+n):(d.push(i),m(o.selectAllValue),alert("新增成功！"),e.reset(),document.getElementById(o.areaSelectId).value=o.selectAllValue)}function w(e){e.forEach(i=>{document.getElementById(i.btnId).addEventListener("click",()=>A(i.level,i.jsonUrl))})}function A(e,i){axios.get(i).then(function(n){d.length=0,Array.prototype.push.apply(d,e==="LV1"?n.data:n.data.data),m(o.selectAllValue),alert(`載入 JSON ${e} 資料成功！`),document.getElementById(o.areaSelectId).value=o.selectAllValue}).catch(function(n){alert(`載入 JSON ${e} 失敗：${n}`)})}function k(e){const i=document.getElementById(o.canotFindAreaId);i.style.display=e==0?"block":"none"}console.log("JS week6 homework");document.addEventListener("DOMContentLoaded",b);
