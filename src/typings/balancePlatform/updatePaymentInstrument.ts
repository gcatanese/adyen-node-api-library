/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Card } from './card';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { USLocalAccountIdentification } from './uSLocalAccountIdentification';

export class UpdatePaymentInstrument {
    /**
    * The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.
    */
    'balanceAccountId': string;
    /**
    * Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.
    */
    'bankAccount'?: IbanAccountIdentification | USLocalAccountIdentification;
    'card'?: Card;
    /**
    * Your description for the payment instrument, maximum 300 characters.
    */
    'description'?: string;
    /**
    * The unique identifier of the payment instrument.
    */
    'id': string;
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.
    */
    'issuingCountryCode': string;
    /**
    * The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.
    */
    'paymentInstrumentGroupId'?: string;
    /**
    * Your reference for the payment instrument, maximum 150 characters.
    */
    'reference'?: string;
    /**
    * The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.  Possible values:    * **active**:  The payment instrument is active and can be used to make payments.    * **inactive**: The payment instrument is inactive and cannot be used to make payments.    * **suspended**: The payment instrument is suspended, either because it was stolen or lost.    * **closed**: The payment instrument is permanently closed. This action cannot be undone.   
    */
    'status'?: UpdatePaymentInstrument.StatusEnum;
    /**
    * Comment for the status of the payment instrument.  Required if `statusReason` is **other**.
    */
    'statusComment'?: string;
    /**
    * The reason for the status of the payment instrument.  Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**. If the reason is **other**, you must also send the `statusComment` parameter describing the status change.
    */
    'statusReason'?: UpdatePaymentInstrument.StatusReasonEnum;
    /**
    * Type of payment instrument.  Possible value: **card**, **bankAccount**. 
    */
    'type': UpdatePaymentInstrument.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "balanceAccountId",
            "baseName": "balanceAccountId",
            "type": "string"
        },
        {
            "name": "bankAccount",
            "baseName": "bankAccount",
            "type": "IbanAccountIdentification | USLocalAccountIdentification"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "issuingCountryCode",
            "baseName": "issuingCountryCode",
            "type": "string"
        },
        {
            "name": "paymentInstrumentGroupId",
            "baseName": "paymentInstrumentGroupId",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdatePaymentInstrument.StatusEnum"
        },
        {
            "name": "statusComment",
            "baseName": "statusComment",
            "type": "string"
        },
        {
            "name": "statusReason",
            "baseName": "statusReason",
            "type": "UpdatePaymentInstrument.StatusReasonEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UpdatePaymentInstrument.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePaymentInstrument.attributeTypeMap;
    }
}

export namespace UpdatePaymentInstrument {
    export enum StatusEnum {
        Active = 'active',
        Closed = 'closed',
        Inactive = 'inactive',
        Suspended = 'suspended'
    }
    export enum StatusReasonEnum {
        AccountClosure = 'accountClosure',
        Damaged = 'damaged',
        EndOfLife = 'endOfLife',
        Expired = 'expired',
        Lost = 'lost',
        Other = 'other',
        Stolen = 'stolen',
        SuspectedFraud = 'suspectedFraud',
        TransactionRule = 'transactionRule'
    }
    export enum TypeEnum {
        BankAccount = 'bankAccount',
        Card = 'card'
    }
}