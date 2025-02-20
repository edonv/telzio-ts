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

export type WebhookEventBody = webhookComponents['schemas']['CallCreatedBody']
    | webhookComponents['schemas']['CallEndedBody']
    | webhookComponents['schemas']['CallHungUpBody']
    | webhookComponents['schemas']['CallStatusChangedBody']
    | webhookComponents['schemas']['ChildCallConnectedBody']
    | webhookComponents['schemas']['ChildCallCreatedBody']
    | webhookComponents['schemas']['RecordingReadyBody']
    | webhookComponents['schemas']['SMSSentReceivedBody']
    | webhookComponents['schemas']['VoicemailReceivedBody']
    | webhookComponents['schemas']['AttendedTransferBody']
    | webhookComponents['schemas']['BlindTransferBody']
    | webhookComponents['schemas']['FaxReceivedBody']
    | webhookComponents['schemas']['CallUpdatedBody']
    | webhookComponents['schemas']['CallTaggedBody']
    | webhookComponents['schemas']['CallFlowEnteredBody'];
