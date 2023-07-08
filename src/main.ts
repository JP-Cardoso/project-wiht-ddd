import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

//Agregado de Cliente - Relacionados por ID
let customer = new Customer("123", "João");
const address = new Address("Rua Dois", 2, "12345-678", "São Paulo");
customer._address = address;
customer.activate();


//Agregado de Ordem - Relação de objeto
const item1 = new OrderItem("1", "Item1", 10);
const item2 = new OrderItem("2", "Item2", 15);
const order = new Order("1", "123", [item1, item2]);