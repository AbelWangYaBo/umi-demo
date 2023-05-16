import styles from './nav-menu.less';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { AppModelState, ConnectRC, Loading, connect } from 'umi';
import { MenuDataItem } from '@ant-design/pro-layout';
import { MenuInfo } from 'rc-menu/lib/interface';
import { history } from 'umi';
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
    <Menu theme="light" mode="inline" items={menus} onClick={onMenuClick} />
  );
};

export default connect(
  ({ app, loading }: { app: AppModelState; loading: Loading }) => ({
    app,
    loading: loading.models.app,
  }),
)(NavMenu);
