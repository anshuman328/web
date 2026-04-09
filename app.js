// ========================================
// E-COMMERCE APPLICATION - APP.JS
// ========================================
// This file contains all the JavaScript logic for the Design Thread e-commerce website
// Organized into logical sections for better understanding and maintenance

// Global variable to store selected size
let selectedSize = null;


// ========================================
// 1. DATABASE - PRODUCT INFORMATION
// ========================================
// Contains all product data for men's and women's categories
// Each product has: id, name, price, image, description, category, material, size, stock

const products = {
    men: {
        1: {
            name: "Classic Graphic T-Shirt",
            price: 499,
            image: "https://i.etsystatic.com/58142533/r/il/816eee/6721742702/il_fullxfull.6721742702_r14w.jpg",
            description: "Premium quality classic graphic t-shirt perfect for everyday wear. Made from soft and breathable cotton blend fabric.",
            category: "Men's Fashion",
            material: "100% Cotton",
            size: "XS, S, M, L, XL, XXL",
            stock: "In Stock"
        },
        2: {
            name: "McLaren F1 Oversized T-Shirt",
            price: 599,
            image: "https://motofanstore.com/hpeciai/6f7dc3adac4016b1cd1fc0239ce769cb/eng_pl_McLaren-F1-Mens-No-Limits-Oversized-T-Shirt-Black-78083_3.webp",
            description: "Stylish oversized t-shirt with premium McLaren F1 design. Perfect for car enthusiasts and fashion lovers.",
            category: "Men's Fashion",
            material: "Cotton Blend",
            size: "S, M, L, XL, XXL",
            stock: "In Stock"
        },
        3: {
            name: "MiG-21 Regular Black Tee",
            price: 449,
            image: "https://a47.in/cdn/shop/files/MIG-21REGULARBLACKTEE_2.jpg?v=1758808823&width=2134",
            description: "Military inspired black t-shirt with authentic MiG-21 design. Great casual wear for aviation fans.",
            category: "Men's Fashion",
            material: "100% Cotton",
            size: "M, L, XL, XXL",
            stock: "In Stock"
        },
        4: {
            name: "Don't Before You Die T-Shirt",
            price: 529,
            image: "https://www.thewalkdeal.com/cdn/shop/products/DON_TDIEBEFOREYOU_REDEAD.jpg?v=1640673351",
            description: "Bold red t-shirt with motivational design. Express yourself with this trendy statement piece.",
            category: "Men's Fashion",
            material: "Cotton Blend",
            size: "S, M, L, XL, XXL",
            stock: "In Stock"
        },
        5: {
            name: "Space Player Casual T-Shirt",
            price: 479,
            image: "https://shosaqualitees.com/cdn/shop/files/WvGk7EjB_4x_76b29fb3-9dd3-47d2-88ba-de30171bd1d4.jpg?v=1723890820&width=1946",
            description: "Casual space-themed t-shirt perfect for everyday adventures. Comfortable and stylish.",
            category: "Men's Fashion",
            material: "100% Cotton",
            size: "M, L, XL",
            stock: "In Stock"
        },
        6: {
            name: "Premium Design T-Shirt",
            price: 399,
            image: "https://img.drz.lazcdn.com/static/np/p/7e8d4e140657979a2d5f9b12996254da.png_720x720q80.png",
            description: "Minimalist design premium t-shirt. Perfect for a clean and sophisticated look.",
            category: "Men's Fashion",
            material: "Cotton Blend",
            size: "XS, S, M, L, XL",
            stock: "In Stock"
        },
        7: {
            name: "Space Player Premium Cotton Tee",
            price: 549,
            image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/t-shirt/k/l/r/m-mens-spaceplayer-theme-casual-premiun-cotton-tshirt-monotee-original-imahf9ak2hwta4ux.jpeg?q=70",
            description: "Premium quality t-shirt with space theme. Made from finest cotton for maximum comfort.",
            category: "Men's Fashion",
            material: "100% Premium Cotton",
            size: "S, M, L, XL, XXL",
            stock: "In Stock"
        },
        8: {
            name: "Messi Black T-Shirt",
            price: 579,
            image: "https://bongmade.com/cdn/shop/products/BM_Messi_Black_Male_T-Shirt.jpg?v=1668607232&width=1445",
            description: "Official Messi inspired black t-shirt for football fans. Show your support in style.",
            category: "Men's Fashion",
            material: "Cotton Blend",
            size: "M, L, XL, XXL",
            stock: "In Stock"
        },
        9: {
            name: "Sports Alpha T-Shirt",
            price: 429,
            image: "https://maxosports.com/cdn/shop/files/324.png?v=1765746081&width=1100",
            description: "Active wear sports t-shirt. Perfect for gym and outdoor activities.",
            category: "Men's Fashion",
            material: "Polyester Blend",
            size: "S, M, L, XL",
            stock: "In Stock"
        },
        10: {
            name: "Astronaut Space T-Shirt",
            price: 489,
            image: "https://rukminim2.flixcart.com/image/480/580/xif0q/t-shirt/s/9/h/xl-006-astronaut-original-imagjyxdfehynhbf.jpeg?q=90",
            description: "Cool astronaut themed t-shirt for space enthusiasts. Perfect casual wear.",
            category: "Men's Fashion",
            material: "100% Cotton",
            size: "M, L, XL, XXL",
            stock: "In Stock"
        },
        11: {
            name: "Panda Yellow T-Shirt",
            price: 439,
            image: "https://www.thewalkdeal.com/cdn/shop/products/Panda_Yellow_f3881f4c-73f4-4ca9-a3fd-0c7ee3bbf511.jpg?v=1665743864",
            description: "Fun and playful panda design on yellow t-shirt. Great for casual outings.",
            category: "Men's Fashion",
            material: "Cotton Blend",
            size: "S, M, L, XL",
            stock: "In Stock"
        },
        12: {
            name: "Lewis Red T-Shirt",
            price: 509,
            image: "https://the13store.in/cdn/shop/files/LewisRed-2.jpg?v=1734875969",
            description: "Bold red t-shirt with classic Lewis design. Make a statement with this piece.",
            category: "Men's Fashion",
            material: "100% Cotton",
            size: "M, L, XL, XXL",
            stock: "In Stock"
        }
    },
    women: {
        1: {
            name: "Naruto Black Couple T-Shirts",
            price: 599,
            image: "https://thalasiknitfab.com/cdn/shop/files/NARUTOBLACKCOUPLETSHIRTS_1_600x.progressive.png.jpg?v=1722254209",
            description: "Matching couple t-shirts with Naruto design. Perfect for couples who love anime.",
            category: "Women's Fashion",
            material: "100% Cotton",
            size: "XS, S, M, L, XL",
            stock: "In Stock"
        },
        2: {
            name: "Premium Women's T-Shirt",
            price: 449,
            image: "https://imagescdn.pantaloons.com/img/app/product/9/996084-13303102.jpg?auto=format&w=450",
            description: "Elegant and comfortable premium women's t-shirt. Perfect for everyday wear.",
            category: "Women's Fashion",
            material: "Cotton Blend",
            size: "XS, S, M, L, XL, XXL",
            stock: "In Stock"
        },
        3: {
            name: "Green Women's Model T-Shirt",
            price: 479,
            image: "https://assets.ajio.com/medias/sys_master/root/20231030/7ddV/653f8587ddf77915196281e4/-473Wx593H-466758117-green-MODEL.jpg",
            description: "Fresh green t-shirt for modern women. Comfortable fit and trendy design.",
            category: "Women's Fashion",
            material: "100% Cotton",
            size: "XS, S, M, L, XL",
            stock: "In Stock"
        },
        4: {
            name: "Puma Ultrabreathe Women's Tee",
            price: 699,
            image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/527621/69/mod01/fnd/IND/fmt/png/Train-All-Day-Essential-Women's-Ultrabreathe-Tee",
            description: "Professional grade women's sports tee by Puma. Perfect for active lifestyle.",
            category: "Women's Fashion",
            material: "Polyester Blend",
            size: "XS, S, M, L, XL",
            stock: "In Stock"
        },
        5: {
            name: "Biba Women's Blue T-Shirt",
            price: 549,
            image: "https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw57890fe1/images/ss25/shrt21360ss25whtblu_1.jpg?sw=502&sh=753&q=100&strip=false",
            description: "Stylish blue t-shirt from Biba collection. Great for casual and semi-formal wear.",
            category: "Women's Fashion",
            material: "Cotton Blend",
            size: "XS, S, M, L, XL, XXL",
            stock: "In Stock"
        },
        6: {
            name: "Sunflower Print T-Shirt",
            price: 429,
            image: "https://assets.prettysucks.com/products/3816/t-shirt-with-sunflower-back-print-2623-xlarge.jpg",
            description: "Beautiful sunflower print t-shirt. Perfect for spring and summer season.",
            category: "Women's Fashion",
            material: "100% Cotton",
            size: "S, M, L, XL",
            stock: "In Stock"
        },
        7: {
            name: "Women's Casual Graphic Tee",
            price: 399,
            image: "https://5.imimg.com/data5/SELLER/Default/2024/6/430057510/PZ/RR/GD/218526040/1r5a5183-1000x1000.jpg",
            description: "Casual and comfortable graphic t-shirt for everyday styling.",
            category: "Women's Fashion",
            material: "Cotton Blend",
            size: "XS, S, M, L, XL",
            stock: "In Stock"
        },
        8: {
            name: "Oversized Style Women's Shirt",
            price: 579,
            image: "https://parade.com/.image/w_2560,q_auto:good,c_fill,ar_4:3,g_xy_center,x_4014,y_1366/ODowMDAwMDAwMDAwODEwMDMz/how-to-style-oversized-shirt.jpg?arena_f_auto",
            description: "Trendy oversized shirt perfect for modern women. Comfortable and stylish.",
            category: "Women's Fashion",
            material: "100% Cotton",
            size: "XS, S, M, L, XL, XXL",
            stock: "In Stock"
        },
        9: {
            name: "Off-White Women's T-Shirt",
            price: 459,
            image: "https://assets.ajio.com/medias/sys_master/root/20240924/lzde/66f29851260f9c41e8217681/-473Wx593H-469681034-offwhite-MODEL.jpg",
            description: "Elegant off-white t-shirt for a clean and sophisticated look.",
            category: "Women's Fashion",
            material: "Cotton Blend",
            size: "XS, S, M, L, XL",
            stock: "In Stock"
        },
        10: {
            name: "Stylish Shop Women's Tee",
            price: 389,
            image: "https://images.stylishop.com/cdn-cgi/image/format=avif/media/catalog/product/7023543520/images/7023543520_3.jpg?v=1",
            description: "Modern and stylish women's t-shirt from latest collection.",
            category: "Women's Fashion",
            material: "100% Cotton",
            size: "XS, S, M, L, XL, XXL",
            stock: "In Stock"
        },
        11: {
            name: "Premium Women's Art Tee",
            price: 519,
            image: "https://www.altart.in/cdn/shop/files/Model2_4b50fe4e-7f2d-43a3-8792-f8a6f2189a9a.png?v=1755868606",
            description: "Artistic design premium t-shirt for creative women. Stand out with this piece.",
            category: "Women's Fashion",
            material: "Cotton Blend",
            size: "S, M, L, XL, XXL",
            stock: "In Stock"
        },
        12: {
            name: "US Polo Women's T-Shirt",
            price: 649,
            image: "https://uspoloassn.in/cdn/shop/files/1_a3438a15-a762-4a52-81ed-99902f8bf4d6_500x.jpg?v=1751966976",
            description: "Premium US Polo Assn. t-shirt for women. Perfect for casual and smart casual wear.",
            category: "Women's Fashion",
            material: "100% Cotton",
            size: "XS, S, M, L, XL, XXL",
            stock: "In Stock"
        }
    }
};


