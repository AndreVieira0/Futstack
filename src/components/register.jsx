import { useState } from "react";

function Register({ onToggle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentando cadastrar:", { name, email, password });
    alert("Dados de cadastro capturados! Pronto para o Backend.");
  };

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
          <input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/[0.07] text-white placeholder:text-white/20 focus:outline-none focus:border-green-500/50 focus:bg-white/[0.08] transition-all duration-300 text-sm"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/[0.07] text-white placeholder:text-white/20 focus:outline-none focus:border-green-500/50 focus:bg-white/[0.08] transition-all duration-300 text-sm"
          />
          <input
            type="password"
            placeholder="Sua melhor senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/[0.07] text-white placeholder:text-white/20 focus:outline-none focus:border-green-500/50 focus:bg-white/[0.08] transition-all duration-300 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full p-4 rounded-2xl bg-green-500 hover:bg-green-400 text-slate-950 font-bold text-base transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] active:scale-[0.98] will-change-transform"
        >
          Cadastrar na Futshop
        </button>

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