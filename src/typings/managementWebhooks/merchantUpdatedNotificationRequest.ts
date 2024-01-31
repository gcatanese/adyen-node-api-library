/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountUpdateNotificationData } from './accountUpdateNotificationData';

export class MerchantUpdatedNotificationRequest {
    /**
    * Timestamp for when the webhook was created.
    */
    'createdAt': Date;
    'data': AccountUpdateNotificationData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    'environment': string;
    /**
    * Type of notification.
    */
    'type': MerchantUpdatedNotificationRequest.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "AccountUpdateNotificationData"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "MerchantUpdatedNotificationRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return MerchantUpdatedNotificationRequest.attributeTypeMap;
    }
}

export namespace MerchantUpdatedNotificationRequest {
    export enum TypeEnum {
        MerchantUpdated = 'merchant.updated'
    }
}