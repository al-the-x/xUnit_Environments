from main import *
import unittest

class Test ( unittest.TestCase ):
    def setUp ( self ):
        pass

    def test_something ( self ):
        self.assertFalse(True)


if __name__ == '__main__':
    unittest.main()
