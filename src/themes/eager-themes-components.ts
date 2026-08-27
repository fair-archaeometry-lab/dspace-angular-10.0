// import { COMPONENTS as CUSTOM_THEME_EAGER_COMPONENTS } from './custom/eager-theme-components';
import { COMPONENTS as FAIRLAB_THEME_EAGER_COMPONENTS } from './fairlab/eager-theme-components';
import { COMPONENTS as FAIRLAB_SERVICE_EAGER_COMPONENTS } from './fairlab-service/eager-theme-components';
import { COMPONENTS as FAIRLAB_INSTRUMENT_EAGER_COMPONENTS } from './fairlab-instrument/eager-theme-components';
import { COMPONENTS as FAIRLAB_LAB_EAGER_COMPONENTS } from './fairlab-lab/eager-theme-components';
// import { COMPONENTS as DSPACE_THEME_EAGER_COMPONENTS } from './dspace/eager-theme-components';

/**
 * This list bundles the eager components from all the enabled themes.
 * Themes that aren't in use should not be imported here, so they don't
 * take up unnecessary space in the main bundle.
 */
export const EAGER_THEME_COMPONENTS = [
  // ...CUSTOM_THEME_EAGER_COMPONENTS,
  ...FAIRLAB_THEME_EAGER_COMPONENTS,
  ...FAIRLAB_SERVICE_EAGER_COMPONENTS,
  ...FAIRLAB_INSTRUMENT_EAGER_COMPONENTS,
  ...FAIRLAB_LAB_EAGER_COMPONENTS,
  // ...DSPACE_THEME_EAGER_COMPONENTS,
];
