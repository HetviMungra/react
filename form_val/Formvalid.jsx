import React from 'react';

export default function FormValid() {
  const [name, setName] = React.useState('');
  const [user, setUser] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  
  
  const [nameErr, setNameErr] = React.useState('');
  const [userErr, setUserErr] = React.useState('');
  const [emailErr, setEmailErr] = React.useState('');
  const [passwordErr, setPasswordErr] = React.useState('');
  const [confirmErr, setConfirmErr] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    // Reset all errors
    setNameErr('');
    setUserErr('');
    setEmailErr('');
    setPasswordErr('');
    setConfirmErr('');

    // Name validation
    if (!name) {
      setNameErr("Please enter your name");
      valid = false;
    }

    // Username validation
    if (!user) {
      setUserErr("Please enter your user name");
      valid = false;
    }
    else if(name == user){
      setUserErr("Username cannot be same as name");
      valid = false;
    }

    // Email validation
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email) {
      setEmailErr("Please enter your email");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailErr("Invalid email format. eg: xyz12@gmail.com");
      valid = false;
    }

    // Password validation
    if (!password) {
      setPasswordErr("Please enter your password");
      valid = false;
    } else if (password.length < 6) {
      setPasswordErr("Password must be at least 6 characters long");
      valid = false;
    }

    // Confirm password validation
    if (!confirm) {
      setConfirmErr("Please confirm your password");
      valid = false;
    } else if (password !== confirm) {
      setConfirmErr("Passwords do not match");
      valid = false;
    }

    // If all validations pass
    if (valid) {
      alert("Form submitted successfully!", { name, user, email, password, confirm });
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1> Login Form</h1>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        {nameErr && <p style={{ color: 'red' }}>{nameErr}</p>}
        <br />

        <label htmlFor="user">User Name</label>
        <input
          type="text"
          id="user"
          name="user"
          onChange={(e) => setUser(e.target.value)}
        />
        {userErr && <p style={{ color: 'red' }}>{userErr}</p>}
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErr && <p style={{ color: 'red' }}>{emailErr}</p>}
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErr && <p style={{ color: 'red' }}>{passwordErr}</p>}
        <br />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={(e) => setConfirm(e.target.value)}
        />
        {confirmErr && <p style={{ color: 'red' }}>{confirmErr}</p>}
        <br />

        <div className="fx">
          <div className="cheak">
          <input type="checkbox" name="terms"   id="terms" />

          </div>
        <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
