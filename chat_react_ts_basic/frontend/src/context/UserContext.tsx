import React, { createContext, useState, ReactNode } from "react";

// interface
interface IUser {
  id: string;
  name: string;
  colour: string;
}

interface UserContextType {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
