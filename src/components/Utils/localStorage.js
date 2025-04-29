const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log('Error saving to localStorage:', error.message);
  }
};

const getFromLocalStorage = key => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (error) {
    console.log('Error reading from localStorage:', error.message);
    return null;
  }
};

const UTILS = { saveToLocalStorage, getFromLocalStorage };

export default UTILS;
