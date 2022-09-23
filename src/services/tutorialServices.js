import apiClient from "@/services/services.js";

export default {
  getAll() {
    return apiClient.get("/tutorials");
  },
  get(id) {
    return apiClient.get(`/tutorials/${id}`);
  },
  create(data) {
    return apiClient.post("/tutorials", data);
  },
  update(id, data) {
    return apiClient.put(`/tutorials/${id}`, data);
  },
  delete(id) {
    return apiClient.delete(`/tutorials/${id}`);
  },
  deleteAll() {
    return apiClient.delete(`/tutorials`);
  },
  findByTitle(title) {
    return apiClient.get(`/tutorials?title=${title}`);
  }
}