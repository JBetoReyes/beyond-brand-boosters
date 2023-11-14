import { ComparableTableColumn } from "./CompareTable";

const CompareTableHeader = <C extends string>({ column }: { column: ComparableTableColumn<C> }) => {
    return (
        <div className="compare-table__column | text-center margin-block-end-11" key={column.columnTitle}>
            <div className="compare-table__column-name">
                {column.columnTitle}
            </div>
            <div className="compare-table__price-container">
                <span className="compare-table__price | ff-accent fs-600">${column.price}</span>/month
            </div>
        </div>
    )
};

export default CompareTableHeader;