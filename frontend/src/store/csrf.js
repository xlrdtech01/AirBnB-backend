import Cookies from "js-cookie";

// Use environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL;

export async function csrfFetch(path, options = {}) {
  // Set default options
  options.method = options.method || "GET";
  options.headers = options.headers || {};
  options.credentials = 'include';  // Important for CORS with cookies

  // Set content type for non-GET requests
  if (options.method.toUpperCase() !== "GET") {
    options.headers["Content-Type"] = options.headers["Content-Type"] || "application/json";
    options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
  }

  // Build the full URL
  const url = path.startsWith('http') ? path : `${API_URL}${path}`;

  const res = await window.fetch(url, options);

  // Handle errors
  if (res.status >= 400) throw res;
  return res;
}

export function restoreCSRF() {
  return csrfFetch('/api/csrf/restore');
}
