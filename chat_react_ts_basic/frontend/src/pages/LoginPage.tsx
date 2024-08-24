import { FormEvent, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./../context/UserContext";

// types
type colour = Array<string>;

// interface
interface IUser {
  id: string;
  name: string;
  colour: string;
}

// variables, objects or arrays

const colours: colour = [
  "cadetblue",
  "darkgoldenrod",
  "cornflowerblue",
  "hotpink",
  "gold",
  "aqua",
  "darkgreen",
  "midnightblue",
];

// functions or logic
const randomColour = (colours: colour): string => {
  return colours[Math.floor(Math.random() * colours.length)];
};

const LoginPage = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  if (!context)
    throw new Error("UserContext must be used within a UserProvider");

  const [nickname, setNickname] = useState<string>("");
  const { setUser } = context;

  const handleLogin = (event: FormEvent): void => {
    event.preventDefault();

    const newUser: IUser = {
      id: crypto.randomUUID(),
      name: nickname,
      colour: randomColour(colours),
    };

    setUser(newUser);
    setNickname("");

    navigate("/chat");
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form className="login_form" onSubmit={handleLogin}>
        <input
          type="text"
          className="login_input"
          placeholder="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
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
