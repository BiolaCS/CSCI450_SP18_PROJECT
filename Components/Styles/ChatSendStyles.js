import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

//For messaging system
export default StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 40,
    width:250,
    maxWidth: 300,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.fire,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderColor: '#14384E',
    borderWidth: 1
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
