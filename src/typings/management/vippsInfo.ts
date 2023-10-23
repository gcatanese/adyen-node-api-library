/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class VippsInfo {
    /**
    * Vipps logo. Format: Base64-encoded string.
    */
    'logo': string;
    /**
    * Vipps subscription cancel url (required in case of [recurring payments](https://docs.adyen.com/online-payments/tokenization))
    */
    'subscriptionCancelUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string"
        },
        {
            "name": "subscriptionCancelUrl",
            "baseName": "subscriptionCancelUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return VippsInfo.attributeTypeMap;
    }
}

