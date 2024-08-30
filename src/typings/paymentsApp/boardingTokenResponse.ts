/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BoardingTokenResponse {
    /**
    * The boarding token that allows the Payments App to board.
    */
    'boardingToken': string;
    /**
    * The unique identifier of the Payments App instance.
    */
    'installationId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "boardingToken",
            "baseName": "boardingToken",
            "type": "string"
        },
        {
            "name": "installationId",
            "baseName": "installationId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BoardingTokenResponse.attributeTypeMap;
    }
}
