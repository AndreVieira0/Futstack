import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Home />;
  }
  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/background.png")' }}
    >
      {/* Conteúdo da Futshop */}
      <div className="z-10 flex flex-col items-center gap-6">
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          FUTSTACK
        </h1>
        <div className="backdrop-blur-md bg-black/40 rounded-[2rem] border border-white/20 shadow-2xl p-6 md:p-8 w-[90%] max-w-[450px]">
          {isLogin ? (
            <Login
              onToggle={() => setIsLogin(false)}
              onLoginSuccess={() => setIsLoggedIn(true)}
            />
          ) : (
            <Register 
              onToggle={() => setIsLogin(true)} 
              onLoginSuccess={() => setIsLoggedIn(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
