// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })
// import {defineConfig} from "vite";
// import react from "@vitejs/plugin-react";
// import {vitePluginGhPages} from "vite-plugin-gh-pages";

// export default defineConfig({
//     plugins: [react(), vitePluginGhPages()],
//     base: "/dignity-health/",
// });
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/dignity-health/",
});
