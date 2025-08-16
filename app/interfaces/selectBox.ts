export interface SelectBoxProps<T> {
    label?: string;
    error?: string;
    items: T[];
    selectedItems: T[];
    setSelectedItems: (items: T[]) => void;
    wrapperClassName?: string;
    className?: string;
    placeholder?: string;
    maxSelected?: number;
    labelKey: keyof T;
    valueKey: keyof T;
}