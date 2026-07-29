import axios from "axios";

const API = "http://localhost:8080/api";

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