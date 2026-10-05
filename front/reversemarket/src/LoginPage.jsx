import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDownUp, Mail, Lock, Eye, EyeOff, User } from "lucide-react";

const API_URL = "http://localhost:5000";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.7c4.3-4 6.9-9.9 6.9-17.1z"
      />
      <path
        fill="#FBBC05"
        d="M10.5 28.7c-.5-1.4-.8-2.9-.8-4.7s.3-3.3.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2.1 1.4-4.9 2.3-8.5 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z"
      />
    </svg>
  );
}

function Field({ id, label, icon: Icon, right, ...inputProps }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>

      <div className="mt-1.5 flex items-center gap-2 bg-white border border-slate-300 rounded-xl px-3.5 py-3 focus-within:border-purple-500">
        <Icon size={16} className="text-slate-400" />

        <input
          id={id}
          className="flex-1 text-sm text-slate-800 bg-transparent focus:outline-none"
          {...inputProps}
        />

        {right}
      </div>
    </div>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);

  const isRegister = mode === "register";

  function switchMode(next) {
    setMode(next);
    setError("");
    setNotice("");
  }

  function storeSession(data) {
    const user = data.user || {
      user_id: data.user_id,
      email: email.trim(),
    };

    sessionStorage.setItem(
      "user_id",
      String(data.user_id || user.user_id || ""),
    );

    sessionStorage.setItem("user", JSON.stringify(user));

    if (data.access_token) {
      sessionStorage.setItem("access_token", data.access_token);
    }

    // Go to dashboard after successful login/register
    navigate("/dashboard");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (isRegister && !name.trim()) {
      setError("Enter your full name.");
      return;
    }

    if (!email.trim() || !password.trim()) {
      setError("Enter an email and password.");
      return;
    }

    if (isRegister) {
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords don't match.");
        return;
      }
    }

    setError("");
    setNotice("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",

        // Allows Flask session cookie to be set
        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(
          isRegister
            ? {
                action: "register",
                name: name.trim(),
                email: email.trim(),
                password,
              }
            : {
                action: "login",
                email: email.trim(),
                password,
              },
        ),
      });

      const data = await response.json().catch(() => ({}));

      console.log("AUTH STATUS:", response.status);
      console.log("AUTH RESPONSE:", data);

      if (!response.ok) {
        setError(
          data.message ||
            data.error ||
            (isRegister
              ? "Could not create account."
              : "Invalid email or password."),
        );

        return;
      }

      setNotice(
        data.message ||
          (isRegister ? "User created successfully" : "Login successful"),
      );

      storeSession(data);
    } catch (err) {
      console.error(err);

      const isNetwork =
        err instanceof TypeError &&
        /fetch|network|load failed/i.test(err.message);

      setError(
        isNetwork
          ? "Unable to connect to the server."
          : "Something went wrong after signing in. Check the browser console.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleGoogleLogin() {
    // TODO: connect your Google route here
    // window.location.href = `${API_URL}/auth/google`;

    console.log("Google sign-in clicked");
  }

  return (
    <div
      className="rm-login min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10"
      style={{
        fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
      }}
    >
      <style>{`
        .rm-login input:-webkit-autofill,
        .rm-login input:-webkit-autofill:hover,
        .rm-login input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
          -webkit-text-fill-color: #1e293b !important;
          caret-color: #1e293b;
          transition: background-color 9999s ease-in-out 0s;
        }

        .rm-login input:focus {
          outline: none;
          box-shadow: none;
        }

        .rm-login input::selection {
          background: #e9d5ff;
        }
      `}</style>

      <div className="w-full max-w-md">
        {/* BRAND */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center rotate-180">
            <ArrowDownUp size={22} className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-tight">
              Reverse Market
            </h1>

            <p className="text-sm text-slate-500">
              Post what you need. Let sellers come to you.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-7">
          {/* LOGIN / REGISTER TOGGLE */}
          <div
            role="tablist"
            className="relative flex bg-slate-200 rounded-full p-1 mb-6"
          >
            <div
              aria-hidden="true"
              className="rounded-full bg-purple-600"
              style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 4,
                width: "calc(50% - 4px)",
                transform: isRegister ? "translateX(100%)" : "translateX(0)",
                transition: "transform 300ms ease-out",
              }}
            />

            {[
              { key: "login", label: "Sign in" },
              { key: "register", label: "Register" },
            ].map((t) => {
              const active = mode === t.key;

              return (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => switchMode(t.key)}
                  className="flex-1 text-sm font-semibold rounded-full py-2.5"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: active ? "#ffffff" : "#334155",
                    transition: "color 300ms",
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NAME */}
            {isRegister && (
              <Field
                id="name"
                label="Full name"
                icon={User}
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            )}

            {/* EMAIL */}
            <Field
              id="email"
              label="Email"
              icon={Mail}
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />

            {/* PASSWORD */}
            <Field
              id="password"
              label="Password"
              icon={Lock}
              type={showPassword ? "text" : "password"}
              autoComplete={isRegister ? "new-password" : "current-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={
                isRegister ? "At least 6 characters" : "Enter your password"
              }
              right={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />

            {/* CONFIRM PASSWORD */}
            {isRegister && (
              <Field
                id="confirm-password"
                label="Confirm password"
                icon={Lock}
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
              />
            )}

            {/* NOTICE */}
            {notice && (
              <div className="text-sm text-purple-700 bg-purple-50 border border-purple-200 rounded-xl p-3">
                {notice}
              </div>
            )}

            {/* ERROR */}
            {error && (
              <div
                role="alert"
                className="text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-xl p-3"
              >
                {error}
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white text-sm font-semibold rounded-full py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              {loading
                ? isRegister
                  ? "Creating account..."
                  : "Signing in..."
                : isRegister
                  ? "Create account"
                  : "Sign in"}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-slate-200" />

            <span className="text-xs text-slate-400">or</span>

            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* GOOGLE */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600 text-slate-700 text-sm font-medium rounded-full py-3 transition-colors"
          >
            <GoogleIcon />

            {isRegister ? "Sign up with Google" : "Sign in with Google"}
          </button>
        </div>
      </div>
    </div>
  );
}
