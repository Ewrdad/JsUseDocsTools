import { defineConfig } from 'vite';
import { pluginExposeRenderer } from './vite.base.config.mjs';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config
export default defineConfig((env) => {
  /** @type {import('vite').ConfigEnv<'renderer'>} */
  const forgeEnv = env;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  /** @type {import('vite').UserConfig} */
  return {
    root,
    mode,
    base: './',
    build: {
      outDir: `.vite/renderer/${name}`,
    },
    plugins: [pluginExposeRenderer(name),  react({
      // Configure the Babel plugin for React (if needed)
      babel: {
        plugins: [
          // Add other Babel plugins here if necessary
        ],
      },
    }),],
    resolve: {
      preserveSymlinks: true,
    },
    clearScreen: false,
    esbuild: {
      loader: 'jsx', // Or 'tsx' if using TypeScript
      include: [
        // Paths to include for JSX transformation
        'src/**/*.jsx',
        'src/**/*.js', // Include .js files
        // Add other paths as needed
      ],
    },
    
  };
});
