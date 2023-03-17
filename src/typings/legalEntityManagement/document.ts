/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Attachment } from './attachment';
import { OwnerEntity } from './ownerEntity';

export class Document {
    'attachment'?: Attachment;
    /**
    * Array that contains the document. The array supports multiple attachments for uploading different sides or pages of a document.
    */
    'attachments': Array<Attachment>;
    /**
    * The creation date of the document.
    */
    'creationDate'?: Date;
    /**
    * Your description for the document.
    */
    'description': string;
    /**
    * The expiry date of the document, in YYYY-MM-DD format.
    */
    'expiryDate'?: string;
    /**
    * The filename of the document.
    */
    'fileName'?: string;
    /**
    * The unique identifier of the document.
    */
    'id': string;
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.
    */
    'issuerCountry'?: string;
    /**
    * The state or province where the document was issued (AU only).
    */
    'issuerState'?: string;
    /**
    * The modification date of the document.
    */
    'modificationDate'?: Date;
    /**
    * The number in the document.
    */
    'number'?: string;
    'owner': OwnerEntity;
    /**
    * Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.  When providing ID numbers: * For **individual**, the `type` values can be **driversLicense**, **identityCard**, **nationalIdNumber**, or **passport**.  When uploading photo IDs: * For **individual**, the `type` values can be **identityCard**, **driversLicense**, or **passport**.  When uploading other documents: * For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **vatDocument**, **proofOfOrganizationTaxInfo**, **proofOfOwnership**, or **proofOfIndustry**.   * For **individual**, the `type` values can be **identityCard**, **driversLicense**, **passport**, **proofOfNationalIdNumber**, **proofOfResidency**, **proofOfIndustry**, or **proofOfIndividualTaxId**.  * For **soleProprietorship**, the `type` values can be **constitutionalDocument**, **proofOfAddress**, or **proofOfIndustry**.  * Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
    */
    'type': Document.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "Attachment"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<Attachment>"
        },
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "Date"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "string"
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "issuerCountry",
            "baseName": "issuerCountry",
            "type": "string"
        },
        {
            "name": "issuerState",
            "baseName": "issuerState",
            "type": "string"
        },
        {
            "name": "modificationDate",
            "baseName": "modificationDate",
            "type": "Date"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "OwnerEntity"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Document.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Document.attributeTypeMap;
    }
}

export namespace Document {
    export enum TypeEnum {
        BankStatement = 'bankStatement',
        DriversLicense = 'driversLicense',
        IdentityCard = 'identityCard',
        NationalIdNumber = 'nationalIdNumber',
        Passport = 'passport',
        ProofOfAddress = 'proofOfAddress',
        ProofOfNationalIdNumber = 'proofOfNationalIdNumber',
        ProofOfResidency = 'proofOfResidency',
        RegistrationDocument = 'registrationDocument',
        VatDocument = 'vatDocument',
        ProofOfOrganizationTaxInfo = 'proofOfOrganizationTaxInfo',
        ProofOfIndustry = 'proofOfIndustry',
        ConstitutionalDocument = 'constitutionalDocument'
    }
}