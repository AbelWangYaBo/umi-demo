import styles from './nav-menu.less';
import { Breadcrumb, Layout, Menu, theme, Divider } from 'antd';
import { useState } from 'react';
import { AppModelState, ConnectRC, Loading, connect } from 'umi';
import { MenuDataItem } from '@ant-design/pro-layout';
import { MenuInfo } from 'rc-menu/lib/interface';
import Breadcrumbs from '../components/breadcurmbs';

const NavMenu = ({
  app,
  dispatch,
}: {
  app: AppModelState;
  dispatch: CallableFunction;
}) => {
  const { menus } = app;

  console.log('menus', menus);

  const [breadItem, setBreadItem] = useState([]);

  const handleMenuClick = ({ keyPath }: MenuInfo) => {
    let node: AnyObject = {};
    keyPath = keyPath.reverse();
    const data = keyPath?.map((key) => {
      if (!node.label) {
        node = menus?.find((d: any) => d.key === key);
      } else {
        node = node?.children?.find((d: any) => d.key === key);
      }
      return {
        label: node?.label,
        ley: node?.key,
      };
    });
    setBreadItem(data);
    dispatch({
      type: 'app/updateBreadcrumbs',
      payload: {
        breadcrumbs: data,
      },
    });
  };

  return (
    <div>
      <Menu
        theme="light"
        mode="horizontal"
        items={menus}
        onClick={handleMenuClick}
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
