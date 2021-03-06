import { LitElement, html, css } from 'lit-element/lit-element.js';
import '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import { addListener } from '@polymer/polymer/lib/utils/gestures.js';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';
import { timeOut } from '@polymer/polymer/lib/utils/async.js';

/**
 * `morph-ripple`
 * General ripple animation element for Polymorph Components
 *
 * @polymerElement
 * @extends HTMLElement
 * @demo demo/index.html
 */
export class MorphRipple extends LitElement {
  static get styles() {
    return [ 
      css`
        :host {
          --ripple-color: #2196f3;
          overflow: hidden;
        }

        :host, .container {
          display: block;
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          /* pointer-events: none; */
        }

        .container span {
          transform: scale(0);
          border-radius: 100%;
          position: absolute;
          opacity: 0.75;
          background-color: var(--ripple-color);
          animation: ripple 1000ms;
        }

        @keyframes ripple {
          to {
            opacity: 0;
            transform: scale(2);
          }
        } 
      `
    ];
  }
  render() {
    return html`
      <div id="container" class="container"></div>
    `;
  }

  static get is() { return 'morph-ripple'; }
  static get properties() {
    return {
      
    };
  }

  firstUpdated() {
    super.firstUpdated();

    /**
     * Gesture addListener down
     *
     * @param  {Object} this - the button element
     * @param  {string} 'down' - event from key down that we want to listen
     * @param  {Object} e - refers to the element that event down have happened
     *
     */
    addListener(this, 'down', e => {
      this.showRipple(e);
    });

    /**
     * Gestures addListener up
     *
     * @param  {Object} this - the button element
     * @param  {string} 'up' - the type of event we want to listen which is the key up or finger up
     * @param  {Object} e    - refers to the element that event up have happened
     *
     * _debounce will limit the ripple function will fire
     */
    addListener(this, 'up', e => {
      this._debounce = Debouncer.debounce(
        this._debounce,
        timeOut.after(1000),
        () => this.cleanUp()
      );
    });
    
  }

  /**
   * showRipple gives material design-like ripple effect when buttons are click
   *
   * @param  {Object} e - the button element that the event key down or finger down has happen
   *
   * @return {Object}   - returns the style attribute of the button element with corresponding css styling related to the ripple effect
   */
  showRipple(e) {
    const ripple = document.createElement('span');
    const size = this.offsetWidth;
    const pos = this.getBoundingClientRect();

    // for computation of style top and left using Polymer Gesture implementation
    const x = e.detail.x - pos.left - size / 2; 
    const y = e.detail.y - pos.top - size / 2;

    const style =
      'top:' +
      y +
      'px; left: ' +
      x +
      'px; height: ' +
      size +
      'px; width: ' +
      size +
      'px;'
    ;
    const shadow = this.shadowRoot;
    const container = shadow.querySelector('#container');
    container.appendChild(ripple);
   
    return ripple.setAttribute('style', style);
 }

  /**
   * clean up the container for the ripple effect
   */
  cleanUp() {
    const shadow = this.shadowRoot;
    const container = shadow.querySelector('#container');
    
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
}

window.customElements.define(MorphRipple.is, MorphRipple);
