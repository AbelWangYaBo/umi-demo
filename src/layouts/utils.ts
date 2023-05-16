import { history } from 'umi'

const handleMenuClick = ({ keyPath }: any, menus: any[], dispatch: CallableFunction) => {
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
  dispatch({
    type: 'app/updateBreadcrumbs',
    payload: {
      breadcrumbs: data,
    },
  });
  console.log('item', node)
  if (node.path) {
    history.push(node.path);
  }
};

export {
  handleMenuClick
}