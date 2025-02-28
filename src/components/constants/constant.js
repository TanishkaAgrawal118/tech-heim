import accessory from "../../../src/assets/accessories.svg";
import camera from "../../../src/assets/camera.svg";
import laptop from "../../../src/assets/laptop.png";
import laptop1 from '../../../src/assets/laptop1.svg'
import laptop2 from '../../../src/assets/laptop2.svg'
import laptop3 from '../../../src/assets/laptop1.svg'
import smartPhone from "../../../src/assets/phone.svg";
import game from "../../../src/assets/game.svg";
import smartWatch from "../../../src/assets/watch.svg";
import mouse from "../../../src/assets/mouse.svg";
import keyboard from "../../../src/assets/keyboard.svg";
import sliderWatch from "../../../src/assets/slider-smart-watch.svg";
import sliderLaptop from "../../../src/assets/slider-laptop.svg";
import sliderWatch2 from "../../../src/assets/slider-watch.png";
import newLaptop from "../../../src/assets/new-laptop.svg";
import newPhone from "../../../src/assets/newPhone.svg";
import apple from '../../../src/assets/apple.svg';
import canon from '../../../src/assets/canon.svg'
import brand from '../../../src/assets/brand.svg'
import sony from '../../../src/assets/sony.svg'
import lenovo from '../../../src/assets/lenovo.svg'
import samsung from '../../../src/assets/samsung.svg';
import sidebarLaptop from '../../../src/assets/sidebar-headphone.svg'
import sidebarMobile from '../../../src/assets/sidebarMobile.svg'
import sidebarTablet from '../../../src/assets/sidebar-tablet.svg'
import sidebarWatch from '../../../src/assets/sidebar-watch.svg'
import sidebarCamera from '../../../src/assets/sidebar-camera.svg'
import sidebarAudio from '../../../src/assets/sidebar-headphone.svg'
import sidebarGames from '../../../src/assets/sidebar-games.svg'
import sidebarNetwork from '../../../src/assets/sidebar-network.svg'
import sidebarAccessory from '../../../src/assets/sidebar-devices.svg'

export const devices = [
  { device: "Accessories", image: accessory },
  { device: "Camera", image: camera },
  { device: "laptop", image: laptop },
  { device: "Smart Phone", image: smartPhone },
  { device: "Gaming", image: game },
  { device: "Smart Watch", image: smartWatch },
];
export const productsOnSale = [
  {
    id: 1,
    name: "Logitech G502 Gaming Mouse",
    image: mouse,
    originalPrice: 38.0,
    discountedPrice: 19.0,
    discount: "-50%",
  },
  {
    id: 2,
    name: "NPET K10 Wired Gaming Keyboard, LED Backlit",
    image: keyboard,
    originalPrice: 49.0,
    discountedPrice: 34.3,
    discount: "-30%",
  },
  {
    id: 3,
    name: "Apple Watch Series 7 (GPS, 41MM)",
    image: sliderWatch,
    originalPrice: 289.0,
    discountedPrice: 231.2,
    discount: "-20%",
  },
  {
    id: 4,
    name: "Apple 2022 MacBook Air (8GB RAM, 256GB SSD)",
    image: sliderLaptop,
    originalPrice: 950.22,
    discountedPrice: 712.66,
    discount: "-25%",
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch Titan",
    image: sliderWatch2,
    originalPrice: 120.0,
    discountedPrice: 100.0,
    discount: "-17%",
  },
];

export const newProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro Max 256 GB",
    price: 930.9,
    image: newLaptop,
    rating: 4.5,
    colors: ["Silver", "Graphite", "Blue"],
  },
  {
    id: 2,
    name: "Blackmagic Design Camera 6K Pro",
    price: 2535.0,
    image: newPhone,
    rating: 4.8,
    colors: ["Black"],
  },
  {
    id: 3,
    name: "Samsung Galaxy S23 Ultra Cell Phone, 256 GB",
    price: 1018.0,
    image: newLaptop,
    rating: 4.7,
    colors: ["Lavender", "Black", "Silver"],
  },
  {
    id: 4,
    name: "VR VisionTech X1 (Canon EF)",
    price: 1399.0,
    image: newPhone,
    rating: 3.9,
    colors: ["White", "Black", "Silver"],
  },
];

