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
import { padding2, padding3 } from "../tokens";
import { action100, action700 } from "../tokens/colours";

class Badge extends FoundationElement {
  @attr({ attribute: "size" })
  public size: "standard" | "large" = "standard";

  @attr({ mode: "boolean" })
  public isRounded: boolean = false;
}

export const template: FoundationElementTemplate<ViewTemplate<Badge>> = (
  context,
  definition
) => html`
  <template>
    <div class="control" part="control">
      <slot></slot>
    </div>
  </template>
`;

export const styles: FoundationElementTemplate<ElementStyles> = (
  context,
  definition
) => css`
  ${display("inline-block")} :host {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-size: 12px;
  }

  .control {
    border-radius: 2px;
    padding: ${padding2};
    background-color: ${action100};
    color: ${action700};
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  :host([isRounded]) .control {
    border-radius: 999px;
  }

  :host([size="large"]) {
    font-size: 14px;

    .control {
      padding: ${padding3};
    }
  }
`;

export const badge = Badge.compose({
  baseName: "badge",
  template,
  styles,
});
