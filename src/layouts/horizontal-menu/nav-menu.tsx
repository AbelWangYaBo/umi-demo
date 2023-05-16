import styles from './nav-menu.less';
import { Breadcrumb, Layout, Menu, theme, Divider } from 'antd';
import { useState } from 'react';
import { AppModelState, ConnectRC, Loading, connect } from 'umi';
import { MenuDataItem } from '@ant-design/pro-layout';
import { MenuInfo } from 'rc-menu/lib/interface';
import Breadcrumbs from '../components/breadcurmbs';
import { handleMenuClick } from '../utils';

const NavMenu = ({
  app,
  dispatch,
}: {
  app: AppModelState;
  dispatch: CallableFunction;
}) => {
  const { menus } = app;

  const onMenuClick = ({ keyPath }: MenuInfo) => {
    handleMenuClick({ keyPath }, menus, dispatch);
  };

  return (
    <div
      style={{
        position: 'sticky',
        top: '50px',
        background: '#fff',
        left: 0,
        right: 0,
        zIndex: 99,
      }}
    >
      <Menu
        theme="light"
        mode="horizontal"
        items={menus}
        onClick={onMenuClick}
      />
      <div style={{ padding: '10px 0 5px 10px' }}>
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default connect(
  ({ app, loading }: { app: AppModelState; loading: Loading }) => ({
    app,
    loading: loading.models.app,
  }),
)(NavMenu);
