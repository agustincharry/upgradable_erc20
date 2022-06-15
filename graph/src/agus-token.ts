import { BigInt } from "@graphprotocol/graph-ts"
import {
  AgusToken,
  AdminChanged,
  Approval,
  BeaconUpgraded,
  Initialized,
  OwnershipTransferred,
  Transfer,
  Upgraded
} from "../generated/AgusToken/AgusToken"
import { TransferEntity } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {}

export function handleApproval(event: Approval): void {}

export function handleBeaconUpgraded(event: BeaconUpgraded): void {}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {
  let id = event.transaction.hash.toHex()
  let t = TransferEntity.load(id)
  if (t == null) {
    t = new TransferEntity(id)
  }
  t.from = event.params.from;
  t.to = event.params.to;
  t.value = event.params.value;
  t.blockSize = event.block.size;
  t.gasPrice = event.transaction.gasPrice;
  t.timestamp = event.block.timestamp;
  t.save()
}

export function handleUpgraded(event: Upgraded): void {}
