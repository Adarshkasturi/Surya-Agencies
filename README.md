# Surya Agencies - Wholesale Medicine Ordering App

A modern, responsive web application for wholesale medical sellers with an e-commerce interface. The app allows customers to browse available medicines, add them to cart, and place orders directly through WhatsApp.

## Features

- **Modern E-commerce Interface**: Clean, responsive design with medicine cards
- **Search Functionality**: Real-time search as you type, by name or brand (starts with matching)
- **Medicine Information**: Displays medicine name, brand, price, scheme selection, and expiry date
- **Shopping Cart**: Add/remove medicines with quantity and scheme tracking
- **WhatsApp Integration**: Direct order placement through WhatsApp with formatted message
- **Responsive Design**: Mobile-first design that works on all devices
- **Real-time Updates**: Cart count and notifications update instantly

## How to Use

### 1. Setup
1. Download all files to a folder named `surya_agencies`
2. Open `index.html` in a web browser
3. The app will load with sample medicine data

### 2. Customization

#### Update Medicine Data
Edit the `medicines` array in `script.js` to add your actual medicines:

```javascript
const medicines = [
    {
        id: 1,
        name: "Your Medicine Name",
        brand: "Brand Name",
        price: 25, // Add price in rupees
        schemes: [
            { name: "Buy 2 Get 1 Free", description: "Buy 2 strips, get 1 free" },
            { name: "Buy 3 Get 2 Free", description: "Buy 3 strips, get 2 free" }
        ],
        expiry: "Exp: Dec 2025",
        image: "images/YourMedicine.jpg" // Path to image in images folder
    },
    // Add more medicines...
];
```

#### Update WhatsApp Number
In `script.js`, find this line and replace with your actual WhatsApp business number:

```javascript
const whatsappNumber = "919876543210"; // Replace with actual number
```

#### Add Medicine Images
Replace the emoji placeholders with actual image URLs:

```javascript
image: "https://example.com/medicine-image.jpg"
```

### 3. Using the App

1. **Browse Medicines**: View all available medicines on the main page
2. **Add to Cart**: Click "Add to Cart" button on any medicine
3. **View Cart**: Click the cart icon in the header to see selected items
4. **Remove Items**: Click the red X button to remove items from cart
5. **Place Order**: Click "Place Order on WhatsApp" to send order details

### 4. Order Format

When an order is placed, the app generates a formatted message like:

```
🏥 SURYA AGENCIES - MEDICINE ORDER 🏥

Please find my order details below:

1. Paracetamol 500mg (Crocin)
   Price: ₹15 × 2 = ₹30
   Scheme: Buy 2 Get 1 Free

2. Amoxicillin 250mg (Novamox)
   Price: ₹45 × 1 = ₹45
   Scheme: Buy 3 Get 2 Free

Total Order Value: ₹75

Please confirm availability and pricing.
Thank you! 🙏
```

## File Structure

```
surya_agencies/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Customization Options

### Colors and Styling
Edit `style.css` to change:
- Color scheme
- Fonts
- Layout spacing
- Button styles
- Card designs

### Functionality
Modify `script.js` to add:
- Search functionality
- Filtering by category
- Price information
- Stock status
- User authentication

### Layout
Update `index.html` to:
- Add more sections
- Include company information
- Add contact details
- Include terms and conditions

## Support

For technical support or customization requests, please contact your development team.

## License

This application is created for Surya Agencies. All rights reserved.

---

**Note**: This is a frontend-only application. For production use, consider adding:
- Backend database integration
- User authentication
- Payment processing
- Order tracking
- Inventory management
