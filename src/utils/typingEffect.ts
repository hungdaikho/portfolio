export const typingEffect = (element: HTMLElement, cursor: HTMLElement) => {
  const content = ["Web Developer", "Graphic Design"];
  let processing: number = 0;
  let processing_index: number = 0;
  let interval: any;
  const type = () => {
    let text = content[processing].substring(0, processing_index + 1);
    element.innerHTML = text;
    processing_index++;
    if (text === content[processing]) {
      clearInterval(interval);
      setTimeout(() => {
        interval = setInterval(Delete, 100);
      }, 400);
    }
  };
  const Delete = () => {
    let text = content[processing].substring(0, processing_index - 1);
    element.innerHTML = text;
    processing_index--;
    if (text === "") {
      clearInterval(interval);
      if (processing === content.length - 1) {
        processing = 0;
      } else {
        processing++;
      }
      processing_index = 0;
      setTimeout(() => {
        interval = setInterval(type, 200);
      }, 200);
    }
  };
  interval = setInterval(type, 200);
};
