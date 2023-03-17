/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class EntryModesRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    /**
    * List of point-of-sale entry modes.  Possible values: **barcode**, **chip**, **cof**, **contactless**, **magstripe**, **manual**, **ocr**, **server**.  
    */
    'value'?: Array<EntryModesRestriction.ValueEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<EntryModesRestriction.ValueEnum>"
        }    ];

    static getAttributeTypeMap() {
        return EntryModesRestriction.attributeTypeMap;
    }
}

export namespace EntryModesRestriction {
    export enum ValueEnum {
        Barcode = 'barcode',
        Chip = 'chip',
        Cof = 'cof',
        Contactless = 'contactless',
        Magstripe = 'magstripe',
        Manual = 'manual',
        Ocr = 'ocr',
        Server = 'server',
        Unknown = 'unknown'
    }
}