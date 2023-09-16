import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import styled from "styled-components"; // Import styled from styled-components

const SignupContainer = styled.form`
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

const Rules = styled.div`
  font-size: 0.6em;
  line-height: 1.2;
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

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <SignupContainer className="signup" onSubmit={handleSubmit}>
      <Title>Sign up</Title>
      <Rules>
        <p>* Password must contain at least one uppercase character.</p>
        <p>* Include at least one number (0-9) in your password.</p>
        <p>* Use at least one special symbol (e.g., !, @, #, $, %, etc.).</p>
        <p>* Your password must be a minimum of 6 characters in length.</p>
      </Rules>
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
      <SubmitButton disabled={isLoading}>Signup</SubmitButton>
      {error && <Error>{error}</Error>}
    </SignupContainer>
  );
};

export default Signup;