// ========================================
// 2. UTILITY FUNCTIONS - DATA RETRIEVAL
// ========================================
// Functions to retrieve and manage product data

/**
 * Get product data from URL parameters
 * Extracts product ID and category from the current URL query string
 * Usage: Typically called on product detail pages
 * Returns: Product object if found, null if not found
 */
function getProductData() {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');           // Get product ID from URL
    const category = params.get('cat');           // Get category from URL (men/women)
    
    // Validate and retrieve product
    if (category && productId && products[category] && products[category][productId]) {
        return products[category][productId];
    }
    return null;
}


// ========================================
// 3. DOM MANIPULATION FUNCTIONS
// ========================================
// Functions to update the DOM and display product information

/**
 * Display product details on the page
 * Updates all product information elements with data from the selected product
 * Called when the page loads
 */
function displayProductDetails(product) {
    // Update product image
    document.getElementById('productImage').src = product.image;
    
    // Update product name
    document.getElementById('productName').textContent = product.name;
    
    // Update product price
    document.getElementById('productPrice').textContent = product.price;
    
    // Update product description
    document.getElementById('productDescription').textContent = product.description;
    
    // Update product category
    document.getElementById('productCategory').textContent = product.category;
    
    // Update product material
    document.getElementById('productMaterial').textContent = product.material;
    
    // Update product size options
    document.getElementById('productSize').textContent = product.size;
    
    // Update stock status
    document.getElementById('productStock').textContent = product.stock;
    
    // Update page title
    document.title = product.name + " - Design Thread";
}


