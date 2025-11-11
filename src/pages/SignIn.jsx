import React, { useEffect, useState } from "react";
import bg1 from "../../src/assets/signin/bg1.png"; // adjust path if your component lives elsewhere
// replace with your pizza image

const STORAGE_PREFIX = "myapp_user_"; // avoids colliding with other localStorage keys

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // clear messages when toggling between login/signup
    setError("");
    setSuccess("");
    setForm((f) => ({ ...f, password: "", confirmPassword: "" }));
  }, [isLogin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveUser = (user) => {
    try {
      localStorage.setItem(STORAGE_PREFIX + user.email, JSON.stringify(user));
    } catch (err) {
      console.error("localStorage error", err);
      setError("Unable to save account. Make sure your browser allows localStorage.");
    }
  };

  const getUser = (email) => {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + email);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      console.error("localStorage parse error", err);
      return null;
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const email = form.email.trim().toLowerCase();
    const password = form.password;

    if (!email || !password) return setError("Please enter email and password.");
    if (!validateEmail(email)) return setError("Please enter a valid email address.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");

    if (!isLogin) {
      // Signup flow
      if (!form.firstName.trim() || !form.lastName.trim())
        return setError("Please enter first and last name.");
      if (password !== form.confirmPassword) return setError("Passwords do not match.");

      if (getUser(email)) return setError("An account with this email already exists.");

      const user = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email,
        password, // NOTE: In production never store plain passwords in localStorage
        createdAt: new Date().toISOString(),
      };

      saveUser(user);
      setSuccess("Account created successfully. Please log in.");
      setIsLogin(true);
      setForm({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    } else {
      // Login flow
      const user = getUser(email);
      if (!user || user.password !== password) return setError("Invalid email or password.");
      setSuccess(`Welcome back, ${user.firstName}!`);
      // TODO: redirect or lift authentication state to parent component
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      
    >
      <div className="backdrop-blur-sm bg-white/80 shadow-xl rounded-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-semibold mb-1">{isLogin ? "Welcome Back" : "Create an Account"}</h1>
          <p className="text-sm text-gray-600 mb-4">{isLogin ? "Please login to continue" : "Sign up to get started"}</p>

          {error && <div className="mb-3 px-3 py-2 rounded bg-red-50 text-red-700 text-sm">{error}</div>}
          {success && <div className="mb-3 px-3 py-2 rounded bg-green-50 text-green-700 text-sm">{success}</div>}

          <form onSubmit={handleSubmit} className="space-y-3">
            {!isLogin && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-xs text-gray-600">First name</span>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="First name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs text-gray-600">Last name</span>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Last name"
                  />
                </label>
              </div>
            )}

            <label className="block">
              <span className="text-xs text-gray-600">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="you@example.com"
                aria-label="email"
              />
            </label>

            <label className="block">
              <span className="text-xs text-gray-600">Password</span>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your password"
                aria-label="password"
              />
            </label>

            {!isLogin && (
              <label className="block">
                <span className="text-xs text-gray-600">Confirm Password</span>
                <input
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Repeat password"
                />
              </label>
            )}

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin((s) => !s)}
              className="text-red-600 underline ml-1"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </div>
        </div>

        {/* Right: Image (hidden on small screens) */}
        <div className="hidden md:block md:w-1/2">
          <img src={bg1} alt="Pizza" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
