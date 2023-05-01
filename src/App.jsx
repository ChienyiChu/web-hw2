import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/reset.css'
import './App.css'
import Home from './page/Home'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

//import { feedProducts } from '.api';
//feedProducts;

function App() {
  return(
    <QueryClientProvider client={queryClient}>
    <Home/>
    </QueryClientProvider>
  );
}

export default App;
