import * as data from "/assets/js/data";
import { registerFrontValidate } from "/assets/js/frontValidator";
import * as UI_Template from "/assets/js/htmlTemplate";

const constants = {
  areaSelectId: "searchByArea",
  areaSelectInAddId: "ticketRegion",
  cardContainerId: "ticketCards",
  addCardSucessMsgId: "addNewCardSuccess",
  loadDataSuccessMsgId: "loadDataSuccess",
  canotFindAreaId: "cantFind-area",
  filterResultId: "searchResult-text",
  validator_Constants: {
    inputFormId: "newTicketForm",
    alertDivClass: "alert-message",
    addNewCardId: "addNewCard",
  },
  newTicketFormId: "newTicketForm",
  selectAllValue: "全部",
  loadJson1BtnId: "loadLV1",
  loadJson2BtnId: "loadLV2",
  json1Url:
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json",
  json2Url:
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json",
};

export let timerId;
export function InitHandler() {
  registryAddCard();
  registryModalClick();
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
  const addBtnElem = document.getElementById(
    constants.validator_Constants.addNewCardId
  );
  addBtnElem.addEventListener("click", addNewTicket);
  registerFrontValidate(constants.validator_Constants);
}

function addNewTicket() {
  const addTicketFormElem = document.getElementById(constants.newTicketFormId);
  if (!addTicketFormElem.reportValidity()) return;

  const formData = new FormData(addTicketFormElem);
  const inputElems = addTicketFormElem.querySelectorAll("[name][property]");
  const newTicket = {};
  newTicket.id = data.tickets.length;

  inputElems.forEach((inputElem) => {
    const fieldName = inputElem.getAttribute("name");
    const fieldProperty = inputElem.getAttribute("property");
    newTicket[fieldProperty] = formData.get(fieldName);
  });
  data.tickets.push(newTicket);
  initCards(constants.selectAllValue);
  const modal_overlay_Elem = document.getElementById(
    constants.addCardSucessMsgId
  );
  modal_overlay_Elem.classList.add("active");

  timerId = setTimeout(function () {
    modal_overlay_Elem.classList.remove("active");
    addTicketFormElem.reset();
    addTicketFormElem
      .querySelectorAll(`.${constants.validator_Constants.alertDivClass}`)
      .forEach((alertDiv) => {
        alertDiv.classList.toggle("hidden", true);
      });
  }, 3000);

  document.getElementById(constants.areaSelectId).value =
    constants.selectAllValue;
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
  const alert_overlap_Elem = document.getElementById(
    constants.loadDataSuccessMsgId
  );
  axios
    .get(url, { timeout: 5000 })
    .then(function (response) {
      data.tickets.length = 0;
      Array.prototype.push.apply(
        data.tickets,
        level === "LV1" ? response.data : response.data.data
      );
      initCards(constants.selectAllValue);

      const msgElem = alert_overlap_Elem.querySelector(".modal .alt-msg-text");

      alert_overlap_Elem.classList.add("active");
      msgElem.textContent = msgElem.textContent.replace(/LV1|LV2|XXX/, level);
      document.getElementById(constants.areaSelectId).value =
        constants.selectAllValue;
      timerId = setTimeout(function () {
        alert_overlap_Elem.classList.remove("active");
      }, 3000);
    })
    .catch(function (error) {
      alert_overlap_Elem.classList.remove("active");
      let errMsg = "";
      if (error.stack) errMsg += error.stack;
      else if (error.response) errMsg += error.response;
      else if (error.request) errMst += error.request;
      else errMsg += error;
      // alert(`載入 JSON ${level} 失敗：${errMsg}`);
      alert(`載入 JSON ${level} 失敗；請檢察網路連線、或URL ${url}是否正確`);
    });
}

function handleFilterNotFound(resultCount) {
  const msgArea = document.getElementById(constants.canotFindAreaId);
  msgArea.style.display = resultCount == 0 ? "block" : "none";
}

function registryModalClick() {
  const elems = [
    document.querySelector(`#${constants.addCardSucessMsgId} .modal`),
    document.querySelector(`#${constants.loadDataSuccessMsgId} .modal`),
  ];
  elems.forEach((elem) =>
    elem.addEventListener("click", (e) => {
      clearTimeout(timerId);
      elem.parentElement.classList.remove("active");
    })
  );
}
