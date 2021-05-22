import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Price = () => {
    return (
        <View style={styles.topview}>
            <View style={styles.price}>
                <View style={styles.priceleft}>
                    <Text style={styles.pricelefttop}>Price per person</Text>
                    <Text style={styles.priceleftbottom}>Rs 12345</Text>
                </View>
                <Button title="Unlock deal" color='#442c2e'></Button>
            </View>
            <View style={styles.viewlower}>
                <Text style={{ left: -4, fontWeight: 'bold' }}><Icon name='location-outline' size={24} />The Pickyourtrail Advantage</Text>
                <Text style={styles.txt}><Icon name='checkmark-circle-outline' size={15} /> All inclusive real-time pricing</Text>
                <Text style={styles.txt}><Icon name='checkmark-circle-outline' size={15} /> Instant booking confirmation</Text>
                <Text style={styles.txt}><Icon name='checkmark-circle-outline' size={15} /> Travel concierge through app</Text>
                <Text style={styles.txt}><Icon name='checkmark-circle-outline' size={15} /> Flexible payment options</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topview: {
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 5
    },
    price: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingLeft: 0,
        paddingRight: 23
    },
    priceleft: {
        flexDirection: 'column',
        marginHorizontal: 20,
        marginVertical: 10
    },
    pricelefttop: {
        fontWeight: '600',
        fontSize: 15,
    },
    priceleftbottom: {
        textDecorationLine: 'line-through',
        fontWeight: 'bold',
        fontSize: 15,
    },
    viewlower: {
        marginVertical: 10,
        marginLeft: 20,
        padding: 10,
    },
    txt: {
        marginVertical: 2,
        fontWeight: '700',
        color: 'gray'
    },
    btn: {
        fontWeight: 'bold'
    }
});

export default Price;