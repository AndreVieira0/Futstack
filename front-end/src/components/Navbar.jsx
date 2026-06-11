import { SearchIcon } from "../assets/img/icons/search";
import { CartIcon } from "../assets/img/icons/cart";

function Navbar() {
  const userName = localStorage.getItem("futstack_user_name");

  return (
    <nav className="fixed top-0 w-full h-20 border-b border-white/10 bg-black/60 backdrop-blur-md z-50 px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black text-white tracking-tighter italic">
          FUT<span className="text-green-500">STACK</span>
        </span>
      </div>

      {/* Menu de Navegação - Escondido em telas pequenas */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-medium text-white/70 hover:text-green-500 transition-colors">CHUTEIRAS</a>
        <a href="#" className="text-sm font-medium text-white/70 hover:text-green-500 transition-colors">CAMISAS</a>
        <a href="#" className="text-sm font-medium text-white/70 hover:text-green-500 transition-colors">ACESSÓRIOS</a>
        <a href="#" className="text-sm font-medium text-white/70 hover:text-green-500 transition-colors">PROMOÇÕES</a>
      </div>

      {/* Ações (Busca, Carrinho, Login/User) */}
      <div className="flex items-center gap-5">
        <button className="text-white/70 hover:text-white transition-colors">
          <SearchIcon />
        </button>
        
        <button className="relative text-white/70 hover:text-white transition-colors">
          <CartIcon />
          <span className="absolute -top-2 -right-2 bg-green-500 text-[10px] font-bold text-black px-1.5 rounded-full">2</span>
        </button>

        <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-green-500 transition-all active:scale-95">
          ENTRAR
        </button>
      </div>
    </nav>
  );
}

export default Navbar;