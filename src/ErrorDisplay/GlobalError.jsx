import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p> Hint: Global Error</p>
      <p>
        <i>{error.message}</i>
      </p>
      
      <p> Return to &nbsp;<Link to='/'>Dashboard</Link> </p>
    </div>
  );
}