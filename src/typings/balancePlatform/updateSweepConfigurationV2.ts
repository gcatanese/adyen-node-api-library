/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { SweepCounterparty } from './sweepCounterparty';
import { SweepSchedule } from './sweepSchedule';

export class UpdateSweepConfigurationV2 {
    /**
    * The type of transfer that results from the sweep.  Possible values:   - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).  - **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.  Required when setting `priorities`.
    */
    'category'?: UpdateSweepConfigurationV2.CategoryEnum;
    'counterparty'?: SweepCounterparty;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.  The sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).
    */
    'currency'?: string;
    /**
    * The message that will be used in the sweep transfer\'s description body with a maximum length of 140 characters.  If the message is longer after replacing placeholders, the message will be cut off at 140 characters.
    */
    'description'?: string;
    /**
    * The unique identifier of the sweep.
    */
    'id'?: string;
    /**
    * The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority listed first, and if that\'s not possible, it moves on to the next option in the order of provided priorities.  Possible values:  * **regular**: For normal, low-value transactions.  * **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.  * **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.  * **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).  * **crossBorder**: High-value transfer to a recipient in a different country.  * **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).  Set `category` to **bank**. For more details, see [optional priorities setup](https://docs.adyen.com/marketplaces-and-platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).
    */
    'priorities'?: Array<UpdateSweepConfigurationV2.PrioritiesEnum>;
    /**
    * The reason for disabling the sweep.
    */
    'reason'?: UpdateSweepConfigurationV2.ReasonEnum;
    'schedule'?: SweepSchedule;
    /**
    * The status of the sweep. If not provided, by default, this is set to **active**.  Possible values:    * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration.    * **inactive**: the sweep is disabled and cannot be triggered.   
    */
    'status'?: UpdateSweepConfigurationV2.StatusEnum;
    'sweepAmount'?: Amount;
    'targetAmount'?: Amount;
    'triggerAmount'?: Amount;
    /**
    * The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.  Possible values:   * **push**: _push out funds_ to a destination balance account or transfer instrument.   * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.
    */
    'type'?: UpdateSweepConfigurationV2.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "category",
            "baseName": "category",
            "type": "UpdateSweepConfigurationV2.CategoryEnum"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "SweepCounterparty"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "priorities",
            "baseName": "priorities",
            "type": "Array<UpdateSweepConfigurationV2.PrioritiesEnum>"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "UpdateSweepConfigurationV2.ReasonEnum"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "SweepSchedule"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateSweepConfigurationV2.StatusEnum"
        },
        {
            "name": "sweepAmount",
            "baseName": "sweepAmount",
            "type": "Amount"
        },
        {
            "name": "targetAmount",
            "baseName": "targetAmount",
            "type": "Amount"
        },
        {
            "name": "triggerAmount",
            "baseName": "triggerAmount",
            "type": "Amount"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UpdateSweepConfigurationV2.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpdateSweepConfigurationV2.attributeTypeMap;
    }
}

export namespace UpdateSweepConfigurationV2 {
    export enum CategoryEnum {
        Bank = 'bank',
        Internal = 'internal',
        PlatformPayment = 'platformPayment'
    }
    export enum PrioritiesEnum {
        CrossBorder = 'crossBorder',
        Fast = 'fast',
        Instant = 'instant',
        Internal = 'internal',
        Regular = 'regular',
        Wire = 'wire'
    }
    export enum ReasonEnum {
        AmountLimitExceeded = 'amountLimitExceeded',
        Approved = 'approved',
        BalanceAccountTemporarilyBlockedByTransactionRule = 'balanceAccountTemporarilyBlockedByTransactionRule',
        CounterpartyAccountBlocked = 'counterpartyAccountBlocked',
        CounterpartyAccountClosed = 'counterpartyAccountClosed',
        CounterpartyAccountNotFound = 'counterpartyAccountNotFound',
        CounterpartyAddressRequired = 'counterpartyAddressRequired',
        CounterpartyBankTimedOut = 'counterpartyBankTimedOut',
        CounterpartyBankUnavailable = 'counterpartyBankUnavailable',
        DeclinedByTransactionRule = 'declinedByTransactionRule',
        Error = 'error',
        NotEnoughBalance = 'notEnoughBalance',
        RefusedByCounterpartyBank = 'refusedByCounterpartyBank',
        RouteNotFound = 'routeNotFound',
        ScaFailed = 'scaFailed',
        Unknown = 'unknown'
    }
    export enum StatusEnum {
        Active = 'active',
        Inactive = 'inactive'
    }
    export enum TypeEnum {
        Pull = 'pull',
        Push = 'push'
    }
}
