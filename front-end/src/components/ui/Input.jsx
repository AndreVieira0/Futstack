export function Input(props) {
  return (
    <input
      className="w-full p-4 rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/[0.07] text-white placeholder:text-white/20 focus:outline-none focus:border-green-500/50 focus:bg-white/[0.08] transition-all duration-300 text-sm"
      {...props}
    />
  );
}
