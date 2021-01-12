//This is exporting our Strapi API URL for GET requests
//Hopefully have this set up with POST Requests in the future
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_test_F766095692BC367A";

/**
 * Given an image returl the URL
 * Works for local and deployed strapis
 * @param {any} image
 */

export const fromImageToUrl = (image) => {
  if (!image) {
    return "/vercel.svg";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
