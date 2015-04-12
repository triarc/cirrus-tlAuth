var Triarc;
(function (Triarc) {
    var Auth;
    (function (Auth) {
        var Events = (function () {
            function Events() {
            }
            Events.Login = "Login";
            Events.Logout = "Logout";
            return Events;
        })();
        Auth.Events = Events;
    })(Auth = Triarc.Auth || (Triarc.Auth = {}));
})(Triarc || (Triarc = {}));
var Triarc;
(function (Triarc) {
    var Auth;
    (function (Auth) {
        ;
        ;
    })(Auth = Triarc.Auth || (Triarc.Auth = {}));
})(Triarc || (Triarc = {}));
/// <reference path="events.ts" />
/// <reference path="iauthproxy.ts" />
var Triarc;
(function (Triarc) {
    var Auth;
    (function (Auth) {
        Auth.mod = angular.module("tlAuth", []);
    })(Auth = Triarc.Auth || (Triarc.Auth = {}));
})(Triarc || (Triarc = {}));
/// <reference path="tlauth.module.ts" />
var Triarc;
(function (Triarc) {
    var Auth;
    (function (Auth) {
        var AuthService = (function () {
            function AuthService($http, $q, $proxy, $rootScope, applicationUrl) {
                this.$http = $http;
                this.$q = $q;
                this.$proxy = $proxy;
                this.$rootScope = $rootScope;
                this.applicationUrl = applicationUrl;
                this._userDeferred = null;
            }
            AuthService.prototype.login = function (userName, password) {
                var _this = this;
                var deffered = this.$q.defer();
                this.$proxy.login({ username: userName, password: password, rememberMe: true }).then(function (response) {
                    _this.$rootScope.$broadcast(Auth.Events.Login);
                    deffered.resolve(response);
                }, function (error) {
                    deffered.reject(error);
                });
                return deffered.promise;
            };
            AuthService.prototype.logout = function () {
                localStorage.removeItem(AuthService.authKey);
                this.$proxy.logout();
                this.$rootScope.$broadcast(Auth.Events.Logout);
            };
            AuthService.prototype.getUser = function () {
                var _this = this;
                if (this._userDeferred == null) {
                    this._userDeferred = this.$q.defer();
                    this.$proxy.getAppUser().then(function (response) {
                        _this._currentUser = response.data;
                        var userDeferred = _this._userDeferred;
                        if (_this._currentUser == null) {
                            _this._userDeferred = null;
                        }
                        userDeferred.resolve(_this._currentUser);
                    }, function (req) {
                        _this._userDeferred.reject(req);
                    });
                }
                return this._userDeferred.promise;
            };
            AuthService.serviceId = "$auth";
            //static $inject = ['$http', '$proxy', '$rootScope', JurDesk.ServiceContainer.serviceId];
            AuthService.authKey = "authorizationData";
            return AuthService;
        })();
        Auth.AuthService = AuthService;
        Auth.mod.service(AuthService.serviceId, AuthService);
    })(Auth = Triarc.Auth || (Triarc.Auth = {}));
})(Triarc || (Triarc = {}));
