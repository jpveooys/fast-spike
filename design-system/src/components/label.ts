import {
  display,
  FoundationElement,
  FoundationElementTemplate,
} from "@microsoft/fast-foundation";
import {
  attr,
  css,
  ElementStyles,
  html,
  ViewTemplate,
} from "@microsoft/fast-element";

import { neutral400 } from "../tokens/colours";

export class Label extends FoundationElement {
  @attr({ mode: "boolean", attribute: "is-shrunk" })
  public isShrunk: boolean = false;
}

export const template: FoundationElementTemplate<ViewTemplate<Label>> = (
  _context,
  _definition
) => html`
  <template>
    <slot></slot>
  </template>
`;

const styles: ElementStyles = css`
  ${display("block")} :host {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    overflow: hidden;
    transition: all cubic-bezier(0, 0, 0.2, 1) 0.2s;
    pointer-events: none;
    color: ${neutral400};
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;

    padding-left: 11px;
    padding-right: 7px;
    padding-top: 15px;
  }

  :host([is-shrunk]) {
    font-size: 10px;
    padding-top: 6px;
  }
`;

export const label = Label.compose({
  baseName: "label",
  template,
  styles,
});
