import * as data from "/assets/js/data";
import { simpleFrontValidator } from "/assets/js/simpleFrontValidator";
import * as UI_Template from "/assets/js/htmlTemplate";

const constants = {
  areaSelectId: "searchByArea",
  areaSelectInAddId: "ticketRegion",
  cardContainerId: "ticketCards",
  canotFindAreaId: "cantFind-area",
  filterResultId: "searchResult-text",
  addNewCardId: "addNewCard",
  newTicketFormId: "newTicketForm",
  selectAllValue: "全部",
  loadJson1BtnId: "loadLV1",
  loadJson2BtnId: "loadLV2",
  json1Url:
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json",
  json2Url:
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json",
};

export function InitHandler() {
  registryAddCard();
  setFilters();
  initCards(constants.selectAllValue);
  initLoadBtns([
    {
      btnId: constants.loadJson1BtnId,
      jsonUrl: constants.json1Url,
      level: "LV1",
    },
    {
      btnId: constants.loadJson2BtnId,
      jsonUrl: constants.json2Url,
      level: "LV2",
    },
  ]);
}

function setFilters() {
  const selectInAddElem = document.getElementById(constants.areaSelectInAddId);
  const selectElem = document.getElementById(constants.areaSelectId);
  selectElem.addEventListener("change", (e) => initCards(e.target.value));
  let innerHtml = UI_Template.AreaDefaultOptionHtml;
  let innerHtmlInAdd = UI_Template.AreaDefaultOptionHtml;
  data.areas.forEach((area, index) => {
    const newOptionHtml = UI_Template.createAreaOptionHtml(area);
    innerHtml += newOptionHtml;
    if (index != 0) innerHtmlInAdd += newOptionHtml;
  });
  selectInAddElem.innerHTML = innerHtmlInAdd;
  selectElem.innerHTML = innerHtml;
}
function initCards(filtBy) {
  const containerElem = document.getElementById(constants.cardContainerId);
  const resultMsgElem = document.getElementById(constants.filterResultId);
  let innerHtml = "";
  let resultCount = 0;
  data.tickets.forEach((card, index) => {
    if (filtBy === constants.selectAllValue || card.area === filtBy) {
      innerHtml += UI_Template.createCardHtml(card);
      resultCount++;
    }
  });
  containerElem.innerHTML = innerHtml;
  resultMsgElem.innerText = `本次搜尋共 ${resultCount} 筆資料`;
  handleFilterNotFound(resultCount);
}

function registryAddCard() {
  const addBtnElem = document.getElementById(constants.addNewCardId);
  addBtnElem.addEventListener("click", addNewTicket);
}

function addNewTicket() {
  const addTicketFormElem = document.getElementById(constants.newTicketFormId);
  const newTicket = {};
  newTicket.id = data.tickets.length;
  const valicateErrorMsg = simpleFrontValidator(addTicketFormElem, newTicket);

  if (valicateErrorMsg != "") {
    alert("=====  新增失敗！  =====\n\n" + valicateErrorMsg);
  } else {
    data.tickets.push(newTicket);
    initCards(constants.selectAllValue);
    alert("新增成功！");
    addTicketFormElem.reset();
    document.getElementById(constants.areaSelectId).value =
      constants.selectAllValue;
  }
}

function initLoadBtns(btns) {
  btns.forEach((item) => {
    document
      .getElementById(item.btnId)
      .addEventListener("click", () =>
        load_ticket_json(item.level, item.jsonUrl)
      );
  });
}

function load_ticket_json(level, url) {
  axios
    .get(url)
    .then(function (response) {
      data.tickets.length = 0;
      Array.prototype.push.apply(
        data.tickets,
        level === "LV1" ? response.data : response.data.data
      );
      initCards(constants.selectAllValue);
      alert(`載入 JSON ${level} 資料成功！`);
      document.getElementById(constants.areaSelectId).value =
        constants.selectAllValue;
    })
    .catch(function (error) {
      alert(`載入 JSON ${level} 失敗：${error}`);
    });
}

function handleFilterNotFound(resultCount) {
  const msgArea = document.getElementById(constants.canotFindAreaId);
  msgArea.style.display = resultCount == 0 ? "block" : "none";
}
