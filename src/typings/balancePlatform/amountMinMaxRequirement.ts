/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AmountMinMaxRequirement {
    /**
    * Specifies the eligible amounts for a particular route.
    */
    'description'?: string;
    /**
    * Maximum amount.
    */
    'max'?: number;
    /**
    * Minimum amount.
    */
    'min'?: number;
    /**
    * **amountMinMaxRequirement**
    */
    'type': AmountMinMaxRequirement.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "number"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AmountMinMaxRequirement.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AmountMinMaxRequirement.attributeTypeMap;
    }
}

export namespace AmountMinMaxRequirement {
    export enum TypeEnum {
        AmountMinMaxRequirement = 'amountMinMaxRequirement'
    }
}