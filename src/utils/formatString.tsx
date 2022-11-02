import { Text } from "react-native";

export function formatString(str: string){
  const stringSplitted = str.split('/');

  return (
    <Text>{stringSplitted[0]}/<Text style={{ fontFamily: 'Inter_700Bold' }}>{stringSplitted[1]}</Text></Text>
  )
}