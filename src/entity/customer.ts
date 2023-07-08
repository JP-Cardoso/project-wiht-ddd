/**
 * Essa entidade é focada no negócio;* 
 * 
 * Para o ORM - você vai ter uma focada em 
 * persistência - MODEL;
 * 
 * dir Entity (interno -  CORE)
 *  - Customer.ts (RN)
 * dir Infra (externo)
 *  - dir Entity / Model
 *      - customer.ts (get, set)
 */

import Address from "./address";

export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;

    constructor(
        id: string, name: string
    ) {
        this._id = id;
        this._name = name;
        this.validate()
    }

    get name(): string {
        return this._name;
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("ID is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate()
    }

    isActive(): boolean {
        return this._active
    }

    activate() {
        if (this._address === undefined) {
            throw new Error(`Addresses is mandatory to activate a customer`);
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    get Address(): Address {
        return this._address;
    }

    set Address(address: Address) {
        this._address = address
    }
}