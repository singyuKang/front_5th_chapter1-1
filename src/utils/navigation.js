import { renderPage } from "../main";

export function navigate(url) {
  window.history.pushState({}, "", url); // URL 변경
  renderPage(); // 새로고침 없이 페이지 렌더링
}
