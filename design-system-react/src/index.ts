import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

import { badge, provideMODDesignSystem } from "design-system";

const { wrap } = provideReactWrapper(React, provideMODDesignSystem());

export const MODBadge = wrap(badge());
