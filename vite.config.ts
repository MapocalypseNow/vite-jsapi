import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/vite-jsapi/",
    plugins: [splitVendorChunkPlugin()],
});
