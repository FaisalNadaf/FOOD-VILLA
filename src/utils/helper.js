export const filterCard = (searchText, resturants) => {
  return resturants.filter((resturant) =>
    resturant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};
