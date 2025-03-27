import { renderPage } from "../main";

const BASE_URL = import.meta.env.BASE_URL || "/";

export function navigate(url) {
  if (window.location.hash) {
    // 해시 라우터
    window.location.hash = url;
  } else {
    // 브라우저 라우터
    const newUrl = BASE_URL + url.replace(/^\//, "");
    window.history.pushState({}, "", newUrl);
    renderPage();
  }
}
