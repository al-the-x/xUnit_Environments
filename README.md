### xUnit Environments for Various Languages

So you want to hold a Dojo, but you don't want to spend half the time writing all the testing boilerplate and figuring out all the dependencies necessary to even _write_ tests, let alone run them? Wouldn't you love for the tests to run automatically when a file is saved? Well, you're in luck.

#### Prerequisites

* git : http://git-scm.org/
* nodejs : http://nodejs.org/
* npm : http://npmjs.org/
* grunt-cli: http://gruntjs.com/

##### Testing Languages

* python : http://python.org/
* php : http://php.net/
* ruby : http://ruby-lang.org/
* javascript : http://nodejs.org/

#### Installation

0. Install `grunt-cli` globally:
    npm install -g grunt-cli
1. Install this repository:
    git clone https://github.com/orlandodojo/xUnit_Environments.git
2. Hop on into the new directory:
    cd xUnit_Environments/
3. Install the Javascript dependencies:
    npm install

You now have enough to start testing Javascript, at least. If you have Python or Ruby installed, you probably have enough to get started with both of those, as well. In order to write tests in PHP, you'll need to install PHPUnit. For that, you should consider installing via [Composer](http://getcomposer.org/): `composer install` should do the trick.

#### Write Some Tests!

Each folder contains a single `main` and `test` file; you can imagine what those are for. If you can't, here's an example for Python:

```python
## python/main.py

class YourAwesomeSolution(object):
    pass
```

Note that `test.py` comes with some boilerplate to make it easy to just start writing tests:

```python
## python/test.py

from main import *
import unittest

class Test ( unittest.TestCase ):
    def setUp ( self ):
        pass

    def test_something ( self ):
        self.assertFalse(True)


if __name__ == '__main__':
    unittest.main()
```

Change `test_something()` into your first test and run the tests with the supplied Grunt task:
    grunt shell:test_py

##### Wait, didn't you promise some auto-magic...?

Yes, well, for the very lazy, you can run the `watch` Grunt task, which is preconfigured to watch the source files for changes and run the appropriate tests for you. It's also configured to be the default task, so you can also just run `grunt`. If you want fancier notifications than CLI, feel free to open PRs!

#### [Contributors](contributors)

Primarily wired together by @al-the-x [(twitter)](http://twitter.com/al_the_x)
