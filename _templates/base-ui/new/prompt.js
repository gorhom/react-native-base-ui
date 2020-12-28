module.exports = {
  prompt: ({ args }) => {
    if (!args.name || args.name === '' || args.name === ' ') {
      throw Error('Please enter the component name.');
    }
    return {
      name: args.name.toLowerCase(),
    };
  },
};
