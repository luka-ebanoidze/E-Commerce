
export enum TUserContextRole {
  ADMIN = "admin",
  USER = "user",
  UN = "un",
}

export type UserContextValue = {
  currentUser: TUserContextRole;
  setCurrentUser: React.Dispatch<React.SetStateAction<TUserContextRole>>;
};
