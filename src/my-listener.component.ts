import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-listener')
export class MyListener extends LitElement {
  @property({type: Boolean})
  canCheck: boolean = false;
  protected override render() {
    return html` <p @checked=${this._checkedHandler}><slot></slot></p>
      <hr />
      <p>${this.canCheck ? 'Allowing' : 'Preventing'} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>`;
  }
  private _checkedHandler(e: CustomEvent) {
    if (!this.canCheck) {
      e.preventDefault();
      e.detail.message = '✅ Prevented!!';
    }
  }
  private _clickHandler() {
    this.canCheck = !this.canCheck;
  }
}
