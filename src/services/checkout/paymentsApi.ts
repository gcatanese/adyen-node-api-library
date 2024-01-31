/*
 * The version of the OpenAPI document: v71
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
    CardDetailsRequest,
    CardDetailsResponse,
    CreateCheckoutSessionRequest,
    CreateCheckoutSessionResponse,
    PaymentDetailsRequest,
    PaymentDetailsResponse,
    PaymentMethodsRequest,
    PaymentMethodsResponse,
    PaymentRequest,
    PaymentResponse,
    SessionResultResponse,
    ObjectSerializer
} from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class PaymentsApi extends Service {

    private readonly API_BASEPATH: string = "https://checkout-test.adyen.com/v71";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get the list of brands on the card
    * @param cardDetailsRequest {@link CardDetailsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CardDetailsResponse }
    */
    public async cardDetails(cardDetailsRequest: CardDetailsRequest, requestOptions?: IRequest.Options): Promise<CardDetailsResponse> {
        const endpoint = `${this.baseUrl}/cardDetails`;
        const resource = new Resource(this, endpoint);
        const request: CardDetailsRequest = ObjectSerializer.serialize(cardDetailsRequest, "CardDetailsRequest");
        const response = await getJsonResponse<CardDetailsRequest, CardDetailsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CardDetailsResponse");
    }

    /**
    * @summary Get the result of a payment session
    * @param sessionId {@link string } A unique identifier of the session.
    * @param requestOptions {@link IRequest.Options }
    * @param sessionResult {@link string } The &#x60;sessionResult&#x60; value from the Drop-in or Component.
    * @return {@link SessionResultResponse }
    */
    public async getResultOfPaymentSession(sessionId: string, sessionResult?: string, requestOptions?: IRequest.Options): Promise<SessionResultResponse> {
        const endpoint = `${this.baseUrl}/sessions/{sessionId}`
            .replace("{" + "sessionId" + "}", encodeURIComponent(String(sessionId)));
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = sessionResult;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(sessionResult) requestOptions.params["sessionResult"] = sessionResult;
        }
        const response = await getJsonResponse<string, SessionResultResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "SessionResultResponse");
    }

    /**
    * @summary Get a list of available payment methods
    * @param paymentMethodsRequest {@link PaymentMethodsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentMethodsResponse }
    */
    public async paymentMethods(paymentMethodsRequest: PaymentMethodsRequest, requestOptions?: IRequest.Options): Promise<PaymentMethodsResponse> {
        const endpoint = `${this.baseUrl}/paymentMethods`;
        const resource = new Resource(this, endpoint);
        const request: PaymentMethodsRequest = ObjectSerializer.serialize(paymentMethodsRequest, "PaymentMethodsRequest");
        const response = await getJsonResponse<PaymentMethodsRequest, PaymentMethodsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentMethodsResponse");
    }

    /**
    * @summary Start a transaction
    * @param paymentRequest {@link PaymentRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentResponse }
    */
    public async payments(paymentRequest: PaymentRequest, requestOptions?: IRequest.Options): Promise<PaymentResponse> {
        const endpoint = `${this.baseUrl}/payments`;
        const resource = new Resource(this, endpoint);
        const request: PaymentRequest = ObjectSerializer.serialize(paymentRequest, "PaymentRequest");
        const response = await getJsonResponse<PaymentRequest, PaymentResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentResponse");
    }

    /**
    * @summary Submit details for a payment
    * @param paymentDetailsRequest {@link PaymentDetailsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentDetailsResponse }
    */
    public async paymentsDetails(paymentDetailsRequest: PaymentDetailsRequest, requestOptions?: IRequest.Options): Promise<PaymentDetailsResponse> {
        const endpoint = `${this.baseUrl}/payments/details`;
        const resource = new Resource(this, endpoint);
        const request: PaymentDetailsRequest = ObjectSerializer.serialize(paymentDetailsRequest, "PaymentDetailsRequest");
        const response = await getJsonResponse<PaymentDetailsRequest, PaymentDetailsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentDetailsResponse");
    }

    /**
    * @summary Create a payment session
    * @param createCheckoutSessionRequest {@link CreateCheckoutSessionRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CreateCheckoutSessionResponse }
    */
    public async sessions(createCheckoutSessionRequest: CreateCheckoutSessionRequest, requestOptions?: IRequest.Options): Promise<CreateCheckoutSessionResponse> {
        const endpoint = `${this.baseUrl}/sessions`;
        const resource = new Resource(this, endpoint);
        const request: CreateCheckoutSessionRequest = ObjectSerializer.serialize(createCheckoutSessionRequest, "CreateCheckoutSessionRequest");
        const response = await getJsonResponse<CreateCheckoutSessionRequest, CreateCheckoutSessionResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateCheckoutSessionResponse");
    }
}