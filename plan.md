# Brief
(I took this from codewars)
Return the number (count) of vowels in the any string.
I will consider a, e, i, o, u as vowels for this (but not y).
The input string will only consist of lower case letters and/or spaces.

## Unit Tests
- Use Mocha & Chai
- Test Driven Development (TDD) should be in place.
- Should have 100% test coverage.
- All tests must pass before submitting your Pull Request.
- Overall test coverage should be >=90%.
- Edge cases should be covered.
- Tests should be automated i.e. in a pipeline.

## Code
- Take a functional programming approach
- TypeScript

# Plan
- install TypeScript, Mocha & Chai and any types for them if necessary
- watch a few quick youtube videos/read articles to learn about using Mocha & Chai
- create one test which will fail bc no code in .ts doc
- write a function that returns the right answer to the specific test case to check the test works
- create a few more tests for other phrases
- try using map, split and join to make it an array and then look for vowels
- use closures and recursivity if necessary

## Stretch goal
- make it work even if there is punctuation in the string and ignore capitals - regex, maybe also toLowerCase method?