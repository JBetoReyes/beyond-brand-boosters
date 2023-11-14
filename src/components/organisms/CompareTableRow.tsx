import { ComparableTableColumn, CompareTableRow } from "./CompareTable";

const compareTableRow = <C extends string>({ row, columns, isLastRow = false }: { row: CompareTableRow<C>, columns: ComparableTableColumn<C>[] } & { isLastRow: boolean }) => {
    const checkMark = (<svg className="circle-checkmark clr-brand-accent-400" viewBox="0 0 100 100">
        <use xlinkHref="#circle-checkmark"></use>
    </svg>);
    const emptyCell = (<div className="empty-cell"></div>);
    return (
        <>
            <div className={`compare-table__row-title | ${isLastRow ? '' : 'underline'}`}>{row.rowTitle}</div>
            {columns.map((column) => {
                return (
                    <div className={`compare-table__cell ${isLastRow ? '' : 'underline'}`}>{row.rowData[column.columnTitle] ? checkMark : emptyCell}</div>
                );
            })}
        </>
    );
}

export default compareTableRow;