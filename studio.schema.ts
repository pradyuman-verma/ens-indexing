import { String, Array } from "@blockflow-labs/utils";

export interface Greeter {
  id: String;
  greetings: Array;
}

interface Domain {
  id: String;
  name: String;
  labelName: String;
  owner: String;
  baseCost: String;
  premium: String;
  expires: String;
}
