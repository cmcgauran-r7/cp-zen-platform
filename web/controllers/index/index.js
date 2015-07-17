'use strict';

var controller = module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('index');
    }
  },

  {
    method: 'GET',
    path: '/login',
    handler: function (request, reply) {
      reply.view('index');
    }
  },

  {
    method: 'GET',
    path: '/register',
    handler: function (request, reply) {
      reply.view('index');
    }
  },

  {
    method: 'GET',
    path: '/create-dojo',
    handler: function (request, reply) {
      reply.view('index');
    }
  },

  {
    method: 'GET',
    path: '/start-dojo',
    handler: function (request, reply) {
      reply.view('index');
    }
  },

  {
    method: 'GET',
    path: '/charter',
    handler: function (request, reply) {
      reply.view('index');
    }
  },

  {
    method: 'GET',
    path: '/dojo-list-index',
    handler: function (request, reply) {
      reply.view('index');
    }
  },

  {
    method: 'GET',
    path: '/terms-and-conditions',
    handler: function (request, reply) {
      reply.view('index');
    }
  },

  // TODO
  // {	    
  //   method: 'GET',
  //   path: '/dojo/:alpha2([a-zA-Z]{2})/*',
  //   handler: function (request, reply) {
  //     reply.view('index');
  //   }
  // });

  {
    method: 'GET',
    path: '/dojo/{id}',
    handler: function (request, reply) {
      reply.view('dashboard/index');
    }
  },

  {
    method: 'GET',
    path: '/accept_dojo_user_invitation/{dojoId}/{userInviteToken}',
    handler: function (request, reply) {
      reply.view('index');
    }
  },

  {
    method: 'GET',
    path: '/accept_dojo_user_request/{userId}/{userInviteToken}', 
    handler: function (request, reply) {
      reply.view('index');
    }
  },

  {
    method: 'GET',
    path: '/accept-parent-guardian-request/{parentProfileId}/{childProfileId}/{inviteToken}', 
    handler: function (request, reply){
      reply.view('index');
    }
  },

  {
    method: 'GET',
    path: '/profile/{userId}',
    handler: function (request, reply) {
      reply.view('index');
    }
  }, 

  {
    method: 'GET',
    path: '/templates/login',
    handler: function (request, reply) {
      reply.view('accounts/login');
    }
  },

  {
    method: 'GET',
    path: '/templates/register',
    handler: function (request, reply) {
      reply.view('accounts/register');
    }
  },

  {
    method: 'GET',
    path: '/templates/terms-and-conditions',
    handler: function (request, reply) {
      reply.view('accounts/terms-and-conditions');
    }
  }
];