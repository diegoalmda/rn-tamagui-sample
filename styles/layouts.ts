import { styled, SizableText, H1, YStack } from 'tamagui';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

const Container = styled(YStack, {
  flex: 1,
  paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + 36 : 36,
  paddingHorizontal: 24,
});

const Main = styled(YStack, {
  flex: 1,
  justifyContent: 'space-between',
  maxWidth: 960,
});

const Title = styled(H1, {
  color: '#000',
  size: '$12',
  fontWeight: 'bold'
});

const Subtitle = styled(SizableText, {
  color: '#38434D',
  size: '$9',
});


export { Container, Main, Title, Subtitle };
