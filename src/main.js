import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import "./utils/eventHandlers.js";

const routePage = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

// 페이지 렌더링 함수
export function renderPage() {
  const path = window.location.pathname;
  const root = document.getElementById("root");
  const page = routePage[path] || ErrorPage;
  root.innerHTML = page();
}
renderPage();
window.onpopstate = renderPage;

// /login 경로로 접근하면은 로그인 페이지가 렌더링 기존에는 안되었다는 소리
window.addEventListener("popstate", renderPage);
