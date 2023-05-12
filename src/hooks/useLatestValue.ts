import { DependencyList, useLayoutEffect, useRef } from "react";
import { useSharedValue } from "react-native-reanimated";

export function useLatestValue<T>(value: T, dependencies: DependencyList = [value]) {
  const valueRef = useRef<T>(value);

  useLayoutEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return valueRef;
}

export function useLatestSharedValue<T>(value: T, dependencies: DependencyList = [value]) {
  const valueRef = useSharedValue<T>(value);

  useLayoutEffect(() => {
    if (valueRef.value !== value) {
      valueRef.value = value;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return valueRef;
}
