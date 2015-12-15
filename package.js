Package.describe({
  name: 'poetic:harvest',
  version: '0.0.1',
  summary: 'Packaged harvest plugin.',
  git: 'https://github.com/poetic/meteor-harvest.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('harvest.js');

  api.export( 'Harvest' );
});

Npm.depends({harvest: '0.1.4'});
