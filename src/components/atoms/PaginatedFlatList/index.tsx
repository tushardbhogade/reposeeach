/* eslint-disable react/no-unstable-nested-components */
// @flow
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, ListRenderItem} from 'react-native';

type PaginatedFlatListType = {
  list: any[];
  renderItem: ListRenderItem<any> | null;
  onLoadMore?: (pageNo: number) => void;
  totalCount?: number;
  isResetPage?: boolean;
};

/*
list : Array to map a card list,
  onLoadMore : Function to load more item when we reached end of the list,
  renderItem : To render a component inside a Flatlist,
  totalCount : To represent a total count of the list,
  isResetPage : Boolean to reset a page number,
*/

//PaginatedFlatList component is used to show list of the card with pagination

const PaginatedFlatList = ({
  list = [],
  onLoadMore = () => {},
  renderItem,
  totalCount = list.length,
  isResetPage = false,
}: PaginatedFlatListType) => {
  const [pageNo, setPageNo] = useState(0);

  useEffect(() => {
    if (isResetPage) {
      setPageNo(0);
    }
  }, [isResetPage]);

  const _loadMore = () => {
    if (list?.length >= totalCount) {
      return;
    }
    const page = pageNo + 1;
    setPageNo(page);
    onLoadMore(page);
  };
  return (
    <FlatList
      data={list}
      keyExtractor={(item: any) => item?.id}
      renderItem={renderItem}
      onEndReachedThreshold={0.6}
      onEndReached={() => _loadMore()}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() =>
        list?.length < totalCount && <ActivityIndicator size={'large'} />
      }
    />
  );
};

export default PaginatedFlatList;
