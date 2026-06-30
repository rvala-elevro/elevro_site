export const smoothEase = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: smoothEase,
    },
  },
} as const;

export const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
} as const;
