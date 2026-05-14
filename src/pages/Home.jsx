import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PRODUTOS_MOCK } from "../data/products";

function Home() {
  return (
    <div className="min-height-screen bg-[#020617] text-white">
      <Navbar />
      
      {/* Hero Section ou Espaçamento para a Navbar Fixa */}
      <div className="pt-24 pb-12 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black italic mb-8">NOSSOS <span className="text-green-500">PRODUTOS</span></h2>
        
        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUTOS_MOCK.map((produto) => (
            <div key={produto.id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/50 transition-all group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 uppercase">{produto.nome}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-green-500 font-black text-xl">R$ {produto.preco}</span>
                  <button className="bg-white text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-green-500 transition-colors">
                    COMPRAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
