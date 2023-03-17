/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Store } from './store';

export class GetTerminalDetailsResponse {
    /**
    * The Bluetooth IP address of the terminal.
    */
    'bluetoothIp'?: string;
    /**
    * The Bluetooth MAC address of the terminal.
    */
    'bluetoothMac'?: string;
    /**
    * The company account that the terminal is associated with. If this is the only account level shown in the response, the terminal is assigned to the inventory of the company account.
    */
    'companyAccount': string;
    /**
    * The country where the terminal is used.
    */
    'country'?: string;
    /**
    * The model name of the terminal.
    */
    'deviceModel'?: string;
    /**
    * Indicates whether assigning IP addresses through a DHCP server is enabled on the terminal.
    */
    'dhcpEnabled'?: boolean;
    /**
    * The label shown on the status bar of the display. This label (if any) is specified in your Customer Area.
    */
    'displayLabel'?: string;
    /**
    * The terminal\'s IP address in your Ethernet network.
    */
    'ethernetIp'?: string;
    /**
    * The terminal\'s MAC address in your Ethernet network.
    */
    'ethernetMac'?: string;
    /**
    * The software release currently in use on the terminal.
    */
    'firmwareVersion'?: string;
    /**
    * The integrated circuit card identifier (ICCID) of the SIM card in the terminal.
    */
    'iccid'?: string;
    /**
    * Date and time of the last activity on the terminal. Not included when the last activity was more than 14 days ago.
    */
    'lastActivityDateTime'?: Date;
    /**
    * Date and time of the last transaction on the terminal. Not included when the last transaction was more than 14 days ago.
    */
    'lastTransactionDateTime'?: Date;
    /**
    * The Ethernet link negotiation that the terminal uses:   - `auto`: Auto-negotiation  - `100full`: 100 Mbps full duplex
    */
    'linkNegotiation'?: string;
    /**
    * The merchant account that the terminal is associated with. If the response doesn\'t contain a `store` the terminal is assigned to this merchant account.
    */
    'merchantAccount'?: string;
    /**
    * Boolean that indicates if the terminal is assigned to the merchant inventory. This is returned when the terminal is assigned to a merchant account.  - If **true**, this indicates that the terminal is in the merchant inventory. This also means that the terminal cannot be boarded.  - If **false**, this indicates that the terminal is assigned to the merchant account as an in-store terminal. This means that the terminal is ready to be boarded, or is already boarded.
    */
    'merchantInventory'?: boolean;
    /**
    * The permanent terminal ID.
    */
    'permanentTerminalId'?: string;
    /**
    * The serial number of the terminal.
    */
    'serialNumber'?: string;
    /**
    * On a terminal that supports 3G or 4G connectivity, indicates the status of the SIM card in the terminal: ACTIVE or INVENTORY.
    */
    'simStatus'?: string;
    /**
    * The store code of the store that the terminal is assigned to.
    */
    'store'?: string;
    'storeDetails'?: Store;
    /**
    * The unique terminal ID.
    */
    'terminal': string;
    /**
    * The status of the terminal:   - `OnlineToday`, `OnlineLast1Day`, `OnlineLast2Days` etcetera to `OnlineLast7Days`: Indicates when in the past week the terminal was last online.   - `SwitchedOff`: Indicates it was more than a week ago that the terminal was last online.   - `ReAssignToInventoryPending`, `ReAssignToStorePending`, `ReAssignToMerchantInventoryPending`: Indicates the terminal is scheduled to be reassigned.
    */
    'terminalStatus'?: GetTerminalDetailsResponse.TerminalStatusEnum;
    /**
    * The terminal\'s IP address in your Wi-Fi network.
    */
    'wifiIp'?: string;
    /**
    * The terminal\'s MAC address in your Wi-Fi network.
    */
    'wifiMac'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bluetoothIp",
            "baseName": "bluetoothIp",
            "type": "string"
        },
        {
            "name": "bluetoothMac",
            "baseName": "bluetoothMac",
            "type": "string"
        },
        {
            "name": "companyAccount",
            "baseName": "companyAccount",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "deviceModel",
            "baseName": "deviceModel",
            "type": "string"
        },
        {
            "name": "dhcpEnabled",
            "baseName": "dhcpEnabled",
            "type": "boolean"
        },
        {
            "name": "displayLabel",
            "baseName": "displayLabel",
            "type": "string"
        },
        {
            "name": "ethernetIp",
            "baseName": "ethernetIp",
            "type": "string"
        },
        {
            "name": "ethernetMac",
            "baseName": "ethernetMac",
            "type": "string"
        },
        {
            "name": "firmwareVersion",
            "baseName": "firmwareVersion",
            "type": "string"
        },
        {
            "name": "iccid",
            "baseName": "iccid",
            "type": "string"
        },
        {
            "name": "lastActivityDateTime",
            "baseName": "lastActivityDateTime",
            "type": "Date"
        },
        {
            "name": "lastTransactionDateTime",
            "baseName": "lastTransactionDateTime",
            "type": "Date"
        },
        {
            "name": "linkNegotiation",
            "baseName": "linkNegotiation",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "merchantInventory",
            "baseName": "merchantInventory",
            "type": "boolean"
        },
        {
            "name": "permanentTerminalId",
            "baseName": "permanentTerminalId",
            "type": "string"
        },
        {
            "name": "serialNumber",
            "baseName": "serialNumber",
            "type": "string"
        },
        {
            "name": "simStatus",
            "baseName": "simStatus",
            "type": "string"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "storeDetails",
            "baseName": "storeDetails",
            "type": "Store"
        },
        {
            "name": "terminal",
            "baseName": "terminal",
            "type": "string"
        },
        {
            "name": "terminalStatus",
            "baseName": "terminalStatus",
            "type": "GetTerminalDetailsResponse.TerminalStatusEnum"
        },
        {
            "name": "wifiIp",
            "baseName": "wifiIp",
            "type": "string"
        },
        {
            "name": "wifiMac",
            "baseName": "wifiMac",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetTerminalDetailsResponse.attributeTypeMap;
    }
}

export namespace GetTerminalDetailsResponse {
    export enum TerminalStatusEnum {
        OnlineLast1Day = 'OnlineLast1Day',
        OnlineLast2Days = 'OnlineLast2Days',
        OnlineLast3Days = 'OnlineLast3Days',
        OnlineLast4Days = 'OnlineLast4Days',
        OnlineLast5Days = 'OnlineLast5Days',
        OnlineLast6Days = 'OnlineLast6Days',
        OnlineLast7Days = 'OnlineLast7Days',
        OnlineToday = 'OnlineToday',
        ReAssignToInventoryPending = 'ReAssignToInventoryPending',
        ReAssignToMerchantInventoryPending = 'ReAssignToMerchantInventoryPending',
        ReAssignToStorePending = 'ReAssignToStorePending',
        SwitchedOff = 'SwitchedOff'
    }
}