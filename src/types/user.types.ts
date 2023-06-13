
export enum TUserContextRole {
  ADMIN = "admin",
  USER = "user",
}

export type UserContextValue = {
  currentUser: TUserContextRole;
  setCurrentUser: React.Dispatch<React.SetStateAction<TUserContextRole>>;
};
