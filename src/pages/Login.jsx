import React from 'react'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebaseConfig"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Login() {

    //declare navigation func
    const navigation = useNavigate()

    //function untuk login dengan google
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(res => {

                //generate token
                const credential = GoogleAuthProvider.credentialFromResult(res)
                const token = credential.accessToken
                
                //get user
                const user = res.user
                console.info({token, user})
            })
            .catch(err => { console.error(err) })   
    }

    // sign in dengan email dan password
    const emailAndPassSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then(res => { navigation("/dashboard") })
            .catch(err => { console.error(err) })
    }

    //clc
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //console.info(user)
                //return
                return navigation("/dashboard")
            }
            console.info("user belum login")
        })
    }, [])
  return (
      <div className='App'>
          <form action="" onSubmit={ emailAndPassSignIn }>
              <div>
                  <label htmlFor="email">email</label>
                  <input type="text" id='email' required />
              </div>
              <div>
                  <label htmlFor="password">password</label>
                  <input type="password" id='password' required />
              </div>
              <button type='submit'>Login</button>
              <button type='button' onClick={googleSignIn}>Google Login</button>

              <small>
                  Belum punya akun ? <Link to={"/register"} >Register disini..</Link>
              </small>
          </form>
    </div>
  )
}
