import { OpaqueToken } from '@angular/core';
import { environment } from '../environments/environment';

export let APP_CONFIG = new OpaqueToken('app.config');

export class AppConfig {
  serverUrl: string;
  apiEndpoint: string;
  clientId: string;
}

const CONFIG_PRODUCTION: AppConfig = {
  serverUrl: "https://vadimapi.herokuapp.com",
  apiEndpoint: "https://vadimapi.herokuapp.com/api",
  clientId: "77d40037169ced17fa95bb17a8b2a55b0fcfabbf9b37400fa104a01a37fc1c0b"
};

const CONFIG_DEVELOPMENT: AppConfig = {
  serverUrl: "http://localhost:3000",
  apiEndpoint: "http://localhost:3000/api",
  clientId: "bb9818f70964383d26bd57bb60715f7430311b6ccb5021152321932a8f261a43"
};

export function appConfig(): AppConfig {
  return environment.production ? CONFIG_PRODUCTION : CONFIG_DEVELOPMENT
}
