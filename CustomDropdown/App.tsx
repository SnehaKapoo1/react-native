import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import data from './src/data/countries.json';

const App = () => {
  const [countryValue, setCountryValue] = useState(null);
  const [stateValue, setStateValue] = useState(null);
  const [cityValue, setCityValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <View style={styles.wrapper}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data} // Use the data array from your JSON
          search
          maxHeight={300}
          labelField="CountryName" // Set labelField to "CountryName"
          valueField="CountryName" // Set valueField to "CountryName" or the appropriate field from your data
          placeholder={!isFocus ? 'Select country' : '...'}
          searchPlaceholder="Search..."
          value={countryValue} // Use countryValue to capture the selected value
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setCountryValue(item.countryValue);
            setIsFocus(false);
          }}
        />

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data} // Use the data array from your JSON
          search
          maxHeight={300}
          labelField="CountryName" // Set labelField to "CountryName"
          valueField="CountryName" // Set valueField to "CountryName" or the appropriate field from your data
          placeholder={!isFocus ? 'Select state' : '...'}
          searchPlaceholder="Search..."
          value={stateValue} // Use stateValue to capture the selected value
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setStateValue(item.stateValue);
            setIsFocus(false);
          }}
        />

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data} // Use the data array from your JSON
          search
          maxHeight={300}
          labelField="CountryName" // Set labelField to "CountryName"
          valueField="CountryName" // Set valueField to "CountryName" or the appropriate field from your data
          placeholder={!isFocus ? 'Select city' : '...'}
          searchPlaceholder="Search..."
          value={cityValue} // Use cityValue to capture the selected value
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setCityValue(item.cityValue);
            setIsFocus(false);
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#0F3460',
            padding: 20,
            borderRadius: 15,
            alignItems: 'center',
          }}
          onPress={() =>
            Alert.alert(
              `You have selected\nCountry: ${countryValue}`
            )
          }>
          <Text
            style={{
              color: '#fff',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    padding: 16,
    justifyContent: "center",
    alignContent: 'center',
    flex: 1,
  },
  wrapper: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default App;
