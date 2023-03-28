# React核心概念

## JSX
```jsx
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
            <img className="avatar" src={user.imageUrl} />
        </>
    );
}
```
- JSX组件只能返回一个tag, 多个tag需要使用`<div>...</div>`或者`<>...</>`包装
- 使用`{}`嵌套变量展示

## Hooks useState
```jsx
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```
- 绑定变量到页面调用 `setCount` 方法可以实现页面的实时刷新