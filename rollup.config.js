import commonjs from "rollup-plugin-commonjs";
import VuePlugin from "rollup-plugin-vue";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.js",
  plugins: [commonjs(), VuePlugin(), resolve()],
  output: [
    {
      file: "dist/overdrive.umd.js",
      exports: "named",
      format: "umd",
      name: "VOverdrive"
    },
    {
      file: "dist/overdrive.esm.js",
      format: "esm"
    },
    {
      file: "dist/overdrive.min.js",
      format: "iife",
      exports: "named",
      name: "VOverdrive"
    }
  ]
};
