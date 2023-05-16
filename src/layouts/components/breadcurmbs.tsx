import { AppModelState, ConnectRC, Loading, connect } from 'umi';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const Breadcrumbs = ({ app }) => {
  const { breadcrumbs } = app;
  return (
    <Breadcrumb style={{ margin: '0 0 10px' }}>
      {breadcrumbs.length ? (
        breadcrumbs.map((breadcrumb) => (
          <Breadcrumb.Item key={breadcrumb.label}>
            {breadcrumb.label}
          </Breadcrumb.Item>
        ))
      ) : (
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};

export default connect(
  ({ app, loading }: { app: AppModelState; loading: Loading }) => ({
    app,
    loading: loading.models.app,
  }),
)(Breadcrumbs);
