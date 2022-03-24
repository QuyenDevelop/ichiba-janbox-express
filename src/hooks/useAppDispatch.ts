import { useDispatch } from "react-redux";
import { AppDispatch } from "./../redux/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
