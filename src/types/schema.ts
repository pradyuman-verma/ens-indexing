// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

export class Greeter {
  static entity = "Greeter";
  static schema = {
    id: "String",
    greetings: "Array",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class Domain {
  static entity = "Domain";
  static schema = {
    id: "String",
    name: "String",
    labelName: "String",
    owner: "String",
    baseCost: "String",
    premium: "String",
    expires: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}
