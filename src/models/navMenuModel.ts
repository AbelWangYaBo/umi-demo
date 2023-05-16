import { post } from "@/utils/request";
import { useState, useCallback } from "react";

export default function useAuthModel() {
  const [menus, setMenus] = useState({});

  const getMenu = useCallback(async ({ username, password }) => {
    setMenus([])
  }, [])


  return {
    menus,
    getMenu,
  }
}
