import { getElementAsync } from "./common";

export async function clickLikeAsync() {
  const title = await getElementAsync<HTMLTitleElement>("Заголовок", "title");
  console.log(title.innerText);

  const subscribeButton = await getElementAsync<HTMLButtonElement>(
    "кнопка подписки",
    "#subscribe-button"
  );

  if (
    subscribeButton.innerText.toLocaleLowerCase() == "подписаться" ||
    (subscribeButton.innerText.toLocaleLowerCase() !== "вы подписаны" &&
      subscribeButton.innerText.toLocaleLowerCase() !== "")
  ) {
    console.log("нет подписки");
    return;
  }

  const dislikeButtonViewModel = await getElementAsync(
    "dislikeButtonViewModel",
    "dislike-button-view-model"
  );

  const dislikeButton = await getElementAsync<HTMLButtonElement>(
    "кнопка 'не нравится'",
    "button",
    dislikeButtonViewModel
  );

  if (dislikeButton.getAttribute("aria-pressed") == "true") {
    console.log("дизлайк уже присутствует");
    return;
  }

  const likeButtonViewModel = await getElementAsync(
    "likeButtonViewModel",
    "like-button-view-model"
  );

  const likeButton = await getElementAsync<HTMLButtonElement>(
    "кнопка 'нравится'",
    "button",
    likeButtonViewModel
  );

  if (likeButton.getAttribute("aria-pressed") == "true") {
    console.log("лайк уже присутствует");
    return;
  }

  likeButton.click();
  console.log("лайк поставлен");
}
