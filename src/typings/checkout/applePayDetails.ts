/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ApplePayDetails {
    /**
    * The stringified and base64 encoded `paymentData` you retrieved from the Apple framework.
    */
    'applePayToken': string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: ApplePayDetails.FundingSourceEnum;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **applepay**
    */
    'type'?: ApplePayDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applePayToken",
            "baseName": "applePayToken",
            "type": "string"
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "ApplePayDetails.FundingSourceEnum"
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string"
        },
        {
            "name": "storedPaymentMethodId",
            "baseName": "storedPaymentMethodId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ApplePayDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ApplePayDetails.attributeTypeMap;
    }
}

export namespace ApplePayDetails {
    export enum FundingSourceEnum {
        Credit = 'credit',
        Debit = 'debit'
    }
    export enum TypeEnum {
        Applepay = 'applepay'
    }
}
