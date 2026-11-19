import api from "./api";

export const getEnrollments = () => {
  return api.get("/enrollments");
};

export const getMyEnrollments = () => {
    return api.get("/enrollments/my");
};

export const createEnrollment = (data) => {
  return api.post("/enrollments", data);
};

export const updateEnrollment = (id, data) => {
  return api.put(`/enrollments/${id}`, data);
};

export const deleteEnrollment = (id) => {
  return api.delete(`/enrollments/${id}`);
};
