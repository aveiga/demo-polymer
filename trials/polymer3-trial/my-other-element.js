import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';
export class MyOtherElement extends PolymerElement {
    static get template() {
      return `
      <h1>Hello World, again!</h1>
    `;
  }
}
customElements.define('my-other-element', MyOtherElement);