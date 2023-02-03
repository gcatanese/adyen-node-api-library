/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AcceptTermsOfServiceResponse {
    /**
    * The unique identifier of the user that accepted the Terms of Service.
    */
    'acceptedBy'?: string;
    /**
    * The unique identifier of the Terms of Service acceptance.
    */
    'id'?: string;
    /**
    * The IP address of the user that accepted the Terms of Service.
    */
    'ipAddress'?: string;
    /**
    * The language used for the Terms of Service document, specified by the two letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. For example, **nl** for Dutch.
    */
    'language'?: string;
    /**
    * The unique identifier of the Terms of Service document.
    */
    'termsOfServiceDocumentId'?: string;
    /**
    * The type of Terms of Service.
    */
    'type'?: AcceptTermsOfServiceResponse.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acceptedBy",
            "baseName": "acceptedBy",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "termsOfServiceDocumentId",
            "baseName": "termsOfServiceDocumentId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AcceptTermsOfServiceResponse.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AcceptTermsOfServiceResponse.attributeTypeMap;
    }
}

export namespace AcceptTermsOfServiceResponse {
    export enum TypeEnum {
        AdyenAccount = <any> 'adyenAccount',
        AdyenCapital = <any> 'adyenCapital',
        AdyenForPlatformsAdvanced = <any> 'adyenForPlatformsAdvanced',
        AdyenForPlatformsManage = <any> 'adyenForPlatformsManage',
        AdyenIssuing = <any> 'adyenIssuing'
    }
}
