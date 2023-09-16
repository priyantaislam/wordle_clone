import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIslLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email,password) => {
    setIslLoading(true)
    setError(null)

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({email, password})
    })

    const json = await response.json()

    if(!response.ok) {
      setIslLoading(false)
      setError(json.error)
    }

    if(response.ok) {
      //save user in local storage
      localStorage.setItem('user', JSON.stringify(json))

      //update auth context
      dispatch({type: 'LOGIN', payload: json})

      setIslLoading(false)
    }
  }

  return {signup, isLoading, error}
}