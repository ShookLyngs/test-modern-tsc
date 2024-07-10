## Differences Between ESM and CJS in TypeScript

### Setting `type` in `package.json`

Assuming the `moduleResolution` is set to `NodeNext` in the `tsconfig.json`, the `type` field in the `package.json` plays a critical role by guiding the TypeScript compiler (TSC) to behave differently.

With `module`:

- The `esm/cat.ts` file contains a relative import from `animal.ts` with a file extension. If you remove the file extension, a `TS2835` error will be thrown, indicating that the file extension is mandatory.
- When importing `animal.ts`, the appropriate file extension to include in the import syntax is `.js` instead of `.ts`, because TypeScript doesn't automatically update your `.ts` imports to `.js` when bundling with `tsc`.
- To enable the file extension `.ts` in the imports, you must set `"allowImportingTsExtensions": true` in the `tsconfig.json`. However, when this is set, the `cat.ts` file cannot be bundled with `tsc` as it doesn't handle the `.ts` extension in the imports.

With `commonjs`:

- The `cjs/cat.ts` file contains a relative import from `animal.ts` without a file extension, indicating that the file extension is optional if the `type` field in the `package.json` is set to `commonjs`.
- When you bundle the `cjs` project with `tsc`, the file extension is not mandatory in the imports, and the `cat.ts` file can be bundled with `tsc` without any errors.

### Setting `moduleResolution` in `tsconfig.json`

With `NodeNext`:

- Transpile files as specified by the `type` field in the `package.json`. If the value is `module`, it is compiled as ESM. If the value is `commonjs` or not set, it is compiled as CJS.
- When the `type` is set to `module`, the TSC throws an error if the relative imports in the source code do not include file extensions, as required by the ESM standard.

With `Bundler`:

- Transpile files as per the source code's format, the TSC only compile files from `.ts` to `.js`.
- Expect the compiled code to be referenced in a project that uses a bundler.
