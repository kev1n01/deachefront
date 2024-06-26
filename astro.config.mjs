import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), auth()]
});