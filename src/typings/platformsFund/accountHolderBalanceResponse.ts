/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountDetailBalance } from './accountDetailBalance';
import { DetailBalance } from './detailBalance';
import { ErrorFieldType } from './errorFieldType';

export class AccountHolderBalanceResponse {
    /**
    * A list of each account and their balances.
    */
    'balancePerAccount'?: Array<AccountDetailBalance>;
    /**
    * Contains field validation errors that would prevent requests from being processed.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The reference of a request. Can be used to uniquely identify the request.
    */
    'pspReference'?: string;
    /**
    * The result code.
    */
    'resultCode'?: string;
    'totalBalance'?: DetailBalance;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "balancePerAccount",
            "baseName": "balancePerAccount",
            "type": "Array<AccountDetailBalance>"
        },
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<ErrorFieldType>"
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
        },
        {
            "name": "totalBalance",
            "baseName": "totalBalance",
            "type": "DetailBalance"
        }    ];

    static getAttributeTypeMap() {
        return AccountHolderBalanceResponse.attributeTypeMap;
    }
}
