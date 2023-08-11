const hasAuth = () => {
  const token = localStorage.getItem('access_token');
  return token !== null;
};

export default hasAuth;
