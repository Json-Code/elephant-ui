import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
library.add(fas)

function App() {
  let [show, setShow] = useState(false)
  return (
    <div className="App">
      <div>
        按钮
        <hr/>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Hello</Button>
        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Link} href="/" target="_blank">Hello</Button>
        <Button btnType={ButtonType.Link} href="/" target="_blank" disabled>Hello</Button>
      </div>
      <div>
        菜单
        <hr/>
        横向
        <Menu onSelect={(index) => {
          console.log(index)
        }}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <MenuItem>
            cool link 3
          </MenuItem>                    
        </Menu>
        纵向
        <Menu mode="vertical" onSelect={(index) => {
          console.log(index)
        }}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <MenuItem>
            cool link 3
          </MenuItem>                    
        </Menu>
        横向drop     
        <Menu onSelect={(index) => {
          console.log(index)
        }}>
          <MenuItem>
            cool link
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem disabled>
              cool link 2
            </MenuItem>
            <MenuItem>
              cool link 3
            </MenuItem>
          </SubMenu>                  
        </Menu>
        纵向drop     
        <Menu mode="vertical" onSelect={(index) => {
          console.log(index)
        }} defaultOpenSubMenus={['1']}>
          <MenuItem>
            cool link
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem disabled>
              cool link 2
            </MenuItem>
            <MenuItem>
              cool link 3
            </MenuItem>
          </SubMenu>                  
        </Menu>
      </div>
      <div>
        <hr/>
        icon
        <Icon icon="coffee" theme="danger" size="10x"></Icon>
      </div>
      <div>
        <hr/>
        过渡组件
        <Button size={ButtonSize.Large} onClick={() => { setShow(!show) }}>toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <div>111</div>
            <div>222</div>
            <div>333</div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default App;
