import React from 'react';

const SignInForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>

      <div>
        <label>
          <input type="email" placeholder="Email" />
        </label>
      </div>

      <div>
        <label>
          <input type="password" placeholder="Password" />
        </label>
      </div>

      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
