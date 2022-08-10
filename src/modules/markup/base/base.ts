import './base.css';

const html = document.querySelector('html') as HTMLElement;
const head = html?.querySelector('head') as HTMLElement;
export const body = html?.querySelector('body') as HTMLElement;

const baseDocumentHtml = `
<meta charset="UTF-8">	    
<meta http-equiv="X-UA-Compatible" content="IE=edge">	    
<meta name="viewport" content="width=device-width, initial-scale=1.0">	    
<title>Async-Race</title>`;

head?.insertAdjacentHTML('afterbegin', baseDocumentHtml);

export interface IDomNode {
  id?: string;
  typeElement: string;
  className?: string;
  text?: string;
  src?: string;
  type?: string;
  color?: string;
  colorText?: string;

  parentElement?: HTMLElement | HTMLInputElement;
}

export const createDomNode = ({
    typeElement,
    id,
    className,
    text,
    type,
    color,
    colorText,
    parentElement,
}: IDomNode) => {
    let element;
    if (typeElement === 'input' || typeElement === 'button') {
        element = document.createElement(typeElement) as HTMLInputElement;
        if (type) {
            element.type = type;
        }
    } else {
        element = document.createElement(typeElement) as HTMLElement;
    }
    if (id) {
        element.id = id;
    }
    if (className) {
        element.classList.add(className);
    }
    if (text) {
        element.innerText = text;
    }
    if (color) {
        element.style.backgroundColor = color;
    }
    if (colorText) {
        element.style.color = colorText;
    }

    if (parentElement) {
        parentElement.appendChild(element);
    }
    return element;
};
