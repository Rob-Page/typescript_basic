import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Post,Chat } from './components'
import { Layout, Menu } from 'antd';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Layout.Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
          </Menu>
        </Layout.Header>
        <Layout.Content style={{ padding: '0 100px' }}>
          <div className="chat-container">
            
          </div>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
