import { renderPage } from "../main";

export function navigate(url) {
  if (window.location.hash) {
    // 해시 라우터
    window.location.hash = url;
  } else {
    // 브라우저 라우터
    window.history.pushState({}, "", url);
    renderPage();
  }
}
