export const addEntry = (entry) => {
    return {
      type: "ADD",
      entry: entry
    };
  };
  
  export const deleteEntry = (id) => {
    return {
      type: "DEL",
      id: id
    };
  };
  