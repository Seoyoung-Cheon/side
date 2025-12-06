import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, FONT_FAMILY } from '../utils/constants';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.welcomeSection}>
        <Text style={styles.title}>환영합니다!</Text>
        <Text style={styles.subtitle}>Shadcn UI 스타일로 구성된 React Native 앱입니다.</Text>
      </View>

      <Card style={styles.card}>
        <CardHeader>
          <CardTitle>메인 컬러</CardTitle>
          <CardDescription>프로젝트의 메인 컬러입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>{COLORS.primary}</Text>
          </View>
        </CardContent>
      </Card>

      <View style={styles.buttonSection}>
        <Text style={styles.sectionTitle}>Button Variants</Text>
        <View style={styles.buttonRow}>
          <Button variant="default" size="sm" style={styles.button}>
            Default
          </Button>
          <Button variant="outline" size="sm" style={styles.button}>
            Outline
          </Button>
        </View>
        <View style={styles.buttonRow}>
          <Button variant="secondary" size="sm" style={styles.button}>
            Secondary
          </Button>
          <Button variant="ghost" size="sm" style={styles.button}>
            Ghost
          </Button>
        </View>
        <View style={styles.buttonRow}>
          <Button variant="destructive" size="sm" style={styles.button}>
            Destructive
          </Button>
          <Button variant="link" size="sm" style={styles.button}>
            Link
          </Button>
        </View>
      </View>
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
    paddingBottom: SPACING.xl,
  },
  welcomeSection: {
    marginBottom: SPACING.lg,
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZES['3xl'],
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
    color: COLORS.foreground,
    fontFamily: FONT_FAMILY.default,
  },
  subtitle: {
    fontSize: FONT_SIZES.base,
    color: COLORS.mutedForeground,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.default,
  },
  card: {
    marginBottom: SPACING.lg,
  },
  colorBox: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  colorText: {
    color: COLORS.primaryForeground,
    fontSize: FONT_SIZES.base,
    fontWeight: '600',
    fontFamily: FONT_FAMILY.default,
  },
  buttonSection: {
    marginTop: SPACING.md,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '600',
    marginBottom: SPACING.md,
    color: COLORS.foreground,
    fontFamily: FONT_FAMILY.default,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  button: {
    flex: 1,
  },
});

