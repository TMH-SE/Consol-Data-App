import React, { Component } from 'react'
import { Modal, Button, Form, Input, notification } from 'antd'

class AddModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  showModal () {
    this.setState({
      visible: true
    })
  }

  handleOk (e) {
    this.handleSubmit(e)
  }

  handleCancel (e) {
    this.setState({
      visible: false
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        notification.success({
          message: 'Success!',
          duration: 1.5,
          placement: 'topLeft'
        })
        this.setState({
          visible: false
        })
      }
    })
  }

  validatePhone (rule, value, callback) {
    const form = this.props.form
    const regex = /[0-9]$/
    const regexValid = /^0\d{9,11}/
    if (value && !regex.test(value)) {
      form.setFieldsValue({ phone: value.slice(0, value.length - 1) })
    } else {
      if (value && !regexValid.test(value)) {
        console.log(value)
        callback('The input not valid Vietnam phone number')
      } else {
        callback()
      }
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Button type='primary' icon='plus' onClick={this.showModal}>
          Thêm
        </Button>
        <Modal
          title='Company Data Form'
          visible={this.state.visible}
          onCancel={this.handleCancel}
          okButtonProps={{ hidden: true }}
          cancelText='Close'
        >
          <Form onSubmit={this.handleSubmit}>
            <Form.Item label='Name' hasFeedback>
              {getFieldDecorator('name', {
                rules: [{
                  required: true,
                  message: 'Please input company name'
                }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label='Address' hasFeedback>
              {getFieldDecorator('address', {
                rules: [{
                  required: true,
                  message: 'Please input company address'
                }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label='Email' hasFeedback>
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email',
                  message: 'The input not valid email'
                }, {
                  required: true,
                  message: 'Please input company email'
                }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label='Phone' hasFeedback>
              {getFieldDecorator('phone', {
                rules: [{
                  required: true,
                  message: 'Please input company phone'
                }, {
                  validator: this.validatePhone.bind(this)
                }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label='Skype'>
              {getFieldDecorator('phone', {
                rules: [{
                  required: true,
                  message: 'Please input company phone'
                }, {
                  pattern: new RegExp('[a-zA-Z][a-zA-Z0-9_\\-\\,\\.]{5,31}'),
                  message: 'The input not valid Skype name'
                }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label='Note'>
              <Input />
            </Form.Item>
            <Form.Item label='Status'>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>Thêm</Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}
export default Form.create()(AddModal)
