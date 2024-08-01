// css
import classes from "./style/SearchForm.module.css";

import { FormEvent } from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/search?q=" + query);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form_container}>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
