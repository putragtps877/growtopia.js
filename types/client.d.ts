export interface ClientType {
  ip: string;
  port: number;
  setEmit: (emit: (...args: any[]) => void) => void;
  create: (maxPeers: number) => void;
  service: () => void;
  deInit: () => void;
  send: (peerID: number, count: number, packets: Buffer[]) => void;
  disconnect: (peerID: number) => void;
  disconnectLater: (peerID: number) => void;
  disconnectNow: (peerID: number) => void;
  toggleNewPacket: () => void;
}

export interface ClientOptions {
  /** Built-in https web server */
  https: boolean;
}
