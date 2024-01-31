/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AdditionalCommission } from './additionalCommission';
import { Commission } from './commission';

export class SplitConfigurationLogic {
    /**
    * Specifies the logic to apply when booking the transaction fees. Should be combined with adyenFees.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'acquiringFees'?: SplitConfigurationLogic.AcquiringFeesEnum;
    'additionalCommission'?: AdditionalCommission;
    /**
    * Specifies the logic to apply when booking the transaction fees. Should be combined with schemeFee, interchange & adyenMarkup.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'adyenCommission'?: SplitConfigurationLogic.AdyenCommissionEnum;
    /**
    * Specifies the logic to apply when booking the transaction fees. Should be combined with acquiringFees.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'adyenFees'?: SplitConfigurationLogic.AdyenFeesEnum;
    /**
    * Specifies the logic to apply when booking the transaction fees. Should be combined with schemeFee, adyenCommission & interchange.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'adyenMarkup'?: SplitConfigurationLogic.AdyenMarkupEnum;
    /**
    * Specifies the logic to apply when booking the chargeback amount.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**.
    */
    'chargeback'?: SplitConfigurationLogic.ChargebackEnum;
    /**
    * Specifies the logic to apply when allocating the chargeback costs.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**
    */
    'chargebackCostAllocation'?: SplitConfigurationLogic.ChargebackCostAllocationEnum;
    'commission': Commission;
    /**
    * Specifies the logic to apply when booking the transaction fees. Should be combined with schemeFee, adyenCommission & adyenMarkup.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'interchange'?: SplitConfigurationLogic.InterchangeEnum;
    /**
    * Specifies the logic to apply when booking the transaction fees. Cannot be combined with other fees.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'paymentFee'?: SplitConfigurationLogic.PaymentFeeEnum;
    /**
    * Specifies the logic to apply when booking the amount left over after currency conversion.  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
    */
    'remainder'?: SplitConfigurationLogic.RemainderEnum;
    /**
    * Specifies the logic to apply when booking the transaction fees. Should be combined with interchange, adyenCommission & adyenMarkup.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'schemeFee'?: SplitConfigurationLogic.SchemeFeeEnum;
    /**
    * Unique identifier of the split logic that is applied when the split configuration conditions are met.
    */
    'splitLogicId'?: string;
    /**
    * Specifies the logic to apply when booking the surcharge amount.  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**
    */
    'surcharge'?: SplitConfigurationLogic.SurchargeEnum;
    /**
    * Specifies the logic to apply when booking tips (gratuity).  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
    */
    'tip'?: SplitConfigurationLogic.TipEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquiringFees",
            "baseName": "acquiringFees",
            "type": "SplitConfigurationLogic.AcquiringFeesEnum"
        },
        {
            "name": "additionalCommission",
            "baseName": "additionalCommission",
            "type": "AdditionalCommission"
        },
        {
            "name": "adyenCommission",
            "baseName": "adyenCommission",
            "type": "SplitConfigurationLogic.AdyenCommissionEnum"
        },
        {
            "name": "adyenFees",
            "baseName": "adyenFees",
            "type": "SplitConfigurationLogic.AdyenFeesEnum"
        },
        {
            "name": "adyenMarkup",
            "baseName": "adyenMarkup",
            "type": "SplitConfigurationLogic.AdyenMarkupEnum"
        },
        {
            "name": "chargeback",
            "baseName": "chargeback",
            "type": "SplitConfigurationLogic.ChargebackEnum"
        },
        {
            "name": "chargebackCostAllocation",
            "baseName": "chargebackCostAllocation",
            "type": "SplitConfigurationLogic.ChargebackCostAllocationEnum"
        },
        {
            "name": "commission",
            "baseName": "commission",
            "type": "Commission"
        },
        {
            "name": "interchange",
            "baseName": "interchange",
            "type": "SplitConfigurationLogic.InterchangeEnum"
        },
        {
            "name": "paymentFee",
            "baseName": "paymentFee",
            "type": "SplitConfigurationLogic.PaymentFeeEnum"
        },
        {
            "name": "remainder",
            "baseName": "remainder",
            "type": "SplitConfigurationLogic.RemainderEnum"
        },
        {
            "name": "schemeFee",
            "baseName": "schemeFee",
            "type": "SplitConfigurationLogic.SchemeFeeEnum"
        },
        {
            "name": "splitLogicId",
            "baseName": "splitLogicId",
            "type": "string"
        },
        {
            "name": "surcharge",
            "baseName": "surcharge",
            "type": "SplitConfigurationLogic.SurchargeEnum"
        },
        {
            "name": "tip",
            "baseName": "tip",
            "type": "SplitConfigurationLogic.TipEnum"
        }    ];

    static getAttributeTypeMap() {
        return SplitConfigurationLogic.attributeTypeMap;
    }
}

export namespace SplitConfigurationLogic {
    export enum AcquiringFeesEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum AdyenCommissionEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum AdyenFeesEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum AdyenMarkupEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum ChargebackEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount',
        DeductAccordingToSplitRatio = 'deductAccordingToSplitRatio'
    }
    export enum ChargebackCostAllocationEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum InterchangeEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum PaymentFeeEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum RemainderEnum {
        AddToLiableAccount = 'addToLiableAccount',
        AddToOneBalanceAccount = 'addToOneBalanceAccount'
    }
    export enum SchemeFeeEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum SurchargeEnum {
        AddToLiableAccount = 'addToLiableAccount',
        AddToOneBalanceAccount = 'addToOneBalanceAccount'
    }
    export enum TipEnum {
        AddToLiableAccount = 'addToLiableAccount',
        AddToOneBalanceAccount = 'addToOneBalanceAccount'
    }
}