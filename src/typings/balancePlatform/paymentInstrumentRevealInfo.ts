/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Expiry } from './expiry';

export class PaymentInstrumentRevealInfo {
    /**
    * The CVC2 value of the card.
    */
    'cvc': string;
    'expiration': Expiry;
    /**
    * The primary account number (PAN) of the card.
    */
    'pan': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cvc",
            "baseName": "cvc",
            "type": "string"
        },
        {
            "name": "expiration",
            "baseName": "expiration",
            "type": "Expiry"
        },
        {
            "name": "pan",
            "baseName": "pan",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentRevealInfo.attributeTypeMap;
    }
}
