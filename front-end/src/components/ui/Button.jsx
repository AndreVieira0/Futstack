export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`w-full p-4 rounded-2xl bg-green-500 hover:bg-green-400 text-slate-950 font-bold text-base transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] active:scale-[0.98] will-change-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
