import adapter from '@sveltejs/adapter-node';

// this is the config file for sveltekit
const config = {
  kit: {
    adapter: adapter()
  }
};

export default config;
