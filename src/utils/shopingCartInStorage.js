export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return [];
    }

    const result = JSON.parse(serializedState);
    return result;
  } catch (err) {
    return [];
  }
};

export const saveState = (key, value) => {
  try {
    const result = JSON.stringify(value);
    localStorage.setItem(key, result);
  } catch (err) {}
};
