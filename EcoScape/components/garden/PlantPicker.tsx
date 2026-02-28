import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Plant } from '@/constants/plants';

interface Props {
    plants: Plant[];
    onSelect: (plant: Plant) => void;
}

export function PlantPicker({ plants, onSelect }: Props) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {plants.map((plant) => (
                <TouchableOpacity
                    key={plant.id}
                    style={styles.card}
                    onPress={() => onSelect(plant)}
                >
                    <Image source={{ uri: plant.image }} style={styles.image} />
                    <View style={styles.info}>
                        <ThemedText style={styles.name} numberOfLines={1}>{plant.name}</ThemedText>
                        <ThemedText style={styles.boost}>+{plant.sustainabilityBoost} pts</ThemedText>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        gap: 12,
    },
    card: {
        width: 120,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    image: {
        width: '120%',
        height: 100,
        resizeMode: 'cover',
    },
    info: {
        padding: 8,
    },
    name: {
        fontSize: 13,
        fontWeight: '600',
    },
    boost: {
        fontSize: 11,
        color: '#4CAF50',
        fontWeight: 'bold',
        marginTop: 2,
    },
});
