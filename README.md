# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

@tailwind base;
@tailwind components;
@tailwind utilities;

{
/_ The following line can be included in your src/index.js or App.js file _/
}
import 'bootstrap/dist/css/bootstrap.min.css';

import 'remixicon/fonts/remixicon.css'

Primary Color (Buttons, Links, Headers):

#3498db (Bright blue)
Secondary Color (Accents):

#e67e22 (Vibrant orange)
Background (Main content background):

#f9f9f9 (Light grey)
Card Background (Post previews):

#ffffff (White)
Text (Headlines and paragraphs):

#333333 (Dark grey, for titles)
#666666 (Medium grey, for body text)
Footer Background:

#2c3e50 (Dark blue-grey)
Hover Effects (Buttons, Links):

#2980b9 (Darker blue for hover state)

Primary Color (#3498db): Used for the header, links, and buttons to stand out.

Secondary Color (#e67e22): Used sparingly for accent elements (e.g., social media links in the footer).

Backgrounds: Light colors ensure readability. The main background is #f9f9f9, while the card background is white.

Text: Dark grey (#333333) for headings and slightly lighter grey (#666666) for the body text ensures good readability.
