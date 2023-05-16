import { post } from "@/utils/request";
import { useState, useCallback } from "react";

export default function useAuthModel() {
  const [user, setUser] = useState({});

  const signin = useCallback(async ({ username, password }) => {
    console.log('signin')
    // const data = await post('/api/login', {
    //   data: {
    //     username,
    //     password
    //   }
    // });
    post('/api/login', {
      data: {
        username,
        password
      }
    }).then(data => {
      data.isLogin = true
      console.log('data1', data, user)
      setUser(data)
      localStorage.setItem('TOKEN', data.token)
      console.log('data2', data, user)
    })
    setTimeout(() => {

      console.log('data3', user, Object.keys(user))
    }, 1500)
  }, [])

  const signout = useCallback(async () => {
    const resp = await fetch('');
    setUser({})
  }, [])

  return {
    user,
    signin,
    signout
  }
}
