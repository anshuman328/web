# E-commerce Web Project

A multi-page responsive e-commerce user interface featuring carousels, category layouts, and an interactive shopping experience.

## 🚀 Features

- **Firebase Authentication**: Secure user authentication system with email and password login.
- **User Registration**: New users can create accounts and register with email and password.
- **Login System**: Registered users must login every time they visit the site using sessionStorage for session management.
- **Password Reset**: Users can reset forgotten passwords via email using Firebase's password reset feature.
- **Responsive Navigation Bar**: Includes a logo, search functionality, and action icons (Profile, Favorites, Cart).
- **Dynamic Category Pages**: Dedicated layouts for various categories with interactive hover effects.
- **Image Carousels**: Featured product banners and promotional displays.
- **Product Grids**: Flexbox-based product listings with responsive designs.
- **Visual Effects**: Smooth transitions and hover scales on product cards.

## 📂 Project Structure

- `loginpage.html`: Login page where registered users enter their email and password.
- `register.html`: Registration page where new users create their account with Firebase.
- `forgot-password.html`: Password reset request page where users can request a password reset email.
- `auth-guard.js`: Authentication guard that redirects users to login page if not authenticated.
- `login.js`: Firebase authentication module handling login, logout, and session management with sessionStorage.
- `code.html`: Main home page with navbar and hero sections.
- `code2.html`: Men's category page with product listings.
- `code3.html`: Women's category page with product listings.
- `product-detail.html`: Product detail page showing individual product information.
- `cart.html`: Shopping cart page displaying added items, quantities, and order summary.
- `style.css`: Core styling for the main layout.
- `style2.css`: Layout-specific styles for the men's category page.
- `style3.css`: Styles for women's category and specialized hover effects.
- `productD.css`: Styling for product detail page.
- `cart.css`: Styling for the shopping cart page.
- `footer.css`: Footer styling for all pages.
- `image/`: Directory containing local assets and icons.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure for web pages.
- **CSS3**: Layouts using Flexbox, Grid, and custom animations.
- **JavaScript**: Interactive features and dynamic functionality.
- **Firebase**: Backend authentication and user account management.
- **External Assets**: Integrated high-quality product imagery.

## 🔐 Authentication System

### How It Works

1. **New User Registration**:
   - User navigates to `register.html`
   - Enters email and password
   - Account is created in Firebase with `createUserWithEmailAndPassword()`
   - User is redirected to login page

2. **Existing User Login**:
   - User opens any page on the website
   - `auth-guard.js` checks if user is authenticated using sessionStorage
   - If not authenticated, redirects to `loginpage.html`
   - User logs in with email and password
   - Firebase validates credentials with `signInWithEmailAndPassword()`
   - Session is stored in `sessionStorage` (expires when browser closes)
   - User gains access to all pages

3. **Session Management**:
   - Uses `sessionStorage` instead of `localStorage`
   - Session expires automatically when the browser is closed
   - User must login again on their next visit
   - Logout button clears session and redirects to login page

4. **Password Reset**:
   - User clicks "Forgot password?" link on login page
   - Navigates to `forgot-password.html`
   - Enters their registered email address
   - Firebase sends a password reset email using `sendPasswordResetEmail()`
   - User clicks the reset link in the email
   - Firebase's built-in page guides user to create a new password
   - User can then login with the new password

### Firebase Configuration

- **Project**: Design Thread (design-thread-92e99)
- **Authentication Method**: Email & Password
- **Config Location**: [login.js](login.js) and [register.html](register.html)

## 🖥️ Getting Started

1. Clone or download the repository.
2. Open [code.html](code.html) in any modern web browser to view the homepage.
3. Navigate through the site using the links provided (if available) or by opening individual HTML files.

## � Shopping Cart & Add to Cart Feature

The **Add to Cart** functionality is a core feature of our e-commerce platform that allows users to collect items for purchase.

### Cart Page ([cart.html](cart.html))

