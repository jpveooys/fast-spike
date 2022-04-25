// import { fastButton, allComponents, provideFASTDesignSystem } from "@microsoft/fast-components";

import {
  badge,
  counter,
  provideSpecialDesignSystem
} from "./components";

// provideFASTDesignSystem().register(fastButton());

provideSpecialDesignSystem()
  .register(
    counter()
  ).register(
  badge()
);
