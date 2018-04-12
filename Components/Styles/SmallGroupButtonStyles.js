import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 200,
    borderRadius: 5,
    width: 350,
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.steel,
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    fontFamily: Fonts.type.bold
  }
})
