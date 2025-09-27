import { useEffect, useRef, useState } from "react";

interface Column<T> {
    key: keyof T | string;
    label: string;
    render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    batchSize?: number;
}

function Table<T extends object>({ data, columns, batchSize = 10 }: TableProps<T>) {
    const [visibleData, setVisibleData] = useState<T[]>(data.slice(0, batchSize));
    const [page, setPage] = useState(1);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && visibleData.length < data.length) {
                const nextPage = page + 1;
                setVisibleData(data.slice(0, nextPage * batchSize));
                setPage(nextPage);
            }
        });
        if (loadMoreRef.current) observer.observe(loadMoreRef.current);
        return () => observer.disconnect();
    }, [page, visibleData, data, batchSize]);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border">
                <thead className="bg-black text-white">
                    <tr>
                        {columns.map((col) => (
                            <th key={String(col.key)} className="px-4 py-2 border">
                                {col.label}
                            </th>
                        ))}
                        <th className="px-4 py-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            {columns.map((col) => (
                                <td key={String(col.key)} className="px-4 py-2 border">
                                    {col.render ? col.render(row) : (row[col.key as keyof T] as React.ReactNode)}
                                </td>
                            ))}
                            <td className="px-4 py-2 border">✎ 🗑️</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div ref={loadMoreRef} className="h-10"></div>
        </div>
    );
}

export default Table;
