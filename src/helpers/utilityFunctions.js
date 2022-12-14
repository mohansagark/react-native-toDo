import Toast from 'react-native-toast-message';

export const showSuccess = message => {
  Toast.show({
    type: 'success',
    text1: message ?? 'Toast message',
    text2: '',
  });
};

export const showError = message => {
  Toast.show({
    type: 'error',
    text1: message ?? 'Toast message',
    text2: '',
  });
};

export const showInfo = message => {
  Toast.show({
    type: 'info',
    text1: message ?? 'Toast message',
    text2: '',
  });
};
