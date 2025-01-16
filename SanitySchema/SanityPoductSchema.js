//Product Schema
export default {
    name: 'dress',
    type: 'document',
    title: 'Dresses',
    fields: [
        { name: 'name', type: 'string', title: 'Name' },  //name
        { name: 'category', type: 'string', title: 'Category' }, //category
        { name: 'price', type: 'number', title: 'Price' },  //price
        { name: 'discountPercentage', type: 'number', title: 'Discount Percentage', }, // Discount Percentage'
        { name: 'priceWithoutDiscount', type: 'number', title: 'Price Without Discount', description: 'Original price before discount' }, //'Price Without Discount
        { name: 'stock', type: 'number', title: 'Stock' }, //stock
        {
            name: 'sizes',
            type: 'array',
            title: 'Sizes',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            description: 'Add sizes like S , M , L , XL , XXL'
        },    // sizes
        { name: 'description', type: 'text', title: 'Description' }, //description
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{ type: 'image' }],
        }, //image
        { name: 'ratings', type: 'number', title: 'Ratings' }, //rating
        { name: 'ratingCount', type: 'number', title: 'Rating Count', description: 'Number of ratings' }, //rating count
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            description: 'Add tags like "new arrival", "bestseller", etc.'
        }, //tags

    ],
};





