// Add this line at the top of your test file
import "@babel/preset-env";

import { sum } from "../redux/countries/countriesSlice";

test('sum function adds two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-1, 5)).toBe(4);
  });
  