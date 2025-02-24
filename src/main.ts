import { clickLikeAsync } from "./clickLike";

const timeoutMilliseconds = 5 * 1000; // 5 seconds
let lastTimeout: number | null = null;
const titleObserver = new MutationObserver(begin);
begin();

titleObserver.observe(document.querySelector("title") as Node, {
  childList: true,
});

function begin() {
  if (lastTimeout != null) {
    clearTimeout(lastTimeout);
    lastTimeout = null;
  }
  lastTimeout = setTimeout(clickLikeAsync, timeoutMilliseconds);
}
