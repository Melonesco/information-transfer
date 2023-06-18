export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  avatarUrl: string | null;
  description: string | null;
  isAdmin: boolean;
}

export interface IPost {
  _id: string;
  createdAt: string;
  fileUrl: string;
  fileFormat: string;
  imageUrl: string;
  text: string;
  title: string;
  updatedAt: string;
  user: IUser;
  viewsCount: number;
}
