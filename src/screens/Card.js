import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Paragraph, Title } from 'react-native-paper';

const MyCard = (props) => {
    return (
        <View style={styles.viewstyle}>
            <TouchableOpacity >
                <Card >
                    <Card.Content>
                        <Title style={{ fontSize: 16, color: '#442c2e' }}>{props.title}</Title>
                        <Paragraph style={{ fontSize: 12 }}>{props.subtitle}</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                </Card>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewstyle: {
        elevation: 10,
        paddingVertical: 25,
    },
});

export default MyCard;