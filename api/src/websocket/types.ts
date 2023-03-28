import type { Accountability, Query } from '@directus/shared/types';
import type { WebSocket } from 'ws';
import type { IncomingMessage } from 'http';
import type internal from 'stream';

export type AuthenticationState = {
	accountability: Accountability | null;
	expires_at: number | null;
	refresh_token?: string;
};

export type WebSocketClient = WebSocket &
	AuthenticationState & { uid: string | number; auth_timer: NodeJS.Timer | null };
export type UpgradeRequest = IncomingMessage & AuthenticationState;

export type Subscription = {
	uid?: string | number;
	query?: Query;
	item?: string | number;
	status?: boolean;
	collection: string;
	client: WebSocketClient;
};

export type UpgradeContext = {
	request: IncomingMessage;
	socket: internal.Duplex;
	head: Buffer;
};

export type GraphQLSocket = {
	client: WebSocketClient;
};