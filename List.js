import React from 'react'
import { View, StyleSheet, Text, FlatList, ScrollView, TextInput, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons, Feather  } from '@expo/vector-icons';

class List extends React.Component {
    dataList = [{name: "Bash and Nikitah", category: "Cat", age: "1", address: "Park Main view 22 Afordable Street", image: "https://images.pexels.com/photos/9978232/pexels-photo-9978232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Bush", category: "Cat", age: "3", address: "1st Amansan Street 22 Park Lane House 4", image: "https://images.pexels.com/photos/9952872/pexels-photo-9952872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Wasph and Brike", category: "Dog", age: "4", address: "Legon Second Gate House 261", image: "https://images.pexels.com/photos/9040438/pexels-photo-9040438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Mackenzy", category: "Dog", age: "5", address: "Klagon Estate Kingsaw Street House 23", image: "https://images.pexels.com/photos/10875180/pexels-photo-10875180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Gidly", category: "Cat", age: "3", address: "MoonLight Avenue Kofi street House 26 Legon Hills", image: "https://images.pexels.com/photos/6001822/pexels-photo-6001822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Rob and Gold", category: "Dog", age: "3", address: "East Legon Pineapple Street House 217", image: "https://images.pexels.com/photos/9809416/pexels-photo-9809416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Skerch", category: "Dog", age: "4", address: "Palm Avenue Asanteman House 221 Kofi Street", image: "https://images.pexels.com/photos/10122494/pexels-photo-10122494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Boldly", category: "Dog", age: "4", address: "Reins Road East Legon View House 3", image: "https://images.pexels.com/photos/6589065/pexels-photo-6589065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Sambi", category: "Parrot", age: "6", address: "Side View MacCharty Hills House 1", image: "https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Anni", category: "Cat", age: "3", address: "North Legon Accra High Street House 22", image: "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Paris", category: "Dog", age: "4", address: "Moan Street Kwaabenyah House 33 Pine Road", image: "https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    ];
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.search}>
                    <TextInput style={styles.searchTxt} />
                    <Feather name="search" size={24} style={styles.iconSearch} color="black" />
                </View>
                <FlatList data={this.dataList} keyExtractor={(item,index) => {return index}} renderItem={({item: {name, category, age, address,image}}) => (
                   <ScrollView showsHorizontalScrollIndicator={false}>
                       <View style={styles.parentCont}>
                            <View style={styles.details}>
                                <Image style={styles.image} source={{uri: image}} />
                                <View style={styles.list}>
                                    <Text style={styles.nameTag}>{name}</Text>
                                    <Text style={styles.type}>{category}</Text>
                                    <Text style={styles.age}>{age} years old</Text>
                                    <Text style={styles.location}>
                                        <EvilIcons name="location" size={18} color="black" style={styles.icon} />{address.substring(0,16)}...
                                    </Text>
                                </View>
                            </View>
                       </View>
                   </ScrollView>
                )} />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(238, 238, 238)',
      paddingHorizontal: 16
    },
    parentCont: {},
    searchTxt: {
        backgroundColor: "rgb(255, 255, 255)",
        marginVertical: 15,
        width: 330,
        height: 35,
        borderRadius: 10
    },
    details: {
        flex: 0.3,
        flexDirection: 'row'
    },
    image: {
        width: 160,
        height:160,
        marginVertical: 10,
        borderRadius: 10
    },
    nameTag: {
        color: "rgb(29, 24, 126)",
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 4
    },
    type: {
        color: "rgb(174, 174, 176)",
        marginVertical: 4
    },
    age: {
        color: "rgb(174, 174, 176)",
        marginVertical: 4
    },
    location: {
        color: "rgb(174, 174, 176)",
        marginHorizontal: -4,
        marginVertical: 4
    },
    list: {
        alignSelf: 'center',
        borderWidth: 1,
        width: 180,
        height: 130,
        borderRadius: 15,
        borderColor: 'rgb(239, 239, 239)',
        backgroundColor: 'rgb(255, 255, 255)',
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginHorizontal: -8,
        zIndex: -1,
        shadowColor: 'rgb(27, 51, 62)',
        shadowOffset: {width: -5, height: 8},
        shadowOpacity: 0.7,
        shadowRadius: 3,
        elevation: 15
    },
    icon: {
        color: "rgb(174, 174, 176)",
    },
    search: {
        flex: 0,
        position: 'relative'
    },
    iconSearch: {
        position: 'absolute',
        top: 20,
        left:5
    }
  });
export default List