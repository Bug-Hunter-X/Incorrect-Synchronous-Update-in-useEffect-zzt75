```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly attempting to update count synchronously
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```