type UserProps = {
  data: {
    nickname: string;
    email: string;
    password: string;
    repeatPassword: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

import "./style/FormStyle.css";

const UserForm = ({ data, updateFieldHandler }: UserProps) => {
  return (
    <div>
      <label>
        <span>
          Nickname <span>*</span>
        </span>
        <input
          type="text"
          value={data.nickname || ""}
          onChange={(e) => updateFieldHandler("nickname", e.target.value)}
        />
      </label>
      <label>
        <span>
          E-mail <span>*</span>
        </span>
        <input
          type="text"
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </label>
      <label>
        <span>
          Password <span>*</span>
        </span>
        <input
          type="text"
          value={data.password || ""}
          onChange={(e) => updateFieldHandler("password", e.target.value)}
        />
      </label>
      <label>
        <span>
          Repeat Password <span>*</span>
        </span>
        <input
          type="text"
          value={data.repeatPassword || ""}
          onChange={(e) => updateFieldHandler("repeatPassword", e.target.value)}
        />
      </label>
    </div>
  );
};

export default UserForm;
