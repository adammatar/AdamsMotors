export async function getCars() {
   const headers = {
		'X-RapidAPI-Key': 'ae503d35a5msh4fb7934761bc5aap1f302cjsn8a44db2b77f5',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , { headers: headers});

  const result = await response.json();

  return result;
}