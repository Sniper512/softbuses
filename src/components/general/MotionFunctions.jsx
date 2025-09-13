export const parentTranslateY = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const childTranslateY = {
  initial: { y: 50, opacity: 0 },

  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
