// Note that they don't recommend using fixed colours as tokens but instead recommend
// using an adaptive colour system https://www.fast.design/docs/design-systems/fast-frame/#adaptive-color-system

import { DesignToken } from "@microsoft/fast-foundation";

export const action100 =
  DesignToken.create<string>("action-100").withDefault("#ddf4ff");
export const action700 =
  DesignToken.create<string>("action-700").withDefault("#2661a7");
