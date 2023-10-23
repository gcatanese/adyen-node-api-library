/*
 * The version of the OpenAPI document: v54
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DSPublicKeyDetail {
    /**
    * Card brand.
    */
    'brand'?: string;
    /**
    * Directory Server (DS) identifier.
    */
    'directoryServerId'?: string;
    /**
    * The version of the mobile 3D Secure 2 SDK. For the possible values, refer to the versions in [Adyen 3DS2 Android](https://github.com/Adyen/adyen-3ds2-android/releases) and [Adyen 3DS2 iOS](https://github.com/Adyen/adyen-3ds2-ios/releases).
    */
    'fromSDKVersion'?: string;
    /**
    * Public key. The 3D Secure 2 SDK encrypts the device information by using the DS public key.
    */
    'publicKey'?: string;
    /**
    * Directory Server root certificates. The 3D Secure 2 SDK verifies the ACS signed content using the rootCertificates.
    */
    'rootCertificates'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "directoryServerId",
            "baseName": "directoryServerId",
            "type": "string"
        },
        {
            "name": "fromSDKVersion",
            "baseName": "fromSDKVersion",
            "type": "string"
        },
        {
            "name": "publicKey",
            "baseName": "publicKey",
            "type": "string"
        },
        {
            "name": "rootCertificates",
            "baseName": "rootCertificates",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DSPublicKeyDetail.attributeTypeMap;
    }
}