// ========================================
// 4. CART FUNCTIONS - SHOPPING CART OPERATIONS
// ========================================
// Functions to handle shopping cart operations

/**
 * Add product to shopping cart
 * Retrieves selected quantity and product information
 * Displays confirmation message to user
 */
function addToCart() {
    // Get selected size
    if (!selectedSize) {
        alert("Please select a size before adding to cart!");
        return;
    }
    
    // Get selected quantity from input field
    const quantity = document.getElementById('quantity').value;
    
    // Get current product data
    const product = getProductData();
    
    // Verify product exists and add to cart
    if (product) {
        // Show confirmation alert with size and quantity
        alert(`Added ${quantity} ${product.name}(s) in size ${selectedSize} to cart!`);
        
        // TODO: Future enhancement - Save to actual cart system
        // This could save to localStorage, send to server, or update cart UI
    } else {
        // Show error if product not found
        alert("Product not found. Please try again.");
    }
}


// ========================================
// 5. EVENT LISTENERS & INITIALIZATION
// ========================================
// Sets up event handlers and initializes the page

/**
 * Initialize size selection buttons
 * Adds click event listeners to all size buttons
 */
function initializeSizeSelection() {
    const sizeButtons = document.querySelectorAll('.size-btn');
    
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Store selected size
            selectedSize = this.getAttribute('data-size');
        });
    });
}

/**
 * Initialize page on load
 * Loads product details when the page first loads (on product detail pages)
 */
window.addEventListener('load', () => {
    const product = getProductData();
    if (product) {
        displayProductDetails(product);
        // Initialize size selection after product details are loaded
        initializeSizeSelection();
    } else {
        console.log("No product data found in URL parameters");
    }
});