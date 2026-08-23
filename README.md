````md
# 🛠️ Stationery Store — Admin Service

The **Admin Service** is the store-management application of the Stationery Store platform.

It is built using **Python and Django** and is responsible for managing the store's products, inventory, orders, payments, and pickup operations.

The Admin Service is maintained separately from the **User Service**, which handles the customer-facing experience.

> 🏪 **The Admin Service is intended only for authorized store administrators and staff.**

> 🚚 **The platform does not provide home delivery. All orders are collected from the physical store.**

---

# 📌 Project Overview

The Stationery Store platform is divided into two separate applications:

```text
Stationery Store
│
├── User Service
│   └── Customer-facing application
│
└── Admin Service
    └── Store management application
````

The Admin Service provides the store with a centralized interface to manage day-to-day operations.

Through the Admin Service, authorized staff can manage:

* Products
* Categories
* Inventory
* Orders
* Payments
* Pickup status
* Customers
* Store operations
* Basic analytics

---

# 🎯 Purpose of the Admin Service

The main purpose of this application is to give the store owner and authorized staff complete control over the store's digital operations.

The Admin Service allows staff to:

* Add and manage products
* Maintain product stock
* Update product prices
* Manage categories
* View incoming orders
* Process orders
* Monitor payment status
* Track pending amounts
* Mark orders as ready for pickup
* Mark orders as collected
* Manage authorized staff accounts

---

# 👨‍💼 Admin Roles

The application can support different levels of access.

### Admin

Has complete access to the store management system.

```text
ADMIN
│
├── Products
├── Inventory
├── Orders
├── Payments
├── Customers
├── Pickup
├── Staff
└── Analytics
```

### Staff

Can be given limited operational access.

For example:

```text
STAFF
│
├── View Orders
├── Process Orders
├── Update Pickup Status
└── View Products
```

Permissions can be adjusted according to the store's requirements.

---

# 📦 Product Management

The Admin Service provides complete product management functionality.

Administrators can:

* Add new products
* Edit existing products
* Remove products
* Activate/deactivate products
* Change product prices
* Update product descriptions
* Assign products to categories
* Add product images
* Manage product availability

Example:

```text
Product
│
├── Name
├── Category
├── Price
├── Description
├── Stock
├── Image
└── Active Status
```

---

# 🗂️ Category Management

Administrators can manage the categories used by the store.

Example:

```text
Categories
│
├── Pens
├── Notebooks
├── Pencils
├── Art Supplies
├── Office Supplies
└── School Supplies
```

Categories can be added, edited, or removed according to store requirements.

---

# 📊 Inventory Management

The Admin Service is responsible for maintaining product stock.

Administrators can:

* View current stock
* Increase stock
* Reduce stock
* Update stock manually
* Monitor low-stock products
* Disable unavailable products

Example:

```text
Product             Stock
──────────────────────────
Blue Pen              120
A4 Notebook            45
Pencil Box             12
Marker Set              3
```

The system should prevent customers from ordering quantities greater than the available stock.

---

# 📦 Order Management

The Admin Service provides a centralized view of customer orders.

Administrators can:

* View all orders
* View individual order details
* View customer information
* View ordered products
* View quantities
* View total order amount
* View amount already paid
* View remaining amount
* View payment status
* Update order status

Example:

```text
Order #1024

Customer: Om
Total: ₹1,000
Paid: ₹250
Remaining: ₹750

Payment: 25% Advance
Status: PROCESSING
```

---

# 🔄 Order Lifecycle

The Admin Service manages the store-side order lifecycle.

```text
PLACED
   ↓
PROCESSING
   ↓
READY_FOR_PICKUP
   ↓
COLLECTED
```

Possible order statuses:

* `PLACED`
* `PROCESSING`
* `READY_FOR_PICKUP`
* `COLLECTED`
* `CANCELLED`

---

# 🏪 Store Pickup Management

The store does **not provide home delivery**.

All orders must be collected from the physical store.

The Admin Service allows staff to manage the pickup process.

### Pickup Workflow

```text
Customer Places Order
        ↓
Admin Receives Order
        ↓
