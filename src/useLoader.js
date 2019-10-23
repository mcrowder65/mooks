import React from "react"

function useLoader(apiCall) {
  const [isLoading, setLoading] = React.useState(false)
  const newApiCall = async (...args) => {
    try {
      setLoading(true)
      await apiCall(...args)
    } catch (e) {
      throw e
    } finally {
      setLoading(false)
    }
  }

  return { isLoading, apiCall: newApiCall }
}

export default useLoader
