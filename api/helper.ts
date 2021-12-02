const tempDB = new Map();

const randomColor = () => {
  let rand = () => Math.floor(Math.random() * 256);
  let color = { r: rand(), g: rand(), b: rand() };
  return `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;
};

export { tempDB, randomColor };
