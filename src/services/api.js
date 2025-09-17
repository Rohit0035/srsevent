import axios from "axios";
import API_CONFIG from "../config/apiConfig";

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// other APIs...

export const postEnquiry = data => api.post("/submit-contact-us-form", data);
export const getBlogs = () => api.get("/get-blogs");
export const getBlogDetails = slug => api.get(`get-blog-details/${slug}`);
export const getGalleryCategories = () => api.get("/get-gallery-categories");
export const getGallery = () => api.get("/get-galleries");

export default api;
