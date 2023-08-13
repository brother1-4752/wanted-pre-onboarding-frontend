import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import Layout from './components/Layout';
import hasToken from './utils/hasToken';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const callback = useCallback(() => {
    if (hasToken().isToken) {
      navigate('/todo');
      return <></>;
    } else if (!hasToken().isToken && location.pathname === '/todo') {
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
