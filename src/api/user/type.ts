// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ResLogin {
    token: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
}

// 注册模块
export namespace Register {
  export interface ReqRegisterForm {
    username: string;
    password: string;
  }
}