export const topBrands = [
  {
    name: "Sony",
    logo: sony,
  },
  {
    name: "Samsung",
    logo: samsung, 
  },
  {
    name: "Canon",
    logo: canon,
  },
  {
    name: "Huawei",
    logo: brand,
  },
  {
    name: "Lenovo",
    logo: lenovo, 
  },
];

const tableData = [
  { id: 1, name: "John Doe", age: 29, email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", age: 34, email: "jane.smith@example.com" },
  { id: 3, name: "Alice Johnson", age: 25, email: "alice.johnson@example.com" },
  { id: 4, name: "Michael Brown", age: 40, email: "michael.brown@example.com" },
  { id: 5, name: "David Wilson", age: 45, email: "david.wilson@example.com" },
  { id: 6, name: "Emma Davis", age: 31, email: "emma.davis@example.com" },
  { id: 7, name: "Daniel Martinez", age: 27, email: "daniel.martinez@example.com" },
  { id: 8, name: "Sophia Anderson", age: 29, email: "sophia.anderson@example.com" },
  { id: 9, name: "Matthew Thomas", age: 36, email: "matthew.thomas@example.com" },
  { id: 10, name: "Olivia Taylor", age: 22, email: "olivia.taylor@example.com" },
  { id: 11, name: "Liam White", age: 33, email: "liam.white@example.com" },
  { id: 12, name: "Mia Harris", age: 28, email: "mia.harris@example.com" },
  { id: 13, name: "Noah Clark", age: 38, email: "noah.clark@example.com" },
  { id: 14, name: "Ava Lewis", age: 30, email: "ava.lewis@example.com" },
  { id: 15, name: "William Walker", age: 41, email: "william.walker@example.com" },
  { id: 16, name: "Isabella Allen", age: 26, email: "isabella.allen@example.com" },
  { id: 17, name: "James Young", age: 37, email: "james.young@example.com" },
  { id: 18, name: "Charlotte Hall", age: 24, email: "charlotte.hall@example.com" },
  { id: 19, name: "Benjamin King", age: 39, email: "benjamin.king@example.com" },
  { id: 20, name: "Amelia Wright", age: 32, email: "amelia.wright@example.com" },
  { id: 21, name: "Elijah Scott", age: 29, email: "elijah.scott@example.com" },
  { id: 22, name: "Harper Green", age: 35, email: "harper.green@example.com" },
  { id: 23, name: "Alexander Baker", age: 30, email: "alexander.baker@example.com" },
  { id: 24, name: "Evelyn Adams", age: 27, email: "evelyn.adams@example.com" },
  { id: 25, name: "Henry Nelson", age: 42, email: "henry.nelson@example.com" },
  { id: 26, name: "Grace Carter", age: 31, email: "grace.carter@example.com" },
  { id: 27, name: "Samuel Mitchell", age: 28, email: "samuel.mitchell@example.com" },
  { id: 28, name: "Scarlet Perez", age: 37, email: "scarlett.perez@example.com" },
  { id: 29, name: "Daniel Roberts", age: 33, email: "daniel.roberts@example.com" },
  { id: 30, name: "Ella Turner", age: 26, email: "ella.turner@example.com" },
];

export default tableData;


export const MenuItems = [
  {
    title: "Products",
    subItems: [
      { title: "Mobile Phones", icon: sidebarMobile },
      { title: "Laptops & Computers", icon: sidebarLaptop },
      { title: "Tablets & E-reader", icon: sidebarTablet  },
      { title: "Wearables", icon: sidebarWatch },
      { title: "Audio", icon: sidebarAudio},
      { title: "Cameras", icon: sidebarCamera },
      { title: "Gaming", icon: sidebarGames },
      { title: "Networking", icon: sidebarNetwork},
      { title: "Accessories", icon: sidebarAccessory },
    ],
  },
  { title: "Blog" },
  { title: "FAQ" },
  { title: "Contact us" },
];

export const dropdownProduct = [
  { title: "Mobile Phones", icon: sidebarMobile },
  { title: "Laptops & Computers", icon: sidebarLaptop },
  { title: "Tablets & E-reader", icon: sidebarTablet  },
  { title: "Wearables", icon: sidebarWatch },
  { title: "Audio", icon: sidebarAudio},
  { title: "Cameras", icon: sidebarCamera },
  { title: "Gaming", icon: sidebarGames },
  { title: "Networking", icon: sidebarNetwork},
  { title: "Accessories", icon: sidebarAccessory },
]

export const faqs = [
  {
    question: "Can I purchase products from Tech Heim using installment payments?",
    answer: "Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget.",
  },
  {
    question: "How can I engage with the magazine content on Tech Heim?",
    answer: "You can actively engage with the magazine content by leaving comments and participating in the question-and-answer section. Feel free to share your thoughts, ask questions, and interact with fellow tech enthusiasts in the community.",
  },
  {
    question: "Does Tech Heim offer a warranty on its products?",
    answer: "Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information.",
  },
  {
    question: "Is Tech Heim a secure platform for online shopping?",
    answer: "Yes, Tech Heim offers a secure shopping experience with strict data privacy measures in place to protect customer information.",
  },
  {
    question: "How can I get assistance with my purchase or any other inquiries?",
    answer: "If you need assistance with your purchase or have any questions, our dedicated customer support team is here to help. Contact us through our support page.",
  },
];


export const products = [
  {
    id: 1,
    name: "Apple MacBook Air 15\" w/ Touch ID",
    price: 2490.87,
    discount: "12%",
    rating: 4.9,
    stock: 10,
    image: laptop,
    description: "A powerful and lightweight MacBook with Touch ID and Retina display.",
    details: {
      brand: "Apple",
      model: "MacBook Air 15",
      screenSize: "15 inches",
      hardDiskSize: "512 GB SSD",
      processor: "Apple M2 chip",
      graphics: "Apple 10-core GPU",
      display: "15-inch LED-backlit Retina display",
      batteryLife: "Up to 18 hours",
      weight: "3.3 lbs (1.5 kg)",
      color: "Silver, Space Grey",
      includedItems: "67W USB-C Power Adapter, USB-C Charge Cable (2m)",
    }
  },
  {
    id: 2,
    name: "Apple MacBook Air 15\" (2023) - Space Grey",
    price: 2490.87,
    discount: "12%",
    rating: 4.9,
    stock: 15,
    image: laptop1,
    description: "Latest MacBook Air with M2 chip and enhanced battery life.",
    details: {
      brand: "Apple",
      model: "MacBook Air 15 (2023)",
      screenSize: "15 inches",
      hardDiskSize: "512 GB SSD",
      processor: "Apple M2 chip",
      graphics: "Apple 10-core GPU",
      display: "Liquid Retina, True Tone",
      batteryLife: "Up to 18 hours",
      weight: "3.3 lbs (1.5 kg)",
      color: "Space Grey",
      includedItems: "67W USB-C Power Adapter, USB-C Charge Cable (2m)",
    }
  },
  {
    id: 3,
    name: "Apple MacBook Air 13\" w/ Touch ID",
    price: 1299.00,
    discount: "10%",
    rating: 4.8,
    stock: 20,
    image: laptop2,
    description: "Portable MacBook Air 13-inch model with M1 chip.",
    details: {
      brand: "Apple",
      model: "MacBook Air 13",
      screenSize: "13.3 inches",
      hardDiskSize: "256 GB SSD",
      processor: "Apple M1 chip",
      graphics: "Apple 8-core GPU",
      display: "13.3-inch Retina with True Tone",
      batteryLife: "Up to 15 hours",
      weight: "2.8 lbs (1.29 kg)",
      color: "Gold, Silver, Space Grey",
      includedItems: "30W USB-C Power Adapter, USB-C Charge Cable (2m)",
    }
  },
  {
    id: 4,
    name: "Apple MacBook Pro 16\" w/ M2 Chip",
    price: 3165.10,
    discount: "12%",
    rating: 4.7,
    stock: 5,
    image: laptop3,
    description: "High-performance MacBook Pro with M2 chip and Liquid Retina display.",
    details: {
      brand: "Apple",
      model: "MacBook Pro 16",
      screenSize: "16 inches",
      hardDiskSize: "1 TB SSD",
      processor: "Apple M2 Pro chip",
      graphics: "Apple 16-core GPU",
      display: "16-inch Liquid Retina XDR",
      batteryLife: "Up to 20 hours",
      weight: "4.7 lbs (2.1 kg)",
      color: "Space Grey, Silver",
      includedItems: "140W USB-C Power Adapter, USB-C to MagSafe 3 Cable",
    }
  },
  {
    id: 5,
    name: "iPhone 13 Pro Max",
    price: 1099.99,
    discount: "15%",
    rating: 4.9,
    stock: 30,
    image: laptop1,
    description: "Apple's flagship smartphone with ProMotion display and triple-lens camera.",
    details: {
      brand: "Apple",
      model: "iPhone 13 Pro Max",
      screenSize: "6.7 inches",
      storage: "256 GB",
      processor: "A15 Bionic chip",
      display: "Super Retina XDR",
      batteryLife: "Up to 28 hours video playback",
      weight: "8.46 oz (240g)",
      color: "Sierra Blue, Gold, Silver, Graphite",
      includedItems: "USB-C to Lightning Cable",
    }
  },
  {
    id: 6,
    name: "AirPods Pro (2nd Gen)",
    price: 249.99,
    discount: "20%",
    rating: 4.8,
    stock: 50,
    image: laptop,
    description: "Noise-canceling AirPods Pro with improved sound quality.",
    details: {
      brand: "Apple",
      model: "AirPods Pro (2nd Gen)",
      batteryLife: "Up to 6 hours (24 hours with case)",
      noiseCancellation: "Active Noise Cancellation",
      weight: "0.19 oz (5.4g) per bud",
      color: "White",
      includedItems: "MagSafe Charging Case, USB-C Cable",
    }
  },
  {
    id: 7,
    name: "Apple MacBook Air 15\" (2023) - Space Grey",
    price: 2490.87,
    discount: "12%",
    rating: 4.9,
    stock: 15,
    image: laptop1,
    description: "Latest MacBook Air with M2 chip and enhanced battery life.",
    details: {
      brand: "Apple",
      model: "MacBook Air 15 (2023)",
      screenSize: "15 inches",
      hardDiskSize: "512 GB SSD",
      processor: "Apple M2 chip",
      graphics: "Apple 10-core GPU",
      display: "Liquid Retina, True Tone",
      batteryLife: "Up to 18 hours",
      weight: "3.3 lbs (1.5 kg)",
      color: "Space Grey",
      includedItems: "67W USB-C Power Adapter, USB-C Charge Cable (2m)",
    }
  },
  {
    id: 8,
    name: "Apple MacBook Air 13\" w/ Touch ID",
    price: 1299.00,
    discount: "10%",
    rating: 4.8,
    stock: 20,
    image: laptop2,
    description: "Portable MacBook Air 13-inch model with M1 chip.",
    details: {
      brand: "Apple",
      model: "MacBook Air 13",
      screenSize: "13.3 inches",
      hardDiskSize: "256 GB SSD",
      processor: "Apple M1 chip",
      graphics: "Apple 8-core GPU",
      display: "13.3-inch Retina with True Tone",
      batteryLife: "Up to 15 hours",
      weight: "2.8 lbs (1.29 kg)",
      color: "Gold, Silver, Space Grey",
      includedItems: "30W USB-C Power Adapter, USB-C Charge Cable (2m)",
    }
  },
  {
    id: 9,
    name: "Apple MacBook Pro 16\" w/ M2 Chip",
    price: 3165.10,
    discount: "12%",
    rating: 4.7,
    stock: 5,
    image: laptop3,
    description: "High-performance MacBook Pro with M2 chip and Liquid Retina display.",
    details: {
      brand: "Apple",
      model: "MacBook Pro 16",
      screenSize: "16 inches",
      hardDiskSize: "1 TB SSD",
      processor: "Apple M2 Pro chip",
      graphics: "Apple 16-core GPU",
      display: "16-inch Liquid Retina XDR",
      batteryLife: "Up to 20 hours",
      weight: "4.7 lbs (2.1 kg)",
      color: "Space Grey, Silver",
      includedItems: "140W USB-C Power Adapter, USB-C to MagSafe 3 Cable",
    }
  },
  {
    id: 10,
    name: "Apple iPad Pro 12.9\" (2023) - WiFi",
    price: 1199.99,
    discount: "10%",
    rating: 4.8,
    stock: 25,
    image: laptop,
    description: "Powerful iPad Pro with M2 chip and stunning Liquid Retina XDR display.",
    details: {
      brand: "Apple",
      model: "iPad Pro 12.9 (2023)",
      screenSize: "12.9 inches",
      storage: "512 GB",
      processor: "Apple M2 chip",
      display: "Liquid Retina XDR, ProMotion",
      batteryLife: "Up to 10 hours",
      weight: "1.5 lbs (682g)",
      color: "Space Grey, Silver",
      includedItems: "USB-C Charge Cable, 20W USB-C Power Adapter",
    }
},
{
    id: 11,
    name: "Apple Watch Series 9 GPS 45mm",
    price: 429.99,
    discount: "15%",
    rating: 4.7,
    stock: 40,
    image: laptop1,
    description: "Apple Watch Series 9 with advanced health tracking and always-on display.",
    details: {
      brand: "Apple",
      model: "Watch Series 9",
      screenSize: "45mm",
      batteryLife: "Up to 18 hours",
      weight: "1.37 oz (39g)",
      color: "Midnight, Starlight, Product(RED)",
      includedItems: "Magnetic Charging Cable",
      features: "ECG, Blood Oxygen, Fitness Tracking, Always-on Retina Display"
    }
},
{
    id: 12,
    name: "Apple TV 4K (3rd Gen)",
    price: 149.00,
    discount: "5%",
    rating: 4.6,
    stock: 60,
    image: laptop3,
    description: "Apple TV 4K with A15 Bionic chip and HDR support.",
    details: {
      brand: "Apple",
      model: "Apple TV 4K (3rd Gen)",
      storage: "128 GB",
      processor: "A15 Bionic chip",
      resolution: "4K HDR, Dolby Vision, HDR10+",
      weight: "7.5 oz (214g)",
      color: "Black",
      includedItems: "Siri Remote, Power Cord",
      connectivity: "WiFi 6, Ethernet, Thread support"
    }
}
];


export const BRANDS = ["Asus", "Acer", "Apple", "Dell"];

export const RAM_OPTIONS = ["32 GB", "16 GB", "12 GB", "8 GB"];

export const SCREEN_SIZES = [
  '13" - 13.9"',
  '14" - 14.9"',
  '15" - 15.9"',
  '16" - 16.9"',
];

export const PROCESSORS = [
  "Intel Core i5",
  "Intel Core i7",
  "Intel Core i9",
  "AMD Ryzen 9",
];

export const GPU_BRANDS = ["NVIDIA", "Intel", "AMD", "Apple"];

export const DRIVE_SIZES = ["512GB", "256GB", "64GB", "128GB"];
