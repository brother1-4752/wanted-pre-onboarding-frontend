import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      return <div>권한 없음</div>;
    }

    if (error.status === 404) {
      return <div>404 Not Found</div>;
    }

    if (error.status === 503) {
      return <div>API 확인 요망</div>;
    }
  }
  return (
    <div>
      <h1>에러 발생</h1>
    </div>
  );
}

export default ErrorBoundary;
