export { paths } from './gen/schema.js';
export { webhooks } from './gen/webhooks.js';

import { components as primaryComponents } from './gen/schema.js';
import { components as webhookComponents } from './gen/webhooks.js';

export interface components {
    schemas: primaryComponents['schemas'] & webhookComponents['schemas'],
    responses: webhookComponents['responses'],
    parameters: webhookComponents['parameters'],
    requestBodies: webhookComponents['requestBodies'],
    headers: webhookComponents['headers'],
    pathItems: webhookComponents['pathItems'],
}
