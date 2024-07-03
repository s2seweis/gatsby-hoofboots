import React, { useEffect } from "react";
import { navigate } from "gatsby";
import axios from 'axios';
import Layout from "../components/Layout";
import { AuthBox } from "../components/AuthBox";

export default function LoginPage() {
  const urlParams = new URLSearchParams(window.location.search);
  console.log("line:800", urlParams);
  const code = urlParams.get('code');
  console.log("line:801", code);

  useEffect(() => {
    const exchangeCodeForToken = async (authCode) => {
      try {
        const response = await axios.post('http://localhost:3210/v1/auth/google/callback', { code: authCode });
        const { access_token, id_token } = response.data;

        if (access_token) {
          localStorage.setItem('accessToken', access_token);
          localStorage.setItem('idToken', id_token);
          navigate('/dashboard');
        } else {
          console.error('No tokens received');
        }
      } catch (error) {
        console.error('Error exchanging code for token:', error);
      }
    };

    if (code) {
      exchangeCodeForToken(code);
    } else {
      console.log("No code found in the URL");
    }
  }, [code]);

  return (
    <Layout>
      <AuthBox mode={"login"} />
      {code && <div>Processing authentication...</div>}
    </Layout>
  );
}
