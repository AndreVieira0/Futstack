import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PRODUTOS_MOCK } from "../data/products";
import Promocoes from "../components/Promocoes";

function Home() {
  const [slideAtual, setSlideAtual] = useState(0);

  const promocoes = [
    {
      titulo: "50% OFF PROMOCOES DE VERAO",
      imagem: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#produtos",
    },
    {
      titulo: "ATE 40% OFF NA LINHA FUTEBOL",
      imagem: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
      link: "#produtos",
    },
    {
      titulo: "OFERTAS RELAMPAGO PARA TREINAR MELHOR",
      imagem: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      link: "#produtos",
    },
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideAtual((atual) => (atual + 1) % promocoes.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [promocoes.length]);

  const promocaoAtual = promocoes[slideAtual];
  const userName = localStorage.getItem("futstack_user_name");

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      
      {/* Hero Section ou Espaçamento para a Navbar Fixa */}
      <div className="pt-24 pb-12 px-8 max-w-7xl mx-auto">
        
        {/* Letreiro de Boas Vindas */}
        {userName && (
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-black italic">
              BEM-VINDO, <span className="text-green-500">{userName.split(' ')[0].toUpperCase()}</span>!
            </h1>
            <p className="text-white/60 mt-1 text-xs md:text-sm">Que bom ter você no nosso time.</p>
          </div>
        )}

      {/* Seção de Promoções */}
        {promocoes.length > 0 && (
          <div className="mb-12">
            <Promocoes 
              promocaoAtual={promocaoAtual}
            />
          </div>
        )}

        {/* Título da Seção de Produtos */}
        <h2 className="text-3xl font-black italic mb-8">NOSSOS <span className="text-         green-500">PRODUTOS</span></h2>
        
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
                <p className="mb-4 min-h-12 text-sm leading-relaxed text-white/60">
                  {produto.descricao || "Descricao do produto em breve."}
                </p>
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
