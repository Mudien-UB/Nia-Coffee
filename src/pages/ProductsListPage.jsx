import React, { useEffect } from 'react';
import SearchBar from '../components/molecules/SearchBar';
import ProductListContainer from '../components/organisms/ProductListContainer';
import { getDataProducts } from '../api/FakeProductApi';
import { PiMinusBold, PiPlusBold } from 'react-icons/pi';
import FilterBar from '../components/molecules/FilterBar';
import SortBar from '../components/molecules/SortBar';

export default function ProductsListPage() {
  const [searchTerm, setSearchTerm] = React.useState({
    page: 1,
    limit: 10,
    sortBy: 'id',
    sortOrder: 'asc',
    query: '',
    filterCategory: '',
  });

  const [ProductsData, setProductsData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [totalItems, setTotalItems] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await getDataProducts(searchTerm);

    if (!response) {
      console.log('No products found');
    } else if (response.status !== 200) {
      console.log('Error fetching products');
    } else {
      setProductsData(response.data);
      setCurrentPage(response.pagination.page);
      setItemsPerPage(response.pagination.limit);
      setTotalPages(response.pagination.totalPages);
      setTotalItems(response.pagination.totalData);
    }
    setLoading(false);
  };

  const onSearch = (e) => {
    resetTerm();
    setSearchTerm({
      ...searchTerm,
      query: e.target.value,
      page: 1,
    });
    console.log('Search term updated:', searchTerm);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Search term submitted:', searchTerm);
    alert(`Search term submitted: ${searchTerm}`);
  };

  const resetTerm = () => {
    setSearchTerm({
      page: 1,
      limit: 10,
      sortBy: 'id',
      sortOrder: 'asc',
      query: '',
      filterCategory: '',
    });
  };

  const onSelectCategory = (e) => {
    resetTerm();
    setSearchTerm({
      ...searchTerm,
      filterCategory: e === 'All' ? '' : e,
      page: 1,
    });
    console.log('Category selected:', searchTerm);
  }

  const handleSort = (e) => {
    resetTerm();
    setSearchTerm({
      ...searchTerm,
      sortBy: e.sortBy,
      sortOrder: e.order,
      page: 1,
    });
    console.log('Sort option selected:', searchTerm);
    console.log('Sort option selected:', searchTerm);
  }

  const onPageChange = (page) => {
    setSearchTerm({
      ...searchTerm,
      page: page,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col justify-start items-center gap-10 mt-20 px-4 py-12">
      <h1 className="text-4xl font-extrabold text-amber-900 underline underline-offset-8 mt-10">
        Our Menus
      </h1>
      <div className="w-full flex flex-col justify-center items-center px-10 relative">
        <SearchBar
          className="w-1/2 mb-10"
          onChange={onSearch}
          onSubmit={onSubmit}
        />
        <div className="w-1/2 flex flex-row justify-between items-center mt-6">
          <FilterBar
            className="w-1/3 mb-10"
            onSelect={onSelectCategory}
          />
          <SortBar
            onSelect={handleSort}
            className="w-1/4 mb-10"
          />
        </div>

      </div>

      <div className="w-full sm:w-11/12 flex flex-col justify-center items-center px-10 relative">
        <ProductListContainer products={ProductsData} isLoading={loading} />
      </div>

      <div className="w-full flex justify-center items-center px-10 py-4 mt-6">
        <button
          className={`px-5 py-2 text-white font-semibold rounded-lg shadow-md ${currentPage === 1 ? 'bg-amber-500/50 opacity-50 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700 transition-colors duration-300 ease-in-out'}`}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
        >
          <PiMinusBold className={`text-4xl text-amber-900 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-amber-600 transition-colors duration-300 ease-in-out'}`} />
        </button>
        {loading ? (
          <h2 className="text-2xl font-bold text-amber-900 mx-10">...</h2>
        ) : (
          <h2 className="text-2xl font-bold text-amber-900 mx-10">
            {currentPage} / {totalPages}
          </h2>
        )}

        <button
          className={`px-5 py-2 bg-amber-600 text-white font-semibold rounded-lg shadow-md ${currentPage === totalPages ? 'bg-amber-500/50 opacity-50 cursor-not-allowed' : 'hover:bg-amber-700 transition-colors duration-300 ease-in-out'}`}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
        >
          <PiPlusBold className={`text-4xl text-amber-900 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:text-amber-600 transition-colors duration-300 ease-in-out'}`} />
        </button>
      </div>
    </section>
  );
}
