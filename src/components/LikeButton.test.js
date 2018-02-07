import React from 'react'
import { shallow } from 'enzyme'
import LikeButton from './LikeButton'
import sinon from 'sinon'

describe('<LikeButton>', () => {
  const toggleLike = sinon.spy()
  const button = shallow(<LikeButton liked={false} onChange={toggleLike} />)

  it('is wrapped in a div with class "like"', () => {
    expect(button).toHaveTagName('div')
    expect(button).toHaveClassName('like')
  })

  describe('clicking the button', () => {
    it('cals "onChange"', () => {
      button.find('button').simulate('click')
      expect(toggleLike.callCount).toBe(1)
    })
  })

  // it('has an initial state for "liked", that is "false"', () => {
  //   expect(button).toHaveState('liked', false)
  // })
  //
  // describe('click it', () => {
  //   it('toggles the "liked" state', () => {
  //     //initial
  //     expect(button).toHaveState('liked', false)
  //
  //     //first click
  //     button.find('button').simulate('click')
  //     expect(button).toHaveState('liked', true)
  //
  //     //second click
  //     button.find('button').simulate('click')
  //     expect(button).toHaveState('liked', false)
  //   })
  // })
})
