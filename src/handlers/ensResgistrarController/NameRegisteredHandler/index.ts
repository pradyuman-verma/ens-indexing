import { IBind, IEventContext } from "@blockflow-labs/utils";

import { Domain } from "../../../types/schema";
/**
 * @dev Event::NameRegistered(string name, bytes32 label, address owner, uint256 baseCost, uint256 premium, uint256 expires)
 * @param context trigger object with contains {event: {name ,label ,owner ,baseCost ,premium ,expires }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const NameRegisteredHandler = async (
  context: IEventContext,
  bind: IBind
) => {
  // Implement your event handler logic for NameRegistered here
  const { event } = context;
  let { name, label, owner, baseCost, premium, expires } = event;

  name = name.toString();
  label = label.toString();
  owner = owner.toString().toLowerCase();
  baseCost = baseCost.toString();
  premium = premium.toString();
  expires = Number(expires.toString());

  const domainHelper = bind(Domain);
  let isNewRegistration = false;

  let domain = await domainHelper.findOne({ id: label.toString() });
  if (!domain) {
    domain = await domainHelper.create({ id: label.toString() });
    isNewRegistration = !isNewRegistration;
  }

  if (domain.labelName !== name) {
    domain.name = name + ".eth";
    domain.labelName = name;
    domain.owner = owner;
    domain.baseCost = baseCost;
    domain.premium = premium;
    domain.expires = new Date(expires * 1000).toISOString();

    // now we have updated the domain mapping, we will save it
    if (isNewRegistration) await domainHelper.save(domain);
    else await domainHelper.updateOne({ id: domain.id.toString() }, domain);
  }
};
