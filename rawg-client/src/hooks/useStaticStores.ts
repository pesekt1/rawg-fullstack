import stores from "../data/stores";

const useStaticStores = () => {
  return { data: stores, error: "", isLoading: false };
};

export default useStaticStores;
