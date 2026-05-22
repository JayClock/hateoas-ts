import type { SchemaPlugin } from '../action/action.js';
import type { Cache } from '../cache/cache.js';
import type { StateFactory } from '../state/state.js';
import type { Transport } from '../transport/transport.js';

export type ContentTypeFactoryConfig =
  | StateFactory
  | [StateFactory, string]
  | {
      factory: StateFactory;
      quality?: string;
    };

export interface Config {
  baseURL: string;
  transport?: Transport;
  sendUserAgent?: boolean;
  schemaPlugin?: SchemaPlugin;
  cache?: Cache;
  contentTypeMap?: Record<string, ContentTypeFactoryConfig>;
}
