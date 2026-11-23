# Amazon E-Commerce Clone

A fully functional front-end Amazon-style e-commerce web application built with vanilla HTML, CSS, and JavaScript. This project demonstrates modern web development practices including responsive design, dynamic content rendering, and interactive shopping cart functionality.

## 🔗 Live Demo

[View Live Demo](https://your-username.github.io/javascript-amazon-project-main/)

> Replace the above link with your actual GitHub Pages URL after deployment.

## 📝 Description

This project is a front-end clone of Amazon's e-commerce platform featuring a complete shopping experience. Users can browse through 40+ products across multiple categories, add items to their cart with quantity selection, proceed to checkout with multiple delivery options, view order history, and track packages. The application is fully responsive and works seamlessly across all device sizes from mobile phones to large desktop screens.

## 📁 Project Structure

```
javascript-amazon-project-main/
├── index.html              # Main product listing page (entry point)
├── checkout.html           # Shopping cart and checkout
├── orders.html             # Order history page
├── tracking.html           # Package tracking page
├── README.md              # Project documentation
│
├── backend/
│   └── products.json      # Product data in JSON format (40+ products)
│
├── data/
│   ├── cart.js            # Shopping cart data structure
│   └── products.js        # Products array with 40+ items
│
├── scripts/
│   └── amazon.js          # Main application logic (product rendering, cart)
│
├── styles/
│   ├── shared/
│   │   ├── general.css              # Global styles, buttons, utilities
│   │   └── amazon-header.css        # Header navigation styles
│   │
│   └── pages/
│       ├── amazon.css               # Product grid and listing styles
│       ├── orders.css               # Order history page styles
│       ├── tracking.css             # Package tracking styles
│       └── checkout/
│           ├── checkout.css         # Checkout page styles
│           └── checkout-header.css  # Checkout header styles
│
└── images/
    ├── amazon-logo.png, amazon-logo-white.png
    ├── amazon-mobile-logo.png, amazon-mobile-logo-white.png
    ├── icons/                       # UI icons (cart, search, checkmark, etc.)
    ├── ratings/                     # Star rating images (0-5 stars)
    └── products/                    # 60+ product images with variations
```

## 🚀 Features

### Product Catalog
- Dynamic product grid with 40+ items across multiple categories
- Star ratings and customer review counts
- Responsive layout (1 to 8 columns based on screen size)
- Quantity selector (1-10 items)
- Real-time "Added to Cart" feedback with animations

### Shopping Cart
- Add products with selected quantities
- Real-time cart quantity updates in header
- Product quantity management
- Cart badge with live count

### Checkout System
- Order summary with itemized list
- Multiple delivery options (FREE, $4.99, $9.99)
- Delivery date calculations
- Order total with tax calculation (10%)
- Shipping & handling fees

### Order Management
- Order history with past orders
- Order details (date, ID, totals, delivery dates)
- "Buy Again" functionality
- Package tracking with visual progress indicator

### Responsive Design
- Fully responsive across all devices
- 7 breakpoints for different screen sizes
- Mobile-optimized navigation
- Touch-friendly interface

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Flexbox, CSS Grid, media queries, animations
- **JavaScript (ES6+)** - DOM manipulation, event handling, template literals
- **Google Fonts** - Roboto font family
- **Responsive Design** - Mobile-first approach with 7 breakpoints

## 📦 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required

### Steps

1. Clone or download the repository:
```bash
git clone https://github.com/yourusername/javascript-amazon-project.git
```

2. Navigate to the project directory:
```bash
cd javascript-amazon-project-main
```

3. Open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

**Optional - Using a Local Server:**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then navigate to `http://localhost:8000` in your browser.

## 🖥️ Usage

### Browsing Products
1. Open `index.html` in your browser
2. Scroll through the product grid to view available items
3. Check product details, ratings, and prices

### Adding to Cart
1. Select desired quantity from the dropdown menu (1-10)
2. Click the "Add to Cart" button
3. See confirmation checkmark appear
4. Cart quantity updates automatically in the header

### Checkout Process
1. Click the cart icon in the header to proceed to checkout
2. Review your items on the checkout page
3. Select delivery options for each item (FREE, Express, or Priority)
4. Review the order summary with pricing breakdown
5. Click "Place your order" button

### Viewing Orders
1. Click "Returns & Orders" link in the header
2. Browse through your order history
3. Click "Track package" to see delivery status
4. Use "Buy it again" to quickly reorder items

---

**Note**: This is a front-end demonstration project. No actual purchases can be made, and no backend or payment processing is implemented.
