export const LoginForm = () => {
  const handlSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handlSubmit}>
        <label htmlFor="useremail">Email</label>
        <input type="email" id="useremail" />

        <label htmlFor="userpassword">Password</label>
        <input type="password" id="userpassword" />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
