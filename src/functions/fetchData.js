//Funcion para buscar Data
//Si ocurre un error, lanza un error
//En el caso de no, retorna la data

export const fetchData = async (calUrl) => {
  try {
    const response = await fetch(calUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
    return []
  }
};
