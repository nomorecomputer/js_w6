export function simpleFrontValidator(formElem, newObj) {
  //   const formElem = document.getElementById(formId);
  const formData = new FormData(formElem);
  const inputElems = formElem.querySelectorAll("[name][property]");
  let resultMsg = "";

  inputElems.forEach((inputElem) => {
    const fieldName = inputElem.getAttribute("name");
    const fieldProperty = inputElem.getAttribute("property");
    const errMsgElem = document.querySelector(`[data-message=${fieldName}]`);

    //檢查 必填 required (如果沒有被UI擋下)
    if (inputElem.hasAttribute("required") && !formData.get(fieldName)) {
      errMsgElem.style.display = "block";
      resultMsg += `${fieldName} ${errMsgElem.innerText}\n`;
      inputElem.focus();
    } else {
      errMsgElem.style.display = "none";
      newObj[fieldProperty] = formData.get(fieldName);
    }

    //檢查 最小限制 min=XXX (如果沒有被UI擋下)
    if (formData.get(fieldName) && inputElem.hasAttribute("min")) {
      let min = Number(inputElem.getAttribute("min"));
      if (Number(formData.get(fieldName)) < min) {
        errMsgElem.style.display = "block";
        resultMsg += `${fieldName}：目前 ${formData.get(
          fieldName
        )} ，必須大於 ${min}\n`;
        inputElem.focus();
      } else {
        errMsgElem.style.display = "none";
        newObj[fieldProperty] = formData.get(fieldName);
      }
    }
    //檢查 最大限制 max=xxX (如果沒有被UI擋下)
    if (formData.get(fieldName) && inputElem.hasAttribute("max")) {
      let max = Number(inputElem.getAttribute("max"));
      if (Number(formData.get(fieldName)) > max) {
        errMsgElem.style.display = "block";
        resultMsg += `${fieldName}：目前 ${formData.get(
          fieldName
        )} ，必須小於 ${max}\n`;
        inputElem.focus();
      } else {
        errMsgElem.style.display = "none";
        newObj[fieldProperty] = formData.get(fieldName);
      }
    }

    //檢查 長度限制 maxlength=xxx (如果沒有被UI擋下)
    if (formData.get(fieldName) && inputElem.hasAttribute("maxlength")) {
      let max = Number(inputElem.getAttribute("maxlength"));
      if (Number(formData.get(fieldName)).length > max) {
        errMsgElem.style.display = "block";
        resultMsg += `${fieldName}：目前長度 ${
          formData.get(fieldName).length
        }，必須小於${max}\n`;
        inputElem.focus();
      } else {
        errMsgElem.style.display = "none";
        newObj[fieldProperty] = formData.get(fieldName);
      }
    }
  });

  return resultMsg;
}
