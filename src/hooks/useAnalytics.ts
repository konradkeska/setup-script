import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { useLocation, useParams } from "react-router-dom";

export function useAnalytics() {
  const [initialized, setInitialized] = useState(false);
  const location = useLocation();
  const params = useParams<{ id?: string }>();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID!);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      const page = params?.id ? "Details" : "Creator";
      ReactGA.set({ page });
      ReactGA.pageview(page);
    }
  }, [initialized, location, params?.id]);
}
