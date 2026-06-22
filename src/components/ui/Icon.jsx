const VARIANTS = {
  white: "/images/icons/nobg-icon-white.png",
  purple: "/images/icons/nobg-icon-purple.png",
  black: "/images/icons/nobg-icon-black.png",
  fade: "/images/icons/nobg-icon-fade.png",
  "purple-dark": "/images/icons/icon-purple-dark.png",
  "dark-purple": "/images/icons/icon-dark-purple.png",
  dark: "/images/icons/icon-dark.png",
  light: "/images/icons/icon-light.png",
};

export default function Icon({ variant = "white", className = "", ...props }) {
  return (
    <img
      src={VARIANTS[variant]}
      alt=""
      draggable={false}
      className={`select-none object-contain ${className}`}
      {...props}
    />
  );
}
