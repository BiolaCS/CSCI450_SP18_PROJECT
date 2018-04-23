import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'



const window = Dimensions.get('window');

  


export default StyleSheet.create({
  button: {
    height: 200,
    borderRadius: 5,
    width: (this.window.width <= 360) ? 300 : 350,
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
