/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AddressRequirement } from './addressRequirement';
import { AmountMinMaxRequirement } from './amountMinMaxRequirement';
import { BankAccountIdentificationTypeRequirement } from './bankAccountIdentificationTypeRequirement';
import { PaymentInstrumentRequirement } from './paymentInstrumentRequirement';

export class TransferRoute {
    /**
    *  The type of transfer.   Possible values:    - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account. 
    */
    'category'?: TransferRoute.CategoryEnum;
    /**
    * The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or **NL**.
    */
    'country'?: string;
    /**
    * The three-character ISO currency code of transfer. For example, **USD** or **EUR**.
    */
    'currency'?: string;
    /**
    * The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Possible values:  * **regular**: For normal, low-value transactions.  * **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.  * **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.  * **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).  * **crossBorder**: High-value transfer to a recipient in a different country.  * **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).
    */
    'priority'?: TransferRoute.PriorityEnum;
    /**
    * A set of rules defined by clearing houses and banking partners. Your transfer request must adhere to these rules to ensure successful initiation of transfer. Based on the priority, one or more requirements may be returned. Each requirement is defined with a `type` and `description`.
    */
    'requirements'?: AddressRequirement | AmountMinMaxRequirement | BankAccountIdentificationTypeRequirement | PaymentInstrumentRequirement;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "category",
            "baseName": "category",
            "type": "TransferRoute.CategoryEnum"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "TransferRoute.PriorityEnum"
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "AddressRequirement | AmountMinMaxRequirement | BankAccountIdentificationTypeRequirement | PaymentInstrumentRequirement"
        }    ];

    static getAttributeTypeMap() {
        return TransferRoute.attributeTypeMap;
    }
}

export namespace TransferRoute {
    export enum CategoryEnum {
        Bank = 'bank',
        Card = 'card',
        Grants = 'grants',
        Internal = 'internal',
        IssuedCard = 'issuedCard',
        Migration = 'migration',
        PlatformPayment = 'platformPayment',
        TopUp = 'topUp',
        Upgrade = 'upgrade'
    }
    export enum PriorityEnum {
        CrossBorder = 'crossBorder',
        Fast = 'fast',
        Instant = 'instant',
        Internal = 'internal',
        Regular = 'regular',
        Wire = 'wire'
    }
}
