declare const getTransformations: (oldElement: HTMLElement, newElement: HTMLElement) => {
    translateX: number;
    translateY: number;
    scaleX: number;
    scaleY: number;
};
declare const flip: (firstElement: HTMLElement, lastElement: HTMLElement, parameters?: {
    transformProperty: string;
    transitionClass: string;
}) => void;
export { flip, getTransformations };
