/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ErrorFieldType } from './errorFieldType';

export class DebitAccountHolderResponse {
    /**
    * The code of the account holder.
    */
    'accountHolderCode'?: string;
    /**
    * The Adyen-generated unique alphanumeric identifier (UUID) of the account holder\'s bank account.
    */
    'bankAccountUUID'?: string;
    /**
    * Contains field validation errors that would prevent requests from being processed.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * List of the `reference` values from the `split` array in the request.
    */
    'merchantReferences'?: Array<string>;
    /**
    * The reference of a request. Can be used to uniquely identify the request.
    */
    'pspReference'?: string;
    /**
    * The result code.
    */
    'resultCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "bankAccountUUID",
            "baseName": "bankAccountUUID",
            "type": "string"
        },
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<ErrorFieldType>"
        },
        {
            "name": "merchantReferences",
            "baseName": "merchantReferences",
            "type": "Array<string>"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DebitAccountHolderResponse.attributeTypeMap;
    }
}
