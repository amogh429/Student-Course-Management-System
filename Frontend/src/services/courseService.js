import api from "./api";

export const getCourses = () => {
  return api.get("/courses");
};

export const createCourse = (courseData) => {
  return api.post("/courses", courseData);
};

export const updateCourse = (id, courseData) => {
  return api.put(`/courses/${id}`, courseData);
};

export const deleteCourse = (id) => {
  return api.delete(`/courses/${id}`);
};

