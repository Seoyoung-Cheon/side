import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator, Platform } from 'react-native';
import { COLORS, RADIUS, SPACING, FONT_SIZES, FONT_FAMILY } from '../../utils/constants';

export interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({
  children,
  onPress,
  variant = 'default',
  size = 'default',
  disabled = false,
  loading = false,
  style,
  textStyle,
}: ButtonProps) {
  const buttonStyles = [
    styles.base,
    styles[variant],
    styles[`size_${size}`],
    (disabled || loading) && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`text_${variant}`],
    styles[`textSize_${size}`],
    textStyle,
  ];

  return (
    <Pressable
      style={({ pressed }) => [
        ...buttonStyles,
        pressed && !disabled && !loading && styles.pressed,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? COLORS.foreground : COLORS.primaryForeground}
        />
      ) : (
        <Text style={textStyles}>{children}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.md,
    fontWeight: '500',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
  // Variants
  default: {
    backgroundColor: COLORS.primary,
  },
  destructive: {
    backgroundColor: COLORS.destructive,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
  },
  // Sizes
  size_default: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    minHeight: 40,
  },
  size_sm: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    minHeight: 32,
  },
  size_lg: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    minHeight: 48,
  },
  size_icon: {
    width: 40,
    height: 40,
    padding: 0,
  },
  // Text styles
  text: {
    fontWeight: '500',
    fontFamily: FONT_FAMILY.default,
  },
  text_default: {
    color: COLORS.primaryForeground,
  },
  text_destructive: {
    color: COLORS.destructiveForeground,
  },
  text_outline: {
    color: COLORS.foreground,
  },
  text_secondary: {
    color: COLORS.secondaryForeground,
  },
  text_ghost: {
    color: COLORS.foreground,
  },
  text_link: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  textSize_default: {
    fontSize: FONT_SIZES.base,
  },
  textSize_sm: {
    fontSize: FONT_SIZES.sm,
  },
  textSize_lg: {
    fontSize: FONT_SIZES.lg,
  },
  textSize_icon: {
    fontSize: FONT_SIZES.base,
  },
});

