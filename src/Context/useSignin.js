import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const url = "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/login";

export const useSignin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {dispatch} = useAuthContext()

  const signin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "warehouse-id": "1",
        "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: 2,
        client_secret: "2TJrcyMbXT6gDQXVqeSlRbOKvtTfMsuxfuK6vpey",
        grant_type: "password",
        username: email,
        password: password,
      }),
    });

    const json = await response.json()
    // console.log(json)

    if(!response.ok){
        setIsLoading(false)
        setError(json.errors[0].message)

    }
    if(response.ok) {
        localStorage.setItem("user", JSON.stringify(json.access_token))

        dispatch({type:"LOGIN", payload:json})
        setIsLoading(false)
    }
  };

  return {signin, isLoading, error}
};
