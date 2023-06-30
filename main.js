import { setupRouter } from "@modules/functional/Router/router";
import { setupMenu } from "@modules/functional/Menu/menu";
import { setupResize } from "@modules/functional/Resize/resize";
import { setupTheme } from "@modules/functional/Theme/theme";

setupRouter();
setupMenu();
setupResize();
setupTheme();

// Определение текущего пути и редирект на главную
function defineCurrentPage() {
  const currentPath = window.location.pathname.substring(1);
  const links = document.querySelectorAll('.nav__link');
  const pathList = [];
  links.forEach((el) => {
    if (el.href.includes(currentPath)) el.classList.add('--active');
    if (el.classList.contains("--active")) pathList.push(el);
    if (pathList.length > 1) window.window.location = '/index.html';
  })
}

defineCurrentPage();



