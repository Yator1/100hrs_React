const ErrorExample = () => {
    let count = 0;

    // this function will not work as expected
    const handleClick = () => {
        count =+ 1;
        console.log(count);
    }
  return (
  <div>
    <h2>{count}</h2>
    <button type='button' onClick={handleClick} className="btn">Increase</button>
  </div>)
};

export default ErrorExample;
