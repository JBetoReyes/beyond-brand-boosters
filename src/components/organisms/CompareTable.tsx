import CompareTableHeader from "./CompareTableHeader";
import CompareTableRow from "./CompareTableRow";

export type ComparableTableColumn<C extends string> = {
    columnTitle: C;
    price: number;
}

export type CompareTableRow<C extends string> = {
    rowTitle: string;
    rowData: { [key in C]: boolean };

};

export type CompareTableProps<C extends string> = {
    title: string;
    columns: ComparableTableColumn<C>[];
    dataRows: CompareTableRow<C>[];
};

const CompareTable = <C extends string>({ title, columns, dataRows, style }: CompareTableProps<C> & { style: React.CSSProperties }) => {
    return (
        <div className="compare-table | scrollbar" style={style}>
            <div className="compare-table__layout">
                <h2 className="compare-table__title | heading-2 margin-block-end-11">{title}</h2>
                {columns.map((column) => {
                    return (
                        <CompareTableHeader column={column} key={column.columnTitle} />
                    )
                })}
                {dataRows.map((row, index) => {
                    const isLastRow = index === dataRows.length - 1;
                    return (
                        <CompareTableRow row={row} columns={columns} isLastRow={isLastRow} key={row.rowTitle} />
                    );
                })}
            </div>
        </div>
    );
}

export default CompareTable