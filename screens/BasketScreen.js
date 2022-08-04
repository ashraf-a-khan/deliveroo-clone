import { View, Text } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../features/restaurantSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketItems } from '../features/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  // console.log('groupedItemsInBasket', groupedItemsInBasket);
  return (
    <SafeAreaView>
      <View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
