import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import "./utils/eventHandlers.js";

// const BASE_URL =
//   process.env.NODE_ENV === "production" ? "/front_5th_chapter1-1" : "";

const routePage = {
  [`/`]: MainPage,
  [`/login`]: LoginPage,
  [`/profile`]: ProfilePage,
};

function getCurPath() {
  const basePath = "/front_5th_chapter1-1";
  if (window.location.hash) {
    // 해시 라우터
    return window.location.hash.slice(1) || "/";
  }
  // 브라우저 라우터
  return window.location.pathname.replace(basePath, "") || "/";
}

// 페이지 렌더링 함수
export function renderPage() {
  const path = getCurPath();
  const root = document.getElementById("root");
  const page = routePage[path] || ErrorPage;
  root.innerHTML = page();
}
renderPage();
window.onpopstate = renderPage;

// /login 경로로 접근하면은 로그인 페이지가 렌더링 기존에는 안되었다는 소리, popstate 이벤트 리스너
window.addEventListener("popstate", renderPage);

//hashRouter state 이벤트 리스너
window.addEventListener("hashchange", renderPage);
