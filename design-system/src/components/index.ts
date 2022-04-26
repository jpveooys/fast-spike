import { DesignSystem } from "@microsoft/fast-foundation";

export { counter } from "./counter";
export { badge } from "./badge";
//
// export { fastBadge } from "@microsoft/fast-components";
//
export function provideMODDesignSystem(element?: HTMLElement): DesignSystem {
  return DesignSystem.getOrCreate(element).withPrefix("mod");
}
