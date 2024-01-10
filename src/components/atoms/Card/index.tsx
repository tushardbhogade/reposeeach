//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IMG} from '../../../assets/images';
import {COLOR} from '../../../constants/colors';
// import WebView from 'react-native-webview';
import StarIcon from '../../../assets/icons/StarIcon';
import ShadowView from '../ShadowView';

type CardType = {
  owner: any;
  name: string;
  language: string;
  stargazers_count: number;
};

/*
owner: used to show the profile image,
name: used to show repo name,
language:used to show languages in whhich project is created, stargazers_count,
stargazers_count: used to show star count
*/

//Card Component to show the details of the card

const Card = ({owner, name, language, stargazers_count}: CardType) => {
  return (
    <ShadowView>
      <View style={[styles.cardContainer]}>
        <View style={styles.row}>
          {/* Profile Image View to show the Profile Picture */}
          <View style={styles?.profileImageView}>
            {owner?.avatar_url ? (
              <Image
                source={{uri: owner?.avatar_url}}
                style={styles?.profileImageStyle}
              />
            ) : (
              <Image source={IMG?.Avatar} style={styles?.profileImageStyle} />
            )}
          </View>
          <View style={styles.container}>
            <View style={[styles?.row, styles.container]}>
              <Text
                numberOfLines={1}
                style={{flex: 1, fontWeight: '700', fontSize: 16}}>
                {name || '-'}
              </Text>
            </View>
            <View style={styles?.row}>
              <Text>{language || '-'}</Text>
            </View>
            {/* <Text>Description :{item?.description || '-'}</Text> */}
            {/* View to Show Star Count */}
            <View style={styles.row}>
              <View style={styles?.row}>
                <Text style={{fontSize: 14, marginRight: 2, fontWeight: '500'}}>
                  {stargazers_count}
                </Text>
                <StarIcon />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ShadowView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
  profileImageView: {
    height: 54,
    width: 54,
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 27,
    borderColor: COLOR.LIGHT_GRAY,
  },
  profileImageStyle: {height: '100%', width: '100%', borderRadius: 27},
  row: {flexDirection: 'row', alignItems: 'center'},
  key: {fontSize: 14, fontWeight: '700'},
  container: {flex: 1},
});

export default Card;
