export const formatFileName = (name?: string) => {
    if (!name) return "";
  
    if (name?.length <= 24) {
      return name;
    }
  
    return `${name?.slice(0, 10)}...${name.slice(-14)}`;
  };
  