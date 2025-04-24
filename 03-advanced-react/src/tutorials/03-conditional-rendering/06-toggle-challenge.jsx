import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        {showAlert ? 'Hide Alert' : 'Show Alert'}
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className='alert alert-success'>hello world</div>;
};
export default ToggleChallenge;
