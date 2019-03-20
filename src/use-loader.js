import React from "react";

export function useLoader(apiCall) {
  const [isLoading, setLoading] = React.useState(false);
  const newApiCall = async () => {
    try {
      setLoading(true);
      await apiCall();
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, apiCall: newApiCall };
}
