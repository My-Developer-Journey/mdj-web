export interface SelectBoxProps<T> {
    label?: string;
    error?: string;
    items: T[]; // danh sách dữ liệu
    selectedItems: T[];
    setSelectedItems: (items: T[]) => void;
    wrapperClassName?: string;
    className?: string;
    placeholder?: string;
    maxSelected?: number;
    labelKey: keyof T; // key của field hiển thị
    valueKey: keyof T; // key định danh duy nhất
}