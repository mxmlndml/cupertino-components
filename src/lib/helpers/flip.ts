const getHeight = (clientRect: DOMRect) => clientRect.bottom - clientRect.top;
const getWidth = (clientRect: DOMRect) => clientRect.right - clientRect.left;

const getTransformations = (
  oldElement: HTMLElement,
  newElement: HTMLElement,
) => {
  const oldClientRect = oldElement.getBoundingClientRect();
  const newClientRect = newElement.getBoundingClientRect();

  const oldHeight = getHeight(oldClientRect);
  const oldWidth = getWidth(oldClientRect);
  const newHeight = getHeight(newClientRect);
  const newWidth = getWidth(newClientRect);

  const translateX = oldClientRect.left - newClientRect.left;
  const translateY = oldClientRect.top - newClientRect.top;
  const scaleX = oldWidth / newWidth;
  const scaleY = oldHeight / newHeight;

  return {
    translateX,
    translateY,
    scaleX,
    scaleY,
  };
};

const defaultConfig = {
  transformProperty: "--transform",
  transitionClass: "invert",
};

const flip = (
  firstElement: HTMLElement,
  lastElement: HTMLElement,
  parameters = defaultConfig,
) => {
  // get coordinates/dimensions
  const first = firstElement.getBoundingClientRect();
  const last = lastElement.getBoundingClientRect();

  // calculate translate and scale
  const translateX = first.left - last.left;
  const translateY = first.top - last.top;
  const scaleX = first.width / last.width;
  const scaleY = first.height / last.height;

  // apply transform property
  const css =
    `translate3d(${translateX}px, ${translateY}px, 0) scale3d(${scaleX}, ${scaleY}, 1)`;
  lastElement.style.setProperty(parameters.transformProperty, css);

  // add transition class -> inverts last element to look like first element
  lastElement.classList.add(parameters.transitionClass);

  // remove transition class -> plays transition from first to last
  setTimeout(() => lastElement.classList.remove(parameters.transitionClass), 0);
};

export { flip, getTransformations };
