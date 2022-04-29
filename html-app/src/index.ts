// import { fastButton, allComponents, provideFASTDesignSystem } from "@microsoft/fast-components";

import {
  badge,
  counter,
  label,
  textInput,
  provideMODDesignSystem,
} from "design-system";

// provideFASTDesignSystem().register(fastButton());

provideMODDesignSystem()
  .register(counter())
  .register(badge())
  .register(label())
  .register(textInput());
