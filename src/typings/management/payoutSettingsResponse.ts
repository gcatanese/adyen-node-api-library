/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { PayoutSettings } from './payoutSettings';

export class PayoutSettingsResponse {
    /**
    * The list of payout accounts.
    */
    'data'?: Array<PayoutSettings>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<PayoutSettings>"
        }    ];

    static getAttributeTypeMap() {
        return PayoutSettingsResponse.attributeTypeMap;
    }
}
