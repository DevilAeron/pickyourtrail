import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Price from './Price';
import DandD from './DandD';

const Home = () => {

    return (
        <ScrollView style={{ backgroundColor: '#fedbdo' }}>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ width: 390 }}>
                        <Text style={styles.txt1}>Day by day plan</Text>
                        <Text style={styles.txt2}> Day 1 - 22nd May </Text>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                                <View style={{ paddingVertical: 45 }}>
                                    <View style={styles.btn}>
                                        <Text style={styles.btntxt}>MORNING</Text>
                                    </View>
                                </View>

                                <View style={{ paddingVertical: 15 }}>
                                    <View style={styles.btn}>
                                        <Text style={styles.btntxt}>NOON - EVENING</Text>
                                    </View>
                                </View>

                            </View>
                            <View>
                                <DandD />
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>
                        <Price />
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    txt1: {
        padding: 20,
        color: '#442c2e',
        fontWeight: '600',
        fontSize: 20
    },
    txt2: {
        paddingTop: 10,
        paddingLeft: 50,
        color: '#442c2e',
        fontWeight: 'bold',
        fontSize: 15,
        backgroundColor: '#fff'
    },
    btn: {
        backgroundColor: '#442c2e',
        borderRadius: 30,
        width: 15,
        height: 270,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btntxt: {
        color: '#fff',
        letterSpacing: 1
    },
});

export default Home;
