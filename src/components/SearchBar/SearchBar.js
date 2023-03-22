import React from 'react';
import { TextInput,View } from 'react-native';
import styles from './SearchBar.styles'
const SearchBar =({onSearch})=>{

  return(
    <View style={styles.container}>
        <TextInput
         onChangeText={onSearch}
        placeholder="Lütfen Aramak İstediğiniz Şarkıyı Girin....."
        />
    </View>
  )
}
export default SearchBar;