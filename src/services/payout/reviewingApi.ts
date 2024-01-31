/*
 * The version of the OpenAPI document: v68
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
    ModifyRequest,
    ModifyResponse,
    ObjectSerializer
} from "../../typings/payout/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class ReviewingApi extends Service {

    private readonly API_BASEPATH: string = "https://pal-test.adyen.com/pal/servlet/Payout/v68";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Confirm a payout
    * @param modifyRequest {@link ModifyRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ModifyResponse }
    */
    public async confirmThirdParty(modifyRequest: ModifyRequest, requestOptions?: IRequest.Options): Promise<ModifyResponse> {
        const endpoint = `${this.baseUrl}/confirmThirdParty`;
        const resource = new Resource(this, endpoint);
        const request: ModifyRequest = ObjectSerializer.serialize(modifyRequest, "ModifyRequest");
        const response = await getJsonResponse<ModifyRequest, ModifyResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ModifyResponse");
    }

    /**
    * @summary Cancel a payout
    * @param modifyRequest {@link ModifyRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ModifyResponse }
    */
    public async declineThirdParty(modifyRequest: ModifyRequest, requestOptions?: IRequest.Options): Promise<ModifyResponse> {
        const endpoint = `${this.baseUrl}/declineThirdParty`;
        const resource = new Resource(this, endpoint);
        const request: ModifyRequest = ObjectSerializer.serialize(modifyRequest, "ModifyRequest");
        const response = await getJsonResponse<ModifyRequest, ModifyResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ModifyResponse");
    }
}