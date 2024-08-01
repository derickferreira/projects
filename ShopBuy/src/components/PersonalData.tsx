type UserProps = {
  data: {
    name: string;
    birth: string;
    gender: string;
    phoneNumber: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

const PersonalData = ({ data, updateFieldHandler }: UserProps) => {
  return (
    <div>
      <label>
        <span>
          Full name <span>*</span>
        </span>
        <input
          type="text"
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </label>
      <label>
        <span>
          Data of birth <span>*</span>
        </span>
        <input
          type="date"
          value={data.birth || ""}
          onChange={(e) => updateFieldHandler("birth", e.target.value)}
        />
      </label>
      <label>
        <span>
          Gender <span>*</span>
        </span>
        <select
          value={data.gender || ""}
          onChange={(e) => updateFieldHandler("gender", e.target.value)}
        >
          <option value="male">Male</option>
          <option value="fem">Female</option>
        </select>
      </label>
      <label>
        <span>
          Phone Number <span>*</span>
        </span>
        <input
          type="text"
          value={data.phoneNumber || ""}
          onChange={(e) => updateFieldHandler("phoneNumber", e.target.value)}
        />
      </label>
    </div>
  );
};

export default PersonalData;
