declare module Triarc.Auth {
    class Events {
        static Login: string;
        static Logout: string;
    }
}
declare module Triarc.Auth {
    interface IAuthProxy {
        logout(): angular.IPromise<any>;
        login(data: ILoginViewModel): angular.IPromise<Triarc.Data.DataResponse<any>>;
        getAppUser<TAppUser>(): angular.IPromise<Triarc.Data.DataResponse<TAppUser>>;
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
        _userDeferred: angular.IDeferred<TAppUser>;
        constructor($http: angular.IHttpService, $q: angular.IQService, $proxy: IAuthProxy, $rootScope: angular.IRootScopeService, applicationUrl: string);
        login(userName: string, password: string): angular.IPromise<TAppUser>;
        logout(): void;
        getUser(): angular.IPromise<TAppUser>;
        _currentUser: TAppUser;
    }
}
