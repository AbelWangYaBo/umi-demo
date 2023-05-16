import styles from './index.less';

import DOffers from '@/views/dashboard/offers';

import { connect, getDvaApp, useDispatch, useStore } from 'umi';

export default function IndexPage() {
  console.log('Dashboard');
  return (
    <div>
      <DOffers />
    </div>
  );
}
