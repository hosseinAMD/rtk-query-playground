import { AxiosError } from "axios";
import "../styles.css";

export interface ErrorBannerProps {
  error: AxiosError;
  refetch: () => void;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ error, refetch }) => {
  return (
    <div className="errorBanner">
      <h5>Error code: {error.code}</h5>
      <p>{error.message}</p>
      <button onClick={refetch}>Try again</button>
    </div>
  );
};

export default ErrorBanner;
