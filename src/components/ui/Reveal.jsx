import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/animations";

/**
 * Wrapper de reveal por scroll. Anima opacity + transform (sem layout thrashing).
 * Respeita prefers-reduced-motion: quando ativo, renderiza estático.
 */
export default function Reveal({
  children,
  variants = fadeUp,
  className = "",
  as = "div",
  delay = 0,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
