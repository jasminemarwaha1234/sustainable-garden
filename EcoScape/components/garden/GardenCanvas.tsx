import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraggablePlant } from './DraggablePlant';

interface Props {
    size: { width: number; height: number };
    placedPlants: any[];
    onUpdatePlant: (id: string, updates: any) => void;
    onRemovePlant: (id: string) => void;
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const CANVAS_PADDING = 20;
const CANVAS_WIDTH = SCREEN_WIDTH - (CANVAS_PADDING * 2);

export function GardenCanvas({ size, placedPlants, onUpdatePlant, onRemovePlant }: Props) {
    const scale = CANVAS_WIDTH / size.width;
    const canvasHeight = size.height * scale;

    return (
        <GestureHandlerRootView style={styles.root}>
            <View style={[styles.canvasContainer, { height: canvasHeight }]}>
                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop' }}
                    style={styles.background}
                    imageStyle={styles.backgroundImage}
                >
                    {placedPlants.map((plant) => (
                        <DraggablePlant
                            key={plant.instanceId}
                            plant={plant}
                            canvasWidth={CANVAS_WIDTH}
                            canvasHeight={canvasHeight}
                            onUpdate={(updates) => onUpdatePlant(plant.instanceId, updates)}
                            onRemove={() => onRemovePlant(plant.instanceId)}
                        />
                    ))}
                </ImageBackground>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginHorizontal: CANVAS_PADDING,
    },
    canvasContainer: {
        borderRadius: 24,
        overflow: 'hidden',
        backgroundColor: '#2e7d32',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    background: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.4,
    },
});
