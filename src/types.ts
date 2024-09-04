export { paths } from './openapi/schema.js';
export { webhooks } from './openapi/webhooks.js';

import { components as primaryComponents } from './openapi/schema.js';
import { components as webhookComponents } from './openapi/webhooks.js';

export interface components {
    schemas: primaryComponents['schemas'] & webhookComponents['schemas'],
    responses: webhookComponents['responses'],
    parameters: webhookComponents['parameters'],
    requestBodies: webhookComponents['requestBodies'],
    headers: webhookComponents['headers'],
    pathItems: webhookComponents['pathItems'],
}
