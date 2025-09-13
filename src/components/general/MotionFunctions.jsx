export const parentTranslateY = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const childTranslateY = {
  initial: { y: 80,  },
  final: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut" ,
    },
  },
};