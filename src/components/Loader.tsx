import React from 'react';
import { View, Modal, ActivityIndicator, Text } from 'react-native';

import { styles } from './Loading.style';

interface LoadingIndicatorProps {
    loading: boolean;
    animationType: "fade" | "none" | "slide" | undefined;
    indicatorColor: string;
    loadingText: string;
  }

const LoadingIndicator: React.FC<LoadingIndicatorProps> = (props) => {
    const {
        loading,
        animationType = 'fade',
        indicatorColor = '#BF2F1A',
        loadingText = 'Loading...',
    } = props

    return (
        <Modal transparent animationType={animationType} visible={loading}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator color={indicatorColor} animating={loading} size="large" />
                    <Text style={styles.loadingText}>
                        {loadingText}
                    </Text>
                </View>
            </View>
        </Modal>
    )
}

export default LoadingIndicator;


