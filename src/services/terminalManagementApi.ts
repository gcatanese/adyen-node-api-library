/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { AssignTerminalsRequest } from "../typings/terminalManagement/models";
import { AssignTerminalsResponse } from "../typings/terminalManagement/models";
import { FindTerminalRequest } from "../typings/terminalManagement/models";
import { FindTerminalResponse } from "../typings/terminalManagement/models";
import { GetStoresUnderAccountRequest } from "../typings/terminalManagement/models";
import { GetStoresUnderAccountResponse } from "../typings/terminalManagement/models";
import { GetTerminalDetailsRequest } from "../typings/terminalManagement/models";
import { GetTerminalDetailsResponse } from "../typings/terminalManagement/models";
import { GetTerminalsUnderAccountRequest } from "../typings/terminalManagement/models";
import { GetTerminalsUnderAccountResponse } from "../typings/terminalManagement/models";
import { IRequest } from "../typings/requestOptions";
import Resource from "./resource";
import { ObjectSerializer } from "../typings/terminalManagement/models";

export class TerminalManagementAPI extends Service {
    
    private readonly API_BASEPATH: string = "https://postfmapi-test.adyen.com/postfmapi/terminal/v1";
    private baseUrl: string;

    public constructor(client: Client) {
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Assign terminals
    * @param assignTerminalsRequest {@link AssignTerminalsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AssignTerminalsResponse }
    */
    public async assignTerminals(assignTerminalsRequest: AssignTerminalsRequest, requestOptions?: IRequest.Options): Promise<AssignTerminalsResponse> {
        const endpoint = `${this.baseUrl}/assignTerminals`;
        const resource = new Resource(this, endpoint);
        const request: AssignTerminalsRequest = ObjectSerializer.serialize(assignTerminalsRequest, "AssignTerminalsRequest");
        const response = await getJsonResponse<AssignTerminalsRequest, AssignTerminalsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "AssignTerminalsResponse");
    }

    /**
    * @summary Get the account or store of a terminal
    * @param findTerminalRequest {@link FindTerminalRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link FindTerminalResponse }
    */
    public async findTerminal(findTerminalRequest: FindTerminalRequest, requestOptions?: IRequest.Options): Promise<FindTerminalResponse> {
        const endpoint = `${this.baseUrl}/findTerminal`;
        const resource = new Resource(this, endpoint);
        const request: FindTerminalRequest = ObjectSerializer.serialize(findTerminalRequest, "FindTerminalRequest");
        const response = await getJsonResponse<FindTerminalRequest, FindTerminalResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "FindTerminalResponse");
    }

    /**
    * @summary Get the stores of an account
    * @param getStoresUnderAccountRequest {@link GetStoresUnderAccountRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetStoresUnderAccountResponse }
    */
    public async getStoresUnderAccount(getStoresUnderAccountRequest: GetStoresUnderAccountRequest, requestOptions?: IRequest.Options): Promise<GetStoresUnderAccountResponse> {
        const endpoint = `${this.baseUrl}/getStoresUnderAccount`;
        const resource = new Resource(this, endpoint);
        const request: GetStoresUnderAccountRequest = ObjectSerializer.serialize(getStoresUnderAccountRequest, "GetStoresUnderAccountRequest");
        const response = await getJsonResponse<GetStoresUnderAccountRequest, GetStoresUnderAccountResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GetStoresUnderAccountResponse");
    }

    /**
    * @summary Get the details of a terminal
    * @param getTerminalDetailsRequest {@link GetTerminalDetailsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetTerminalDetailsResponse }
    */
    public async getTerminalDetails(getTerminalDetailsRequest: GetTerminalDetailsRequest, requestOptions?: IRequest.Options): Promise<GetTerminalDetailsResponse> {
        const endpoint = `${this.baseUrl}/getTerminalDetails`;
        const resource = new Resource(this, endpoint);
        const request: GetTerminalDetailsRequest = ObjectSerializer.serialize(getTerminalDetailsRequest, "GetTerminalDetailsRequest");
        const response = await getJsonResponse<GetTerminalDetailsRequest, GetTerminalDetailsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GetTerminalDetailsResponse");
    }

    /**
    * @summary Get the list of terminals
    * @param getTerminalsUnderAccountRequest {@link GetTerminalsUnderAccountRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetTerminalsUnderAccountResponse }
    */
    public async getTerminalsUnderAccount(getTerminalsUnderAccountRequest: GetTerminalsUnderAccountRequest, requestOptions?: IRequest.Options): Promise<GetTerminalsUnderAccountResponse> {
        const endpoint = `${this.baseUrl}/getTerminalsUnderAccount`;
        const resource = new Resource(this, endpoint);
        const request: GetTerminalsUnderAccountRequest = ObjectSerializer.serialize(getTerminalsUnderAccountRequest, "GetTerminalsUnderAccountRequest");
        const response = await getJsonResponse<GetTerminalsUnderAccountRequest, GetTerminalsUnderAccountResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GetTerminalsUnderAccountResponse");
    }
}

export default TerminalManagementAPI;