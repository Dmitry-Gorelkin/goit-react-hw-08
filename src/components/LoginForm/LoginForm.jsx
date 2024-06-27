export const LoginForm = () => {
  return (
    <div>
      <form autoComplete="off">
        <label htmlFor="useremail">Email</label>
        <input type="email" id="useremail" />

        <label htmlFor="userpassword">Password</label>
        <input type="password" id="userpassword" />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
