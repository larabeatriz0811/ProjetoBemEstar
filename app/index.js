import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import {useState} from 'react' 
import {Link} from 'expo-router'


const getNomeCompleto = (nome, sobrenome) => {
  return nome + ' ' + sobrenome;
}

const Cat = ({id, nome, sobrenome, idade}) => {
  let texto = (idade <=1) ? "ano" : "anos"
  
  return (
  <Link href = {{
    pathname: "/gatos/[id]",
    params: {id: id}
  }}>Oi, Eu sou {getNomeCompleto(nome, sobrenome).toUpperCase()}, e eu tenho {(idade)} {texto} e meu id é {id} </Link>
  );
}



function IFAL() {

    
    const [cliques, setCliques] = useState(0);
  return (
    <View style={styles.container}>
      <Cat id={1}nome="Black" sobrenome="Panterinha" idade={3} />
      <Cat id={2}nome="Garfield" sobrenome="Lasanha" idade={4}/>
      <Cat id={3}nome="Apolo" sobrenome="God" idade={1}/>
      <StatusBar style="auto" />
    {/* Botoẽs */}
    <Button title="Click" onPress={() => {
      setCliques(cliques + 1);
    }} />
    <Button title="Zerar" onPress={()=>
      setCliques(0)
  }/>
    <Text>Quantidade de cliques: {cliques}</Text>
    <Link href ="/calculadora"> Abrir Calculadora</Link>
    <Link href ="/calculadora" asChild>
      <Pressable>
        <Text>Abrir a calculadora com o Pressable</Text>
      </Pressable>
    </Link>
    <Link href ="/cliques" asChild>
      <Button title ="Abrir contador de cliques"/>
    </Link>
    <StatusBar style ="auto"/>
    <Text></Text>
    </View>


  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IFAL;