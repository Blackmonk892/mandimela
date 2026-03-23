import { useGroceryStore } from "@/store/grocery-store";
import { Text, View } from "react-native";

const Listherocard = () => {
  const { items } = useGroceryStore();

  const completedcount = items.filter((item) => item.purchased).length;
  const pendingCount = items.length - completedcount;
  const completionRate = items.length
    ? Math.round((completedcount / items.length) * 100)
    : 0;

  return (
    <View className="rounded-3xl bg-primary p-5">
      <Text className="text-sm font-semibold uppercase tracking-[1px] text-primary-foreground/70">
        Today
      </Text>

      <Text className="mt-1 text-3xl font-extrabold text-primary-foreground">
        Your Grocery Board
      </Text>

      <Text className="mt-1 text-sm text-primary-foreground/80">
        {pendingCount} pending · {completedcount} completed
      </Text>

      <View className="mt-4 overflow-hidden rounded-full bg-white/50">
        <View
          className="h-2 rounded-full bg-secondary"
          style={{ width: `${completionRate}%` }}
        />
      </View>
    </View>
  );
};

export default Listherocard;
