'use strict';

describe('review-champion-application-controller', function() {

  var scope,
      ctrl,
      sandbox,
      $httpBackend,
      services,
      stubs;

  beforeEach(function() {
    window.logf_path = __filename;
    sandbox = sinon.sandbox.create();
    angular.mock.module('cpZenPlatform')
  })

  beforeEach(inject(function(
    $rootScope,
    $controller,
    _$browser_,
    _$httpBackend_,
    _cdDojoService_
  ) {
    $httpBackend = _$httpBackend_;

    // Ref: https://github.com/angular/angular.js/issues/11373
    _$browser_['cookies'] = function() {
      return {};
    }

    scope = $rootScope.$new();

    services = {};
    services.cdDojo = _cdDojoService_;

    stubs = {
      cdDojo: {}
    };
    stubs.cdDojo.loadDojoLead = sandbox.stub(services.cdDojo, 'loadDojoLead');
    stubs.cdDojo.loadDojoLead.yields({
      application: {
        championDetails: {
          dateOfBirth: '01/01/2015',
          hasTechnicalMentorsAccess: true,
          hasVenueAccess: false
        }
      }
    });

    ctrl = $controller('review-champion-application-controller', {
      $scope: scope,
      $state: {
        params: {
          id: 0
        }
      },
      cdDojoService: services.cdDojo
    });
  }));

  afterEach(function() {
    sandbox.restore();
  });

  it('load dojo lead', function() {
    // verify calls
    expect(stubs.cdDojo.loadDojoLead.callCount).to.equal(1, logf('cdDojo.loadDojoLead'));

    // verify scope changes
    var ca = scope.championApplication;
    expect(ca.dateOfBirth).to.equal('01/01/2015',           logf('championApplication.dateOfBirth'));
    expect(ca.hasTechnicalMentorsAccess).to.equal('Yes',    logf('championApplication.hasTechnicalMentorsAccess'));
    expect(ca.hasVenueAccess).to.equal('No',                logf('championApplication.hasVenueAccess'));
  });
});