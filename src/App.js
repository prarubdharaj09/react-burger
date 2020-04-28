import React from 'react';
import Layout from './components/Layout/layout';
import BurgerBuilder from  './containers/BurgerBuilder/BurgerBuilder.js';

function App() {
  return (
    <div>
     <Layout>
      <BurgerBuilder></BurgerBuilder>
     </Layout>
    </div>
  );
}

export default App;
