import React, { createContext, ReactNode, useContext } from "react";
import { ChatUser } from "../types/type";

const chatData: ChatUser[] = [
  { id: 1, name: "Mario Rossi", time: "22:22" },
  { id: 2, name: "Luca Bianchi", time: "21:10" },
  { id: 3, name: "Giulia Verdi", time: "20:45" },
  { id: 4, name: "Francesca Neri", time: "19:30" },
  { id: 5, name: "Andrea Russo", time: "18:15" },
  { id: 6, name: "Elena Bruno", time: "17:00" },
  { id: 7, name: "Marco Conti", time: "16:50" },
  { id: 8, name: "Sara Greco", time: "15:35" },
  { id: 9, name: "Paolo Ricci", time: "14:20" },
  { id: 10, name: "Anna Longo", time: "13:05" },
  { id: 11, name: "Ringo Liatra", time: "yesterday" },
  { id: 12, name: "Ringo Starr", time: "7/8/24" },
  { id: 13, name: "Orazio Maisazio", time: "7/8/24" },
  { id: 14, name: "Ugo Toscolo", time: "4/8/24" },
  { id: 15, name: "Gruppo divertente", time: "2/8/24" },
  { id: 16, name: "Gruppo Noioso", time: "2/8/24" },
  { id: 17, name: "Pietro Smusi", time: "1/8/24" },
];

interface ChatContextType {
  chatData: ChatUser[];
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  return (
    <ChatContext.Provider value={{ chatData }}>{children}</ChatContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
