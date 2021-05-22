import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.header}>

            <View style={styles.img}>
                <Image source={require('./../../assets/logo.png')} />
            </View>

            <View>
                <Text style={styles.headerText}>  pickyourtrail</Text>
            </View>

            <View style={styles.user}>
                <TouchableOpacity onPressIn={toggleModal}>
                    <Icon name='people-outline' size={25} color='#442c2e'/>
                </TouchableOpacity>
            </View>

            <Modal isVisible={isModalVisible} >
                <View style={styles.modalview}>

                    <View style={styles.viewcloseit}>
                        <Text style={styles.textcloseit}> Profile</Text>
                        <TouchableOpacity onPress={toggleModal}>
                            <Icon
                                name="close-outline"
                                size={26}
                                style={styles.closeit}

                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewstyle}>
                        <Text style={styles.textstyle}>Vedant</Text>
                        <Text style={styles.textstyle}>email@xyz.com</Text>
                    </View>

                    <View style={styles.viewstyle}>
                        <Text style={styles.textstyle}>Past Trips </Text>
                        <Text style={styles.textstyle}>Address Book </Text>
                    </View>

                    <View style={styles.viewstyle}>
                        <Text style={styles.textstyle}>Logout</Text>
                    </View>

                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#442c2e',
        left: 45
    },
    img: {
        position: 'absolute',
        left: 5,
    },
    user: {
        position: 'absolute',
        right: 5,
    },
    viewstyle: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    textstyle: {
        fontSize: 15,
        marginVertical: 5,
        fontStyle: 'italic',
        fontFamily: 'cochin',
        fontWeight: '600',
    },
    modalview: {
        backgroundColor: 'white',
        borderRadius: 20,
    },
    viewcloseit: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    closeit: {
        marginTop: '3%',
        marginLeft: '90%'
    },
    textcloseit: {
        position: 'absolute',
        left: '40%',
        top: '25%',
        fontSize: 20,
        fontWeight: '700',
    }
})

export default Header;
