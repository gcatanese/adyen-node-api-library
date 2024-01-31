/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { 
    AcceptTermsOfServiceRequest,
    AcceptTermsOfServiceResponse,
    CalculateTermsOfServiceStatusResponse,
    GetTermsOfServiceAcceptanceInfosResponse,
    GetTermsOfServiceDocumentRequest,
    GetTermsOfServiceDocumentResponse,
    ObjectSerializer
} from "../../typings/legalEntityManagement/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class TermsOfServiceApi extends Service {

    private readonly API_BASEPATH: string = "https://kyc-test.adyen.com/lem/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Accept Terms of Service
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner.
    * @param termsofservicedocumentid {@link string } The unique identifier of the Terms of Service document.
    * @param acceptTermsOfServiceRequest {@link AcceptTermsOfServiceRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AcceptTermsOfServiceResponse }
    */
    public async acceptTermsOfService(id: string, termsofservicedocumentid: string, acceptTermsOfServiceRequest: AcceptTermsOfServiceRequest, requestOptions?: IRequest.Options): Promise<AcceptTermsOfServiceResponse> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/termsOfService/{termsofservicedocumentid}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)))
            .replace("{" + "termsofservicedocumentid" + "}", encodeURIComponent(String(termsofservicedocumentid)));
        const resource = new Resource(this, endpoint);
        const request: AcceptTermsOfServiceRequest = ObjectSerializer.serialize(acceptTermsOfServiceRequest, "AcceptTermsOfServiceRequest");
        const response = await getJsonResponse<AcceptTermsOfServiceRequest, AcceptTermsOfServiceResponse>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "AcceptTermsOfServiceResponse");
    }

    /**
    * @summary Get Terms of Service document
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner.
    * @param getTermsOfServiceDocumentRequest {@link GetTermsOfServiceDocumentRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetTermsOfServiceDocumentResponse }
    */
    public async getTermsOfServiceDocument(id: string, getTermsOfServiceDocumentRequest: GetTermsOfServiceDocumentRequest, requestOptions?: IRequest.Options): Promise<GetTermsOfServiceDocumentResponse> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/termsOfService`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const request: GetTermsOfServiceDocumentRequest = ObjectSerializer.serialize(getTermsOfServiceDocumentRequest, "GetTermsOfServiceDocumentRequest");
        const response = await getJsonResponse<GetTermsOfServiceDocumentRequest, GetTermsOfServiceDocumentResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GetTermsOfServiceDocumentResponse");
    }

    /**
    * @summary Get Terms of Service information for a legal entity
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetTermsOfServiceAcceptanceInfosResponse }
    */
    public async getTermsOfServiceInformationForLegalEntity(id: string, requestOptions?: IRequest.Options): Promise<GetTermsOfServiceAcceptanceInfosResponse> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/termsOfServiceAcceptanceInfos`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, GetTermsOfServiceAcceptanceInfosResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "GetTermsOfServiceAcceptanceInfosResponse");
    }

    /**
    * @summary Get Terms of Service status
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CalculateTermsOfServiceStatusResponse }
    */
    public async getTermsOfServiceStatus(id: string, requestOptions?: IRequest.Options): Promise<CalculateTermsOfServiceStatusResponse> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/termsOfServiceStatus`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, CalculateTermsOfServiceStatusResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "CalculateTermsOfServiceStatusResponse");
    }
}