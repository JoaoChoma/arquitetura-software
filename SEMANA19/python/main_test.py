import unittest
from main import sum

class TestSum(unittest.TestCase):

    def test_sum(self):
        self.assertEqual(sum(1, 2), 3)
        self.assertEqual(sum(-1, 1), 0)
        self.assertEqual(sum(0, 0), 0)

    def test_sum_floats(self):
        self.assertEqual(sum(1.5, 2.5), 4.0)
        self.assertEqual(sum(-1.5, 1.5), 0.0)

if __name__ == '__main__':
    unittest.main()
