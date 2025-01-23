export const homeAnimation = {
    hidden: { x: -200, opacity: 0 },
    show: { x: 0, opacity: 1 },
};

export const homeInfoAnimation = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 },
};

export const navAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 1, opacity: 1 },
}

export const servicesAnimations = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const portfolioAnimations = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
};

export const milestonesAnimations = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
};

export const blogsAnimation = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const videoAnimations = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
};

export const pricingAnimation = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const testimonialsAnimations = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
};

export const skillsBarAnimation = {
    hidden: { y: 0, opacity: 0 },
    show: { y: 1, opacity: 1 },
};

export const contactAnimation = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const footerTextAnimation = {
    hidden: { x: -200, opacity: 0 },
    show: { x: 1, opacity: 1 },
};


export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: 'easeOut',
        },
      },
    };
  };
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: 'tween',
          delay: delay,
          duration: duration,
          ease: 'easeOut',
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: 'easeOut',
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };

  export const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" },
    tap: { scale: 0.95 },
  };