export const navbarVariants = {
  open: {
    y: 0,
  },
  close: {
    y: "-300px",
  },
  exit: {
    y: "-300px",
  },
};

export const bottomNavVariants = {
  hidden: {
    y: "100px",
  },
  inView: {
    y: 0,
  },
  exit: {
    y: "100px",
  },
};

export const slideUpVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const imageRevealVariants = {
  initial: {
    height: "100%",
  },
  animate: {
    height: "0%",
  },
};

export const howToUseStepsVariants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const modalContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

export const dotVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    y: [0, -5, 0],
  },
};
