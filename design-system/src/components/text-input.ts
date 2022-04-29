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
  observable,
  ref,
  ViewTemplate,
} from "@microsoft/fast-element";
import {
  action100,
  action500,
  neutral200,
  neutral600,
  neutralWhite,
} from "../tokens/colours";

export class TextInput extends FoundationElement {
  public _elementInternals: ElementInternals = this.attachInternals();

  public static get formAssociated(): boolean {
    return true;
  }

  @attr({ attribute: "label" })
  public label: string = "";

  @attr({ attribute: "name" })
  public name: string = "";

  @attr({ attribute: "value" })
  public initialValue: string = "";

  public initialValueChanged(_previousValue: string, nextValue: string) {
    this.value = nextValue;
  }

  @observable
  public value: string = "";

  @observable
  public hasFocus: boolean = false;

  public inputRef: HTMLInputElement | null = null;
}

export const template: FoundationElementTemplate<ViewTemplate<TextInput>> = (
  _context,
  _definition
) => html`
  <template>
    <div
      class="control ${(x) => (x.hasFocus ? "has-focus" : "")}"
      part="control"
    >
      <label>
        <mod-label ?is-shrunk="${(x) => Boolean(x.value || x.hasFocus)}"
          >${(x) => x.label}</mod-label
        >
        <input
          type="text"
          part="control"
          :value="${(x) => x.initialValue}"
          @input="${(x, _c) => {
            x.value = x.inputRef?.value ?? "";
            (x._elementInternals as any).setFormValue(x.inputRef?.value || "");
            return true;
          }}"
          @focus="${(x) => {
            x.hasFocus = true;
            return true;
          }}"
          @blur="${(x) => {
            x.hasFocus = false;
            return true;
          }}"
          ${ref("inputRef")}
      /></label>
    </div>
  </template>
`;

const styles: ElementStyles = css`
  ${display("inline-block")} :host {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  .control {
    position: relative;
    background-color: ${neutralWhite};
    border: none;
    border-radius: 12px;
    box-shadow: 0 0 0 1px ${neutral200};
    transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .control.has-focus {
    box-shadow: 0 0 0 3px ${action500}, 0 0 0 6px ${action100};
  }

  .control input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 22px 12px 6px 11px;
    border: 0;
    outline: none;
    background: none;
    font-size: 16px;
    color: ${neutral600};
    height: 44px;
  }
`;

export const textInput = TextInput.compose({
  baseName: "text-input",
  template,
  styles,
});
