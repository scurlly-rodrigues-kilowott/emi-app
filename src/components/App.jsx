import React from 'react';
import Heading from './Heading';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App(){
   return (
    <QueryClientProvider client={queryClient}>
   <div>
     <Header/>
    <Heading />
    <Form/>
    <Footer/>
    </div>
    </QueryClientProvider>
    );
   
   
}

export default App;