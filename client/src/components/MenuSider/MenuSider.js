import React, { Component } from 'react'
import { Menu, Icon } from 'antd'

export default class MenuSider extends Component {
  render () {
    return (
      <div>
        <div className='logo'>Mia</div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item className='menu-item' key='1'>
            <Icon type='database' />
            <span>Company Data</span>
          </Menu.Item>
          <Menu.Item className='menu-item' key='2'>
            <Icon type='calendar' />
            <span>Todo List</span>
          </Menu.Item>
          <Menu.Item className='menu-item' key='3'>
            <Icon type='profile' />
            <span>My Profile</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
