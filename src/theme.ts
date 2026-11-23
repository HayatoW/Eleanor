import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    body: { bg: "canvas", color: "ink" },
    "::selection": { bg: "brand.100", color: "brand.900" },
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#f0f7f4" },
          100: { value: "#d4e8dd" },
          200: { value: "#accfbb" },
          300: { value: "#7db497" },
          400: { value: "#549675" },
          500: { value: "#357c59" },
          600: { value: "#286347" },
          700: { value: "#214f3b" },
          800: { value: "#1d4031" },
          900: { value: "#173428" },
          950: { value: "#0c1e17" },
        },
      },
      fonts: {
        heading: { value: 'Georgia, "Times New Roman", serif' },
        body: { value: "Inter, ui-sans-serif, system-ui, sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        canvas: { value: "#f8f7f3" },
        surface: { value: "#ffffff" },
        ink: { value: "#202e28" },
        muted: { value: "#59685f" },
        line: { value: "#dce2da" },
        brand: {
          solid: { value: "{colors.brand.700}" },
          contrast: { value: "#ffffff" },
          fg: { value: "{colors.brand.800}" },
          subtle: { value: "{colors.brand.50}" },
          muted: { value: "{colors.brand.100}" },
          emphasized: { value: "{colors.brand.200}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
