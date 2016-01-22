define('mdrregister/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('mdrregister/tests/components/input-date-picker.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/input-date-picker.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/input-date-picker.js should pass jshint.\ncomponents/input-date-picker.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-date-picker.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-date-picker.js: line 4, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-date-picker.js: line 9, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-date-picker.js: line 34, col 13, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-date-picker.js: line 15, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-date-picker.js: line 16, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-date-picker.js: line 17, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-date-picker.js: line 19, col 5, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n9 errors');
  });
});
define('mdrregister/tests/components/input-radio.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/input-radio.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/input-radio.js should pass jshint.\ncomponents/input-radio.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-radio.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-radio.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-radio.js: line 9, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-radio.js: line 25, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-radio.js: line 26, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-radio.js: line 37, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-radio.js: line 38, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-radio.js: line 39, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n9 errors');
  });
});
define('mdrregister/tests/components/input-select-option.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/input-select-option.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/input-select-option.js should pass jshint.\ncomponents/input-select-option.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-select-option.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select-option.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select-option.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-select-option.js: line 19, col 26, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-select-option.js: line 30, col 26, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-select-option.js: line 15, col 8, Missing property name.\ncomponents/input-select-option.js: line 16, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select-option.js: line 17, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select-option.js: line 26, col 8, Missing property name.\ncomponents/input-select-option.js: line 27, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select-option.js: line 28, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n12 errors');
  });
});
define('mdrregister/tests/components/input-select.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/input-select.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/input-select.js should pass jshint.\ncomponents/input-select.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-select.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-select.js: line 13, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select.js: line 14, col 17, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\ncomponents/input-select.js: line 22, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select.js: line 23, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select.js: line 24, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select.js: line 25, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select.js: line 26, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select.js: line 27, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/input-select.js: line 28, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n13 errors');
  });
});
define('mdrregister/tests/components/mdr-field-error.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/mdr-field-error.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/mdr-field-error.js should pass jshint.\ncomponents/mdr-field-error.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/mdr-field-error.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-field-error.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-field-error.js: line 8, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-field-error.js: line 8, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-field-error.js: line 13, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/mdr-field-error.js: line 25, col 8, Missing property name.\n\n7 errors');
  });
});
define('mdrregister/tests/components/mdr-header.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/mdr-header.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/mdr-header.js should pass jshint.\ncomponents/mdr-header.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/mdr-header.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-header.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-header.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('mdrregister/tests/components/mdr-page-error.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/mdr-page-error.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/mdr-page-error.js should pass jshint.\ncomponents/mdr-page-error.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/mdr-page-error.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-page-error.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-page-error.js: line 8, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-page-error.js: line 8, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-page-error.js: line 12, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n6 errors');
  });
});
define('mdrregister/tests/components/mdr-progress-bar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/mdr-progress-bar.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/mdr-progress-bar.js should pass jshint.\ncomponents/mdr-progress-bar.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/mdr-progress-bar.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/mdr-progress-bar.js: line 7, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-progress-bar.js: line 7, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/mdr-progress-bar.js: line 12, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/mdr-progress-bar.js: line 15, col 42, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncomponents/mdr-progress-bar.js: line 20, col 44, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('mdrregister/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('mdrregister/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('mdrregister/tests/helpers/is-equal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/is-equal.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/is-equal.js should pass jshint.\nhelpers/is-equal.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/is-equal.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/is-equal.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/is-equal.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/is-equal.js: line 6, col 3, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/is-equal.js: line 7, col 3, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n6 errors');
  });
});
define('mdrregister/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'mdrregister/tests/helpers/start-app', 'mdrregister/tests/helpers/destroy-app'], function (exports, _qunit, _mdrregisterTestsHelpersStartApp, _mdrregisterTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _mdrregisterTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _mdrregisterTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('mdrregister/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('mdrregister/tests/helpers/resolver', ['exports', 'ember/resolver', 'mdrregister/config/environment'], function (exports, _emberResolver, _mdrregisterConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _mdrregisterConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mdrregisterConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('mdrregister/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('mdrregister/tests/helpers/start-app', ['exports', 'ember', 'mdrregister/app', 'mdrregister/config/environment'], function (exports, _ember, _mdrregisterApp, _mdrregisterConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _mdrregisterConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _mdrregisterApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('mdrregister/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('mdrregister/tests/mixins/api.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins');
  QUnit.test('mixins/api.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mixins/api.js should pass jshint.\nmixins/api.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmixins/api.js: line 4, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmixins/api.js: line 10, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmixins/api.js: line 10, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmixins/api.js: line 14, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmixins/api.js: line 14, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmixins/api.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 50, col 22, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 22, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmixins/api.js: line 23, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmixins/api.js: line 24, col 40, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 25, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmixins/api.js: line 26, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmixins/api.js: line 61, col 30, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 65, col 36, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 65, col 43, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 66, col 17, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 67, col 16, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 67, col 23, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 68, col 16, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\nmixins/api.js: line 69, col 18, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n23 errors');
  });
});
define('mdrregister/tests/models/agent.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/agent.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/agent.js should pass jshint.\nmodels/agent.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/agent.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/agent.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/agent.js: line 4, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/agent.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodels/agent.js: line 23, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n6 errors');
  });
});
define('mdrregister/tests/models/assessor.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/assessor.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/assessor.js should pass jshint.\nmodels/assessor.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/assessor.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/assessor.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/assessor.js: line 4, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/assessor.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodels/assessor.js: line 23, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n6 errors');
  });
});
define('mdrregister/tests/models/doctor.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/doctor.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/doctor.js should pass jshint.\nmodels/doctor.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/doctor.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/doctor.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/doctor.js: line 4, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/doctor.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodels/doctor.js: line 23, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n6 errors');
  });
});
define('mdrregister/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('mdrregister/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/application.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/application.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/application.js: line 4, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/application.js: line 9, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/application.js: line 9, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/application.js: line 13, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/application.js: line 17, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/application.js: line 18, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/application.js: line 19, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/application.js: line 22, col 43, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/application.js: line 28, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n12 errors');
  });
});
define('mdrregister/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/index.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/index.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 8, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('mdrregister/tests/routes/register/agent.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/register');
  QUnit.test('routes/register/agent.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/register/agent.js should pass jshint.\nroutes/register/agent.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/agent.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/agent.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/agent.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/agent.js: line 5, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/agent.js: line 7, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 7, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/agent.js: line 12, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 16, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 104, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 105, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 106, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 107, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 108, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 112, col 26, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 112, col 33, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/agent.js: line 112, col 54, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/agent.js: line 114, col 33, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n19 errors');
  });
});
define('mdrregister/tests/routes/register/assessor.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/register');
  QUnit.test('routes/register/assessor.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/register/assessor.js should pass jshint.\nroutes/register/assessor.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/assessor.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/assessor.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/assessor.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/assessor.js: line 5, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/assessor.js: line 7, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 7, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/assessor.js: line 12, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 16, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 108, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 109, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 110, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 111, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 112, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 116, col 26, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 116, col 33, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/assessor.js: line 116, col 54, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/assessor.js: line 118, col 33, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n19 errors');
  });
});
define('mdrregister/tests/routes/register/doctor.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/register');
  QUnit.test('routes/register/doctor.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/register/doctor.js should pass jshint.\nroutes/register/doctor.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/doctor.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/doctor.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/doctor.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/doctor.js: line 5, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/doctor.js: line 7, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 7, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/doctor.js: line 12, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 16, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 112, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 113, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 114, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 115, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 116, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 120, col 26, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 120, col 33, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/register/doctor.js: line 120, col 54, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/register/doctor.js: line 122, col 33, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n19 errors');
  });
});
define('mdrregister/tests/services/session.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/session.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/session.js should pass jshint.\nservices/session.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/session.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/session.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/session.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nservices/session.js: line 12, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/session.js: line 19, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/session.js: line 26, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/session.js: line 35, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n8 errors');
  });
});
define('mdrregister/tests/test-helper', ['exports', 'mdrregister/tests/helpers/resolver', 'ember-qunit'], function (exports, _mdrregisterTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_mdrregisterTestsHelpersResolver['default']);
});
define('mdrregister/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('mdrregister/tests/transitions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('transitions.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'transitions.js should pass jshint.\ntransitions.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ntransitions.js: line 2, col 3, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ntransitions.js: line 5, col 29, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('mdrregister/tests/utility/api-server.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - utility');
  QUnit.test('utility/api-server.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utility/api-server.js should pass jshint.\nutility/api-server.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n1 error');
  });
});
define('mdrregister/tests/utility/api.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - utility');
  QUnit.test('utility/api.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utility/api.js should pass jshint.\nutility/api.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n1 error');
  });
});
define('mdrregister/tests/utility/constants.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - utility');
  QUnit.test('utility/constants.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utility/constants.js should pass jshint.\nutility/constants.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n1 error');
  });
});
define('mdrregister/tests/utility/utils.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - utility');
  QUnit.test('utility/utils.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utility/utils.js should pass jshint.\nutility/utils.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nutility/utils.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nutility/utils.js: line 3, col 35, \'default parameters\' is only available in ES6 (use \'esversion: 6\').\nutility/utils.js: line 4, col 3, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nutility/utils.js: line 4, col 3, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nutility/utils.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nutility/utils.js: line 12, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nutility/utils.js: line 20, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nutility/utils.js: line 28, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nutility/utils.js: line 28, col 30, \'default parameters\' is only available in ES6 (use \'esversion: 6\').\n\n10 errors');
  });
});
/* jshint ignore:start */

require('mdrregister/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map