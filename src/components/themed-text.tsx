import { StyleSheet, Text, TextProps } from "react-native";

type ThemedTextProps = TextProps & {
  type?: "title" | "subtitle" | "default" | "link";
};

export function ThemedText({
  type = "default",
  style,
  ...props
}: ThemedTextProps) {
  return (
    <Text
      {...props}
      style={[
        type === "title" && styles.title,
        type === "subtitle" && styles.subtitle,
        type === "link" && styles.link,
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
