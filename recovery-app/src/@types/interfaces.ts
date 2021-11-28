import {
  ECommentType,
  EExerciseDifficulty,
  EExerciseType,
  EJoint,
  EMuscleCondition,
  EMuscleGroup,
  EMuscleID,
} from "./enums";

export interface IUser {
  id: string;
  email: string;
  name: string;
  age: number;
  darkMode: boolean;
  points: number;
  picture: string;
  location: string;
  bmr: number;
  signedAt: Date;
  body: IBody;
  comments: Array<IComment>;
  cookedFood: Array<IFood>;
  favoriteFood: Array<IUserFavFood>;
  problems: Array<IUserHasProblem>;
  favoriteExercises: Array<IUserFavExercise>;
  messages: Array<IMessage>;
  products: Array<IProduct>;
}

export interface IUserFavExercise {
  userID: string;
  exerciseID: number;
}

export interface IUserFavFood {
  userID: string;
  foodID: number;
}

export interface IUserHasProblem {
  userID: string;
  problemID: number;
}

export interface IBody {
  userID: string;
  muscles: Array<IMuscle>;
}

export interface IMuscle {
  id: EMuscleID;
  bodyID: String;
  exercises: Array<IMuscleForExercise>;
  problems: Array<IMuscleHasProblem>;
  joints: Array<EJoint>;
  condition: EMuscleCondition;
  muscleGroups: Array<EMuscleGroup>;
}

export interface IMuscleForExercise {
  muscleID: EMuscleID;
  exerciseID: number;
}

export interface IMuscleHasProblem {
  muscleID: EMuscleID;
  problemID: number;
}

export interface IProblem {
  id: number;
  name?: string;
  users: Array<IUserHasProblem>;
  muscleGroups: Array<EMuscleGroup>;
  joints: Array<EJoint>;
  muscles: Array<IMuscle>;
  comments: Array<IComment>;
  hidden: boolean;
}

export interface IExercise {
  id: number | null;
  type: EExerciseType;
  name: String;
  difficulty: EExerciseDifficulty;
  muscles: Array<IMuscleForExercise>;
  favoriteByUsers: Array<IUserFavFood>;
  comments: Array<IComment>;
  messages: Array<IMessage>;
}

export interface IMessage {
  id: number;
  text: string;
  exercise: Array<IExercise>;
  food: Array<IFood>;
  userID: String;
  createdAt: Date;
  editedAt: Date;
  hidden: boolean;
}

export interface IFood {
  id: number;
  name: string;
  proteins: number;
  carbs: number;
  fats: number;
  kcal: number;
  description: string;
  photos: Array<Photo>;
  ingredients: Array<String>;
  comments: Array<IComment>;
  messages: Array<IMessage>;
  cookedByID: String;
  favoriteBy: Array<IUserFavFood>;
  createdAt: Date;
  editedAt: Date;
  hidden: boolean;
}

export interface IComment {
  id: number;
  text: string;
  userID: string;
  foodID?: number;
  exerciseID?: number;
  problemID?: number;
  likes: number;
  type: ECommentType;
  createdAt: Date;
  editedAt: Date;
  hidden: boolean;
}

export interface Photo {
  id: number;
  url: string;
  foodID: number;
  hidden: boolean;
}

export interface IProduct {
  id: number;
  userID: string;
  name: string;
  price: number;
}
