(function(){ // closure
    load('main.js', 'jsunity.js');

    jsUnity.log = print;

    /**
     * Attaches the following assertion methods to
     * the global scope for convenience.
     *  - assertException
     *  - assertTrue
     *  - assertFalse
     *  - assertIdentical
     *  - assertNotIdentical
     *  - assertEqual
     *  - assertNotEqual
     *  - assertMatch
     *  - assertNotMatch
     *  - assertTypeOf
     *  - assertNotTypeOf
     *  - assertInstanceOf
     *  - assertNotInstanceOf
     *  - assertNull
     *  - assertNotNull
     *  - assertUndefined
     *  - assertNotUndefined
     *  - assertNaN
     *  - assertNotNaN
     *  - fail
     */
    jsUnity.attachAssertions()
})();

jsUnity.run(function SomeTest ( )
{
    function setUp ( )
    {
        print('setting up');
    }

    function tearDown ( )
    {
        print('tearing down');
    }

    function test_something ( )
    {
        assertFalse(true);
    }
}); // END jsUnity.run