Store Prepares Products
        ↓
Mark as READY_FOR_PICKUP
        ↓
Customer Visits Store
        ↓
Remaining Payment
(if applicable)
        ↓
Order Collected
        ↓
Mark as COLLECTED
```

This allows the store to clearly identify which orders are:

* Waiting to be processed
* Being prepared
* Ready for pickup
* Already collected

---

# 💳 Payment Management

The Admin Service allows authorized staff to view payment information associated with orders.

Online payment is **optional**.

Customers can choose:

| Payment Option   | Online Payment | Payment at Store |
| ---------------- | -------------: | ---------------: |
| **25% Advance**  |            25% |              75% |
| **100% Prepaid** |           100% |               0% |
| **Pay at Store** |             0% |             100% |

---

## Example — 25% Payment

For an order worth ₹2,000:

```text
Order Total       = ₹2,000
Amount Paid       = ₹500
Remaining Amount  = ₹1,500
Payment Method    = 25% Advance
```

When the customer visits the store, staff can collect the remaining ₹1,500.

---

## Example — 100% Payment

```text
Order Total       = ₹2,000
Amount Paid       = ₹2,000
Remaining Amount  = ₹0
Payment Method    = 100% Prepaid
```

The customer only needs to collect the order.

---

## Example — Pay at Store

```text
Order Total       = ₹2,000
Amount Paid       = ₹0
Remaining Amount  = ₹2,000
Payment Method    = Pay at Store
```

The entire amount is collected at the store.

---

# 💰 Payment Status

The system can maintain statuses such as:

```text
PENDING
PARTIALLY_PAID
FULLY_PAID
FAILED
PAY_AT_STORE
```

The Admin Service can use this information to determine how much money is still due when the customer arrives.

---

# 👤 Customer Management

The Admin Service can provide authorized staff with information about customers relevant to store operations.

Administrators may be able to:

* View customers
* View customer order history
* View customer contact information
* View customer order activity
* Search customers

Sensitive information should only be accessible to authorized staff.

---

# 🗄️ Database Architecture

The platform uses **PostgreSQL as the shared SQL database**.

The User Service and Admin Service both work with the same core store data.

```text
                  ┌──────────────────────┐
                  │    PostgreSQL DB     │
                  │    Shared Database   │
                  └──────────┬───────────┘
                             │
               ┌─────────────┴─────────────┐
               │                           │
               ▼                           ▼
        User Service                Admin Service
           Django                      Django
               │                           │
               ▼                           ▼
          Customer UI                Admin Dashboard
```

---

# 🐘 PostgreSQL

PostgreSQL stores the core transactional and structured information.

The Admin Service works with data such as:

### Users

```text
users
```

Contains customer account information.

### Admins / Staff

```text
admins
```

Contains authorized store personnel and their roles.

### Products

```text
products
```

Contains product information, pricing, and availability.

### Categories

```text
categories
```

Contains product categories.

### Inventory

```text
inventory
```

Contains stock information.

### Orders

```text
orders
```

Contains customer orders and their current status.

### Order Items

```text
order_items
```

Contains the products and quantities belonging to each order.

### Payments

```text
payments
```

Contains payment and transaction information.

### Pickups

```text
pickups
```

Contains store pickup information and collection status.

---

# 🍃 MongoDB

MongoDB is used for **flexible, non-critical, and analytical data**.

The Admin Service can use MongoDB for:

* Store analytics
* Product activity
* Customer activity
* Search trends
* Product views
* Order-related events
* Application logs
* Flexible reporting data

Example:

```json
{
    "event": "order_status_changed",
    "order_id": 1024,
    "old_status": "PROCESSING",
    "new_status": "READY_FOR_PICKUP",
    "updated_by": 5,
    "timestamp": "2026-08-22T15:30:00"
}
```

This type of event data does not need to be part of the core relational transaction system.

---

# 🖼️ Product Image Management

The actual product images will not be stored directly inside PostgreSQL or MongoDB.

Instead, the application will use file/object storage.

During development:

```text
Django Media Storage
```

For production, options may include:

* Cloudinary
* Amazon S3
* Cloudflare R2
* Supabase Storage

The database stores the image path or URL while the actual image is stored separately.

```text
Product
   │
   ├── PostgreSQL
   │      └── Image URL / Path
   │
   └── Image Storage
          └── Actual Image
