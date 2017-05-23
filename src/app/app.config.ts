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
  serverUrl: "https://vadimapi.herokuapp.com",
  apiEndpoint: "https://vadimapi.herokuapp.com/api",
  clientId: "77d40037169ced17fa95bb17a8b2a55b0fcfabbf9b37400fa104a01a37fc1c0b"
};

export function appConfig(): AppConfig {
  return environment.production ? CONFIG_PRODUCTION : CONFIG_DEVELOPMENT
}
