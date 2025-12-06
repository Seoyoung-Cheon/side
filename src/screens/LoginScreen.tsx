import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, FONT_FAMILY } from '../utils/constants';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function LoginScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card style={styles.card}>
        <CardHeader>
          <CardTitle>로그인</CardTitle>
          <CardDescription>계정에 로그인하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <Text style={styles.placeholderText}>로그인 폼이 여기에 표시됩니다</Text>
        </CardContent>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.md,
    paddingTop: SPACING.xl,
  },
  card: {
    marginBottom: SPACING.lg,
  },
  placeholderText: {
    fontSize: FONT_SIZES.base,
    color: COLORS.mutedForeground,
    textAlign: 'center',
    padding: SPACING.lg,
    fontFamily: FONT_FAMILY.default,
  },
});

