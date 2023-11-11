const Tab = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
    return (
        <li className="tab__item">
            <div className={`tab ${isActive ? 'active' : ''}`}>
                <h3 className="tab__label | heading-3 clr-neutral-000">{label} </h3><button className="tab__button | round clr-neutral-000" onClick={onClick} />
            </div>
        </li>
    );
};

export default Tab;