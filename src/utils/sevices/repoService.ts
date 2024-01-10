import axios from 'axios';

export const getSearchResult = async (
  searchText: string = '',
  pageNo: number = 0,
  pageSize: number = 10,
  sortData: any = {},
) => {
  console.log('inside', searchText);

  try {
    let url = `https://api.github.com/search/repositories?q=${searchText}?page=${pageNo}&per_page=${pageSize}`;
    if (sortData?.id) url += `&sort=${sortData?.id}&order=desc`;
    console.log('url=============>', url);

    const response = await axios.get(url);
    return response; // Assuming you want to return the data
  } catch (error) {
    console.log('Error in fetching search result:', error);
    throw error; // Re-throw the error for further handling if needed
  }
};
