import { useState } from 'react';

import { Layout, Switch, Radio, Divider } from 'antd';
import type { RadioChangeEvent } from 'antd';

import { CheckMarkValue, Difficulty } from '../../app/features/interfaces';

const { Sider } = Layout;

function SideMenu(props: any) {
  const { SetComputerLevel, SetPlayerMove, disabled } = props;
  const [levelValue, setLevelValue] = useState(Difficulty.Easy);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Sider
        style={{ color: 'white', padding: '100px 20px', width: '500px' }}
        // collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div className="logo" />

        <Divider orientation="center" style={{ color: 'inherit' }}>
          Select your move
        </Divider>
        <Switch
          disabled={disabled}
          defaultChecked
          checkedChildren="O"
          unCheckedChildren="X"
          onChange={(checked: Boolean) => {
            console.log(checked);
            if (checked) {
              SetPlayerMove(CheckMarkValue.O);
            } else {
              SetPlayerMove(CheckMarkValue.X);
            }
          }}
          style={{ marginLeft: '20px' }}
        />
        <Divider
          orientation="center"
          style={{ color: 'inherit', marginTop: '20px' }}
        >
          Select computer level
        </Divider>
        <Radio.Group
          disabled={disabled}
          onChange={(e: RadioChangeEvent) => {
            const selectedLevel = e.target.value;
            console.log('radio checked', selectedLevel);
            setLevelValue(selectedLevel);
            SetComputerLevel(selectedLevel);
          }}
          value={levelValue}
          style={{ color: 'inherit', marginLeft: '20px' }}
        >
          <Radio value={Difficulty.Easy} style={{ color: 'white' }}>
            {Difficulty.Easy}
          </Radio>
          <Radio value={Difficulty.Normal} style={{ color: 'white' }}>
            {Difficulty.Normal}
          </Radio>
          <Radio value={Difficulty.Hard} style={{ color: 'white' }}>
            {Difficulty.Hard}
          </Radio>
        </Radio.Group>
      </Sider>
    </>
  );
}

export default SideMenu;
