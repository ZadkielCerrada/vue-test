import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({});

const app = createApp(App)
app.use(ThemeProvider);
app.use(CssBaseline);



app.use(router)

app.mount('#app')
