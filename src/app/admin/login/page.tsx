"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Icons for visibility toggle

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ Toggle state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1C2226] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Masuk Admin</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email Input */}
          <label className="text-white text-sm font-semibold">
            Email
            <input
              type="email"
              required
              className="mt-1 w-full px-4 py-2 rounded-md bg-[#121619] text-white border border-[#2f3539] focus:outline-none focus:ring-2 focus:ring-[#A29A69]"
              placeholder="admin@kalimporo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* Password Input with Toggle */}
          <label className="text-white text-sm font-semibold relative">
            Kata Sandi
            <div className="mt-1 relative">
              <input
                type={showPassword ? "text" : "password"} // ✅ Toggle input type
                required
                className="w-full px-4 py-2 rounded-md bg-[#121619] text-white border border-[#2f3539] focus:outline-none focus:ring-2 focus:ring-[#A29A69] pr-10"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Toggle button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 bg-[#A29A69] hover:bg-[#918a60] text-[#121619] font-semibold py-2 rounded-md transition"
          >
            Masuk
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-6">
          Belum punya akun? Hubungi admin desa.
        </p>
      </div>
    </div>
  );
}
