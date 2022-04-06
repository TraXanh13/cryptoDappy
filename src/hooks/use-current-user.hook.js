import react, { useState } from 'react'
import * as fcl from "@onflow/fcl"
import React, {useEffect} from 'react';

export default function useCurrentUser() {
  const [user, setUser] = useState({  })

  const tools = {
    logIn: fcl.authenticate,
    logOut: fcl.unauthenticate,
  };

  useEffect(() => {
    fcl.currentUser().subscribe(setUser)
  }, [])

  return [user, user?.addr != null, tools]
}
