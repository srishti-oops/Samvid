import axios from "axios";

const API = "https://samvid.onrender.com/api";

export async function analyzeDocument(file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(`${API}/analyze`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

    return response.data;
}