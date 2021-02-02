export const getLast = async () => {
  const ans = await fetch("http://localhost:8080/last");
  const data = await ans.json();
  return data.last;
};
