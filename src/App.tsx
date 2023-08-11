import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import hasAuth from './utils/hasAuth';
import { useCallback, useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const callback = useCallback(() => {
    if (hasAuth()) {
      navigate('/todo');
      return <></>;
    } else if (!hasAuth() && location.pathname === '/todo') {
      navigate('/signin');
      return <></>;
    }
  }, [navigate, location.pathname]);

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
