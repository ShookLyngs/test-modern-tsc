import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'test-ts-bundler',
  dts: true,
  clean: true,
  sourcemap: true,
  format: ['esm', 'cjs'],
  entry: ['src/run.ts'],
});
