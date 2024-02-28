import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
    const error = useRouteError();
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold">Error!!</h2>
      <p>{error.message}</p>
      <Link className="hover:scale-110" to="/">Go Back to the homepage</Link>
    </div>
  );
};

export default CareersError;
