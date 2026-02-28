import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Plant } from '@/constants/plants';

interface Props {
    placedPlants: any[];
}

export function SustainabilityScore({ placedPlants }: Props) {
    const score = placedPlants.reduce((acc, p) => acc + (p.sustainabilityBoost || 0), 0);
    const cappedScore = Math.min(score, 100);

    const getScoreColor = () => {
        if (cappedScore > 75) return '#4CAF50';
        if (cappedScore > 40) return '#FFEB3B';
        return '#FF5252';
    };

    return (
        <View style={styles.container}>
            <View style={[styles.badge, { backgroundColor: getScoreColor() }]}>
                <ThemedText style={styles.scoreText}>{cappedScore}</ThemedText>
            </View>
            <ThemedText style={styles.label}>Eco Score</ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    badge: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    scoreText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    label: {
        fontSize: 12,
        marginTop: 4,
        opacity: 0.7,
    },
});
