export const getApiStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Student Course Management System API",
  });
};
