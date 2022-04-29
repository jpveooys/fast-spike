import { DesignSystem } from "@microsoft/fast-foundation";

export { counter } from "./counter";
export { badge } from "./badge";
export { textInput } from "./text-input";
export { label } from "./label";

export function provideMODDesignSystem(element?: HTMLElement): DesignSystem {
  return DesignSystem.getOrCreate(element).withPrefix("mod");
}
