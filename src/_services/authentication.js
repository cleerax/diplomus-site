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
  return (
    cookieService.getCookie("userId") !== undefined &&
    cookieService.getCookie("access-token") !== undefined
  );
}

async function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }),
  };

  const response = await fetch(
    "https://localhost:7050/api/users/login",
    requestOptions
  );

  if (response.ok && response.status != 204) {
    let result = await response.json();

    cookieService.setCookie("userId", result.user.userId);
    cookieService.setCookie("user-name", result.user.userName);
    cookieService.setCookie("roles", result.user.roles);
    cookieService.setCookie("email", result.user.email);

    cookieService.setCookie("access-token", result.token);

    return result;
  } else return null;
}

function logout() {
  cookieService.deleteCookie("userId");
  cookieService.deleteCookie("user-name");
  cookieService.deleteCookie("roles");
  cookieService.deleteCookie("email");
  cookieService.deleteCookie("access-token");
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

  return await fetch(
    "https://localhost:7050/api/users/register",
    requestOptions
  );
}
