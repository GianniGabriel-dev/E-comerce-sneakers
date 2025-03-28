import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "2em" }}>
      <h1>404 - Page not found</h1>
      <p>We are sorry, the page that u searched don't exists</p>
      <Link to="/">Go back to the shop</Link>
    </div>
  );
};
