(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const l=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1580,rate:7},{id:3,name:"綠島自由行套裝行程",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",area:"東部",description:" 嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。",group:87,price:6800,rate:10},{id:4,name:"清境高空觀景步道",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",area:"台中",description:"清境農場青青草原數十公頃碧草，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",group:26,price:1400,rate:2},{id:5,name:"山林悠遊套票",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",area:"台中",description:"山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。",group:20,price:1765,rate:7}],m=[{text:"全部地區",value:"全部"},{text:"台北",value:"台北"},{text:"台中",value:"台中"},{text:"高雄",value:"高雄"},{text:"東部",value:"東部"},{text:"台灣海峽",value:"台灣海峽"}];function p(e){const a=document.getElementById(e.inputFormId);document.getElementById(e.addNewCardId),a.querySelectorAll("input, select, textarea").forEach(o=>{const i=o.parentElement.parentElement.querySelector(`.${e.alertDivClass}`);o.addEventListener("input",function(){this.type!=="hidden"&&(this.validity.valid?i.classList.toggle("hidden",!0):i.classList.toggle("hidden",!1))})})}const g=e=>`
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
`,f=e=>`
<option value="${e.value}">${e.text}</option>
`,c='<option value="" disabled selected hidden>地區搜尋</option>',n={areaSelectId:"searchByArea",areaSelectInAddId:"ticketRegion",cardContainerId:"ticketCards",addCardSucessMsgId:"addNewCardSuccess",loadDataSuccessMsgId:"loadDataSuccess",canotFindAreaId:"cantFind-area",filterResultId:"searchResult-text",validator_Constants:{inputFormId:"newTicketForm",alertDivClass:"alert-message",addNewCardId:"addNewCard"},newTicketFormId:"newTicketForm",selectAllValue:"全部",loadJson1BtnId:"loadLV1",loadJson2BtnId:"loadLV2",json1Url:"https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json",json2Url:"https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json"};function h(){I(),x(),v(),d(n.selectAllValue),E([{btnId:n.loadJson1BtnId,jsonUrl:n.json1Url,level:"LV1"},{btnId:n.loadJson2BtnId,jsonUrl:n.json2Url,level:"LV2"}])}function v(){const e=document.getElementById(n.areaSelectInAddId),a=document.getElementById(n.areaSelectId);a.addEventListener("change",t=>d(t.target.value));let o=c,i=c;m.forEach((t,r)=>{const s=f(t);o+=s,r!=0&&(i+=s)}),e.innerHTML=i,a.innerHTML=o}function d(e){const a=document.getElementById(n.cardContainerId),o=document.getElementById(n.filterResultId);let i="",t=0;l.forEach((r,s)=>{(e===n.selectAllValue||r.area===e)&&(i+=g(r),t++)}),a.innerHTML=i,o.innerText=`本次搜尋共 ${t} 筆資料`,C(t)}function I(){document.getElementById(n.validator_Constants.addNewCardId).addEventListener("click",y),p(n.validator_Constants)}function y(){const e=document.getElementById(n.newTicketFormId);if(!e.reportValidity())return;const a=new FormData(e),o=e.querySelectorAll("[name][property]"),i={};i.id=l.length,o.forEach(r=>{const s=r.getAttribute("name"),u=r.getAttribute("property");i[u]=a.get(s)}),l.push(i),d(n.selectAllValue);const t=document.getElementById(n.addCardSucessMsgId);t.classList.add("active"),setTimeout(function(){t.classList.remove("active"),e.reset(),e.querySelectorAll(`.${n.validator_Constants.alertDivClass}`).forEach(r=>{r.classList.toggle("hidden",!0)})},3e3),document.getElementById(n.areaSelectId).value=n.selectAllValue}function E(e){e.forEach(a=>{document.getElementById(a.btnId).addEventListener("click",()=>w(a.level,a.jsonUrl))})}function w(e,a){axios.get(a).then(function(o){l.length=0,Array.prototype.push.apply(l,e==="LV1"?o.data:o.data.data),d(n.selectAllValue);const i=document.getElementById(n.loadDataSuccessMsgId),t=i.querySelector(".modal > h2");i.classList.add("active"),t.textContent=t.textContent.replace("XXX",e),document.getElementById(n.areaSelectId).value=n.selectAllValue,setTimeout(function(){i.classList.remove("active"),t.textContent=t.textContent.replace(e,"XXX")},3e3)}).catch(function(o){alert(`載入 JSON ${e} 失敗：${o}`)})}function C(e){const a=document.getElementById(n.canotFindAreaId);a.style.display=e==0?"block":"none"}function x(){[document.getElementById(n.addCardSucessMsgId),document.getElementById(n.loadDataSuccessMsgId)].forEach(a=>a.addEventListener("click",o=>{o.target.classList.remove("active")}))}console.log("JS week6 homework");document.addEventListener("DOMContentLoaded",h);
