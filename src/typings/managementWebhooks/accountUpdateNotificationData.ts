/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountCapabilityData } from './accountCapabilityData';

export class AccountUpdateNotificationData {
    /**
    * Key-value pairs that specify what you can do with the merchant account and its settings. The key is a capability. For example, the **sendToTransferInstrument** is the capability required before you can pay out the funds of a merchant account to a [bank account](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments). The value is an object containing the settings for the capability.
    */
    'capabilities': { [key: string]: AccountCapabilityData; };
    /**
    * The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).
    */
    'legalEntityId'?: string;
    /**
    * The unique identifier of the merchant account.
    */
    'merchantId': string;
    /**
    * The status of the merchant account.  Possible values:  * **PreActive**: The merchant account has been created. Users cannot access the merchant account in the Customer Area. The account cannot process payments. * **Active**: Users can access the merchant account in the Customer Area. If the company account is also **Active**, then payment processing and payouts are enabled. * **InactiveWithModifications**: Users can access the merchant account in the Customer Area. The account cannot process new payments but can still modify payments, for example issue refunds. The account can still receive payouts. * **Inactive**: Users can access the merchant account in the Customer Area. Payment processing and payouts are disabled. * **Closed**: The account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled.
    */
    'status': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "{ [key: string]: AccountCapabilityData; }"
        },
        {
            "name": "legalEntityId",
            "baseName": "legalEntityId",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountUpdateNotificationData.attributeTypeMap;
    }
}
