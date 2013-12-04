var print = console.log,
    assert = require('assert'),
    MiniUnit = require('mini-unit'),
    main = require('./main.js'),

    test = new MiniUnit.TestCase();

test.setup = function(){
    // Before every test...
};

test.teardown = function(){
    // After every test...
};

test.testSomething = function(){
    assert(false == true);
};


MiniUnit.run(test);
