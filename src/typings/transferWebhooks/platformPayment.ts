/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PlatformPayment {
    /**
    * The capture\'s merchant reference included in the transfer.
    */
    'modificationMerchantReference'?: string;
    /**
    * The capture reference included in the transfer.
    */
    'modificationPspReference'?: string;
    /**
    * The payment\'s merchant reference included in the transfer.
    */
    'paymentMerchantReference'?: string;
    /**
    * The type of the related split.
    */
    'platformPaymentType'?: PlatformPayment.PlatformPaymentTypeEnum;
    /**
    * The payment reference included in the transfer.
    */
    'pspPaymentReference'?: string;
    /**
    * **platformPayment**
    */
    'type'?: PlatformPayment.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "modificationMerchantReference",
            "baseName": "modificationMerchantReference",
            "type": "string"
        },
        {
            "name": "modificationPspReference",
            "baseName": "modificationPspReference",
            "type": "string"
        },
        {
            "name": "paymentMerchantReference",
            "baseName": "paymentMerchantReference",
            "type": "string"
        },
        {
            "name": "platformPaymentType",
            "baseName": "platformPaymentType",
            "type": "PlatformPayment.PlatformPaymentTypeEnum"
        },
        {
            "name": "pspPaymentReference",
            "baseName": "pspPaymentReference",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PlatformPayment.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PlatformPayment.attributeTypeMap;
    }
}

export namespace PlatformPayment {
    export enum PlatformPaymentTypeEnum {
        AcquiringFees = 'AcquiringFees',
        AdyenCommission = 'AdyenCommission',
        AdyenFees = 'AdyenFees',
        AdyenMarkup = 'AdyenMarkup',
        BalanceAccount = 'BalanceAccount',
        Commission = 'Commission',
        Default = 'Default',
        Interchange = 'Interchange',
        PaymentFee = 'PaymentFee',
        Remainder = 'Remainder',
        SchemeFee = 'SchemeFee',
        TopUp = 'TopUp',
        Vat = 'VAT'
    }
    export enum TypeEnum {
        PlatformPayment = 'platformPayment'
    }
}
