import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
import './App.css'
import MenuSider from './components/MenuSider/MenuSider'
import DataList from './components/Content/CompanyData/DataList'

const { Header, Sider, Content } = Layout
export default class App extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} breakpoint="lg">
          <MenuSider />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className='trigger'
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: '80vh'
            }}
          >
            <DataList />
          </Content>
        </Layout>
      </Layout>
    )
  }
}
