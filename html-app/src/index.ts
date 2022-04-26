// import { fastButton, allComponents, provideFASTDesignSystem } from "@microsoft/fast-components";

import { badge, counter, provideMODDesignSystem } from "../../design-system/";

// provideFASTDesignSystem().register(fastButton());

provideMODDesignSystem().register(counter()).register(badge());
