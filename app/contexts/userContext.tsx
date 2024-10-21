import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "types";
// import { getChatFromUserChat } from "~/utils/chats";

// Define the context type to include both the active chat and a setter function
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  users: User[];
  setUsers: (users: User[]) => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use the active chat context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within an UserProvider");
  }
  return context;
};

// Provider component that manages the state for active chat
interface UserProviderProps {
  initialUser: User | null;
  initialUsers: User[];
  children: ReactNode;
}

export const UserProvider = ({
  initialUser,
  children,
  initialUsers,
}: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);
  const [users, setUsers] = useState<User[]>(initialUsers);

  return (
    <UserContext.Provider value={{ user, setUser, users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
