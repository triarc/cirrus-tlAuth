declare module Triarc.Auth {
    class Events {
        static Login: string;
        static Logout: string;
    }
}
declare module Triarc.Auth {
    interface IAuthProxy {
        logout(): ng.IPromise<any>;
        login(data: ILoginViewModel): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getAppUser<TAppUser>(): ng.IPromise<Triarc.Data.DataResponse<TAppUser>>;
    }
    interface ILoginViewModel {
        username: string;
        password: string;
        rememberMe: boolean;
    }
}
declare module Triarc.Auth {
    var mod: ng.IModule;
}
declare module Triarc.Auth {
    class AuthService<TAppUser> {
        private $http;
        private $q;
        private $proxy;
        private $rootScope;
        private applicationUrl;
        static serviceId: string;
        private static authKey;
        _userDeferred: ng.IDeferred<TAppUser>;
        constructor($http: ng.IHttpService, $q: ng.IQService, $proxy: IAuthProxy, $rootScope: ng.IRootScopeService, applicationUrl: string);
        login(userName: string, password: string): ng.IPromise<TAppUser>;
        logout(): void;
        getUser(): ng.IPromise<TAppUser>;
        _currentUser: TAppUser;
    }
}
