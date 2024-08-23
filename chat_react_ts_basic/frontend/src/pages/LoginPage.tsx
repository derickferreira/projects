const LoginPage = () => {
  return (
    <section className="login">
      <h2>Login</h2>
      <form className="login_form">
        <input
          type="text"
          className="login_input"
          placeholder="nickname"
          required
        />
        <button type="submit" className="login_button">
          Enter
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
