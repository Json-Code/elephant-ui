import React from 'react'
import { render } from '@testing-library/react'
import Button, { ButtonType, ButtonSize } from './button'

describe("test Button component", () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button btnType={ButtonType.Danger} size={ButtonSize.Large} >Danger</Button>)
    const element = wrapper.getByText('Danger')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-danger btn-lg')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} size={ButtonSize.Large} href="www.baidu.com" target="_blank" >Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link btn-lg')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} size={ButtonSize.Large} disabled >Disabled</Button>)
    const element = wrapper.getByText('Disabled')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-link btn-lg disabled')
  })
})
