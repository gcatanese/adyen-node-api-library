/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';
import { BirthData } from './birthData';
import { IdentificationData } from './identificationData';
import { Name } from './name';
import { PhoneNumber } from './phoneNumber';
import { TaxInformation } from './taxInformation';
import { WebData } from './webData';

export class Individual {
    'birthData'?: BirthData;
    /**
    * The email address of the legal entity.
    */
    'email'?: string;
    'identificationData'?: IdentificationData;
    'name': Name;
    /**
    * The individual\'s nationality.
    */
    'nationality'?: string;
    'phone'?: PhoneNumber;
    'residentialAddress': Address;
    /**
    * The tax information of the individual.
    */
    'taxInformation'?: Array<TaxInformation>;
    'webData'?: WebData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "birthData",
            "baseName": "birthData",
            "type": "BirthData"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "identificationData",
            "baseName": "identificationData",
            "type": "IdentificationData"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "Name"
        },
        {
            "name": "nationality",
            "baseName": "nationality",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "PhoneNumber"
        },
        {
            "name": "residentialAddress",
            "baseName": "residentialAddress",
            "type": "Address"
        },
        {
            "name": "taxInformation",
            "baseName": "taxInformation",
            "type": "Array<TaxInformation>"
        },
        {
            "name": "webData",
            "baseName": "webData",
            "type": "WebData"
        }    ];

    static getAttributeTypeMap() {
        return Individual.attributeTypeMap;
    }
}
