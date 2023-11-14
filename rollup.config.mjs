import typescript from "rollup-plugin-typescript2";

const rollupConfig = {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [typescript()],
};

export default rollupConfig;
