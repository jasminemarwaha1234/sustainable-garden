import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PLANTS, CLIMATE_ZONES, GARDEN_SIZES } from '@/constants/plants';
import { SustainabilityScore } from '@/components/garden/SustainabilityScore';
import { PlantPicker } from '@/components/garden/PlantPicker';
import { GardenCanvas } from '@/components/garden/GardenCanvas';
import { ControlPanel } from '@/components/garden/ControlPanel';

export default function DesignerScreen() {
    const [selectedSize, setSelectedSize] = useState(GARDEN_SIZES[1]);
    const [selectedLocation, setSelectedLocation] = useState(CLIMATE_ZONES[0]);
    const [placedPlants, setPlacedPlants] = useState<any[]>([]);

    const filteredPlants = PLANTS.filter(p => p.nativeTo.includes(selectedLocation));

    const handleAddPlant = (plant: any) => {
        const newPlant = {
            ...plant,
            instanceId: Math.random().toString(36).substr(2, 9),
            x: 50,
            y: 50,
            scale: 1,
        };
        setPlacedPlants([...placedPlants, newPlant]);
    };

    const handleUpdatePlant = (instanceId: string, updates: any) => {
        setPlacedPlants(placedPlants.map(p =>
            p.instanceId === instanceId ? { ...p, ...updates } : p
        ));
    };

    const handleRemovePlant = (instanceId: string) => {
        setPlacedPlants(placedPlants.filter(p => p.instanceId !== instanceId));
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.header}>
                <ThemedText type="title">Garden Designer</ThemedText>
                <SustainabilityScore placedPlants={placedPlants} />
            </ThemedView>

            <ControlPanel
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
            />

            <View style={styles.content}>
                <GardenCanvas
                    size={selectedSize}
                    placedPlants={placedPlants}
                    onUpdatePlant={handleUpdatePlant}
                    onRemovePlant={handleRemovePlant}
                />

                <View style={styles.pickerContainer}>
                    <ThemedText type="subtitle" style={styles.pickerTitle}>Recommended for {selectedLocation}</ThemedText>
                    <PlantPicker plants={filteredPlants} onSelect={handleAddPlant} />
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    header: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    content: {
        flex: 1,
    },
    pickerContainer: {
        paddingVertical: 15,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    pickerTitle: {
        paddingHorizontal: 20,
        marginBottom: 10,
        fontSize: 16,
    },
});
