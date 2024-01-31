/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BankIdentification {
    'country'?: string;
    'identification'?: string;
    'identificationType'?: BankIdentification.IdentificationTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "identification",
            "baseName": "identification",
            "type": "string"
        },
        {
            "name": "identificationType",
            "baseName": "identificationType",
            "type": "BankIdentification.IdentificationTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BankIdentification.attributeTypeMap;
    }
}

export namespace BankIdentification {
    export enum IdentificationTypeEnum {
        Iban = 'iban',
        RoutingNumber = 'routingNumber'
    }
}