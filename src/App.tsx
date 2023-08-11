import { Outlet, useNavigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import hasAuth from './utils/hasAuth';
import { useCallback, useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const callback = useCallback(() => {
    if (hasAuth()) {
      navigate('/todo');
      return <></>;
    } else {
      navigate('/signin');
      return <></>;
    }
  }, [navigate]);

  useEffect(() => {
    callback();
  }, [callback]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
