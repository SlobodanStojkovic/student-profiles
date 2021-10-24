import "./Loading.css";
import loadingSpinner from "./assets/loadingSpinner.gif";

export const Loading = () => {
    return (
        <img className="loadingSpinner" src={loadingSpinner} alt="Loading" />
    )
}