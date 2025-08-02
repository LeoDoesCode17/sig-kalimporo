"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginSchema, LoginFormData } from "@/schemas/loginSchema";
import { login } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<LoginFormData>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<LoginFormData> = {};
      result.error.issues.forEach((err) => {
        const fieldName = err.path[0] as keyof LoginFormData;
        fieldErrors[fieldName] = err.message;
      });
      setFormErrors(fieldErrors);
      return;
    }

    setFormErrors({});
    setLoading(true);
    try {
      const user = await login(result.data.email, result.data.password);
      console.log("User logged in:", user);
      router.replace("/admin/dashboard");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setFormErrors({
        email:
          "Login gagal. Cek kembali email dan password, pastikan koneksi internet terhubung.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hero-img.jpg')", // Replace with your image path
        }}
      />

      {/* Login form */}
      <div className="relative z-10 w-full max-w-md bg-black/70 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Masuk Admin
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <label className="text-white text-sm font-semibold">
            Email
            <input
              name="email"
              type="email"
              className={`mt-1 w-full px-4 py-2 rounded-md bg-[#121619] text-white border ${
                formErrors.email ? "border-red-500" : "border-[#2f3539]"
              } focus:outline-none focus:ring-2 focus:ring-[#A29A69]`}
              placeholder="admin@kalimporo.com"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
            )}
          </label>

          {/* Password */}
          <label className="text-white text-sm font-semibold relative">
            Kata Sandi
            <div className="mt-1 relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className={`w-full px-4 py-2 rounded-md bg-[#121619] text-white border ${
                  formErrors.password ? "border-red-500" : "border-[#2f3539]"
                } focus:outline-none focus:ring-2 focus:ring-[#A29A69] pr-10`}
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {formErrors.password && (
              <p className="text-red-400 text-sm mt-1">{formErrors.password}</p>
            )}
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-2 font-semibold py-2 rounded-md transition ${
              loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#A29A69] hover:bg-[#918a60] text-[#121619]"
            }`}
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-6">
          Belum punya akun? Hubungi admin desa.
        </p>
      </div>
    </div>
  );
}
  