import styles from './nav-menu.less';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { NavMenuModelState, ConnectRC, Loading, connect } from 'umi';
import { MenuDataItem } from '@ant-design/pro-layout';
import { MenuInfo } from 'rc-menu/lib/interface';

const NavMenu = ({
  navMenu,
  dispatch,
}: {
  navMenu: NavMenuModelState;
  dispatch: CallableFunction;
}) => {
  const { menus } = navMenu;

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
    <Menu
      theme="light"
      mode="vertical"
      // mode="inline"
      items={menus}
      onClick={handleMenuClick}
    />
  );
};

export default connect(
  ({ navMenu, loading }: { navMenu: NavMenuModelState; loading: Loading }) => ({
    navMenu,
    loading: loading.models.navMenu,
  }),
)(NavMenu);
