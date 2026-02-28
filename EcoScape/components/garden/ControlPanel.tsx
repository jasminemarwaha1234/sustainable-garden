import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { CLIMATE_ZONES, GARDEN_SIZES } from '@/constants/plants';

interface Props {
    selectedSize: any;
    setSelectedSize: (size: any) => void;
    selectedLocation: string;
    setSelectedLocation: (loc: string) => void;
}

export function ControlPanel({ selectedSize, setSelectedSize, selectedLocation, setSelectedLocation }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <ThemedText style={styles.label}>Garden Size</ThemedText>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipContainer}>
                    {GARDEN_SIZES.map((size) => (
                        <TouchableOpacity
                            key={size.label}
                            style={[styles.chip, selectedSize.label === size.label && styles.selectedChip]}
                            onPress={() => setSelectedSize(size)}
                        >
                            <ThemedText style={[styles.chipText, selectedSize.label === size.label && styles.selectedChipText]}>
                                {size.label}
                            </ThemedText>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.section}>
                <ThemedText style={styles.label}>Location</ThemedText>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipContainer}>
                    {CLIMATE_ZONES.map((loc) => (
                        <TouchableOpacity
                            key={loc}
                            style={[styles.chip, selectedLocation === loc && styles.selectedChip]}
                            onPress={() => setSelectedLocation(loc)}
                        >
                            <ThemedText style={[styles.chipText, selectedLocation === loc && styles.selectedChipText]}>
                                {loc}
                            </ThemedText>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 20,
        gap: 16,
    },
    section: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        opacity: 0.6,
    },
    chipContainer: {
        gap: 8,
    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderWidth: 1,
        borderColor: 'transparent',
    },
    selectedChip: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    chipText: {
        fontSize: 13,
    },
    selectedChipText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
