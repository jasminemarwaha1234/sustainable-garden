import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { IconSymbol } from '@/components/ui/icon-symbol';

interface Props {
    plant: any;
    canvasWidth: number;
    canvasHeight: number;
    onUpdate: (updates: any) => void;
    onRemove: () => void;
}

const PLANT_SIZE = 80;

export function DraggablePlant({ plant, canvasWidth, canvasHeight, onUpdate, onRemove }: Props) {
    const translateX = useSharedValue(plant.x);
    const translateY = useSharedValue(plant.y);
    const startX = useSharedValue(0);
    const startY = useSharedValue(0);
    const scale = useSharedValue(plant.scale || 1);
    const savedScale = useSharedValue(plant.scale || 1);

    const panGesture = Gesture.Pan()
        .onBegin(() => {
            startX.value = translateX.value;
            startY.value = translateY.value;
        })
        .onUpdate((event) => {
            translateX.value = startX.value + event.translationX;
            translateY.value = startY.value + event.translationY;
        })
        .onEnd(() => {
            runOnJS(onUpdate)({
                x: translateX.value,
                y: translateY.value,
            });
        });

    const pinchGesture = Gesture.Pinch()
        .onUpdate((event) => {
            scale.value = savedScale.value * event.scale;
        })
        .onEnd(() => {
            savedScale.value = scale.value;
            runOnJS(onUpdate)({
                scale: scale.value,
            });
        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { scale: scale.value },
        ],
    }));

    const composed = Gesture.Simultaneous(panGesture, pinchGesture);

    return (
        <GestureDetector gesture={composed}>
            <Animated.View style={[styles.container, animatedStyle]}>
                <Image source={{ uri: plant.image }} style={styles.image} />
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={onRemove}
                >
                    <IconSymbol name="xmark.circle.fill" size={20} color="#FF5252" />
                </TouchableOpacity>
            </Animated.View>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: PLANT_SIZE,
        height: PLANT_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: PLANT_SIZE / 2,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.5)',
    },
    deleteButton: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
});
