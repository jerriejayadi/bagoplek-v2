import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertEmbeddedToDirectMapURL(embedUrl:string) {
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
