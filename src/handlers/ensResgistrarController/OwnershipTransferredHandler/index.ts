import { IEventContext } from "@blockflow-labs/utils";

/**
 * @dev Event::OwnershipTransferred(address previousOwner, address newOwner)
 * @param context trigger object with contains {event: {previousOwner ,newOwner }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const OwnershipTransferredHandler = async (
  context: IEventContext,
  bind: Function,
) => {
  // Implement your event handler logic for OwnershipTransferred here

  const { event, transaction, block, log } = context;
  const { previousOwner, newOwner } = event;
};
