/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export interface webhooks {
    callCreated: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This webhook event is fired whenever a parent call is created. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["CallCreated"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    callEnded: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This webhook event is fired when a call is ended. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["CallEnded"];
            responses: never;
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    callHungUp: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired when a call hangs up. This event can be used to determine which end of a conversation ended the call. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["CallHungUp"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    callStatusChanged: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired whenever the status of a call is changed. For instance this can be when a call is answered, canceled or isn’t answered. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["CallStatusChanged"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    childCallConnected: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired whenever a parent call is connected with a child call, and voice communication is established. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["ChildCallConnected"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    childCallCreated: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired when a child call (a B leg on a call) is created. These always contain a reference to the parent call that created them. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["ChildCallCreated"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    recordingReady: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This webhook event is fired when a call is recorded and the mp3 file is ready to be downloaded. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["RecordingReady"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    smsSentReceived: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired when an SMS is received or sent on the account. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["SMSSentReceived"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    voicemailReceived: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired when a voicemail is received. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["VoicemailReceived"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    attendedTransfer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired when a user performs an attended transfer. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["AttendedTransfer"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    blindTransfer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired when a user performs a blind transfer. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["BlindTransfer"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    faxReceived: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired when a fax is received. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["FaxReceived"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    callUpdated: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Sometimes call details are updated after they are created, and such updates will trigger a "call_updated" webhook event. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["CallUpdated"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    callTagged: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired when a call is tagged by the Tag action in a call flow. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["CallTagged"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    callFlowEntered: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description This event is fired when a call is tagged by the Tag action in a call flow. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["CallFlowEntered"];
            responses: {
                200: components["responses"]["Success"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export interface components {
    schemas: {
        /** @enum {string} */
        WebhookEventType: "call_created" | "call_ended" | "call_hungup" | "call_status_changed" | "child_call_connected" | "child_call_created" | "call_recording_ready" | "sms_processed" | "voicemail_received" | "attended_transfer" | "blind_transfer" | "fax_received" | "call_updated" | "call_tagged" | "call_flow_updated";
        /** @enum {string} */
        CallDirection: "inbound" | "outbound";
        CallStatusType: "initializing" | "ringing" | "in-progress" | "cancel" | "noanswer" | "completed";
        CallIdentifier: string;
        /** @description General shared schema for all webhook request bodies. */
        WebhookBody: {
            EventType: components["schemas"]["WebhookEventType"];
            date: string | null;
        };
        /** @description `call_created` event data. */
        CallCreatedBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value 'call_created' for this event.
             * @enum {string}
             */
            EventType: "call_created";
            /** @description A unique identifier for this call. */
            call_id: components["schemas"]["CallIdentifier"];
            /** @description Either `'inbound'` or `'outbound'`. */
            direction: components["schemas"]["CallDirection"];
            /** @description Either a username or E164 number (+ prefixed). */
            from: string;
            from_extension?: string | null;
            /** @description CNAM of caller, if present. */
            from_cnam?: string | "<unknown>";
            /** @description Extension dialed by user for `'outbound'`, E164 number dialed for `'inbound'`. */
            to: string;
            /**
             * Format: float
             * @description Minute rate for this call. A decimal.
             */
            rate: number;
            /**
             * @description Enum def not final.
             * @enum {string}
             */
            type?: "dial";
        };
        /** @description `call_ended` event data. */
        CallEndedBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value 'call_ended' for this event.
             * @enum {string}
             */
            EventType: "call_ended";
            /** @description A unique identifier for this call. */
            call_id: components["schemas"]["CallIdentifier"];
            /** @description Id of parent call if this is a child call. Null if this is a parent call. */
            parent_call_id: components["schemas"]["CallIdentifier"] | null;
            /** @description Call status of this call when it was ended. */
            call_status: components["schemas"]["CallStatusType"];
            direction?: components["schemas"]["CallDirection"];
            /** @description A hint as to why the call was ended. */
            reason: string;
            /** @description Either a username or E164 number (+ prefixed). */
            from: string;
            /** @description Either a username or E164 number (+ prefixed). */
            to: string;
            /**
             * Format: integer
             * @description The duration of the call from start to finish in seconds. An integer.
             */
            duration: number;
            /**
             * Format: integer
             * @description The part of the call where voice was exchanged in seconds. An integer.
             */
            billed_duration: number;
            /**
             * Format: float
             * @description Total price of this call. A decimal.
             */
            price: number;
            /**
             * Format: float
             * @description Minute rate of this call. A decimal.
             */
            rate: number;
            /**
             * Format: integer
             * @description Free Minutes spent from call by this call in seconds. An integer.
             */
            free_minutes: number;
            was_missed_call?: boolean;
        };
        /** @description `call_hungup` event data. */
        CallHungUpBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "call_hungup" for this event.
             * @enum {string}
             */
            EventType: "call_hungup";
            /** @description A unique identifier for this call. */
            call_id: components["schemas"]["CallIdentifier"];
            parent_call_id: components["schemas"]["CallIdentifier"] | null;
        };
        /** @description `call_status_changed` event data. */
        CallStatusChangedBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "call_status_changed" for this event.
             * @enum {string}
             */
            EventType: "call_status_changed";
            /** @description A unique identifier for this call. */
            call_id: components["schemas"]["CallIdentifier"];
            parent_call_id: components["schemas"]["CallIdentifier"] | null;
            /** @description The new status being transitioned into. */
            status: components["schemas"]["CallStatusType"];
        };
        /** @description `child_call_connected` event data. */
        ChildCallConnectedBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "child_call_connected" for this event.
             * @enum {string}
             */
            EventType: "child_call_connected";
            /** @description A unique identifier for this call. */
            call_id: components["schemas"]["CallIdentifier"];
            /** @description Id of parent call this call belongs to. */
            parent_call_id: components["schemas"]["CallIdentifier"];
        };
        /** @description `child_call_created` event data. */
        ChildCallCreatedBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "child_call_created" for this event.
             * @enum {string}
             */
            EventType: "child_call_created";
            /** @description A unique identifier for this call. */
            call_id: components["schemas"]["CallIdentifier"];
            /** @description Id of parent call this call belongs to. */
            parent_call_id: components["schemas"]["CallIdentifier"];
            /** @description Either a username or E164 number (+ prefixed). */
            from: string;
            /** @description Extension dialed by user for outbound, E164 number dialed for inbound. */
            to: string;
            /**
             * Format: float
             * @description Minute rate for this call. A decimal.
             */
            rate: number;
        };
        /** @description `call_recording_ready` event data. */
        RecordingReadyBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "call_recording_ready" for this event.
             * @enum {string}
             */
            EventType: "call_recording_ready";
            /** @description Unique identifier of parent call where this message was received. */
            call_id: components["schemas"]["CallIdentifier"];
            /** @description An ID for the recording. */
            recording_id: string;
            /** @description Username who received this voicemail. */
            username: string;
            /** @description Call flow which this recording was made in. */
            call_flow: string;
            /** @description E164 number this recording is from. */
            from: string;
            /** @description Name of caller, if present. */
            from_name?: string;
            /** @description E164 number dialed when message was recorded. */
            to: string;
            /**
             * Format: url
             * @description Url where the recording can be downloaded from.
             */
            url: string;
        };
        /** @description `sms_processed` event data. */
        SMSSentReceivedBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "sms_processed" for this event.
             * @enum {string}
             */
            EventType: "sms_processed";
            /** @description Unique identifier for the SMS Message. */
            sms_id: string;
            /** @description E164 number this SMS was sent from. */
            from: string;
            /** @description E164 number this SMS was sent from. */
            to: string;
            /** @description Content of the message. */
            message: string;
            /** @description Inbound or outbound. */
            direction: components["schemas"]["CallDirection"];
        };
        /** @description `voicemail_received` event data. */
        VoicemailReceivedBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "voicemail_received" for this event.
             * @enum {string}
             */
            EventType: "voicemail_received";
            /** @description Unique identifier of parent call where this message was received. */
            call_id: components["schemas"]["CallIdentifier"];
            parent_call_id: components["schemas"]["CallIdentifier"] | null;
            /** @description Name of call flow used. (Typing not final. Could be null?) */
            call_flow?: string;
            /** @description (Typing not final. Only seen null as an option.) */
            flow_action_title?: string | null;
            /** @description Username who received this voicemail. */
            username: string;
            /** @description E164 number this recording is from. */
            from: string;
            /** @description Name of caller, if present. */
            from_name?: string;
            /** @description E164 number dialed when message was recorded. */
            to: string;
            /** @description Automatic transcription text of the audio recording, if present. */
            transcription: string | null;
            /**
             * Format: url
             * @description Url where the voicemail can be accessed.
             */
            url: string;
            /**
             * Format: url
             * @description Url where the recording can be downloaded from.
             */
            file?: string;
            /**
             * Format: integer
             * @description Recording duration, in seconds.
             */
            duration: number;
        };
        /** @description `attended_transfer` event data. */
        AttendedTransferBody: {
            EventType: components["schemas"]["WebhookEventType"];
        } & {
            /**
             * @description Has the value "attended_transfer" for this event.
             * @enum {string}
             */
            EventType: "attended_transfer";
            /** @description Call ID of the call that transferee is transferred to. */
            transferTarget_call_id: string;
            /** @description Parent Call ID of the call that transferee is transferred to, if any. */
            transferTarget_parent_call_id?: string;
            /** @description The username of the user transferee is being transferred to, if applicable. */
            transferTarget_user?: string;
            /** @description Either extension assigned transferTarget_user, or the E164 phone number being transferred to. */
            transferTarget_extension: string;
            /** @description Call ID of the call that issues the transfer. */
            transferer_call_id: string;
            /** @description Parent Call ID in case transferer_call_id is a child call. */
            transferer_parent_call_id?: string;
            /** @description The username of the transferer. */
            transferer_user: string;
            /** @description The extension assigned to transferer, if any. */
            transferer_extension?: string;
            /** @description Call ID of the call that is being transferred. */
            transferee_call_id: string;
            /** @description If the call being transferred is a child call, this is the ID of the parent call it belongs to. */
            transferee_parent_call_id?: string;
            /** @description The username of the user being transferred, if any. */
            transferee_user?: string;
            /** @description Extension assigned to transferee_user, or E164 phone number. */
            transferee_extension: string;
        };
        /** @description `blind_transfer` event data. */
        BlindTransferBody: {
            EventType: components["schemas"]["WebhookEventType"];
        } & {
            /**
             * @description Has the value "blind_transfer" for this event.
             * @enum {string}
             */
            EventType: "blind_transfer";
            /** @description Call ID of the call that issues the transfer. */
            transferer_call_id: string;
            /** @description Parent Call ID in case this call is a child call. */
            transferer_parent_call_id?: string;
            /** @description The username this call belongs to. */
            transferer_user: string;
            /** @description If user is set, this is that users extension. */
            transferer_extension?: string;
            /** @description Call ID of the call that is being transferred. */
            transferee_call_id: string;
            /** @description If the call being transferred is a child call, this is the ID of the parent call it belongs to. */
            transferee_parent_call_id?: string;
            /** @description The username of the user this call belongs to. */
            transferee_user: string;
            /** @description If user is set, this is that users extension. */
            transferee_extension?: string;
            /** @description The extension transferee is transferred to. */
            transfer_destination: string;
        };
        /** @description `fax_received` event data. */
        FaxReceivedBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "fax_received" for this event.
             * @enum {string}
             */
            EventType: "fax_received";
            /** @description Unique identifier for this fax. */
            fax_id: string;
            /** @description E164 formatted phone number this fax was sent from. */
            from: string;
            /** @description E164 formatted phone number this number was sent to. */
            to: string;
            /**
             * Format: url
             * @description The URL to this fax in the Telzio api.
             */
            api_details_url: string;
            /**
             * Format: url
             * @description The URL this fax can be downloaded in PDF format from.
             */
            api_download_url: string;
        };
        /** @description `call_updated` event data. */
        CallUpdatedBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "call_updated" for this event.
             * @enum {string}
             */
            EventType: "call_updated";
            /** @description A unique identifier for this call. */
            call_id: components["schemas"]["CallIdentifier"];
            /** @description Fields updated or added.
             *
             *     This event will fire when certain properties of a call are added or updated. Any field of a call can be updated throughout the call.
             *
             *     The list below displays an example of two updated properties, but any property of the call details object can be included in this event.
             *      */
            updated_properties: {
                [key: string]: string | undefined;
            };
        };
        /** @description `call_tagged` event data. */
        CallTaggedBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "call_tagged" for this event.
             * @enum {string}
             */
            EventType: "call_tagged";
            /** @description A unique identifier for this call. */
            call_id: components["schemas"]["CallIdentifier"];
            /** @description Id of parent call this call belongs to. */
            parent_call_id?: string;
            /** @description Either a username or E164 number (+ prefixed) */
            from: string;
            /** @description Cnam of the caller, if available. */
            from_cnam?: string;
            /** @description Extension dialed by user for outbound, E164 number dialed for inbound. */
            to: string;
            /** @description Tags assigned to the call */
            tags: string[];
        };
        /** @description `CallFlowEntered` event data. */
        CallFlowEnteredBody: components["schemas"]["WebhookBody"] & {
            /**
             * @description Has the value "call_flow_entered" for this event.
             * @enum {string}
             */
            EventType: "call_flow_entered";
            /** @description A unique identifier for this call. */
            call_id: components["schemas"]["CallIdentifier"];
            call_flow_name: string;
            /** @description The call flow's extension. */
            call_flow_extension: string | null;
        };
    };
    responses: {
        /** @description A response that indicates that the consuming API has accepted and used the event successfully.
         *
         *     The consuming API has 15 seconds to accept the event. If a success http status code has not been returned with these 15 seconds, the event will be discarded and the engine will proceed to the next one.
         *      */
        Success: {
            headers: {
                [name: string]: unknown;
            };
            content?: never;
        };
    };
    parameters: never;
    requestBodies: {
        CallCreated: {
            content: {
                "application/json": components["schemas"]["CallCreatedBody"];
                "application/x-www-form-urlencoded": components["schemas"]["CallCreatedBody"];
            };
        };
        CallEnded: {
            content: {
                "application/json": components["schemas"]["CallEndedBody"];
                "application/x-www-form-urlencoded": components["schemas"]["CallEndedBody"];
            };
        };
        CallHungUp: {
            content: {
                "application/json": components["schemas"]["CallHungUpBody"];
                "application/x-www-form-urlencoded": components["schemas"]["CallHungUpBody"];
            };
        };
        CallStatusChanged: {
            content: {
                "application/json": components["schemas"]["CallStatusChangedBody"];
                "application/x-www-form-urlencoded": components["schemas"]["CallStatusChangedBody"];
            };
        };
        ChildCallConnected: {
            content: {
                "application/json": components["schemas"]["ChildCallConnectedBody"];
                "application/x-www-form-urlencoded": components["schemas"]["ChildCallConnectedBody"];
            };
        };
        ChildCallCreated: {
            content: {
                "application/json": components["schemas"]["ChildCallCreatedBody"];
                "application/x-www-form-urlencoded": components["schemas"]["ChildCallCreatedBody"];
            };
        };
        RecordingReady: {
            content: {
                "application/json": components["schemas"]["RecordingReadyBody"];
                "application/x-www-form-urlencoded": components["schemas"]["RecordingReadyBody"];
            };
        };
        SMSSentReceived: {
            content: {
                "application/json": components["schemas"]["SMSSentReceivedBody"];
                "application/x-www-form-urlencoded": components["schemas"]["SMSSentReceivedBody"];
            };
        };
        VoicemailReceived: {
            content: {
                "application/json": components["schemas"]["VoicemailReceivedBody"];
                "application/x-www-form-urlencoded": components["schemas"]["VoicemailReceivedBody"];
            };
        };
        AttendedTransfer: {
            content: {
                "application/json": components["schemas"]["AttendedTransferBody"];
                "application/x-www-form-urlencoded": components["schemas"]["AttendedTransferBody"];
            };
        };
        BlindTransfer: {
            content: {
                "application/json": components["schemas"]["BlindTransferBody"];
                "application/x-www-form-urlencoded": components["schemas"]["BlindTransferBody"];
            };
        };
        FaxReceived: {
            content: {
                "application/json": components["schemas"]["FaxReceivedBody"];
                "application/x-www-form-urlencoded": components["schemas"]["FaxReceivedBody"];
            };
        };
        CallUpdated: {
            content: {
                "application/json": components["schemas"]["CallUpdatedBody"];
                "application/x-www-form-urlencoded": components["schemas"]["CallUpdatedBody"];
            };
        };
        CallTagged: {
            content: {
                "application/json": components["schemas"]["CallTaggedBody"];
                "application/x-www-form-urlencoded": components["schemas"]["CallTaggedBody"];
            };
        };
        CallFlowEntered: {
            content: {
                "application/json": components["schemas"]["CallFlowEnteredBody"];
                "application/x-www-form-urlencoded": components["schemas"]["CallFlowEnteredBody"];
            };
        };
    };
    headers: {
        /** @description The event type of a webhook. */
        "X-Telzio-Event-Type": components["schemas"]["WebhookEventType"];
    };
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
