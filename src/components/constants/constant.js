import accessory from "../../../src/assets/accessories.svg";
import camera from "../../../src/assets/camera.svg";
import laptop from "../../../src/assets/laptop.png";
import smartPhone from "../../../src/assets/phone.svg";
import game from "../../../src/assets/game.svg";
import smartWatch from "../../../src/assets/watch.svg";
import mouse from "../../../src/assets/mouse.svg";
import keyboard from "../../../src/assets/keyboard.svg";
import sliderWatch from "../../../src/assets/slider-smart-watch.svg";
import sliderLaptop from "../../../src/assets/slider-laptop.svg";
import sliderWatch2 from "../../../src/assets/slider-waatch.png";
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
    name: "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant",
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
    name: "Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)",
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
    name: "Apple",
    logo: brand,
  },
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
