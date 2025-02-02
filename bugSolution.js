```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly using a functional update
    setCount(prevCount => prevCount + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```