
import { DataProducts} from "../data/DataProducts";


function sortData(data, sortBy, sortOrder = 'asc') {
  return data.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });
}

export async function getProducts({id}){
  try {
    const product = DataProducts.find(item => item.id === id);
    return {
      status: 200,
      message: 'Success fetching product',
      data: product
    };
  } catch (error) {
    return {
      status: 500,
      message: 'Internal Server Error',
      error: error.message
    };
  }
}

export async function getDataProducts({ page = 1, limit = 10, sortBy = 'id', sortOrder = 'asc', query = '', filterCategory = '' } = {}) {
  try {

    await new Promise((resolve) => setTimeout(resolve, 500));

    let filteredData = [...DataProducts];

    if (query) {
      filteredData = filteredData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (filterCategory) {
      filteredData = filteredData.filter(item =>
        item.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    filteredData = sortData(filteredData, sortBy, sortOrder);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return {
      status: 200,
      message: 'Success fetching cafe products',
      data: paginatedData,
      pagination: {
        page,
        limit,
        totalData: filteredData.length,
        totalPages: Math.ceil(filteredData.length / limit)
      }
    };
  } catch (error) {
    return {
      status: 500,
      message: 'Internal Server Error',
      error: error.message
    };
  }
}
