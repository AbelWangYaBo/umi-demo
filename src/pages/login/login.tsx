import styles from './login.less';
import LoginForm from '@/views/login/login-form';
import Tips from '@/views/login/tips';
import DivModal from '@/views/login/div-modal';
import { Link, useModel, history } from 'umi';
import { useState } from 'react';

export default function IndexPage() {
  const handleCoverClick = () => {
    setShow(true);
  };
  const { user, signin } = useModel('useAuthModel', (model) => ({
    user: model.user,
    signin: model.signin,
  }));

  const [show, setShow] = useState(false);

  const [userInfo, setUserInfo] = useState(0);

  const handleFormSubmit = async (form: any) => {
    console.log('handleFormSubmit', form, user, userInfo);
    setUserInfo(123);
    await signin(form);
    console.log('userInfo', user, userInfo);
    history.push('/');
  };

  return (
    <div className={`${styles['login-container']} container`}>
      <div className={styles['login-form']}>
        <div className={styles['state']}>Merck Life Science Pvt. Limited</div>
        <div className={styles['title']}>System Login</div>
        <LoginForm onSubmit={handleFormSubmit} />
      </div>
      <div className={styles['cover-box']}>
        <div onClick={handleCoverClick}>
          <img
            src="https://sgsi2w2244.ap.merckgroup.com/MMIOMS/Images/Cover_Pages_2022.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles['tips-list']}>
        <Tips />
      </div>
      <DivModal show={show} close={() => setShow(false)} />
    </div>
  );
}
