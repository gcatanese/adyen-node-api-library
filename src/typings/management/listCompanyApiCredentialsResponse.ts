/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CompanyApiCredential } from './companyApiCredential';
import { PaginationLinks } from './paginationLinks';

export class ListCompanyApiCredentialsResponse {
    '_links'?: PaginationLinks;
    /**
    * The list of API credentials.
    */
    'data'?: Array<CompanyApiCredential>;
    /**
    * Total number of items.
    */
    'itemsTotal': number;
    /**
    * Total number of pages.
    */
    'pagesTotal': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "_links",
            "baseName": "_links",
            "type": "PaginationLinks"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<CompanyApiCredential>"
        },
        {
            "name": "itemsTotal",
            "baseName": "itemsTotal",
            "type": "number"
        },
        {
            "name": "pagesTotal",
            "baseName": "pagesTotal",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ListCompanyApiCredentialsResponse.attributeTypeMap;
    }
}

