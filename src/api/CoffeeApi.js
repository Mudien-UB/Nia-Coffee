
const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
const RANDOM_MATH = Math.floor(Math.random() * 1000);

const getCoffeeById = async (id) => {
    try {
        const response = await fetch(`${API_URL}lookup.php?i=${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.drinks[0];
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}

const getAllCoffees = async () => {
    try {
        const response = await fetch(`${API_URL}filter.php?i=Coffee`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.drinks;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

const getBestCoffees = async () => {
    const data = await getAllCoffees();
    return data.slice(11, 15);
}

export { getCoffeeById, getAllCoffees, getBestCoffees };