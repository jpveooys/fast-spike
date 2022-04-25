import {DesignSystem} from "@microsoft/fast-foundation";

export {
counter
} from './counter'
export {badge} from './badge'

export function provideSpecialDesignSystem(element?: HTMLElement): DesignSystem {
  return DesignSystem.getOrCreate(element).withPrefix("mod");
}
