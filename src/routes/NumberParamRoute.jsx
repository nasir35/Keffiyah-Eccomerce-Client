import { useParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

const NumberParamRoute = ({ children }) => {
  const { pageNo } = useParams();

  const parsedPageNo = parseInt(pageNo, 10);
  const isValidPageNo = !isNaN(parsedPageNo);

  return isValidPageNo ? children : <ErrorPage />;
};

export default NumberParamRoute;
