import {
  FoundationElement,
  FoundationElementTemplate,
} from "@microsoft/fast-foundation";
import { attr } from "@microsoft/fast-element";
import { html, css, ElementStyles } from "@microsoft/fast-element";
import { ViewTemplate } from "@microsoft/fast-element";

export class Counter extends FoundationElement {
  @attr count = 0;

  increment() {
    this.count++;
  }
}

export const styles: FoundationElementTemplate<ElementStyles> = (
  _context,
  _definition
) =>
  css`
    /* ... */
  `;

export const template: FoundationElementTemplate<ViewTemplate<Counter>> = (
  _context,
  _definition
) => html` <div>The count is ${(x) => x.count}.</div> `;

export const counter = Counter.compose({
  baseName: "counter",
  template,
  styles,
});
