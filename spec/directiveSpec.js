describe('verify check directive', function() {
    var scope, $compile, $http, $httpBackend, $interval;

    beforeEach(module('check'));

    beforeEach(inject(function(_$http_, _$rootScope_, _$interval_, _$compile_, _$httpBackend_, $injector) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $http = _$http_;
        $interval = _$interval_;
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('/check').respond({});
        //console.log('sss', $injector.get(''));
    }));


    /*
    beforeEach(inject(function(_$http_, _$rootScope_, _$interval_, _$compile_, _$httpBackend_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $http = _$http_;
        $interval = _$interval_;
        $httpBackend = _$httpBackend_;
    }));*/


    it('xxx', function() {
        //console.log($compile);
        expect(1).toEqual(1);
    });

    it('check init params', function() {
        var cnt = '<check-diretive url="/check" number=3 interval=5></check-directive>';
        var element = $compile(cnt)($rootScope);
        $rootScope.$digest();
        scope = element.isolateScope();
        expect(scope.url).toEqual('/check');
        expect(scope.number).toEqual('3');
        expect(scope.interval).toEqual('5');
    });

    it('check empty parmas', function() {
        var element = $compile('<check-diretive></check-diretive>')($rootScope);
        scope = element.isolateScope();
        expect(scope.url).toEqual('/check');
        expect(scope.number).toEqual(5);
        expect(scope.interval).toEqual(10);
    });

    it('check interval and http', function() {
        var element = $compile('<check-diretive></check-diretive>')($rootScope);
        scope = element.isolateScope();
        $rootScope.$digest();
        expect(scope.msgs.length).toEqual(0);

        //add interval check
        $httpBackend.expectGET('/check').respond({});
        $interval.flush(11);
        $httpBackend.flush();

        console.log('scope.msgs.length',scope.msgs.length);
        expect(scope.msgs.length).toEqual(1);
    });

    it('test params', function() {
        var element = $compile('<check-diretive></check-diretive>')($rootScope);
        scope = element.isolateScope();

        expect(scope.msgs.length).toEqual(0);

        $interval.flush(60);
        $httpBackend.flush();

        expect(scope.msgs.length).toEqual(5);
    });
















    it("test interval", function() {
        var html = '<check-diretive></check-diretive>';
        var element = $compile(html)($rootScope);
        scope = element.isolateScope();
        
  //      $httpBackend.whenGET('/check').respond('OK', {});

        $rootScope.$digest();
        console.log('iterval', scope.msgs.length);
        expect(scope.msgs.length).toEqual(0);
        $httpBackend.expectGET('/check').respond('OK', {});
        $interval.flush(11);
        $httpBackend.flush();
        
        console.log('iterval after', scope.msgs.length);
        expect(scope.msgs.length).toEqual(1);

    });














});
