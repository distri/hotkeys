(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 distri\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "hotkeys\n=======\n\nHotkeys module for editors\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Hotkeys\n=======\n\nHotkeys module for the editors.\n\n    module.exports = (I={}, self=Core(I)) ->\n      self.extend\n        addHotkey: (key, method) ->\n          $(document).bind \"keydown\", key, (event) ->\n            if typeof method is \"function\"\n              method\n                editor: self\n            else\n              self[method]()\n\n            event.preventDefault()\n\n      return self\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.2.0\"\nremoteDependencies: [\n  \"//code.jquery.com/jquery-1.10.1.min.js\"\n  \"http://strd6.github.io/tempest/javascripts/envweb-v0.4.7.js\"\n]\n",
      "type": "blob"
    },
    "test/hotkeys.coffee": {
      "path": "test/hotkeys.coffee",
      "mode": "100644",
      "content": "Hotkeys = require \"../main\"\n\ndescribe \"hotkeys\", ->\n  it \"should be hot\", (done) ->\n    hotkeys = Hotkeys()\n    \n    hotkeys.addHotkey \"a\", ->\n      done()\n\n    $(document).trigger $.Event \"keydown\",\n      which: 65 # a\n      keyCode: 65\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  module.exports = function(I, self) {\n    if (I == null) {\n      I = {};\n    }\n    if (self == null) {\n      self = Core(I);\n    }\n    self.extend({\n      addHotkey: function(key, method) {\n        return $(document).bind(\"keydown\", key, function(event) {\n          if (typeof method === \"function\") {\n            method({\n              editor: self\n            });\n          } else {\n            self[method]();\n          }\n          return event.preventDefault();\n        });\n      }\n    });\n    return self;\n  };\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.2.0\",\"remoteDependencies\":[\"//code.jquery.com/jquery-1.10.1.min.js\",\"http://strd6.github.io/tempest/javascripts/envweb-v0.4.7.js\"]};",
      "type": "blob"
    },
    "test/hotkeys": {
      "path": "test/hotkeys",
      "content": "(function() {\n  var Hotkeys;\n\n  Hotkeys = require(\"../main\");\n\n  describe(\"hotkeys\", function() {\n    return it(\"should be hot\", function(done) {\n      var hotkeys;\n      hotkeys = Hotkeys();\n      hotkeys.addHotkey(\"a\", function() {\n        return done();\n      });\n      return $(document).trigger($.Event(\"keydown\", {\n        which: 65,\n        keyCode: 65\n      }));\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/hotkeys.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.2.0",
  "entryPoint": "main",
  "remoteDependencies": [
    "//code.jquery.com/jquery-1.10.1.min.js",
    "http://strd6.github.io/tempest/javascripts/envweb-v0.4.7.js"
  ],
  "repository": {
    "id": 14673639,
    "name": "hotkeys",
    "full_name": "distri/hotkeys",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/hotkeys",
    "description": "Hotkeys module for editors",
    "fork": false,
    "url": "https://api.github.com/repos/distri/hotkeys",
    "forks_url": "https://api.github.com/repos/distri/hotkeys/forks",
    "keys_url": "https://api.github.com/repos/distri/hotkeys/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/hotkeys/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/hotkeys/teams",
    "hooks_url": "https://api.github.com/repos/distri/hotkeys/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/hotkeys/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/hotkeys/events",
    "assignees_url": "https://api.github.com/repos/distri/hotkeys/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/hotkeys/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/hotkeys/tags",
    "blobs_url": "https://api.github.com/repos/distri/hotkeys/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/hotkeys/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/hotkeys/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/hotkeys/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/hotkeys/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/hotkeys/languages",
    "stargazers_url": "https://api.github.com/repos/distri/hotkeys/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/hotkeys/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/hotkeys/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/hotkeys/subscription",
    "commits_url": "https://api.github.com/repos/distri/hotkeys/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/hotkeys/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/hotkeys/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/hotkeys/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/hotkeys/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/hotkeys/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/hotkeys/merges",
    "archive_url": "https://api.github.com/repos/distri/hotkeys/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/hotkeys/downloads",
    "issues_url": "https://api.github.com/repos/distri/hotkeys/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/hotkeys/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/hotkeys/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/hotkeys/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/hotkeys/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/hotkeys/releases{/id}",
    "created_at": "2013-11-25T01:55:42Z",
    "updated_at": "2013-11-25T02:03:57Z",
    "pushed_at": "2013-11-25T02:03:56Z",
    "git_url": "git://github.com/distri/hotkeys.git",
    "ssh_url": "git@github.com:distri/hotkeys.git",
    "clone_url": "https://github.com/distri/hotkeys.git",
    "svn_url": "https://github.com/distri/hotkeys",
    "homepage": null,
    "size": 264,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 2,
    "branch": "v0.2.0",
    "defaultBranch": "master"
  },
  "dependencies": {}
});