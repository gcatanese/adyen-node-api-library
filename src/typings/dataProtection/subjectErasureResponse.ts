/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SubjectErasureResponse {
    /**
    * The result of this operation.
    */
    'result'?: SubjectErasureResponse.ResultEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "result",
            "baseName": "result",
            "type": "SubjectErasureResponse.ResultEnum"
        }    ];

    static getAttributeTypeMap() {
        return SubjectErasureResponse.attributeTypeMap;
    }
}

export namespace SubjectErasureResponse {
    export enum ResultEnum {
        ActiveRecurringTokenExists = 'ACTIVE_RECURRING_TOKEN_EXISTS',
        AlreadyProcessed = 'ALREADY_PROCESSED',
        PaymentNotFound = 'PAYMENT_NOT_FOUND',
        Success = 'SUCCESS'
    }
}