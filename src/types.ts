export { paths } from './gen/schema.js';
export { webhooks } from './gen/webhooks.js';

import { components as primaryComponents } from './gen/schema.js';
import { components as webhookComponents } from './gen/webhooks.js';

export type components = primaryComponents & webhookComponents;
