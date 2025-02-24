export async function delayAsync(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getElementAsync<T extends HTMLElement>(
  msg: string,
  selector: string,
  parent?: HTMLElement,
  delayMS?: number
): Promise<T> {
  if (!delayMS) delayMS = 1000;

  const querySelector = (): T | null =>
    parent ? parent.querySelector(selector) : document.querySelector(selector);

  for (let i = 0; i < 10; i++) {
    const element = querySelector();

    if (!element) {
      console.log(`${msg} не найдено`);
      await delayAsync(delayMS);
      continue;
    }

    console.log(`${msg} найдено`);
    return element;
  }

  throw new Error(`${msg} не найдено`);
}
