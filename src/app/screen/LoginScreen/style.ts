import { StyleSheet } from 'react-native';

const styled = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: '#435684',
    },

    title: {
        color: 'white',
        marginBottom: 10,
        fontSize: 24
    },

    send: {
        backgroundColor: '#435684',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    sendText: {
        color: 'white',
        fontSize: 16
    },

    links: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10,
        gap: 10,
        alignItems: 'center',
    },

    titleLinks: {
        color: '#cccc'
    }

});

export default styled;