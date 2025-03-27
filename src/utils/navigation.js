import { renderPage } from "../main";

export const BASE_URL = import.meta.env.BASE_URL || "/";

export function navigate(url, replaceMode = false) {
  if (window.location.hash) {
    // 해시 라우터
    window.location.hash = url;
  } else {
    // 브라우저 라우터
    const newUrl = BASE_URL + url.replace(/^\//, "");
    if (replaceMode) {
      window.history.replaceState({}, "", newUrl);
    } else {
      window.history.pushState({}, "", newUrl);
    }
    renderPage();
  }
}
