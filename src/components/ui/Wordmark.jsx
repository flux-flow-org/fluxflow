/**
 * Wordmark textual FluxFlow — "Flux" em roxo, "Flow" em branco.
 * Segue o brandbook: o desenho não muda, apenas a cor varia na paleta.
 */
export default function Wordmark({ className = "" }) {
  return (
    <span
      className={`font-display font-extrabold tracking-tightest text-white ${className}`}
    >
      <span className="text-flux-purple">Flux</span>Flow
    </span>
  );
}
