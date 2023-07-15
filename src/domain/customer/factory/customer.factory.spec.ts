import Address from "../value-object/address";
import CustomerFactory from "./customer.factory"

describe("Customer factory unit test", () => {

    it('Should create a customer', () => {
        let customer = CustomerFactory.create("John");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.Address).toBeUndefined();
    });

    it('should create a customer with an adress', () => {
        const address = new Address("Street-1", 225, "13330-250", "São Paulo");
        let customer = CustomerFactory.createWithAddress("John", address);

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.Address).toBe(address);
    })
})