import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Profile({ imgUri, genero, nome, telefone, email}) {

  const pessoa = {
    imgUri: "https://avatars.githubusercontent.com/u/101837936?s=400&u=ff1966fe5e0a74da8e475d27079b1031b603cb62&v=4",
    genero: "Masculino",
    nome: "Bruno Fonseca Souza",
    email: "brunofsouza669@gmail.com",
    telefone: "(61) 99834-2943"
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.imgContainer}>
        <Image 
          source={{ uri: pessoa.imgUri }}
          style={styles.img}
          />
      </View>

      <View style={styles.labelContainer}>
        <Text style={[styles.texto, styles.textoLabel]}>Nome:</Text>
        <Text style={styles.texto}>{pessoa.nome}</Text>
      </View>

     <View style={styles.labelContainer}>
        <Text style={[styles.texto, styles.textoLabel]}>Gênero:</Text>
        <Text style={styles.texto}>{pessoa.genero}</Text>
     </View>

      <View style={styles.labelContainer}>
        <Text style={[styles.texto, styles.textoLabel]}>Telefone:</Text>
        <Text style={styles.texto}>{pessoa.telefone}</Text>
      </View>

      <View style={styles.labelContainer}>
        <Text style={[styles.texto, styles.textoLabel]}>Email:</Text>
        <Text style={styles.texto}>{pessoa.email}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    marginTop: 10,
    padding: 20
  },
  img: {
    width: 250,
    height: 250,
    borderWidth: 4,
    borderColor: '#9b111e',
    borderRadius: 160,
    padding: 20
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#9b111e',
    borderRadius: 100,
    margin: 10,
  },
  texto: {
    fontSize: 20,
    color: 'white'
},
  textoLabel: {
    color: 'white',
    fontWeight: 'bold'
  }
});
