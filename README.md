# Marketplace Technical Foundation

## Overview
This repository contains the technical foundation for the **[Your Marketplace Name]** project, which aims to provide a seamless eCommerce experience. This document outlines the system architecture, workflows, API endpoints, and schema design used to build the marketplace.

---

## System Architecture
### High-Level Design
![System Architecture Diagram](path-to-diagram)

**Components:**
1. **Frontend (Next.js)**
   - User-friendly interface for browsing, adding to cart, and placing orders.
   - Responsive design for mobile and desktop users.
   - Essential pages:
     - Home
     - Product Listing
     - Product Details
     - Cart
     - Checkout
     - Order Confirmation
2. **Backend (Sanity CMS)**
   - Manages product data, customer information, and order records.
   - Acts as the database for the marketplace.
3. **Third-Party APIs**
   - Payment Gateway: Processes secure transactions.
   - Shipment Tracking API: Provides real-time delivery updates.

### Data Flow
1. User visits the marketplace to browse products.
2. Product data is fetched from Sanity CMS and displayed dynamically.
3. User places an order, which is recorded in Sanity CMS.
4. Shipment tracking updates are fetched via third-party APIs.
5. Payment processing is handled through the Payment Gateway.

---

## Key Workflows
1. **User Registration:**
   - User signs up -> Data is stored in Sanity CMS -> Confirmation sent to the user.
2. **Product Browsing:**
   - User views product categories -> Sanity API fetches data -> Products displayed dynamically.
3. **Order Placement:**
   - User adds items to the cart -> Proceeds to checkout -> Order details saved in Sanity CMS.
4. **Shipment Tracking:**
   - Order status updates fetched via Shipment Tracking API -> Displayed to the user.

---

## API Endpoints
### General Endpoints
1. **Fetch Products**
   - Endpoint: `/products`
   - Method: GET
   - Description: Fetches all product details from Sanity CMS.
   - Response Example:
     ```json
     {
       "id": 1,
       "name": "Product A",
       "price": 100,
       "stock": 50
     }
     ```
2. **Create Order**
   - Endpoint: `/orders`
   - Method: POST
   - Description: Creates a new order in Sanity CMS.
   - Payload Example:
     ```json
     {
       "customerInfo": { "name": "John Doe", "email": "john@example.com" },
       "products": [
         { "id": 1, "quantity": 2 },
         { "id": 2, "quantity": 1 }
       ],
       "paymentStatus": "Paid"
     }
     ```
   - Response Example:
     ```json
     {
       "orderId": 123,
       "status": "Success"
     }
     ```
3. **Shipment Tracking**
   - Endpoint: `/shipment`
   - Method: GET
   - Description: Fetches real-time shipment updates.
   - Response Example:
     ```json
     {
       "shipmentId": 456,
       "orderId": 123,
       "status": "In Transit",
       "expectedDelivery": "2025-01-20"
     }
     ```

---

## Sanity Schema Design
### Product Schema
```javascript
export default {
  name: 'product',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'stock', type: 'number', title: 'Stock Level' },
    { name: 'image', type: 'image', title: 'Product Image' }
  ]
};
```
### Order Schema
```javascript
export default {
  name: 'order',
  type: 'document',
  fields: [
    { name: 'customerInfo', type: 'object', title: 'Customer Info', fields: [
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'email', type: 'string', title: 'Email' }
    ] },
    { name: 'products', type: 'array', title: 'Products', of: [
      { type: 'object', fields: [
        { name: 'id', type: 'number', title: 'Product ID' },
        { name: 'quantity', type: 'number', title: 'Quantity' }
      ] }
    ] },
    { name: 'paymentStatus', type: 'string', title: 'Payment Status' }
  ]
};
```




