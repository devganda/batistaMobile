import { View, Text, Button, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styled from './style';
import Input from '@components/Input';

export default function ForgotPassword() {
   const [email, setEmail] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const handleResetPassword = () => {
      setIsLoading(true);
      console.log(email);
      setIsLoading(false);
   }
   return (
      <View style={styled.container}>
         <Text style={styled.title}>Digite seu e-mail para receber um link de redefinição de senha.</Text>
         <Input
            placeholder="Digite seu email"
            name="email"
            value={email}
            onChangeText={setEmail}
         />
         <TouchableOpacity style={styled.send} onPress={handleResetPassword} >
            <Text style={styled.sendText}>Redefinir senha</Text>
         </TouchableOpacity>
         {isLoading && <ActivityIndicator size='large' color='#fff' />}
      </View>
   );
} 