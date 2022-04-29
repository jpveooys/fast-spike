import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

import { badge, label, textInput, provideMODDesignSystem } from "design-system";

const { wrap } = provideReactWrapper(
  React,
  provideMODDesignSystem().register(label())
);

export const MODBadge = wrap(badge());
export const MODTextInput = wrap(textInput());
