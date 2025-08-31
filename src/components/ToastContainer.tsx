/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

type Props = {
  toasts: { id: number; message: string; type: 'success' | 'error' | 'info' }[];
};

const ToastContainer: React.FC<Props> = ({ toasts }) => {
  return (
    <View style={styles.container} pointerEvents="none">
      {toasts
        .slice()
        .reverse()
        .map((toast) => (
          <ToastItem key={toast.id} {...toast} />
        ))}
    </View>
  );
};

const ToastItem: React.FC<{
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}> = ({ message, type }) => {
  const translateY = useRef(new Animated.Value(-20)).current;

  const toastColors: Record<'success' | 'error' | 'info', string> = {
    success: '#77DD77',
    error: '#FF6961',
    info: '#60b6d6ff',
  };

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      Animated.timing(translateY, {
        toValue: -20,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        {
          transform: [{ translateY }],
        },
      ]}
    >
      <View style={styles.toast}>
        <View
          style={[styles.toastBorder, { backgroundColor: toastColors[type] }]}
        />
        <Text style={styles.text}>{message}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
  },
  toastContainer: {
    minWidth: 300,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  toast: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    minHeight: 50,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 12,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginVertical: 5,
    minWidth: '70%',
  },
  toastBorder: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 4 },
  text: { color: '#000', fontWeight: '600' },
});

export default ToastContainer;
