export const RegistrationForm = () => {
  const handlSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handlSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="useremail">Email</label>
        <input type="email" id="useremeail" />

        <label htmlFor="userpassword">Password</label>
        <input type="password" id="userpassword" />

        <button>Registration</button>
      </form>
    </div>
  );
};
