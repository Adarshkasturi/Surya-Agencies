// Configuration file for Surya Agencies App
// Update these values according to your business needs

const CONFIG = {
    // Company Information
    companyName: "Surya Agencies",
    companyTagline: "Your Trusted Medicine Partner",
    
    // WhatsApp Configuration
    whatsappNumber: "919391045712", // Replace with your actual WhatsApp business number
    whatsappMessage: {
        header: "🏥 SURYA AGENCIES - MEDICINE ORDER 🏥",
        footer: "Please confirm availability and pricing.\nThank you! 🙏"
    },
    
    // App Settings
    currency: "₹", // Indian Rupee symbol
    maxCartItems: 50,
    
    // Notification Settings
    notificationDuration: 3000, // milliseconds
    
    // Sample Schemes (for future use)
    schemes: [
        "Buy 1 Get 1 Free",
        "Buy 2 Get 1 Free", 
        "Buy 3 Get 1 Free",
        "Buy 3 Get 2 Free",
        "Buy 4 Get 1 Free",
        "Buy 5 Get 2 Free",
        "No Special Offer"
    ]
};

// Export configuration (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
