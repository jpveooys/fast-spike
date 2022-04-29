// Note that they don't recommend using fixed colours as tokens but instead recommend
// using an adaptive colour system https://www.fast.design/docs/design-systems/fast-frame/#adaptive-color-system

import { DesignToken } from "@microsoft/fast-foundation";

export const action100 =
  DesignToken.create<string>("action-100").withDefault("#ddf4ff");
export const action500 =
  DesignToken.create<string>("action-500").withDefault("#3a8fdd");
export const action700 =
  DesignToken.create<string>("action-700").withDefault("#2661a7");
export const neutral200 =
  DesignToken.create<string>("neutral-200").withDefault("#b8c7d2");
export const neutral400 =
  DesignToken.create<string>("neutral-400").withDefault("#3e5667");
export const neutral600 =
  DesignToken.create<string>("neutral-600").withDefault("#1c2d39");
export const neutralWhite =
  DesignToken.create<string>("neutral-white").withDefault("#fff");
