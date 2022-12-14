const text = document.querySelector(".loading-text");
const bg = document.querySelector(".background");

let load = 0;
let timer = null;
/**
 *
 * 工具函数
 * 将n 从  inMin ~ inMax 映射到 outerMin ~ outerMax
 */
let scale = (n, inMin, inMax, outerMin, outerMax) => {
  return ((n - inMin) * (outerMax - outerMin)) / (inMax - inMin) + outerMin;
};

let blurryLoadingHandle = function () {
  load++;
  if (load > 99) {
    clearTimeout(timer);
  } else {
    timer = setTimeout(blurryLoadingHandle, 20);
  }
  text.textContent = `页面正在拼命加载${load}%`;
  text.getElementsByClassName.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
};

blurryLoadingHandle();
