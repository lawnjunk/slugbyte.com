'use strict'

import React from 'react'
import {shallow} from 'enzyme'
import Dummy from '../component/dummy'

describe('testing Dummy', () => {
  it('should have a count of 0', () => {
    let wrapper = shallow(<Dummy />)   
    expect(wrapper.state('count')).toBe(0)
  })

  it('should inc should updateState', () => {
    let wrapper = shallow(<Dummy />)
    wrapper.find('h1').simulate('click')
    expect(wrapper.state('count')).toBe(1)
    wrapper.find('h1').simulate('click')
    expect(wrapper.state('count')).toBe(2)
  })
})
