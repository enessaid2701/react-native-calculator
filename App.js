import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class login extends Component {
    state = {
        number:'',
        number2 :''
    }
    changeNumber = (number) => {
        this.setState({ number: `${this.state.number}${number}` })
    }
    setZero = () => {
        this.setState({ number: '' });
    }

    changeNegative = () => {
        let number = parseFloat(this.state.number) * -1;
        this.setState({ number: number.toString() });
    }
    changeMod = () => {
        let number = parseFloat(this.state.number) * 1/100;
        this.setState({ number: number.toString() });
    }
    sum = () => {
       var num = parseInt(this.state.number) + parseInt(this.state.number);
       console.log(num);
    }
    result = () => {}
    extraction = () => {}
    chamber = () => {}
    impact = () => {}


    render () {
    return (
        <View style={{ flex: 1, backgroundColor: '#000', paddingTop: 40 }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Text style = {{fontSize : 60,color : '#fff', paddingHorizontal : 30, fontWeight : '200'}}>{this.state.number}</Text>
                {/* <TextInput style = {styles.input}>{this.state.number}</TextInput> */}
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={()=> this.setZero()}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'lightgray', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: 'black' }}>AC</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.changeNegative()}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'lightgray', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: 'black' }}>+/-</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.changeMod()}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'lightgray', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: 'black' }}>%</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>÷</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
                <TouchableOpacity onPress = {() => this.changeNumber('7')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>7</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.changeNumber('8')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>8</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.changeNumber('9')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>9</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.state.numberOne}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>x</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
                <TouchableOpacity onPress = {() => this.changeNumber('4')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.changeNumber('5')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>5</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.changeNumber('6')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>6</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>-</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
                <TouchableOpacity onPress = {() => this.changeNumber('1')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.changeNumber('2')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.changeNumber('3')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>3</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.sum()}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 20, flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
                <TouchableOpacity onPress = {() => this.changeNumber('0')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 2) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>0</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.changeNumber('.')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#363636', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
                        <Text style={{ fontSize: 32, color: '#fff' }}>= </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal:8,
        paddingVertical: 6,
        color : 'white',
        fontSize : 60,
        marginRight : 15
    }
 })

