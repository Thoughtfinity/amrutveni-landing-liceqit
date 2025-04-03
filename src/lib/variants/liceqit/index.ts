export const navbarVariant = {
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

export const bottomNavVariant = {
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

export const slideUpVariant = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const imageRevealVariant = {
  initial: {
    height: "100%",
  },
  animate: {
    height: "0%",
  },
};

export const scaleUpContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export const scaleUpItemVariant = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};
