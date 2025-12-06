import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, Platform, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import { COLORS, FONT_SIZES, SPACING, RADIUS, FONT_FAMILY } from './src/utils/constants';

const Stack = createNativeStackNavigator();

// 커스텀 헤더 컴포넌트
const CustomHeader = ({ navigation }: { navigation: any }) => {
  const insets = useSafeAreaInsets();
  const isIOS = Platform.OS === 'ios';
  const [isHovered, setIsHovered] = React.useState(false);
  
  // 🔧 iOS 레이아웃 조절 포인트 1: 헤더 상단 패딩 (상태바 높이)
  const headerTopPadding = isIOS ? insets.top : 0;
  
  // 🔧 iOS 로고 위치 조절: 이 값을 변경하세요 (0~30 권장)
  // 값이 클수록 아래로 내려감
  const iosLogoTopOffset = -20;
  
  // iOS에서 로고의 실제 top 위치 = 상태바 높이 + 추가 여백
  const iosLogoTop = isIOS ? headerTopPadding + iosLogoTopOffset : undefined;
  
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  
  return (
    <View style={[
      headerStyles.header, 
      { paddingTop: headerTopPadding },
      !isIOS && headerStyles.headerAndroid
    ]}>
      <View style={[
        headerStyles.logoContainer,
        isIOS && headerStyles.logoContainerIOS,
        !isIOS && headerStyles.logoContainerAndroid,
        // iOS에서 동적으로 top 값 적용
        isIOS && { top: iosLogoTop }
      ]}>
        <Image 
          source={require('./assets/Logo2.png')} 
          style={headerStyles.logoImage}
          resizeMode="contain"
        />
      </View>
      
      <View style={headerStyles.spacer} />
      
      <Pressable 
        style={({ pressed }) => [
          headerStyles.loginButton,
          isIOS && headerStyles.loginButtonIOS,
          !isIOS && headerStyles.loginButtonAndroid,
        ]}
        onPress={handleLoginPress}
        onPressIn={() => setIsHovered(true)}
        onPressOut={() => setIsHovered(false)}
      >
        {({ pressed }) => (
          <View style={[
            headerStyles.loginButtonTop,
            isHovered && !pressed && headerStyles.loginButtonTopHovered,
            pressed && headerStyles.loginButtonTopPressed
          ]}>
            <Text style={headerStyles.loginButtonText}>로그인</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    // 🔧 헤더 높이 조절: minHeight 값
    // iOS는 상태바 높이가 추가되므로 실제 높이 = minHeight + insets.top
    // (80~120 권장)
    minHeight: 100,
    paddingBottom: 12,
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
  headerAndroid: {
    alignItems: 'flex-start',
    paddingTop: 8,
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
    margin: 0,
    marginLeft: -50,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1,
  },
  logoContainerIOS: {
    // 🔧 iOS 로고 위치는 CustomHeader 컴포넌트에서 동적으로 계산됨
    // iosLogoTopOffset 값을 조절하세요 (위쪽 코드 25줄 근처)
    // 🔧 iOS 로고 컨테이너 높이 조절
    // 헤더 높이에 맞춰 조절 (80~100 권장)
    height: 88,
  },
  logoContainerAndroid: {
    // Android 로고 위치: 아래로 조금 내림
    top: 8,
    height: 100,
  },
  logoImage: {
    width: 220,
    height: 120,
    maxHeight: 88,
  },
  spacer: {
    flex: 1,
  },
  loginButton: {
    marginRight: 16,
    borderRadius: 13, // 0.75em (17px * 0.75 ≈ 13px)
    backgroundColor: '#ffffff', // --button_outline_color (하얀색으로 변경)
    overflow: 'hidden',
  },
  loginButtonIOS: {
    marginTop: 0,
  },
  loginButtonAndroid: {
    marginTop: 16,
    alignSelf: 'flex-end',
  },
  loginButtonTop: {
    borderWidth: 2,
    borderColor: '#ffffff', // --button_outline_color
    borderRadius: 13, // 0.75em
    paddingHorizontal: 26, // 1.5em (17px * 1.5 ≈ 26px)
    paddingVertical: 13, // 0.75em (17px * 0.75 ≈ 13px)
    backgroundColor: '#e8e8e8', // --button_color
    transform: [{ translateY: -3 }], // -0.2em (17px * 0.2 ≈ 3.4px)
  },
  loginButtonTopHovered: {
    transform: [{ translateY: -6 }], // -0.33em (17px * 0.33 ≈ 5.6px)
  },
  loginButtonTopPressed: {
    transform: [{ translateY: 0 }], // active 상태
  },
  loginButtonText: {
    color: '#000000', // --button_outline_color
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY.default,
    textAlign: 'center',
  },
});

export default function App() {
  const [fontsLoaded] = useFonts({
    'LeeSeoyun': require('./assets/fonts/font.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: ({ navigation }) => <CustomHeader navigation={navigation} />,
            headerShown: true,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ 
              headerTitle: '로그인',
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

