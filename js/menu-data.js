// Menu Data for Bodkhe Kaku Swaympak Ghar

const menuData = {
    thalis: [
        {
            name: "Maharashtrian Thali",
            price: 180,
            description: "Complete traditional meal with bhakri, seasonal vegetables, dal, rice, papad, and accompaniments",
            icon: "🍛"
        },
        {
            name: "Special Thali",
            price: 250,
            description: "Premium thali featuring special curries, puran poli, and traditional sweets",
            icon: "🥘"
        },
        {
            name: "Mini Thali",
            price: 120,
            description: "Light meal with essential items - perfect for a quick, satisfying lunch",
            icon: "🍽️"
        },
        {
            name: "Unlimited Thali",
            price: 300,
            description: "All-you-can-eat traditional feast with unlimited servings of authentic dishes",
            icon: "♾️"
        }
    ],
    
    mains: [
        {
            name: "Pitla Bhakri",
            price: 80,
            description: "Traditional gram flour curry with fresh jowar bhakri and homemade ghee",
            icon: "🫓"
        },
        {
            name: "Bharli Vangi",
            price: 100,
            description: "Baby eggplants stuffed with our authentic Maharashtrian masala blend",
            icon: "🍆"
        },
        {
            name: "Masale Bhaat",
            price: 110,
            description: "Aromatic spiced rice with vegetables, cashews, and traditional masala",
            icon: "🍚"
        },
        {
            name: "Varan Bhaat",
            price: 90,
            description: "Comfort food classic - dal and rice with tadka and pure ghee",
            icon: "🍲"
        },
        {
            name: "Kothimbir Vadi",
            price: 60,
            description: "Steamed coriander fritters, crispy on outside, soft inside",
            icon: "🌿"
        },
        {
            name: "Bhendi Fry",
            price: 80,
            description: "Crispy fried okra seasoned with traditional spices",
            icon: "🥬"
        },
        {
            name: "Alu Baingan",
            price: 70,
            description: "Potato and eggplant curry cooked in traditional style",
            icon: "🥔"
        },
        {
            name: "Zunka Bhakri",
            price: 75,
            description: "Dry gram flour preparation served with hot bhakri",
            icon: "🫓"
        }
    ],
    
    snacks: [
        {
            name: "Misal Pav",
            price: 60,
            description: "Spicy sprouted curry topped with farsan, served with soft pav",
            icon: "🌶️"
        },
        {
            name: "Thalipeeth",
            price: 45,
            description: "Multi-grain savory pancake served with butter and pickle",
            icon: "🥞"
        },
        {
            name: "Poha",
            price: 40,
            description: "Flattened rice preparation with peanuts and fresh curry leaves",
            icon: "🍚"
        },
        {
            name: "Sabudana Khichdi",
            price: 50,
            description: "Tapioca pearls cooked with peanuts and potatoes",
            icon: "⚪"
        },
        {
            name: "Puri Bhaji",
            price: 70,
            description: "Fried puris served with spiced potato curry",
            icon: "🫓"
        },
        {
            name: "Puran Poli",
            price: 50,
            description: "Sweet lentil stuffed flatbread served with pure ghee",
            icon: "🍯"
        },
        {
            name: "Shrikhand",
            price: 60,
            description: "Traditional strained yogurt dessert flavored with saffron and cardamom",
            icon: "🍨"
        },
        {
            name: "Kokam Sarbat",
            price: 30,
            description: "Refreshing traditional drink made from kokum fruit",
            icon: "🥤"
        },
        {
            name: "Buttermilk (Chaas)",
            price: 20,
            description: "Fresh homemade buttermilk with traditional tadka",
            icon: "🥛"
        }
    ]
};

// Function to create menu card HTML
function createMenuCard(item) {
    return `
        <div class="menu-card">
            <div class="menu-card-image">
                <span style="font-size: 4rem;">${item.icon}</span>
            </div>
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3>${item.name}</h3>
                    <span class="menu-card-price">₹${item.price}</span>
                </div>
                <p>${item.description}</p>
                <button class="order-btn" onclick="orderItem('${item.name}', ${item.price})">
                    Order Now
                </button>
            </div>
        </div>
    `;
}

// Function to load menu items
function loadMenu() {
    // Load Thalis
    const thalisGrid = document.getElementById('thalisGrid');
    if (thalisGrid) {
        thalisGrid.innerHTML = menuData.thalis.map(item => createMenuCard(item)).join('');
    }

    // Load Main Course
    const mainsGrid = document.getElementById('mainsGrid');
    if (mainsGrid) {
        mainsGrid.innerHTML = menuData.mains.map(item => createMenuCard(item)).join('');
    }

    // Load Snacks
    const snacksGrid = document.getElementById('snacksGrid');
    if (snacksGrid) {
        snacksGrid.innerHTML = menuData.snacks.map(item => createMenuCard(item)).join('');
    }
}

// Function to handle order
function orderItem(itemName, price) {
    const confirmOrder = confirm(`Order ${itemName} for ₹${price}?\n\nYou will be redirected to place your order.`);
    
    if (confirmOrder) {
        // In production, this would integrate with actual ordering system
        alert(`Great choice! ${itemName} added to cart.\n\nPlease call us at 08484 823 276 to complete your order.`);
        
        // Optional: Redirect to phone call
        // window.location.href = 'tel:08484823276';
        
        // Optional: Redirect to Zomato/Swiggy
        // window.open('https://www.zomato.com/aurangabad/bodkhe-kaku-swyampak-ghar-nirala-bazar', '_blank');
    }
}

// Initialize menu when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMenu);
} else {
    loadMenu();
}
