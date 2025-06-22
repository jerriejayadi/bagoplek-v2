import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export interface LocationProps {
  title: string;
  address: string;
  phone: string;
  city: string;
  googleMapsURL: string;
  locationImage: string;
  embedUrl: string;
}

export const LOCATION_LIST: LocationProps[] = [
  {
    title: "Bagoplek Office",
    address: "Jl. Mojo No.11B, Bareng, Malang",
    phone: "+62 895 1539 9006",
    city: "Malang",
    googleMapsURL: "https://maps.app.goo.gl/gCkSrh58QtXe5JgL9",
    locationImage: "/location/Mojo.jpg",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2128044666783!2d112.6143422!3d-7.9769442999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883539578065f%3A0x3254e7f3f1e4831e!2sBagoplek%20-%20Office%20(Central%20Kitchen)!5e0!3m2!1sen!2sid!4v1728703675911!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Pasar Oro Oro Dowo Malang",
    address: "Jl. Guntur No.20, Oro-oro Dowo, Malang",
    phone: "+62 895 1539 9007",
    city: "Malang",
    googleMapsURL: "https://maps.app.goo.gl/FNsMmEA8oZf18TUb7",
    locationImage: "/location/OroOroDowo.JPG",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15805.174545231725!2d112.6280407!3d-7.9685754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629752adc2215%3A0x3da67ad2720f10f5!2sBagoplek%20-%20pasar%20oro%20oro%20dowo!5e0!3m2!1sen!2sid!4v1730083351915!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Superindo Bendungan Sutami Malang",
    address: "Jl. Bendungan Sutami, Gading Kasri, Malang",
    phone: "+62 895 1539 9006",
    city: "Malang",
    googleMapsURL: "https://maps.app.goo.gl/7GmBFNU3JNvGBizL8",
    locationImage: "/location/Sutami3.JPG",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3444649982657!2d112.61117370876815!3d-7.963308392028366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78832847b508af%3A0x795aa2530d95767d!2sSuperindo%20Bendungan%20Sutami%20Malang!5e0!3m2!1sen!2sid!4v1730083453129!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Superindo Langsep Malang",
    address: "Jl. Raya Langsep No.5, Bareng, Malang",
    phone: "+62 895 1539 9006",
    city: "Malang",
    googleMapsURL: "https://maps.app.goo.gl/yLSD7J6GSZm85EGh8",
    locationImage: "",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15804.941466952812!2d112.6130895!3d-7.9746092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883754b4ec469%3A0xcc34a51f527fc8bd!2sBagoplek%20-%20Superindo%20Langsep!5e0!3m2!1sen!2sid!4v1730085966418!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Lai-Lai Express",
    address: "Jl. Puncak Mandala no. 19 Malang",
    phone: "+62 895 1539 9006",
    city: "Malang",
    googleMapsURL: "https://maps.app.goo.gl/9PoUcpp1tUD8fkHL7",
    locationImage: "/location/LaiLai.JPG",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3259198495343!2d112.60190820876824!3d-7.965230492026447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788352d754fd11%3A0x36471d5010ee3e6b!2sBagoplek%20-%20Lai%20Lai%20Express!5e0!3m2!1sen!2sid!4v1730086007844!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Indomaret Ahmad Yani",
    address: "Jl. Ahmad Yani, Ngaglik, Batu",
    phone: "+62 895 1539 9006",
    city: "Batu",
    googleMapsURL: "https://maps.app.goo.gl/gBvLsWQRa2LmLNf97",
    locationImage: "/location/Batu.jpg",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.217015689267!2d112.52041230876674!3d-7.872346392117084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788708e4eeb85b%3A0xd1cbd82041e960a2!2sBagoplek%20-%20Batu!5e0!3m2!1sen!2sid!4v1730086084120!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Citraland Fresh Market",
    address: "Jl. Taman Puspa Raya, Surabaya",
    phone: "+62 852 9878 2570",
    city: "Surabaya",
    googleMapsURL: "https://maps.app.goo.gl/AeKfjcKNzSH2zgvW9",
    locationImage: "/location/Surabaya.JPG",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.693872285857!2d112.64301600875821!3d-7.275632192701154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fdbf66b10c83%3A0xa1f01db494e731b2!2sBagoplek%20-%20Citraland!5e0!3m2!1sen!2sid!4v1730086047860!5m2!1sen!2sid&zoom=20",
  },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertEmbeddedToDirectMapURL(embedUrl: string) {
  // Extract latitude and longitude from the embed URL
  const latMatch = embedUrl.match(/!3d([-.\d]+)/);
  const lonMatch = embedUrl.match(/!2d([-.\d]+)/);
  const zoomMatch = embedUrl.match(/zoom=(\d+)/);

  // Check if latitude and longitude exist in the URL
  if (!latMatch || !lonMatch) return "Invalid embed URL";

  // Get latitude, longitude, and zoom level
  const latitude = latMatch[1];
  const longitude = lonMatch[1];
  const zoom = zoomMatch ? zoomMatch[1] : "15"; // Default to 15 if zoom isn't provided

  // Construct the direct Google Maps URL
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}`;
}

export const HERO_BANNER_LIST = [
  {
    alt: "Paket Wedding Bagoplek Untuk Acara Nikahan",
    src: "/images/hero-new/poster wedding web.jpg",
  },
  {
    alt: "Bagoplek Bakso Goreng Ayam Halal Malang Surabaya",
    src: "/images/hero-new/5.jpg",
  },
  {
    alt: "Bagoplek Bakso Goreng Ayam Sambal Halal Malang Surabaya",
    src: "/images/hero-new/3.jpg",
  },
  {
    alt: "Bagoplek Bakso Goreng Ayam Paketan Halal Malang Surabaya",
    src: "/images/hero-new/2.jpg",
  },
  {
    alt: "Bagoplek Bakso Goreng Ayam Malang Halal",
    src: "/images/hero-new/1.jpg",
  },
];
