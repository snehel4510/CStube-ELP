import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (username, email, password) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/cstube/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        const data = await response.json()
        // console.log(data)
        if(!response.ok) {
            setIsLoading(false);
            setError(data.error);
        }
        if(response.ok) {
            // save the user auth jwt to local storage
            localStorage.setItem('user', JSON.stringify(data));
            // dispatch the user auth jwt to the auth context
            dispatch({ type: 'LOGIN', payload: data });
            setIsLoading(false);
            setError(null);
        }
    }
    return { signup, error, isLoading }
}
