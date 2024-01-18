# Scenarios and Functionalities

1. Shopping List Management and Cart Addition: The user interacts with their shopping list to select items for purchase. Items selected from the shopping list are seamlessly added to the shopping cart for a streamlined shopping experience.
2. Cart Review and Management: The user accesses their shopping cart to review selected items, ensuring they have everything needed before proceeding to checkout. The user can manage the cart list, adding or removing items as necessary.
3. Phone Verification and Checkout: For security and convenience, the user verifies their cart on their phone, ensuring all selections are accurate before proceeding to the checkout process.
4. Product Browsing and Notification: The user explores various product categories, selecting items for purchase. Notifications, such as a red dot near the cart icon, inform the user of updates to their selections.
5. Product Search and Selection: Utilizing the search bar, the user can quickly find specific products. The search results allow the user to review and decide whether to add items to their cart.
6. Voice Command Shopping: The user can employ voice commands to search for items in the shop. Phrases like "Search for [item]" yield relevant search results, while commands like "Go back" navigate the user through the shop's pages.
7. Fridge Inventory Management: The user can view and manage the inventory of items in their fridge, including setting expiration dates and monitoring quantities.
8. Smart Recipes in the Fridge: The user accesses smart recipes, which cross-reference ingredients with the fridge inventory. The system smartly adds missing ingredients from a chosen recipe to the shopping list if they are not already in the fridge inventory.
9. Smart Recipes in the Shop: The smart recipe feature is also accessible in the shop, allowing users to conveniently plan meals and shopping simultaneously.
10. Maps and Shopping History on Phone: The user can view maps to locate the nearest shops and access their shopping history on their phone, providing a comprehensive shopping experience.
11. Cart Synchronization Across Devices: Users have the flexibility to delete or add items in their cart, with real-time synchronization across all devices, ensuring a consistent shopping experience.
12. Shopping List Synchronization Across Devices: Similar to the cart, the shopping list can be managed with additions or deletions, synchronized across all devices for seamless access and updates.
13. Hand Gesture Navigation: The user can use hand gestures to navigate through items, adding a layer of convenience and interactivity to the shopping experience.


# fullstack-template

## Docker Variant

What you will need:
* Docker 

Tested on: 
* Docker Engine v20.10.17
* Docker Desktop v4.10.1.

### Useful commands
Inside *`integration`* folder you can use the following commands:

> Run application (and build):
```sh
docker-compose up --build
```

> Run application (with full logging available):
```sh
docker-compose up
```

> Run application (detached mode/with no logging available):
```sh
docker-compose up -d
```

> Stop application:
```sh
docker-compose down
```

> View logs for specific project/container of the application (e.g., backend):
```sh
docker-compose logs -f backend
```

## Verbose Variant

What you will need:
* NodeJS
* Angular
* MongoDB

Tested on: 
* NodeJS v18.12.1
* Angular v14.2.8
* MongoDB v4.4

### Useful commands
Before running the application and after every new node_module is installed using `npm install @package-name`, all project members must execute in both *`backend`* and *`frontend`*:
```sh
npm install
``` 

For frontend, inside *`frontend`* folder:

> Run frontend:
```sh
ng serve
```

> Run frontend (open access from other devices using server's IP):
```sh
ng serve --host 0.0.0.0
```

For backend, inside *`backend`* folder:
> Run backend:
```sh
npm run dev
```

**Do not forget**: mongod.exe (if on Windows) must be running for the Database to be used. 
