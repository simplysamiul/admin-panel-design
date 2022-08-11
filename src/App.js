import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

const App = () => {
  return (
    <div>
      <Topbar/>
      <div className="container">
          <Sidebar />
          otherpages
      </div>
    </div>
  );
};

export default App;
