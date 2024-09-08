import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function giaiPhuongTrinhBacHai(a: number, b: number, c: number): string {
    if (a === 0) {
        if (b === 0) {
            return c === 0 ? 'Vô số nghiệm' : 'Vô nghiệm';
        } else {
            return `Một nghiệm: ${-c / b}`;
        }
    }

    const delta = b * b - 4 * a * c;
    if (delta > 0) {
        const nghiem1 = (-b + Math.sqrt(delta)) / (2 * a);
        const nghiem2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Hai nghiệm: ${nghiem1}, ${nghiem2}`;
    } else if (delta === 0) {
        const nghiem = -b / (2 * a);
        return `Một nghiệm kép: ${nghiem}`;
    } else {
        return 'Vô nghiệm';
    }
}

export default function App() {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [ketQua, setKetQua] = useState<string>('');

  const xuLyGiai = () => {
    setKetQua(giaiPhuongTrinhBacHai(a, b, c));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setA(Number(text))}
        value={String(a)}
        placeholder="Nhập a"
      />
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setB(Number(text))}
        value={String(b)}
        placeholder="Nhập b"
      />
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setC(Number(text))}
        value={String(c)}
        placeholder="Nhập c"
      />
      <Button 
        title="Giải"
        onPress={xuLyGiai}
      />
      <Text>{`Kết quả: ${ketQua}`}</Text>
    </View>
  );
}