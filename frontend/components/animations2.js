import React from 'react'
import ReactDOM from 'react-dom'
import { Keyframes, animated } from 'react-spring'
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs'

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 0, color:'#B0C4DE' },
      to: { radians: 1.8 * Math.PI }
    })
  }
})

class Animations2 extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = { items: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6','item7', 'item8','item9','item10',] }
    }
 

  render() {
    const Content = ({ radians, color }) =>
      this.state.items.map((_, i) => (
        <animated.svg
          style={{
            width: 175,
            height: 175,
            willChange: 'transform',
            transform: radians.interpolate(r => `translate3d(0, ${100 * Math.sin(r + i * 2 * Math.PI / 10)}px, 0)`)
          }}
          viewBox="0 0 400 400">
          <animated.g fill={color} fillRule="evenodd">
            <path id="path-1" d="M20,380 L380,380 L380,380 L200,20 L20,380 Z" />
          </animated.g>
        </animated.svg>
      ))
    const { items } = this.state

    return (
        <div> 
      <div style={{ position: 'relative' }}>
        <Container reset native keys={items} impl={TimingAnimation} config={{ duration:800, easing: Easing.linear }}>
          {Content}
        </Container>
      </div>
       </div> 
    )
  }
}

export default Animations2;  
