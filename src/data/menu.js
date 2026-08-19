export const menu = {
  coffee: [
    { id: 1, name: "Signature Latte", desc: "Smooth espresso, silky milk, and a touch of house sweetness.", price: "₹220", popular: true },
    { id: 2, name: "Cold Brew", desc: "Slow-brewed overnight, chilled and impossibly smooth.", price: "₹200", popular: false },
    { id: 3, name: "Espresso Tonic", desc: "Bright, sparkling and unexpectedly refreshing.", price: "₹210", popular: true },
    { id: 4, name: "Mocha", desc: "Rich chocolate meets bold espresso.", price: "₹230", popular: false },
    { id: 5, name: "Flat White", desc: "Double ristretto with velvety microfoam.", price: "₹190", popular: false },
    { id: 6, name: "Cortado", desc: "Equal parts espresso and warm milk.", price: "₹180", popular: false },
  ],
  breakfast: [
    { id: 1, name: "Avocado Toast", desc: "Sourdough, smashed avocado, chilli flakes, poached egg.", price: "₹320", popular: true },
    { id: 2, name: "Eggs Benedict", desc: "Toasted muffin, ham, poached eggs, hollandaise.", price: "₹350", popular: false },
    { id: 3, name: "Granola Bowl", desc: "House granola, seasonal fruit, Greek yoghurt, honey.", price: "₹280", popular: false },
    { id: 4, name: "French Toast", desc: "Brioche, maple syrup, fresh berries, whipped cream.", price: "₹310", popular: true },
  ],
  smallPlates: [
    { id: 1, name: "Bruschetta", desc: "Toasted ciabatta, tomato, basil, aged balsamic.", price: "₹240", popular: false },
    { id: 2, name: "Cheese Board", desc: "Seasonal selection, crackers, fig jam, walnuts.", price: "₹420", popular: true },
    { id: 3, name: "Soup of the Day", desc: "Ask your server for today's selection.", price: "₹220", popular: false },
    { id: 4, name: "Garlic Bread", desc: "Toasted sourdough, herb butter, sea salt.", price: "₹180", popular: false },
  ],
  mains: [
    { id: 1, name: "Pasta Arrabbiata", desc: "Penne, spicy tomato sauce, fresh basil, parmesan.", price: "₹380", popular: true },
    { id: 2, name: "Margherita Pizza", desc: "San Marzano tomato, fresh mozzarella, basil.", price: "₹420", popular: false },
    { id: 3, name: "Grilled Chicken Sandwich", desc: "Sourdough, grilled chicken, lettuce, aioli, pickles.", price: "₹360", popular: true },
    { id: 4, name: "Caesar Salad", desc: "Romaine, house dressing, croutons, parmesan.", price: "₹320", popular: false },
    { id: 5, name: "Classic Burger", desc: "Beef patty, cheddar, caramelised onion, brioche bun.", price: "₹440", popular: false },
  ],
  desserts: [
    { id: 1, name: "Cheesecake", desc: "New York style, berry compote, graham crust.", price: "₹280", popular: true },
    { id: 2, name: "Chocolate Brownie", desc: "Warm, fudgy, served with vanilla ice cream.", price: "₹240", popular: true },
    { id: 3, name: "Tiramisu", desc: "Classic Italian, espresso-soaked, mascarpone cream.", price: "₹290", popular: false },
    { id: 4, name: "Croissant", desc: "Buttery, flaky, baked fresh daily.", price: "₹160", popular: false },
  ],
  beverages: [
    { id: 1, name: "Fresh Lemonade", desc: "House-squeezed, mint, a hint of ginger.", price: "₹160", popular: false },
    { id: 2, name: "Iced Matcha Latte", desc: "Ceremonial grade matcha, oat milk, light sweetness.", price: "₹220", popular: true },
    { id: 3, name: "Sparkling Water", desc: "Still or sparkling, served chilled.", price: "₹80", popular: false },
    { id: 4, name: "Fresh Juice", desc: "Orange, watermelon, or seasonal blend.", price: "₹180", popular: false },
  ],
};

export const menuCategories = [
  { key: "coffee", label: "Coffee" },
  { key: "breakfast", label: "Breakfast" },
  { key: "smallPlates", label: "Small Plates" },
  { key: "mains", label: "Mains" },
  { key: "desserts", label: "Desserts" },
  { key: "beverages", label: "Beverages" },
];
