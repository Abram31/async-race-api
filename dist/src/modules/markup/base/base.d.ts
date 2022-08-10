import './base.css';
export declare const body: HTMLElement;
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
export declare const createDomNode: ({ typeElement, id, className, text, type, color, colorText, parentElement, }: IDomNode) => HTMLElement;
