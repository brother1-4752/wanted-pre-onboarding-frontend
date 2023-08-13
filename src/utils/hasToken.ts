const hasToken = () => {
  const token = localStorage.getItem('access_token');
  return { isToken: token !== null, token };
};

export default hasToken;
