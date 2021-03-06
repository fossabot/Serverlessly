import { PlatformAdapter } from '../platform-adapter';

export function getPlatformHandler<TProtocolContext, TPlatformHandler>(
  platformAdapter: PlatformAdapter<TProtocolContext, TPlatformHandler>,
  protocolContext: TProtocolContext
): TPlatformHandler {
  try {
    return platformAdapter(protocolContext);
  } catch (error) {
    throw new Error(`Faulty Platform Adapter\n${error}`);
  }
}
