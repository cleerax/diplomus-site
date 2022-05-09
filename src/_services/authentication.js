import { cookieService } from "./cookies.js";

export const authService = {
  isAuthenticated,
  login,
  logout,
  register,
  getUserInfo,
};

function getUserInfo() {
  return {
    userId: cookieService.getCookie("userId"),
    userName: cookieService.getCookie("user-name"),
    accessRights: cookieService.getCookie("access-rights"),
    email: cookieService.getCookie("email"),
  };
}

function isAuthenticated() {
  return cookieService.getCookie("userId") !== undefined;
}

async function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }),
  };

  const response = await fetch(
    "https://localhost:5001/api/users/authenticate",
    requestOptions
  );

  if (response.ok) {
    let result = await response.json();

    cookieService.setCookie("userId", result.userId);
    cookieService.setCookie("user-name", result.userName);
    cookieService.setCookie("access-rights", result.accessRights);
    cookieService.setCookie("email", result.email);

    return result;
  } else return null;
}

function logout() {
  cookieService.deleteCookie("userId");
  cookieService.deleteCookie("user-name");
  cookieService.deleteCookie("access-rights");
  cookieService.deleteCookie("email");
  document.location.reload();
}

async function register(username, password, email) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
  };

  const response = await fetch(
    "https://localhost:5001/api/users/register",
    requestOptions
  );

  if (response.ok) return null;
  else return "error";
}
