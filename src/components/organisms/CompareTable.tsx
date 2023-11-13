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
        <div className="compare-table" style={style}>
            <div className="compare-table__title">{title}</div>
            {columns.map((column) => {
                return (
                    <div className="compare-table__column | text-center" key={column.columnTitle}>
                        <div className="compare-table__column-name">
                            {column.columnTitle}
                        </div>
                        <div className="compare-table__price-container">
                            <span className="compare-table__price">{column.price}</span>/month
                        </div>
                    </div>
                )
            })}
            {dataRows.map((row) => {
                return (
                    <>
                        <div className="compare-table__row-title">{row.rowTitle}</div>
                        {columns.map((column) => {
                            return (
                                <div className="justify-self-center">{row.rowData[column.columnTitle] ? 'CheckMark' : ''}</div>
                            );
                        })}
                    </>
                );
            })}
        </div>
    );
}

export default CompareTable