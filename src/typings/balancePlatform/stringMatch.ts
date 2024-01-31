/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class StringMatch {
    /**
    * The type of string matching operation. Possible values:  **startsWith**, **endsWith**, **isEqualTo**, **contains**,
    */
    'operation'?: StringMatch.OperationEnum;
    /**
    * The string to be matched.
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "StringMatch.OperationEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StringMatch.attributeTypeMap;
    }
}

export namespace StringMatch {
    export enum OperationEnum {
        Contains = 'contains',
        EndsWith = 'endsWith',
        IsEqualTo = 'isEqualTo',
        StartsWith = 'startsWith'
    }
}