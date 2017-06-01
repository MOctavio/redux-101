# Redux 101

Sample code to help other to understand redux itself before going into react-redux or any other implementation.

## Reducer

A reducer it's a pure function which return value is only determined by its input without side effects, in other words it returns the same result given the same arguments, therefore you should avoid mutation of it's arguments, invoke non-pure functions and make API calls.
