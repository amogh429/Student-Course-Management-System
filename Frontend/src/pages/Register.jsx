import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <br />
          <br />

          <button type="submit" className="auth-btn">
            Register
          </button>
        </form>
        <div className="auth-footer">
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
