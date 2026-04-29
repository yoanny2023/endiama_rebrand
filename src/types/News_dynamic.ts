import { News } from "./News";

export type NewsDynamic = Omit<News,"excerpt"> & {
  content: string;
};