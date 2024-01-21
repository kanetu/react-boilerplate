export function debounce(fn: Function, ms: number) {
  let timer: ReturnType<typeof setTimeout>;

  return function () {
    const args = arguments;
    const context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, ms);
  };
}
