import { ChangeEvent, useCallback, useState } from 'react';

const useInput = <T>(initValue: T) => {
  const [value, setValue] = useState<T>(initValue);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    },
    [value],
  );

  const resetValue = useCallback(() => {
    setValue(initValue);
  }, [initValue]);

  return { value, onChange, resetValue };
};

export default useInput;
