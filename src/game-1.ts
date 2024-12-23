export function findArray(array: number[], number: number): number[] {
  //Usamos un set, para almacenar los numeros que vamos viendo.
  const vistos = new Set<number>();

  //Este bucle recorre cada número en el arreglo. En cada iteración, evaluamos si ese número y otro previamente recorrido suman el numero deseado.
  for (let num of array) {
    //Aquí compruebo si la diferencia ya está en el conjunto vistos.
    const diferencia = number - num;
    if (vistos.has(diferencia)) {
      return [diferencia, num];
    }
    vistos.add(num);
  }
  //Si no exite nignuna combinaciond evuelvo un arreglo vacio.
  return [];
}
