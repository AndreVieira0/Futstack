import { useState } from "react";
import { GoogleIcon } from "../assets/img/icons/google";
import { FacebookIcon } from "../assets/img/icons/facebook";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

function Login({ onToggle, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao fazer login");
      }

      const data = await response.json();
      localStorage.setItem("futstack_token", data.access_token);
      localStorage.setItem("futstack_user_name", data.user.name);
      
      onLoginSuccess(); 
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  return (
    <div className="flex flex-col w-full mx-auto">
      {/* Header Moderno */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-1">
          Bem-vindo de volta!
        </h2>
        <p className="text-white/40 text-xs">
          Acesse sua conta para conferir as novidades.
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Social Login Icons */}
        <div className="flex gap-3 mb-2">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 bg-white/[0.02] text-white text-sm font-medium transition-all duration-300 active:scale-95"
          >
            <GoogleIcon />
            Google
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 bg-white/[0.02] text-white text-sm font-medium transition-all duration-300 active:scale-95"
          >
            <FacebookIcon />
            Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-2">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
            ou
          </span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        {/* Inputs */}
        <div className="space-y-3">
          <Input
            type="text"
            placeholder="E-mail ou CPF/CNPJ"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit">
          Entrar na Futstack
        </Button>

        {/* Footer Links */}
        <div className="flex justify-between items-center px-1 mt-2">
          <a
            href="#"
            className="text-xs text-white/40 hover:text-white transition-colors"
          >
            Esqueci minha senha
          </a>
          <button
            type="button"
            onClick={onToggle}
            className="text-xs text-green-500 font-bold hover:text-green-400 transition-colors"
          >
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
