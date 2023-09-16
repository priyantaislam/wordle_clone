import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import styled from "styled-components"; // Import styled from styled-components

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background: var(--primary);
  border: 0;
  color: #fff;
  padding: 10px;
  font-family: "Poppins";
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const Error = styled.div`
  padding: 10px;
  background: #ffefef;
  border: 1px solid var(--error);
  color: var(--error);
  border-radius: 4px;
  margin: 20px 0;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <LoginContainer className="login" onSubmit={handleSubmit}>
      <Title>Log in</Title>
      <Label>Email:</Label>
      <Input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Label>Password:</Label>
      <Input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <SubmitButton disabled={isLoading}>Login</SubmitButton>
      {error && <Error>{error}</Error>}
    </LoginContainer>
  );
};

export default Login;