function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Coluna 1: Logo e Sobre */}
        <div className="space-y-4">
          <span className="text-2xl font-black text-white italic">
            FUT<span className="text-green-500">STACK</span>
          </span>
          <p className="text-white/50 text-sm leading-relaxed">
            A maior loja de artigos esportivos do Brasil. Qualidade e performance para o seu jogo.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Categorias</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-white/40 hover:text-green-500 text-sm transition-colors">Chuteiras</a></li>
            <li><a href="#" className="text-white/40 hover:text-green-500 text-sm transition-colors">Camisas de Time</a></li>
            <li><a href="#" className="text-white/40 hover:text-green-500 text-sm transition-colors">Equipamentos</a></li>
            <li><a href="#" className="text-white/40 hover:text-green-500 text-sm transition-colors">Lançamentos</a></li>
          </ul>
        </div>

        {/* Coluna 3: Ajuda */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Ajuda</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-white/40 hover:text-green-500 text-sm transition-colors">Trocas e Devoluções</a></li>
            <li><a href="#" className="text-white/40 hover:text-green-500 text-sm transition-colors">Prazo de Entrega</a></li>
            <li><a href="#" className="text-white/40 hover:text-green-500 text-sm transition-colors">Fale Conosco</a></li>
            <li><a href="#" className="text-white/40 hover:text-green-500 text-sm transition-colors">Pagamentos</a></li>
          </ul>
        </div>

        {/* Coluna 4: Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Newsletter</h4>
          <p className="text-white/40 text-xs mb-4">Receba ofertas exclusivas no seu e-mail.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-green-500 flex-1"
            />
            <button className="bg-green-500 text-black px-4 py-2 rounded-lg text-xs font-bold hover:bg-green-400 transition-colors">
              OK
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-white/30 text-xs text-center md:text-left">
          © 2024 FUTSTACK - Todos os direitos reservados.
        </p>
        <p className="text-white/30 text-xs">
          Desenvolvido por <span className="text-green-500 font-bold">AndreVieira0</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
