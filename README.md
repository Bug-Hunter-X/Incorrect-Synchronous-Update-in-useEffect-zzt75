# Incorrect Synchronous Update in useEffect

This example demonstrates an uncommon error in React where a synchronous update to state within the useEffect hook causes unexpected behavior.  The issue stems from trying to update the `count` state with the current value of `count` within the same `useEffect` call.  This leads to an infinite loop as `useEffect` continuously rerenders.

## Solution

The solution utilizes the functional update form of `setCount`. This ensures that the update occurs asynchronously, preventing the infinite loop.