import Header from '../components/header';

import NavMenu from './nav-menu';
import { AppModelState, ConnectRC, Loading, connect } from 'umi';

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Breadcrumbs from '../components/breadcurmbs';

const App = (props) => {
  // const { breadcrumbs } = app;

  return (
    // <div>
    //   <Header />
    //   <NavMenu />
    //   <div className="container">{props.children}</div>
    // </div>
    <Layout>
      <Header />
      <Layout hasSider>
        <Layout.Sider
          style={{
            overflow: 'auto',
            height: 'calc(100vh - 50px)',
            position: 'fixed',
            left: 0,
            top: 50,
            bottom: 0,
            width: 200,
          }}
        >
          <NavMenu />
        </Layout.Sider>
        <Layout style={{ padding: '4px', marginLeft: 200 }}>
          <Layout.Content
            style={{
              padding: 15,
              margin: 0,
              background: '#fff',
            }}
          >
            <Breadcrumbs />
            {props.children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

// export default connect(
//   ({ app, loading }: { app: AppModelState; loading: Loading }) => ({
//     app,
//     loading: loading.models.app,
//   }),
// )(App);
export default App;
