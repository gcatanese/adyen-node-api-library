/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RelayedAuthorisationData } from './relayedAuthorisationData';
import { TransferNotificationValidationFact } from './transferNotificationValidationFact';

export class IssuedCard {
    /**
    * The authorisation type. For example, **defaultAuthorisation**, **preAuthorisation**, **finalAuthorisation**
    */
    'authorisationType'?: string;
    /**
    * Indicates the method used for entering the PAN to initiate a transaction.  Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.
    */
    'panEntryMode'?: IssuedCard.PanEntryModeEnum;
    /**
    * Contains information about how the payment was processed. For example, **ecommerce** for online or **pos** for in-person payments.
    */
    'processingType'?: IssuedCard.ProcessingTypeEnum;
    'relayedAuthorisationData'?: RelayedAuthorisationData;
    /**
    * The identifier of the original payment provided by the scheme. The Id could be alphanumeric or numeric depending on the scheme. The schemeTraceID should be referring to an original schemeUniqueTransactionID provided in an earlier payment (not necessarily processed by Adyen). Instances of available schemeTraceId is authAdjustment or recurring payments.
    */
    'schemeTraceId'?: string;
    /**
    * The unique identifier created by the scheme. The ID could be alphanumeric or numeric depending on the scheme.
    */
    'schemeUniqueTransactionId'?: string;
    /**
    * **issuedCard**
    */
    'type'?: IssuedCard.TypeEnum;
    /**
    * The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information.
    */
    'validationFacts'?: Array<TransferNotificationValidationFact>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authorisationType",
            "baseName": "authorisationType",
            "type": "string"
        },
        {
            "name": "panEntryMode",
            "baseName": "panEntryMode",
            "type": "IssuedCard.PanEntryModeEnum"
        },
        {
            "name": "processingType",
            "baseName": "processingType",
            "type": "IssuedCard.ProcessingTypeEnum"
        },
        {
            "name": "relayedAuthorisationData",
            "baseName": "relayedAuthorisationData",
            "type": "RelayedAuthorisationData"
        },
        {
            "name": "schemeTraceId",
            "baseName": "schemeTraceId",
            "type": "string"
        },
        {
            "name": "schemeUniqueTransactionId",
            "baseName": "schemeUniqueTransactionId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IssuedCard.TypeEnum"
        },
        {
            "name": "validationFacts",
            "baseName": "validationFacts",
            "type": "Array<TransferNotificationValidationFact>"
        }    ];

    static getAttributeTypeMap() {
        return IssuedCard.attributeTypeMap;
    }
}

export namespace IssuedCard {
    export enum PanEntryModeEnum {
        Chip = 'chip',
        Cof = 'cof',
        Contactless = 'contactless',
        Ecommerce = 'ecommerce',
        Magstripe = 'magstripe',
        Manual = 'manual',
        Token = 'token'
    }
    export enum ProcessingTypeEnum {
        AtmWithdraw = 'atmWithdraw',
        BalanceInquiry = 'balanceInquiry',
        Ecommerce = 'ecommerce',
        Moto = 'moto',
        Pos = 'pos',
        PurchaseWithCashback = 'purchaseWithCashback',
        Recurring = 'recurring',
        Token = 'token'
    }
    export enum TypeEnum {
        IssuedCard = 'issuedCard'
    }
}