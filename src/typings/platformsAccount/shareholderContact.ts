/**
 * Adyen for Platforms: Account API
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.  For more information, refer to our [documentation](https://docs.adyen.com/platforms). ## Authentication To connect to the Account API, you must use basic authentication credentials of your web service user. If you don\'t have one, contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder ```
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {ViasAddress} from './viasAddress';
import {ViasName} from './viasName';
import {ViasPersonalData} from './viasPersonalData';
import {ViasPhoneNumber} from './viasPhoneNumber';

export class ShareholderContact {
    'address'?: ViasAddress;
    /**
    * The e-mail address of the person.
    */
    'email'?: string;
    /**
    * The phone number of the person provided as a single string.  It will be handled as a landline phone. Examples: \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\"
    */
    'fullPhoneNumber'?: string;
    /**
    * Job title of the person. Required when the `shareholderType` is **Controller**.  Example values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.
    */
    'jobTitle'?: string;
    'name'?: ViasName;
    'personalData'?: ViasPersonalData;
    'phoneNumber'?: ViasPhoneNumber;
    /**
    * The unique identifier (UUID) of the shareholder entry. >**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**  >**If, during an Account Holder create request, a UUID is provided, the creation of the Shareholder will fail while the creation of the Account Holder will continue.**  >**If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**  >**If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.** 
    */
    'shareholderCode'?: string;
    /**
    * Your reference for the shareholder entry.
    */
    'shareholderReference'?: string;
    /**
    * Specifies how the person is associated with the account holder.   Possible values:   * **Owner**: Individuals who directly or indirectly own 25% or more of a company.  * **Controller**: Individuals who are members of senior management staff responsible for managing a company or organization.
    */
    'shareholderType'?: ShareholderContact.ShareholderTypeEnum;
    /**
    * The URL of the person\'s website.
    */
    'webAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "ViasAddress"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "fullPhoneNumber",
            "baseName": "fullPhoneNumber",
            "type": "string"
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "ViasName"
        },
        {
            "name": "personalData",
            "baseName": "personalData",
            "type": "ViasPersonalData"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "ViasPhoneNumber"
        },
        {
            "name": "shareholderCode",
            "baseName": "shareholderCode",
            "type": "string"
        },
        {
            "name": "shareholderReference",
            "baseName": "shareholderReference",
            "type": "string"
        },
        {
            "name": "shareholderType",
            "baseName": "shareholderType",
            "type": "ShareholderContact.ShareholderTypeEnum"
        },
        {
            "name": "webAddress",
            "baseName": "webAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ShareholderContact.attributeTypeMap;
    }
}

export namespace ShareholderContact {
    export enum ShareholderTypeEnum {
        Controller = <any> 'Controller',
        Owner = <any> 'Owner',
        Signatory = <any> 'Signatory'
    }
}