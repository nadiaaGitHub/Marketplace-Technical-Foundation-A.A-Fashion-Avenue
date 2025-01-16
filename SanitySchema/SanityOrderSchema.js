//Order schema
export default {
    name: 'order',
    type: 'document',
    title: 'Orders',
    fields: [
        { name: 'orderId', title: 'Order ID', type: 'string', }, //order id
        { name: 'customer', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' }, //customer
        { name: 'product', type: 'reference', to: [{ type: 'dress' }], title: 'Product' },  //dress
        { name: 'quantity', type: 'number', title: 'Quantity' }, //quantity
        { name: 'status', title: 'Order Status', type: 'string', options: { list: [{ title: 'Pending', value: 'pending' }, { title: 'Shipped', value: 'shipped' }, { title: 'Delivered', value: 'delivered' }, { title: 'Cancelled', value: 'cancelled' },], }, }, //order status
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'productName', title: 'Product Name', type: 'string' },
                        { name: 'quantity', title: 'Quantity', type: 'number' },
                        { name: 'price', title: 'Price', type: 'number' },
                    ],
                },
            ],
        },  //items
        { name: 'totalPrice', title: 'Total Price', type: 'number', readOnly: true, },   //total price
        { name: 'orderDate', title: 'Order Date', type: 'datetime', }, //order date

        {
            name: 'user', type: 'object', title: 'User Details', fields: [
                { name: 'name', type: 'string', title: 'Name' },
                { name: 'email', type: 'string', title: 'Email' },
                { name: 'address', type: 'text', title: 'Address' },
            ]
        },//user detail
    ],
};

