import React from 'react';
import './App.css';
// import Menu from '../../components/Menu'; //'../../components/Menu';
// import Footer from '../../components/Footer';
import PageDefault from '../../components/PageDefault';

function App() {
  return (
    <div style={{ background: '#61dafb' }}>
      {/* <Menu />
      <p></p>
      <h3>principal</h3>
      <Footer /> */}
      <PageDefault>
        <h3>principal</h3>
      </PageDefault>
    </div>
  );
}

export default App;
