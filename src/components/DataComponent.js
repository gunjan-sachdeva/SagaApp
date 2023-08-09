import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../actions';

const DataComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const error = useSelector(state => state.data.error);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataComponent;
