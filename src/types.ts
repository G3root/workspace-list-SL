import { z } from "zod";

export const dataSchema = z.object({
  id: z.number().min(1),
  name: z.string().min(1),
  location: z.string().min(1),
  costMinimum: z.string().optional(),
  capacity: z.string().optional(),
  aircon: z.string().optional(),
  WiFi: z.string().optional(),
  powerPortAvailability: z.string().optional(),
  workConditions: z.string().optional(),
  hours: z.string().optional(),
});

export type Data = z.infer<typeof dataSchema>;
export type DataWithoutID = Omit<Data, "id">;

export interface filterItemsArgs {
  query: string;
  location: string;
  data: Data[];
}
