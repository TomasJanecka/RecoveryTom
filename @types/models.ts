import { EJoint, EMuscleID } from "./enums";
import {
  TCommentType,
  TExerciseDifficulty,
  TExerciseType,
  TMuscleCondition,
  TMuscleGroup,
} from "./types";

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
  comments: IComments;
  cookedFood: Array<IFood>;
  favoriteFood: Array<IFood>;
  problems: IProblems;
  favoriteExercises: IExercises;
  messages: IMessages;
  products: IProduct;
}

export interface IBody {
  userID: string;
  muscles: IMuscles;
}

export interface IMuscle {
  id: EMuscleID;
  bodyID: String;
  exercises: IExercises;
  problems: IProblems;
  joints: Array<EJoint>;
  condition: TMuscleCondition;
  muscleGroups: Array<TMuscleGroup>;
}

interface IProblem {
  id: number;
  name?: string;
  users: IUsers;
  muscleGroups: Array<TMuscleGroup>;
  joints: Array<EJoint>;
  muscles: IMuscles;
  comments: IComments;
  hidden: boolean;
}

export interface IExercise {
  id: number;
  type: TExerciseType;
  name: String;
  difficulty: TExerciseDifficulty;
  muscles: IMuscles;
  favoriteByUsers: IUsers;
  comments: IComments;
  messages: IMessages;
}

export interface IMessage {
  id: number;
  text: string;
  exercise: IExercises;
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
  comments: IComments;
  messages: IMessages;
  cookedByID: String;
  favoriteBy: IUsers;
  createdAt: Date;
  editedAt: Date;
  hidden: boolean;
}

interface IComment {
  id: number;
  text: string;
  foodID?: number;
  userID: string;
  exerciseID?: number;
  problemID?: number;
  likes: number;
  type: TCommentType;
  createdAt: Date;
  editedAt: Date;
  hidden: boolean;
}

interface Photo {
  id: number;
  url: string;
  foodID: number;
  hidden: boolean;
}

interface IProduct {
  id: number;
  userID: string;
  name: string;
  price: number;
}

interface IExercises extends Array<IExercise> {}
interface IProblems extends Array<IProblem> {}
interface IMuscles extends Array<IMuscle> {}
interface IMessages extends Array<IMessage> {}
interface IComments extends Array<IComment> {}
interface IUsers extends Array<IUser> {}
