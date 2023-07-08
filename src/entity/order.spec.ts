import Order from "./order";
import OrderItem from "./order_item";

describe('Order uinit tests', () => {  

    it('Should throw error when id is empty', () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError("ID is required")
    });   

    it('Should throw error when customerId is empty', () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrowError("CustomerId is required")
    })

    it('Should throw error when items is empty', () => {
        expect(() => {
            let order = new Order("123", "Jon Doe", []);
        }).toThrowError("Item qtd must be greater than 0")
    })

    it('Should calculate total', () => {
        const item = new OrderItem("1", "item 1", 1000);
        const item2 = new OrderItem("2", "item 2", 500);
        const item3 = new OrderItem("3", "item 3", 1000);
        
        const order = new Order("O1", "C1", [item, item2, item3]);
        const total = order.total();

        expect(total).toBe(2500)
    })
});