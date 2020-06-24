interface Authentication {
  domain: string;
  username: string;
  password:string;
}

interface AuthAction {
  type: typeof import('./actionType').LOGIN;
  data: Authentication;
}

declare type StateAuth = Authentication;
declare type ActionAuth = AuthAction;
