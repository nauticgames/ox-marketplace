import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Tabs from "../components/Account/Inventory/Tabs";

const useInventoryTab = () => {
  const router = useRouter();
  const [tabComponent, setTabComponent] = useState(null);

  useEffect(() => {
    let mounted = true;

    const unsubscribe = () => {
      const { component } = Tabs.find((tab) =>
        router.pathname.includes(tab.name)
      );

      setTabComponent(component);
    };

    if (mounted) unsubscribe();

    return () => {
      mounted = false;
    };
  }, [router.pathname]);

  return tabComponent;
};

export default useInventoryTab;
