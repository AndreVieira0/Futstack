import Login from "./components/Login";
import Register from "./components/register";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Conteúdo da Futshop */}
      <div className="z-10 flex flex-col items-center gap-10">
        <h1 className="text-7xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          FUTSHOP
        </h1>
        <div className="backdrop-blur-md bg-black/40 rounded-[2.5rem] border border-white/20 shadow-2xl p-10 w-[500px]">
          {isLogin ? (
            <Login onToggle={() => setIsLogin(false)} />
          ) : (
            <Register onToggle={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
