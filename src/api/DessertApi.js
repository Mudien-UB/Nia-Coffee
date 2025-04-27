const URL_API = 'https://www.themealdb.com/api/json/v1/1/'


const getAllDesserts = async () => {
    try {
        const response = await fetch(`${URL_API}filter.php?c=Dessert`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

const getDessertById = async (id) => {
    try {
        const response = await fetch(`${URL_API}lookup.php?i=${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.meals[0];
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}

export { getAllDesserts, getDessertById }