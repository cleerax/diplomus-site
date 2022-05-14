import { cookieService } from "./cookies";

export const contractorsService = {
  getPage,
  getPageCount,
  getById,
  getProductsPageCount,
  getProductsPage,
};

async function getPage(pageSize, pageNumber) {
  const requestOptions = {
    method: "GET",
    headers: { "Authorization": "Bearer " + cookieService.getCookie("access-token") } 
  };

  const response = await fetch("https://localhost:7050/api/contractors?pageSize=" + pageSize + "&pageNumber=" + pageNumber, requestOptions);

  if (response.ok) {
    let result = await response.json();
    for (let i = 0; i < result.length; i++) {
      result[i] = replaceNulls(result[i]);
    }
    return result;
  }
}

async function getPageCount(pageSize) {
  const requestOptions = {
    method: "GET",
    headers: { "Authorization": "Bearer " + cookieService.getCookie("access-token") } 
  };

  const response = await fetch("https://localhost:7050/api/contractors/pagecount?pageSize=" + pageSize, requestOptions);

  if (response.ok) {
    return await response.json();
  }
}

async function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: { "Authorization": "Bearer " + cookieService.getCookie("access-token") } 
  };

  const response = await fetch("https://localhost:7050/api/contractors/" + id, requestOptions);

  if (response.ok) {
    return replaceNulls(await response.json());
  }
}

async function getProductsPageCount(contractorId, pageSize) {
  const requestOptions = {
    method: "GET",
    headers: { "Authorization": "Bearer " + cookieService.getCookie("access-token") } 
  };

  const response = await fetch(
    "https://localhost:7050/api/contractors/" +
      contractorId +
      "/products/pageCount?pageSize=" +
      pageSize,
    requestOptions
  );

  if (response.ok) {
    return await response.json();
  }
}

async function getProductsPage(contractorId, pageSize, pageNumber) {
  const requestOptions = {
    method: "GET",
    headers: { "Authorization": "Bearer " + cookieService.getCookie("access-token") } 
  };

  const response = await fetch(
    "https://localhost:7050/api/contractors/" +
      contractorId +
      "/products?pageSize=" +
      pageSize +
      "&pageNumber=" +
      pageNumber,
    requestOptions
  );

  if (response.ok) {
    return await response.json();
  }
}

function isURL(str) {
  var pattern = new RegExp(
    "^((ft|htt)ps?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?" + // port
      "(\\/[-a-z\\d%@_.~+&:]*)*" + // path
      "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return pattern.test(str);
}

function replaceNulls(result) {
  if (isURL(result.imageLink)) result.imageLink = encodeURI(result.imageLink);
  if (result.inn == null) result.inn = "ИНН не указан";
  if (result.address == null) result.address = "Адрес не указан";
  if (result.imageLink == null) result.imageLink = "/img/noimage.png";
  if (result.activeTime == null) result.activeTime = "Активное время не указано";

  return result;
}
