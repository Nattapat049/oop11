class MenuItem {
    constructor(private _name: string, private _price: number, private _category: string) {}
    
    get name(): string {
        return this._name;
    }
    get price(): number {
        return this._price;
    }
    get category(): string {
        return this._category;
    }

    getMenuInfo(): string {
        return `${this._name} - $${this._price} - ${this._category}`;
    }
}

class Restaurant {
    constructor(private menuItem: MenuItem[]) {}

    showMenu(): void {
        console.log("Menu: ");
        this.menuItem.forEach(item => {
            console.log(item.getMenuInfo());
        });
    }
}

class Order {
    constructor(private items: { item: MenuItem, quantity: number }[]) {}

    calculateTotal(): number {
        let total = 0;
        this.items.forEach(orderItem => {
            total += orderItem.item.price * orderItem.quantity;
        });
        return total;
    }

    showOrder(): void {
        console.log("Order Details:");
        this.items.forEach(orderItem => {
            const itemTotal = orderItem.item.price * orderItem.quantity;
            console.log(`${orderItem.quantity} x ${orderItem.item.name} -
            $${orderItem.item.price} - ${orderItem.item.category} = $${itemTotal.toFixed(2)}`);
        });
        console.log("-----------------------------------------");

        const total = this.calculateTotal();
        let discount = 0;
        if (total > 500) {
            discount = total * 0.01;
        }
        const netPrice = total - discount;

        console.log(`Total: $${total.toFixed(2)}`);
        console.log(`Net Price (1% Disc): $${netPrice.toFixed(2)}`);
    }
}

class Customer {
    constructor(private name: string) {}

    placeOrder(order: Order): void {
        console.log(`${this.name} placed an order for:`);
        order.showOrder();
    }
}

const menu1 = new MenuItem("Pizza", 250, "Main Course");
const menu2 = new MenuItem("Salad", 150, "Appetizer");
const rest1 = new Restaurant([menu1, menu2]);
rest1.showMenu();
console.log("-----------------------------------------");

const cust1 = new Customer("Alice");
const order1 = new Order([
    { item: menu1, quantity: 2 },
    { item: menu2, quantity: 1 }
]);
cust1.placeOrder(order1);