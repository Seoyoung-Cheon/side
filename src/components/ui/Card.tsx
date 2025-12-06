import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS, RADIUS, SPACING, SHADOWS, FONT_SIZES, FONT_FAMILY } from '../../utils/constants';

export interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'outline';
}

export function Card({ children, style, variant = 'default' }: CardProps) {
  return (
    <View style={[styles.card, styles[variant], style]}>
      {children}
    </View>
  );
}

export function CardHeader({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.header, style]}>{children}</View>;
}

export function CardTitle({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export function CardDescription({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  return <Text style={[styles.description, style]}>{children}</Text>;
}

export function CardContent({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.content, style]}>{children}</View>;
}

export function CardFooter({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.footer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.card,
    ...SHADOWS.sm,
  },
  default: {
    borderWidth: 0,
  },
  outline: {
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  header: {
    padding: SPACING.md,
    paddingBottom: SPACING.sm,
  },
  title: {
    fontSize: FONT_SIZES.xl,
    fontWeight: '600',
    color: COLORS.cardForeground,
    marginBottom: SPACING.xs,
    fontFamily: FONT_FAMILY.default,
  },
  description: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.mutedForeground,
    fontFamily: FONT_FAMILY.default,
  },
  content: {
    padding: SPACING.md,
    paddingTop: 0,
  },
  footer: {
    padding: SPACING.md,
    paddingTop: SPACING.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

