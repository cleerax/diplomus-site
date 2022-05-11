import { cookieService } from "./cookies";

export const productsService = {
  getPage,
  getPageCount,
};

async function getPage(pageSize, pageNumber) {
  const requestOptions = {
    method: "GET",
    headers: { "Authorization": "Bearer " + cookieService.getCookie("access-token") } 
  };

  const response = await fetch("https://localhost:7050/api/products?pageSize=" + pageSize + "&pageNumber=" + pageNumber, requestOptions);

  if (response.ok) {
    return await response.json();
  }
}

async function getPageCount(pageSize) {
  const requestOptions = {
    method: "GET",
    headers: { "Authorization": "Bearer " + cookieService.getCookie("access-token") } 
  };

  const response = await fetch("https://localhost:7050/api/products/pagecount?pageSize=" + pageSize, requestOptions);

  if (response.ok) {
    return await response.json();
  }
}
