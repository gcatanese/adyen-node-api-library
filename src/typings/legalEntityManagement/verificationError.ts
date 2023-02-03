/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CapabilityProblemEntity } from './capabilityProblemEntity';
import { RemediatingAction } from './remediatingAction';
import { VerificationErrorRecursive } from './verificationErrorRecursive';

export class VerificationError {
    'capabilities'?: Array<VerificationError.CapabilitiesEnum>;
    'code'?: string;
    'entity'?: CapabilityProblemEntity;
    'message'?: string;
    'remediatingActions'?: Array<RemediatingAction>;
    'subErrors'?: Array<VerificationErrorRecursive>;
    'type'?: VerificationError.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "Array<VerificationError.CapabilitiesEnum>"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "CapabilityProblemEntity"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "remediatingActions",
            "baseName": "remediatingActions",
            "type": "Array<RemediatingAction>"
        },
        {
            "name": "subErrors",
            "baseName": "subErrors",
            "type": "Array<VerificationErrorRecursive>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "VerificationError.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return VerificationError.attributeTypeMap;
    }
}

export namespace VerificationError {
    export enum CapabilitiesEnum {
        AcceptExternalFunding = <any> 'acceptExternalFunding',
        AcceptPspFunding = <any> 'acceptPspFunding',
        AcceptTransactionInRestrictedCountries = <any> 'acceptTransactionInRestrictedCountries',
        AcceptTransactionInRestrictedCountriesCommercial = <any> 'acceptTransactionInRestrictedCountriesCommercial',
        AcceptTransactionInRestrictedCountriesConsumer = <any> 'acceptTransactionInRestrictedCountriesConsumer',
        AcceptTransactionInRestrictedIndustries = <any> 'acceptTransactionInRestrictedIndustries',
        AcceptTransactionInRestrictedIndustriesCommercial = <any> 'acceptTransactionInRestrictedIndustriesCommercial',
        AcceptTransactionInRestrictedIndustriesConsumer = <any> 'acceptTransactionInRestrictedIndustriesConsumer',
        Acquiring = <any> 'acquiring',
        AtmWithdrawal = <any> 'atmWithdrawal',
        AtmWithdrawalCommercial = <any> 'atmWithdrawalCommercial',
        AtmWithdrawalConsumer = <any> 'atmWithdrawalConsumer',
        AtmWithdrawalInRestrictedCountries = <any> 'atmWithdrawalInRestrictedCountries',
        AtmWithdrawalInRestrictedCountriesCommercial = <any> 'atmWithdrawalInRestrictedCountriesCommercial',
        AtmWithdrawalInRestrictedCountriesConsumer = <any> 'atmWithdrawalInRestrictedCountriesConsumer',
        AuthorisedPaymentInstrumentUser = <any> 'authorisedPaymentInstrumentUser',
        GetGrantOffers = <any> 'getGrantOffers',
        IssueBankAccount = <any> 'issueBankAccount',
        IssueCard = <any> 'issueCard',
        IssueCardCommercial = <any> 'issueCardCommercial',
        IssueCardConsumer = <any> 'issueCardConsumer',
        LocalAcceptance = <any> 'localAcceptance',
        Payout = <any> 'payout',
        PayoutToTransferInstrument = <any> 'payoutToTransferInstrument',
        Processing = <any> 'processing',
        ReceiveFromBalanceAccount = <any> 'receiveFromBalanceAccount',
        ReceiveFromPlatformPayments = <any> 'receiveFromPlatformPayments',
        ReceiveFromThirdParty = <any> 'receiveFromThirdParty',
        ReceiveFromTransferInstrument = <any> 'receiveFromTransferInstrument',
        ReceiveGrants = <any> 'receiveGrants',
        ReceivePayments = <any> 'receivePayments',
        SendToBalanceAccount = <any> 'sendToBalanceAccount',
        SendToThirdParty = <any> 'sendToThirdParty',
        SendToTransferInstrument = <any> 'sendToTransferInstrument',
        ThirdPartyFunding = <any> 'thirdPartyFunding',
        UseCard = <any> 'useCard',
        UseCardCommercial = <any> 'useCardCommercial',
        UseCardConsumer = <any> 'useCardConsumer',
        UseCardInRestrictedCountries = <any> 'useCardInRestrictedCountries',
        UseCardInRestrictedCountriesCommercial = <any> 'useCardInRestrictedCountriesCommercial',
        UseCardInRestrictedCountriesConsumer = <any> 'useCardInRestrictedCountriesConsumer',
        UseCardInRestrictedIndustries = <any> 'useCardInRestrictedIndustries',
        UseCardInRestrictedIndustriesCommercial = <any> 'useCardInRestrictedIndustriesCommercial',
        UseCardInRestrictedIndustriesConsumer = <any> 'useCardInRestrictedIndustriesConsumer',
        WithdrawFromAtm = <any> 'withdrawFromAtm',
        WithdrawFromAtmCommercial = <any> 'withdrawFromAtmCommercial',
        WithdrawFromAtmConsumer = <any> 'withdrawFromAtmConsumer',
        WithdrawFromAtmInRestrictedCountries = <any> 'withdrawFromAtmInRestrictedCountries',
        WithdrawFromAtmInRestrictedCountriesCommercial = <any> 'withdrawFromAtmInRestrictedCountriesCommercial',
        WithdrawFromAtmInRestrictedCountriesConsumer = <any> 'withdrawFromAtmInRestrictedCountriesConsumer'
    }
    export enum TypeEnum {
        DataMissing = <any> 'dataMissing',
        InvalidInput = <any> 'invalidInput',
        PendingStatus = <any> 'pendingStatus'
    }
}
