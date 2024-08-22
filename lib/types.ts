export type Message = {
  type: "user" | "assistant" | "system";
  content: string;
  html?: any;
};
