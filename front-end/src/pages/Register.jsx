import { useState } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

function Register({ onToggle, onLoginSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    //função que será chamada quando o formulário for enviado
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao cadastrar");
      }

      // Login Automático
      const loginResponse = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        localStorage.setItem("futstack_token", loginData.access_token);
        localStorage.setItem("futstack_user_name", loginData.user.name);
        alert("Cadastro realizado com sucesso! Entrando...");
        if (onLoginSuccess) onLoginSuccess();
      } else {
        alert("Cadastro realizado com sucesso! Faça seu login.");
        onToggle();
      }
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };
// return é o que será renderizado na tela
  return (
    <div className="p-2 flex flex-col w-full mx-auto max-w-[400px]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
          Crie sua conta
        </h2>
        <p className="text-white/40 text-sm">
          Junte-se à maior comunidade esportiva.
        </p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Sua melhor senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit">
          Cadastrar na Futstack
        </Button>

        <div className="text-center mt-2">
          <p className="text-xs text-white/40">
            Já tem uma conta?{" "}
            <button
              type="button"
              onClick={onToggle}
              className="text-green-500 font-bold hover:text-green-400 transition-colors"
            >
              Fazer Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;