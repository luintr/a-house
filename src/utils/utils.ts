export const splitArray = <T>(arr: Array<T>, columns: number) => {
  const itemsPerRow = columns;

  return arr.reduce((acc: T[][], val, ind) => {
    const currentRow = Math.floor(ind / itemsPerRow);

    if (!acc[currentRow]) {
      acc[currentRow] = [val];
    } else {
      acc[currentRow].push(val);
    }
    return acc;
  }, []);
};
