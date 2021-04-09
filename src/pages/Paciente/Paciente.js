import React from 'react';
import PageDefault from '../../components/PageDefault';
// import Menu from '../../components/Menu';
// import Footer from '../../components/Footer';

function pac() {
  return (
    <div style={{ background: '#61dafb' }}>
      {/* <Menu />
      paciente
      <Footer /> */}
      <PageDefault>
        Cadastro de pacientes
        <div className="customer--list">
          <table className="table">
            <thead key="thead">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Addess</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </div>
        <button>Cadastrar</button>
      </PageDefault>
    </div>
  );
}
export default pac;
