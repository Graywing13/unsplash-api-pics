import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Ugoco_1MRO3kupipkFRSD1CBQNE-8pW9sT0wpoUkK64",
  },
});
