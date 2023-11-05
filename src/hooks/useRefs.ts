"use client";

import React from "react";

export const useRefs = <T>() => {
  const refs = React.useRef<Record<string, T | null>>({});

  const setRef = (key: string, element: T | null) => {
    refs.current[key] = element;
  };

  return { refs: refs.current, setRef };
};