```

---

# 🏗️ Service Architecture

The Admin Service operates independently from the User Service while sharing the core PostgreSQL database.

```text
                       Stationery Store
                              │
               ┌──────────────┴──────────────┐
               │                             │
               ▼                             ▼
        ┌──────────────┐              ┌──────────────┐
        │ User Service │              │ Admin Service│
        │    Django    │              │    Django    │
        └──────┬───────┘              └──────┬───────┘
               │                             │
               └──────────────┬──────────────┘
                              │
                              ▼
                       PostgreSQL
                      Shared Database
                              │
                              ▼
                          MongoDB
                    Analytics / Events
```

The two applications have different responsibilities:

### User Service

```text
Customer Operations
│
├── Browse Products
├── Cart
├── Orders
├── Payments
└── Order Tracking
```

### Admin Service

```text
Store Operations
│
├── Products
├── Inventory
├── Orders
├── Payments
├── Pickup
├── Customers
└── Analytics
```

---

# 🔐 Security

Because the Admin Service has access to sensitive store information, security is a major requirement.

The application will implement:

* Secure admin authentication
* Password hashing
* Role-based access control
* Permission management
* Session/token security
* CSRF protection
* Input validation
* Secure database access
* Environment variables
* Restricted access to sensitive information
* Payment data protection
* Audit/event logging where required

Administrators and staff should only have access to functionality permitted by their role.

---

# 📊 Dashboard

The Admin Service can provide a centralized dashboard containing information such as:

```text
Today's Orders
        ↓
Pending Orders
        ↓
Ready for Pickup
        ↓
Collected Orders
        ↓
Today's Revenue
        ↓
Pending Payments
        ↓
Low Stock Products
```

Example:

```text
┌───────────────────────────────────────┐
│          STORE DASHBOARD              │
├───────────────────────────────────────┤
│                                       │
│ Orders Today              24          │
│ Pending Orders             8          │
│ Ready for Pickup           5          │
│ Collected Orders          11          │
│ Pending Payments        ₹4,500        │
│ Low Stock Products         7          │
│                                       │
└───────────────────────────────────────┘
```

The exact dashboard functionality may evolve as the project develops.

---

# 🔄 Admin Order Workflow

A typical store-side workflow is:

```text
Customer
   ↓
Places Order
   ↓
PostgreSQL
   ↓
Admin Dashboard
   ↓
Admin Reviews Order
   ↓
Process Order
   ↓
Prepare Products
   ↓
Mark READY_FOR_PICKUP
   ↓
Customer Visits Store
   ↓
Collect Remaining Payment
(if applicable)
   ↓
Hand Over Order
   ↓
Mark COLLECTED
```

---

# 🛠️ Technology Stack

### Backend

* Python
* Django
* Django REST Framework

### Frontend

* HTML5
* CSS3
* JavaScript

### Databases

* PostgreSQL
* MongoDB

### Payment

* Razorpay / Stripe or another supported payment gateway

### Storage

* Django Media Storage during development
* Cloud/Object Storage for production

### Development

* Git
* GitHub
* Environment Variables
* Virtual Environment

---

# 📚 Development Focus

This project provides practical experience with:

* Django development
* Admin dashboard development
* SQL database design
* NoSQL database integration
* Authentication and authorization
* Role-based access control
* Product management
* Inventory management
* Order management
* Payment management
* Partial and full payment handling
* Store pickup management
* Database transactions
* Analytics
* Service-oriented architecture
* Security
* Testing

---

# 🚧 Project Status

**Under Development 🚀**

The Admin Service is being developed as one of two separate applications within the Stationery Store platform.

```text
Stationery Store
│
├── User Service
│   └── Customer-facing application
│
└── Admin Service
    └── Store management application
```

The architecture and functionality may evolve as development progresses.

---

# 📄 License

License details will be added once the project is finalized.

```
```
