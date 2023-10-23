/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CapabilitySettings } from './capabilitySettings';
import { SupportingEntityCapability } from './supportingEntityCapability';

export class LegalEntityCapability {
    /**
    * Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful.
    */
    'allowed'?: boolean;
    /**
    * The capability level that is allowed for the legal entity.  Possible values: **notApplicable**, **low**, **medium**, **high**.
    */
    'allowedLevel'?: LegalEntityCapability.AllowedLevelEnum;
    'allowedSettings'?: CapabilitySettings;
    /**
    * Indicates whether the capability is requested. To check whether the legal entity is permitted to use the capability, refer to the `allowed` field.
    */
    'requested'?: boolean;
    /**
    * The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.  Possible values: **notApplicable**, **low**, **medium**, **high**.
    */
    'requestedLevel'?: LegalEntityCapability.RequestedLevelEnum;
    'requestedSettings'?: CapabilitySettings;
    /**
    * The capability status of transfer instruments associated with the legal entity.
    */
    'transferInstruments'?: Array<SupportingEntityCapability>;
    /**
    * The status of the verification checks for the capability.  Possible values:  * **pending**: Adyen is running the verification.  * **invalid**: The verification failed. Check if the `errors` array contains more information.  * **valid**: The verification has been successfully completed.  * **rejected**: Adyen has verified the information, but found reasons to not allow the capability. 
    */
    'verificationStatus'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowed",
            "baseName": "allowed",
            "type": "boolean"
        },
        {
            "name": "allowedLevel",
            "baseName": "allowedLevel",
            "type": "LegalEntityCapability.AllowedLevelEnum"
        },
        {
            "name": "allowedSettings",
            "baseName": "allowedSettings",
            "type": "CapabilitySettings"
        },
        {
            "name": "requested",
            "baseName": "requested",
            "type": "boolean"
        },
        {
            "name": "requestedLevel",
            "baseName": "requestedLevel",
            "type": "LegalEntityCapability.RequestedLevelEnum"
        },
        {
            "name": "requestedSettings",
            "baseName": "requestedSettings",
            "type": "CapabilitySettings"
        },
        {
            "name": "transferInstruments",
            "baseName": "transferInstruments",
            "type": "Array<SupportingEntityCapability>"
        },
        {
            "name": "verificationStatus",
            "baseName": "verificationStatus",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LegalEntityCapability.attributeTypeMap;
    }
}

export namespace LegalEntityCapability {
    export enum AllowedLevelEnum {
        High = 'high',
        Low = 'low',
        Medium = 'medium',
        NotApplicable = 'notApplicable'
    }
    export enum RequestedLevelEnum {
        High = 'high',
        Low = 'low',
        Medium = 'medium',
        NotApplicable = 'notApplicable'
    }
}
