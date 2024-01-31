/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class RevealPinRequest {
    /**
    * Symmetric session key encrypted under the public key.
    */
    'encryptedKey': string;
    /**
    * The unique identifier of the payment instrument.
    */
    'paymentInstrumentId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "encryptedKey",
            "baseName": "encryptedKey",
            "type": "string"
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "paymentInstrumentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RevealPinRequest.attributeTypeMap;
    }
}
