export default function debounce(callback: any, timing = 100) {
  let timer: any = null;
  return function (...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timing);
  };
}