The shopping cart page displays:
- **Saved Items**: All products added to the cart with product details
- **Quantity Management**: Users can adjust quantities or remove items
- **Order Summary**: Automatic calculation of:
  - Subtotal (sum of all items)
  - Estimated Tax (5% of subtotal)
  - Shipping costs (calculated at checkout)
  - Final Total amount
- **Checkout Button**: Proceed to purchase when ready
- **Empty Cart State**: Clear message when no items in cart

### How Add to Cart Works

1. **Browse & Select**: Users explore products across categories
2. **Add to Cart**: Click the "Add to Cart" button on any product
3. **Cart Updated**: Item is saved to the shopping cart
4. **View Cart**: Navigate to [cart.html](cart.html) to review items
5. **Checkout**: Proceed with purchase when ready

### Related JavaScript Files

- **[cart.js](cart.js)**: Manages all cart functionality:
  - Adding items to cart
  - Removing items from cart
  - Updating item quantities
  - Calculating subtotal, tax, and total
  - Persisting cart data
  - Displaying cart items dynamically

### Cart Styling

- **[cart.css](cart.css)**: Provides styling for:
  - Cart items section with product cards
  - Order summary sidebar
  - Responsive layout for mobile and desktop
  - Interactive buttons for quantity adjustment
  - Empty cart and loading states

## 🖌️ Design Details

- **Navbar**: Optimized for e-commerce with centered search and quick-access icons.
- **Hover Effects**: Products in [style3.css](style3.css) feature 1.05x scaling and box shadows on hover for better user engagement.
- **Image Handling**: Uses `object-fit: cover` and `contain` to ensure product images maintain aspect ratios across different screen sizes.
- **Cart Integration**: Seamless cart experience with real-time updates and persistent storage.

## ⚙️ JavaScript Functionality

- **[login.js](login.js)**: Firebase authentication module that handles:
  - User login with email and password validation
  - Firebase authentication integration (`signInWithEmailAndPassword()`)
  - Session management using sessionStorage
  - Logout functionality
  - Particle animation background for login page
  
- **[auth-guard.js](auth-guard.js)**: Authentication guard that handles:
  - Checking if user is authenticated (checks sessionStorage)
  - Redirecting unauthenticated users to login page
  - Allowing access to public pages (loginpage.html, register.html, forgot-password.html)
  
- **[forgot-password.html](forgot-password.html)**: Password reset page that handles:
  - User input for email address
  - Validation of email format
  - Success and error message display
  - Auto-redirect to login after successful reset request

- **[forgot-password.js](forgot-password.js)**: Password reset functionality that handles:
  - Sending password reset emails via Firebase `sendPasswordResetEmail()`
  - Email validation (format and existence checking)
  - Error handling for invalid emails, user not found, and rate limiting
  - Success messages with automatic redirect to login
  - Particle animation background for forgot password page
  
- **[register.html](register.html)**: Registration page that handles:
  - New user account creation with Firebase
  - Email and password validation
  - Password confirmation verification
  - Firebase `createUserWithEmailAndPassword()` integration
  - Error handling for existing emails and weak passwords
  
- **[category-links.js](category-links.js)**: Navigation handler that handles:
  - Dynamic category navigation
  - Product filtering by category

**Usage**: The `app.js` file is linked in HTML files to provide interactivity and enhance user experience across all pages.

## 📝 Footer Component

A reusable, fully customizable footer component is included in the `footer/` folder:

- **[footer/footer.css](footer/footer.css)**: Contains all footer styling with CSS variables for easy customization:
  - Brand colors (gold accent, dark background)
  - Typography variables (Playfair Display & DM Sans fonts)
  - Responsive design for mobile devices
  
- **[footer.html](footer.html)**: Standalone footer demo page with:
  - Logo and tagline section
  - Help column with shipping, returns, and FAQ links
  - Contact column with email, phone, and address
  - Copyright bar with legal links

The footer is fully integrated into [code.html](code.html) and can be easily customized by editing the CSS variables in `footer/footer.css`.

## 📞 Footer Details

- **Email**: hello@designthread.com
- **Phone**: +91 12345 67890
- **Address**: 42 Studio Lane, Hauz Khas, New Delhi, 110016

