function Promocoes({ promocaoAtual }) {
  return (
    <a
      href={promocaoAtual.link}
      className="group relative block h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <img
        src={promocaoAtual.imagem}
        alt={promocaoAtual.titulo}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/35" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-4xl font-black italic tracking-normal text-white drop-shadow-2xl md:text-6xl">
          {promocaoAtual.titulo}
        </h1>
      </div>
    </a>
  );
}

export default Promocoes;
