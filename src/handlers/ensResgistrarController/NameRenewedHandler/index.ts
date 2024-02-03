import { IEventContext } from "@blockflow-labs/utils";

/**
 * @dev Event::NameRenewed(string name, bytes32 label, uint256 cost, uint256 expires)
 * @param context trigger object with contains {event: {name ,label ,cost ,expires }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const NameRenewedHandler = async (
  context: IEventContext,
  bind: Function,
) => {
  // Implement your event handler logic for NameRenewed here

  const { event, transaction, block, log } = context;
  const { name, label, cost, expires } = event;
};
