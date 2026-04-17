const CLOUD_NAME = import.meta.env.CLOUDINARY_URL;
const BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL;

/**
 * @param {string} publicId - The ID/path of the image in Cloudinary
 * @param {string} transformations - Optional scaling or effects
 */
export const getCloudinaryUrl = (publicId, transformations = 'w_500,c_limit,f_auto,q_auto') => {
  // If the URL in .env already ends in /upload/, we just append transformations and ID
  return `${BASE_URL}${transformations}/${publicId}`;
};