import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";

const routePage = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

// 페이지 렌더링 함수
function renderPage() {
  const path = window.location.pathname;
  const root = document.getElementById("root");
  const page = routePage[path] || ErrorPage;
  root.innerHTML = page();
}

renderPage();
