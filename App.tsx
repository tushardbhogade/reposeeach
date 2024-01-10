import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import SearchContainer from './src/components/atoms/SearchContainer';
import {getSearchResult} from './src/utils/sevices/repoService';
import {COLOR} from './src/constants/colors';
import PaginatedFlatList from './src/components/atoms/PaginatedFlatList';
import Card from './src/components/atoms/Card';

import SortIcon from './src/assets/icons/SortIcon';
import CustomBottomSheet from './src/components/atoms/CustomBottomSheet';

const App = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [cardList, setCardList] = useState<any[]>([]);
  const [totalCardCount, setTotalCardCount] = useState<number>();
  const [isReset, setIsReset] = useState(false);
  const [isListLoading, setIsListLoading] = useState<boolean>(false);
  const [showSortModal, setShowSortModal] = useState<boolean>(false);
  const [selectedSortItem, setSelectedSortItem] = useState<any>({});

  const [pageSize] = useState<number>(10);

  const sortOption: any[] = [
    {
      id: 'stars',
      label: 'Stars',
    },
    {
      id: 'watchers_count',
      label: 'Watchers Count',
    },
    {
      id: 'score',
      label: 'Score',
    },
    {
      id: 'name',
      label: 'Name',
    },
    {
      id: 'created_at',
      label: 'Created at',
    },
    {
      id: 'updated_at',
      label: 'Updated at',
    },
  ];

  const getSearchRepo = (
    seachText: string,
    pageNo: number,
    perPageSize: number,
    sortData: any,
  ) => {
    if (pageNo === 0) {
      setIsListLoading(true);
    }
    getSearchResult(seachText, pageNo, perPageSize, sortData)
      .then(res => {
        let newList: any[] = [];
        console.log('result---->', JSON.stringify(res?.data));
        if (pageNo === 0) {
          newList = [...res?.data?.items];
        } else {
          newList = [...cardList, ...res?.data?.items];
        }
        setCardList(newList);
        setTotalCardCount(res?.data?.total_count);
        setIsListLoading(false);
      })
      .catch(error => {
        console.log('error', error);
        setIsListLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <SearchContainer
        onChangeText={e => {
          console.log('ttt', e);
          setSearchText(e);
        }}
        style={styles.searchContainer}
        onRightIconPress={() =>
          getSearchRepo(searchText, 0, pageSize, selectedSortItem)
        }
      />
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => {
          setShowSortModal(true);
        }}>
        <Text style={{marginRight: 4}}>Sort</Text>
        <SortIcon />
      </TouchableOpacity>
      <View style={[styles.cardContainer]}>
        {isListLoading ? (
          <ActivityIndicator size={'large'} style={styles.loader} />
        ) : cardList?.length > 0 ? (
          <PaginatedFlatList
            list={cardList}
            renderItem={({item}) => {
              return <Card item={item} />;
            }}
            totalCount={totalCardCount}
            onLoadMore={(pageNo: number) => {
              setIsReset(false);
              getSearchRepo(searchText, pageNo, pageSize, selectedSortItem);
            }}
            isResetPage={isReset}
          />
        ) : (
          <View style={styles.noRecordFound}>
            <Text>No Record Found</Text>
          </View>
        )}
      </View>
      <CustomBottomSheet
        title="Sort"
        showModal={showSortModal}
        onDismiss={() => setShowSortModal(false)}>
        {sortOption?.map(item => {
          return (
            <TouchableOpacity
              key={item?.id}
              onPress={() => {
                setSelectedSortItem(item);
                getSearchRepo(searchText, 0, pageSize, selectedSortItem);
                setShowSortModal(false);
              }}
              style={[
                styles.sortOptions,
                {
                  backgroundColor:
                    selectedSortItem?.id === item?.id
                      ? COLOR.TEXT_RED
                      : COLOR.LIGHT_GRAY,
                },
              ]}>
              <Text
                style={{
                  color:
                    selectedSortItem?.id === item?.id
                      ? COLOR.WHITE
                      : COLOR.BLACK_TEXT,
                }}>
                {item?.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </CustomBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noRecordFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {flex: 1, alignSelf: 'center'},
  cardContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: COLOR.LIGHT_GRAY,
    marginVertical: 12,
  },
  sortButton: {
    flexDirection: 'row',
    backgroundColor: COLOR.LIGHT_GRAY,
    alignSelf: 'flex-end',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 12,
    marginBottom: 12,
  },
  sortOptions: {padding: 8, marginBottom: 6, borderRadius: 8},
});

export default App;
